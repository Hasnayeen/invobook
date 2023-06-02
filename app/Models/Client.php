<?php

namespace App\Models;

use App\Models\Scopes\HasTenantScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Client extends Model
{
    use HasFactory;
    use HasTenantScope;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function rates(): MorphMany
    {
        return $this->morphMany(Rate::class, 'rateable');
    }
}
