<?php

namespace Tests;

use App\Base\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * @var User
     */
    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->app->instance(ExceptionHandler::class, new TestExceptionHandler(app()));
        $this->user = factory(\App\Base\Models\User::class)->create(['role_id' => 1]);
        Artisan::call('db:seed', ['--class' => 'PermissionTableSeeder']);
        Artisan::call('db:seed', ['--class' => 'RoleTableSeeder']);
        Artisan::call('db:seed', ['--class' => 'PermissionSettingsTableSeeder']);
        Artisan::call('db:seed', ['--class' => 'RoleHasPermissionTableSeeder']);
        Artisan::call('db:seed', ['--class' => 'ServicesTableSeeder']);
        Artisan::call('db:seed', ['--class' => 'StatusesTableSeeder']);
    }
}
