<template>
	 <div id='safecommunity'>
	 	<component v-bind:is="component" :currCase='4' @closeModal='cancelordertag'></component> 
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class ='safecommunity_brief suateam_fl'>
    				<img v-bind:src='brief' class='brief_img'>
    				<div class ='brief_p suateam_fl'>
    					<p class='title'>资讯社区简介</p>
    					<p class='paragraph'>
    						由于国内信息安全行业的特殊性，很多技术资料、解决方案都无法很方便获取，而互联网上又充斥的大量的相关信息，这不仅给信息安全从业人员的日常工作和学习带来了很大的不便，还会造成很大的时间成本损失。我们将海量信息根据行业划分，通过专业人才的筛选、解析，仅提供与行业相关且最具价值的讯息，帮助用户迅速找到最感兴趣的、最有价值的内容。
    					</p>
    					<p class='paragraph'>
    						赛鳌每天将提供不分行业的全球最新信息安全动态，每周提供给付费订阅用户对应行业的周度重点资讯深度解析并不定期推送行业优秀信息安全专家录制的高清视频课程或国内外 著名安全峰会的现场演讲视频，满足多层次的信息安全培训需求及全球动态。
    					</p>
    					<p class='paragraph'>我们的目标是让不懂安全的人成为专业的安全人才，让专业的安全人才从业者成为CSO！</p>
    				</div>
    			</div>
    			<div class ='safecommunity_login suateam_fr'>
    				<div class='not_logged'  v-if="islogin!==true">
    					<p>想要了解更多资讯，您可以
    						<router-link to='/login'>登录</router-link>
    						/
    						<router-link to='/register'>注册</router-link>
    						成为我们的会员，还可订阅前沿专属资讯</p>
    				</div>
    				<div class='login' v-if="islogin==true">
    					<img v-bind:src='avataurl'>
    					<p class='nickname'>{{username}}</p>
    					<button class ='bluecolor' v-on:click='ordertag()'>我要订阅</button>
    				</div>
    			</div>
    			<div class ='safecommunity_tag suateam_fr'>
    				<label class='title'>
    					<img v-bind:src='hot'>
    					<span>热门标签</span>
    				</label>
    				<span class='safecommunity_tag_btn' v-on:click="changetagcontent(0,$event.target)">
    					全部
    				</span>
    				<span class='safecommunity_tag_btn' v-for ='items in tag_btnArray'  v-on:click="changetagcontent(items.id,$event.target)">
    					{{items.name}}
    					<i class='safecommunity_tag_btn_order' v-if='items.order==true'></i>
    				</span>
    			</div>
    		</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class ='safecommunity_list'>
    				<listframe :listcontentArray="listcontentArray"></listframe>
    			</div>
    				<div id="order_list" class='pagination'></div>
    		</div>
    	</section>
    	
    	
	 </div>
</template>
<script>
	import "babel-polyfill";
	require.ensure(['pagination'], function(){
    }, 'pagination'); // 第三个参数设置打包名称
	var common_tools=require("common_tools");
	import commonPopup from '../../components/global/commonPopup.vue';
	import listframe from '../../components/lists/list.vue';
	import store from "store";
	export default {
		components: {listframe,commonPopup},
		name: 'safecommunity',
		computed: {
    		islogin () {
		      return this.$store.state.islogin;
		    }
    	},
		beforeRouteEnter (to, from, next) {
			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbTag/listSuateamEbTag',{
       			},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					
   				}else if(data.rspCode=='100000'){
   					if(data.data.hasOrder==true&&data.data.isLogin==true){
   						next({
   							path:'/safecommunity_order'
   						});

   					}else {
   						next();
   					};
   				};
   			},function(data){
   				//error callback
   				console.log(data);
   				
       		});	
		},
		mounted:function(){
			require('pagination');
			var _self = this;
			//加载用户信息
			if(this.islogin==true){
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
				 "page": {
				        "currentPage": _self.currentpages,	//当前页数
				        "pageSize": _self.pageSize	//页面内容个数
				    }
       			},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					console.log(data);
   				}else if(data.rspCode=='100000'){
   					_self.listcontentArray=data.data.resultSet;
   					_self.totalPage=data.page.totalPage;
   					_self.upListContent();
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
				this.component=commonPopup;
			},
			cancelordertag:function(){
				this.component='';
			},
        	changetagcontent:function(_id,_thisdom){
        		var _self = this;
        		$(".safecommunity_tag_btn").removeClass("active");
	        	$(_thisdom).addClass("active");
	        	var sendTagId=null;
	        	if(_id==0){
	        		sendTagId='';
	        	}else{
	        		sendTagId=_id;
	        	}
	       		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbInfo/listSuateamEbEbInfo',{
				"page": {
				        "currentPage": _self.currentpages,	//当前页数
				        "pageSize": _self.pageSize	//页面内容个数
				    },
				    "condition": {
							"tagId": sendTagId,
					}
       			},function(data){
   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log(data);
	   				}else if(data.rspCode=='100000'){
	   					_self.listcontentArray=[];
	   					_self.listcontentArray=data.data.resultSet;
	   					_self.totalPage=data.page.totalPage;
	   					_self.upListContent();
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
        	}
        		
       	},
		data: function () {
            return {
            	banner:'url(' + require('./banner.jpg') + ')',
              	brief:require('./brief.png'),
              	hot:require('../../public_resource/img/ico/hot.png'),
              	listcontentArray:[],
              	tag_btnArray:[],
              	avataurl:'',
              	username:'',
              	component:'',
          		currentpages:1,
          		pageSize:5,
          		totalPage:''
              	
            }
       }
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
		margin-left:-180px ;
		width:560px;
		height: 250px;
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
	div.safecommunity_tag label span{
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
	div.safecommunity_tag,div.safecommunity_login{
		width: 30%;
		box-sizing: border-box;
		margin-top: 20px;
	}
	div.safecommunity_tag label{
		width: 100%;
		height: 40px;
		float: left;
		margin-bottom: 10px;
		box-sizing: border-box;
		padding: 0 5%;
	}
	div.safecommunity_list{
		width: 100%;
		display: block;
	}
</style>