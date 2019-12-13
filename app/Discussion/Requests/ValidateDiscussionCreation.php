<?php

namespace App\Discussion\Requests;

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
        return resolve('Authorization')->userHasPermissionTo('create', 'discussion', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'        => 'required|string|max:255',
            'content'     => 'required|string',
            'raw_content' => 'required|string',
            'draft'       => 'required|boolean',
            'group_type'  => 'required|string|in:project,team,office',
            'group_id'    => 'required|integer',
            'category_id' => 'required|integer|exists:categories,id',
        ];
    }
}
