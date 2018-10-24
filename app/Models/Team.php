<?php

namespace App\Models;

use App\Contracts\HasMembers;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Activitylog\Traits\LogsActivity;

class Team extends Model implements HasMembers
{
    use LogsActivity;

    protected $fillable = ['name', 'description', 'office_id', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany('App\Models\User', 'team_user', 'team_id', 'user_id');
    }

    public function messages()
    {
        return $this->morphMany('App\Models\Message', 'messageable');
    }
}
