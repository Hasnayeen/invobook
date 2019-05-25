<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Cycle extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function cyclable()
    {
        return $this->morphTo();
    }
}
