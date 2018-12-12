<?php

namespace App\Models;

use App\Contracts\Huntable;
use App\Contracts\HasMembers;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Team extends Entity implements HasMembers
{
    use LogsActivity, Huntable;

    protected $type = 'team';

    protected $fillable = ['name', 'description', 'office_id', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\User::class, 'team_user', 'team_id', 'user_id');
    }

    public function cycles()
    {
        return $this->morphMany(Cycle::class, 'cyclable');
    }
}
