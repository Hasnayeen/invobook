<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Mention extends Model
{
    protected $fillable = ['username', 'mentiobale_type', 'mentiobale_id'];

    public function mentionable()
    {
        return $this->morphTo();
    }
}
