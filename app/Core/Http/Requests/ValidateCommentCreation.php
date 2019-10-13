<?php

namespace App\Core\Http\Requests;

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
            'group_type'       => 'required|string',
            'group_id'         => 'required|integer|exists:' . request('group_type') . 's,id',
        ];
    }
}
