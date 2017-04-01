/**
 * 图片压缩
 * @param  {Object} gulp   gulp对象
 * @param  {Object} Plugin Plugin对象，有共享模块
 * @param  {Object} config 自定义配置对象
 * @return {undefind}      
 */
module.exports = function (gulp, Plugin, config) {

	var imagemin = require('gulp-imagemin'),
        pngquant = require('imagemin-pngquant');

    gulp.task('image', function() {

        gulp.src(config.src)
            .pipe(Plugin.plumber())
            .pipe(imagemin({
  				optimizationLevel: config.optimizationLevel,
				progressive: config.progressive,
				interlaced: config.interlaced,
                multipass: config.multipass
            }))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.notify({
                message: "Compassed image task begin."
            }))
            .pipe(Plugin.livereload());
    });
    /*var imagemin = require('gulp-imagemin'),
        pngquant = require('imagemin-pngquant');
         
    gulp.task('image ', function () {
        gulp.src(config.src)
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }))
            .pipe(gulp.dest(config.dist))
            .pipe(Plugin.livereload());
    });*/
    
    /*//  图片压缩任务,支持JPEG、PNG及GIF文件
    var imagemin = require('imagemin'),
        imageminJpegtran = require('imagemin-jpeg-recompress'),
        imageminOptipng = require('imagemin-optipng');

    gulp.task('image', function () {

        var jpgmin = imageminJpegtran({
                accurate: true,//高精度模式
                quality: "high",//图像质量:low, medium, high and veryhigh;
                method: "smallfry",//网格优化:mpe, ssim, ms-ssim and smallfry;
                min: 70,//最低质量
                loops: 0,//循环尝试次数, 默认为6;
                progressive: false,//基线优化
                subsample: "default"//子采样:default, disable;
            }),
            pngmin = imageminOptipng({
                optimizationLevel: 4
            });

        gulp.src(config.src)
            .pipe(imagemin({
                use: [jpgmin, pngmin]
            }))
            .pipe(gulp.dest(config.dist));
    });*/
};