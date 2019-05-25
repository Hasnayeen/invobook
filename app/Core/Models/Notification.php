<?php

namespace App\Core\Models;

use Illuminate\Notifications\DatabaseNotification;

class Notification extends DatabaseNotification
{
    protected $casts = [
        'data'          => 'array',
        'read_at'       => 'datetime',
        'notifiable_id' => 'integer',
    ];

    protected $appends = ['date'];

    public function getDateAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
