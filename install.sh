#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
blue=`tput setaf 4`
reset=`tput sgr0`

port=$1

# Check for docker installation
which docker && docker --version | grep "Docker version"

if [ $? -eq 0 ]
then
  echo ""
  echo "${green}Docker is installed${reset}"
  echo ""
else
  echo ""
  echo "${res}Error: Please install docker before installing Goodwork software${reset}"
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

# Check for port 80
ss -lntu | grep ':80'

if [[ $# -eq 0 && $? -eq 1 ]]
then
  echo ""
  echo "${green}Port 80 is available${reset}"
  echo ""
else
  echo ""
  echo "${red}Error: Please open port 80 or provide another port as argument when running installer${reset}"
  echo ""
  exit 1
fi

# Copy env file from env.example
cp .env.example .env

# Replace port in .env if supplied
if [ $# -gt 0 ]
then
  sed -i "s/APP_PORT=80/APP_PORT=${port}/g" .env
  sed -i "s/localhost:80/localhost:${port}/g" .env
fi

COMPOSE="sudo docker-compose"

$COMPOSE build php

$COMPOSE run --rm -w /var/www php composer install

$COMPOSE up -d

$COMPOSE run --rm -w /var/www php php artisan key:generate

$COMPOSE run --rm -w /var/www php chmod -R 777 /var/www/storage

$COMPOSE run --rm -w /var/www php php artisan migrate --seed

$COMPOSE run --rm -w /var/www laravel_echo_server npm install

$COMPOSE run --rm -w /var/www laravel_echo_server npm run production

echo ""
echo "${green}Installation complete.${reset}"
echo ""

echo ""
echo "${blue}Visit http://localhost:${port}${reset}"
echo ""

# Exit from the script with success (0)
exit 0