<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Office;

class OfficeTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->office = factory('App\Models\Office')->create();
    }

    /** @test */
    public function owner_can_create_office()
    {
        $this->actingAs($this->user)->post('offices', [
            'name'        => 'New Office',
            'description' => 'Description for new office',
            'owner_id'    => $this->user->id,
        ])->assertJsonFragment([
            'status' => 'success',
            'name'   => 'New Office',
        ]);
        $this->assertDatabaseHas('offices', ['name' => 'New Office', 'description' => 'Description for new office', 'owner_id' => $this->user->id]);

        $id = Office::where('name', 'New Office')->first()->id;
        $this->assertTrue($this->user->hasPermissionTo('view office->' . $id));
        $this->assertTrue($this->user->hasPermissionTo('edit office->' . $id));
        $this->assertTrue($this->user->hasPermissionTo('delete office->' . $id));
    }
}
