export default {
    server: {
        host: 'localhost',
        port: 8080
    },
    target: 'server', // 默认:server, 使用nuxt generate打包时设置为:static

    // 页面header设置: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-project',
        htmlAttrs: {
            lang: 'zh-CN'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    
    // 全局样式: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/scss/base/main.scss',
    ],

    // 加载进度条
    loading: {
        color: '#409EFF',
        failedColor: '#F56C6C'
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/vuex-cache', ssr: false },
        '@/plugins/element-ui',
        '@/plugins/axios',
        '@/plugins/svg-icon',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        ['nuxt-svg-sprite-loader', {
            symbolId: 'icon-[name]'
        }]
    ],
    styleResources: {
        scss: ['./assets/scss/base/variable.scss'], // 引入scss基础变量
    },
    axios: {
        proxy: true
    },
    proxy: {
        '/kwapi': 'http://www.kuwo.cn/api/www'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [ /^element-ui/, 'echarts' ],
        vendor: ['element-ui', 'echarts'],
        analyze: true
    },
    vue: {
        config: {
            devtools: process.env.NODE_ENV !== 'production'? true : false,
        }
    }
}
