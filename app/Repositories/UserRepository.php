<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getAllUsers($columns = ['name', 'username', 'avatar'])
    {
        return $this->model->get($columns);
    }
}
