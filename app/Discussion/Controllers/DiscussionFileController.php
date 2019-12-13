<?php

namespace App\Discussion\Controllers;

use App\Base\Utilities\FileUtilities;
use App\Base\Http\Controllers\Controller;
use App\Base\Repositories\FileRepository;
use App\Base\Exceptions\InvalidFileFormat;
use App\Base\Http\Requests\ValidateFileCreation;

class DiscussionFileController extends Controller
{
    use FileUtilities;

    public function store(ValidateFileCreation $request, FileRepository $repository)
    {
        try {
            $file = $request->file('file');
            $this->fileIsOfValidType($file->getMimeType());
            $hash = md5_file($file->path());
            $fileExist = $repository->fileExistOnGroup($hash);
            if (! $fileExist) {
                $file = $this->prepareData($file);
                $file['hash'] = $hash;
                $repository->create($file);
                $filePath = $file['path'];
            } else {
                $filePath = $fileExist->path;
            }

            return response()->json([
                'status'  => 'success',
                'message' => 'Files uploaded successfully',
                'url'     => url('storage/' . $filePath),
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]);
        }
    }

    private function fileIsOfValidType($type)
    {
        $allowedType = ['image/jpeg', 'image/png', 'image/svg', 'gif'];
        if (! in_array($type, $allowedType)) {
            throw new InvalidFileFormat();
        }
    }
}
