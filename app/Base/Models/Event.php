<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['name', 'description', 'time', 'place', 'created_by', 'eventable_type', 'eventable_id', 'cycle_id'];
}
