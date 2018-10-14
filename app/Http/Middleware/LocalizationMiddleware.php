<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Lang;

class LocalizationMiddleware
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
        $locale = get_locale();
        app()->setLocale($locale);
        $response = $next($request);

        $file = config('locale.route_to_file.' . $request->route()->uri);
        if (!is_null($file)) {
            $localeData = array_merge(Lang::get('navbar', [], $locale), Lang::get($file, [], $locale));
            $localeString = json_encode($localeData);
            $content = str_replace_first('</head>', "<script>window.lang=$localeString</script>\n</head>", $response->content());
            $response->setContent($content);
        }

        return $response;
    }
}
