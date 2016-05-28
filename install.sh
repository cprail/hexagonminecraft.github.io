#!/bin/bash
if [ "$(id -u)" != "0" ]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi

echo ':: Installing Node.js'
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
apt-get install -y nodejs

echo ':: Installing Apache2'
apt-get install apache2 -y

echo ':: Installing Bower and Grunt'
npm install bower grunt -g

echo ':: Cloning repo.'
git clone https://github.com/nprail/hexagon-mc.git /var/www/html
cd /var/www/html

echo ':: Installing dependencies'
bower install
npm install

echo ':: Done! Open http://<address> in browser'
