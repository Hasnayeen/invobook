<?php

use App\Core\Models\Category;
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
