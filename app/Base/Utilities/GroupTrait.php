<?php

namespace App\Base\Utilities;

use App\Team\Models\Team;
use App\Office\Models\Office;
use App\Project\Models\Project;

trait GroupTrait
{
    private function getGroupModel()
    {
        if (request('group_type')) {
            switch (request('group_type')) {
                case 'team':
                    return Team::find(request('group_id'));
                case 'office':
                    return Office::find(request('group_id'));
                default:
                    return Project::find(request('group_id'));
            }
        } else {
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
}
