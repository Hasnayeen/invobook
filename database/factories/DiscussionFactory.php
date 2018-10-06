<?php

use App\Models\User;
use App\Models\Category;
use App\Models\Discussion;
use Faker\Generator as Faker;

$factory->define(Discussion::class, function (Faker $faker) {
    return [
        'name'                  => $faker->name,
        'content'               => $faker->paragraph,
        'posted_by'             => function() {
                                        return factory(User::class)->create()->id;
                                    },
        'category_id'           => function() {
                                        return factory(Category::class)->create()->id;
                                    },
        'archived'              => false,
        'discussionable_type'   => 'office',
        'discussionable_id'     => '1',
    ];
});
