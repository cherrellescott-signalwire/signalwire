#!/bin/bash

#USERNAME=
#PASSWORD=

fui_switcher_parse () {
    printf "entering function $FUNCNAME\n"
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
    if [ -f /etc/apt/sources.list.d/freeswitch.list ]; then
	if [ $(grep -c ${VERSION:-$1} /etc/apt/sources.list.d/freeswitch.list) -ge 1 ]; then
	    printf "\n\033[1;35mWARNING:\033[0m FreeSWITCH repo already setup for \033[01;33m$1\033[0m packages\nPlease choose \033[01;33m$OPPOSITE\033[0m if that is your true intent.\n\n"
	    printf "Else, if you want to continue using \033[01;33m$1\033[0m repo, hit [Enter] to proceed, otherwise [Ctrl+c] to cancel, then try again..."
	    read -p "" INTENT
	    INTENT=${INTENT:-intent}
	fi
    fi

    if [ "$INTENT" == "intent" ];then
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
	(release) fui_switcher_creds; fui_switcher_release ;;
	(unstable) fui_switcher_creds; fui_switcher_unstable ;;
	(*) printf "\n\033[1;31mERROR:\033[0m Please choose \"release\" or \"unstable\" to switch to that repo\n\n"; exit ;;
    esac
}

fui_switcher_check () {
    printf "entering function $FUNCNAME\n"
    if [ $(dpkg -l | grep -c freeswitch) -eq 0 ]; then
	printf "\nINFO: System appears clean. Proceeding with new $1 install...\n\n"
    else
	if [ $(dpkg -l | grep -c freeswitch) -ge 1 ]; then
	    printf "\nWARNING: trying one more time to remove remaining freeswitch $OPPOSITE packages\n\n"
	    fui_switcher_purge
	fi
	if [ $(dpkg -l | grep -c freeswitch) -eq 0 ]; then
	    printf "\nINFO: System appears clean. Proceeding with new $1 install...\n\n"
	else
	    printf "\n\033[1;31mERROR:\033[0m FreeSWITCH $OPPOSITE packages were still found on system\n."
	    printf 'Try to Use "dpkg -l | grep freeswitch" to locate them and  "apt-get purge WHATEVER" to manually remove them\n'
	    printf "Then run script again.\n\n" exit
	fi
    fi
}

fui_switcher_creds () {
    printf "entering function $FUNCNAME\n"
    if [ ! $USERNAME ] && [ ! $PASSWORD ]; then
	read -p "FSA username: " USERNAME
	read -s -p "FSA password: " PASSWORD
    fi
    apt-get install -q -y -f apt-transport-https wget software-properties-common || fui_switcher_error $FUNCNAME $LINENO
    wget -O - https://$USERNAME:$PASSWORD@fsa.freeswitch.com/repo/deb/fsa/pubkey.gpg | apt-key add - || fui_switcher_error $FUNCNAME $LINENO
    echo "machine fsa.freeswitch.com login $USERNAME password $PASSWORD" > /etc/apt/auth.conf || fui_switcher_error $FUNCNAME $LINENO
}

fui_switcher_release () {
    printf "entering function $FUNCNAME\n"
    fui_switcher_backup
    fui_switcher_purge
    fui_switcher_check
    echo "deb https://fsa.freeswitch.com/repo/deb/fsa/ stretch 1.8" > /etc/apt/sources.list.d/freeswitch.list || fui_switcher_error $FUNCNAME $LINENO
    echo "deb-src https://fsa.freeswitch.com/repo/deb/fsa/ stretch 1.8" >> /etc/apt/sources.list.d/freeswitch.list || fui_switcher_error $FUNCNAME $LINENO
    fui_switcher_install
    fui_switcher_restore
}

fui_switcher_unstable () {
    printf "entering function $FUNCNAME\n"
    fui_switcher_backup
    fui_switcher_purge
    fui_switcher_check
    echo "deb https://fsa.freeswitch.com/repo/deb/fsa/ stretch unstable" > /etc/apt/sources.list.d/freeswitch.list || fui_switcher_error $FUNCNAME $LINENO
    echo "deb-src https://fsa.freeswitch.com/repo/deb/fsa/ stretch unstable" >> /etc/apt/sources.list.d/freeswitch.list || fui_switcher_error $FUNCNAME $LINENO
    fui_switcher_install
    fui_switcher_restore
}

fui_switcher_install () {
    printf "entering function $FUNCNAME\n"
    apt-get update || fui_switcher_error $FUNCNAME $LINENO
    #apt-get install -y freeswitch-all freeswitch-all-dbg  || fui_switcher_error $FUNCNAME $LINENO
    apt-get install -y freeswitch freeswitch-systemd freeswitch-mod-event-socket || fui_switcher_error $FUNCNAME $LINENO
    #systemctl enable freeswitch || fui_switcher_error $FUNCNAME $LINENO
    #systemctl start freeswitch || fui_switcher_error $FUNCNAME $LINENO
}

fui_switcher_purge () {
    printf "entering function $FUNCNAME\n"
    if [ $(dpkg -l | grep -c freeswitch) -ge 1 ]; then
	apt-get purge -y freeswitch* freeswitch-* libfreeswitch* freeswitch-systemd || fui_switcher_error $FUNCNAME $LINENO
	apt-get clean || fui_switcher_error $FUNCNAME $LINENO
	apt-get autoclean || fui_switcher_error $FUNCNAME $LINENO
	#if [ $DEPS == y ]; then
	    #apt-get autoremove -y || fui_switcher_error $FUNCNAME $LINENO
	#fi
    else
	printf "No FreeSWITCH packages found, system seems clean... proceeding with install\n"    
    fi
}

fui_switcher_backup () {
    printf "entering function $FUNCNAME\n"
    if [ -d ~/freeswitch ]; then
	rm -rf ~/freeswitch || fui_switcher_error $FUNCNAME $LINENO
    else
	printf "~/freeswitch does not exist, not removing\n"
    fi
    if [ -d /etc/freeswitch ]; then
       yes | cp -rf /etc/freeswitch ~/ || fui_switcher_error $FUNCNAME $LINENO
    else
	printf "/etc/freeswitch does not exist, not backing up..\n"
	printf "unless this is a new system, you may want to investigate this issue. Hit [Enter] to continue, or [Ctrl+c] to cancel"
	read
    fi
}

fui_switcher_restore () {
    printf "entering function $FUNCNAME\n"
    if [ -d /etc/freeswitch ]; then
        rm -rf /etc/freeswitch || fui_switcher_error $FUNCNAME $LINENO
    fi
    if [ -d ~/freeswitch ]; then
        yes | cp -rf ~/freeswitch /etc || fui_switcher_error $FUNCNAME $LINENO
    fi
    if [ $(pidof freeswitch) ]; then
	fs_cli -x version || fui_switcher_error $FUNCNAME $LINENO
    else
	printf "ERROR: FreesWITCH not running\n"    
    fi

    printf "\n"
}

fui_switcher_error () {
        ELINE=$(sed -n $2p $0)
        ELINE=${ELINE#"${ELINE%%[![:space:]]*}"}
        ELOG="$?"
        printf "$1:$2 -- ERROR:$? -- $ELINE"
	exit
}
fui_switcher_parse $@
exit 0
