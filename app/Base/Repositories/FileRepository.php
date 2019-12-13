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
                    ->with('owner:id,name,avatar,username')
                    ->get();
    }

    public function fileDoesNotExistsOnGroup($hash)
    {
        return $this->model->where('hash', $hash)->doesntExist();
    }

    public function fileExistOnGroup($hash)
    {
        return $this->model->where('hash', $hash)->first();
    }
}
