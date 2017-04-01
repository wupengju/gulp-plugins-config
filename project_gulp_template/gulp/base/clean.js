/**
 * 清理编译环境
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

    var childTaskList = [];

    for (var key in config) {

        if (config.hasOwnProperty(key)) {
            
            childTaskList.push(config[ key ].dist);
        }
    }

    // childTaskList.push(config.html.dist);
    // childTaskList.push(config.css.dist);
    // childTaskList.push(config.image.dist);
    // childTaskList.push(config.script.dist);

    gulp.task('clean', function(callback) {
        gulp.src(childTaskList, {read: false})
            .pipe(Plugin.clean());
    });
};