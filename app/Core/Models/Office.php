<?php

namespace App\Core\Models;

use App\Core\Contracts\HasMembers;
use App\Core\Contracts\Searchable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Office extends Entity implements HasMembers
{
    use LogsActivity, Searchable;

    protected $type = 'office';

    protected $fillable = ['name', 'description', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(\App\Core\Models\User::class, 'office_user', 'office_id', 'user_id');
    }

    public function cycles()
    {
        return $this->morphMany(Cycle::class, 'cyclable');
    }
}
