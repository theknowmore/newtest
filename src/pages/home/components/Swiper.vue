<template>
  <div class="wrapper">
    <!--这么直接写v-if="list.length" 或者计算下computed v-if="showSwiper" 解决幻灯片不是第一张的图片-->
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img  class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
    export default {
      name: "HomeSwiper",
      props:{
        list:Array
      },
      data:function(){
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
          },
          /*swiperList:[{
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/2f/49f6152a86eb4502.jpg_750x200_f4841fa3.jpg'
          },{
            id:'0002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/f7/72ce947f4dff4c02.jpg_750x200_aa583dba.jpg'
      }]*/
        }
      },
      computed:{
        showSwiper () {
          return this.list.length
        }
      }
    }
</script>

<style  lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: red
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 27.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
