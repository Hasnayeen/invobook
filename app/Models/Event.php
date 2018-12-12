<?php

namespace App\Models;

use App\Contracts\Huntable;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Event extends Model
{
    use LogsActivity, Huntable;

    protected $fillable = ['name', 'description', 'time', 'place', 'created_by', 'eventable_type', 'eventable_id', 'cycle_id'];
}
