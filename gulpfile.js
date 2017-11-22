/* global requirements */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/* change your directory and settings here */
const settings = {
    publicDir: '.',
    cssDir: 'css'
};

/**
 * serve task, will launch browserSync and launch index.html files
 * and watch the changes for html and css files.
 **/
gulp.task('serve', function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        server: settings.publicDir,
        browser: "google chrome"
    });

    /**
     * watch for changes in html and css files
     */
    gulp.watch([
        settings.cssDir + "/**/*.css",
        settings.publicDir + "/**/*.html",
        ])
    .on('change', browserSync.reload);

});



/**
 * Default task, running just `gulp` will compile the sass,
 * compile the site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['serve']);