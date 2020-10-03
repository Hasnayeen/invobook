<?php

namespace App\Base\Http\Livewire;

use Livewire\Component;

class TaskBoard extends Component
{
    public $groupedTasks;

    public function mount($tasks)
    {
        $this->groupedTasks = $tasks->load('status', 'user:id,avatar,name')->groupBy(function ($item) {
            return $item->status->name;
        })->sortKeysDesc()->toArray();
    }

    public function render()
    {
        return view('livewire.task-board');
    }
}
