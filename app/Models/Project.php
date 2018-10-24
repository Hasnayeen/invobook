<?php

namespace App\Models;

use App\Contracts\HasMembers;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model implements HasMembers
{
    use LogsActivity;

    protected $fillable = ['name', 'description', 'office_id', 'team_id', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany('App\Models\User', 'project_user', 'project_id', 'user_id');
    }

    public function messages()
    {
        return $this->morphMany('App\Models\Message', 'messageable');
    }

    public function tasks()
    {
        return $this->morphMany(\App\Models\Task::class, 'taskable');
    }

    public function routeNotificationFor()
    {
        return '';
    }
}
