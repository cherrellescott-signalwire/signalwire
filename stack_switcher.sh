#!/bin/bash

fui_switch_parse () {
    if [ "$1" == "release" ]; then
	OPPOSITE=unstable
	VERSION=1.8
    else
	OPPOSITE=release
    fi

    if [ "$1" != "release" ] && [ "$1" != "unstable" ]; then
	printf "\nUSAGE:\n\n"
	printf "\033[1;32mbash $0 release\033[0m\n\n"
	printf "or\n\n"
	printf "\033[1;32mbash $0 unstable\033[0m\n\n"
	exit
    fi

    if [ $(grep -c ${VERSION:-$1} /etc/apt/sources.list.d/freeswitch.list) -ge 1 ]; then
	printf "\n\033[1;35mWARNING:\033[0m FreeSWITCH repo already setup for \033[01;33m$1\033[0m packages\nPlease choose \033[01;33m$OPPOSITE\033[0m if that is your true intent.\n\n"
	printf "Else, if you want to continue using \033[01;33m$1\033[0m repo, hit [Enter] to proceed, otherwise [Ctrl+c] to cancel, then try again..."
	read -p "" INTENT
	INTENT=${INTENT:-intent}
    fi

    if [ $INTENT == intent ];then
	printf "\nProceeding with re-installation of \033[01;33m$1\033[0m packages\n"
    else
	printf "\n\033[1;35mWARNING:\033[0m You about to switch from \033[01;33m$OPPOSITE\033[0m packages to \033[01;33m$1\033[0m packages!!!\n"
    fi

    printf "\033[1;35mWARNING:\033[0m This script only backups and restores the  \033[1;32m/etc/freeswitch\033[0m  directory. You may want to add lines for additional directories.\n"
    printf "\033[1;35mWARNING:\033[0m Have you backed up your server before attempting this operation?\n"
    printf "Hit \033[0;36m[Enter]\033[0m to continue, or \033[0;36mCtrl+c\033[0m to cancel..."
    read
    #read -p "Purge all the depencies too? Will take a few minutes longer. y/n [y]:" DEPS
    #DEPS=${DEPS:-y}
    case $1 in
	(release) fui_switch_creds; fui_switch_release ;;
	(unstable) fui_switch_creds; fui_switch_unstable ;;
	(*) printf "\n\033[1;31mERROR:\033[0m Please choose \"release\" or \"unstable\" to switch to that repo\n\n"; exit ;;
    esac
}

fui_switch_check () {
    if [ $(dpkg -l | grep -c freeswitch) -eq 0 ]; then
	printf "\nINFO: System appears clean. Proceeding with new $1 install...\n\n"
    else
	if [ $(dpkg -l | grep -c freeswitch) -ge 1 ]; then
	    printf "\nWARNING: trying one more time to remove remaining freeswitch $OPPOSITE packages\n\n"
	    fui_switch_purge
	fi
	if [ $(dpkg -l | grep -c freeswitch) -eq 0 ]; then
	    printf "\nINFO: System appears clean. Proceeding with new $1 install...\n\n"
	else
	    printf "\n\033[1;31mERROR:\033[0m FreeSWITCH $OPPOSITE packages were still found on system\n."
	    printf 'Try to Use "dpkg -l | grep freeswitch" to locate them and  "apt-get purge WHATEVER" to manually remove them\n'
	    printf "Then run script again.\n\n"
	    exit
	fi
    fi
}

fui_switch_creds () {
    read -p "FSA username: " USERNAME
    read -p "FSA password: " PASSWORD
    apt-get install -q -y -f apt-transport-https wget software-properties-common
    wget -O - https://$USERNAME:$PASSWORD@fsa.freeswitch.com/repo/deb/fsa/pubkey.gpg | apt-key add -
    echo "machine fsa.freeswitch.com login $USERNAME password $PASSWORD" > /etc/apt/auth.conf
}

fui_switch_release () {
    fui_switch_backup
    fui_switch_purge
    fui_switch_check
    echo "deb https://fsa.freeswitch.com/repo/deb/fsa/ stretch 1.8" > /etc/apt/sources.list.d/freeswitch.list
    echo "deb-src https://fsa.freeswitch.com/repo/deb/fsa/ stretch 1.8" >> /etc/apt/sources.list.d/freeswitch.list
    fui_switch_install
    fui_switch_restore
}

fui_switch_unstable () {
    fui_switch_backup
    fui_switch_purge
    fui_switch_check
    echo "deb https://fsa.freeswitch.com/repo/deb/fsa/ stretch unstable" > /etc/apt/sources.list.d/freeswitch.list
    echo "deb-src https://fsa.freeswitch.com/repo/deb/fsa/ stretch unstable" >> /etc/apt/sources.list.d/freeswitch.list
    fui_switch_install
    fui_switch_restore
}

fui_switch_install () {
    apt-get update
    apt-get install -y freeswitch-all freeswitch-all-dbg
    systemctl enable freeswitch
    systemctl start freeswitch
}

fui_switch_purge () {
    apt-get purge -y freeswitch* freeswitch-* libfreeswitch* freeswitch-systemd
    apt-get clean
    apt-get autoclean
    #if [ $DEPS == y ]; then
	apt-get autoremove -y
    #fi
}

fui_switch_backup () {
    rm -rf ~/freeswitch
    yes | cp -rf /etc/freeswitch ~/
}

fui_switch_restore () {
    rm -rf /etc/freeswitch
    yes | cp -rf ~/freeswitch /etc
    printf "\nAll done. Your fresh version is:\n\n"
    fs_cli -x version
    printf "\n"
}
fui_switch_parse $@
exit 0
