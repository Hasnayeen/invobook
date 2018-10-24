<?php

namespace App\Models;

use App\Contracts\HasMembers;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Office extends Model implements HasMembers
{
    use LogsActivity;

    protected $fillable = ['name', 'description', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany('App\Models\User', 'office_user', 'office_id', 'user_id');
    }

    public function messages()
    {
        return $this->morphMany('App\Models\Message', 'messageable');
    }
}
