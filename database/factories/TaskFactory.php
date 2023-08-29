<?php

namespace Database\Factories;

use App\Models\Team;
use App\Models\User;
use App\Models\Project;
use App\Models\Status;
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
            'status_id' => Status::factory()->for($team = Team::factory()),
            'project_id' => Project::factory(),
            'team_id' => $team,
            'user_id' => auth()->id() ?? User::factory(),
        ];
    }
}
