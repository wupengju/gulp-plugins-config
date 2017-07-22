/**
 * JavaScript检查 压缩
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var jshint = require('gulp-jshint'),   //js检查
	    uglify  = require('gulp-uglify'),
        rev = require('gulp-rev');

    gulp.task('script', ['es6', 'userefHTML'], function (callback) {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(jshint())
            // .pipe(jshint.reporter('default')) // 检查js语法
            // .pipe(concat('main.js')) // 合并js
            .pipe(Plugin.sourcemaps.init())
            .pipe(uglify()) // 压缩js
            .pipe(Plugin.sourcemaps.write('./maps'))
            // .pipe(Plugin.rename({ suffix: '.min' }))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.livereload())
            .on('end', callback);
    });
};