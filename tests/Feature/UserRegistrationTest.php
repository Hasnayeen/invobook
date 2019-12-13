<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Models\Token;
use App\Base\Models\Invite;
use Illuminate\Support\Str;
use App\Office\Models\Office;
use App\Base\Mail\UserRegistered;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Notification;
use Illuminate\Contracts\Encryption\DecryptException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Base\Notifications\UserRegistered as UserRegisteredNotification;

class UserRegistrationTest extends TestCase
{
    use WithFaker;

    protected $token;

    public function setUp(): void
    {
        parent::setUp();

        $this->token = factory(Token::class)->create();
        Mail::fake();
        Notification::fake();
    }

    /** @test */
    public function guest_with_valid_token_can_access_registration_form()
    {
        $this->get('/register/' . encrypt($this->token->token))
            ->assertOk();
    }

    /** @test */
    public function guest_without_valid_token_gets_denied_access_to_registration_form()
    {
        $invalidToken = $this->faker->sha256;

        $this->expectException(DecryptException::class);

        $this->get("/register/{$invalidToken}")
            ->assertStatus('403');
    }

    /** @test */
    public function guest_with_valid_token_can_register_account()
    {
        $newUser = $this->get_fake_user_data();

        $this->register_user_request($newUser);

        $this->assertDatabaseHas(
            'users',
            collect($newUser)->except('password', 'password_confirmation')->toArray()
        );

        Mail::assertQueued(UserRegistered::class);
        Notification::assertSentTo(
            $this->user,
            UserRegisteredNotification::class
        );
    }

    /** @test */
    public function guest_with_invalid_token_cant_register_account()
    {
        $invalidToken = $this->faker->sha256;

        $this->expectException(DecryptException::class);

        $newUser = $this->get_fake_user_data();

        $this->post("/register/{$invalidToken}", $newUser)
            ->assertStatus('403');
    }

    /** @test */
    public function user_must_have_a_role()
    {
        $newUser = $this->get_fake_user_data();
        $this->register_user_request($newUser);

        $user = User::where('username', $newUser['username'])->first();
        $this->assertNotNull($user->role);
    }

    /** @test */
    public function guest_with_valid_shareable_link_can_register_account()
    {
        $newUser = $this->get_fake_user_data();
        factory(Office::class)->create([
            'name' => 'Headquarter',
        ]);
        $invite = Invite::create([
            'role_id' => 5,
            'link'    => url('register/invite-link/' . Str::random(32)),
        ]);

        $this->post($invite->link, $newUser)
             ->assertRedirect();

        $this->assertDatabaseHas(
            'users',
            collect($newUser)->except('password', 'password_confirmation')->toArray()
        );

        Mail::assertQueued(UserRegistered::class);
        Notification::assertSentTo(
            $this->user,
            UserRegisteredNotification::class
        );
    }

    /** @test */
    public function guest_without_valid_shareable_link_cant_register_account()
    {
        $this->expectException(HttpException::class);
        $newUser = $this->get_fake_user_data();
        factory(Office::class)->create([
            'name' => 'Headquarter',
        ]);

        $this->post(url('register/invite-link/invalid'), $newUser)
             ->assertStatus(403);
    }

    private function register_user_request($newUser)
    {
        factory(Office::class)->create([
            'name' => 'Headquarter',
        ]);

        return $this->post('/register/' . encrypt($this->token->token), $newUser);
    }

    private function get_fake_user_data()
    {
        return [
            'name'                  => $this->faker->name,
            'username'              => $this->faker->userName,
            'email'                 => $this->token->email,
            'password'              => 'secret12',
        ];
    }
}
