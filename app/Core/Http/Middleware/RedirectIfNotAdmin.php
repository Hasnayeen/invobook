<?php

namespace App\Core\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @param  string|null              $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ((Auth::user()->role->slug === 'owner') || (Auth::user()->role->slug === 'admin')) {
            return $next($request);
        }

        return redirect('/');
    }
}
