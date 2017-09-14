<template>
	 <div id='safecommunity_login'>
	 	<component v-bind:is="component" :currCase='4' @closeModal='cancelordertag'></component> 
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			
    			<div class ='safecommunity_list' style="width: 70%;">
    				<listframe :listcontentArray="listcontentArray"></listframe>
    				<!--<div id="order_list" class='pagination'></div>-->
    			</div>
    			
    			<div class ='safecommunity_login suateam_fr'>
    				<div class='login'>
    					<img v-bind:src='avataurl'>
    					<p class='nickname'>{{username}}</p>
    					<button class ='bluecolor' v-on:click='ordertag()'>我要订阅</button>
    				</div>
    			</div>
    			<div class ='safecommunity_tag suateam_fr'>
    				<span class='safecommunity_tag_btn' v-for ='items in tag_btnArray' v-on:click="changetagcontent(items.id,$event.target)">
    					{{items.name}}
    					<i class='safecommunity_tag_btn_order' v-if='items.order==true'></i>
    				</span>
    			</div>
    			<div class ='safecommunity_freeinfo suateam_fr'>
    				<label class='title'>
    					<span>公开资讯</span>
    					<span style="float: right;"><img v-bind:src='reload' alt='换一批' v-on:click='randomfreeinfo($event.target)' class='reload'></span>
    				</label>
    				<ul>
    					<li v-for='items in freeinfoArray' v-on:click='tofreedetail(items.id)'>
    						<div>
    							<img v-bind:src='items.img'>
    							<span>{{items.title}}</span>
    						</div>
    					</li>
    				</ul>
    			</div>
    		</div>
    	</section>
    	
    	
	 </div>
</template>
<script>
	require.ensure(['pagination'], function(){
    }, 'pagination'); // 第三个参数设置打包名称
	var common_tools=require("common_tools");
	import listframe from '../../components/lists/list.vue';
	import commonPopup from '../../components/global/commonPopup.vue';
	import store from "store";
	export default {
		components: {listframe,commonPopup},
		name: 'safecommunity_login',
		data: function () {
            return {
            	banner:'url(' + require('./banner.jpg') + ')',
            	reload:require('../../public_resource/img/ico/reload.png'),
              	tag_btnArray:[],
              	listcontentArray:[],
              	avataurl:'',
              	username:'',
              	freeinfoArray:[],
              	component:'',
              	currert_tag_id:'',
              	totalPage:'',
              	currentpages:1,
          		pageSize:5,
            }
  		},
	    mounted:function(){
			var _self = this;
			if(1){
				//加载用户信息
				common_tools.AJAX('POST',common_tools.interfaceurl+'memberInfo/queryMemberInfoById',{
	       			},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log(data)
	   				}else if(data.rspCode=='100000'){
	   					_self.avataurl=data.data.resultSet.icon;
	   					_self.username=data.data.resultSet.nickname
	   					
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
			};
			//加载列表信息
			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbInfo/listSuateamEbEbInfo',{
       			},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					
   				}else if(data.rspCode=='100000'){
   					console.log(data)
   					_self.listcontentArray=data.data.resultSet;
   					_self.totalPage=data.page.totalPage;
   					//_self.upListContent();
   				};
   			},function(data){
   				//error callback
   				console.log(data);
       		});
       		//加载标签信息
       		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbTag/listSuateamEbTag',{
       			},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					
   				}else if(data.rspCode=='100000'){
   					console.log(data)
   					_self.tag_btnArray=data.data.resultSet;
   				};
   			},function(data){
   				//error callback
   				console.log(data);
       		});
       		//加载免费资讯
       		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbInfo/listSuateamEbEbInfoFree',{
       			"page": {
			        "currentPage": 1,	//当前页数
			        "pageSize": 4	//页面内容个数
			    }
	        		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					
	   				}else if(data.rspCode=='100000'){
	   					console.log(data)
	   					_self.freeinfoArray=data.data.resultSet;
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	   				
	       		});
	    	},
	    	methods:{
	    		upListContent:function(){
        		var _self = this;
      			$('.pagination').pagination({
      				pageCount:_self.totalPage,
       				callback:function(e){
       					_self.listcontentArray=[];
       					var currentpages=e.getCurrent();
       					_self.currentpages=currentpages;
       					common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbInfo/listSuateamEbEbInfo',{
						    "page": {
						        "currentPage": _self.currentpages,	//当前页数
				        		"pageSize": _self.pageSize	//页面内容个数
						    }
				       		},function(data){
				   				//success callback
				   				if(data.rspCode!=='100000'){
				   					
				   					
				   				}else if(data.rspCode=='100000'){
				   					if(data.data.resultSet.length==0){
				   						
				   					}else{
				   						_self.listcontentArray=data.data.resultSet;
				   						
				   					};
				   					
				   				
				   			}},function(data){
				   				//error callback
				   				console.log(data);		
			       		});
       				}
      			})	

        	},
				ordertag:function(){	
					this.component=commonPopup
				},
				cancelordertag:function(){
					this.component=''
				},
	        	changetagcontent:function(_id,_thisdom){
	        		var _self = this;
	        		this.currert_tag_id=_id;
	        		$(".safecommunity_tag_btn").removeClass("active");
	        		$(_thisdom).addClass("active");
	        		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbInfo/listSuateamEbEbInfoFree',{
	       			"condition": {
							"tagId": _id,
						},
					"page": {
				        "currentPage": 1,	//当前页数
				        "pageSize": 4	//页面内容个数
				    }
	        		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log(data);
	   				}else if(data.rspCode=='100000'){
	   					console.log(data)
	   					_self.freeinfoArray=data.data.resultSet;
	   				};
		   			},function(data){
		   				//error callback
		   				console.log(data);
		   				
		       		});
	        	},
	        	randomfreeinfo:function(_target){
	        		var thisdom = _target;
	        		var _self =this;
	        		$(thisdom).addClass('active');
	        		setTimeout(function(){
	        			$(thisdom).removeClass('active');
	        			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbInfo/listSuateamEbEbInfoFree',{
		       			"condition":{"tagId":_self.currert_tag_id},
						"page":{"currentPage":1,"pageSize":5}
			        		},function(data){
			   				//success callback
			   				if(data.rspCode!=='100000'){
			   					
			   				}else if(data.rspCode=='100000'){
			   					console.log(data)
			   					_self.freeinfoArray=data.data.resultSet;
			   				};
			   			},function(data){
			   				//error callback
			   				console.log(data);
			   				
			       		});
	        		},700)
	        	},
	        	tofreedetail:function(_id){
	        		this.$router.push({ name:'safecommunity_detail', params: {detail:_id }})
	        	}
        		
       		},
	}
