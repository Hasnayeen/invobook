let mix = require('laravel-mix').mix;
var tailwindcss = require('tailwindcss');

mix.postCss('resources/assets/css/main.css', 'public/css', [
        tailwindcss('tailwind.js'),
    ]);
mix.js('resources/assets/js/pages/home.js', 'public/js')
   .js('resources/assets/js/pages/auth/login.js', 'public/js/auth')
   .js('resources/assets/js/pages/auth/register.js', 'public/js/auth');

// Error page
mix.js('resources/assets/js/pages/errors/404.js', 'public/js/errors');

// Projects
mix.js('resources/assets/js/pages/projects/single.js', 'public/js/projects')
   .js('resources/assets/js/pages/projects/tasks.js', 'public/js/projects')
   .js('resources/assets/js/pages/projects/messages.js', 'public/js/projects');

// Teams
mix.js('resources/assets/js/pages/teams/messages.js', 'public/js/teams')
    .js('resources/assets/js/pages/teams/single.js', 'public/js/teams');

// Offices
mix.js('resources/assets/js/pages/offices/messages.js', 'public/js/offices')
    .js('resources/assets/js/pages/offices/single.js', 'public/js/offices');

// Users
mix.js('resources/assets/js/pages/users/profile.js', 'public/js/users');

// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
mix.disableNotifications();
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
mix.webpackConfig({ devtool: "inline-source-map" });