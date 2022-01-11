<template>
    <div class="g-layout">
        <!-- header -->
        <div class="g-header">
            <div class="g-wrap clearfix">
                <!-- logo -->
                <div class="g-logo">
                    <img src="@/assets/img/logo.png" alt="">
                    <span>Nuxt-Project</span>
                </div>
                <!-- 菜单 -->
                <el-menu class="g-menu" mode="horizontal" router :default-active="$route.path">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/about">关于我们</el-menu-item>
                </el-menu>
            </div>
        </div>
        <!-- 内容 -->
        <nuxt class="g-view" />
        <!-- 页脚 -->
        <div class="g-footer">
            <p>@ nuxt.js vue.js 项目</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>