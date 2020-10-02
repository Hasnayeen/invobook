<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\AppSetting;
use App\Base\Http\Requests\AppSettingRequest;

class AppSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appSetting = AppSetting::all();

        return response()->json([
                'status'       => 'success',
                'appSettings'  => $appSetting,
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Base\Http\Requests\AppSettingRequest $request
     * @param  \App\Base\Models\AppSetting               $appSetting
     * @return \Illuminate\Http\Response
     */
    public function update(AppSettingRequest $request, AppSetting $appSetting)
    {
        try {
            $this->authorize('update', $appSetting);
            $appSetting->update($request->all());

            return response()->json([
                'status'  => 'success',
                'message' => localize('misc.The App Setting has been updated'),
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }
}
