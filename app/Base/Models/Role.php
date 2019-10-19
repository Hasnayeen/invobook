<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'role_has_permission');
    }

    public function defaultPermissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_settings');
    }

    public function permissionsOnGroup($groupType, $groupId)
    {
        return $this->belongsToMany(Permission::class, 'role_has_permission')->wherePivot('group_type', $groupType)->wherePivot('group_id', $groupId);
    }
}
