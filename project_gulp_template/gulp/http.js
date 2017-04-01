/**
 * 设置服务器
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

  gulp.task('http', function() {
      Plugin.connect.server({
          root: config.root,
          port: config.port,
          livereload: true
      });
  });
};