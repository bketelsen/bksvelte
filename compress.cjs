var compress_images = require('compress-images');

const INPUT_path_to_your_images = 'static/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const INPUT_path_to_your_jpgimages = 'static/images/**/*.{jpg,JPG,jpeg,JPEG}';

const OUTPUT_path = 'static/optimized/images/';

// webp first, so we're not optimizing the jpg after it's been optimized!
compress_images(INPUT_path_to_your_jpgimages, OUTPUT_path, {
    compress_force: false,
    statistic: true,
    autoupdate: true
},
    false,
    { jpg: { engine: "webp", command: false } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, function () {
    });

compress_images(INPUT_path_to_your_images, OUTPUT_path, {
    compress_force: false,
    statistic: true,
    autoupdate: true
},
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, function () {
    });
