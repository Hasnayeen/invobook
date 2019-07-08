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

    public function getAllTaskWithAssignee($type, $entityId, $cycleId = null)
    {
        $query = $cycleId ? $this->model->where('cycle_id', $cycleId) : $this->model->whereNull('cycle_id');

        return $query->where(['taskable_type' => $type, 'taskable_id' => $entityId])
                     ->with('user:id,avatar,username,name')
                     ->with('creator:id,avatar')
                     ->with('related:id,name')
                     ->with('status:id,name,color')
                     ->with('tags:id,label')
                     ->get(['id', 'name', 'notes', 'assigned_to', 'due_on', 'related_to', 'completed', 'parent_id', 'status_id', 'created_by', 'created_at']);
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
            'status_id'         => $data['status_id'] ?? 1,
            'cycle_id'          => $data['cycle_id'] ?? null,
        ]);
    }

    public function userCurrentlyWorkingOn(int $userId)
    {
        return $this->model->where('assigned_to', $userId)
                           ->whereHas('status', function ($query) {
                               $query->where('name', 'In Progress');
                           })
                           ->with('taskable:id,name')
                           ->with('steps')
                           ->orderBy('due_on')
                           ->get();
    }
}
