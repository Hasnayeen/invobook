FROM php:7.2-fpm

LABEL Description="This image is used to setup Goodwork application"

RUN echo "cgi.fix_pathinfo=0;" > /usr/local/etc/php-fpm.d/php.ini

RUN apt-get update && apt-get -y install --no-install-recommends libpng-dev zip unzip git && docker-php-ext-install pdo_mysql gd bcmath

# Set git to use http instead ssh
RUN git config --global url."https://github.com/".insteadOf git@github.com:
RUN git config --global url."https://".insteadOf git://

# Install Composer and make it available in the PATH
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# Copy application file to /var/www/goodwork
COPY . /var/www

# Set the WORKDIR to /var/www/goodwork so all following commands run in /var/www/goodwork
WORKDIR /var/www
