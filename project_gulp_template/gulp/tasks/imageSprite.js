/**
 * 雪碧图
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var spritesmith = require('gulp.spritesmith');

    gulp.task('imageSprite', function() {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(spritesmith(config.options))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.livereload());
    });
};