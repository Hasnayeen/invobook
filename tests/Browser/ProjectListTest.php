<?php

namespace Tests\Browser;

use App\Models\User;
use App\Models\Project;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class ProjectListTest extends DuskTestCase
{
    /** @test */
    public function seeAllProjects()
    {
        $user = factory(User::class)->create();
        $projects = factory(Project::class, 2)->create();

        $this->browse(function (Browser $browser) use ($user, $projects) {
            $browser->loginAs($user)
                        ->visit('/projects')
                        ->assertSeeIn('.projects-list ul li:nth-of-type(1) a', $projects[0]['name'])
                        ->assertSeeIn('.projects-list ul li:nth-of-type(1) span', $projects[0]['description'])
                        ->assertSeeIn('.projects-list ul li:nth-of-type(2) a', $projects[1]['name'])
                        ->assertSeeIn('.projects-list ul li:nth-of-type(2) span', $projects[1]['description']);
        });

        $this->tearDown();
    }
}
