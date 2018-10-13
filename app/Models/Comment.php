<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int id
 */
class Comment extends Model
{
    protected $fillable = [
        'body',
        'user_id',
        'commentable_id',
        'commentable_type',
    ];

    protected $casts = [
        'commentable_id' => 'integer',
    ];

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return MorphTo
     */
    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }
}
