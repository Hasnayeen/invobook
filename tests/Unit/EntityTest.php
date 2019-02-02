<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Cycle;
use App\Models\Project;

class EntityTest extends TestCase
{
    /** @test */
    public function entity_can_have_a_current_cycle()
    {
        $project = factory(Project::class)->create();
        factory(Cycle::class)->create(['cyclable_type' => 'project', 'cyclable_id' => $project->id]);
        $this->assertInstanceOf(Cycle::class, $project->current_cycle);
    }

    /** @test */
    public function entity_cant_have_overlapped_cycles()
    {
        // code
    }
}
