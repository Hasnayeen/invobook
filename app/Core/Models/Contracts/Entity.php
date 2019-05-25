<?php

namespace App\Core\Models\Contracts;

interface Entity
{
    public function getType();

    public function messages();

    public function tasks();
}
