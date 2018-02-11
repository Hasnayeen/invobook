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
    public function store_method_throws_error_for_wrong_data()
    {
        $response = $this->call('POST', route('tasks.store'), [
            '_token' => csrf_token(),
            'due_on' => 'invalid_date',
        ]);
        $this->assertEquals(302, $response->getStatusCode());
    }
}
