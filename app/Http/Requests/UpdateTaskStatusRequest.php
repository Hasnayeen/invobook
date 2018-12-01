<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskStatusRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'          => ['required', 'max:255', Rule::unique('statuses')->ignore($this->name)],
            'color'         => 'required|regex:/^#([0-9a-f]{3}){1,2}$/i',
        ];
    }
}
