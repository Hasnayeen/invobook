<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\Tag;
use App\Core\Models\Task;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;

class TagTest extends TestCase
{
    /** @test */
    public function user_with_permission_can_create_tag()
    {
        $this->actingAs($this->user)->post('tags', [
            'label' => 'dummy',
        ])->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Tag has been created',
            'label'   => 'dummy',
        ]);

        $this->assertDatabaseHas('tags', ['label' => 'dummy']);
    }

    /** @test */
    public function user_without_permission_can_not_create_tag()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);
        $this->actingAs($user)->post('tags', [
            'label' => 'dummy',
        ]);
    }

    /** @test */
    public function user_can_add_a_existing_tag_to_a_task()
    {
        $tag = factory(Tag::class)->create();
        $task = factory(Task::class)->create();

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

    /** @test */
    public function user_without_permission_can_not_detach_a_tag_from_a_task()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);
        $tag = factory(Tag::class)->create();
        $task = factory(Task::class)->create();

        $task->tags()->attach($tag);

        $this->actingAs($user)->delete("tasks/{$task->id}/tags/{$tag->id}");
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
