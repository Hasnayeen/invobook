<?php

namespace Tests\Feature;

use Tests\TestCase;

class StatusTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->status = factory(\App\Models\Status::class)->create();
    }

    public function test_create_new_status()
    {
        $status = factory(\App\Models\Status::class)->make();

        $this->actingAs($this->user)->post('/statuses', [
            'name'      => $status->name,
            'color'     => $status->color,
        ])->assertJsonFragment([
            'status'    => 'success',
            'message'   => 'New status has been created',
            'name'      => $status->name,
            'color'     => $status->color,
        ]);
    }
}
