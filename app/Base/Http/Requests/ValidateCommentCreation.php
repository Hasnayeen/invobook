<?php

namespace App\Base\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class ValidateCommentCreation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'body'             => 'required',
            'commentable_type' => 'required|string',
            'commentable_id'   => 'required|integer|exists:' . request('commentable_type') . 's,id',
        ];
    }
}
