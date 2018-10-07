<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Discussion extends Model
{
    use LogsActivity;

    protected $fillable = ['name', 'content', 'raw_content', 'posted_by', 'archived', 'draft', 'discussionable_type', 'discussionable_id', 'category_id'];

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
}
