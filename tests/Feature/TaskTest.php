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
    public function user_can_see_details_of_a_task()
    {
        $response = $this->actingAs($this->user)->get('/tasks/' . $this->task->id);
        $response->assertJsonFragment([
            'status'         => 'success',
            'title'          => $this->task->title,
            'notes'          => $this->task->notes,
            'assigned_to'    => $this->task->assigned_to,
            'related_to'     => $this->task->related_to,
            'due_on'         => $this->task->due_on,
            'avatar'         => $this->task->user->avatar,
        ]);
    }
}
