<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class TaskControllerTest extends TestCase
{
    use DatabaseMigrations;
    use WithoutMiddleware;

    /**
     * Test method store().
     *
     * @return void
     */
    public function test_store_method_creates_new_task()
    {
        $task = factory(\App\Models\Task::class)->make();
        $response = $this->call('POST', route('tasks.store'), [
            '_token'        => csrf_token(),
            'title'         => $task->title,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ]);
        $this->assertEquals(200, $response->getStatusCode());
    }

    /**
     * Negative testcase for store() method.
     * @return void
     */
    public function test_store_method_throws_error_for_wrong_data()
    {
        $response = $this->call('POST', route('tasks.store'), [
            '_token' => csrf_token(),
            'due_on' => 'invalid_date',
        ]);
        $this->assertEquals(302, $response->getStatusCode());
    }
}
