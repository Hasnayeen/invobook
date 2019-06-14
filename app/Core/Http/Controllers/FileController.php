<?php

namespace App\Core\Http\Controllers;

use App\Core\Repositories\FileRepository;
use App\Core\Http\Requests\ValidateFileCreation;

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
                    $files[$key]['name'],
                    ['disk' => 'public']
                );
                $files[$key]['fileable_type'] = request('group_type');
                $files[$key]['fileable_id'] = request('group_id');
                $files[$key]['created_at'] = $now;
                $files[$key]['updated_at'] = $now;
            }
            $repository->create($files);

            if ($request->get('for_editor')) {
                return response()->json([
                    'status'  => 'success',
                    'message' => 'Files uploaded successfully',
                    'url'     => url('storage/' . $files[0]['path']),
                ]);
            }

            return response()->json([
                'status'  => 'success',
                'message' => 'Files uploaded successfully',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]);
        }
    }

    /**
     * @param \App\Core\Repositories\FileRepository $fileRepository
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(FileRepository $fileRepository)
    {
        $files = $fileRepository->getAllFiles();

        return $this->successResponse(null, 'files', $files);
    }
}
