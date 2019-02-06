<?php

namespace Tests\Feature;

use Tests\TestCase;
use Spatie\Permission\Models\Permission;
use Illuminate\Foundation\Testing\WithFaker;

class TaskTest extends TestCase
{
    use WithFaker;

    public function setUp()
    {
        parent::setUp();
        $this->task = factory(\App\Models\Task::class)->create();
        create_permissions($this->task->taskable);
    }

    /** @test */
    public function user_with_permission_can_create_new_task()
    {
        $task = factory(\App\Models\Task::class)->make();
        $permission = Permission::create(['name' => 'create task.' . $task->taskable_type . '->' . $task->taskable_id]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ])->assertJsonFragment([
            'status'        => 'success',
            'message'       => 'New task has been created',
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * */
    public function user_without_permission_cant_create_new_task()
    {
        $task = factory(\App\Models\Task::class)->make();
        Permission::create(['name' => 'create task.' . $task->taskable_type . '->' . $task->taskable_id]);

        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
        ]);
    }

    /** @test */
    public function user_can_see_details_of_a_task()
    {
        $this->actingAs($this->user)->get('/tasks/' . $this->task->id)
        ->assertJsonFragment([
            'status'         => 'success',
            'name'           => $this->task->name,
            'notes'          => $this->task->notes,
            'assigned_to'    => $this->task->assigned_to,
            'related_to'     => $this->task->related_to,
            'due_on'         => $this->task->due_on,
            'avatar'         => $this->task->user->avatar,
        ]);
    }

    /** @test */
    public function user_can_see_tasks_of_a_group()
    {
        $project = factory('App\Models\Project')->create();
        $tasks = factory('App\Models\Task', 3)->create([
            'taskable_type' => 'project',
            'taskable_id'   => $project->id,
        ]);
        $this->actingAs($this->user)->call('GET', '/tasks', [
            'resource_type' => 'project',
            'resource_id'   => $project->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'total'            => 3,
            'name'             => $tasks[2]['name'],
        ]);

        $team = factory('App\Models\Team')->create();
        $tasks = factory('App\Models\Task', 3)->create([
            'taskable_type' => 'team',
            'taskable_id'   => $team->id,
        ]);
        $this->actingAs($this->user)->call('GET', '/tasks', [
            'resource_type' => 'team',
            'resource_id'   => $team->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'total'            => 3,
            'name'             => $tasks[2]['name'],
        ]);

        $office = factory('App\Models\Office')->create();
        $tasks = factory('App\Models\Task', 3)->create([
            'taskable_type' => 'office',
            'taskable_id'   => $office->id,
        ]);
        $this->actingAs($this->user)->call('GET', '/tasks', [
            'resource_type' => 'office',
            'resource_id'   => $office->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'total'            => 3,
            'name'             => $tasks[2]['name'],
        ]);
    }

    /** @test */
    public function user_with_permission_can_delete_a_task()
    {
        $this->actingAs($this->user)->delete('/tasks/' . $this->task->id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'The task has been deleted',
             ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * */
    public function user_without_permission_cant_delete_a_task()
    {
        $user = factory(\App\Models\User::class)->create();
        $this->actingAs($user)->delete('/tasks/' . $this->task->id);
    }

    /** @test */
    public function create_new_task_with_status()
    {
        $task = factory(\App\Models\Task::class)->make();
        factory(\App\Models\Status::class)->create();
        $permission = Permission::create(['name' => 'create task.' . $task->taskable_type . '->' . $task->taskable_id]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
            'status_id'     => $task->status_id,
        ])->assertJsonFragment([
            'status'        => 'success',
            'message'       => 'New task has been created',
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'taskable_type' => $task->taskable_type,
            'taskable_id'   => $task->taskable_id,
            'status_id'     => $task->status_id,
        ]);
    }

    /** @test */
    public function user_with_permission_can_update_a_task()
    {
        $task = factory(\App\Models\Task::class)->create();

        $permission = Permission::create(['name' => 'edit task.' . $task->taskable_type . '->' . $task->taskable_id]);

        $this->user->givePermissionTo($permission);

        $updatedData = [
            'name'          => $this->faker->sentence(6, true),
            'assigned_to'   => factory(\App\Models\User::class)->create()->id,
            'notes'         => $this->faker->sentence(20, true),
            'due_on'        => $this->faker->dateTimeBetween('now', '+5 years')->format('Y-m-d'),
            'related_to'    => null,
            'taskable_type' => 'office',
            'taskable_id'   => factory(\App\Models\Office::class)->create()->id,
        ];

        $this->actingAs($this->user)
            ->put("/tasks/{$task->id}", $updatedData)
            ->assertSessionHasNoErrors();

        $this->assertDatabaseHas('tasks', $updatedData);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     */
    public function user_without_permission_cant_update_a_task()
    {
        $task = factory(\App\Models\Task::class)->create();

        $permission = Permission::create(['name' => 'edit task.' . $task->taskable_type . '->' . $task->taskable_id]);

        $this->actingAs($this->user)
            ->put("/tasks/{$task->id}", [
                'name'          => $this->faker->sentence(6, true),
                'assigned_to'   => factory(\App\Models\User::class)->create()->id,
                'notes'         => $this->faker->sentence(20, true),
                'due_on'        => $this->faker->dateTimeBetween('now', '+5 years')->format('Y-m-d'),
                'related_to'    => null,
                'taskable_type' => 'office',
                'taskable_id'   => factory(\App\Models\Office::class)->create()->id,
            ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Validation\ValidationException
     */
    public function request_validates_the_data_before_updating_a_task()
    {
        $task = factory(\App\Models\Task::class)->create();

        $permission = Permission::create(['name' => 'edit task.' . $task->taskable_type . '->' . $task->taskable_id]);

        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)
            ->put("/tasks/{$task->id}", [
                'name'          => null,
                'assigned_to'   => null,
                'notes'         => null,
                'due_on'        => now(),
                'related_to'    => null,
                'taskable_type' => null,
                'taskable_id'   => null,
            ])
            ->assertSessionHasErrors();
    }

    public function user_with_permission_can_update_status_of_a_task()
    {
        $status = factory(\App\Models\Status::class)->create();

        $this->task->status()->associate($status)->save();

        $this->actingAs($this->user)
            ->put("tasks/{$this->task->id}/statuses", [
                'name'    => 'dummy status',
                'color'   => '#000000',
            ])
            ->assertSessionHasNoErrors();

        $this->assertEquals([
            'name'    => 'dummy status',
            'color'   => '#000000',
        ], [
            'name'  => $this->task->refresh()->status->name,
            'color' => $this->task->refresh()->status->color,
        ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     */
    public function user_without_permission_cant_update_status_of_a_task()
    {
        $task = factory(\App\Models\Task::class)->create();
        $status = factory(\App\Models\Status::class)->create();

        $task->status()->associate($status)->save();

        Permission::create(['name' => 'edit task.' . $task->taskable_type . '->' . $task->taskable_id]);

        $this->actingAs($this->user)
            ->put("tasks/{$task->id}/statuses", [
                'name'    => 'dummy status',
                'color'   => '#000000',
            ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Validation\ValidationException
     */
    public function request_validates_the_data_before_updating_status_of_a_task()
    {
        $this->actingAs($this->user)
            ->put("tasks/{$this->task->id}/statuses", [
                'name'    => null,
                'color'   => 'non-hex-value',
            ])
            ->assertSessionHasErrors();
    }
}
