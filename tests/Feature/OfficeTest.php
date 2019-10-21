<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Office\Models\Office;
use Laravel\Passport\Passport;
use App\Base\Exceptions\UserIsNotMember;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Access\AuthorizationException;

class OfficeTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->office = factory('App\Office\Models\Office')->create();
    }

    /** @test */
    public function user_can_see_public_offices_and_offices_of_which_user_is_member()
    {
        $office = factory('App\Office\Models\Office')->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($office);
        $office->members()->save($this->user);

        $this->json('GET', 'offices/')->assertJsonFragment([
            'status' => 'success',
            'name'   => $office->name,
        ]);

        Passport::actingAs($this->user);
        $this->json('GET', 'offices/')->assertJsonFragment([
            'status' => 'success',
            'name'   => $office->name,
        ]);
    }

    /** @test */
    public function user_with_permission_can_see_office_page()
    {
        $this->user_with_permission_can_create_office();
        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($this->user)
             ->json('GET', 'offices/' . $id)
             ->assertJsonFragment([
                 'status' => 'success',
                 'name'   => 'New Office',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_see_office_page()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);
        $this->user_with_permission_can_create_office();
        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($user)->get('offices/' . $id)->assertSee('New Office');
    }

    /** @test */
    public function user_with_permission_can_create_office()
    {
        $this->actingAs($this->user)->post('offices', [
            'name'        => 'New Office',
            'description' => 'Description for new office',
            'owner_id'    => $this->user->id,
        ])->assertJsonFragment([
            'status' => 'success',
            'name'   => 'New Office',
        ]);
        $this->assertDatabaseHas('offices', ['name' => 'New Office', 'description' => 'Description for new office', 'owner_id' => $this->user->id]);

        $id = Office::where('name', 'New Office')->first()->id;
    }

    /** @test */
    public function user_without_permission_cant_create_office()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);

        $this->actingAs($user)->post('/offices', [
            'name'        => 'New Office',
            'description' => 'Office of all new members',
        ]);
    }

    /** @test */
    public function user_with_permission_can_delete_a_office()
    {
        $this->user_with_permission_can_create_office();

        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($this->user)->delete('/offices/' . $id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'The office has been deleted',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_delete_a_office()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);

        $this->user_with_permission_can_create_office();

        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($user)->delete('offices/' . $id);
    }

    /** @test */
    public function remove_user_from_office()
    {
        Notification::fake();
        $user = factory('App\Base\Models\User')->create(['role_id' => 3]);
        $this->office->members()->save($user);

        $this->assertCount(1, $this->office->members);

        $this->actingAs($this->user)->delete('/members', [
            'user_id'       => $user->id,
            'group_type'    => 'office',
            'group_id'      => $this->office->id,
        ])->assertJson([
            'status'  => 'success',
            'message' => 'User removed from the office',
            'user'    => [
                'id'       => $user->id,
                'name'     => $user->name,
                'username' => $user->username,
                'avatar'   => $user->avatar,
            ],
        ]);

        $this->assertEmpty($this->office->fresh()->members);
    }

    /** @test */
    public function cannot_remove_user_from_office_if_not_a_member()
    {
        $this->expectException(UserIsNotMember::class);

        $user = factory('App\Base\Models\User')->create();

        $this->actingAs($this->user)
             ->delete('/members', [
                 'user_id'       => $user->id,
                 'group_type'    => 'office',
                 'group_id'      => $this->office->id,
             ]);
    }

    /** @test */
    public function admin_can_make_office_public()
    {
        $this->actingAs($this->user)
             ->post('public-offices/' . $this->office->id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => localize('office.Office has been made public'),
             ]);
        $this->assertDatabaseHas('offices', ['id' => $this->office->id, 'public' => true]);
    }

    /** @test */
    public function admin_can_make_office_private()
    {
        $this->actingAs($this->user)
             ->post('public-offices/' . $this->office->id);

        $this->delete('public-offices/' . $this->office->id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => localize('office.Office has been made private'),
             ]);
        $this->assertDatabaseHas('offices', ['id' => $this->office->id, 'public' => false]);
    }
}
