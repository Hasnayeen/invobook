<?php
/**
 * Created by PhpStorm.
 * User: raja
 * Date: 2/21/17
 * Time: 12:22 AM
 */

namespace App\Repositories\Eloquents;

use App\Models\Project;
use App\Repositories\Eloquents\Repository;


class ProjectRepository extends Repository
{

    /**
     * @return mixed
     */
    function model()
    {
        return Project::class;
    }
}