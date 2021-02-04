1. Start AWS Instance use Ubuntu 20.04 LTS (bionic)

2. After it starts up check security rule and note "Server IP"

	Security rule should allow tenet access from "My IP"
	Open 80 and 445 (https)
	Allow MongoDB port from "My IP"

3. Go to GoDaddy and update DNS to match new Server IP

4. Flush DNS of PC since old DNS entry will be used
	ipconfig /flushdns

5. Go to https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx
	Install certbox

	$ sudo apt-get update
	$ sudo apt-get install software-properties-common
	$ sudo add-apt-repository universe
	$ ### REMOVE sudo add-apt-repository ppa:certbot/certbot
	$ sudo apt-add-repository -r ppa:certbot/certbot
	$ sudo apt-get update
	$ sudo apt upgrade
	$ sudo reboot
	$ sudo apt-get install certbot python3-certbot-nginx 

6. Execute following to generate certificate

	sudo certbot --nginx certonly --register-unsafely-without-email
	
	give the domain names : example india-dev.vulcan-group.co
	
	Congratulations! Your certificate and chain have been saved at:
	/etc/letsencrypt/live/india-dev.vulcan-group.co/fullchain.pem
	Your key file has been saved at:
	/etc/letsencrypt/live/india-dev.vulcan-group.co/privkey.pem
	
	To non-interactively renew *all* of your certificates, run "certbot renew"
	copy the 

7. Install all updates

	sudo apt-get update && sudo apt-get upgrade -y

8. Install Nginx

	sudo apt-get update && sudo apt-get upgrade -y
	sudo apt-get install nginx -y
	
	$ sudo systemctl status nginx    # To check the status of nginx
	$ sudo systemctl start nginx     # To start nginx
	
	Ensure that nginx will run on system startup
	$ sudo systemctl enable nginx
	
9. Install NodeJS and NPM

	$ node --version  # For checking nodejs version
	$ npm --version   # For checking npm version
	
	curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
	sudo apt-get install -y nodejs

	Current Version
	ubuntu@ip-172-31-82-0:~$ node --version
	v14.15.1
	ubuntu@ip-172-31-82-0:~$ npm --version
	6.14.8

10. Install unzip / awscli

	sudo apt install unzip
	
11. Install Mongo DB

	wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
	echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
	sudo apt-get update
	sudo apt-get install -y mongodb-org
	
	###sudo apt-get install -y mongodb
	
	#Start MongoDB and add it as a service to be started at boot time
	sudo systemctl start mongod
	sudo systemctl enable mongod
	#check that MongoDB has been started on port 27017
	sudo netstat -plntu

12. Prepare files for upload

	a. Compile angular UI
	   node --max_old_space_size=6144 ./node_modules/@angular/cli/bin/ng build --prod
	
13. /etc/nginx/sites-available/default

server {
    listen 80;
    server_name india-dev.vulcan-group.co;
    return 301 https://india-dev.vulcan-group.co;
}

server {
    listen 443 ssl;

    server_name india-dev.vulcan-group.co;

    ssl_certificate /etc/letsencrypt/live/india-dev.vulcan-group.co/fullchain.pem;
    ssl_certificate_key    /etc/letsencrypt/live/india-dev.vulcan-group.co/privkey.pem;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
    ssl_session_timeout 1d;
    ssl_stapling on;
    ssl_session_cache shared:SSL:50m;
    ssl_stapling_verify on;
    add_header Strict-Transport-Security max-age=15768000;
    auth_basic "Administrator Login";
    auth_basic_user_file /home/ubuntu/.htpasswd;

    location ~ /.well-know {
        allow all;
    }

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

14. Set password for admin user in nginx
htpasswd -c /home/ubuntu/.htpasswd admin
(your password::$vulcan@123)

15. pip3 commands to install python3 packages

sudo apt install python3-pip

pip3 install requests==2.23.0
pip3 install numpy
pip3 install pandas==1.0.1
pip3 install pymongo==3.10.1
pip3 install scikit_learn==0.23.2
pip3 install scipy==1.5.2
pip3 install nltk==3.4
pip3 install requests==2.23.0
pip3 install flask==1.1.2

**BAD DO NOT EXECUTE
pip3 install numpy==1.17.2 did not work
pip3 install argparse==1.1
pip3 install re==2.2.1

15. PM2

	sudo npm install pm2 -g
	
	pm2 start dist/index.js
	pm2 show 0
	pm2 start recoEngineServer.py --name flask-app --interpreter=python3
	pm2 show 1
   
   	pm2 list

16. monitoring
Mem usage: watch -n 5 free -m
Disk usage: df

17. import json dump files

	sed -i 's/\r//g'  import.sh
	chmod 777 import.sh
	./import.sh

18. httpassword

    Set password for user
    htpasswd -c .htpasswd admin
	
	Check password file
	ls .htpasswd -l

19. Verify production environment
    environment.prod.ts should have correct server_url i.e. aiml-dev.vulcan-group.co / india-dev.vulcan-group.co

20. Ubuntu Upgrade

    sudo apt update
    apt list --upgradable
    sudo apt upgrade

Reference Links:
https://appdividend.com/2019/06/04/angular-8-tutorial-with-example-learn-angular-8-crud-from-scratch/
https://www.tecmint.com/password-protect-web-directories-in-nginx/
https://www.freakyjolly.com/angular-google-maps-using-agm-core/#.X3QjjGgzaUk
https://www.favicon-generator.org/image-editor/
https://www.uokpl.rs/rsvi/hxhwTbo_pin-location-map/
