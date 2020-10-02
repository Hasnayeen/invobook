<?php

namespace Tests;

use App\Base\Models\User;
use Database\Seeders\RoleTableSeeder;
use Database\Seeders\ServicesTableSeeder;
use Database\Seeders\StatusesTableSeeder;
use Database\Seeders\AppSettingTableSeeder;
use Database\Seeders\PermissionTableSeeder;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Database\Seeders\RoleHasPermissionTableSeeder;
use Database\Seeders\PermissionSettingsTableSeeder;
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

        $this->seed(PermissionTableSeeder::class);
        $this->seed(RoleTableSeeder::class);
        $this->seed(PermissionSettingsTableSeeder::class);
        $this->seed(RoleHasPermissionTableSeeder::class);
        $this->seed(ServicesTableSeeder::class);
        $this->seed(StatusesTableSeeder::class);
        $this->seed(AppSettingTableSeeder::class);
    }
}
