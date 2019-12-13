<?php

namespace App\Office\Repositories;

use App\Office\Models\Office;

class OfficeRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param Office $office
     */
    public function __construct(Office $office)
    {
        $this->model = $office;
    }

    /**
     * @param  mixed $total
     * @return mixed
     */
    public function getLatestOffices($total)
    {
        return $this->model->orderBy('created_at', 'desc')->take($total)->get();
    }

    public function store($data)
    {
        return $this->model->create([
            'name'         => $data['name'],
            'description'  => $data['description'],
            'owner_id'     => auth()->user()->id,
        ]);
    }
}
