<?php

namespace App\Base\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserAccount extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email'             => 'sometimes|required|max:255|email',
            'current_password'  => 'sometimes|required',
            'new_password'      => 'required_with:current_password|min:8|confirmed',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if (request('current_password') && ! password_verify(request('current_password'), Auth::user()->password)) {
                $validator->errors()->add('current_password', 'Current password didn\'t match!');
            }
        });
    }
}
