<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidateDiscussionCreation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->hasPermissionTo('create discussion.' . request('discussionable_type') . '->' . request('discussionable_id'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'                => 'required|string|max:255',
            'content'             => 'required|string',
            'raw_content'         => 'required|string',
            'draft'               => 'required|boolean',
            'discussionable_type' => 'required|string|in:project,team,office',
            'discussionable_id'   => 'required|integer',
            'category_id'         => 'required|integer|exists:categories,id'
        ];
    }
}
