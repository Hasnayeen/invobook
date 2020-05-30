<?php

namespace App\Base\Policies;

use App\Authorization\Authorization;
use App\Base\Models\AppSetting;
use App\Base\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AppSettingPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the app models AppSetting.
     *
     * @param  \App\Base\Models\User             $user
     * @param  \App\Base\Models\AppSetting             $user
     * @return mixed
     */
    public function update(User $user, AppSetting $appSetting)
    {
        return (new Authorization($user))->userHasPermissionTo('update', 'app-settings');
    }
}
