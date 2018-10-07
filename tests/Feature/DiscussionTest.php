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
}
