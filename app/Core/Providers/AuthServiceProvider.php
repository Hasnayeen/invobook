<?php

namespace App\Core\Providers;

use Laravel\Passport\Passport;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \App\Core\Models\Project::class       => \App\Core\Policies\ProjectPolicy::class,
        \App\Core\Models\Team::class          => \App\Core\Policies\TeamPolicy::class,
        \App\Core\Models\Office::class        => \App\Core\Policies\OfficePolicy::class,
        \App\Core\Models\Task::class          => \App\Core\Policies\TaskPolicy::class,
        \App\Core\Models\Tag::class           => \App\Core\Policies\TagPolicy::class,
        \App\Core\Models\Discussion::class    => \App\Core\Policies\DiscussionPolicy::class,
        \App\Core\Models\Comment::class       => \App\Core\Policies\CommentPolicy::class,
        \App\Core\Models\Message::class       => \App\Core\Policies\MessagePolicy::class,
        \App\Core\Models\DirectMessage::class => \App\Core\Policies\DirectMessagePolicy::class,
        \App\Core\Models\Permission::class    => \App\Core\Policies\PermissionPolicy::class,
        \App\Core\Models\User::class          => \App\Core\Policies\UserPolicy::class,
        \App\Core\Models\Cycle::class         => \App\Core\Policies\CyclePolicy::class,
        \App\Core\Models\File::class          => \App\Core\Policies\FilePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
