<?php

namespace App\Core\Models;

use App\Core\Contracts\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * @property int id
 * @property string name
 * @property int posted_by
 */
class Discussion extends Model
{
    use Searchable;

    protected static function huntableFields()
    {
        return ['name', 'content'];
    }

    protected $fillable = ['name', 'content', 'raw_content', 'posted_by', 'archived', 'draft', 'discussionable_type', 'discussionable_id', 'category_id', 'cycle_id'];

    protected $appends = ['date'];

    protected $casts = [
        'posted_by' => 'integer',
        'draft'     => 'boolean',
    ];

    public function creator()
    {
        return $this->belongsTo(\App\Core\Models\User::class, 'posted_by');
    }

    public function getDateAttribute()
    {
        return $this->created_at->format('M j');
    }

    public function category()
    {
        return $this->belongsTo(\App\Core\Models\Category::class);
    }

    /**
     * @return MorphMany
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    /**
     * @return MorphTo|HasMembers
     */
    public function discussionable(): MorphTo
    {
        return $this->morphTo();
    }
}
