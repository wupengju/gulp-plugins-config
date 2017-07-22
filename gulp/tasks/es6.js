/**
 * 编译ES6
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var babel = require('gulp-babel'),
        changed = require('gulp-changed');

    gulp.task('es6', function (callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(changed(config.dist, {extension: '.js'}))
            .pipe(Plugin.sourcemaps.init())
            .pipe(babel(config.options))
            .pipe(Plugin.sourcemaps.write('./es6maps'))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
                message: "ES6 task begin."
            }))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};