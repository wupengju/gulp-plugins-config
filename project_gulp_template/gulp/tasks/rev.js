/**
 * 把最终的带有hash的文件名替换回HTML中去
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var revCollector = require('gulp-rev-collector');

    gulp.task('rev', ['css', 'script'], function(callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(revCollector(config.options))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
            	message: "rev task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};