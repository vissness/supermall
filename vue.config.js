module.exports = {
    configureWebpack: {
        resolve: {  //resolve解决路径相关问题
            alias: {
                'assets': '@/assets',
                'common': '@/comoon','network': '@/network','components': '@/components','views': '@/views',
            }
        }
    }
}