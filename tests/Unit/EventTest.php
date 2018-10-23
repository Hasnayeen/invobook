<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EventTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions, WithFaker, WithoutMiddleware;

    /**
     * @test
     */
    public function can_create_events()
    {
        $event = factory('App\Models\Event')->create();
        $user = factory('App\Models\User')->create();
        $data = [
            'name'           => 'Example event',
            'description'    => 'Just an event',
            'place'          => '439 Karley Loaf Suite 897',
            'time'           => 'day":"Mon","start":"05:58","end":"15:58',
            'created_by'     => $user->id,
            'eventable_type' => 'office',
            'eventable_id'   => 1,
        ];

        $this->post(route('events.store'), $data)->assertStatus(201)->assertJson([
            'message' => $data['name'] . ' task has been created',
        ]);
    }

    /**
     * @test
     */
    public function can_see_all_events()
    {
        $this->get(route('events.index'))->assertStatus(200)->assertJson([
            'status' => 'success',
        ]);
    }
    
    /**
     * @test
     */
    public function can_update_event()
    {
        $event = factory('App\Models\Event')->create();
        $user = factory('App\Models\User')->create();
        $data = [
            'name'           => 'Example event',
            'description'    => 'Just an event',
            'place'          => '439 Karley Loaf Suite 897',
            'time'           => 'day":"Mon","start":"05:58","end":"15:58',
            'created_by'     => $user->id,
            'eventable_type' => 'office',
            'eventable_id'   => 1,
        ];

        $this->put(route('events.update', 1), $data)->assertStatus(200)->assertJson([
            'status' => 'success',
        ]);
    }

    /**
     * @test
     */
    public function can_see_specific_event()
    {
        $this->can_create_events();
        $this->get(route('events.show', 1))->assertStatus(200)->assertJson([
            'status' => 'success',
        ]);
    }

    /**
     * @test
     */
    public function can_delete_a_event()
    {
        factory('App\Models\Event')->create();
        $this->delete(route('events.destroy', 1))->assertStatus(200)->assertJson([
            'status'  => 'success',
            'message' => 'The event has been deleted',
        ]);
    }
}
