<template>
	<div id="news">
		<h1>{{news}}</h1>
	</div>
</template>
<script>
	export default{
		name:'news',
		data(){
			return{
				news:'我是news新闻'
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