<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testProjectList()
    {
        $user       = new User();
        $authUser   = $user->where(['email'=>'admin@example.com'])->first();
        $response   = $this->actingAs($authUser)
                           ->withSession(['foo' => 'bar'])
                           ->get('/projects');

        $response->assertStatus(200);
    }
}
