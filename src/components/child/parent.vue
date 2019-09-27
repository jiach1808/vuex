<template>
  <div>
     父亲     <span>&nbsp</span>{{info}}
     <Child  :title="msg" @info="handlerMsg"/>
  </div>
</template>

<script>
import Child from './child' 
export default {
  name: 'Parent',
  data () {
    return {
      msg: '儿子儿子，我是你爸！ ',
      info:''
    }
  },

  components:{ Child },
  methods:{
    handlerMsg(data){
        this.info = data;
    }
  }
}
</script>


<style scoped>

</style>
