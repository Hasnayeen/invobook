<?php

namespace Tests\Feature;

use Tests\TestCase;
use Laravel\Passport\Passport;
use App\Project\Models\Project;
use App\TaskManager\Models\Task;
use Illuminate\Support\Facades\Event;

class HomePageTest extends TestCase
{
    /** @test */
    public function user_can_see_current_work_in_progress_assigned_to_them()
    {
        Event::fake();
        $project = factory(Project::class)->create(['office_id' => null, 'team_id' => null]);
        $project->members()->attach($this->user->id);
        $task = factory(Task::class)->create(['taskable_type' => 'project', 'taskable_id' => $project->id, 'assigned_to' => $this->user->id, 'status_id' => 2]);
        $this->actingAs($this->user)
             ->get('/')
             ->assertSee($task->name);

        Passport::actingAs($this->user);
        $this->get('api/home')
             ->assertJsonFragment([
                 'status' => 'success',
                 'name'   => $task->name,
             ]);
    }
}
