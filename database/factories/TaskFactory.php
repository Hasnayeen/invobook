<?php

namespace Database\Factories;

use App\Models\Team;
use App\Models\User;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'status' => 'todo',
            'project_id' => Project::factory(),
            'team_id' => Team::factory(),
            'user_id' => auth()->id() ?? User::factory(),
        ];
    }
}
