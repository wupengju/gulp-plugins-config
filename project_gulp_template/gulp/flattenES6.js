/**
 * 移动编译ES6的sources map到指定文件夹
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var flatten = require('gulp-flatten');

    gulp.task('flattenES6', function (callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(flatten())
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
                message: "flattenES6 task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};