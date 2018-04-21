<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TeamTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
        $this->team = factory('App\Models\Team')->create();
    }

    /** @test */
    public function user_can_see_team_page()
    {
        $response = $this->actingAs($this->user)->get('teams/' . $this->team->slug);
        $response->assertSee($this->team->name);
    }
}
