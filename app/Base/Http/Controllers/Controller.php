<?php

namespace App\Base\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function successResponse(?string $message, ?string $dataType, $data = null, int $code = 200): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'status'  => 'success',
            'message' => localize($message),
            $dataType => $data,
        ], $code);
    }

    public function errorResponse(string $message, ?string $dataType, $data = null, int $code = 400): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'status'  => 'error',
            'message' => localize($message),
            $dataType => $data,
        ], $code);
    }
}
