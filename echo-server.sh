#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
blue=`tput setaf 4`
yellow=`tput setaf 3`
reset=`tput sgr0`

# Check for laravel-echo-server installation
laravel-echo-server --version

if [ $? -eq 0 ]
then
  echo ""
  echo "${green}Laravel-echo-server is installed${reset}"
  echo ""
else
  echo ""
  echo "${yellow}Laravel-echo-server installation started${reset}"
  echo ""
  npm install -g laravel-echo-server
  exit 1
fi

# Start laravel echo server
/usr/local/lib/node_modules/laravel-echo-server/bin/server.js stop

echo ""
echo "${yellow}Starting laravel-echo-server${reset}"
echo ""

/usr/local/lib/node_modules/laravel-echo-server/bin/server.js start