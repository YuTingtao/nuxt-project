export default {
    srcDir: 'src/',
    server: {
        host: 'localhost',
        port: 8080
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
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

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/scss/base/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/element-ui', ssr: true },
        { src: '@/plugins/vuex-cache', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    styleResources: {
        scss: ['./assets/scss/base/variable.scss'], // 引入scss基础变量
    },
    axios: {
        proxy: true
    },
    proxy: {
        '/api': {
            target: 'http://example.com',
            pathRewrite: {
                '^/api' : '/'
            }
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [ /^element-ui/, 'echarts' ],
        vendor: ['element-ui', 'axios'],
        analyze: true
    },
    vue: {
        config: {
            devtools: process.env.NODE_ENV !== 'production'? true : false,
        }
    }
}
