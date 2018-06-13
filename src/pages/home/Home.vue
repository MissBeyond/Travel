<template>
    <div>
      <home-headeraaa></home-headeraaa>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconListAAA"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :listaaa="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeaderaaa from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
    name:'Home',
    components:{
        HomeHeaderaaa,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    },
    data () {
        return {
            swiperList: [],
            iconListAAA: [],
            recommendList: [],
            weekendList: [],
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
                // .then((response) => {this.getHomeInfoSucc(response)})
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.success && res.data) {
                const data = res.data
                this.swiperList = data.swiperList
                this.iconListAAA = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    },
}
</script>
<style>
   
</style>

