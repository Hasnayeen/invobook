<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Carbon\Carbon;

$factory->define(App\Base\Models\File::class, function (Faker\Generator $faker) {
    $now = Carbon::now();

    $filename = $faker->randomElement(['features.pdf', 'foo.png', 'bar.jpg']);
    $fileableType = $faker->randomElement(['office', 'team', 'project']);
    $fileableId = null;
    switch ($fileableType) {
        case 'office':
            $fileableId = factory(App\Base\Models\Office::class)->create()->id;
            break;
        case 'team':
            $fileableId = factory(App\Base\Models\Team::class)->create()->id;
            break;
        case 'project':
            $fileableId = factory(App\Base\Models\Project::class)->create()->id;
            break;
        default:
            throw new Exception('Wrong Taskable type');
    }

    return [
        'name'          => $filename,
        'path'          => '/' . $filename,
        'hash'          => $faker->md5,
        'fileable_type' => $fileableType,
        'fileable_id'   => $fileableId,
        'created_at'    => $now,
        'updated_at'    => $now,
    ];
});
