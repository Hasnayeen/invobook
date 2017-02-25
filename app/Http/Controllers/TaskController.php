<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return view('home');
    }

    /**
     * Show the form for creating a new task.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('tasks.create');
    }

    /**
     * Store a newly created task in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
           'title'         => 'required|unique:tasks|max:255',
           'assigned_to'   => 'nullable|exists:users,id',
           'notes'         => 'required',
           'due_on'        => 'required|date',
           'taskable_type' => 'required',
           'taskable_id'   => 'required',
        ]);

        Task::create([
            'title'         => $request->input('title'),
            'assigned_to'   => $request->input('assigned_to'),
            'notes'         => $request->input('notes'),
            'due_on'        => $request->input('due_on'),
            'taskable_type' => $request->input('taskable_type'),
            'taskable_id'   => $request->input('taskable_id'),
        ]);

        redirect('home')->with('status', 'Task created!');
    }

}
