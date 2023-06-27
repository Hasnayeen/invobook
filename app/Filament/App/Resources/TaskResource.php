<?php

namespace App\Filament\App\Resources;

use App\Filament\App\Resources\TaskResource\Pages;
use App\Models\Task;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TaskResource extends Resource
{
    protected static ?string $model = Task::class;
    protected static ?string $navigationIcon = 'heroicon-o-list-bullet';
    protected static ?string $navigationGroup = 'Work';
    protected static ?int $navigationSort = 2;
    protected static ?string $recordTitleAttribute = 'title';
    public static $count;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('project_id')
                    ->required()
                    ->relationship('project', 'name'),
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('issue_link')
                    ->label('Issue')
                    ->hint('Link to the issue on Github')
                    ->maxLength(255),
                Forms\Components\TextInput::make('pr_link')
                    ->label('PR')
                    ->hint('Link to the pull request on Github')
                    ->maxLength(255),
                Forms\Components\TextInput::make('status')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->maxLength(65535)
                    ->columnStart(1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            // ->contentGrid([
            //     'md' => 2,
            //     'xl' => 3,
            // ])
            ->columns([
                Tables\Columns\TextColumn::make('project.name'),
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
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created')
                    ->date(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
                Tables\Actions\ForceDeleteBulkAction::make(),
                Tables\Actions\RestoreBulkAction::make(),
            ])
            ->defaultGroup('status')
            ->groups([
                'status',
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTasks::route('/'),
            'create' => Pages\CreateTask::route('/create'),
            'view' => Pages\ViewTask::route('/{record}/view'),
            'edit' => Pages\EditTask::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }

    public static function getNavigationBadge(): ?string
    {
        if (config('tasks.count')) {
            return config('tasks.count');
        }
        config(['tasks.count' => $count = static::getModel()::count()]);

        return $count;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'info';
    }
}
