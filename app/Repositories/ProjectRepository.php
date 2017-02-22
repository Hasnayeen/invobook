<?php
/**
 * Created by PhpStorm.
 * User: raja
 * Date: 2/23/17
 * Time: 1:25 AM
 */

namespace App\Repositories;


use App\Models\Project;

class ProjectRepository
{
    /**
     * @var Project
     */
    private $model;

    /**
     * @param Project $project
     */
    public function __construct(Project $project)
    {
        $this->model = $project;
    }

    /**
     * @param array $columns
     * @return mixed
     */
    public function all($columns = array('*'))
    {
        return $this->model->get($columns);
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data)
    {
        return $this->model->create($data);
    }

    /**
     * @param array $data
     * @param $id
     * @param string $attribute
     * @return mixed
     */
    public function update(array $data, $id, $attribute="id")
    {
        return $this->model->where($attribute, '=', $id)->update($data);
    }

    /**
     * @param $id
     * @return int
     */
    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    /**
     * @param $id
     * @param array $columns
     * @return mixed
     */
    public function findById($id, $columns = array('*'))
    {
        return $this->model->find($id, $columns);
    }

    /**
     * @param array $ids
     * @param array $columns
     * @return mixed
     */
    public function findByMultipleIds(array $ids, array $columns = array('*'))
    {
        return $this->model->findMany($ids,$columns);
    }

    /**
     * @param $attribute
     * @param $value
     * @param array $columns
     * @return mixed
     */
    public function findBy($attribute, $value, $columns = array('*'))
    {
        return $this->model->where($attribute, '=', $value)->first($columns);
    }
}