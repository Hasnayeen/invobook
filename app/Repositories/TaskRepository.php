<?php

namespace App\Repositories;

use App\Models\Task;

class TaskRepository
{
    protected $model;

    public function __construct(Task $task)
    {
        $this->model = $task;
    }

    public function getAllTaskWithAssignee($type, $id)
    {
        return $this->model->where(['taskable_type' => $type, 'taskable_id' => $id])->with('user:id,avatar')->get(['id', 'name', 'notes', 'assigned_to', 'due_on', 'completed']);
    }

    /**
     * @param  mixed $total
     * @return mixed
     */
    public function getLatestProject($total)
    {
        return $this->model->orderBy('created_at', 'desc')->take($total)->get();
    }
}
