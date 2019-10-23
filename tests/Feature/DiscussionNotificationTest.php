<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use App\Team\Models\Team;
use App\Office\Models\Office;
use App\Project\Models\Project;
use App\Base\Contracts\HasMembers;
use App\Discussion\Models\Discussion;
use Illuminate\Support\Facades\Notification;
use App\Discussion\Notifications\DiscussionCreatedNotification;

class DiscussionNotificationTest extends TestCase
{
    /**
     * @test
     */
    public function when_project_discussion_is_created_project_members_are_notified()
    {
        Notification::fake();

        $project = factory(Project::class)->create();
        $project->members()->attach($this->user);

        $this->arrangeAndTest('project', $project);
    }

    /**
     * @test
     */
    public function when_office_discussion_is_created_office_members_are_notified()
    {
        Notification::fake();

        $office = factory(Office::class)->create();
        $office->members()->attach($this->user);

        $this->arrangeAndTest('office', $office);
    }

    /**
     * @test
     */
    public function when_team_discussion_is_created_team_members_are_notified()
    {
        Notification::fake();

        $team = factory(Team::class)->create();
        $team->members()->attach($this->user);

        $this->arrangeAndTest('team', $team);
    }

    /**
     * @param string     $groupType
     * @param HasMembers $group
     */
    private function arrangeAndTest(string $groupType, HasMembers $group): void
    {
        $users = factory(User::class, 3)->create();

        $users->each(function (User $user) use ($group) {
            $group->members()->attach($user);
        });

        $this->actingAs($this->user);
        factory(Discussion::class)->create([
            'discussionable_type' => $groupType,
            'discussionable_id'   => $group->getKey(),
            'posted_by'           => $this->user->getKey(),
        ]);

        // All members of group are notified
        Notification::assertSentTo(
            $users,
            DiscussionCreatedNotification::class
        );

        // Author of the discussion is not notified
        Notification::assertNotSentTo(
            [$this->user],
            DiscussionCreatedNotification::class
        );
    }
}
