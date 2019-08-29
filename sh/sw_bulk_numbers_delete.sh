#!/bin/bash
SW_SPACE_URL="example.signalwire.com"
SW_PROJ_KEY="AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE"
SW_TOKEN="PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

if [ "${SW_SPACE_URL:-}" == "example.signalwire.com" ] || \
   [ "${SW_PROJ_KEY:-}" == "AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE" ] || \
   [ "${SW_TOKEN:-}" == "PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ]; then
    printf "ERROR: Please change the SW_SPACE_URL, SW_PROJ_KEY, and SW_TOKEN variables with your actual info\n"
    exit
fi

sw_bulk_numbers_delete_get_list () {

    printf "\nplease wait, getting pages... larger the batch, longer the wait...\n\n"

    # do an initial curl request to get paging info, and send back 1000 numbers per whack
    FIRST_PAGE=$(curl "https://$SW_SPACE_URL/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/IncomingPhoneNumbers.json?PageSize=${MANY:-50}" \
		      -X GET -u "$SW_PROJ_KEY:$SW_TOKEN")
    if [ ${DEBUG:-} ]; then printf 'A> First Page: %s\n' "$FIRST_PAGE"; fi

    # use jq to parse for next page
    NPU=$(printf '%s' "$FIRST_PAGE" | jq --raw-output '.next_page_uri')
    if [ ${DEBUG:-} ]; then printf 'B> Next Page: %s\n' "$NPU"; fi

    # get the page number
    PAGE=$(printf '%s' "$FIRST_PAGE" | jq --raw-output '.page')
    printf '\ndownloaded page %d\n\n' "$PAGE"

    # start building list of phone numbers and associated sids, specify optional list limiter
    PHONE_LIST=$(printf '%s' "$FIRST_PAGE" | jq --raw-output '.incoming_phone_numbers[] | "\(.phone_number) \(.sid)"')
    if [ ${DEBUG:-} ]; then printf 'C> Phone List: %s\n' "$PHONE_LIST"; fi

    # Loop on "next_page_uri" var until we a hit page value of null
    while [ "${NPU:-}" != null ]; do
	NEXT_PAGE=$(curl "https://$SW_SPACE_URL$NPU" -X GET -u "$SW_PROJ_KEY:$SW_TOKEN")
	if [ ${DEBUG:-} ]; then printf 'E> Next Page: %s\n' "$NEXT_PAGE"; fi

	NPU="$(printf '%s' "$NEXT_PAGE" | jq --raw-output '. | .next_page_uri')"
	if [ ${DEBUG:-} ]; then printf 'D> Next Page: %s\n' "$NPU"; fi

	# get next list of phone numbers and sids
	NEXT_LIST=$(printf '%s' "$NEXT_PAGE" | jq --raw-output '.incoming_phone_numbers[] | "\(.phone_number) \(.sid)"')
	if [ ${DEBUG:-} ]; then printf 'E> Next List: %s\n' "$NEXT_LIST"; fi

	# continue building complete phone and sid list
	PHONE_LIST="$PHONE_LIST"$'\n'"$NEXT_LIST"
	if [ ${DEBUG:-} ]; then printf 'F> appended phone list is now: %s\n' "$PHONE_LIST"; fi

	# Update loop variables for subsequent pages
	NPU="$NPU"

	# get the next page number
	PAGE=$(printf '%s' "$NEXT_PAGE" | jq --raw-output '.page')
	printf "\ndownloaded page $PAGE\n\n"
    done

    # check the cli printed count against your project dashboard, i.e. the number in parenthesis like "PHONE NUMBERS (144)"
    if [ ${DEBUG:-} ]; then
	PROJECT_TOTAL=$(printf '%s\n' "$PHONE_LIST" | wc -l)
	printf 'G> Total Phone Number count from project: %d\n' "$PROJECT_TOTAL"
    fi
}

sw_bulk_numbers_delete_pick_list () {
    # get complete list
    sw_bulk_numbers_delete_get_list

    # loop over phone list, build a pick list from the area codes that match
    COUNT=1
    while read PICK; do
        for NUM in "${NUMS[@]}"; do
	if [ ${DEBUG:-} ]; then printf '%d Current Pick: %s\n' "$COUNT" "$PICK"; fi
	    if [[ $PICK = *+1$NUM* ]]; then
		PICK_LIST+="$PICK"$'\n'
		if [ ${DEBUG:-} ]; then printf 'H> Picked: %d %s\n' "$COUNT" "$PICK"; fi
		COUNT=$((COUNT+1))
		break
	    fi
	done
    done < <(printf '%s' "$PHONE_LIST")

    if [ ${DEBUG:-} ]; then TDEL=$(printf "$PICK_LIST" | wc -l); printf 'Total Pick List: %s\n' "$TDEL"; fi

    # update list to what we picked
    PHONE_LIST=${PICK_LIST:-}

    # trim final newline, or no match found
    if [ "$PHONE_LIST" != "" ]; then
	PHONE_LIST=${PHONE_LIST::-1}
    else
	printf "no number matching that area code was found in project\n"
	exit
    fi

    if [ ${DEBUG:-} ]; then printf "I> end picker\n"; fi

}

sw_bulk_numbers_delete () {
    while [ "${1:-}" != "" ]; do
	case ${1:-} in
	    (-h|--help) printf "\nSyntax:\n"
			printf "$0 --action=dry|delete --many=[1 thru 1000] --pick=all|800,888 [--debug] [--not=+18005551212,+18333451234...]\n\n";
			printf "\nexamples:\n\n"
			printf "do a dry run, get 100 per page from signalwire, delete everything in 202 & 303 area codes, but not these two numbers:\n\n"
			printf "    $0 --action=dry --many=100 --pick=202 --not=+12025551212,+12023451234\n\n";
			printf "if the resulting count is correct, do a real delete on that:\n\n"
			printf "    $0 --action=delete --many=100 --pick=202,303 --not=+12025551212,+130323451234\n\n";
			printf "if over a thousands numbers, delete every possible number:\n\n"
			printf "    $0 --action=delete --many=1000 --pick=all\n\n";

			exit;;
	    (--action=*) ACTION=${1:-}; ACTION=${ACTION:9};;
	    (--pick=*) PICK=${1:-}; PICK=${PICK:7};;
	    (--debug) DEBUG=1;;
	    (--many=*) MANY=${1:-}; MANY=${MANY:7};;
	    (--not=*) NOT=${1:-}; NOT=${NOT:6};;
	    (*?) printf "Incorrect parameters. See --help\n"; exit;;
	esac
	shift
    done

    printf "\nThese next few questions can be automated. See --help\n\n"

    # prompt for --action if not specified
    if [ ! ${ACTION:-} ]; then
	read -p "Do you want to \"delete\" or just do a \"dry\" run? [dry]: " ACTION
	ACTION=${ACTION:-dry}
    fi

    # prompt for --many if not specified
    if [ ! ${MANY:-} ]; then
	read -p "Return how many [1-1000] numbers per page query? [50]: " MANY
	MANY=${MANY:-50}
    fi

    # prompt for --pick area codes if not specified
    if [ ! ${PICK:-} ]; then
	declare -a NUMS=(800 833 844 855 866 877 888)
	DLIST=${NUMS[@]}
	printf "\nSpecify space delimited list of area codes, or choose \"all\"\n"
	read -p "[$DLIST]: " PLIST
	PLIST=${PLIST:-$DLIST}
	NUMS+=($PLIST)
	# build list of numbers matching area code(s)
	sw_bulk_numbers_delete_pick_list
    elif [ ${PICK:-} != all ]; then
	# substitute comman delimiters for space delimiters
	NUMS=${PICK//,/ }
	# build list of numbers matching area code(s)
	sw_bulk_numbers_delete_pick_list
    else
	# build list of all numbers found in project
	sw_bulk_numbers_delete_get_list
    fi

    if [ ${NOT:-} ]; then
	NOT_LIST=$(echo "$NOT" | sed 's/,/ /g')
	declare -a notphonearray=( $NOT_LIST )
	for notphone in "${notphonearray[@]}"; do
	    printf "not deleting %s, keeping it\n" "$notphone"
	    PHONE_LIST=$( echo "$PHONE_LIST" | sed "/$notphone/d")
	done
    fi

    printf "\nprocessing list of %d numbers... please wait...\n" "$(echo "$PHONE_LIST" | wc -l)"

    COUNT=1
    while read PHONE; do
	number=$(printf '%s\n' "$PHONE" | awk '{print $1}')
	sid=$(printf '%s\n' "$PHONE" | awk '{print $2}')
	if [ $ACTION == delete ]; then
	    curl --max-time 10 https://$SW_SPACE_URL/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/IncomingPhoneNumbers/$sid.json \
		 -X DELETE -u "$SW_PROJ_KEY:$SW_TOKEN" | jq &
	    printf '%d DELETED >>> Phone: %s Sid: %s\n' "$COUNT" "$number" "$sid"
	elif [ $ACTION == dry ]; then
	    if [ $DEBUG ]; then
		printf '%d FOUND >>> Phone: %s Sid: %s\n' "$COUNT" "$number" "$sid";
		# uncomment to individually list everything about each number found
		#curl --silent --max-time 10 https://$SW_SPACE_URL/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/IncomingPhoneNumbers/$sid.json \
		#     -X GET -u "$SW_PROJ_KEY:$SW_TOKEN" | jq &
	    else
		printf "counting: %d\r" "$COUNT"
	    fi
	else
	    printf "$ACTION is an incorrect action. No Action performed. Choose \"dry\" or \"delete\"\n"
	fi
	COUNT=$((COUNT+1))
    done < <(printf '%s\n' "$PHONE_LIST")
    if [ $ACTION == delete ]; then
	TDEL=$(printf "$PHONE_LIST\n" | wc -l)
	printf 'Total deleted: %s\n' "$TDEL"
    elif [ $ACTION == dry ]; then
	TDEL=$(printf "$PHONE_LIST\n" | wc -l)
	printf 'Total found: %s\n' "$TDEL"
    fi

}
sw_bulk_numbers_delete $@
exit 0
