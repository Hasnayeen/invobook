<?php

namespace App\Models;

use App\Models\Discussion;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function discussions()
    {
        return $this->hasMany(Discussion::class);
    }
}
