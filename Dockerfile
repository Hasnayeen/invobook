FROM php:7.1-fpm

LABEL Description="This image is used to setup Goodwork application"

RUN echo "cgi.fix_pathinfo=0;" > /usr/local/etc/php-fpm.d/php.ini

RUN apt-get update && apt-get install zip unzip && docker-php-ext-install pdo_mysql

# Install Composer and make it available in the PATH
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# Copy application file to /var/www/goodwork
COPY . /var/www

# Set the WORKDIR to /var/www/goodwork so all following commands run in /var/www/goodwork
WORKDIR /var/www
