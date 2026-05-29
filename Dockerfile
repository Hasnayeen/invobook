# syntax=docker/dockerfile:1.7

ARG PHP_VERSION=8.2

FROM php:${PHP_VERSION}-cli-alpine AS vendor
WORKDIR /app

RUN apk add --no-cache \
    git \
    unzip \
    icu-data-full \
    icu-libs \
    libzip \
    && apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    icu-dev \
    libzip-dev \
    && docker-php-ext-install -j"$(nproc)" intl zip \
    && apk del .build-deps

COPY --from=composer:2.8 /usr/bin/composer /usr/local/bin/composer

COPY composer.json composer.lock ./
RUN composer install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --no-progress \
    --no-scripts \
    --optimize-autoloader

FROM node:20-alpine AS frontend
WORKDIR /app

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install --no-audit --no-fund; fi

COPY --from=vendor /app/vendor ./vendor
COPY resources ./resources
COPY public ./public
COPY vite.config.js postcss.config.mjs tailwind.config.js ./
RUN npm run build

FROM php:${PHP_VERSION}-fpm-alpine AS app
WORKDIR /var/www/html

RUN apk add --no-cache \
    nginx \
    supervisor \
    icu-data-full \
    icu-libs \
    libzip \
    libpng \
    freetype \
    libjpeg-turbo \
    fcgi \
    && apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    icu-dev \
    libzip-dev \
    libpng-dev \
    freetype-dev \
    libjpeg-turbo-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j"$(nproc)" \
    bcmath \
    intl \
    opcache \
    pdo_mysql \
    zip \
    gd \
    pcntl \
    && apk del .build-deps \
    && rm -rf /var/cache/apk/*

COPY . .
COPY --from=vendor /app/vendor ./vendor
COPY --from=frontend /app/public/build ./public/build

COPY docker/php/conf.d/app.ini /usr/local/etc/php/conf.d/app.ini
COPY docker/php-fpm/www.conf /usr/local/etc/php-fpm.d/zz-app.conf
COPY docker/nginx/default.conf /etc/nginx/http.d/default.conf
COPY docker/supervisor/supervisord.conf /etc/supervisord.conf
COPY docker/entrypoint.sh /usr/local/bin/entrypoint

RUN mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views storage/logs bootstrap/cache /run/nginx \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod +x /usr/local/bin/entrypoint

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --retries=5 CMD wget -q -O /dev/null http://127.0.0.1:8080/up || exit 1

ENTRYPOINT ["entrypoint"]
CMD ["supervisord", "-c", "/etc/supervisord.conf"]
