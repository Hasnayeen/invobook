<?php

namespace App\Project\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectSetting extends Model
{
    protected $fillable = ['task_enabled', 'discussion_enabled', 'message_enabled', 'event_enabled', 'file_enabled', 'roadmap_enabled'];
}
