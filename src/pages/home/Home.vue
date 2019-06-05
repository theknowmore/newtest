<template>
  <div>
    <home-header></home-header>
    <!--<home-header :city="city"></home-header>-->
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :icon="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>

    <!--单页面跳转
    <router-link to="/list" class="home">列表页</router-link>-->
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/recommend'
  /*npm install axios --save 安装axios才能用这个发送请求*/
  import axios from 'axios'
 import { mapState } from 'vuex'
  export default {
    name: "Home",
    components: {
      HomeHeader: HomeHeader,
      HomeSwiper: HomeSwiper,
      HomeIcons,
      HomeRecommend
    },
    data () {
      return{
       // city:'',
        swiperList:[],
        iconList:[],
        lastCity:'',
        recommendList: []
      }
    },
    computed:{
      ...mapState(['city'])
    },
    methods:{
        getHomeInfo () {
          /*上线前改成的路径/api/index.json 自动转换 修改config/index.js中proxyTable*/
          axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoSucc)
        },
      // console.log(res) res是后台传过来的值
        getHomeInfoSucc (res) {
          console.log(res)
          res = res.data
          if(res.ret && res.data){
            const data = res.data
           // this.city = data.city
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
          }
        }
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    /*当使用keep-alive的时候会多出activated  页面重新显示时会被执行*/
    activated () {
      if(this.lastCity != this.city){
        this.lastCity = this.city
        this.getHomeInfo();
      }
      //console.log('activated')
    }




  }
</script>

<style scoped>

</style>
