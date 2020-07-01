<?php

namespace App\Base\Http\Livewire;

use Livewire\Component;

class Sidebar extends Component
{
    public bool $showGroupList = false;
    public bool $isAdminRoute;
    public bool $isSingleResourceRoute;
    public array $group = [];
    public string $currentMenu = '';

    public function mount()
    {
        $this->isAdminRoute = is_admin_route();
        $this->isSingleResourceRoute = is_single_resource_route();
    }

    public function closeGroupList(): void
    {
        $this->showGroupList = false;
        $this->currentMenu = '';
        $this->emit('sidebarDomUpdated');
    }

    public function showGroup(string $type): void
    {
        if ($this->showGroupList && $type === $this->currentMenu) {
            $this->closeGroupList();

            return;
        }
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
        $this->emit('sidebarDomUpdated');
    }

    public function getProjects(): void
    {
        $this->group = user()->projects->toArray();
    }

    public function getTeams(): void
    {
        $this->group = user()->teams->toArray();
    }

    public function getOffices(): void
    {
        $this->group = user()->offices->toArray();
    }

    public function render()
    {
        return view('livewire.sidebar');
    }
}
