<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class HomePageTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     * @test
     * @return void
     */
    public function seeLoginFormWhenNotLoggedIn()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->assertSeeIn('form .card-header-title', 'Login');
        });
    }
}
