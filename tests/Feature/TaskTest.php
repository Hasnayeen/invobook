<?php

namespace Tests\Unit;

use Tests\TestCase;
use Spatie\Permission\Models\Permission;

class TaskTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->task = factory(\App\Models\Task::class)->create();
        create_permissions($this->task->taskable);
    }

    /** @test */
    public function user_with_permission_can_create_new_task()
    {
        $task = factory(\App\Models\Task::class)->make();
        $permission = Permission::create(['name' => 'create task.' . $task->taskable_type . '->' . $task->taskable_id]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ])->assertJsonFragment([
            'status'        => 'success',
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * */
    public function user_without_permission_cant_create_new_task()
    {
        $task = factory(\App\Models\Task::class)->make();
        $permission = Permission::create(['name' => 'create task.' . $task->taskable_type . '->' . $task->taskable_id]);
        $user = factory(\App\Models\User::class)->create();

        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ]);
    }

    /** @test */
    public function user_can_see_details_of_a_task()
    {
        $this->actingAs($this->user)->get('/tasks/' . $this->task->id)
        ->assertJsonFragment([
            'status'         => 'success',
            'name'           => $this->task->name,
            'notes'          => $this->task->notes,
            'assigned_to'    => $this->task->assigned_to,
            'related_to'     => $this->task->related_to,
            'due_on'         => $this->task->due_on,
            'avatar'         => $this->task->user->avatar,
        ]);
    }

    /** @test */
    public function user_can_see_tasks_of_a_group()
    {
        $project = factory('App\Models\Project')->create();
        $tasks = factory('App\Models\Task', 3)->create([
            'taskable_type' => 'project',
            'taskable_id'   => $project->id,
        ]);
        $this->actingAs($this->user)->call('GET', '/tasks', [
            'resource_type' => 'project',
            'resource_id'   => $project->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'total'            => 3,
            'name'             => $tasks[2]['name'],
        ]);

        $team = factory('App\Models\Team')->create();
        $tasks = factory('App\Models\Task', 3)->create([
            'taskable_type' => 'team',
            'taskable_id'   => $team->id,
        ]);
        $this->actingAs($this->user)->call('GET', '/tasks', [
            'resource_type' => 'team',
            'resource_id'   => $team->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'total'            => 3,
            'name'             => $tasks[2]['name'],
        ]);

        $office = factory('App\Models\Office')->create();
        $tasks = factory('App\Models\Task', 3)->create([
            'taskable_type' => 'office',
            'taskable_id'   => $office->id,
        ]);
        $this->actingAs($this->user)->call('GET', '/tasks', [
            'resource_type' => 'office',
            'resource_id'   => $office->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'total'            => 3,
            'name'             => $tasks[2]['name'],
        ]);
    }

    /** @test */
    public function user_with_permission_can_delete_a_task()
    {
        $this->actingAs($this->user)->delete('/tasks/' . $this->task->id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'The task has been deleted',
             ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * */
    public function user_without_permission_cant_delete_a_task()
    {
        $user = factory(\App\Models\User::class)->create();
        $this->actingAs($user)->delete('/tasks/' . $this->task->id);
    }
}
