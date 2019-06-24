<?php

namespace App\Core\Utilities;

use App\Core\Models\Team;
use App\Core\Models\Office;
use App\Core\Models\Project;

trait GroupTrait
{
    private function getGroupModel()
    {
        switch (request('group_type')) {
            case 'team':
                return Team::find(request('group_id'));
            case 'office':
                return Office::find(request('group_id'));
            default:
                return Project::find(request('group_id'));
        }
    }
}
