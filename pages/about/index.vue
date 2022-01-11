<template>
    <div class="about-page">
        <div class="g-wrap">
            关于我们
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            let params = {
                key: '',
                httpsStatus: 1,
                reqId: 'c3ff3010-7156-11ec-a206-4d7a63ba15ce'
            }
            let res = await this.$axios.get('/kwapi/search/searchKey', { params });
            if (process.client) {
                console.log(res);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>