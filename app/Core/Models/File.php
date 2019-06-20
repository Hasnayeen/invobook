<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = ['name', 'path', 'fileable_type', 'fileable_id', 'cycle_id', 'hash'];

    protected $casts = [
        'fileable_id' => 'integer',
    ];
}
