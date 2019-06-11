<?php

namespace App\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDiscussionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->id === $this->route('discussion')->posted_by;
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
            'category_id'         => 'required|integer|exists:categories,id',
        ];
    }
}
