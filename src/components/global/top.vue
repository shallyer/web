<template>
	<header id='header'>
		<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<component v-bind:is="component_d" v-on:dialog_emit="dialog_emit" :dialog_options='dialog_option'></component> 
		<div class='suateam suateam_headerframe'>
			<div class='suateam_logo_frame'>
				<router-link to='/index'><img class ='suateam_logo_img' v-bind:src='logo'></router-link>
			</div>
			<div class='suateam_main_nav_frame'>
		        <ul class='main_nav_ul'>
		        	<li class='main_nav_li' v-for='items in main_navArray'><router-link v-bind:to='items.link'>{{items.name}}</router-link></li>
		        </ul>
	   		</div>
	   		<div class='suateam_moudle_frame'>
	   			<div class='suateam_moudle'>
	   				<!--<i class='suateam_moudle_icon search' v-on:click='search()'></i>-->
	   			</div>
	   			<div class='suateam_moudle'>
	   				<i class='suateam_moudle_icon user' v-on:click='user_menu_switch($event)'></i>
	   				<div class='suateam_menu' name='user_menu_frame' style="z-index: 999">
		   				<ul>
		   					<li class='suateam_menu_li' v-for='items in user_menu_loginout' v-if='islogin==false'>
		   						<router-link v-bind:to='items.link'><span v-on:click='user_menu_switch($event)'>{{items.name}}</span></router-link>
		   					</li>
		   					<li class='suateam_menu_li' v-for='items in user_menu_login' v-if='islogin==true'>
		   						<router-link v-bind:to='items.link'><span v-on:click='user_menu_switch($event,items.ftn)'>{{items.name}}</span></router-link>
		   					</li>
		   				</ul>
		   			</div>
	   			</div>
	   			<div class='suateam_moudle'>
	   				<i class='suateam_moudle_icon help' v-on:click='help_menu_switch($event)'></i>
		   			<div class='suateam_menu' name='help_menu_frame'>
		   				<ul>
		   					<li class='suateam_menu_li' v-for='items in help_menu'>
		   						<router-link v-bind:to='items.link'><span v-on:click='help_menu_switch($event)'>{{items.name}}</span></router-link>
		   					</li>
		   				</ul>
		   			</div>
	   			</div>
	   			
	   		</div>
		</div>
		
	</header>
    
</template>
<script>
	//import store from "store";
	var common_tools=require("common_tools");
	import Alert from '../../components/global/alert';
	import Dialog from '../../components/global/dialog';
    export default  {
    	components: {Alert,Dialog},
    	name:'header',
    	computed: {
    		islogin () {
		      return this.$store.state.islogin;
		    }
		},
		mounted:function(){
			var _self=this;
			$(function(){
				$("body").click(function(){
					$("div.suateam_menu[name='user_menu_frame']").fadeOut();
					$("div.suateam_menu[name='help_menu_frame']").fadeOut();
    				_self.user_menu_switch_state=false;
    				_self.help_menu_switch_state=false;
				})
			})
		},
        data: function () {
            return {
                main_navArray: [
                	{link:'/scheme',name:'安全方案'},
                	{link:'/sin-goods',name:'单品汇'},
                	{link:'/goods-lease',name:'产品租赁'},
                	{link:'/services',name:'全息服务'},
                	{link:'/safecommunity',name:'安全社区'},
                	{link:'/marketingpartner',name:'市场合作'},
                	{link:'/aboutus',name:'关于我们'}            	
                ],
                logo:require('../../public_resource/img/ico/logo.png'),
                user_menu_loginout:[
		                {link:'/login',name:'登录'},
		                {link:'/register',name:'注册'},
		     
	            ],
	            user_menu_login:[
		                {link:'/usercenter/change_password',name:'个人中心'},
		                {link:'/orderlist',name:'订单管理'},
		                {link:'#',name:'退出',ftn:1}
	            ],
	            help_menu:[
		                {link:'/helpcenter/online',name:'在线客服'},
		                {link:'/helpcenter/advice',name:'意见反馈'},
		                {link:'/helpcenter/center',name:'帮助中心'}
	            ],
	            user_menu_switch_state:false,
	            help_menu_switch_state:false,
	            component:'',
	            component_d:'',
            	alert_options:['',''],	//['标题'，'内容']
            }
        },
        methods:{
        	Alert:function(_title,_content){
        		common_tools.Shade_on('header');
        		this.alert_options=[_title,_content];
        		this.component=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component='';
        		window.location.reload(); 
        	},
        	Dialog:function(_title,_content){
        		common_tools.Shade_on('header');
        		this.dialog_option=[_title,_content];
        		this.component_d=Dialog
        	},
        	dialog_emit:function(_val){
        		var _self = this;
        		if(_val==true){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'login/memberLogout',{
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					console.log(data)
		   				}else if(data.rspCode=='100000'){
		   					sessionStorage.clear();
        					_self.$store.commit('userisloginout');
		   					_self.Alert('登出成功','登出成功');
		   				};
		   			},function(data){
		   				//error callback
		   				_self.Alert('登出成功',data.rspMsg);
		   				console.log(data);
		       		});
        		};
        		this.component_d='';
        		common_tools.Shade_off();
        		
        	},
        	search:function(){
        		this.Alert('搜索模块','相关功能，尽请期待');
        	},
        	user_menu_switch:function(_target,_val){
        		_target.stopPropagation();
        		if(_val==1){
        			//退出登录
        			this.Dialog("登出提示","您确定要退出登录吗");
        		};
        		if(this.help_menu_switch_state==true){
        			$("div.suateam_menu[name='help_menu_frame']").fadeOut();
        			this.help_menu_switch_state=false;
        		};
        		if(this.user_menu_switch_state==false){
        			$("div.suateam_menu[name='user_menu_frame']").fadeIn();
        			this.user_menu_switch_state=true;
        		}else if(this.user_menu_switch_state==true){
        			$("div.suateam_menu[name='user_menu_frame']").fadeOut();
        			this.user_menu_switch_state=false;
        		};
        	},
        	help_menu_switch:function(_target){
        		_target.stopPropagation();
        		if(this.user_menu_switch_state==true){
        			$("div.suateam_menu[name='user_menu_frame']").fadeOut();
        			this.user_menu_switch_state=false;
        		};
        		if(this.help_menu_switch_state==false){
        			$("div.suateam_menu[name='help_menu_frame']").fadeIn();
        			this.help_menu_switch_state=true;
        		}else if(this.help_menu_switch_state==true){
        			$("div.suateam_menu[name='help_menu_frame']").fadeOut();
        			this.help_menu_switch_state=false;
        		}
        	}
        }
    }
