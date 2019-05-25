<?php

namespace App\Core\Models;

use App\Core\Contracts\Searchable;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Event extends Model
{
    use LogsActivity, Searchable;

    protected $fillable = ['name', 'description', 'time', 'place', 'created_by', 'eventable_type', 'eventable_id', 'cycle_id'];
}
