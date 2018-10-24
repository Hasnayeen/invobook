<?php

namespace App\Repositories;

use App\Models\File;

class FileRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param File $file
     */
    public function __construct(File $file)
    {
        $this->model = $file;
    }

    /**
     * @param  mixed $data
     * @return mixed
     */
    public function create($data)
    {
        return $this->model->insert($data);
    }
}
