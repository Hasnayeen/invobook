<?php

namespace App\Models;

use Filament\Support\Colors\Color;
use App\Models\Scopes\HasTenantScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Status extends Model
{
    use HasFactory;
    use HasTenantScope;

    protected function getPreviewAttribute()
    {
        return $this->attributes['name'];
    }

    protected function getColorCodeAttribute()
    {
        return 'rgba(' . match ($this->attributes['color']) {
                    'gray' => Color::Gray[500],
                    'danger' => Color::Red[500],
                    'warning' => Color::Orange[500],
                    'yellow' => Color::Yellow[500],
                    'success' => Color::Green[500],
                    'teal' => Color::Teal[500],
                    'cyan' => Color::Cyan[500],
                    'info' => Color::Blue[500],
                    'indigo' => Color::Indigo[500],
                    'purple' => Color::Purple[500],
                    'pink' => Color::Pink[500],
                    default => null,
                } . ')';
    }
}
