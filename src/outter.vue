<template>
  <div>
     <p>{{msg}}</p>{{getCount}}<button @click="add">+</button>
  </div>
</template>

<script>

export default {
  name: 'Outter',
  data () {
    return {
      msg: '外部组件 ',
     
    }
  },
 computed:{
    getCount(){
      // return this.$store.state.count
      return this.$store.getters.getState;
    }
 }, 
  methods:{
   add(){
     // this.$store.commit("increment");
      this.$store.dispatch("increment");
   }
  }
}
</script>


<style scoped>

</style>
