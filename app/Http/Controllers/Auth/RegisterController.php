<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Token;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
     */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'token'       => 'required|string|max:255',
            'name'        => 'required|string|max:255',
            'username'    => 'required|string|max:255|unique:users',
            'bio'         => 'string|max:255',
            'designation' => 'string|max:255',
            'avatar'      => 'string|max:255',
            'timezone'    => 'string|max:255',
            'email'       => 'required|email|max:255|unique:users',
            'password'    => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name'        => $data['name'],
            'username'    => $data['username'],
            'bio'         => $data['bio'],
            'designation' => $data['designation'],
            'avatar'      => $data['avatar'],
            'timezone'    => $data['timezone'],
            'email'       => $data['email'],
            'password'    => bcrypt($data['password']),
        ]);
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm($token)
    {
        if (Token::where('token', $token)->exists()) {
            return view('auth.register');
        }

        abort(403);
    }

    public function confirmNewRegistration(Request $request, $token)
    {
        $token = Token::where('token', $token)->first();
        if ($token) {
            $token->delete();
            $this->register($request);
        }

        abort(403);
    }
}
