<?php

namespace App\Repositories;

use App\Models\Tag;

class TagRepository
{
    protected $tag;

    public function __construct(Tag $tag)
    {
        $this->tag = $tag;
    }

    public function getAllTags()
    {
        return $this->tag->get(['id', 'label']);
    }
}
