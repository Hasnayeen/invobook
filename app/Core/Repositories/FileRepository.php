<?php

namespace App\Core\Repositories;

use App\Core\Models\File;

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

    /**
     * @return mixed
     */
    public function getAllFiles()
    {
        return $this->model
                    ->where([
                        'fileable_type' => request('fileable_type'),
                        'fileable_id'   => request('fileable_id'),
                    ])
                    ->get();
    }
}
