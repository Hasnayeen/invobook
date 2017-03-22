<?php

namespace App\Http\Controllers;

class TeamController extends Controller
{
    public function index()
    {
        return view('teams.single');
    }

    public function getAllMessages()
    {
        return view('teams.messages');
    }
}
