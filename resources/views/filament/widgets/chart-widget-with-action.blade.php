@php
$heading = $this->getHeading();
$subheading = $this->getSubheading();
$filters = $this->getFilters();
$indicatorsCount = $this->getIndicatorsCount();
$darkMode = $this->getDarkMode();
$width = 'xs';
$pollingInterval = $this->getPollingInterval();
$chartId = $this->getChartId();
$chartOptions = $this->getOptions();
$filterFormAccessible = $this->getFilterFormAccessible();
$loadingIndicator = $this->getLoadingIndicator();
$contentHeight = $this->getContentHeight();
$deferLoading = $this->getDeferLoading();
$footer = $this->getFooter();
$readyToLoad = $this->readyToLoad;
$actions = $this->getHeaderActions();
@endphp
<x-filament-widgets::widget class="filament-widgets-chart-widget filament-apex-charts-widget">
    <x-filament::card class="filament-apex-charts-card">

        <div
            x-data="{ dropdownOpen: false }"
            @apexhcharts-dropdown.window="dropdownOpen = $event.detail.open"
        >
            <div class="fi-chart-header flex gap-x-4">
                <x-filament-apex-charts::header :$heading :$subheading :$filters :$indicatorsCount :$width
                    :$filterFormAccessible>
                    <x-slot:filterForm>
                        {{ $this->form }}
                    </x-slot:filterForm>
                </x-filament-apex-charts::header>
                @if ($actions)
                    <x-filament-actions::actions :actions="$actions" class="shrink-0" />
                @endif
            </div>
            <x-filament-apex-charts::chart :$chartId :$chartOptions :$contentHeight :$pollingInterval :$loadingIndicator
                :$darkMode :$deferLoading :$readyToLoad />
            @if ($footer)
            <div class="relative">
                {!! $footer !!}
            </div>
            @endif
        </div>

        <x-filament-actions::modals />

    </x-filament::card>

</x-filament-widgets::widget>
