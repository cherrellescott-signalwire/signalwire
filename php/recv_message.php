<?php

# https://pastebin.freeswitch.org/view/b98431eb

# apt-get install composer
# apt-get install php7.3-curl
# composer require signalwire/signalwire
# apt-get install libapache2-mod-php
# a2enmod php7.3
# systemctl restart apache2

require 'vendor/autoload.php';
use SignalWire\Rest\Client;
use SignalWire\Laml;

$TO = $_POST['From'];
$FROM = $_POST['To'];
$BODY = $_POST['Body'];

if ( $_POST['test'] == 'test' ) {
    $argv[1] = 'test';
}
if ( $argv[1] == "test" ) {
    $TO = '+17742989898';
    $FROM = '+13342120811';
    $BODY = 'argv test';
}


# LaML
$response = new SignalWire\LaML;
$response -> message( $BODY . ' from php laml xml ♥ ñ é');
echo $response;
#echo '<Response><Message from="' . $TO . '" to="' . $FROM . '">' . $BODY . ' from joshebosh php laml xml</Message></Response>';
#echo '<Response></Response>';


# REST
$client = new Client('YOU_PROJECT_ID',
                       'YOU_PROJECT_ID',
                       array("signalwireSpaceUrl" => "joshebosh.signalwire.com"));
$message = $client->messages
         ->create($TO, array("from" => $FROM, "body" => $BODY . " from joshebosh php laml rest spanish ♥ é Ñ ñ"));
#echo $client;


#print("From: $TO\n");
#print("To: $FROM\n");
#print("Body: $BODY\n");

?>
