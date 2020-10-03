let mix = require('laravel-mix')
var tailwindcss = require('tailwindcss')

mix.postCss('resources/assets/css/main.css', 'public/css', [
  require('tailwindcss'),
])

mix.copy('resources/assets/css/editor.css', 'public/css/editor.css').minify('public/css/editor.css')

// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.

if (mix.inProduction()) {
  mix.version();
}

mix.options({
  hmrOptions: {
    host: 'localhost',
    port: 3000
  }
})