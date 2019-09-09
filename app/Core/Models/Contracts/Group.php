<?php

namespace App\Core\Models\Contracts;

interface Group
{
    public function getType();

    public function messages();

    public function tasks();
}
