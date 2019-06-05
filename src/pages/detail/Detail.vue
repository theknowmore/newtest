<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header ></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'


  export default {
      name: "Detail",
      components:{
        DetailHeader,
        DetailBanner,
        DetailList

      },
    /*递归数组数据*/
    data () {
        return {
          sightName:'',
          bannerImg:'',
          gallaryImgs:[],
          list: []
        }
    },
    methods:{
      getDetailInfo () {
        axios.get('/static/mock/detail.json',{
          params:{
            id:this.$route.params.id
          }
        }).then(this.handleGetDateSucc)
      },
      handleGetDateSucc (res) {
          res = res.data
        if(res.ret && res.data){
            const data = res.data
          console.log(data)
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }

    },
    mounted () {
      this.getDetailInfo()
    },
    activated (){

    }
  }
</script>

<style scoped>
  .content{
   height:50rem
  }
</style>
