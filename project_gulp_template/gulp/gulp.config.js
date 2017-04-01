



// gulp的相关配置项
module.exports = function () {
  var config = {
  			userefHTML: {
  				src: './src/app/*.html',
  				dist: './src/app/'
  			},
  			rev: {
  				src: ['./rev/**/*.json', './src/app/*.html'],
  				dist: './src/app/',
  				options: {
  					replaceReved: true,
            dirReplacements: {
                // 'css': '/dist/css',
                // '/js/': '/dist/js/',
                // 'cdn/': function(manifest_value) {
                //     return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
                // }
            }
  				}
  			},
	  		html: {
	  			src: './src/app/*.html',
	  			dist: './dist/app/'
	  		},
	  		sass: {
	  			src: './src/sass/*.scss',
	  			dist: './src/css/'
	  		},
	  		less: {
	  			src: './src/less/*.less',
	  			dist: './src/css/'
	  		},
	  		css: {
	  			src: './src/css/*.css',
	  			dist: './dist/css/',
	  			autoprefixer: {
	  			  browsers: [
	  			    'last 2 versions',
	  			    'ie 8',
	  			    'ie 9'
	  			  ],
	  			  cascade: true
	  			}
	  		},
	  		image: {
	  			src: './src/images/**',
	  			dist: './dist/images',
	  			optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
          progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
          interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
          multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
	  		},
	  		imageSprite: {
	  			src: './src/images/icons/*.png',
	  			dist: './src/images/icons/',
	  			options: {
	  			  imgName: '../sprite.png', //保存合并后图片相对于src的地址
	  			  cssName: '../../sass/sprite.css', //保存合并后相对于dist的地址
	  			  padding: 10,//合并时两个图片的间距
	  			  algorithm: 'binary-tree', //注释1
	  			  cssTemplate: './src/images/icons/cssSpriteTemplate.css'
	  			  /*cssTemplate: function (data) {
	  			    var arr = [];
	  			    data.sprites.forEach(function (sprite) {
	  			        arr.push(".icon-" + sprite.name +
	  			        " {\n" +
	  			        "  background-image: url('" + sprite.escaped_image + "');\n" +
	  			        "  background-position: " + sprite.px.offset_x + "px " + sprite.px.offset_y + "px;\n" +
	  			        "  width:" + sprite.px.width + ";\n" +
	  			        "  height:" + sprite.px.height + ";\n" +
	  			        "}\n");
	  			    });
	  			    return arr.join("");
		  			}*/
	  			}
	  		},
	  		base64: {
	  			src: './dist/css/*.css',
	  			dist: './dist/css/',
  			  options: {
  			    extensions: ['png'],
  			    maxImageSize: 20 * 1024, // bytes
  			    debug: false
  			  }
	  		},
	  		hashScript: {
	  			src: './src/js/*.js',
	  			dist: './dist/js/'
	  		},
	  		script: {
	  			src: './dist/js/*.js',
	  			dist: './dist/js/'
	  		},
	  		es6: {
	  			src: './src/js/es6/*.js',
	  			dist: './src/js/',
	  			options: {
	  				presets: ['es2015']
	  			}
	  		}
	  };
  return config;
};