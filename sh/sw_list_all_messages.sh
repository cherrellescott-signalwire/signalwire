#!/bin/bash
SW_SPACE_URL="example.signalwire.com"
#
# List your projects in the declare below
#
sw_list_all_messages () {

    if [ $(dpkg -l | grep -c jq) -eq 0 ]; then
	apt-get install -y jq curl
    fi

    while [ "${1:-}" != "" ]; do
	case ${1:-} in
	    (-h|--help)	printf "\n\n\nThis script can be used to retrieve some or all messages, their status, and other info, from multiple projects.\n"
			printf "Requests beyond a thousand messages return in increments of a thousand\n"
			printf "So results are returned in batches like 1 through 999, 1000, 2000, 3000... etc...\n"
			printf "If choosing 1000, you'll be prompted for how may pages of 1000 you want returned.\n"
			printf "This script will output 2 csv files, a full csv of the many messages retrieved, and a csv with the status you specify.\n"
			printf "Scripts can be automated with:\n"
			printf "\nSyntax:\n"
			printf "\nbash messages.sh --many=[1|2..|1000] --pages=[0|1|2..|all] --info=[status|all] \\ \n"
			printf "\t     	--status=[sent|failed|delivered|undelivered] --debug\n\n"
			printf "Exmples:\n"
			printf "bash messages.sh --many=200              # 200 results, all info csv, failure status csv\n"
			printf "bash messages.sh --many=10 --pages=20    # 200 results, all info csv, failure status csv\n"
			printf "bash messages.sh --many=1 --pages=200    # 200 results, all info csv, failure status csv\n"
			printf "bash messages.sh --many=1000 --pages=2 --info=status  # 2000 results,  info csv, failure status csv\n"
			exit;;
	    (--many=*) MANY=${1:-}; MANY=${MANY:7};;
	    (--pages=*) PAGES=${1:-}; PAGES=${PAGES:8};;
	    (--info=*) INFO=${1:-}; INFO=${INFO:7};;
	    (--status=*) STATUS=${1:-}; STATUS=${STATUS:9};;
	    (--debug) DEBUG=1;;
	    (*?) printf "Incorrect parameters. See --help\n"; exit;;
	esac
	shift
    done

    # setup list for one or multiple pojects
    declare -A projects=(

        # list all projects like this:   [project_key]=api_token
        [AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE]=PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        [VVVVVVVV-WWWW-XXXX-YYYY-ZZZZZZZZZZZZ]=PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    )

    declare -A files=()

    printf "\nThese next few questions can be automated. See --help\n\n"

    if [ ! ${MANY:-} ]; then
	read -p "How many message to retrieve per page? (1000 max) [1000]: " MANY
	MANY=${MANY:-1000}
    fi

    if [ ${MANY:-} -gt 1000 ]; then
	echo "ERROR:  --many must be between 1 and 1000. Please try again..."
	exit
    fi

    if [ ! ${PAGES:-} ]; then
	if [ ${MANY:-} -eq 1000 ]; then
	    read -p "Pages count from 0. How many pages would you like to retrieve? (0 thru all) [all]: " PAGES
	    PAGES=${PAGES:-all}
	fi
    fi


    if [ ! ${INFO:-} ]; then
	read -p "In the complete CSV, do you want (all) the info? or just the (status)? [all]: " INFO
	INFO=${INFO:-all}
    fi

    if [[ ! ${INFO:-} =~ status|all ]]; then
	echo 'ERROR:  --info must be either status or all'
	exit
    fi

    if [ ! ${STATUS:-} ]; then
	read -p "What status (sent|failed|delivered|undelivered) would you like to parse for in status CSV? [failed]: " STATUS
	STATUS=${STATUS:-failed}
    fi

    if [[ ! ${STATUS:-} =~ sent|failed|delivered|undelivered ]]; then
	echo 'ERROR:  --status must be either sent, failed, delivered, undelivered'
	exit
    fi

    # setup up the project, token, and file values for each loop
    for project in "${!projects[@]}"; do
	SW_PROJ_KEY=${project:-}
	SW_API_TOKEN=${projects[$project]}
	OUTFILE=/tmp/sw_project_messages_$SW_PROJ_KEY.csv
	files[$SW_PROJ_KEY]=$OUTFILE
	sw_list_all_messages_get
    done
    sw_list_all_messages_print
}

