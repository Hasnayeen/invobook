#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
blue=`tput setaf 4`
reset=`tput sgr0`
local=$2

# Check for docker installation
which docker && docker --version | grep "Docker version"

if [ $? -eq 0 ]
then
  echo ""
  echo "${green}Docker is installed${reset}"
  echo ""
else
  echo ""
  echo "${red}Error: Please install docker before installing Goodwork software${reset}"
  echo ""
  exit 1
fi

# Check for docker-compose installation
which docker-compose && docker-compose --version | grep "docker-compose version"

if [ $? -eq 0 ]
then
  echo ""
  echo "${green}Docker-compose is installed${reset}"
  echo ""
else
  echo ""
  echo "${red}Error: Please install docker-compose before installing Goodwork software${reset}"
  echo ""
  exit 1
fi

# Get domain name for ssl cert file
domain=$(awk 'BEGIN{FS="=";RS="\n"}{if($1 == "SSL_CERT_DOMAIN") print $2}' .env)

# Replace the domain in site.conf file
sed -i -e "s/example.com/$domain/g" docker/site.conf

if [[ $# -gt 0 && local -eq "local" ]]
then
  COMPOSE="sudo docker-compose -f docker-compose.dev.yml"
else
  COMPOSE="sudo docker-compose"
fi

$COMPOSE build php

if [[ $# -gt 0 && local -eq "local" ]]
then
  $COMPOSE run --rm -w /var/www php composer install
else
  $COMPOSE run --rm -w /var/www php composer install --optimize-autoloader --no-dev
fi

$COMPOSE up -d

$COMPOSE run --rm -w /var/www php php artisan key:generate

$COMPOSE run --rm -w /var/www php chmod -R 777 /var/www/storage

$COMPOSE run --rm -w /var/www laravel_echo_server npm install

$COMPOSE run --rm -w /var/www php php artisan migrate --seed

$COMPOSE run --rm -w /var/www php php artisan passport:install

$COMPOSE run --rm -w /var/www php php artisan route:cache

$COMPOSE run --rm -w /var/www php php artisan storage:link

git checkout docker/site.conf

echo ""
echo "${green}Installation complete.${reset}"
echo ""

echo ""
echo "${blue}Your application is running at :"
awk 'BEGIN{FS="=";RS="\n"}{if($1 == "APP_URL") print $2}' .env  
echo "${reset}"
echo ""

# Exit from the script with success (0)
exit 0