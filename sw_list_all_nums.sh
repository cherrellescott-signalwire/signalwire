#!/bin/bash
SW_SPACE_URL="example.signalwire.com"

sw_projects () {
    # setup list for one or multiple pojects
    declare -A projects=(

        # list all projects like this:   [project_key]=api_token
        [AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE]=PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        [VVVVVVVV-WWWW-XXXX-YYYY-ZZZZZZZZZZZZ]=PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    )

    declare -A files=()

    # setup up the project, token, and file values for each loop
    for project in "${!projects[@]}"; do
	SW_PROJ_KEY=${project:-}
	SW_TOKEN=${projects[$project]}
	OUTFILE=/tmp/sw_project_numbers_$SW_PROJ_KEY.csv
	files[$SW_PROJ_KEY]=$OUTFILE 
	sw_list_all_nums
    done
    sw_list_all_nums_print
}

sw_list_all_nums () {

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
    PHONE_LIST=$(printf '%s' "$FIRST_PAGE" | jq --raw-output '.incoming_phone_numbers[] | "\(.phone_number),\(.sid)"')
    if [ ${DEBUG:-} ]; then printf 'C> Phone List: %s\n' "$PHONE_LIST"; fi

    # Loop on "next_page_uri" var until we a hit page value of null
    while [ "${NPU:-}" != null ]; do
	NEXT_PAGE=$(curl "https://$SW_SPACE_URL$NPU" -X GET -u "$SW_PROJ_KEY:$SW_TOKEN")
	if [ ${DEBUG:-} ]; then printf 'E> Next Page: %s\n' "$NEXT_PAGE"; fi

	NPU="$(printf '%s' "$NEXT_PAGE" | jq --raw-output '. | .next_page_uri')"
	if [ ${DEBUG:-} ]; then printf 'D> Next Page: %s\n' "$NPU"; fi

	# get next list of phone numbers and sids
	NEXT_LIST=$(printf '%s' "$NEXT_PAGE" | jq --raw-output '.incoming_phone_numbers[] | "\(.phone_number),\(.sid)"')
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

    # trim final newline for proper counting
    PHONE_LIST=${PHONE_LIST::-1}

    # check the cli printed count against your project dashboard, i.e. the number in parenthesis like "PHONE NUMBERS (144)"
    if [ ${DEBUG:-} ]; then
	PROJECT_TOTAL=$(printf '%s\n' "$PHONE_LIST" | wc -l)
	printf 'G> Total Phone Number count from project: %d\n' "$PROJECT_TOTAL"
    fi

    if [ ${DEBUG:-} ]; then printf "I> end picker\n"; fi

    # dump list into temp file
    printf "%s\n" "$PHONE_LIST" > $OUTFILE
}

sw_list_all_nums_print () {
    for file in "${!files[@]}"; do
	printf "\n$(cat ${files[$file]} | wc -l) total numbers for poject in csv located located here:\n${files[$file]}\n"
	#if [ $DEBUG ]; then cat ${files[$file]}; fi
    done
}
sw_projects $@
exit 0
