<?php

namespace App\Base\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateStatusCreation extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'          => 'required|max:25',
            'color'         => 'required|regex:/^#([0-9a-f]{3}){1,2}$/i',
        ];
    }
}
