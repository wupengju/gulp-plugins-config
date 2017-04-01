/**
 * 合并HTML文件中的引入的注释区域块的文件
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var useref = require('gulp-useref');

    gulp.task('userefHTML', function(callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(useref())
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
            	message: "userefHTML task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};