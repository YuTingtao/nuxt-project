<template>
    <div class="page-error">
        <h2 v-if="error.statusCode === 404">404 页面不存在</h2>
        <h2 v-else>500 应用发生错误异常</h2>
        <nuxt-link to="/">返回首页</nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'empty'
    }
</script>

<style lang="scss" scoped>
.page-error {
    height: 100%;
    overflow: auto;
    background: #f2f3f6;
    text-align: center;
    h2{
        margin-top: 200px;
        margin-bottom: 5px;
        color: $primary;
    }
    .nuxt-link-active{
        font-size: 16px;
        color: $primary;
    }
}
</style>
