<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TaskTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
        $this->task = factory(\App\Models\Task::class)->create();
    }

    /** @test */
    public function user_can_create_new_task()
    {
        $task = factory(\App\Models\Task::class)->make();
        $this->actingAs($this->user)->post(route('tasks.store'), [
            'title'         => $task->title,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ])->assertJsonFragment([
            'status'        => 'success',
            'title'         => $task->title,
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
            'title'          => $this->task->title,
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
            'title'            => $tasks[2]['title'],
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
            'title'            => $tasks[2]['title'],
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
            'title'            => $tasks[2]['title'],
        ]);
    }
}
