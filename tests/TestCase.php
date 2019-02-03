<?php

namespace Tests;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Artisan;
use Spatie\Permission\Models\Permission;
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

    public function setUp()
    {
        parent::setUp();
        $this->app->instance(ExceptionHandler::class, new TestExceptionHandler(app()));
        $this->createOwner();
    }

    private function createOwner()
    {
        $this->user = factory(\App\Models\User::class)->create();
        $this->ownerRole = Role::create(['name' => 'owner', 'deletable' => false]);
        $this->user->assignRole($this->ownerRole);

        Artisan::call('db:seed', ['--class' => 'PermissionTableSeeder']);
        Artisan::call('db:seed', ['--class' => 'ServicesTableSeeder']);
        $permissions = Permission::all();
        $permissions = $permissions->pluck('id')->toArray();
        $this->ownerRole->givePermissionTo($permissions);
    }
}
