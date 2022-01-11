<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`" />
    </svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        // svg文件名称
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
}
</style>