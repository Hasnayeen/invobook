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
    public function user_with_permission_can_see_office_page()
    {
        $this->user_with_permission_can_create_office();
        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($this->user)->get('offices/' . $id)->assertSee('New Office');
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test
     */
    public function user_without_permission_cant_see_office_page()
    {
        $user = factory(\App\Models\User::class)->create();
        $this->user_with_permission_can_create_office();
        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($user)->get('offices/' . $id)->assertSee('New Office');
    }

    /** @test */
    public function user_with_permission_can_create_office()
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

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test
     */
    public function user_without_permission_cant_create_office()
    {
        $user = factory(\App\Models\User::class)->create();

        $this->actingAs($user)->post('/offices', [
            'name'        => 'New Office',
            'description' => 'Office of all new members',
        ]);
    }

    /** @test */
    public function user_with_permission_can_delete_a_office()
    {
        $this->user_with_permission_can_create_office();

        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($this->user)->delete('/offices/' . $id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'The office has been deleted',
             ]);
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test
     */
    public function user_without_permission_cant_delete_a_office()
    {
        $user = factory(\App\Models\User::class)->create();

        $this->user_with_permission_can_create_office();

        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($user)->delete('offices/' . $id);
    }
}
