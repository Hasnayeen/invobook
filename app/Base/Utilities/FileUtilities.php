<?php

namespace App\Base\Utilities;

trait FileUtilities
{
    private function prepareData($file)
    {
        $now = now();
        $data['name'] = $file->getClientOriginalName();
        $data['path'] = $file->storeAs(
            '/',
            $data['name'],
            ['disk' => 'public']
        );
        $data['fileable_type'] = request('group_type');
        $data['fileable_id'] = request('group_id');
        $data['mime_type'] = $file->getMimeType();
        $data['owner_id'] = auth()->user()->id;
        $data['created_at'] = $now;
        $data['updated_at'] = $now;

        return $data;
    }
}
