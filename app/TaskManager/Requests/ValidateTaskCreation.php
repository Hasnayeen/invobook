<?php

namespace App\TaskManager\Requests;

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
            'name'        => 'required|max:255',
            'assigned_to' => 'nullable|exists:users,id',
            'notes'       => 'nullable|string',
            'due_on'      => 'required|date_format:Y-m-d|after_or_equal:today',
            'related_to'  => 'nullable|integer',
            'group_type'  => 'required|string|in:project,team,office',
            'group_id'    => 'required|integer',
            'status_id'   => 'nullable|exists:statuses,id',
        ];
    }
}
