<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];

    public function discussions()
    {
        return $this->hasMany(\App\Base\Models\Discussion::class);
    }
}
