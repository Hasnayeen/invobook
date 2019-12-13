<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;

class TaskTest extends TestCase
{
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->task = factory(\App\TaskManager\Models\Task::class)->create(['created_by' => $this->user->id]);
    }

    /** @test */
    public function user_with_permission_can_create_new_task()
    {
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $task = factory(\App\TaskManager\Models\Task::class)->make([
            'created_by'    => $this->user->id,
            'taskable_type' => 'project',
            'taskable_id'   => $project->id,
        ]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
        $project->members()->save($this->user);

        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'group_type'    => $task->taskable_type,
            'group_id'      => $task->taskable_id,
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

    /** @test */
    public function due_date_must_be_in_future()
    {
        $this->expectException(ValidationException::class);
        $task = factory(\App\TaskManager\Models\Task::class)->make();
        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $this->faker->dateTimeBetween('-1 years', 'now')->format('Y-m-d'),
            'group_type'    => $task->taskable_type,
            'group_id'      => $task->taskable_id,
        ]);
    }

    /** @test */
    public function user_without_permission_cant_create_new_task()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create();
        $task = factory(\App\TaskManager\Models\Task::class)->make();

        $this->actingAs($user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'group_type'    => $task->taskable_type,
            'group_id'      => $task->taskable_id,
        ]);
    }

    /** @test */
    public function user_can_see_details_of_a_task()
    {
        $this->actingAs($this->user)->get('/tasks/' . $this->task->id, [
            'group_type' => $this->task->taskable_type,
            'group_id'   => $this->task->taskable_id,
        ])
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
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
        $tasks = factory('App\TaskManager\Models\Task', 3)->create([
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

        $team = factory(\App\Team\Models\Team::class)->create(['owner_id' => $this->user]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($team);
        $tasks = factory('App\TaskManager\Models\Task', 3)->create([
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

        $office = factory(\App\Office\Models\Office::class)->create(['owner_id' => $this->user]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($office);
        $tasks = factory('App\TaskManager\Models\Task', 3)->create([
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
        $this->actingAs($this->user)->delete('/tasks/' . $this->task->id, [
            'group_type' => $this->task->taskable_type,
            'group_id'   => $this->task->taskable_id,
        ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'The task has been deleted',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_delete_a_task()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create();
        $this->actingAs($user)->delete('/tasks/' . $this->task->id, [
            'group_type' => $this->task->taskable_type,
            'group_id'   => $this->task->taskable_id,
        ]);
    }

    /** @test */
    public function create_new_task_with_status()
    {
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $task = factory(\App\TaskManager\Models\Task::class)->make([
            'created_by'    => $this->user->id,
            'taskable_type' => 'project',
            'taskable_id'   => $project->id,
        ]);
        factory(\App\Base\Models\Status::class)->create();
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
        $project->members()->save($this->user);

        $this->actingAs($this->user)->post('/tasks', [
            'name'          => $task->name,
            'assigned_to'   => $task->assigned_to,
            'notes'         => $task->notes,
            'due_on'        => $task->due_on,
            'group_type'    => 'project',
            'group_id'      => $project->id,
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
        $task = $this->user->tasks()->first();
        $this->user_with_permission_can_create_new_task();

        $updatedData = [
            'name'          => $this->faker->sentence(6, true),
            'assigned_to'   => factory(\App\Base\Models\User::class)->create()->id,
            'notes'         => $this->faker->sentence(20, true),
            'due_on'        => $this->faker->dateTimeBetween('now', '+5 years')->format('Y-m-d'),
            'related_to'    => null,
            'group_type'    => 'office',
            'group_id'      => factory(\App\Office\Models\Office::class)->create()->id,
        ];

        $this->actingAs($this->user)
            ->put("/tasks/{$task->id}", $updatedData)
            ->assertSessionHasNoErrors();

        $this->assertDatabaseHas('tasks', [
            'name'          => $updatedData['name'],
            'assigned_to'   => $updatedData['assigned_to'],
            'notes'         => $updatedData['notes'],
            'due_on'        => $updatedData['due_on'],
        ]);
    }

    /** @test */
    public function user_without_permission_cant_update_a_task()
    {
        $this->expectException(AuthorizationException::class);
        $task = factory(\App\TaskManager\Models\Task::class)->create();

        $this->actingAs($this->user)
            ->put("/tasks/{$task->id}", [
                'name'          => $this->faker->sentence(6, true),
                'assigned_to'   => factory(\App\Base\Models\User::class)->create()->id,
                'notes'         => $this->faker->sentence(20, true),
                'due_on'        => $this->faker->dateTimeBetween('now', '+5 years')->format('Y-m-d'),
                'related_to'    => null,
                'group_type'    => 'office',
                'group_id'      => factory(\App\Office\Models\Office::class)->create()->id,
            ]);
    }

    /** @test */
    public function request_validates_the_data_before_updating_a_task()
    {
        $this->expectException(ValidationException::class);
        $task = factory(\App\TaskManager\Models\Task::class)->create();

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

    /** @test */
    public function user_with_permission_can_update_status_of_a_task()
    {
        $status = factory(\App\Base\Models\Status::class)->create();
        $status2 = factory(\App\Base\Models\Status::class)->create();

        $this->task->status()->associate($status)->save();

        $this->actingAs($this->user)
             ->put("tasks/{$this->task->id}/statuses/{$status2->id}")
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Task status has been updated',
             ]);
        $this->assertDatabaseHas('tasks', ['id' => $this->task->id, 'status_id' => $status2->id]);
    }

    /** @test */
    public function user_without_permission_cant_update_status_of_a_task()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create();
        $status = factory(\App\Base\Models\Status::class)->create();
        $status2 = factory(\App\Base\Models\Status::class)->create();

        $this->task->status()->associate($status)->save();

        $this->actingAs($user)
             ->put("tasks/{$this->task->id}/statuses/{$status2->id}", [
                 'group_type' => $this->task->taskable_type,
                 'group_id'   => $this->task->taskable_id,
             ]);
    }
}
