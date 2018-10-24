<?php

namespace App\Contracts;

use App\Models\User;
use Illuminate\Support\Collection;

interface HasNotificationRecipients
{
    /**
     * @return Collection|User[]
     */
    public function getRecipients(): Collection;
}
