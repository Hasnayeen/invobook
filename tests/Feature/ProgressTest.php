<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\Task;
use App\Core\Models\Project;
use Illuminate\Support\Facades\Event;

class ProgressTest extends TestCase
{
    /** @test */
    public function user_can_add_step_to_a_task()
    {
        Event::fake();
        $project = factory(Project::class)->create(['owner_id' => $this->user]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
        $project->members()->save($this->user);
        $task = factory(Task::class)->create(['taskable_type' => 'project', 'taskable_id' => $project->id]);

        $this->actingAs($this->user)
             ->post('tasks/' . $task->id . '/steps', [
                 'group_type'  => $task->taskable_type,
                 'group_id'    => $task->taskable_id,
                 'description' => 'First step',
                 'unknown'     => true,
             ])
             ->assertJsonFragment([
                 'status'      => 'success',
                 'message'     => 'Step added to the task',
                 'description' => 'First step',
                 'unknown'     => true,
                 'done'        => false,
             ]);
    }
}
