<template>
  <div id="app">
    <!--keep-alive:指我的路由被加载过一次 我就放在内存中下一次再进路由不需要再次渲染
    exclude="Detail":详情页面不做缓存 其他页面做缓存
    -->
    <keep-alive exclude="Detail">
    <!--<router-view/>指显示的是当前的路由地址所对应的内容-->
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
