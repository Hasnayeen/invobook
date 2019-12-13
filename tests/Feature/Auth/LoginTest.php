<?php

namespace Tests\Feature\Auth;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Exceptions\Handler;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->app->instance(ExceptionHandler::class, new Handler(app()));
    }

    protected function loginRoute()
    {
        return url('login');
    }

    protected function logoutRoute()
    {
        return url('logout');
    }

    /** @test */
    public function user_can_view_a_login_form()
    {
        $response = $this->get($this->loginRoute());

        $response->assertSuccessful();
        $response->assertViewIs('auth.login');
    }

    /** @test */
    public function user_cannot_view_a_login_form_when_authenticated()
    {
        $response = $this->actingAs($this->user)->get($this->loginRoute());

        $response->assertRedirect('/');
    }

    /** @test */
    public function user_can_login_with_correct_credentials()
    {
        $user = factory(User::class)->create();

        $response = $this->post($this->loginRoute(), [
            'email'    => $user->email,
            'password' => 'secret',
        ]);

        $response->assertRedirect('/');
        $this->assertAuthenticatedAs($user);
    }

    /** @test */
    public function remember_me_functionality()
    {
        $user = factory(User::class)->create();

        $response = $this->post($this->loginRoute(), [
            'email'    => $user->email,
            'password' => 'secret',
            'remember' => 'on',
        ]);

        $response->assertRedirect('/');
        $response->assertCookie(Auth::guard()->getRecallerName(), vsprintf('%s|%s|%s', [
            $user->id,
            $user->getRememberToken(),
            $user->password,
        ]));
        $this->assertAuthenticatedAs($user);
    }

    /** @test */
    public function user_cannot_login_with_incorrect_password()
    {
        $user = factory(User::class)->create();

        $response = $this->from($this->loginRoute())->post($this->loginRoute(), [
            'email'    => $user->email,
            'password' => 'invalid-password',
        ]);

        $response->assertRedirect($this->loginRoute());
        $response->assertSessionHasErrors('email');
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /** @test */
    public function user_cannot_login_with_email_that_does_not_exist()
    {
        $response = $this->from($this->loginRoute())->post($this->loginRoute(), [
            'email'    => 'nobody@example.com',
            'password' => 'invalid-password',
        ]);

        $response->assertRedirect($this->loginRoute());
        $response->assertSessionHasErrors('email');
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }

    /** @test */
    public function user_can_logout()
    {
        $this->be(factory(User::class)->create());

        $response = $this->post($this->logoutRoute());

        $response->assertRedirect('/');
        $this->assertGuest();
    }

    /** @test */
    public function user_cannot_logout_when_not_authenticated()
    {
        $response = $this->post($this->logoutRoute());

        $response->assertRedirect('/');
        $this->assertGuest();
    }

    /** @test */
    public function user_cannot_make_more_than_five_attempts_in_one_minute()
    {
        $user = factory(User::class)->create([
            'password' => bcrypt('secret'),
        ]);

        foreach (range(0, 5) as $_) {
            $response = $this->from($this->loginRoute())->post($this->loginRoute(), [
                'email'    => $user->email,
                'password' => 'invalid-password',
            ]);
        }

        $response->assertRedirect($this->loginRoute());
        $response->assertSessionHasErrors('email');
        $this->assertStringContainsString(
            'Too many login attempts.',
            collect(
                $response
                ->baseResponse
                ->getSession()
                ->get('errors')
                ->getBag('default')
                ->get('email')
            )->first()
        );
        $this->assertTrue(session()->hasOldInput('email'));
        $this->assertFalse(session()->hasOldInput('password'));
        $this->assertGuest();
    }
}