sw_list_all_messages_get () {

    printf "\nplease wait, getting pages... larger the batch, longer the wait...\n\n"

    # do an initial curl request to get paging info, and send back 1000 numbers per whack
    FIRST_PAGE=$(curl "https://$SW_SPACE_URL/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/Messages.json?PageSize=${MANY:-}" \
		      -X GET -u "$SW_PROJ_KEY:$SW_API_TOKEN")

    if [ ${DEBUG:-} ]; then printf 'A> First Page: %s\n' "$FIRST_PAGE"; fi

    # use jq to parse for next page
    NPU=$(printf '%s' "$FIRST_PAGE" | jq --raw-output '.next_page_uri')
    if [ ${DEBUG:-} ]; then printf 'B> Next Page: %s\n' "$NPU"; fi

    # get the page number
    PAGE=$(printf '%s' "$FIRST_PAGE" | jq --raw-output '.page')
    printf '\ndownloaded page %d\n\n' "$PAGE"

    if [ ${INFO:-} == status ]; then
	FILTER="\(.sid),\(.status)"
    elif [ ${INFO:-} == allnobody ]; then
	FILTER="\(.account_sid),\(.api_version),\(.body),\(.num_segments),\(.num_media),\(.date_created),\(.date_sent),\(.date_updated),\(.direction),\(.error_code),\(.error_message),\(.from),\(.price),\(.price_unit),\(.sid),\(.status),\(.to),\(.uri),\(.subresource_uris),\(.messaging_service_sid)"
    else
	FILTER="\(.account_sid),\(.api_version),\(.body),\(.num_segments),\(.num_media),\(.date_created),\(.date_sent),\(.date_updated),\(.direction),\(.error_code),\(.error_message),\(.from),\(.price),\(.price_unit),\(.sid),\(.status),\(.to),\(.uri),\(.subresource_uris),\(.messaging_service_sid)"
    fi

    # start building list of phone numbers and associated sids, specify optional list limiter
    MESSAGE_LIST=$(printf '%s' "$FIRST_PAGE" | jq --raw-output '.messages[] | "'$FILTER'"')
    if [ ${DEBUG:-} ]; then printf 'C> Phone List: %s\n' "$MESSAGE_LIST"; fi

    # Loop on "next_page_uri" var until we a hit page value of null
    if [ ${MANY:-} -eq 1000 ] || [ ${PAGES:-} -gt 0 ]; then
	while [ "${NPU:-}" != null ]; do
	    if [ ! ${PAGES:-} == all ]; then
		if [ ${PAGE:-} -ge ${PAGES:-} ]; then
	            break
		fi
	    fi

	    NEXT_PAGE=$(curl "https://$SW_SPACE_URL$NPU" -X GET -u "$SW_PROJ_KEY:$SW_API_TOKEN")
	    if [ ${DEBUG:-} ]; then printf 'E> Next Page: %s\n' "$NEXT_PAGE"; fi

	    NPU="$(printf '%s' "$NEXT_PAGE" | jq --raw-output '. | .next_page_uri')"
	    if [ ${DEBUG:-} ]; then printf 'D> Next Page: %s\n' "$NPU"; fi

	    # get next list of phone numbers and sids
	    NEXT_LIST=$(printf '%s' "$NEXT_PAGE" | jq --raw-output '.messages[] | "'$FILTER'"')
	    if [ ${DEBUG:-} ]; then printf 'E> Next List: %s\n' "$NEXT_LIST"; fi

	    # continue building complete phone and sid list
	    MESSAGE_LIST="$MESSAGE_LIST"$'\n'"$NEXT_LIST"
	    if [ ${DEBUG:-} ]; then printf 'F> appended phone list is now: %s\n' "$MESSAGE_LIST"; fi

	    # Update loop variables for subsequent pages
	    NPU="$NPU"

	    # get the next page number
	    PAGE=$(printf '%s' "$NEXT_PAGE" | jq --raw-output '.page')
	    printf "\ndownloaded page $PAGE\n\n"
	done
    fi

    # trim final newline for proper counting
    MESSAGE_LIST=${MESSAGE_LIST::-1}

    # check the cli printed count against your project dashboard, i.e. the number in parenthesis like "PHONE NUMBERS (144)"
    if [ ${DEBUG:-} ]; then
	PROJECT_TOTAL=$(printf '%s\n' "$MESSAGE_LIST" | wc -l)
	printf 'G> Total Phone Number count from project: %d\n' "$PROJECT_TOTAL"
    fi

    if [ ${DEBUG:-} ]; then printf "I> end picker\n"; fi

    # dump list into temp file
    printf "%s\n" "$MESSAGE_LIST" > $OUTFILE
    printf "%s\n" "$MESSAGE_LIST" | grep $STATUS > ${OUTFILE/.csv/_$STATUS.csv}
}

sw_list_all_messages_print () {
    for file in "${!files[@]}"; do
	printf "\n$(cat ${files[$file]} | wc -l) total sms for poject in csv located located here:\n${files[$file]}\n"
	printf "\n$(cat ${files[$file]} | grep failed | wc -l) total failed sms for poject in csv located located here:\n${files[$file]/.csv/_$STATUS.csv}\n"
	#if [ $DEBUG ]; then cat ${files[$file]}; fi
	#if [ $DEBUG ]; then cat ${files[$file]/.csv/_$STATUS.csv}; fi
    done
}
sw_list_all_messages $@
exit 0
