<?php

namespace App\Filament\App\Resources;

use App\Filament\App\Resources\ClientResource\Pages;
use App\Models\Client;
use Filament\Facades\Filament;
use Filament\Forms\Form;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Laravel\Pennant\Feature;

class ClientResource extends Resource
{
    protected static ?string $model = Client::class;
    protected static ?string $navigationIcon = 'lucide-user-square-2';
    protected static ?string $navigationGroup = 'Work';
    protected static ?int $navigationSort = 4;

    public static function shouldRegisterNavigation(): bool
    {
        return Feature::active('client');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->columns(3)
            ->schema([
                // Toggle::make('registered')
                //     ->label('Your client already has an account')
                //     ->default(true)
                //     ->reactive(),
                // Toggle::make('sent_invite')
                //     ->label('Sent invite to create one')
                //     ->default(false)
                //     ->hidden(fn (Get $get) => $get('registered') === true),
                // Select::make('user_id')
                //     ->options(Filament::getTenant()->members)
                //     ->requiredWithout(['name', 'email'])
                //     ->hidden(fn (Get $get) => $get('registered') === false)
                //     ->columnStart(1),
                Select::make('team_id')
                    ->label('Team')
                    ->options([Filament::getTenant()->id => Filament::getTenant()->name])
                    ->default(Filament::getTenant()->id)
                    ->selectablePlaceholder(false)
                    ->required(),
                TextInput::make('name')
                    ->label('Client name')
                    ->hidden(fn (Get $get) => $get('registered') === true)
                    ->maxLength(255),
                TextInput::make('email')
                    ->hidden(fn (Get $get) => $get('registered') === true)
                    ->email()
                    ->maxLength(255),
                Textarea::make('address')
                    ->hidden(fn (Get $get) => $get('registered') === true)
                    ->maxLength(65535),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('address'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListClients::route('/'),
            // 'create' => Pages\CreateClient::route('/create'),
            'edit' => Pages\EditClient::route('/{record}/edit'),
        ];
    }
}
