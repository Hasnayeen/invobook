<?php

namespace App\Models;

use Spatie\Activitylog\Traits\LogsActivity;

class Office extends Entity
{
    use LogsActivity;

    protected $type = 'office';

    protected $fillable = ['name', 'description', 'owner_id'];

    public function members()
    {
        return $this->belongsToMany(\App\Models\User::class, 'office_user', 'office_id', 'user_id');
    }
}
