<template>
	<div class ='suateam_dialog'>
		<label class='suateam_dialog_title'>
			<span>{{dialog_options[0]}}</span>
		</label>
		<div class='suateam_dialog_content'>
			<p>{{dialog_options[1]}}</p>
		</div>
		<div class ='suateam_dialog_btn' v-if='dialog_options[2]==undefined'>
			<button class="bluecolor" v-on:click='confirm()'>确定</button>
			<button class="greycolor" v-on:click='cancel()'>取消</button>
		</div>
		<div class ='suateam_dialog_btn' v-if='dialog_options[2]!==undefined'>
			<button class="bluecolor" v-on:click='confirm()'>{{dialog_options[2].confirm}}</button>
			<button class="greycolor" v-on:click='cancel()'>{{dialog_options[2].cancel}}</button>
		</div>
		
	</div>
    
</template>
<script>
	//import store from "store";
    module.exports = {
    	//components configs
    	name:'suateam_dialog',
    	props:['dialog_options'],
        data: function () {
            return {
            	
            }    
        },
        methods: {
		   	confirm:function() {
		        this.$emit('dialog_emit',true); 
		    },
		    cancel:function() {
		    	this.$emit('dialog_emit',false); 
			}
	    }
    }
</script>
<style>
div.suateam_dialog{
	width: 300px;
	height: 250px;
	position: fixed;
	left: 50%;
	top:50%;
	margin-left: -150px;
	margin-top: -175px;
	box-shadow: 1px 1px 5px #999;
	background-color: #fff;
	z-index:999999
}
label.suateam_dialog_title{
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
div.suateam_dialog_content{
	box-sizing: border-box;
	padding:10px 20px;
	font-size: 1.4rem;
	float: left;
	width: 100%;
	height: 170px;
	overflow: hidden;
	
}
div.suateam_dialog_btn{
	position: absolute;
	bottom: 0;
	height: 40px;
	width: 100%;
	box-sizing: border-box;
	padding: 0 20px;
}
</style>