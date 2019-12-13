<?php

namespace App\Base\Http\Middleware;

use Closure;

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
        if ($this->userCanViewAdminPage()) {
            return $next($request);
        }

        return redirect('/');
    }

    private function userCanViewAdminPage()
    {
        return resolve('Authorization')->userHasPermissionTo('view', 'admin');
    }
}
