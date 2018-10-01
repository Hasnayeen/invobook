<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Office extends Model
{
    use LogsActivity;

    protected $fillable = ['name', 'description', 'owner_id'];

    public function members()
    {
        return $this->belongsToMany('App\Models\User', 'office_user', 'office_id', 'user_id');
    }

    public function messages()
    {
        return $this->morphMany('App\Models\Message', 'messageable');
    }
}
