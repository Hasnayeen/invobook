<?php

namespace Tests;

use Laravel\Dusk\TestCase as BaseTestCase;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;

abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Prepare for Dusk test execution.
     *
     * @beforeClass
     * @return void
     */
    public static function prepare()
    {
        if (env('TRAVIS') == 'false') {
            static::startChromeDriver();
        }
    }

    /**
     * Create the RemoteWebDriver instance.
     *
     * @return \Facebook\WebDriver\Remote\RemoteWebDriver
     */
    protected function driver()
    {
        if (env('TRAVIS') == 'true') {
            return RemoteWebDriver::create(
                'http://localhost:9515', DesiredCapabilities::phantomjs()
            );
        }

        return RemoteWebDriver::create(
                'http://localhost:9515', DesiredCapabilities::chrome()
            );
    }
}
