<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    protected $fillable = ['token', 'email', 'role_id'];
}
