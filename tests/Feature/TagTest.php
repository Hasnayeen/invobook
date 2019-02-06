<?php

namespace Tests\Feature;

use App\Models\Tag;
use Tests\TestCase;
use App\Models\Task;
use Spatie\Permission\Models\Permission;
use Illuminate\Auth\AuthenticationException;

class TagTest extends TestCase
{
    /** @test */
    public function user_with_permission_can_create_tag()
    {
        $permission = Permission::create(['name' => 'create tag']);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post('tags', [
            'label' => 'dummy',
        ])->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Tag has been created',
            'label'   => 'dummy',
        ]);

        $this->assertDatabaseHas('tags', ['label' => 'dummy']);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     */
    public function user_without_permission_can_not_add_a_tag_to_a_task()
    {
        Permission::create(['name' => 'create tag']);

        $this->actingAs($this->user)->post('tags', [
            'label' => 'dummy',
        ]);
    }

    /** @test */
    public function user_can_add_a_existing_tag_to_a_task()
    {
        $tag = factory(Tag::class)->create();
        $task = factory(Task::class)->create();

        $permission = Permission::create(['name' => "edit {$task->taskable_type}->{$task->taskable_id}"]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post("tasks/{$task->id}/tags", [
            'labels' => $tag->id,
        ])->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Tag has been added to the task',
        ]);

        $this->assertDatabaseHas('task_tags', [
            'task_id' => $task->id,
            'tag_id'  => $tag->id,
        ]);
    }

    /** @test */
    public function user_with_permission_can_detach_a_tag_from_a_task()
    {
        $tag = factory(Tag::class)->create();
        $task = factory(Task::class)->create();

        $task->tags()->attach($tag);

        $permission = Permission::create(['name' => "edit {$task->taskable_type}->{$task->taskable_id}"]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->delete("tasks/{$task->id}/tags/{$tag->id}")
            ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'Tag has been deleted from the task',
            ]);

        $this->assertDatabaseMissing('task_tags', [
            'task_id' => $task->id,
            'tag_id'  => $tag->id,
        ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     */
    public function user_without_permission_can_not_detach_a_tag_from_a_task()
    {
        $tag = factory(Tag::class)->create();
        $task = factory(Task::class)->create();

        $task->tags()->attach($tag);

        Permission::create(['name' => "edit {$task->taskable_type}->{$task->taskable_id}"]);

        $this->actingAs($this->user)->delete("tasks/{$task->id}/tags/{$tag->id}");
    }

    /** @test */
    public function authenticated_user_can_access_all_tags()
    {
        $tag = factory(Tag::class)->create();

        $this->actingAs($this->user)
            ->get('/tags')
            ->assertJsonFragment([
                'status' => 'success',
                'total'  => 1,
                'tags'   => [
                    [
                        'id'    => $tag->id,
                        'label' => $tag->label,
                    ],
                ],
            ]);
    }

    /** @test */
    public function guest_user_cant_access_all_tags()
    {
        $this->expectException(AuthenticationException::class);

        $this->get('/tags');
    }
}
