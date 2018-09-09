<?php

if (! function_exists('about')) {
    /**
     * Get or set software related values.
     *
     * @param  string $key
     * @param  string $value
     * @return array
     */
    function about($key, $value = null)
    {
        $string = file_get_contents(storage_path() . '/app/config/about.json');
        $config = json_decode($string, true);

        if (is_null($value)) {
            return $config[$key];
        }

        $config[$key] = $value;
        file_put_contents(storage_path() . '/app/config/about.json', json_encode($config));

        return $config;
    }
}
