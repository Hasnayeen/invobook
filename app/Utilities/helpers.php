<?php

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

if (! function_exists('application_last_updated')) {
    /**
     * Return the date when the application was last updated.
     *
     * @return string
     */
    function application_last_updated()
    {
        return date('F d Y', filemtime(base_path() . '/config/app.php'));
    }
}

if (! function_exists('create_permissions')) {
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

    if (! function_exists('get_locale')) {
        /**
         * Get user set locale or default locale.
         *
         * @return string
         */
        function get_locale(): ?string
        {
            if ($user = auth()->user()) {
                return $user->lang;
            }

            return 'en';
        }
    }

    if (! function_exists('localize')) {
        /**
         * Translate the given message.
         *
         * @param  string                                                         $key
         * @param  array                                                          $replace
         * @param  string                                                         $locale
         * @return \Illuminate\Contracts\Translation\Translator|string|array|null
         */
        function localize($key = null, $replace = [], $locale = null)
        {
            $result = trans($key, $replace, $locale);

            if ($result === $key) {
                preg_match('/^.+\.(.+)/', $key, $matches);

                return $matches[1];
            }

            return $result;
        }
    }
}
