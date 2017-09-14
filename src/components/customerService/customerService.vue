<template>
	<div class='suateam_customer_service_frame'>
		<p class='title_ch'>服务客户</p>
		<p class='title_en'>To serve our customers</p>
		<div class='customer_service_list'>
			<ul>
				<li v-for="items in datalist">
					<div style="display: table; margin: 0 auto;width:100%;">
						<img v-bind:src='items.img'>
						<span>{{items.name}}</span>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	var common_tools=require("common_tools");
	export default {
		name: 'customeservice',
		mounted:function(){
			var _self = this;
			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbPartner/listSuateamEbPartner',{
       			
       		},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					console.log(data);
   				}else if(data.rspCode=='100000'){
   					_self.datalist=data.data.resultSet;
   					console.log(data)

   				};
   			},function(data){
   				//error callback
   				console.log(data);
   				
       		});
		},
		data: function () {
            return {
            	datalist:[]
            }
       }
	}
</script>

<style>
	div.suateam_customer_service_frame{
	}
	div.suateam_customer_service_frame p.title_ch{
		text-align: center;
		font-size: 2.2rem;
		margin: 0;
		letter-spacing: 2px;
	}
	div.suateam_customer_service_frame p.title_en{
		text-align: center;
		font-size: 1.8rem;
		color: #999;
		margin: 0;
	}
	div.customer_service_list{
		width: 100%;
	}
	div.customer_service_list li{
		float: left;
		display: inline-block;
		width: 25%;
		box-sizing: border-box;
		min-height: 100px;
		margin: 8px 0;
	}
	
	div.customer_service_list li>div>span{
		display:inline-block;
		line-height: 100px;
		
	}
	
	div.customer_service_list li img{
		width: 100px;
		height: 100px;
		vertical-align: middle;
		margin-left:14%;
	}
</style>