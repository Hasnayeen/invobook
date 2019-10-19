<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Project\Models\Project;

class GroupSettingsTest extends TestCase
{
    /** @test */
    public function user_can_get_group_settings()
    {
        $project = factory(Project::class)->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user)
             ->call('GET', 'groups/settings', [
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status'             => 'success',
                 'task_enabled'       => '1',
                 'discussion_enabled' => '1',
                 'message_enabled'    => '1',
                 'event_enabled'      => '1',
                 'file_enabled'       => '1',
             ]);
    }

    /** @test */
    public function admin_can_enable_and_disable_tools()
    {
        $project = factory(Project::class)->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user);
        $project->members()->save($this->user);

        $this->call('PUT', 'groups/settings', [
                 'group_type'   => 'project',
                 'group_id'     => $project->id,
                 'task_enabled' => 0,
             ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Settings have been updated',
             ]);
        $this->assertDatabaseHas('project_settings', ['project_id' => $project->id, 'task_enabled' => 0]);

        $this->call('PUT', 'groups/settings', [
                 'group_type'   => 'project',
                 'group_id'     => $project->id,
                 'task_enabled' => 1,
             ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Settings have been updated',
             ]);
        $this->assertDatabaseHas('project_settings', ['project_id' => $project->id, 'task_enabled' => 1]);
    }
}
