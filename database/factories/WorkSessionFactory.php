<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\Task;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WorkSession>
 */
class WorkSessionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'start' => $start = $this->faker->dateTimeBetween('-1 month', 'now'),
            'end' => $start->add(new \DateInterval('PT' . $duration = $this->faker->numberBetween(300, 7200) . 'S')),
            'duration' => $duration,
            'description' => $this->faker->sentence(),
            'rate_in_cents' => $this->faker->numberBetween(1000, 10000),
            'currency' => $this->faker->randomElement(['USD', 'EUR', 'GBP']),
            'project_id' => Project::factory(),
            'task_id' => Task::factory(),
            'team_id' => Team::factory(),
            'user_id' => auth()->id() ?? User::factory(),
        ];
    }
}
