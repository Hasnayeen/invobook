<?php

namespace App\Base\Http\Livewire;

use Livewire\Component;
use App\TaskManager\Repositories\TaskRepository;

class Home extends Component
{
    public $currentWork;

    public function mount(TaskRepository $repository)
    {
        $this->currentWork = $repository->userCurrentlyWorkingOn(auth()->user()->id);
    }

    public function render()
    {
        return view('livewire.home');
    }
}
