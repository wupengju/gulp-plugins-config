/**
 * gulp默认操作
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

  var defaultTaskList = [];

  for (var key in config) {
      if (config.hasOwnProperty(key) && key !== 'webserver') {
          defaultTaskList.push(key);
      }
  }

	gulp.task('default', function(){
  		gulp.start(defaultTaskList);
  });
};