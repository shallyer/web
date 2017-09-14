<template>
	<div class ='suateam_alert'>
		<label class='suateam_alert_title'>
			<span>{{alert_options[0]}}</span>
		</label>
		<div class='suateam_alert_content'>
			<p>{{alert_options[1]}}</p>
		</div>
		<div class ='suateam_alert_btn'>
			<button class="bluecolor" v-on:click='confirm()'>确定</button>
		</div>
	</div>
    
</template>
<script>
	//import store from "store";
    module.exports = {
    	//components configs
    	name:'suateam_alert',
    	props:['alert_options'],
        data: function () {
            return {
            	
            }
        },
        methods: {
		   	confirm:function() {
		        this.$emit('alert_emit','true'); 
		    }
	    }
    }
</script>
<style>
div.suateam_alert{
	width: 300px;
	height: 200px;
	position: fixed;
	left: 50%;
	top:50%;
	margin-left: -150px;
	margin-top: -150px;
	box-shadow: 1px 1px 5px #999;
	background-color: #fff;
	z-index: 9999;
}
label.suateam_alert_title{
	background-color: #f5f5f5;
	width: 100%;
	float: left;
	box-sizing: border-box;
	padding: 0 20px;
	height: 40px;
	line-height: 40px;
	color: #666;
	overflow: hidden;
	-webkit-user-select: none;
}
div.suateam_alert_content{
	box-sizing: border-box;
	padding:10px 20px;
	font-size: 1.4rem;
	float: left;
	width: 100%;
	height: 120px;
	overflow: hidden;
	
}
div.suateam_alert_btn{
	position: absolute;
	bottom: 0;
	height: 40px;
	width: 100%;
	box-sizing: border-box;
	padding: 0 20px;
}
div.suateam_alert_btn button{
	margin: 0 auto;
	display: table;
}
</style>