/* 2017-04-13 webpack_Demo */
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

var public_PATHS = {
	node_modules_Path: path.resolve('./node_modules'),
	public_resource_Path: path.resolve(process.cwd(), './src/public_resource'),
	vendor_Path: path.resolve(process.cwd(), './src/public_resource/vendor'),
};

var entry_config = {
	index:['./src/main.js'],	//单页面入口文件
	common:['jquery','vue','common_tools','store']
};	

var output_config = {
	path: __dirname+'/build/',
    filename: 'js/[name].js'
};

var module_config ={
	loaders: [
		//css 文件使用 style-loader 和   css-loader 来处理
        {
   			test:/\.css$/,
   			loader:'style-loader!css-loader'
		},
//		{
//      	test: /\.css$/,
//      	loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
//   	},
		//在webpack的module部分的loaders里进行配置即可
        { 
        	test: /\.js$/,
        	exclude: /node_modules|vendor/,
        	include:path.resolve(__dirname, './src/'),
        	loader: 'babel-loader',
        	query: {
        		plugins: ["transform-runtime"],
    		  	presets: ['es2015','stage-0']
			}
        },
        {
			test:/\.html$/,
			loader:'html-loader'
		},
		{
		  	test: /\.vue$/,
		  	loader: 'vue-loader'
		},
		{
        	test: /\.(png|gif|svg|jpe?g)$/,
        	loader: 'url-loader?limit=20000&name=./img/[name][hash].[ext]'
     	},
    	{
        	test: /\.(mpeg|mp4|webm|ogv?g)$/,
        	loader: 'file-loader?name=./img/[name][hash].[ext]'
     	}
		
	]
}

var plugins_config = [
	//warming: this is a Array multips pages web_application need to push htmlwebpackplugin_config_Array
	
	new HtmlWebpackPlugin({
        filename: __dirname+'/build/index.html', //生成的html存放路径，相对于path
        template: path.resolve(__dirname, './src/index.html'), //html模板路径
   	}),
   	new webpack.ProvidePlugin({
	    $: 'jquery',
	    jQuery: 'jquery',
	    'window.jQuery': 'jquery',
	    'window.$': 'jquery'
	}),
	new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
    	filename: "./common/common.js",
    	minChunks: Infinity	//仅仅创建公共组件块，不会把任何modules打包进去。并且提供function，以便于自定义逻辑。
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    /*new webpack.optimize.UglifyJsPlugin({
	  	compress:{
	    	warnings: false,
	    	drop_debugger: true,
	    	drop_console: true
	  	}
	}),	*/
    new webpack.LoaderOptionsPlugin({
     	options: {
//   		vue: {
//				  loaders: {
//				    css: ExtractTextPlugin.extract('vue-style-loader', 'css!less')
//				  }
//			},
		 	babel: {
		     	plugins: ["transform-runtime"],
		  		presets: ['es2015','stage-0']
		    }
	    }
     })
];

var resolve_config = {
	extensions: ['.js','.vue', '.css', '.less', '.ejs', '.png', '.jpg','.gif','.html'],	//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
	
	alias: {
        jquery: path.join(public_PATHS.vendor_Path, "/jquery-1.10.2.min.js"),
        basecss:path.join(public_PATHS.public_resource_Path, "styles/base.css"),
        common_tools:path.join(public_PATHS.vendor_Path, "/common_tools.js"),
        store:path.join(public_PATHS.public_resource_Path, "state/store.js"),
        pagination:path.join(public_PATHS.vendor_Path, "/jquery.pagination.min.js"),
 		fullPage:path.join(public_PATHS.vendor_Path, "/jquery.fullPage.min.js"),
 		jqueryui:path.join(public_PATHS.vendor_Path, "/jquery-ui-1.10.3.min.js"),
   	}	//模块别名定义，方便后续直接引用别名，无须多写长长的地址
   
};

var webpack_config = {
	entry:entry_config,
    output: output_config,
    module:module_config,
    plugins:plugins_config,
    resolve:resolve_config,
//  devtool:'source-map'
};


module.exports = webpack_config;

//common function//

/**
 * 获得路径
 * @param globPath: str
 * @param pathDir: str 对比路径
 * @returns obj 
*/
function getEntry(globPath, pathDir) {
	//get from github code 
    var files = glob.sync(globPath);
    var entries = {},
        entry,		//文件
        dirname,	//
        basename,	//文件名
        pathname,	//
        extname;	//文件扩展名

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);	//返回路径中代表文件夹的部分
        //console.log("dirname返回路径中代表文件夹的部分:==>"+dirname);
        extname = path.extname(entry);	//返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
        //console.log("extname返回路径中文件的后缀名:==>"+extname);
        basename = path.basename(entry, extname);	//返回路径中的最后一部分
        //console.log("basename返回路径中的最后一部分:==>"+basename);
        pathname = path.normalize(path.join(dirname,  basename));	//规范化路径
        //console.log("pathname规范化路径:==>"+pathname);
        pathDir = path.normalize(pathDir);	//规范化路径
        //console.log("pathDir规范化路径:==>"+pathDir);
        if(pathname.startsWith(pathDir)){
            pathname = pathname.substring(pathDir.length);
            //console.log("pathname判断后:==>"+pathname);   
        };
        entries[pathname] = './' + entry;
    }
    //console.log(entries);
    return entries;
}


/* build dev-server */

var npm_run_type = process.env.npm_lifecycle_event;	//get npm run type string
console.log("npm_run_type==>"+npm_run_type);

var debug,          // is debug
    devServer,      // is hrm mode
    minimize;       // is minimize



if (npm_run_type == "build") { // online mode （线上模式）
    debug = false, 
    devServer = false,
    minimize = true;
}else if (npm_run_type == "build-dev") { // dev mode （开发模式）
    debug = true,
    devServer = false,
    minimize = false;
} else if (npm_run_type == "dev-hrm") { // dev HRM mode （热更新模式）
    debug = true,
    devServer = true,
    minimize = false;
};
/*
 *  Hrm setting
 * （开启热更新，并自动打开浏览器）
 * */
if (devServer) {
	console.log("port:"+devServer);
    var webpackHot='webpack/hot/dev-server';
    config = Merge(
        config,
        {
            plugins: [
                // Enable multi-pass compilation for enhanced performance
                // in larger projects. Good default.
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                })
            ],
            devServer: {
                contentBase: __dirname+'//',
                // Enable history API fallback so HTML5 History API based
                // routing works. This is a good default that will come
                // in handy in more complicated setups.
                historyApiFallback: true,

                // Unlike the cli flag, this doesn't set
                // HotModuleReplacementPlugin!
                hot: true,
                inline: true,

                // Display only errors to reduce the amount of output.
                stats: 'errors-only',

                host:'localhost', 
                port: 3100 
                      
            }
        }
    );
}