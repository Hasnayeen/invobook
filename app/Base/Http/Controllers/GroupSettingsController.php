<?php

namespace App\Base\Http\Controllers;

use App\Base\Utilities\GroupTrait;

class GroupSettingsController extends Controller
{
    use GroupTrait;

    public function index()
    {
        $group = $this->getGroupModel();
        $settings = $group->settings;

        return response()->json([
            'status'   => 'success',
            'settings' => $settings,
        ]);
    }

    public function update()
    {
        $group = $this->getGroupModel();
        $this->authorize('settings', $group);
        $settings = $group->settings;
        $data = request()->all();
        unset($data['group_type'], $data['group_id']);
        $settings->update($data);

        return response()->json([
            'status'   => 'success',
            'message'  => localize('misc.Settings have been updated'),
            'settings' => $settings,
        ]);
    }
}
