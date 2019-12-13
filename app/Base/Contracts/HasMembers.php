<?php

namespace App\Base\Contracts;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;

interface HasMembers
{
    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany;
}
