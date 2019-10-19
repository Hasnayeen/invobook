<?php

namespace App\Base\Repositories;

use App\Base\Models\User;

class UserRepository
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getAllUsers(array $columns = ['id', 'name', 'username', 'avatar'])
    {
        return $this->model->with('role')->get($columns);
    }

    public function getUserByEmail(string $email)
    {
        return $this->model->where('email', $email)->select(['name', 'username', 'bio', 'designation', 'email', 'timezone', 'week_start', 'lang', 'location'])->first();
    }
}
