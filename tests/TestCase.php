<?php

namespace Tests;

use App\Core\Models\User;
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

    public function setUp()
    {
        parent::setUp();
        $this->app->instance(ExceptionHandler::class, new TestExceptionHandler(app()));
        $this->user = factory(\App\Core\Models\User::class)->create();
        Artisan::call('db:seed', ['--class' => 'ServicesTableSeeder']);
    }
}
