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
    }

    /** @test */
    public function user_can_create_new_task()
    {
        $task = factory(\App\Models\Task::class)->make();
        $response = $this->actingAs($this->user)
                         ->post(route('tasks.store'), [
                             'title'         => $task->title,
                             'assigned_to'   => $task->assigned_to,
                             'notes'         => $task->notes,
                             'due_on'        => $task->due_on,
                             'taskable_type' => $task->taskable_type,
                             'taskable_id'   => $task->taskable_id,
                         ]);
        $response->assertJsonFragment([
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
    public function user_can_see_tasks()
    {
        $project = factory('App\Models\Project')->create();
        $tasks = factory('App\Models\Task', 5)->create([
            'taskable_type' => 'project',
            'taskable_id'   => $project->id,
        ]);
        $response = $this->actingAs($this->user)->get('/projects/' . $project->slug . '/tasks');
        $response->assertSee($tasks[0]->title);
    }
}
