/**
 * 组件安装
 * npm install 
 * gulp-minify-html     html压缩
 * gulp-sass            编译sass【自带输出格式 进行压缩】
 * gulp-less            编译less
 * gulp-autoprefixer    添加CSS浏览器前缀
 * gulp-minify-css      CSS压缩
 * gulp-imagemin        图片压缩
 * gulp-base64          图片转换成Base64编码
 * gulp.spritesmith     雪碧图
 * jshint               JS检查
 * gulp-jshint          JS检查
 * gulp-uglify          JS压缩
 * gulp-rename          重命名
 * gulp-flatten         移动指定文件
 * gulp-concat          合并文件
 * gulp-clean           清理编译环境
 * gulp-changed         只编译改动过的文件【编译前后文件名后缀如果发生改变的话则需要单独配置】
 * gulp-plumber         阻止gulp插件发生错误导致进程退出并输出错误日志
 * gulp-notify          任务流执行提醒
 * babel                编译ES6
 * babel-preset-es2015  编译ES6
 * gulp-connect         node本地服务器
 * gulp-webserver       本地服务器
 * mockjs               生成随机数据&拦截Ajax请求
 * gulp-sourcemaps      映射压缩或编译后的文件到源代码文件 便于调试
 * gulp-livereload      浏览器即时刷新(借助Chrome的livereload插件)
 * gulp-useref          根据注释将HTML中需要合并压缩的区块找出来，对区块内的所有文件进行合并    
 * gulp-rev             更改版本号-静态文件名改成hash的形式
 * gulp-rev-collector   gulp-rev的插件，用于html模板更改引用路径
 * gulp-load-plugins    gulp-load-plugins
 *
 * 额外：
 * gulp-sequence        顺序执行任务【直接用gulp任务列表就行了】
 * gulp-cached          缓存当前任务中的文件，只让已修改的文件通过管道    
 * gulp-debug           调试gulp任务执行
 * gulp-file-include    俺搞内部项目的时候会用到，让 HTML 组件化的第一小步
 * gulp-git             直接在 Build 时把代码都提交到 git上了...特么劳资懒起来连我自己都害怕
 * --save-dev
 */

var gulp               = require('gulp'),  // 基础库
    config             = require('./gulp/gulp.config')(),   // 自定义配置文件
    $                  = require('gulp-load-plugins')(),   // gulp-load-plugins
    gulpTaskList       = require('fs').readdirSync('./gulp/tasks/'),    // 读取添加的子模块任务列表
    gulpTaskBaseList   = require('fs').readdirSync('./gulp/base/');   // 读取默认的子模块任务列表
    
    // 若加载的插件都已在package.json里 则可以直接使用plugins加载插件即可
    // $.notify     = require('gulp-notify');   // livereload
    // $.rename     = require('gulp-rename');    // 重命名
    // $.concat     = require('gulp-concat');    // 合并文件
    // $.clean      = require('gulp-clean');     // 清空文件夹
    // $.notify     = require('gulp-notify');    // 任务流执行提醒
    // $.sourcemaps = require('gulp-sourcemaps');  // 映射源代码     
    // $.plumber     = require('gulp-plumber');    // 捕获任务流中的错误
    // $.livereload = require('gulp-livereload');   // livereload


/*// 设置connect服务器
require('./gulp/http')(gulp, $, {
    root: ['./dist'],
    port: 8080,
});*/


// 获取模拟数据
var data = require('./data');

// 引入mockjs
var Mock = require('mockjs');

// 设置webserver本地服务器
require('./gulp/webserver')(gulp, $, {
    src: ['./dist'], // root
    options: {
        host:'localhost',
        port: 8000,
        livereload: true, // 服务器自动刷新
        directoryListing: {
          enable: true,
          path: 'app'
        },
        open: true, // 启动默认浏览器打开服务器
        middleware: function(req, res, next) {
          var urlObj = require('url').parse(req.url, true),
              method = req.method,
              paramObj = urlObj.query;
          // console.log(req.url);
          
          // 路由设置
          if (req.url.indexOf('.') > -1) { // 静态文件
            next();
          }
          else { // 模拟数据接口
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Language', 'zh-CN');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify((data[ req.url ]) && Mock.mock(data[ req.url ])));
            next();
          }
        }
    }
});

// 执行添加的子模块任务
gulpTaskList.forEach(function (taskfile) {

    require('./gulp/tasks/' + taskfile)(gulp, $, config[ taskfile.substring(0, taskfile.indexOf('.')) ]);
});

// 执行默认的的子模块任务
gulpTaskBaseList.forEach(function (taskfile) {

    require('./gulp/base/' + taskfile)(gulp, $, config);
});