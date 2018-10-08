<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Tests\TestCase;

class UserRegistrationTest extends TestCase
{
    /**
     * @test
     */
    public function activity_log_is_stored_on_registered_event()
    {
        $user = factory(User::class)->create([
            'name' => 'John Doe'
        ]);

        event(new Registered($user));

        $this->assertDatabaseHas('activity_log', [
            'causer_id' => $user->getKey(),
            'causer_type' => get_class($user),
            'description' => 'User John Doe has registered'
        ]);

        return;
    }
}