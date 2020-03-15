FROM php:7.4-cli

LABEL Description="This image is part of Goodwork application setup"

RUN apt-get update && apt-get -y install --no-install-recommends mariadb-client libzip-dev zlib1g-dev && docker-php-ext-install pdo_mysql bcmath zip

# Set the WORKDIR to /var/www/goodwork so all following commands run in /var/www/goodwork
WORKDIR /var/www
