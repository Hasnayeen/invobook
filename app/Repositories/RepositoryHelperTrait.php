<?php

namespace App\Repositories;

trait RepositoryHelperTrait
{
    public function getIdFromSlug($slug)
    {
        return $this->model->where('slug', $slug)->first()->id;
    }
}
