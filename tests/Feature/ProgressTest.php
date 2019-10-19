<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Step;
use App\Project\Models\Project;
use App\TaskManager\Models\Task;
use Illuminate\Support\Facades\Event;

class ProgressTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        Event::fake();
        $this->project = factory(Project::class)->create(['owner_id' => $this->user]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($this->project);
        $this->project->members()->save($this->user);
        $this->task = factory(Task::class)->create(['taskable_type' => 'project', 'taskable_id' => $this->project->id]);
    }

    /** @test */
    public function user_can_add_step_to_a_task()
    {
        $this->actingAs($this->user)
             ->post('tasks/' . $this->task->id . '/steps', [
                 'group_type'  => $this->task->taskable_type,
                 'group_id'    => $this->task->taskable_id,
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

    /** @test */
    public function user_can_see_all_steps_of_a_task()
    {
        $steps = factory(Step::class, 2)->create(['task_id' => $this->task->id]);

        $this->actingAs($this->user)
             ->call('GET', 'tasks/' . $this->task->id . '/steps', [
                 'group_type'  => $this->task->taskable_type,
                 'group_id'    => $this->task->taskable_id,
             ])
             ->assertJsonFragment([
                 'status'      => 'success',
                 'description' => $steps[0]['description'],
                 'task_id'     => $this->task->id,
             ])
             ->assertJsonFragment([
                 'description' => $steps[1]['description'],
             ]);
    }
}
