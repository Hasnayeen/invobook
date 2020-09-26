let mix = require('laravel-mix')
var tailwindcss = require('tailwindcss')

mix.postCss('resources/assets/css/main.css', 'public/css', [
  require('tailwindcss'),
])

mix.copy('resources/assets/css/editor.css', 'public/css/editor.css').minify('public/css/editor.css')

mix.js('resources/assets/js/pages/auth/login.js', 'public/js/auth').minify('public/js/auth/login.js')
  .js('resources/assets/js/pages/auth/register.js', 'public/js/auth').minify('public/js/auth/register.js')
  .js('resources/assets/js/pages/errors/404.js', 'public/js/errors').minify('public/js/errors/404.js')
  .js('resources/assets/js/pages/projects/single.js', 'public/js/projects').minify('public/js/projects/single.js')
  .js('resources/assets/js/pages/teams/single.js', 'public/js/teams').minify('public/js/teams/single.js')
  .js('resources/assets/js/pages/offices/single.js', 'public/js/offices').minify('public/js/offices/single.js')
  .js('resources/assets/js/pages/users/profile.js', 'public/js/users').minify('public/js/users/profile.js')
  .js('resources/assets/js/pages/users/settings.js', 'public/js/users').minify('public/js/users/settings.js')
  .js('resources/assets/js/pages/admin/index.js', 'public/js/admin').minify('public/js/admin/index.js')
  .js('resources/assets/js/pages/home.js', 'public/js').minify('public/js/home.js')
  .extract(['vue', 'axios', 'luxon'])

// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
mix.minify('public/js/vendor.js')
if (!mix.inProduction()) {
  mix.sourceMaps() // Enable sourcemaps
}
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
mix.webpackConfig(
  {
    devtool: 'inline-source-map'
  },
  {
    resolve: {
      alias: {
        'vue$': mix.inProduction() ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
      }
    }
  }
)

if (mix.inProduction()) {
  mix.version();
}

mix.options({
  hmrOptions: {
    host: 'localhost',
    port: 3000
  }
})