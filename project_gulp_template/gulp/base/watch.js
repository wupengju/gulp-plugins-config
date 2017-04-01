/**
 * 监听文件变化
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	gulp.task('watch', ['webserver'], function() {

        Plugin.livereload.listen();

        for (var key in config) {

            if (config.hasOwnProperty(key)) {

                gulp.watch(config[ key ].src, [ key ]);
            }
        }
    });
};