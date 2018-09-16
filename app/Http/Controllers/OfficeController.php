<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Services\MessageService;

class OfficeController extends Controller
{
    private $messageService;

    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
    }

    public function show(Office $office)
    {
        $office->load('members');

        return view('offices.single', ['office' => $office]);
    }
}
