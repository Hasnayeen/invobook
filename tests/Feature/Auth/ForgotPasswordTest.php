<?php

namespace Tests\Feature\Auth;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Exceptions\Handler;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ForgotPasswordTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->app->instance(ExceptionHandler::class, new Handler(app()));
    }

    protected function passwordRequestRoute()
    {
        return url('password/reset');
    }

    protected function passwordEmailGetRoute()
    {
        return url('password/email');
    }

    protected function passwordEmailPostRoute()
    {
        return url('password/email');
    }

    protected function guestMiddlewareRoute()
    {
        return url('/');
    }

    /** @test */
    public function user_can_view_an_email_password_form()
    {
        $response = $this->get($this->passwordRequestRoute());

        $response->assertSuccessful();

        $response->assertViewIs('auth.passwords.email');
    }

    /** @test */
    public function user_cannot_view_an_email_password_form_when_authenticated()
    {
        $response = $this->actingAs($this->user)->get($this->passwordRequestRoute());

        $response->assertRedirect($this->guestMiddlewareRoute());
    }

    /** @test */
    public function user_receives_an_email_with_a_password_reset_link()
    {
        Notification::fake();
        $user = factory(User::class)->create();

        $this->post($this->passwordEmailPostRoute(), [
            'email' => $user->email,
        ]);

        $this->assertNotNull($token = DB::table('password_resets')->first());

        Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($token) {
            return Hash::check($notification->token, $token->token) === true;
        });
    }

    /** @test */
    public function user_does_not_receive_email_when_not_registered()
    {
        Notification::fake();
        $response = $this->from($this->passwordEmailGetRoute())->post($this->passwordEmailPostRoute(), [
            'email' => 'nobody@example.com',
        ]);
        $response->assertRedirect($this->passwordEmailGetRoute());
        $response->assertSessionHasErrors('email');
        Notification::assertNotSentTo(factory(User::class)->make(['email' => 'nobody@example.com']), ResetPassword::class);
    }

    /** @test */
    public function email_is_required()
    {
        $response = $this->from($this->passwordEmailGetRoute())->post($this->passwordEmailPostRoute(), []);

        $response->assertRedirect($this->passwordEmailGetRoute());

        $response->assertSessionHasErrors('email');
    }

    /** @test */
    public function email_is_a_valid_email()
    {
        $response = $this->from($this->passwordEmailGetRoute())->post($this->passwordEmailPostRoute(), [
            'email' => 'invalid-email',
        ]);
        $response->assertRedirect($this->passwordEmailGetRoute());

        $response->assertSessionHasErrors('email');
    }
}
