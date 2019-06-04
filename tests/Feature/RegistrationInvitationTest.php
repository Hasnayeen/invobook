<?php

namespace Tests\Feature;

use ErrorException;
use Tests\TestCase;
use App\Core\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Auth\AuthenticationException;

class RegistrationInvitationTest extends TestCase
{
    private static $endpoint = 'register/invite';

    public function setUp(): void
    {
        parent::setUp();
        Mail::fake();
    }

    /**
     * @test
     */
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

    /**
     * @test
     */
    public function guest_can_not_send_invitation()
    {
        $this->expectException(AuthenticationException::class);
        $this->expectExceptionMessage('Unauthenticated');
        $this->post(self::$endpoint, []);
    }

    /**
     * @test
     */
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

    /**
     * @test
     */
    public function email_needs_to_be_supplied_in_request()
    {
        $this->expectException(ErrorException::class);

        $this->actingAs($this->user);
        $this->post(self::$endpoint, []);
    }
}
