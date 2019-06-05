<template>
  <!--vue devtools 谷歌浏览器扩展 调试vue页面-->
  <div class="icons">
    <swiper >
      <swiper-slide>
      <div class="icon" v-for="item of icon" :key="item.id">
        <div class='icon-img'>
          <img class='icon-img-content' :src="item.imgUrl"/>
        </div>
        <router-link to="/Tab">
        <p class="icon-desc">{{item.desc}}</p>
        </router-link>
      </div>

      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props:{
         icon:Array
        }
        /*data () {
          return {
            iconList:[{
              id:'0001',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
              desc:'热门景点'
            },{
              id:'0002',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            },{
              id:'0003',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            },{
              id:'0004',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            },{
              id:'0005',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            },{
              id:'0006',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            },{
              id:'0007',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            },{
              id:'0008',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            },{
              id:'0009',
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
              desc:'北京必游'
            }]
          }
        }*/,
      computed: {
        pages () {
          const pages = []
          this.icon.forEach((item, index) => {
            const page = Math.floor(index / 8)
            if (!pages[page]) {
              pages[page] = []
            }
            pages[page].push(item)
          })
          return pages
        }
      }


    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
