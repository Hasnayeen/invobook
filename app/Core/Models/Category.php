<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];

    public function discussions()
    {
        return $this->hasMany(\App\Core\Models\Discussion::class);
    }
}
