<?php

namespace Tests\Feature;

use Carbon\Carbon;
use Tests\TestCase;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ActivityTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
    }

    /** @test */
    public function owner_can_see_all_recent_activity()
    {
        $user = factory(\App\Models\User::class)->create();
        $user->givePermissionTo('create project');

        $this->actingAs($user)->post('projects', [
            'name'        => 'New Project',
            'description' => 'Description for new project',
            'owner_id'    => $user->id,
        ]);

        $this->actingAs($this->user)->get('admin/activities')
            ->assertJsonFragment([
                'status'       => 'success',
                'description'  => 'created',
                'causer_id'    => (string) $user->id,
                'subject_type' => 'project',
            ]);
    }

    /** @test */
    public function owner_can_filter_activity_by_user()
    {
        $user = factory(\App\Models\User::class)->create();
        $user->givePermissionTo('create project');

        $this->actingAs($user)->post('projects', [
            'name'        => 'New Project by user 1',
            'description' => 'Description for new project',
            'owner_id'    => $user->id,
        ]);

        $user2 = factory(\App\Models\User::class)->create();
        $user2->givePermissionTo('create project');

        $this->actingAs($user2)->post('projects', [
            'name'        => 'New Project by user 2',
            'description' => 'Description for new project',
            'owner_id'    => $user2->id,
        ]);

        $this->actingAs($this->user)->call('GET', 'admin/activities', ['user' => $user->id])
            ->assertJsonFragment([
                'status'       => 'success',
                'description'  => 'created',
                'causer_id'    => (string) $user->id,
                'subject_type' => 'project',
            ])
            ->assertJsonMissing([
                'causer_id'    => (string) $user2->id,
            ]);
    }

    /** @test */
    public function owner_can_filter_activity_by_date()
    {
        $user = factory(\App\Models\User::class)->create();
        $user->givePermissionTo('create project');

        $this->actingAs($user)->post('projects', [
            'name'        => 'New Project by user 1',
            'description' => 'Description for new project',
            'owner_id'    => $user->id,
        ]);

        $user2 = factory(\App\Models\User::class)->create();
        $user2->givePermissionTo('create project');

        $this->actingAs($user2)->post('projects', [
            'name'        => 'New Project by user 2',
            'description' => 'Description for new project',
            'owner_id'    => $user2->id,
        ]);

        Activity::where('causer_id', $user2->id)->update(['created_at' => Carbon::now()->addDay()]);

        $this->actingAs($this->user)->call('GET', 'admin/activities', ['date' => Carbon::now()->toDateString()])
            ->assertJsonFragment([
                'status'       => 'success',
                'description'  => 'created',
                'causer_id'    => (string) $user->id,
                'subject_type' => 'project',
                'subject_id'   => '1',
            ])
            ->assertJsonMissing([
                'causer_id'    => (string) $user2->id,
                'subject_id'   => '2',
            ]);
    }

    /** @test */
    public function owner_can_filter_activity_by_date_and_user()
    {
        $user = factory(\App\Models\User::class)->create();
        $user->givePermissionTo('create project');

        $this->actingAs($user)->post('projects', [
            'name'        => 'New Project by user 1',
            'description' => 'Description for new project',
            'owner_id'    => $user->id,
        ]);

        $this->actingAs($user)->post('projects', [
            'name'        => 'Another Project by user 1',
            'description' => 'Description for another project',
            'owner_id'    => $user->id,
        ]);

        $user2 = factory(\App\Models\User::class)->create();
        $user2->givePermissionTo('create project');

        $this->actingAs($user2)->post('projects', [
            'name'        => 'New Project by user 2',
            'description' => 'Description for new project',
            'owner_id'    => $user2->id,
        ]);

        Activity::where('id', 2)->update(['created_at' => Carbon::now()->addDay()]);

        $this->actingAs($this->user)->call('GET', 'admin/activities', ['user' => $user->id, 'date' => Carbon::now()->toDateString()])
            ->assertJsonFragment([
                'status'       => 'success',
                'description'  => 'created',
                'causer_id'    => (string) $user->id,
                'subject_type' => 'project',
                'subject_id'   => '1',
            ])
            ->assertJsonMissing([
                'causer_id'    => (string) $user2->id,
                'subject_id'   => '2',
            ]);
    }
}
