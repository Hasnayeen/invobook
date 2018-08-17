#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

# Check for docker installation
which docker && docker --version | grep "Docker version"

if [ $? -eq 0 ]
then
  echo "Docker is installed"
else
  echo "Please install docker before installing Goodwork software"
  exit 1
fi

# Check for docker-compose installation
which docker-compose && docker-compose --version | grep "Docker version"

if [ $? -eq 0 ]
then
  echo "Docker-compose is installed"
else
  echo "Please install docker-compose before installing Goodwork software"
  exit 1
fi

# Copy env file from env.example
cp .env.example .env

COMPOSE="sudo docker-compose"

$COMPOSE build php

$COMPOSE run --rm -w /var/www php composer install

$COMPOSE up -d

$COMPOSE run --rm -w /var/www php php artisan key:generate

echo ""
echo "Installation complete."
echo ""

echo ""
echo "Visit http://localhost:8181"
echo ""

# Exit from the script with success (0)
exit 0