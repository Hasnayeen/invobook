<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Rate extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeDefault($query)
    {
        return $query->where('user_id', auth()->user()->id)->where('default', true)->sole();
    }

    public function rateable(): MorphTo
    {
        return $this->morphTo();
    }

    public function workSessions(): HasMany
    {
        return $this->hasMany(WorkSession::class);
    }
}
