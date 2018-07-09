const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const pkg = require('./package');

const banner = `/*!
 *   Cordelia color picker
 *   version: ${pkg.version}
 *    author: ${pkg.author.name} <${pkg.author.email}>
 *   website: ${pkg.author.url}
 *    github: ${pkg.repository.url}
 *   license: ${pkg.license}
 *
*/`;
const globals = {
    '@angular/animations': 'ng.animations',
    '@angular/common': 'ng.common',
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/router': 'ng.router',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-server': 'ng.platformServer',
    'rxjs': 'Rx',
    'rxjs/operator': 'Rx.Observable.prototype',
    'rxjs/operators': 'Rx.Observable.prototype'
};
const external = Object.keys(globals);
gulp.task('rollup', async () => {
    const module = await rollup.rollup({
        input: './bundle/cordelia.js'
    });

    await module.write({
        banner,
        file: './dist/cordelia.esm.js',
        format: 'es'
    });

    const umd = await rollup.rollup({
        input: './dist/cordelia.esm.js',
        external,
        plugins: [
            resolve()
        ]
    });

    await umd.write({
        banner,
        file: './dist/cordelia.js',
        format: 'umd',
        name: 'Cordelia',
        globals,
        exports: 'named'
    });

    gulp.src('dist/cordelia.js')
        .pipe(uglify({
            output: {
                comments: /cordelia-angular/
            }
        }))
        .pipe(rename('cordelia.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', () => {
    gulp.watch('./bundle/**', ['rollup']);
    gulp.start(['rollup']);
});