<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;

class ProjectTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testProjectList()
    {
        $user = new User();
        $authUser = $user->where(['email'=>'admin@example.com'])->first();
        $response = $this->actingAs($authUser)
                           ->withSession(['foo' => 'bar'])
                           ->get('/projects');

        $response->assertStatus(200);
    }
}
