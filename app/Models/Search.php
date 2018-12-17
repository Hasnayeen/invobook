<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class Search extends Model
{
    use Searchable;

    protected $fillable = ['name', 'description'];

    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function huntable()
    {
        return $this->morphTo();
    }
}
