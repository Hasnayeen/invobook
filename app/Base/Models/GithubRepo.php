<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class GithubRepo extends Model
{
    protected $fillable = ['github_repo_id', 'repo_name', 'entity_type', 'entity_id'];
}
