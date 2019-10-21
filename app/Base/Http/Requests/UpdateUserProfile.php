<?php

namespace App\Base\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserProfile extends FormRequest
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
            'name'          => 'sometimes|required|string',
            'timezone'      => 'sometimes|string|nullable',
            'week_start'    => 'sometimes|string|nullable',
            'lang'          => 'sometimes|string|nullable',
        ];
    }
}
