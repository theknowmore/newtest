<template>
  <div>
    <List-Header></List-Header>
    <List-Search ></List-Search>
    <List-List :cities="zxtcities" :hot="zxthotCities" :letter="letter"></List-List>
    <List-alphabet :cities="zxtcities" @change="handleLetterChange"></List-alphabet>
  </div>
</template>

<script>
  import ListHeader from './components/Header'
  import ListSearch from './components/Search'
  import ListList from './components/List'
  import ListAlphabet from './components/Alphabet'
  import axios from 'axios'

  export default {
      name: "List",
      components:{
        ListHeader,
        ListSearch,
        ListList,
        ListAlphabet
      },
    data () {
      return {
        /*cities hotCities随便起的*/
        zxtcities:{},
        zxthotCities:[],
        letter:''
      }
    },
    methods:{
      getCityInfo () {
        axios.get('/static/mock/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        console.log(res)
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          this.zxtcities = data.cities
          this.zxthotCities = data.hotCities
        }
      },
      handleLetterChange (letter) {
       //alert('change='+ letter)
        this.letter = letter
      }
    },
    mounted () {
        this.getCityInfo();
    }

  }
</script>

<style scoped>

</style>
