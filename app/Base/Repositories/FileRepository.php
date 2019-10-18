<?php

namespace App\Base\Repositories;

use App\Base\Models\File;

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
                        'fileable_type' => request('group_type'),
                        'fileable_id'   => request('group_id'),
                    ])
                    ->get();
    }

    public function fileDoesNotExistsOnGroup($hash)
    {
        return $this->model->where('hash', $hash)->doesntExist();
    }
}
