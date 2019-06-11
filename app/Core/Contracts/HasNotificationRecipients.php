<?php

namespace App\Core\Contracts;

use App\Core\Models\User;
use Illuminate\Support\Collection;

interface HasNotificationRecipients
{
    /**
     * @return Collection|User
     */
    public function getRecipients(): Collection;
}
