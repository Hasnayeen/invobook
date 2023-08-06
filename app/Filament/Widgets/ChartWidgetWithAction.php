<?php

namespace App\Filament\Widgets;

use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Pages\Concerns\InteractsWithHeaderActions;
use Leandrocfe\FilamentApexCharts\Widgets\ApexChartWidget;

abstract class ChartWidgetWithAction extends ApexChartWidget implements HasActions
{
    use InteractsWithActions;
    use InteractsWithHeaderActions;

    /**
     * @var view-string
     */
    protected static string $view = 'filament.widgets.chart-widget-with-action';
}
