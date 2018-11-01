<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateTaskCreation extends FormRequest
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
            'name'          => 'required|unique:tasks|max:255',
            'assigned_to'   => 'nullable|exists:users,id',
            'notes'         => 'nullable|string',
            'due_on'        => 'required|date_format:Y-m-d',
            'related_to'    => 'nullable|integer',
            'taskable_type' => 'required',
            'taskable_id'   => 'required',
            'status_id'     => 'nullable|exists:statuses,id',
        ];
    }
}
