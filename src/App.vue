<template>
  <div>
    <Header />

    <router-view></router-view>


  </div>
</template>

<script>
import Header from "./components/Header";
import items from "./components/ListItem/items"


export default {
  components: {
    Header,
    items



  },
  //created() {
  //this.$store.dispatch("initApp")
  //}

  created() {
    this.$store.dispatch("initLogin")
  }
}

</script>

<style>


#app{
  font-size: 24px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
