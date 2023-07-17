<?php

namespace App\Filament\App\Actions;

use Filament\Actions\Action;

class StartNewSessionAction extends Action
{
    public static function getDefaultName(): ?string
    {
        return 'start-new-session';
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->modalContent(view('filament.app.actions.start-new-session'));
        $this->modalWidth('xl');

        $this->modalFooterActions([
            \Filament\GlobalSearch\Actions\Action::make('start')
                ->button()
                ->size('md')
                ->label('Start')
                ->extraAttributes(['class' => 'outline-primary'])
                ->emitTo('timer', 'timerStarted'),
            \Filament\GlobalSearch\Actions\Action::make('stop')
                ->button()
                ->size('md')
                ->label('Stop')
                ->extraAttributes(['class' => 'outline-gray'])
                ->emitTo('timer', 'timerStopped'),
            \Filament\GlobalSearch\Actions\Action::make('discard')
                ->button()
                ->size('md')
                ->label('Discard')
                ->extraAttributes(['class' => 'outline-danger'])
                ->emitTo('timer', 'discardSession'),
        ]);
    }
}
