<template>
  <div>
     儿子{{getCount}}
     <p>from:父组件=>{{title}}</p>
     <div>
       <button @click="sendMsg">回传给父组件数据</button>
       <button @click="min">-</button>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Sun',
  data () {
    return {
      msg: "",
      info:"子组件传过来的信息"
    }
  },
  props:{
   title:{
      type:String,
      default:''
   }
  },
  methods:{
   sendMsg(){
      this.$emit("info",this.info)
   },
   min(){
    //this.$store.commit('decrement');
    this.$store.dispatch('decrement');
   }
  },
  computed:{
     getCount(){
     // return this.$store.state.count;
        return this.$store.getters.getState;
     }
  }
}
</script>


<style scoped>

</style>
