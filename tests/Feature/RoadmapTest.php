<?php

namespace Tests\Feature;

use Carbon\Carbon;
use Tests\TestCase;
use App\Base\Models\Cycle;
use App\Project\Models\Project;
use App\Discussion\Models\Discussion;

class RoadmapTest extends TestCase
{
    /** @test */
    public function user_can_see_roadmap_of_current_and_next_2_cycles()
    {
        $today = Carbon::today();
        $project = factory(Project::class)->create();
        $cycle = factory(Cycle::class)->create([
            'name'          => 'v1 Release',
            'cyclable_type' => 'project',
            'cyclable_id'   => $project->id,
            'start_date'    => $today->toDateString(),
            'end_date'      => $today->addDays(30)->toDateString(),
        ]);
        $cycle2 = factory(Cycle::class)->create([
            'name'          => 'v2 Release',
            'cyclable_type' => 'project',
            'cyclable_id'   => $project->id,
            'start_date'    => $today->addDays(1)->toDateString(),
            'end_date'      => $today->addDays(30)->toDateString(),
        ]);
        $cycle3 = factory(Cycle::class)->create([
            'name'          => 'v3 Release',
            'cyclable_type' => 'project',
            'cyclable_id'   => $project->id,
            'start_date'    => $today->addDays(1)->toDateString(),
            'end_date'      => $today->addDays(30)->toDateString(),
        ]);

        $discussion = factory(Discussion::class)->create([
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
            'cycle_id'            => $cycle->id,
        ]);

        $discussion2 = factory(Discussion::class)->create([
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
            'cycle_id'            => $cycle2->id,
        ]);

        $discussion3 = factory(Discussion::class)->create([
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
            'cycle_id'            => $cycle3->id,
        ]);

        $this->actingAs($this->user)
             ->call('GET', '/cycles/' . $cycle->id . '/roadmap', [
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status' => 'success',
                 'name'   => $discussion->name,
             ])
             ->assertJsonFragment([
                 'name' => $discussion2->name,
             ])
             ->assertJsonFragment([
                 'name' => $discussion3->name,
             ]);
    }
}
