<?php

namespace Tests\Feature;

use App\Models\Tag;
use Tests\TestCase;
use App\Models\Task;
use Spatie\Permission\Models\Permission;

class TagTest extends TestCase
{
    /** @test */
    public function user_with_permission_can_add_a_tag_to_a_task()
    {
        $task = factory(Task::class)->create();

        $permission = Permission::create(['name' => "edit {$task->taskable_type}->{$task->taskable_id}"]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post("tasks/{$task->id}/tags", [
            'label' => 'dummy',
        ])->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Tag has been added to the task',
            'label'   => 'dummy',
        ]);

        $tag = Tag::where('label', 'dummy')->first();

        $this->assertEquals('dummy', $tag->label);
        $this->assertDatabaseHas('task_tags', [
            'task_id' => $task->id,
            'tag_id'  => $tag->id,
        ]);
    }

    /**
     * @test
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     */
    public function user_without_permission_can_not_add_a_tag_to_a_task()
    {
        $task = factory(Task::class)->create();

        $permission = Permission::create(['name' => "edit {$task->taskable_type}->{$task->taskable_id}"]);

        $this->actingAs($this->user)->post("tasks/{$task->id}/tags", [
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
            'label' => $tag->label,
        ])->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Tag has been added to the task',
            'label'   => $tag->label,
        ]);

        $this->assertDatabaseHas('task_tags', [
            'task_id' => $task->id,
            'tag_id'  => $tag->id,
        ]);
    }

    /** @test */
    public function user_with_permission_can_delete_a_tag_from_a_task()
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
    public function user_without_permission_can_not_delete_a_tag_from_a_task()
    {
        $tag = factory(Tag::class)->create();
        $task = factory(Task::class)->create();

        $task->tags()->attach($tag);

        $permission = Permission::create(['name' => "edit {$task->taskable_type}->{$task->taskable_id}"]);

        $this->actingAs($this->user)->delete("tasks/{$task->id}/tags/{$tag->id}");
    }
}
