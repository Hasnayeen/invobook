<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Event;
use Illuminate\Auth\AuthenticationException;

class EventTest extends TestCase
{
    /** @test */
    public function user_can_get_all_events()
    {
        $events = factory(Event::class, 3)->create();
        $this->actingAs($this->user)->get('events')
            ->assertJsonFragment([
                'status' => 'success',
                'name'   => $events[0]->name,
                'name'   => $events[1]->name,
                'name'   => $events[2]->name,
            ]);
    }

    /** @test */
    public function authenticated_user_can_create_a_event()
    {
        $event = factory(Event::class)->make();
        $this->actingAs($this->user)
            ->post('/events', $event->toArray());
        $this->assertDatabaseHas('events', $event->toArray());
    }

    /** @test */
    public function guest_user_cant_create_a_event()
    {
        $this->expectException(AuthenticationException::class);
        $this->post('/events');
    }
}
