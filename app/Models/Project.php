<?php

namespace App\Models;

use App\Contracts\HasMembers;
use App\Contracts\Searchable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Entity implements HasMembers
{
    use LogsActivity, Searchable;

    protected $type = 'project';

    protected $fillable = ['name', 'description', 'office_id', 'team_id', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(\App\Models\User::class, 'project_user', 'project_id', 'user_id');
    }

    public function routeNotificationFor()
    {
        return '';
    }

    public function cycles()
    {
        return $this->morphMany(Cycle::class, 'cyclable');
    }
}
