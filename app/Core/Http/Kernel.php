<?php

namespace App\Core\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Core\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        \App\Core\Http\Middleware\TrustProxies::class,
        \App\Core\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \App\Core\Http\Middleware\LocalizationMiddleware::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Core\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            'throttle:60,1',
            'bindings',
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'admin'                   => \App\Core\Http\Middleware\RedirectIfNotAdmin::class,
        'auth'                    => \Illuminate\Auth\Middleware\Authenticate::class,
        'auth.basic'              => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings'                => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers'           => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can'                     => \Illuminate\Auth\Middleware\Authorize::class,
        'guest'                   => \App\Core\Http\Middleware\RedirectIfAuthenticated::class,
        'signed'                  => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle'                => \Illuminate\Routing\Middleware\ThrottleRequests::class,
    ];
}