</script>
<style>
	div.safecommunity_brief{
		margin-top: 10px;
		position: relative;
		width: 65%;
		height: 426px;
	}
	div.brief_p{
		position: relative;
		left: 50%;
		top:50%;
		margin-left:-180px ;
		width:560px;
		height: 250px;
		margin-top:-125px;
		line-height: 1.9;
	}
	img.brief_img{
		position: absolute;
		left: -150px;
	}
	div.brief_p p.title{
		text-align: center;
		font-size: 1.8rem;
	}
	div.brief_p p.paragraph{
		text-indent: 2em;
		text-align: justify;
	}
	div.safecommunity_login div.not_logged{
		background-color: #f2f2f2;
		min-height: 70px;
		width: 90%;
		margin: 0 5%;
		box-sizing: border-box;
		font-size: 1.4rem;
		padding: 1px 5%;
		text-align: center;
		line-height: 1.7;
	}
	div.safecommunity_login div.login img{
		border-radius: 50%;
		border:1px #ededed solid;
		width: 70px;
		height: 70px;
		display: table;
		margin: 0 auto;
		background-color:#ededed ;
	}
	div.safecommunity_login div.login p.nickname{
		font-size: 1.4rem;
		text-align: center;
	}
	div.safecommunity_login div.login button{
		margin: 0 auto;
		display: table;
	}
	div.safecommunity_tag label span,div.safecommunity_freeinfo label span{
		float: left;
		line-height: 40px;
		margin-right: 10px;
		font-size: 1.4rem;
		font-weight: 600;
	}
	span.safecommunity_tag_btn{
		border: 1px #ededed solid;
		padding: 10px 0px;
		font-size: 1.2rem;
		float: left;
		width: 23%;
		box-sizing: border-box;
		cursor: pointer;
		margin:5px 5%;
		text-align: center;
		position: relative;
	}
	span.safecommunity_tag_btn i.safecommunity_tag_btn_order{
		position: absolute;
		width: 16px;
		height: 16px;
		display: block;
		background-image: url(../../public_resource/img/ico/order.png) ;
		top: -5px;
    	left: -8px;
	}
	span.safecommunity_tag_btn:hover,span.safecommunity_tag_btn.active{
		border: 1px solid #99D3F5;
		color: #1E88C7;
		background-color: #D0EEFF;
	}
	div.safecommunity_tag,div.safecommunity_login,div.safecommunity_freeinfo{
		width: 30%;
		box-sizing: border-box;
		margin-top: 20px;
	}
	div.safecommunity_tag label, div.safecommunity_freeinfo label{
		width: 100%;
		height: 40px;
		float: left;
		margin-bottom: 10px;
		box-sizing: border-box;
		padding: 0 5%;
	}
	div.safecommunity_freeinfo li{
		border: 1px #ededed solid;
		padding: 10px 0px;
		font-size: 1.2rem;
		float: left;
		width: 90%;
		box-sizing: border-box;
		cursor: pointer;
		margin:5px 5%;
	}
	div.safecommunity_freeinfo li div{
		height: 40px;
		float: left;
		width: 100%;
		line-height: 40px;
	}
	div.safecommunity_freeinfo li span{
	    line-height: 40px;
	    float: left;
	    word-wrap: break-word;
	    text-overflow: ellipsis;
	    height: 40px;
	    overflow: hidden;
	    width: 80%;
	}
	div.safecommunity_freeinfo li img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #ccc;
		margin: 0 10px;
		float: left;
	}
	div.safecommunity_list{
		width: 100%;
		display: block;
	}
	img.reload{
		transition:all ease-in-out .7s 0s;
		cursor: pointer;
	}
	img.reload.active{
		transform:rotate(360deg);
	}
</style>