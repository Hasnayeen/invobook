<?php

namespace App\Core\Http\Controllers;

use App\Core\Utilities\GroupTrait;

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
        $settings->task_enabled = request('task_enabled') ?? $settings->task_enabled;
        $settings->discussion_enabled = request('discussion_enabled') ?? $settings->discussion_enabled;
        $settings->message_enabled = request('message_enabled') ?? $settings->message_enabled;
        $settings->event_enabled = request('event_enabled') ?? $settings->event_enabled;
        $settings->file_enabled = request('file_enabled') ?? $settings->file_enabled;
        $settings->save();

        return response()->json([
            'status'   => 'success',
            'message'  => localize('misc.Settings have been updated'),
            'settings' => $settings,
        ]);
    }
}
