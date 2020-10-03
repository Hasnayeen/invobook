<?php

use Illuminate\Support\Str;

if (! function_exists('application_last_updated')) {
    /**
     * Return the date when the application was last updated.
     *
     * @return string
     */
    function application_last_updated()
    {
        return date('F d Y', filemtime(base_path() . '/config/app.php'));
    }
}

if (! function_exists('get_locale')) {
    /**
     * Get user set locale or default locale.
     *
     * @return string
     */
    function get_locale(): ?string
    {
        $user = auth()->user();

        return $user->lang ?? 'en';
    }
}

if (! function_exists('localize')) {
    /**
     * Translate the given message.
     *
     * @param  string                                                         $key
     * @param  array                                                          $replace
     * @param  string                                                         $locale
     * @return \Illuminate\Contracts\Translation\Translator|string|array|null
     */
    function localize($key = null, $replace = [], $locale = null)
    {
        $result = trans($key, $replace, $locale);

        if ($result === $key) {
            preg_match('/^.+\.(.+)/', $key, $matches);

            return $matches[1];
        }

        return $result;
    }
}

if (! function_exists('trim_last_dot')) {
    /**
     * Remove any trailing dot (".") character.
     *
     * @param  string $text
     * @return string
     */
    function trim_last_dot($text)
    {
        return substr_replace($text, '', -1);
    }
}

if (! function_exists('is_admin_route')) {
    /**
     * Check if current route is an admin route.
     *
     * @return bool
     */
    function is_admin_route()
    {
        return request()->segment(1) === 'admin';
    }
}

if (! function_exists('is_single_resource_route')) {
    /**
     * Check if current route shows a single Project/Team/Office.
     *
     * @return bool
     */
    function is_single_resource_route()
    {
        return in_array(
            request()->segment(1),
            ['projects', 'teams', 'offices']
        );
    }
}

if (! function_exists('user')) {
    /**
     * Get current authenticated user.
     *
     * @return \App\Base\Models\User
     */
    function user()
    {
        return auth()->user();
    }
}

if (! function_exists('str_limit')) {
    function str_limit(string $text, int $length = 75): string
    {
        return Str::limit($text, $length);
    }
}

if (! function_exists('plugins_path')) {
    /**
     * Get absolute path to plugins directory.
     *
     * @param  string $path
     * @return string
     */
    function plugins_path(string $path = null): string
    {
        return $path ? base_path('plugins' . '/' . $path) : base_path('plugins');
    }
}
