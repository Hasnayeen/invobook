<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Status;

class StatusTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->status = factory(Status::class)->create();
    }

    /** @test */
    public function user_can_get_all_statuses()
    {
        $status = factory(Status::class, 2)->create();
        $this->actingAs($this->user)
             ->get('statuses')
             ->assertJsonFragment([
                 'status'  => 'success',
                 'name'    => $status[0]['name'],
                 'color'   => $status[0]['color'],
             ])
             ->assertJsonFragment([
                 'name'  => $status[1]['name'],
                 'color' => $status[1]['color'],
             ]);
    }

    /** @test */
    public function user_can_create_new_status()
    {
        $status = factory(Status::class)->make();

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
