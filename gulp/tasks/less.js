/**
 * less编译并压缩
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var less = require('gulp-less'),
        changed = require('gulp-changed');

    gulp.task('less', function (callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(changed(config.dist, {extension: '.css'}))
            .pipe(Plugin.sourcemaps.init())
            .pipe(less())
            .pipe(Plugin.sourcemaps.write('../maps/less'))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
                message: "Less task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};