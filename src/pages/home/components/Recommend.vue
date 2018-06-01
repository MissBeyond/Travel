<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img  class="item-img" :src="item.imgUrl" />
                <div class="item-info"> 
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
            title: '深圳野生动物园',
            desc: '放养式动物园让你和动物们“零距离',
        },{
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/17/176c2114bb8ae255a3.water.png_200x200_a1b6cfdf.png',
            title: '欢乐海岸',
            desc: '一起享受夏天的清爽',

        },{
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg',
            title: '世界之窗',
            desc: '全球微缩景点，精彩演绎、娱乐项目应有尽有',

        }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .recommend-title
        line-height .8rem
        background-color #eeeeee
        margin-top .2rem
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis() 
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis() 
            .item-button
                line-height .44rem
                margin-top .16rem
                background-color #ff9300
                padding .1rem
                border-radius .06rem
                color #fff
            



</style>

