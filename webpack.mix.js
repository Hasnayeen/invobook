let mix = require('laravel-mix').mix;

mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.js('resources/assets/js/pages/home.js', 'public/js');
mix.js('resources/assets/js/pages/auth/login.js', 'public/js/auth');

// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.