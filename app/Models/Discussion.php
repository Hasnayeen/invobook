<?php

namespace App\Models;

use App\Contracts\HasMembers;
use App\Events\DiscussionCreated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * @property int id
 * @property string name
 * @property int posted_by
 */
class Discussion extends Model
{
    use LogsActivity;

    protected $fillable = ['name', 'content', 'raw_content', 'posted_by', 'archived', 'draft', 'discussionable_type', 'discussionable_id', 'category_id'];

    protected $dispatchesEvents = [
        'created' => DiscussionCreated::class,
    ];

    protected $appends = ['date'];

    public function creator()
    {
        return $this->belongsTo(\App\Models\User::class, 'posted_by');
    }

    public function getDateAttribute()
    {
        return $this->created_at->format('M j');
    }

    public function category()
    {
        return $this->belongsTo(\App\Models\Category::class);
    }

    /**
     * @return MorphTo|HasMembers
     */
    public function discussionable(): MorphTo
    {
        return $this->morphTo();
    }
}
