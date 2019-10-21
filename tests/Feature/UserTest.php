<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use Laravel\Passport\Passport;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;

class UserTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function owner_can_see_all_users_in_admin_page()
    {
        factory('App\Base\Models\User', 2)->create();
        $users = User::all(['name', 'username', 'email', 'timezone', 'avatar']);
        $this->actingAs($this->user)->get('admin')
            ->assertSee($users[0]['name'])
            ->assertSee($users[0]['username'])
            ->assertSee($users[0]['email'])
            ->assertSee($users[1]['name'])
            ->assertSee($users[1]['username'])
            ->assertSee($users[1]['email']);
    }

    /** @test */
    public function owner_can_see_all_users()
    {
        factory('App\Base\Models\User', 2)->create();
        $users = User::all(['name', 'username', 'email', 'timezone', 'avatar']);
        $this->actingAs($this->user)->get('users')
            ->assertJsonFragment([
                'status'   => 'success',
                'name'     => $users[0]->name,
                'username' => $users[0]->username,
                'name'     => $users[1]->name,
                'username' => $users[1]->username,
            ]);
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
    public function user_can_change_email()
    {
        $this->actingAs($this->user)->put('users/' . $this->user->username . '/account', [
            'email' => 'new@email.com',
        ])->assertJson([
            'status'  => 'success',
            'message' => 'Account details are updated',
        ]);
        $this->assertDatabaseHas('users', ['email' => 'new@email.com']);
    }

    /** @test */
    public function user_can_change_username()
    {
        $newUsername = 'new' . $this->user->username;
        $this->actingAs($this->user)->put('users/' . $this->user->username . '/account', [
            'username' => $newUsername,
        ])->assertJson([
            'status'  => 'success',
            'message' => 'Account details are updated',
        ]);
        $this->assertDatabaseHas('users', ['username' => $newUsername]);
    }

    /** @test */
    public function user_can_change_passwords()
    {
        $this->actingAs($this->user)->put('users/' . $this->user->username . '/account', [
            'new_password'              => 'new_password',
            'new_password_confirmation' => 'new_password',
        ])->assertJson([
            'status'  => 'success',
            'message' => 'Account details are updated',
        ]);
        password_verify('new_password', $this->user->password);
    }

    /**
     * @test
     */
    public function guest_can_not_see_admin_page()
    {
        $guest = factory(User::class)->create(['role_id' => 5]);

        $this->actingAs($guest)
             ->get('admin')
             ->assertRedirect('/');
    }

    /** @test */
    public function user_can_update_their_profile()
    {
        $this->actingAs($this->user);

        $updatedData = [
            'name'          => $this->faker->name,
            'bio'           => $this->faker->paragraph,
            'designation'   => $this->faker->jobTitle,
            'timezone'      => $this->faker->timezone,
            'week_start'    => $this->faker->dayOfWeek,
        ];

        $this->put("users/{$this->user->id}/profile", $updatedData)
            ->assertSessionHasNoErrors();

        $this->assertDatabaseHas('users', $updatedData);
    }

    /** @test */
    public function user_cant_update_profile_if_required_properties_are_missing()
    {
        $this->actingAs($this->user);

        $this->expectException('Illuminate\Validation\ValidationException');

        $updatedData = [
            'name'          => '',
            'bio'           => $this->faker->paragraph,
            'designation'   => $this->faker->jobTitle,
            'timezone'      => '',
            'week_start'    => '',
        ];

        $this->put("users/{$this->user->id}/profile", $updatedData);
    }

    /** @test */
    public function user_can_check_if_username_exists()
    {
        $this->actingAs($this->user);

        $response = $this->json('GET', '/username', ['username' => $this->user->username . 'invert']);

        $response
            ->assertStatus(200)
            ->assertJson([
                'status'  => 'success',
                'message' => 'Username does not exist',
            ]);

        // User current username is considered as available so we check other username
        factory(User::class)->create(['username' => 'random']);
        $response = $this->json('GET', '/username', ['username' => 'random']);

        $response
            ->assertStatus(409)
            ->assertJson([
                'status'  => 'error',
                'message' => 'Username exists',
            ]);
    }

    /** @test */
    public function username_of_guest_user_cant_be_change()
    {
        $guest = factory(User::class)->create(['username' => 'guest']);
        $this->actingAs($guest)->put("users/{$guest->id}/account", [
            'username' => 'newUsername',
        ])->assertJson([
            'status'  => 'error',
            'message' => 'Username/Password is not updatable for this account',
        ]);

        $this->assertDatabaseHas('users', ['id' => $guest->id, 'username' => 'guest']);
    }

    /** @test */
    public function password_of_guest_user_cant_be_change()
    {
        $pass = bcrypt('secret');
        $guest = factory(User::class)->create([
            'username' => 'guest',
            'password' => $pass,
        ]);
        $this->actingAs($guest)->put("users/{$guest->id}/account", [
            'password' => 'new_password',
        ])->assertJson([
            'status'  => 'error',
            'message' => 'Username/Password is not updatable for this account',
        ]);

        $this->assertDatabaseHas('users', ['id' => $guest->id, 'password' => $pass]);
    }

    /** @test */
    public function user_can_view_other_user_profile()
    {
        $user = factory(User::class)->create(['name' => 'Guest User']);
        $response = $this->actingAs($this->user)
             ->get('users/' . $user->username)
             ->assertSee('Guest User');
    }

    /** @test */
    public function get_current_user_for_api_request()
    {
        Passport::actingAs($this->user);

        $response = $this->get('api/me');

        $response->assertJson([
            'username' => $this->user->username,
        ]);
    }
}
