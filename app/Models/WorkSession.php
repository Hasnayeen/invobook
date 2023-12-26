<?php

namespace App\Models;

use App\Models\Builders\WorkSessionQueryBuilder;
use App\Models\Scopes\HasTenantScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WorkSession extends Model
{
    use HasFactory;
    use HasTenantScope;

    public function newEloquentBuilder($query): WorkSessionQueryBuilder
    {
        return new WorkSessionQueryBuilder($query);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function rate(): BelongsTo
    {
        return $this->belongsTo(Rate::class);
    }
}
