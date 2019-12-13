<?php

namespace App\Base\Http\Controllers\Auth;

use App\Base\Models\Role;
use App\Base\Models\User;
use App\Base\Models\Token;
use App\Base\Models\Invite;
use Illuminate\Http\Request;
use App\Office\Models\Office;
use App\Base\Mail\UserRegistered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Base\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Notification;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Base\Notifications\UserRegistered as UserRegisteredNotification;

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
     * @param  array                                      $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name'     => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'email'    => 'required|email|max:255|unique:users',
            'password' => 'required|min:8',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name'     => $data['name'],
            'username' => $data['username'],
            'email'    => $data['email'],
            'active'   => 1,
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * Show the application registration form.
     *
     * @param  mixed                     $token
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm($token)
    {
        if (Token::where('token', decrypt($token))->exists()) {
            return view('auth.register', ['token' => url('register/' . $token)]);
        }

        abort(403);
    }

    /**
     * @param Request $request
     * @param $token
     */
    public function confirmNewRegistration(Request $request, $token)
    {
        $token = Token::where('token', decrypt($token))->first();
        if ($token && ($token->email === $request->email)) {
            $this->register($request, $token);

            $user = User::whereEmail($request->email)->first();
            $role = Role::find($token->role_id);
            $user->role_id = $role->id;
            $user->save();

            $token->delete();

            return redirect('/');
        }

        abort(403);
    }

    /**
     * @param Request $request
     * @param $token
     */
    public function registerViaLink(Request $request, $token)
    {
        $invite = Invite::where('link', url('register/invite-link/' . $token))->first();
        if ($invite) {
            $this->register($request);

            $user = User::whereEmail($request->email)->first();
            $role = Role::find($invite->role_id);
            $user->role_id = $role->id;
            $user->save();

            return redirect('/');
        }

        abort(403);
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  mixed                    $user
     * @return void
     */
    protected function registered(Request $request, $user)
    {
        $office = Office::where('name', 'Headquarter')->first();
        $user->offices()->attach($office->id);
        Mail::to($user->email)
            ->send(new UserRegistered($user));
        Notification::send($this->getRecipients(), new UserRegisteredNotification($user));
    }

    private function getRecipients()
    {
        return User::whereHas('role', function ($query) {
            $query->where('slug', 'owner')
                  ->orWhere('slug', 'admin');
        })
        ->get();
    }
}
