<template>
  <div id="app">
     <h1>我是小刚{{msg}}</h1>
     <ul>
       <li>
           <router-link to="/home"> 这是主页 </router-link> 
           <router-link to="/news"> 这是新闻</router-link> 
           <aaa></aaa>
       </li>
     </ul>
     <div>
       <transition 
       enter-active-class="animated zoomInLeft" 
       leave-active-class="animated zoomOutRight"
       @before-enter="beforeEnter"
       @enter="enter"
       @after-enter="afterEnter"
       @before-leave="beforeLeave"
       @leave="leave"
       @after-leave="afterLeave">
          <router-view></router-view>
       </transition>
     </div>
  </div>
</template>
<script>
import Date from './components/Date.vue'
import Text from './components/Text.vue'
const text={
 template:'<h1>11</h1>'
};

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Date,
    'aaa':text
  },
    methods:{
                        beforeEnter(el){
                            console.log('动画enter之前');
                        },
                        enter(el){
                            console.log('动画enter进入');
                        },
                        afterEnter(el){
                            console.log('动画进入之后');
                            el.style.background='blue';
                        },
                        beforeLeave(el){
                            console.log('动画leave之前');
                        },
                        leave(el){
                            console.log('动画leave');
                        },
                        afterLeave(el){
                            console.log('动画leave之后');
                            el.style.background='red';
                        }
                    }
  }
</script>

<style>
#app{
  background: #BDF6EF;
}
body{
  background: #BDF6EF;
}

</style>
</style>
