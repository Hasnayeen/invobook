<?php

namespace App\Base\Models;

use Illuminate\Notifications\DatabaseNotification;

class Notification extends DatabaseNotification
{
    protected $casts = [
        'data'          => 'array',
        'read_at'       => 'datetime',
        'notifiable_id' => 'integer',
    ];

    protected $appends = ['date', 'time'];

    public function getDateAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getTimeAttribute()
    {
        return $this->created_at->format('h:i A');
    }
}
