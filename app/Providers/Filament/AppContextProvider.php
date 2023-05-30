<?php

namespace App\Providers\Filament;

use App\Filament\App\Pages\Dashboard;
use App\Models\Team;
use Filament\Context;
use Filament\Support\Color;
use Filament\ContextProvider;
use Filament\Http\Middleware\Authenticate;
use Illuminate\Session\Middleware\StartSession;
use App\Filament\App\Pages\Tenancy\RegisterTeam;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use App\Filament\App\Resources\WorkSessionResource\Widgets\WorkHourThisMonth;
use App\Filament\App\Widgets\CumulativeEarningsPerDay;
use App\Filament\App\Widgets\EarningsPerDay;
use App\Filament\App\Widgets\EarningsPerMonth;
use Filament\Http\Middleware\IdentifyTenant;

class AppContextProvider extends ContextProvider
{
    public function context(Context $context): Context
    {
        return $context
            ->id('app')
            ->path('/')
            ->primaryColor(Color::Violet)
            ->favicon('/favicon.svg')
            ->tenant(Team::class)
            ->login()
            ->registration()
            ->passwordReset()
            ->tenantRegistration(RegisterTeam::class)
            ->discoverResources(in: app_path('Filament/App/Resources'), for: 'App\\Filament\\App\\Resources')
            ->discoverPages(in: app_path('Filament/App/Pages'), for: 'App\\Filament\\App\\Pages')
            ->pages([
                Dashboard::class,
            ])
            // ->discoverWidgets(in: app_path('Filament/App/Widgets'), for: 'App\\Filament\\App\\Widgets')
            ->widgets([
                WorkHourThisMonth::class,
                EarningsPerMonth::class,
                CumulativeEarningsPerDay::class,
                EarningsPerDay::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
                IdentifyTenant::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->navigationGroups([
                'Work',
                'Analytics',
                'Settings',
            ])
            ->sidebarCollapsibleOnDesktop()
            ->databaseNotifications();
    }
}
