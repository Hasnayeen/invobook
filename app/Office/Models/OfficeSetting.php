<?php

namespace App\Office\Models;

use Illuminate\Database\Eloquent\Model;

class OfficeSetting extends Model
{
    protected $fillable = ['task_enabled', 'discussion_enabled', 'message_enabled', 'event_enabled', 'file_enabled', 'roadmap_enabled'];
}
