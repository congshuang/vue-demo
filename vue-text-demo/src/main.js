import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import '../bower_components/animate.css/animate.css'
import RouterConfig from './routerconfig.js'
import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.use(VueRouter);

const router=new VueRouter(RouterConfig);

window.onload=function(){
	new Vue({
	  router,
	  el: '#app',
	  render: h => h(App)
	})
}

