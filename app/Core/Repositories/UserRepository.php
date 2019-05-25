<?php

namespace App\Core\Repositories;

use App\Core\Models\User;

class UserRepository
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getAllUsers($columns = ['id', 'name', 'username', 'avatar'])
    {
        return $this->model->get($columns);
    }
}
