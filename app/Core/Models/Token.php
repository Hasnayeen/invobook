<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    protected $fillable = ['token', 'email', 'role_id'];
}
