<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \App\Models\Project::class    => \App\Policies\ProjectPolicy::class,
        \App\Models\Team::class       => \App\Policies\TeamPolicy::class,
        \App\Models\Office::class     => \App\Policies\OfficePolicy::class,
        \App\Models\Task::class       => \App\Policies\TaskPolicy::class,
        \App\Models\Tag::class        => \App\Policies\TagPolicy::class,
        \App\Models\Discussion::class => \App\Policies\DiscussionPolicy::class,
        \App\Models\Comment::class    => \App\Policies\CommentPolicy::class,
        \App\Models\Message::class    => \App\Policies\MessagePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
    }
}
