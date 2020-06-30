<?php

namespace App\Base\Http\Livewire;

use Livewire\Component;

class Sidebar extends Component
{
    public bool $showGroupList = false;
    public bool $isAdminRoute;
    public array $group = [];
    public string $currentMenu = '';

    public function mount()
    {
        $this->isAdminRoute = is_admin_route();
    }

    public function closeGroupList()
    {
        $this->showGroupList = false;
    }

    public function showGroup(string $type)
    {
        $this->currentMenu = $type;
        switch ($type) {
            case 'project':
                $this->getProjects();
                break;
            
            case 'team':
                $this->getTeams();
                break;

            case 'office':
                $this->getOffices();
                break;
            
            default:
                break;
        }
        $this->showGroupList = true;
    }

    public function getProjects()
    {
        $this->group = user()->projects->toArray();
    }
    
    public function getTeams()
    {
        $this->group = user()->teams->toArray();
    }
    
    public function getOffices()
    {
        $this->group = user()->offices->toArray();
    }

    public function render()
    {
        return view('livewire.sidebar');
    }
}
