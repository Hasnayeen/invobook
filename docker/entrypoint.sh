#!/bin/sh
set -e

cd /var/www/html

if [ ! -f .env ] && [ -f .env.example ]; then
    cp .env.example .env
fi

mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views storage/logs bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
chmod -R ug+rwX storage bootstrap/cache

if [ "${DB_CONNECTION:-mysql}" = "mysql" ] && [ -n "${DB_HOST:-}" ]; then
    ATTEMPTS=0
    until php -r '
        $host = getenv("DB_HOST") ?: "127.0.0.1";
        $port = getenv("DB_PORT") ?: "3306";
        $database = getenv("DB_DATABASE") ?: "laravel";
        $username = getenv("DB_USERNAME") ?: "root";
        $password = getenv("DB_PASSWORD") ?: "";

        try {
            new PDO("mysql:host={$host};port={$port};dbname={$database}", $username, $password, [PDO::ATTR_TIMEOUT => 2]);
            exit(0);
        } catch (Throwable $e) {
            exit(1);
        }
    '; do
        ATTEMPTS=$((ATTEMPTS + 1))
        if [ "$ATTEMPTS" -ge 60 ]; then
            echo "Database did not become reachable in time."
            exit 1
        fi
        sleep 2
    done
fi

if [ -f .env ] && grep -q '^APP_KEY=$' .env; then
    php artisan key:generate --force --no-interaction
fi

php artisan package:discover --ansi --no-interaction
php artisan storage:link --no-interaction || true

if [ "${RUN_MIGRATIONS:-true}" = "true" ]; then
    php artisan migrate --force --no-interaction
fi

php artisan config:cache --no-interaction
php artisan route:cache --no-interaction
php artisan view:cache --no-interaction

exec "$@"
