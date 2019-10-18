<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = ['name', 'access_token', 'enabled', 'active'];
    protected $casts = [
        'active'  => 'boolean',
        'enabled' => 'boolean',
    ];
}
