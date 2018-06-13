<template>
    <div class="header">
        <router-link to="/">
            <i class="icon iconfont icon-fanhui"></i>
        </router-link>
        
        城市选择
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background-color $bgColor
        font-size .32rem
        .icon-fanhui
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>


