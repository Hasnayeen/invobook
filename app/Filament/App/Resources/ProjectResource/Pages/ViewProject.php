<?php

namespace App\Filament\App\Resources\ProjectResource\Pages;

use App\Filament\App\Resources\ProjectResource;
use App\Models\Project;
use App\Models\Task;
use Filament\Infolists\Components\Group;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\Split;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\TextEntry\TextEntrySize;
use Filament\Infolists\Concerns\InteractsWithInfolists;
use Filament\Infolists\Contracts\HasInfolists;
use Filament\Infolists\Infolist;
use Filament\Resources\Pages\Page;
use Filament\Tables;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;

class ViewProject extends Page implements HasInfolists, HasTable
{
    use InteractsWithInfolists;
    use InteractsWithTable;

    protected static string $resource = ProjectResource::class;
    protected static string $view = 'filament.app.resources.project-resource.pages.view-project';

    public $record;

    public function mount(Project $project)
    {
        $this->record = $project->find(request()->route()->parameter('record'));
    }

    public function getTitle(): string
    {
        $resource = static::getResource();

        if (! $resource::hasRecordTitle()) {
            return \Illuminate\Support\Str::headline($resource::getModelLabel());
        }

        return $resource::getRecordTitle($this->record);
    }

    public function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->state([
                'tasks' => $this->getTable()->getRecords()->groupBy('status.name'),
            ])
            ->schema([
                Split::make(fn () => $this->getInfolist('infolist')
                    ->getState()['tasks']
                    ->sortKeysUsing(fn ($a, $b) => $b <=> $a)
                    ->map(fn ($item, $key) => Group::make([
                        Section::make('')
                            ->extraAttributes([
                                'class' => '!bg-black/10 !ring-0 rounded-lg shadow-none kanban-column',
                            ])
                            ->schema([
                                TextEntry::make($key)
                                    ->view('components.name-with-badge', ['name' => $key, 'count' =>$item->count(), 'color' => $item->first()->status?->color]),
                                RepeatableEntry::make('tasks.' . $key)
                                    ->label('')
                                    ->schema([
                                        TextEntry::make('title')
                                            ->label('')
                                            ->url(fn ($record) => route('filament.app.resources.tasks.view', ['tenant' => filament()->getTenant(), 'record' => $record]))
                                            ->size(TextEntrySize::Large)
                                            ->extraAttributes([
                                                'class' => 'font-semibold',
                                            ]),
                                        TextEntry::make('description')
                                            ->label('')
                                            ->hidden(fn ($record) => ! $record->description),
                                        ImageEntry::make('assignedTo.avatar')
                                            ->defaultImageUrl(fn ($record) => 'https://unavatar.io/sindresorhus@gmail.com')
                                            ->label('')
                                            ->width('2rem')
                                            ->height('2rem'),
                                        TextEntry::make('created_at')
                                            ->formatStateUsing(fn ($state) => $state->toFormattedDateString())
                                            ->label('')
                                            ->size(TextEntrySize::ExtraSmall),
                                    ]),
                            ])
                        ])
                    )
                    ->toArray()
                )
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(Task::query()
                ->where('project_id', request()->route()->parameter('record'))
                ->with('status')
                ->limit(20)
            )
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->limit(25)
                    ->searchable(),
                Tables\Columns\TextColumn::make('issue_link')
                    ->label('Issue')
                    ->url(fn ($record) => $record->issue_link)
                    ->limit(20)
                    ->openUrlInNewTab(),
                Tables\Columns\TextColumn::make('pr_link')
                    ->label('PR')
                    ->url(fn ($record) => $record->pr_link)
                    ->limit(20)
                    ->openUrlInNewTab(),
                Tables\Columns\TextColumn::make('assignedTo.name'),
                Tables\Columns\TextColumn::make('depends_on'),
                Tables\Columns\TextColumn::make('status.name')
                    ->badge()
                    ->color(fn ($record) => $record->status?->color)
                    ->icon(fn ($record) => $record->status?->icon),
                Tables\Columns\TextColumn::make('due_on')
                    ->date(),
            ])
            ->defaultGroup('status.name');
    }
}
