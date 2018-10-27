<?php

namespace Tests\Feature;

use Tests\TestCase;

class ServiceIntegrationTest extends TestCase
{
    /** @test */
    public function user_can_add_service()
    {
        $token = str_random(40);
        $this->actingAs($this->user)->post('admin/services', [
            'name'         => 'github',
            'access_token' => $token,
        ])->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Service added successfully',
        ]);
    }
}
