<?php

namespace App\Filament\App\Widgets;

use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Pages\Concerns\InteractsWithHeaderActions;
use Filament\Widgets\ChartWidget;

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
