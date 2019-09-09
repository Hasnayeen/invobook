<?php

namespace Tests\Feature;

use Tests\TestCase;

class RoleTest extends TestCase
{
    /** @test */
    public function get_all_roles()
    {
        $response = $this->actingAs($this->user)
             ->get('/roles')
             ->assertJsonFragment([
                 'status' => 'success',
                 'slug'   => 'owner',
             ])
             ->assertJsonFragment([
                 'slug' => 'admin',
             ])
             ->assertJsonFragment([
                 'slug' => 'member',
             ])
             ->assertJsonFragment([
                 'slug' => 'client',
             ])
             ->assertJsonFragment([
                 'slug' => 'guest',
             ]);
        $this->assertCount(5, $response->decodeResponseJson()['roles']);
    }
}
