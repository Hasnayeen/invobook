<?php

namespace App\Base\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'           => 'required',
            'description'    => 'required',
            'time'           => 'required',
            'created_by'     => 'required',
            'eventable_type' => 'required',
            'eventable_id'   => 'required',
        ];
    }
}
