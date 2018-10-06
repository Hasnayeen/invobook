<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class UserTest extends TestCase
{
    /** @test */
    public function owner_can_see_all_users()
    {
        factory('App\Models\User', 5)->create();
        $users = User::all(['name', 'username', 'email', 'timezone', 'avatar']);
        $this->actingAs($this->user)->get('admin')
            ->assertSee($users[0]['name'])
            ->assertSee($users[0]['username'])
            ->assertSee($users[0]['email'])
            ->assertSee($users[5]['name'])
            ->assertSee($users[5]['username'])
            ->assertSee($users[5]['email']);
    }

    /** @test */
    public function user_can_upload_avatar_image()
    {
        $this->actingAs($this->user);
        Storage::fake('public');
        $this->post('users/' . $this->user->username . '/avatar', [
            'avatar' => UploadedFile::fake()->image('avatar.png'),
        ]);
        $this->assertEquals('storage/avatars/' . $this->user->username . '.png', auth()->user()->avatar);
        Storage::disk('public')->assertExists('avatars/' . $this->user->username . '.png');
    }

    /** @test */
    public function user_can_change_email_and_passwords()
    {
        $this->actingAs($this->user)->put('users/' . $this->user->username . '/account', [
            'email'                         => 'new@email.com',
            'new_password'                  => 'new_password',
            'new_password_confirmation'     => 'new_password',
        ])->assertJson([
            'status'  => 'success',
            'message' => 'Account details are updated',
        ]);
        $this->assertDatabaseHas('users', ['email' => 'new@email.com']);
        password_verify('new_password', $this->user->password);
    }
}
