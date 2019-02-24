<?php

namespace App\Core\Utilities;

use App\Core\Models\Team;
use App\Core\Models\Office;
use App\Core\Models\Project;

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
