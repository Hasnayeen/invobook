<?php

namespace Tests\Feature;

use ErrorException;
use Tests\TestCase;
use App\Core\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;

class RegistrationInvitationTest extends TestCase
{
    private static $endpoint = 'register/invite';

    public function setUp(): void
    {
        parent::setUp();
        Mail::fake();
    }

    /** @test */
    public function authenticated_user_can_send_invitation()
    {
        $this->actingAs($this->user);
        $email = 'john.doe@example.com';

        $this->assertDatabaseMissing('users', ['email' => $email]);

        $response = $this->post(self::$endpoint, ['email' => $email]);

        $response->assertStatus(200);
        $response->assertJson([
            'status'  => 'success',
            'message' => 'Invitation sent successfully',
        ]);
    }

    /** @test */
    public function guest_can_not_send_invitation()
    {
        $this->expectException(AuthenticationException::class);
        $this->expectExceptionMessage('Unauthenticated');
        $this->post(self::$endpoint, []);
    }

    /** @test */
    public function invitation_is_not_sent_if_email_is_in_database_already()
    {
        $this->actingAs($this->user);
        $user = factory(User::class)->create(['email' => 'john.doe@example.com']);

        $response = $this->post(self::$endpoint, ['email' => $user->email]);

        $response->assertStatus(409);
        $response->assertJson([
            'status'  => 'error',
            'message' => 'Email already exist',
        ]);
    }

    /** @test */
    public function email_needs_to_be_supplied_in_request()
    {
        $this->expectException(ErrorException::class);

        $this->actingAs($this->user);
        $this->post(self::$endpoint, []);
    }

    /** @test */
    public function admin_can_create_shareable_invite_link()
    {
        $response = $this->actingAs($this->user)
             ->post('register/invite-link', [
                 'role_id'     => 3,
                 'expiry_date' => '2019-07-20',
             ])
             ->assertJsonFragment([
                 'status' => 'success',
             ]);

        $this->assertDatabaseHas('invites', ['role_id' => 3, 'expiry_date' => '2019-07-20']);
        $this->assertStringStartsWith(url('register/invite-link/'), $response->decodeResponseJson()['link']);
    }

    /** @test */
    public function a_role_should_be_selected_to_create_invite_link()
    {
        $this->expectException(ValidationException::class);
        $this->actingAs($this->user)
             ->post('register/invite-link', [
                 'expiry_date' => '2019-07-20',
             ]);
    }

    /** @test */
    public function admin_can_get_the_shareable_invite_link_for_a_role()
    {
        $response = $this->actingAs($this->user)
            ->post('register/invite-link', [
                'role_id'     => 3,
            ]);

        // dd($response->decodeResponseJson()['link']);

        $this->actingAs($this->user)
            ->call('GET', 'register/invite-link', [
                'role_id'     => 3,
            ])
            ->assertJsonFragment([
                'status' => 'success',
                'link'   => $response->decodeResponseJson()['link'],
            ]);
    }
}
