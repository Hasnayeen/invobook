<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Invite extends Model
{
    protected $fillable = ['link', 'role_id', 'expiry_date'];
}
