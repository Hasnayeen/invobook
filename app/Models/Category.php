<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Category extends Model
{
    use LogsActivity;

    /**
     * attr that can be mass assigned
     * 
     * @var []
     */
    protected $fillable = [
    	'name'
    ];

    
    public function discussions()
    {
        return $this->hasMany(\App\Models\Discussion::class);
    }
}
