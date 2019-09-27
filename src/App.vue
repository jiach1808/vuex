<template>
  <div id="app">
   <Parent />
   <Outter />
  </div>
</template>

<script>
import Parent from "./components/child/parent"
import Outter from "./outter"
export default {
  name: 'App',
  components:{
    Parent,
    Outter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
