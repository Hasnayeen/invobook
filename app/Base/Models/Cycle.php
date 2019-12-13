<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Cycle extends Model
{
    protected $fillable = ['name', 'start_date', 'end_date', 'cyclable_type', 'cyclable_id'];

    protected $casts = [
        'start_date' => 'datetime:M j, Y',
        'end_date'   => 'datetime:M j, Y',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function cyclable()
    {
        return $this->morphTo();
    }
}
