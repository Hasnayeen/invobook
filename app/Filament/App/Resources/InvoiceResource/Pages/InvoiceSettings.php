<?php

namespace App\Filament\App\Resources\InvoiceResource\Pages;

use App\Filament\App\Resources\InvoiceResource;
use Filament\Facades\Filament;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Resources\Pages\Page;

class InvoiceSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string $resource = InvoiceResource::class;

    protected static ?string $title = 'Settings';

    protected static string $view = 'filament.app.resources.invoice-resource.pages.invoice-settings';

    public static function getRouteName(?string $panel = null): string
    {
        return 'filament.' . Filament::getCurrentPanel()->getId() . '.resources.' . static::getResource()::getSlug() . '.settings';
    }

    public function form(Form $form): Form
    {
        return $form;
    }
}
