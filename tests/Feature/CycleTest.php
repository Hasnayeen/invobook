<?php

namespace Tests\Feature;

use Tests\TestCase;

class CycleTest extends TestCase
{
    /** @test */
    public function admin_can_create_new_cycle()
    {
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
        $project->members()->save($this->user);

        $this->post('/cycles', [
            'name'       => 'V.1',
            'start_date' => '2019-06-13',
            'end_date'   => '2019-06-21',
            'group_type' => 'project',
            'group_id'   => $project->id,
        ])
        ->assertJsonFragment([
            'status'     => 'success',
            'name'       => 'V.1',
            'start_date' => 'Jun 13, 2019',
            'end_date'   => 'Jun 21, 2019',
        ]);

        $this->assertDatabaseHas('cycles', [
            'name'          => 'V.1',
            'start_date'    => '2019-06-13',
            'end_date'      => '2019-06-21',
            'cyclable_type' => 'project',
            'cyclable_id'   => $project->id,
        ]);
    }

    /** @test */
    public function cycle_in_same_group_cant_overlap_another_cycle()
    {
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
        $project->members()->save($this->user);

        factory(\App\Base\Models\Cycle::class)->create([
            'cyclable_type' => 'project',
            'cyclable_id'   => $project->id,
            'start_date'    => '2019-06-10',
            'end_date'      => '2019-06-25',
        ]);

        $this->post('/cycles', [
            'name'       => 'V.1',
            'start_date' => '2019-06-13',
            'end_date'   => '2019-06-21',
            'group_type' => 'project',
            'group_id'   => $project->id,
        ])
        ->assertJsonFragment([
            'status'  => 'error',
            'message' => 'This cycle overlap another cycle, try again',
        ]);

        $this->post('/cycles', [
            'name'       => 'V.2',
            'start_date' => '2019-06-01',
            'end_date'   => '2019-06-21',
            'group_type' => 'project',
            'group_id'   => $project->id,
        ])
        ->assertJsonFragment([
            'status'  => 'error',
            'message' => 'This cycle overlap another cycle, try again',
        ]);

        $this->post('/cycles', [
            'name'       => 'V.3',
            'start_date' => '2019-06-21',
            'end_date'   => '2019-06-29',
            'group_type' => 'project',
            'group_id'   => $project->id,
        ])
        ->assertJsonFragment([
            'status'  => 'error',
            'message' => 'This cycle overlap another cycle, try again',
        ]);

        $this->post('/cycles', [
            'name'       => 'V.4',
            'start_date' => '2019-06-01',
            'end_date'   => '2019-06-29',
            'group_type' => 'project',
            'group_id'   => $project->id,
        ])
        ->assertJsonFragment([
            'status'  => 'error',
            'message' => 'This cycle overlap another cycle, try again',
        ]);
    }

    /** @test */
    public function user_can_get_all_cycles()
    {
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        factory(\App\Base\Models\Cycle::class)->create([
            'name'          => 'June Release Cycle',
            'start_date'    => '2019-06-01',
            'end_date'      => '2019-06-28',
            'cyclable_type' => 'project',
            'cyclable_id'   => $project->id,
        ]);
        factory(\App\Base\Models\Cycle::class)->create([
            'name'          => 'July Release Cycle',
            'start_date'    => '2019-07-01',
            'end_date'      => '2019-07-28',
            'cyclable_type' => 'project',
            'cyclable_id'   => $project->id,
        ]);

        $this->actingAs($this->user)
             ->call('GET', '/cycles', [
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status'     => 'success',
                 'name'       => 'June Release Cycle',
                 'start_date' => 'Jun 1, 2019',
                 'end_date'   => 'Jun 28, 2019',
             ])
             ->assertJsonFragment([
                 'name'       => 'July Release Cycle',
                 'start_date' => 'Jul 1, 2019',
                 'end_date'   => 'Jul 28, 2019',
             ]);
    }
}
