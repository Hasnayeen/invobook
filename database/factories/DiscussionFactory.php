<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Discussion::class, function (Faker $faker) {
    $fakeHeading = $faker->word;
    $fakeBoldWord = $faker->word;

    return [
        'name'                  => $faker->name,
        'content'               => '<h1>'. $fakeHeading .'</h1><p>And some <strong>'. $fakeBoldWord .'</strong></p>',
        'raw_content'           => '{"ops":[{"insert":"'. $fakeHeading .'"},{"attributes":{"header":1},"insert":"\n"},{"insert":"And some "},{"attributes":{"bold":true},"insert":"'. $fakeBoldWord .'"},{"insert":"\n"}]}',
        'draft'                 => false,
        'discussionable_type'   => 'project',
        'discussionable_id'     => function () {
                                        return factory(\App\Models\Project::class)->create()->id;
                                    },
        'posted_by'             => function () {
                                        return factory(\App\Models\User::class)->create()->id;
                                    },
        'category_id'           => function () {
                                        return factory(\App\Models\Category::class)->create()->id;
                                    },
    ];
});
