#!/bin/bash
if [ "$(id -u)" != "0" ]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi

echo ':: Installing Node.js'
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
apt-get install -y nodejs

if service --status-all | grep -Fq 'apache2'; 
then
	echo ':: Apache2 is installed.'
else
	echo ':: Installing Apache2'
	apt-get install apache2 -y
fi

echo ':: Installing Bower and Grunt'
npm install bower grunt -g

echo ':: Cloning repo.'
git clone https://github.com/nprail/hexagon-mc.git /var/www/hexmc
cd /var/www/hexmc

chmod -R 755 /var/www/hexmc
cp /var/www/hexmc/hexmc-vhost.conf /etc/apache2/sites-available/hexmc-vhost.conf
a2ensite hexmc-vhost.conf

echo ':: Installing dependencies'
bower install
npm install

service apache2 restart

echo ':: Done! Open http://localhost:8080 in browser'
