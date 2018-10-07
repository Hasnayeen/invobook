<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

if (!function_exists('about')) {
    /**
     * Get or set software related values.
     *
     * @param  string $key
     * @param  string $value
     * @return array
     */
    function about($key, $value = null)
    {
        $string = file_get_contents(storage_path() . '/config/about.json');
        $config = json_decode($string, true);

        if (is_null($value)) {
            return $config[$key];
        }

        $config[$key] = $value;
        file_put_contents(storage_path() . '/config/about.json', json_encode($config));

        return $config;
    }
}

if (!function_exists('create_permissions')) {
    /**
     * Create permissions for a single resource.
     *
     * @param  \Illuminate\Database\Eloquent\Model $resource
     * @return array
     */
    function create_permissions($resource)
    {
        $key = $resource->getRouteKeyName();
        $resourceType = strtolower(class_basename($resource));

        $role = Role::where('name', 'owner')->first();
        $permission = Permission::create(['name' => 'view ' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'edit ' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'delete ' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'create task.' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'edit task.' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'delete task.' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'create discussion.' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'edit discussion.' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
        $permission = Permission::create(['name' => 'delete discussion.' . $resourceType . '->' . $resource->$key, 'guard_name' => 'web']);
        $role->givePermissionTo($permission);
    }
}
