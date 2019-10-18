<?php

namespace App\Base\Utilities;

use App\Base\Models\User;
use Illuminate\Support\Collection;

trait GetRecipientsTrait
{
    /**
     * Returns collection of users associated with provided group (project/team/office).
     *
     * @param mixed $group
     * @param int   $ownerId
     *
     * @return Collection
     */
    public function getRecipients($group, $ownerId): Collection
    {
        return $group->first()->members()->get()
            ->filter(function (User $user) use ($ownerId) {
                return $user->getKey() !== $ownerId;
            });
    }
}
