<?php

namespace Tests\Feature;

use App\Models\Status;
use Tests\TestCase;
use App\Models\Task;
use Illuminate\Auth\AuthenticationException;

class TaskStatusTest extends TestCase
{
    /** @test */
    public function user_can_get_task_status()
    {
        $status = factory(Status::class,1);
        $task = factory(Task::class, 1)->create(['status_id' => $status->id]);

        $this->actingAs($this->user)->get('/tasks/' . $task->id . '/status')
            ->assertJsonFragment([
                'status.name' => $status->name,
                'name'        => $task->name,
            ]);
    }
}
