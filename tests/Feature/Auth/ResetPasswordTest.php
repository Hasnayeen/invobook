<?php

namespace Tests\Feature\Auth;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Exceptions\Handler;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ResetPasswordTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->app->instance(ExceptionHandler::class, new Handler(app()));
    }

    protected function getValidToken($user)
    {
        return Password::broker()->createToken($user);
    }

    protected function getInvalidToken()
    {
        return 'invalid-token';
    }

    protected function passwordResetGetRoute($token)
    {
        return url('password/reset', $token);
    }

    protected function passwordResetPostRoute()
    {
        return url('password/reset');
    }

    protected function successfulPasswordResetRoute()
    {
        return url('/');
    }

    protected function guestMiddlewareRoute()
    {
        return url('/');
    }

    /** @test */
    public function user_can_view_a_password_reset_form()
    {
        $response = $this->get($this->passwordResetGetRoute($token = $this->getValidToken($this->user)));

        $response->assertSuccessful();
        $response->assertViewIs('auth.passwords.reset');
        $response->assertViewHas('token', $token);
    }

    /** @test */
    public function user_cannot_view_a_password_reset_form_when_authenticated()
    {
        $response = $this->actingAs($this->user)->get($this->passwordResetGetRoute($this->getValidToken($this->user)));

        $response->assertRedirect($this->guestMiddlewareRoute());
    }

    /** @test */
    public function user_can_reset_password_with_valid_token()
    {
        Event::fake();

        $response = $this->post($this->passwordResetPostRoute(), [
            'token'                 => $this->getValidToken($this->user),
            'email'                 => $this->user->email,
            'password'              => 'new-awesome-password',
            'password_confirmation' => 'new-awesome-password',
        ]);

        $response->assertRedirect($this->successfulPasswordResetRoute());
        $this->assertEquals($this->user->email, $this->user->fresh()->email);
        $this->assertTrue(Hash::check('new-awesome-password', $this->user->fresh()->password));
        $this->assertAuthenticatedAs($this->user);
        Event::assertDispatched(PasswordReset::class, function ($e) {
            return $e->user->id === $this->user->id;
        });
    }

    /** @test */
    public function user_cannot_reset_password_with_invalid_token()
    {
        $user = factory(User::class)->create([
            'password' => bcrypt('old-password'),
        ]);

        $response = $this->from($this->passwordResetGetRoute($this->getInvalidToken()))->post($this->passwordResetPostRoute(), [
            'token'                 => $this->getInvalidToken(),
            'email'                 => $user->email,
            'password'              => 'new-awesome-password',
            'password_confirmation' => 'new-awesome-password',
        ]);

        $response->assertRedirect($this->passwordResetGetRoute($this->getInvalidToken()));
        $this->assertEquals($user->email, $user->fresh()->email);
        $this->assertTrue(Hash::check('old-password', $user->fresh()->password));
        $this->assertGuest();
    }

    /** @test */
    public function user_cannot_reset_password_without_providing_a_new_password()
    {
        $user = factory(User::class)->create([
            'password' => bcrypt('old-password'),
        ]);
        $response = $this->from($this->passwordResetGetRoute($token = $this->getValidToken($user)))->post($this->passwordResetPostRoute(), [
            'token'                 => $token,
            'email'                 => $user->email,
            'password'              => '',
            'password_confirmation' => '',
        ]);
        $response->assertRedirect($this->passwordResetGetRoute($token));
        $response->assertSessionHasErrors('password');
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertEquals($user->email, $user->fresh()->email);
        $this->assertTrue(Hash::check('old-password', $user->fresh()->password));
        $this->assertGuest();
    }

    /** @test */
    public function user_cannot_reset_password_without_providing_an_email()
    {
        $user = factory(User::class)->create([
            'password' => bcrypt('old-password'),
        ]);

        $response = $this->from($this->passwordResetGetRoute($token = $this->getValidToken($user)))
                         ->post($this->passwordResetPostRoute(), [
            'token'                 => $token,
            'email'                 => '',
            'password'              => 'new-awesome-password',
            'password_confirmation' => 'new-awesome-password',
        ]);

        $response->assertRedirect($this->passwordResetGetRoute($token));
        $response->assertSessionHasErrors('email');
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertEquals($user->email, $user->fresh()->email);
        $this->assertTrue(Hash::check('old-password', $user->fresh()->password));
        $this->assertGuest();
    }
}
