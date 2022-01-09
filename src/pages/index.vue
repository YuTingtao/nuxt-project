<template>
    <div class="home-page">
        <el-carousel class="banner g-wrap" trigger="click" height="400px">
            <el-carousel-item v-for="item in 3" :key="item">
                <p>{{ item }}</p>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index/index.scss';
</style>
