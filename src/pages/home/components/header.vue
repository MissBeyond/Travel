<template>
    <div class="header">
      <div class="header-left">
          <i class="icon iconfont icon-fanhui"></i>
      </div>
    <div class="header-input">
          <i class="icon iconfont icon-sousuo"></i>
          输入城市/景点/美食
    </div>
      <div class="header-right">
         {{this.city}}
          <i class="icon iconfont icon-jiantou"></i> 
    </div>
    </div>
    
</template>
<script>
export default {
    name:'HomeHeader', 
    props: {
        city: String
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .header
        display flex
        line-height .86rem
        background $bgColor
        color #fff
        .header-left
            width .64rem
            float left
            text-align center
            .icon-fanhui
                text-align center
                font-size .4rem
        .header-input
            flex 1
            height .64rem
            line-height .64rem
            margin-top .12rem
            margin-left .2rem
            background #ffffff
            border-radius .1rem
            color #cccccc
            .icon-sousuo
                margin-left .08rem
        .header-right
            width 1.24rem
            float right 
            text-align center
            .icon-jiantou
                font-size .24rem
                margin-left -.04rem

   
</style>