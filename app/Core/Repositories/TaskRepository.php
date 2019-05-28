<?php

namespace App\Core\Repositories;

use App\Core\Models\Task;

class TaskRepository
{
    protected $model;

    public function __construct(Task $task)
    {
        $this->model = $task;
    }

    public function getAllTaskWithAssignee($type, $entityId)
    {
        return $this->model->where(['taskable_type' => $type, 'taskable_id' => $entityId])->with('user:id,avatar')->get(['id', 'name', 'notes', 'assigned_to', 'due_on', 'related_to', 'completed', 'parent_id']);
    }

    /**
     * @param  array                 $data
     * @return \App\Core\Models\Task
     */
    public function create(array $data): Task
    {
        return $this->model->create([
            'name'              => $data['name'],
            'assigned_to'       => $data['assigned_to'] ?? null,
            'created_by'        => auth()->user()->id,
            'notes'             => $data['notes'],
            'due_on'            => $data['due_on'],
            'related_to'        => $data['related_to'] ?? null,
            'taskable_type'     => $data['group_type'],
            'taskable_id'       => $data['group_id'],
            'status_id'         => $data['status_id'] ?? null,
            'cycle_id'          => $data['cycle_id'] ?? null,
        ]);
    }
}
