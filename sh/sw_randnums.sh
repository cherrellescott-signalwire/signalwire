#!/bin/bash
SW_SPACE_URL="example.signalwire.com"
SW_PROJ_KEY="AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE"
SW_TOKEN="PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

sw_bulk_number_purchase_print () {
    if [ "${SW_SPACE_URL:-}" == "example.signalwire.com" ] || \
	   [ "${SW_PROJ_KEY:-}" == "AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE" ] || \
	   [ "${SW_TOKEN:-}" == "PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ]; then
	printf "ERROR: Please change the SW_SPACE, SW_PROJ_KEY, and SW_TOKEN variables with your actual info\n"
	exit
    fi

    printf "\nWARNING!!! ABUSE OR MANIPULATION OF THIS SCRIPT MAY COST YOU!!!\n\n"
    printf "In the future you can execute command as such:\n\n"
    printf "    bash sw_random.sh <local|tollfree> [1-50] [1-200] [dry|purchase]\n\n"
    printf "Where [1-50] is how many you want per area code, and [1-200] is total numbers.\n\n"
    printf "examples:\n\n"
    printf "    $0 local                 <--- will prompt you for more info\n"
    printf "    $0 tollfree              <--- will prompt you for more info\n"
    printf "    $0 local 2 10            <--- will purchase 10 random local numbers, 2 from 5 random area codes\n"
    printf "    $0 tollfree 5 100        <--- will purchase 10 random tollfree numbers, 5 from 20 random area codes\n"
    printf "    $0 local 8 16 dry        <--- dry run, dont acutally purchase 8 numbers from 2 random area codes, just see what's available\n"
    printf "    $0 local 8 16 purchase   <--- real run, acutally purchase 8 local numbers from 2 random area codes\n\n\n"
}

sw_bulk_number_available () {
    if [ ! ${1:-} ]; then printf "Please specify <local|tollfree> [1-50]\n"; exit; fi
    if [ ${1:-} == local ]; then

	#declare -a REGION=( ND )
	declare -a REGION=(AL AK AZ AR CA CO CT DE FL GA
			   HI ID IL IN IA KS KY LA ME MD
			   MA MI MN MS MO MT NE NV NH NJ
			   NM NY NC ND OH OK OR PA RI SC
			   SD TN TX UT VA VT WA WV WI WY)

	RAND=$(( RANDOM % ${#REGION[@]} ))
	RANDOM_REGION=${REGION[${RAND:-1}]}

	PHONE_LIST=$(curl --silent https://$SW_SPACE_URL/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/AvailablePhoneNumbers/US/Local.json \
			  -X GET \
			  -d "InRegion=$RANDOM_REGION" \
			  -u "$SW_PROJ_KEY:$SW_TOKEN" \
			    | jq --raw-output '.available_phone_numbers[]?.phone_number?' | head -n ${2:-1})
			    #| jq --raw-output '.available_phone_numbers[]?.phone_number?')

	if [ "$PHONE_LIST" == '' ]; then
	    printf "curl request empty... trying again\n"
	fi

    elif [ $1 == tollfree ]; then

	declare -a AREACODE=( 800 833 844 855 866 877 888 )

	RAND=$(( RANDOM % ${#REGION[@]} ))
	RANDOM_AREACODE=${AREACODE[${RAND:-4}]}
	PHONE_LIST=$(curl --silent https://$SW_SPACE_URL/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/AvailablePhoneNumbers/US/TollFree.json \
			  -X GET \
			  -d "AreaCode=$RANDOM_AREACODE" \
			  -u "$SW_PROJ_KEY:$SW_TOKEN" \
	                   | jq --raw-output '.available_phone_numbers[]?.phone_number?' | head -n ${2:-1})
			   # | jq --raw-output '.available_phone_numbers[]?.phone_number?')

	if [ "$PHONE_LIST" == '' ]; then
	    printf "curl request empty... trying again\n"
	fi
    else
	printf "please choose \"local\" or \"tollfree\"...\n"
    fi
}

sw_bulk_number_purchase () {
    sw_bulk_number_purchase_print

    if [ ! ${1:-} ]; then
	read -p "Will your numbers be \"local\" or \"tollfree\"? [local]: " TYPE
	TYPE=${TYPE:-local}
    else
	TYPE=${1:-local}
    fi

    if [ ! ${2:-} ]; then
	read -p "how many individual numbers from a single area code (1 thru 50)? [1]: " ATOTAL
	ATOTAL=${ATOTAL:-1}
    else
	ATOTAL=${2:-1}
    fi

    if [ ${ATOTAL:-} -gt 50 ]; then
	printf "ERROR: Please selecte between between 1 and 50 for total numbers from single area code.\n"
	exit
    fi


    if [ ! ${3:-} ]; then
	read -p "how manay total random numbers do you want to purchase (1-200)? [1]: " TOTAL
	TOTAL=${TOTAL:-1}
    else
	TOTAL=${3:-1}
    fi

    if [ ! ${4:-} ]; then
	read -p "Do you want to \"purchase\" or just do a \"dry\" run? [dry]: " ACTION
	ACTION=${ACTION:-dry}
    else
	ACTION=${4:-dry}
    fi

    if [ $TOTAL -gt 10000 ]; then
	printf "ERROR: Cannot use this script to purchase more than 10,000 numbers per project. Please contact sales.\n"
	exit
    fi

    if [ $TOTAL -ge 200 ]; then
	printf "HIGH COST WARNING: For accounts with proper permissions, you can specify up to 10,000 numbers with this script.\n"
    fi

    if [ $TOTAL -lt $ATOTAL ]; then
	printf "ERROR: Check your math, individual numbers from area code should not be more than total numbers.\n"
	exit
    fi

    if (( $TOTAL % $ATOTAL != 0 )); then
	printf "ERROR: This script will divide your total numbers among area codes if specified. So please use symmetrical math in your head.\n"
	printf "This Script does NOT accept odd remainders. Otherwise just leave [1-50] at default [1] for maximum randomization.\n"
	exit
    fi

    if [ $ACTION != dry ]; then
	printf "\n\n"
	read -p "ATTENTION: You're purchasing a total of $TOTAL random number(s), for $ATOTAL $TYPE number(s) from $(( $TOTAL / $ATOTAL)) random area code. Hit [Enter] to continue, or Ctrl+c to abort..."
    else
	printf "\n\n"
	read -p "You're doing a dry run total of $TOTAL random number(s), for $ATOTAL $TYPE number(s) from $(( $TOTAL / $ATOTAL)) random area code(s), [Enter] to continue, or Ctrl+c to abort..."
    fi

    OUTFILE=/tmp/sw_purchased_numbers_$SW_PROJ_KEY.txt
    printf "" > $OUTFILE

    t=0
    p=1
    k=1
    while [ $t -lt $TOTAL ]; do
	sw_bulk_number_available $TYPE $ATOTAL
	if [ "${PHONE_LIST:-}" ]; then
	    RTOTAL=$(echo "$PHONE_LIST" | wc -l)
	    printf "found %s from %s Region. Adjusting totals accordingly.\n" "$RTOTAL" "$RANDOM_REGION"
	    while read -r PHONE; do
		if [ $p -gt $TOTAL ]; then break; fi
		if  [ $ACTION != dry ]; then
		    curl https://$SW_SPACE_URL/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/IncomingPhoneNumbers.json \
		         -X POST \
		         --data-urlencode "PhoneNumber=$PHONE" \
		         -u "$SW_PROJ_KEY:$SW_TOKEN"
		    printf "\n"
		    printf "%s: puchased $PHONE from %s Region\n" "$p" "${RANDOM_REGION:-$RANDOM_AREACODE}" | tee -a $OUTFILE
		else
		    printf "$p: $PHONE from ${RANDOM_REGION:-$RANDOM_AREACODE} is available\n" | tee -a $OUTFILE
		fi
		p=$[$p+1]
	    done < <(printf '%s\n' "$PHONE_LIST")
	    t=$[$t+$RTOTAL]
	else
	    printf "no numbers available in %s Region... skipping that region\n" "${RANDOM_REGION:-}"
	fi
	k=$[$k+1]
	if [ $k -gt "$[$TOTAL+1]" ]; then
	    printf "FATAL ERROR: unknown... killing script\n"
	    exit
	fi
    done

    if [ -f $OUTFILE ]; then
	#less $OUTFILE
	printf "\n%s total numbers purchased for poject %s in txt located located here:\n%s\n" "$(cat $OUTFILE | wc -l)" "$SW_PROJ_KEY" "$OUTFILE"
    else
	printf "ERROR: no output file found: [%s]\n" "$OUTFILE"
    fi
}
sw_bulk_number_purchase $@
exit 0
