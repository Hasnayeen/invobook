<?php

namespace App\Filament\App\Widgets;

use Filament\Widgets\ChartWidget;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Pages\Concerns\InteractsWithHeaderActions;

abstract class ChartWidgetWithAction extends ChartWidget implements HasActions
{
    use InteractsWithActions;
    use InteractsWithForms;
    use InteractsWithHeaderActions;

    /**
     * @var view-string
     */
    protected static string $view = 'filament.app.widgets.chart-widget-with-action';
}
