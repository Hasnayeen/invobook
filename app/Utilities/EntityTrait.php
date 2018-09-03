<?php

namespace App\Utilities;

use App\Models\Team;
use App\Models\Office;
use App\Models\Project;

trait EntityTrait
{
    private function getEntityModel()
    {
        switch (request('resource_type')) {
            case 'team':
                return Team::find(request('resource_id'));
            case 'office':
                return Office::find(request('resource_id'));
            default:
                return Project::find(request('resource_id'));
        }
    }
}
