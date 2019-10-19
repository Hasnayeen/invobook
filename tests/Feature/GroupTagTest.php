<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Tag;
use App\Project\Models\Project;

class GroupTagTest extends TestCase
{
    /** @test */
    public function admin_can_select_tag_for_a_group()
    {
        $project = factory(Project::class)->create(['owner_id' => $this->user->id]);
        $tag = factory(Tag::class)->create();

        $this->actingAs($this->user)
             ->post('groups/tags/' . $tag->id, [
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status' => 'success',
                 'label'  => $tag->label,
             ]);

        $this->assertDatabaseHas('group_tag', ['tag_id' => $tag->id, 'taggable_type' => 'project', 'taggable_id' => $project->id]);
    }

    /** @test */
    public function admin_can_get_all_tag_of_a_group()
    {
        $project = factory(Project::class)->create(['owner_id' => $this->user->id]);
        $tags = factory(Tag::class, 2)->create();
        $project->tags()->attach([$tags[0]->id, $tags[1]->id]);

        $this->actingAs($this->user)
             ->call('GET', 'groups/tags', [
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status' => 'success',
                 'label'  => $tags[0]->label,
             ])
             ->assertJsonFragment([
                 'label'  => $tags[1]->label,
             ]);
    }

    /** @test */
    public function admin_can_remove_a_tag_from_a_group()
    {
        $project = factory(Project::class)->create(['owner_id' => $this->user->id]);
        $tag = factory(Tag::class)->create();
        $project->tags()->attach([$tag->id]);

        $this->actingAs($this->user)
             ->delete('groups/tags/' . $tag->id, [
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Tag has been removed from the project',
             ]);
    }
}
