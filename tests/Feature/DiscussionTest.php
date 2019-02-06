<?php

namespace Tests\Feature;

use Tests\TestCase;
use Spatie\Permission\Models\Permission;

class DiscussionTest extends TestCase
{
    /** @test */
    public function user_with_permission_can_create_new_discussion()
    {
        $project = factory(\App\Models\Project::class)->create();
        $category = factory(\App\Models\Category::class)->create();
        $permission = Permission::create(['name' => 'create discussion.project->' . $project->id]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post('discussions', [
            'name'                => 'New article',
            'category_id'         => $category->id,
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'draft'               => false,
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ])->assertJsonFragment([
            'status'              => 'success',
            'message'             => 'New discussion post has been created',
            'name'                => 'New article',
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ]);

        $this->assertDatabaseHas('discussions', [
            'name'                => 'New article',
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ]);
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test */
    public function user_without_permission_cant_create_new_discussion()
    {
        $project = factory(\App\Models\Project::class)->create();
        $category = factory(\App\Models\Category::class)->create();
        Permission::create(['name' => 'create discussion.project->' . $project->id]);

        $this->actingAs($this->user)->post('discussions', [
            'name'                => 'New article',
            'category_id'         => $category->id,
            'content'             => '<h1>Big heading</h1><p>And some <strong>bold text</strong></p>',
            'raw_content'         => '{"ops":[{"insert":"Big Heading"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"bold text"},{"insert":"\n"}]}',
            'draft'               => false,
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ])->assertJsonFragment([
            'status'              => 'error',
        ]);
    }

    /** @test */
    public function user_can_see_all_discussions()
    {
        $project = factory(\App\Models\Project::class)->create();
        $discussions = factory(\App\Models\Discussion::class, 2)->create([
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ]);

        $this->actingAs($this->user)->call('GET', '/discussions', ['resource_type' => 'project', 'resource_id' => $project->id])
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
        $discussion = factory(\App\Models\Discussion::class)->create();

        $permission = Permission::create(['name' => 'delete discussion.' . $discussion->discussionable_type . '->' . $discussion->discussionable->id]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->delete("/discussions/{$discussion->id}")
             ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'The discussion has been deleted',
             ]);
    }

    /** @test */
    public function user_can_delete_his_own_discussion()
    {
        $user = factory(\App\Models\User::class)->create();

        $discussion = factory(\App\Models\Discussion::class)->create([
            'posted_by' => $user->id,
        ]);

        Permission::create(['name' => 'delete discussion.' . $discussion->discussionable_type . '->' . $discussion->discussionable->id]);

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
        $discussion = factory(\App\Models\Discussion::class)->create();

        Permission::create(['name' => 'delete discussion.' . $discussion->discussionable_type . '->' . $discussion->discussionable->id]);

        $this->actingAs($this->user)->delete("/discussions/{$discussion->id}");
    }

    /** @test */
    public function authorized_user_with_permission_can_update_discussion()
    {
        $project = factory(\App\Models\Project::class)->create();
        $discussion = factory(\App\Models\Discussion::class)->create([
            'posted_by'           => $this->user->id,
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ]);
        $category = factory(\App\Models\Category::class)->create();

        $permission = Permission::create(['name' => 'edit discussion.project->' . $project->id]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->patch('discussions/'.$discussion->id, [
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
        $project = factory(\App\Models\Project::class)->create();
        $discussion = factory(\App\Models\Discussion::class)->create([
            'posted_by'           => $this->user->id,
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ]);
        Permission::create(['name' => 'edit discussion.project->' . $project->id]);

        $this->actingAs($this->user)->patch('discussions/'.$discussion->id, []);
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test
     */
    public function unauthorized_user_cannot_update_discussion()
    {
        $project = factory(\App\Models\Project::class)->create();
        $discussion = factory(\App\Models\Discussion::class)->create([
            'discussionable_type' => 'project',
            'discussionable_id'   => $project->id,
        ]);
        Permission::create(['name' => 'edit discussion.project->' . $project->id]);

        $this->actingAs($this->user)->patch('discussions/'.$discussion->id, []);
    }
}
