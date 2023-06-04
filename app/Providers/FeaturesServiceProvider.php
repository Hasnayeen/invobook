<?php

namespace App\Providers;

use App\Models\Team;
use Laravel\Pennant\Feature;
use Filament\Facades\Filament;
use Illuminate\Support\ServiceProvider;

class FeaturesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Feature::resolveScopeUsing(fn ($driver) => Filament::getTenant());

        Feature::define('tracking', function (Team $team) {
            return true;
        });

        Feature::define('client', function (Team $team) {
            return true;
        });

        Feature::define('invoicing', function (Team $team) {
            return true;
        });

        Feature::define('reports', function (Team $team) {
            return true;
        });

        Feature::define('insights', function (Team $team) {
            return true;
        });
    }
}
