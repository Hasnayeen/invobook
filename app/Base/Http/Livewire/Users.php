<?php

namespace App\Base\Http\Livewire;

use Livewire\Component;

class Users extends Component
{
    public $users;

    public function mount($users)
    {
        $this->users = $users;
    }

    public function render()
    {
        return view('livewire.users');
    }
}
