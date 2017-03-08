<?php

namespace Tests\Browser;

use App\Models\Team;
use App\Models\User;
use App\Models\Office;
use App\Models\Project;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class HomePageTest extends DuskTestCase
{
    /** @test */
    public function seeLoginFormWhenNotLoggedIn()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->assertPathIs('/login')
                    ->assertSeeIn('form .card-header-title', 'Login');
        });
    }

    /** @test */
    public function seeLatestThreeProjectTeamAndOffice()
    {
        $user = factory(User::class)->create();
        $projects = factory(Project::class, 3)->create(['office_id' => null, 'team_id' => null]);
        $teams = factory(Team::class, 3)->create(['office_id' => null]);
        $offices = factory(Office::class, 3)->create();

        $this->browse(function (Browser $browser) use ($user, $projects, $teams, $offices) {
            $browser->loginAs($user)
                    ->visit('/')
                    ->assertSeeIn('.columns div:nth-of-type(1) .content div:nth-of-type(1) a', $projects[0]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(1) .content div:nth-of-type(2) a', $projects[1]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(1) .content div:nth-of-type(3) a', $projects[2]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(2) .content div:nth-of-type(1) a', $teams[0]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(2) .content div:nth-of-type(2) a', $teams[1]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(2) .content div:nth-of-type(3) a', $teams[2]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(3) .content div:nth-of-type(1) a', $offices[0]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(3) .content div:nth-of-type(2) a', $offices[1]['name'])
                    ->assertSeeIn('.columns div:nth-of-type(3) .content div:nth-of-type(3) a', $offices[2]['name']);
        });

        $this->tearDown();
    }
}
