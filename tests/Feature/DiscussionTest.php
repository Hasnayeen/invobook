<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Notification;

class DiscussionTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        Notification::fake();
        $this->project = factory(\App\Core\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($this->project);
        $this->project->members()->save($this->user);
    }

    /** @test */
    public function user_with_permission_can_create_new_discussion()
    {
        $category = factory(\App\Core\Models\Category::class)->create();

        $this->post('discussions', [
            'name'                => 'New article',
            'category_id'         => $category->id,
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'draft'               => false,
            'group_type'          => 'project',
            'group_id'            => $this->project->id,
        ])->assertJsonFragment([
            'status'              => 'success',
            'message'             => 'New discussion post has been created',
            'name'                => 'New article',
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'discussionable_type' => 'project',
            'discussionable_id'   => $this->project->id,
        ]);

        $this->assertDatabaseHas('discussions', [
            'name'                => 'New article',
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'discussionable_type' => 'project',
            'discussionable_id'   => $this->project->id,
        ]);
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test */
    public function user_without_permission_cant_create_new_discussion()
    {
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);
        $category = factory(\App\Core\Models\Category::class)->create();

        $this->actingAs($user)->post('discussions', [
            'name'                => 'New article',
            'category_id'         => $category->id,
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'draft'               => false,
            'group_type'          => 'project',
            'group_id'            => $this->project->id,
        ])->assertJsonFragment([
            'status'              => 'error',
        ]);
    }

    /** @test */
    public function user_can_see_all_discussions()
    {
        $discussions = factory(\App\Core\Models\Discussion::class, 2)->create([
            'discussionable_type' => 'project',
            'discussionable_id'   => $this->project->id,
        ]);

        $this->actingAs($this->user)->call('GET', '/discussions', ['resource_type' => 'project', 'resource_id' => $this->project->id])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'total'   => 2,
                 'name'    => $discussions[0]->name,
                 'content' => $discussions[0]->content,
                 'name'    => $discussions[1]->name,
                 'content' => $discussions[1]->content,
             ]);
    }

    /** @test */
    public function user_with_permission_can_delete_a_discussion()
    {
        $discussion = factory(\App\Core\Models\Discussion::class)->create([
            'discussionable_type' => 'project',
            'discussionable_id'   => $this->project->id,
        ]);

        $this->actingAs($this->user)->delete("/discussions/{$discussion->id}",
            [
                'group_type' => $discussion->discussionable_type,
                'group_id'   => $discussion->discussionable_id,
            ])
             ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'The discussion has been deleted',
             ]);
    }

    /** @test */
    public function user_can_delete_his_own_discussion()
    {
        $user = factory(\App\Core\Models\User::class)->create();

        $discussion = factory(\App\Core\Models\Discussion::class)->create([
            'posted_by' => $user->id,
        ]);

        $this->actingAs($user)->delete("/discussions/{$discussion->id}")
             ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'The discussion has been deleted',
             ]);
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test
     */
    public function user_without_permission_cant_delete_a_discussion()
    {
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);
        $discussion = factory(\App\Core\Models\Discussion::class)->create();

        $this->actingAs($user)->delete("/discussions/{$discussion->id}",
            [
                'group_type' => $discussion->discussionable_type,
                'group_id'   => $discussion->discussionable_id,
            ]);
    }

    /** @test */
    public function authorized_user_with_permission_can_update_discussion()
    {
        $discussion = factory(\App\Core\Models\Discussion::class)->create([
            'posted_by'           => $this->user->id,
            'discussionable_type' => 'project',
            'discussionable_id'   => $this->project->id,
        ]);
        $category = factory(\App\Core\Models\Category::class)->create();

        $this->actingAs($this->user)->patch('discussions/' . $discussion->id, [
            'name'                => 'Updated article',
            'category_id'         => $category->id,
            'content'             => '<h1>Medium heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Medium Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'draft'               => true,
        ])->assertJsonFragment([
            'status'              => 'success',
            'message'             => 'The discussion has been updated',
            'name'                => 'Updated article',
            'content'             => '<h1>Medium heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Medium Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'draft'               => true,
        ]);

        $this->assertDatabaseHas('discussions', [
            'name'                => 'Updated article',
            'category_id'         => $category->id,
            'content'             => '<h1>Medium heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Medium Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'draft'               => true,
        ]);
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test
     */
    public function user_without_permission_cannot_update_discussion()
    {
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);
        $discussion = factory(\App\Core\Models\Discussion::class)->create([
            'posted_by'           => $this->user->id,
            'discussionable_type' => 'project',
            'discussionable_id'   => $this->project->id,
        ]);

        $this->actingAs($user)->patch('discussions/' . $discussion->id, []);
    }
}
