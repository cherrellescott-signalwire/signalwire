#!/bin/bash
SW_SPACE="YourSpaceName"       # do not include '.signalwire.com' here, only space name
SW_PROJ_KEY="AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE"
SW_TOKEN="PTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

sw_bulk_number_available () {

    if [ ! ${1:-} ]; then printf "Please specify <local|tollfree> [1-50]\n"; exit; fi
    if [ $1 == local ]; then
	# excluding VT and NH for now
	declare -a REGION=(AL AK AZ AR CA CO CT DE FL GA
			   HI ID IL IN IA KS KY LA ME MD
			   MA MI MN MS MO MT NE NV    NJ
			   NM NY NC ND OH OK OR PA RI SC
			   SD TN TX UT VA    WA WV WI WY)
	RAND=$(( RANDOM % (47 - 0 + 1 ) + 0 ))
	RANDOM_REGION=${REGION[${RAND:-1}]}
	PHONE_LIST=$(curl --silent https://$SW_SPACE.signalwire.com/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/AvailablePhoneNumbers/US/Local.json \
	     -X GET \
	     -d "InRegion=$RANDOM_REGION" \
	     -u "$SW_PROJ_KEY:$SW_TOKEN" \
	    | jq --raw-output '.available_phone_numbers[].phone_number' | head -n ${2:-1})
    elif [ $1 == tollfree ]; then
	# excluding 800 for now
	declare -a AREACODE=( 833 844 855 866 877 888 )
	RAND=$(( RANDOM % 6 ))
	RANDOM_AREACODE=${AREACODE[${RAND:-4}]}
	PHONE_LIST=$(curl --silent https://$SW_SPACE.signalwire.com/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/AvailablePhoneNumbers/US/TollFree.json \
	     -X GET \
	     -d "AreaCode=$RANDOM_AREACODE" \
	     -u "$SW_PROJ_KEY:$SW_TOKEN" \
	    | jq --raw-output '.available_phone_numbers[].phone_number' | head -n ${2:-1})
    else
	printf "please choose \"local\" or \"tollfree\"...\n"
    fi

}

sw_bulk_number_purchase () {

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
	read -p "ATTENTION: You're purchasing a total of $TOTAL random numbers, for $ATOTAL $TYPE numbers from $(( $TOTAL / $ATOTAL)) random area code. Hit [Enter] to continue, or Ctrl+c to abort..."
    else
	printf "\n\n"
	read -p "You're doing a dry run total of $TOTAL random numbers, for $ATOTAL $TYPE numbers from $(( $TOTAL / $ATOTAL)) random area code, [Enter] to continue, or Ctrl+c to abort..."
    fi

    t=0
    p=1
    while [ $t -lt $TOTAL ]; do
	sw_bulk_number_available $TYPE $ATOTAL
	while read -r PHONE; do
	    if  [ $ACTION != dry ]; then
		printf "$p: puchased $PHONE\n"
		curl https://$SW_SPACE.signalwire.com/api/laml/2010-04-01/Accounts/$SW_PROJ_KEY/IncomingPhoneNumbers.json \
		     -X POST \
		     --data-urlencode "PhoneNumber=$PHONE" \
		     -u "$SW_PROJ_KEY:$SW_TOKEN"
	    else
		printf "$p: $PHONE from ${RANDOM_REGION:-$RANDOM_AREACODE} is available\n"
	    fi
	    p=$[$p+1]
	done < <(printf '%s\n' "$PHONE_LIST")
	t=$[$t+$ATOTAL]
    done
}
printf "\nWARNING!!! ABUSE OR MANIPULATION OF THIS SCRIPT MAY COST YOU!!!\n\n"
printf "In the future you can execute command as such:\n\n"
printf "    bash sw_random.sh <local|tollfree> [1-50] [1-200]\n\n"
printf "Where [1-50] is how many you want per area code, and [1-200] is total numbers.\n\n"
printf "examples:\n\n"
printf "    bash sw_random.sh local                 <--- will prompt you for more info\n"
printf "    bash sw_random.sh tollfree              <--- will prompt you for more info \n"
printf "    bash sw_random.sh local 2 10            <--- will purchase 10 random local numbers, 2 from 5 random area codes\n"
printf "    bash sw_random.sh tollfree 5 100        <--- will purchase 10 random tollfree numbers, 5 from 20 random area codes\n"
printf "    bash sw_random.sh local 8 16 dry        <--- dry run, dont acutally purchase 8 numbers from 2 random area codes, just see what's available\n"
printf "    bash sw_random.sh local 8 16 purchase   <--- real run, acutally purchase 8 local numbers from 2 random area codes\n\n\n"
sw_bulk_number_purchase $@
exit 0