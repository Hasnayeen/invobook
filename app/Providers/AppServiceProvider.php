<?php

namespace App\Providers;

use Filament\Http\Middleware\IdentifyTenant;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;
use Livewire\Livewire;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::unguard();
        Livewire::addPersistentMiddleware([
            IdentifyTenant::class,
        ]);
    }
}
