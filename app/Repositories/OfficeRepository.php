<?php

namespace App\Repositories;

use App\Models\Office;

class OfficeRepository
{
    use RepositoryHelperTrait;
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
     * @return mixed
     */
    public function getLatestThreeOffice()
    {
        return $this->model->orderBy('created_at', 'desc')->take(3)->get();
    }
}
