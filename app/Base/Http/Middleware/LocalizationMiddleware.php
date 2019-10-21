<?php

namespace App\Base\Http\Middleware;

use Closure;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Lang;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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

        $uri = $request->route() ? $request->route()->uri : '';
        $file = config('locale.route_to_file.' . $uri);

        if (! is_null($file)) {
            $localeData = array_merge(Lang::get('navbar', [], $locale), Lang::get($file, [], $locale));
            $this->prepareResponse($localeData, $response);
        } elseif ($response->exception instanceof NotFoundHttpException) {
            $localeData = Lang::get('navbar', [], $locale);
            $this->prepareResponse($localeData, $response);
        }

        return $response;
    }

    private function prepareResponse($localeData, $response)
    {
        $localeString = json_encode($localeData);
        $content = Str::replaceFirst('</head>', "<script>window.lang=$localeString</script>\n</head>", $response->content());
        $response->setContent($content);
    }
}
