<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = ['name', 'path', 'fileable_type', 'fileable_id', 'cycle_id', 'hash'];

    protected $appends = ['date'];

    protected $casts = [
        'fileable_id' => 'integer',
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function getDateAttribute()
    {
        return $this->created_at ? $this->created_at->format('M j') : null;
    }
}
