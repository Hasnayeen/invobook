<?php

namespace App\Providers\Filament;

use App\Filament\App\Pages\Dashboard;
use App\Filament\App\Pages\Tenancy\RegisterTeam;
use App\Filament\App\Resources\WorkSessionResource\Widgets\WorkHourThisMonth;
use App\Filament\Widgets\CumulativeEarningsPerDay;
use App\Filament\Widgets\EarningsPerDay;
use App\Filament\Widgets\EarningsPerMonth;
use App\Models\Team;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Http\Middleware\IdentifyTenant;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Illuminate\View\View;

class AppPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('app')
            ->default()
            ->colors([
                'primary' => Color::Purple,
                'yellow' => [
                    500 => Color::Yellow[500],
                    700 => Color::Yellow[700],
                ],
                'teal' => [
                    500 => Color::Teal[500],
                    700 => Color::Teal[700],
                ],
                'cyan' => [
                    500 => Color::Cyan[500],
                    700 => Color::Cyan[700],
                ],
                'indigo' => [
                    500 => Color::Indigo[500],
                    700 => Color::Indigo[700],
                ],
                'purple' => [
                    500 => Color::Purple[500],
                    700 => Color::Purple[700],
                ],
                'pink' => [
                    500 => Color::Pink[500],
                    700 => Color::Pink[700],
                ],
            ])
            ->viteTheme('resources/css/filament/app/theme.css')
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
                EarningsPerDay::class,
                CumulativeEarningsPerDay::class,
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
                'Billing',
                'Analytics',
                'Settings',
            ])
            ->sidebarCollapsibleOnDesktop()
            ->databaseNotifications()
            ->renderHook('panels::topbar.start', fn (): View => view('filament.app.hooks.welcome_user'))
            ->renderHook('panels::body.start', fn (): View => view('filament.app.hooks.background'));
    }
}
