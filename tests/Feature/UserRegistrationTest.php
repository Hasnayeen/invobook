<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Token;
use App\Models\Office;
use App\Mail\UserRegistered;
use Illuminate\Support\Facades\Mail;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Testing\WithFaker;
use Symfony\Component\HttpKernel\Exception\HttpException;

class UserRegistrationTest extends TestCase
{
    use WithFaker;

    protected $token;

    public function setUp()
    {
        parent::setUp();

        $this->token = factory(Token::class)->create();

        Mail::fake();
    }

    /** @test */
    public function activity_log_is_stored_on_registered_event()
    {
        $user = factory(User::class)->create([
            'name' => 'John Doe',
        ]);

        event(new Registered($user));

        $this->assertDatabaseHas('activity_log', [
            'causer_id'   => $user->getKey(),
            'causer_type' => get_class($user),
            'description' => 'User John Doe has registered',
        ]);
    }

    /** @test */
    public function guest_with_valid_token_can_access_registration_form()
    {
        $this->get("/register/{$this->token->token}")
            ->assertOk();
    }

    /** @test */
    public function guest_without_valid_token_gets_denied_access_to_registration_form()
    {
        $invalidToken = $this->faker->sha256;

        $this->expectException(HttpException::class);

        $this->get("/register/{$invalidToken}")
            ->assertStatus('403');
    }

    /** @test */
    public function guest_with_valid_token_can_register_account()
    {
        factory(Office::class)->create([
            'name' => 'Headquarter',
        ]);

        $newUser = [
            'name'                  => $this->faker->name,
            'username'              => $this->faker->userName,
            'email'                 => $this->token->email,
            'password'              => 'secret12',
            'password_confirmation' => 'secret12',
        ];

        $this->post("/register/{$this->token->token}", $newUser);

        $this->assertDatabaseHas(
            'users',
            collect($newUser)->except('password', 'password_confirmation')->toArray()
        );

        Mail::assertQueued(UserRegistered::class);
    }

    /** @test */
    public function guest_with_invalid_token_cant_register_account()
    {
        $invalidToken = $this->faker->sha256;

        $this->expectException(HttpException::class);

        $newUser = [
            'name'                  => $this->faker->name,
            'username'              => $this->faker->userName,
            'email'                 => $this->token->email,
            'password'              => 'secret12',
            'password_confirmation' => 'secret12',
        ];

        $this->post("/register/{$invalidToken}", $newUser)
            ->assertStatus('403');
    }
}
