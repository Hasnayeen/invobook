<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTask extends FormRequest
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
            'title'         => 'required|unique:tasks|max:255',
            'assigned_to'   => 'nullable|exists:users,id',
            'notes'         => 'required',
            'due_on'        => 'required|date',
            'taskable_type' => 'required',
            'taskable_id'   => 'required',
        ];
    }
}
