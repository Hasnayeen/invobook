<?php
/**
 * Created by PhpStorm.
 * User: raja
 * Date: 2/23/17
 * Time: 1:31 AM
 */

namespace App\Services;


use App\Repositories\ProjectRepository;

class ProjectService
{
    /**
     * @var ProjectRepository
     */
    private $project;

    /**
     * @param ProjectRepository $project
     */
    public function __construct(ProjectRepository $project)
    {
        $this->project = $project;
    }

    /**
     * @param array $columns
     * @return mixed
     */
    public function projectList($columns = array('*'))
    {
        return $this->project->all($columns);
    }


}