<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class File extends Model
{
    use LogsActivity;

    protected $fillable = ['name', 'path', 'fileable_type', 'fileable_id', 'cycle_id'];

    protected $casts = [
        'fileable_id' => 'integer',
    ];
}
