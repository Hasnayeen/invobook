<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\Office;
use App\Core\Exceptions\UserIsNotMember;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class OfficeTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->office = factory('App\Core\Models\Office')->create();
    }

    /** @test */
    public function offices_route_should_return_404_page()
    {
        $this->expectException(NotFoundHttpException::class);
        $this->actingAs($this->user)->get('offices/');
    }

    /** @test */
    public function user_with_permission_can_see_office_page()
    {
        $this->user_with_permission_can_create_office();
        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($this->user)->get('offices/' . $id)->assertSee('New Office');
    }

    /** @test */
    public function user_without_permission_cant_see_office_page()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);
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
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);

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
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);

        $this->user_with_permission_can_create_office();

        $id = Office::where('name', 'New Office')->first()->id;

        $this->actingAs($user)->delete('offices/' . $id);
    }

    /** @test */
    public function remove_user_from_office()
    {
        Notification::fake();
        $user = factory('App\Core\Models\User')->create(['role_id' => 3]);
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

        $user = factory('App\Core\Models\User')->create();

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
                 'status' => 'success',
                 'message' => localize('office.Office has been made public')
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
                 'status' => 'success',
                 'message' => localize('office.Office has been made private')
             ]);
        $this->assertDatabaseHas('offices', ['id' => $this->office->id, 'public' => false]);
    }
}
