<?php

# apt-get install composer
# apt-get install php7.3-curl
# composer require signalwire/signalwire
# apt-get install libapache2-mod-php
# a2enmod php7.3
# systemctl restart apache2

  require '/var/www/html/vendor/autoload.php';
  use SignalWire\Rest\Client;

  $client = new Client('YOU_PROJECT_ID',
                       'YOU_PROJECT_ID',
                       array("signalwireSpaceUrl" => "joshebosh.signalwire.com"));

  print($client);

  $message = $client->messages
           ->create("+19312989898", // to
                    array("from" => "+13342120123", "body" => "niño")
           );

  print($message->sid);
?>
