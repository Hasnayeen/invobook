<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\File;
use App\Base\Utilities\GroupTrait;
use App\Base\Utilities\FileUtilities;
use Illuminate\Support\Facades\Storage;
use App\Base\Repositories\FileRepository;
use App\Base\Exceptions\InvalidFileFormat;
use App\Base\Http\Requests\ValidateFileCreation;

class FileController extends Controller
{
    use GroupTrait, FileUtilities;

    public function store(ValidateFileCreation $request, FileRepository $repository)
    {
        try {
            $files = [];
            foreach ($request->file('files') as $key => $file) {
                $this->fileIsOfValidType($file->getMimeType());
                $hash = md5_file($file->path());
                if ($repository->fileDoesNotExistsOnGroup($hash)) {
                    $files[$key] = $this->prepareData($file);
                    $files[$key]['hash'] = $hash;
                } else {
                    unset($files[$key]);
                }
            }
            $repository->create($files);

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
     * @param \App\Base\Repositories\FileRepository $fileRepository
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(FileRepository $fileRepository)
    {
        $group = $this->getGroupModel();
        if ($group->notOpenForPublic()) {
            abort(401);
        } elseif (auth()->user()) {
            $this->authorize('view', $group);
        }
        $files = $fileRepository->getAllFiles();

        return $this->successResponse(null, 'files', $files);
    }

    public function delete(File $file)
    {
        $this->authorize('delete', $file);
        Storage::disk('public')->delete($file->path);
        $file->delete();

        return response()->json(
            [
                'status'  => 'success',
                'message' => localize('project.The file has been deleted'),
            ]
        );
    }

    private function fileIsOfValidType($type)
    {
        $allowedType = ['image/jpeg', 'image/png', 'image/svg', 'gif', 'image/svg+xml', 'application/pdf'];
        if (! in_array($type, $allowedType)) {
            throw new InvalidFileFormat();
        }
    }
}
