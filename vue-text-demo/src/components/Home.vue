<template>
	<div id="home" >
		<h1>{{home}}</h1>
		<input type="text" @keyup.17="change">
	</div>
</template>
<script >
import Vue from 'vue'
   //  Vue.config.keyCodes.ctrl=17;
	export default{
		name:'home',
		data(){
			return{
				home:'我是home主页'
			}
		},
		methods:{
           change(){
           	   alert("1");
           }
		}
	}
</script>
<style>
	div{
		width: 200px;
		height: 100px;
		border-radius: 10px;
		background: #E8F2D7;
		text-align: center;
	}
	h1{
		font-weight: 100;
		font-family: "Times New Roman",Georgia,Serif;
		font-size: 10px;z-index: 
	}
</style>