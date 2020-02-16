<?php

namespace App\Observers;

use App\Office\Models\Office;
use App\Office\Models\OfficeSetting;

class OfficeObserver
{
    /**
     * Handle the office "created" event.
     *
     * @param  \App\Office $office
     * @return void
     */
    public function created(Office $office)
    {
        OfficeSetting::insert(['office_id' => $office->id]);
    }
}
