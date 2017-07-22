/**
 * sass编译并压缩
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var sass = require('gulp-sass'),
        changed = require('gulp-changed');

    gulp.task('sass', function (callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(changed(config.dist, {extension: '.css'}))
            .pipe(Plugin.sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
            .pipe(Plugin.sourcemaps.write('../maps/sass'))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
                message: "Sass task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};