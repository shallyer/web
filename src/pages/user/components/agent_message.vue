<template>
	<div id='agent_message'>
		 <div class ='agent_message_frame'>
		 	<ul>
		 		<li v-for='items in agent_messageArray' class='agent_message_li'>
		 			<span>{{items.description}}</span>
		 			<a v-bind:href='items.wordDocument'>文件下载</a>
		 		</li>
		 		<p v-if='agent_messageArray.length==0' style="text-align: center; font-size: 1.4rem;">暂无专属方案</p>
		 	</ul>
		 </div>
		
		
		
	</div>

</template>

<script>
	require.ensure(['pagination'], function(){
    }, 'pagination'); // 第三个参数设置打包名称
	var common_tools=require("common_tools");
	module.exports = {
    	//components configs
    	name:'agent_message',
        data: function () {
            return {
              	agent_messageArray:[],
              	pages:{},
            }
        },
        mounted:function(){
    		var _self = this;
    		common_tools.AJAX('POST',common_tools.interfaceurl+'ebSolutionInfo/queryRecommended',{
       			"condition": {
				}
       		},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					
   				}else if(data.rspCode=='100000'){
   					_self.agent_messageArray=data.data.resultSet;
   				};
   			},function(data){
   				//error callback
   				console.log(data);
   				
       		});
    	},
    	methods:{
//			pagination:function(_current){
//      		var _self = this;
//    			$('.pagination').pagination({
//    				totalData:_self.pages.totalRecord,
//     				showData:_self.pages.pageSize,
//     				callback:function(e){
//     					_self.orderArray=[];
//     					var currentpages=e.getCurrent();
//     					common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderByMemberId',{
//						    "page": {
//						        "currentPage": currentpages,	//当前页数
//						        "pageSize": 5	//页面内容个数
//						    }
//				       		},function(data){
		}
        
    }
</script>

<style>
	div#agent_message_frame{
		width: 90%;
	}
	li.agent_message_li{
		border:1px #ededed solid;
		padding: 0 10px;
		margin: 10px 0;
		font-size: 1.4rem;
		height: 45px;
		line-height: 45px;
	}
	li.agent_message_li span{
		float: left;
		width: 60%;
		overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
	}
	li.agent_message_li a{
		float: right;
	}
	div#agent_message{
		width: 90%;
		margin: 0 5%;
	}
</style>