<?php

namespace App\Base\Http\Middleware;

use Closure;
use App\Base\Models\User;
use Illuminate\Support\Arr;

class MobileLoginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $request->merge([
            'grant_type'    => 'password',
            'client_id'     => config('auth.mobile.client_id'),
            'client_secret' => config('auth.mobile.client_secret'),
        ]);

        $response = $next($request);
        if ($response->getStatusCode() === 200) {
            $response = $this->addCurrentUserToResponseData($request, $response);
        }

        return $response;
    }

    private function addCurrentUserToResponseData($request, $response)
    {
        $array = json_decode($response->getContent(), true);
        if (Arr::has($array, 'access_token')) {
            $array = Arr::add($array, 'user', $this->getCurrentUser($request));
            $response->setContent(json_encode($array));

            return $response;
        }
    }

    private function getCurrentUser($request)
    {
        return User::where('email', $request->username)->select(['name', 'username', 'bio', 'designation', 'avatar', 'email', 'timezone', 'week_start', 'lang', 'location'])->first();
    }
}
