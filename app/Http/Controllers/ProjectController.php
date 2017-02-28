<?php

namespace App\Http\Controllers;

class ProjectController extends Controller
{
    //View for project list
    public function index()
    {
        return view('projects.index');
    }

    //View for single project
    public function single()
    {
        return view('projects.single');
    }
}
