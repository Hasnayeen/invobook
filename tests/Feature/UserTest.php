<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
    }

    /** @test */
    public function get_all_users()
    {
        $users = factory('App\Models\User', 5)->create();
        $response = $this->actingAs($this->user)->get('users');
        $response->assertJsonFragment([
            'status'     => 'success',
            'username'   => $users[0]->username,
            'name'       => $users[0]->name,
        ]);
    }
}
