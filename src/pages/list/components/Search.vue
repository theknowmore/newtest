<template>
  <div>
    <div class="search">
      <input   class="search-input" type="text" value="输入城市名或拼音" />
    </div>
    <!--search-content-->
    <div class="">
      <ul>
        <li></li>
        <li class="search-item border-bottom" ></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ListSearch",
      props:{
        //cities:Object
      },
      data () {
          return {
            keyword:'',
            list:[],
            timer:null
          }
      },
      watch:{
        keyword () {}
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
