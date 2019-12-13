<?php

namespace App\TaskManager\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
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
            'name'          => ['required', 'max:255', Rule::unique('tasks')->ignore($this->task)],
            'assigned_to'   => 'nullable|exists:users,id',
            'notes'         => 'string',
            'due_on'        => 'required|date_format:Y-m-d',
            'related_to'    => 'nullable|integer',
            'group_type'    => 'required|string|in:project,team,office',
            'group_id'      => 'required|integer',
            'status_id'     => 'nullable|exists:statuses,id',
        ];
    }
}
