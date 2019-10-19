<?php

namespace App\Base\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateCycleCreation extends FormRequest
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
            'name'       => 'required|string',
            'start_date' => 'required|date_format:Y-m-d',
            'end_date'   => 'required|date_format:Y-m-d|after:start_date',
            'group_type' => 'required|string',
            'group_id'   => 'required|integer',
        ];
    }
}
