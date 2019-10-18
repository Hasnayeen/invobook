<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Str;

class ServiceIntegrationTest extends TestCase
{
    /** @test */
    public function user_can_get_all_services()
    {
        $this->addService('github');
        $this->get('admin/services')
             ->assertJsonFragment([
                 'status'  => 'success',
                 'name'    => 'github',
                 'active'  => true,
                 'enabled' => true,
             ]);
    }

    /** @test */
    public function user_can_add_service()
    {
        $this->addService('github')
            ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'Service added successfully',
            ]);

        $this->assertDatabaseHas('services', ['name' => 'github', 'enabled' => true, 'active' => true]);
    }

    private function addService($name)
    {
        $token = Str::random(40);

        return $this->actingAs($this->user)->post('admin/services', [
            'name'         => $name,
            'access_token' => $token,
        ]);
    }

    /** @test */
    public function user_can_enable_a_service()
    {
        $this->addService('github');
        $this->actingAs($this->user)
        ->call('PUT', '/admin/services/github', [
            'status' => true,
        ])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Github integration has been enabled',
        ]);
    }

    /** @test */
    public function user_can_disable_a_service()
    {
        $this->addService('github');
        $this->actingAs($this->user)
        ->call('PUT', '/admin/services/github', [
            'status' => false,
        ])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Github integration has been disabled',
        ]);
    }
}
