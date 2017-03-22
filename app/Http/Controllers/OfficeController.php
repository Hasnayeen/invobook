<?php

namespace App\Http\Controllers;

class OfficeController extends Controller
{
    public function index()
    {
        return view('offices.single');
    }

    public function getAllMessages()
    {
        return view('offices.messages');
    }
}
