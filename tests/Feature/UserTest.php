<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;

class UserTest extends TestCase
{
    use WithFaker;

    /** @test */
    public function owner_can_see_all_users_in_admin_page()
    {
        factory('App\Models\User', 2)->create();
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
        factory('App\Models\User', 2)->create();
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

    /** @test */
    public function guest_can_not_see_admin_page()
    {
        $guest_user = factory(User::class)->create();
        $guest_role = Role::create(['name' => 'guest']);
        $guest_user->assignRole($guest_role);

        $this->expectException(\Spatie\Permission\Exceptions\UnauthorizedException::class);

        $this->actingAs($guest_user)->get('admin');
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
    public function user_can_check_username_exists()
    {
        $this->actingAs($this->user);

        $response = $this->json('GET', '/username', ['username' => $this->user->username]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'status'  => 'success',
                'message' => 'misc.Username exists',
            ]);
    }
}
