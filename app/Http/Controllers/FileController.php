<?php

namespace App\Http\Controllers;

use App\Repositories\FileRepository;
use App\Http\Requests\ValidateFileCreation;

class FileController extends Controller
{
    public function store(ValidateFileCreation $request, FileRepository $repository)
    {
        try {
            $files = [];
            $now = now();
            foreach ($request->file('files') as $key => $file) {
                $files[$key]['name'] = $file->getClientOriginalName();
                $files[$key]['path'] = $file->storeAs(
                    '/',
                    $files[$key]['name']
                );
                $files[$key]['fileable_type'] = request('fileable_type');
                $files[$key]['fileable_id'] = request('fileable_id');
                $files[$key]['created_at'] = $now;
                $files[$key]['updated_at'] = $now;
            }
            $repository->create($files);

            return response()->json([
                'status'  => 'success',
                'message' => 'Files uploaded successfully',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'success',
                'message' => $exception->getMessage(),
            ]);
        }
    }
}
