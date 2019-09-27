import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
//创建一个store仓库
const store = new Vuex.Store({
     state:{
     	count:10
     },
     mutations:{
     	increment(state){
     		state.count++;
     	},
     	decrement(state){
     		state.count--;
     	}
     },
     actions:{
     	//context承上启下作用
     increment(context){
     	setTimeout(function(){//用延时来证明action是异步操作
     		context.commit('increment')
     	},1000)
     },
     decrement(context){
     	setTimeout(function(){
            context.commit('decrement')
     	},1000)
     }
     },
    getters:{
    	getState(state){
    		return   state.count>0?state.count:0
    	}
    }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

})