</script>
<style>
div.suateam_headerframe{
	box-sizing: border-box;
	margin: 0 auto;
	display: block;
	width: 100%;
	height: 100px;
}
div.suateam_logo_frame{
	width: 120px;
	height: 50px;
	margin: 1px auto;
	display: block;
	float: left;
	box-sizing: border-box;
}
img.suateam_logo_img{
	width: 170px;
	height: 63px;
	margin: 8px 0;
}
div.suateam_main_nav_frame{
	width: 800px;
	box-sizing: border-box;
	margin: 0 0 0 -520px;
	position: relative;
	left: 50%;
	display: block;
	color: #fff;
	float: left;
}
div.suateam_main_nav_frame ul.main_nav_ul{
	width: 100%;
	display: table;
}
div.suateam_main_nav_frame li.main_nav_li{
	width: 10%;
	margin: 0 2.1%;
	float: left;
	line-height: 100px;
	font-size: 2rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}
div.suateam_main_nav_frame li.main_nav_li a{
	color: #fff;
	text-align: center;
    display: block;
	
}
div.suateam_main_nav_frame li.main_nav_li a:hover{
	color: #f8f8f8;
}
div.suateam_moudle_frame{
	float: right;
	height:50px ;
	width: 162px;
	margin: 25px 0;
	position: relative;
}
div.suateam_moudle{
	position: relative;
	display: block;
	float: left;
	width: 34px;
	height: 34px;
	margin: 8px 10px;
	box-sizing: border-box;
}
div.suateam_menu{
	background:#fff;
	width: 120px;
	min-height: 50px;
    box-shadow: 1px 1px 10px #999;
    position: absolute;
    top: 60px;
    left: -45px;
    display: none;
}
div.suateam_menu:before{
	position: absolute;
	left: 50%;
	content: '';
	margin-left: -15px;
	top: -15px;
	width: 30px;
	height: 30px;
	background-image: url(../../public_resource/img/ico/menu_arrow.png) ;
	background-size: 100% 100%;
}
div.suateam_menu li.suateam_menu_li{
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid #ededed;
	text-align: center;
	font-size: 1.4rem;
	width: 90%;
    margin: 0 5%;
}
div.suateam_menu li.suateam_menu_li a{
	display: block;
	width: 100%;
	height: 50px;
}
div.suateam_menu li.suateam_menu_li span{
	color: #000000;
}
i.suateam_moudle_icon{
	height:34px;
	width: 34px;
	display: block;
	float: left;
	cursor: pointer;
}
i.suateam_moudle_icon.search{
	background-image:url(../../public_resource/img/ico/search.png) ;
}
i.suateam_moudle_icon.user{
	background-image:url(../../public_resource/img/ico/user.png) ;
}
i.suateam_moudle_icon.help{
	background-image:url(../../public_resource/img/ico/help.png) ;
}
</style>