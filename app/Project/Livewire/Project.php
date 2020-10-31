<?php

namespace App\Project\Livewire;

use Livewire\Component;
use App\Project\Models\Project as ProjectModel;

class Project extends Component
{
    public $project;

    public function mount(ProjectModel $project)
    {
        $this->project = $project;
    }

    public function render()
    {
        return view('livewire.project');
    }
}
