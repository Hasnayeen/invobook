<?php

namespace App\Core\Repositories;

use App\Core\Models\Status;

class StatusRepository
{
    protected $model;

    public function __construct(Status $status)
    {
        $this->model = $status;
    }

    public function getAllStatus()
    {
        return $this->model->get(['id', 'name', 'color']);
    }

    public function storeStatus($data)
    {
        return $this->model->create([
            'name'   => $data['name'],
            'color'  => $data['color'],
        ]);
    }
}
