<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['body', 'user_id', 'attachment_id', 'messageable_type', 'messageable_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
