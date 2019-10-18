<?php

use App\Base\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name'       => 'Idea',
        ]);
        Category::create([
            'name'       => 'Feature',
        ]);
        Category::create([
            'name'       => 'Suggestion',
        ]);
        Category::create([
            'name'       => 'Question',
        ]);
        Category::create([
            'name'       => 'Issue',
        ]);
        Category::create([
            'name'       => 'Other',
        ]);
    }
}
