const webpack = require('webpack');
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    //  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/'
    publicPath: process.env.NODE_ENV ===  'production' ? './' : './' ,
    // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "static",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    // productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    // filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    // lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    // devServer: {
        //出现Invalsid Host header解决办法
        // disableHostCheck: true,

        /* 自动打开浏览器 */
        // open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        // host: '0.0.0.0',
        // port: 8066,
        // https: false,
        // hotOnly: false,
        /* 使用代理 */
        // proxy: {
        //     '/api': {
        //         /* 目标代理服务器地址 */
        //         target: 'http://47.92.39.125/',
        //         /* 允许跨域 */
        //         changeOrigin: true,
        //     },
        // },
    // },

    // axios解决跨域的配置
    configureWebpack: {
        devServer: {
            port:8080,
            proxy: {
                '/api': {
                    // 此处的写法，目的是为了 把上面  /api 替换成 http://127.0.0.1:3000/
                    // 如果使用的是自己封装的请求函数 那么你应该这样写 baseURL: '',
                    // 注意这里的 api 是必须的，因为是有代理的缘故
                    target: 'http://',
                    // 允许跨域
                    changeOrigin: true,
                    ws: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        }
    }
}
