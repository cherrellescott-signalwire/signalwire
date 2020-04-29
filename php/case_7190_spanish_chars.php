<?php

require 'vendor/autoload.php';
use SignalWire\Rest\Client;
use SignalWire\Laml;

$TO = $_POST['From'];
$FROM = $_POST['To'];
$BODY = $_POST['Body'];

# REST
if ( $FROM == '+13342120811' ) { # flowroute local
    $client = new Client('YOU_PROJECT_ID', 'YOU_PROJECT_ID', array("signalwireSpaceUrl" => "joshebosh.signalwire.com"));
} else if ( $FROM == '+18448445674' ) { # flowroute toll free
    $client = new Client('YOU_PROJECT_ID', 'YOU_PROJECT_ID', array("signalwireSpaceUrl" => "joshebosh.signalwire.com"));
} else if ( $FROM == '+18888563769' ) { # bandwidth tollfree
    $client = new Client('9a66ad67-d82c-44d8-80e6-df66191fce47', 'PT9ede28f51298737fc7111be14c036ccde05b294d71074ee7', array("signalwireSpaceUrl" => "joshebosh.signalwire.com"));
} else if ( $FROM == '+13342196485' ) { # bandwidth local
    $client = new Client('b68c32ca-985e-4d10-b93d-474197ee071c', 'PTf1bfd6ce38240ad3b2f506bbd68ee62d7017701537f864fb', array("signalwireSpaceUrl" => "joshebosh.signalwire.com"));
}

# GSM
#$message = $client->messages->create($TO, array("from" => $FROM, "body" => $BODY . " from php laml rest spanish é Ñ ñ"));
# Unicode
$message = $client->messages->create($TO, array("from" => $FROM, "body" => $BODY . " from php laml rest spanish ♥ é Ñ ñ"));

# LaML
$response = new SignalWire\LaML;
# GSM
#$response -> message( $BODY . ' from php laml xml ñ é');
# Unicode
$response -> message( $BODY . ' from php laml xml ♥ ñ é');
echo $response;

?>
