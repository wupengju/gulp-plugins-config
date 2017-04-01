/**
 * JavaScript文件名添加hash
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var rev = require('gulp-rev');

    gulp.task('hashScript', ['es6', 'userefHTML'], function (callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(rev())
            .pipe(gulp.dest(config.dist))
            .pipe(rev.manifest())
            .pipe(gulp.dest('./rev/js'))
            .pipe(Plugin.notify({
                message: "hashScript task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};