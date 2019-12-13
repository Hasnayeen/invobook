<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\TaskManager\Models\Task;

class TaskTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->task = factory(Task::class)->create();
    }

    /** @test */
    public function a_task_can_have_subtask()
    {
        $subtask = factory(Task::class)->create();

        $this->task->subtasks()->save($subtask);

        $this->assertEquals($this->task->id, $subtask->parent_id);
    }

    /** @test */
    public function when_retrieving_a_task_subtasks_will_be_eager_loaded_automatically()
    {
        $subtask = factory(Task::class)->create();

        $this->task->subtasks()->save($subtask);

        $task = Task::first();

        $this->assertTrue($task->relationLoaded('subtasks'));
    }
}
