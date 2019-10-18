<?php

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
