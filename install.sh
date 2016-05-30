#!/bin/bash
if [ "$(id -u)" != "0" ]; then
   echo "This script must be run as root" 1>&2
   exit 1
fi

if node -v;
then
	echo ':: Node.js is installed.'
else
	echo ':: Installing Node.js'
	curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
	apt-get install -y nodejs
fi

if nginx; 
then
	echo ':: NGINX is installed.'
else
	echo ':: Installing NGINX'
	apt-get install -y nginx
fi

echo ':: Installing Bower and Grunt'
npm install bower grunt -g

echo ':: Cloning repo.'
git clone https://github.com/nprail/hexagon-mc.git /var/www/hexmc
cd /var/www/hexmc

chmod -R 755 /var/www/hexmc
cp /var/www/hexmc/hexmc-nginx /etc/nginx/sites-available/hexmc-nginx
ln -s /etc/nginx/sites-available/hexmc-nginx /etc/nginx/sites-enabled/

service nginx reload

echo ':: Installing dependencies'
bower install --allow-root
npm install

echo ':: Done! Open http://localhost:8080 in browser'
