<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int id
 */
class Comment extends Model
{
    protected $fillable = [
        'discussion_id',
        'user_id',
        'body',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return BelongsTo
     */
    public function discussion(): BelongsTo
    {
        return $this->belongsTo(Discussion::class, 'discussion_id');
    }
}
