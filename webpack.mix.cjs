const mix = require('laravel-mix');

require ('mix-tailwindcss');
require('browser-sync');


mix
.js("resources/js/app.js", "public/js")
.js('resources/js/components/HeaderComponent.js', 'public/js')
.react()
   .sass('resources/sass/app.scss', 'public/css')
   .sourceMaps()
   .browserSync({
      proxy: 'localhost:8000',
      notify: false
   })
   .tailwind('./tailwind.config.js')
