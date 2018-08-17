<?php

namespace App\Http\Controllers;

class InstallController extends Controller
{
    public function __construct()
    {
        if (!env('INSTALL')) {
            abort(404);
        }
    }

    public function index()
    {
        return view('install');
    }
}
