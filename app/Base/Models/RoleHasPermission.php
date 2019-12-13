<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class RoleHasPermission extends Model
{
    protected $table = 'role_has_permission';

    public $incrementing = true;
}
