#!/usr/bin/env bash

COMPOSE="docker-compose"

if [ $# -gt 0 ];then
    if [[ "$1" == "art" ]]; then
        shift 1
        $COMPOSE run --rm -w /var/www php php artisan "$@"
    elif [[ "$1" == "composer" ]]; then
        shift 1
        $COMPOSE run --rm -w /var/www php composer "$@"
    elif [[ "$1" == "test" ]]; then
        shift 1
        $COMPOSE run --rm -w /var/www php ./vendor/bin/phpunit "$@"
    elif [[ "$1" == "npm" ]]; then
        shift 1
        $COMPOSE run --rm -w /var/www laravel_echo_server npm "$@"
    elif [[ "$1" == "yarn" ]]; then
        shift 1
        $COMPOSE run --rm -w /var/www laravel_echo_server yarn "$@"
    elif [[ "$1" == "mysql" ]]; then
        shift 1
        $COMPOSE run --rm -w / db mysql "$@"
    elif [[ "$1" == "restart" ]]; then
        shift 1
        $COMPOSE stop
        $COMPOSE start
    else
        $COMPOSE "$@"
    fi
else
    $COMPOSE ps
fi
