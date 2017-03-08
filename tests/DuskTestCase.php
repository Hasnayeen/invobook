<?php

namespace Tests;

use Illuminate\Support\Facades\DB;
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
        if (env('TRAVIS') == false) {
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
        if (env('TRAVIS') == true) {
            return RemoteWebDriver::create(
                'http://localhost:9515', DesiredCapabilities::phantomjs()
            );
        }

        return RemoteWebDriver::create(
            'http://localhost:9515', DesiredCapabilities::chrome()
        );
    }

    protected function tearDown()
    {
        $dbName = env('DB_DATABASE');
        // Get all tables list, except migrations table
        $tables = DB::select('SHOW TABLES WHERE `Tables_in_'.$dbName.'` != ?', ['migrations']);
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        foreach ($tables as $table) {
            DB::table($table->{'Tables_in_'.$dbName})->truncate();
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
