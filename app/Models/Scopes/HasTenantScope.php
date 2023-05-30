<?php

namespace App\Models\Scopes;

use App\Models\Team;

trait HasTenantScope
{
    public static function booted(): void
    {
        parent::booted();

        static::addGlobalScope(new TenantScope);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
