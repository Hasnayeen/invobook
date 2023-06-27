<?php

namespace App\Models;

use App\Models\Scopes\HasTenantScope;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Client extends Model
{
    use HasFactory;
    use HasTenantScope;
    use HasUlids;

    public function uniqueIds(): array
    {
        return ['id'];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function rates(): MorphMany
    {
        return $this->morphMany(Rate::class, 'rateable');
    }

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }
}
