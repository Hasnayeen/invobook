<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['body', 'user_id', 'attachment_id', 'messageable_type', 'messageable_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function messageable()
    {
        return $this->morphTo();
    }

    public function mentions()
    {
        return $this->morphMany(Mention::class, 'mentionable');
    }
}
