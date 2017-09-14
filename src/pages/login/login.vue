<template>
	 <div id='login'>
	 	<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class='login_content'>	
    				<p class='title'>会员登录</p>
    				<div class='suateam_input_frame'>	
    					<label>手机号:</label>
						<input type="text" v-model='cellphone' v-on:blur="validateFtn(1)" placeholder="请输入您的手机号"/>
						<span v-if='cellphone_tips!==null' class='suateam_validate red'>{{cellphone_tips}}</span>
    				</div>
    				<div class='suateam_input_frame'>
    					<label>密码:</label>
    					<input type="password" v-model='v_password' v-on:blur="validateFtn(2)" placeholder='请输入密码'/>
    					<span v-if='v_password_tips!==null' class='suateam_validate red'>{{v_password_tips}}</span>
    				</div>
    		
    				<div class='suateam_input_frame'>
    					<label>验证码:</label>
    					<input type="text" v-model='authcode' placeholder='请输入验证码'/>
    				</div>
    				<div class='suateam_input_frame authcodeframe'>
    					<img v-bind:src='authcodeimg'>
    					<span>看不清？ <a v-on:click='changeauthcode()'>换一张</a></span>
    				</div>
    				
    				<div class='suateam_input_frame_btn1'>
    					<button class='bluecolor' v-on:click='sendinfo()'>登录</button>
    				</div>   
    				<div class='suateam_input_frame'>
    					<p style='width: 50%; margin: 0 auto;'>
    						<router-link to='/register'>注册</router-link>
    						<router-link to='/forgetpw'style ='float:right'>忘记密码？</router-link>
    					</p>
    				</div>   
    			</div>
    		</div>
    	</section>
    	
	 </div>
</template>
<script>
	var common_tools=require("common_tools");
	import Alert from '../../components/global/alert';
	export default {
		components: {Alert},
		name: 'login',
		data: function () {
            return {
            	banner:'url(' + require('./banner.jpg') + ')',
            	username:'',
            	authcodeimg:common_tools.authcodeimgurl,
            	cellphone:'',
            	v_password:'',
              	authcode:'',
              	component:'',
            	alert_options:['',''],	//['标题'，'内容']
            	isloginsucess:false,
            	usertoken:{},
            	cellphone_tips:null,
            	v_password_tips:null
            }
       	},
       	mounted:function(){
       		
		},
        methods:{
			validateFtn:function(_type){
				switch (_type){
				case 1:	
					//cellphone
	   				var pattern = new RegExp("^[1][3578][0-9]{9}$");
			   		if(!this.cellphone==''){
			   			var cellphone=this.cellphone;
			   			if(!cellphone.match(pattern)){
			    			this.cellphone_tips='请输入正确的手机号';
				   		}else{
				   			this.cellphone_tips=null;
				   		}
				   	}else{
				   		this.cellphone_tips='手机号为空';
				   	};
				   	break
				case 2:	
					//password
			   		var pattern =new RegExp("(?=.{8,20}).*","g");
			   		if(!this.v_password==''){
			   			var getuserpw=this.v_password;
			   			if(!getuserpw.match(pattern)){
			    			this.v_password_tips='请输入正确的密码';
				   		}else{
				   			this.v_password_tips=null;
				   		};
			   		}else{
				   		this.v_password_tips='密码为空';
				   	};
					break
			   	}
			},
        	Alert:function(_title,_content){
        		common_tools.Shade_on('login');
        		this.alert_options=[_title,_content];
        		this.component=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component='';
        		if(this.isloginsucess==true){
        			this.$store.commit('userislogin',this.usertoken);
	   				this.$router.push('/index');
	   				$(window).scrollTop(0);
	   				sessionStorage.setItem("username", this.usertoken.username);
	   				sessionStorage.setItem("userid", this.usertoken.id);
	   				if(this.$store.state.needReturnThisPage!==null){
	   					console.log(this.$store.state.needReturnThisPageParm)
	   					var tempNeedReturnThisPage=this.$store.state.needReturnThisPage;
	   					var tempNeedReturnThisPageParm=this.$store.state.needReturnThisPageParm;
	   					if(tempNeedReturnThisPageParm!==null){
	   						this.$router.push({name:tempNeedReturnThisPage,params:{detail:tempNeedReturnThisPageParm.getId,case:tempNeedReturnThisPageParm.currCase}});
	   					}else{
	   						this.$router.push('/'+tempNeedReturnThisPage);
	   					};
	   				};
        		}else{
        			//this.cellphone='';
//      			this.v_password='';
	   				this.authcode='';
	   				this.changeauthcode();
        		};
        	},
        	changeauthcode:function(){
        		this.authcodeimg=this.authcodeimg+'?t='+Math.random(); 
        	},
        	sendinfo:function(){
        		var _self = this;
        		this.validateFtn(1);
        		this.validateFtn(2);
        		if(this.cellphone_tips==null&&this.v_password_tips==null){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'login/memberLogin',{
		       			"condition": {
							"cellphone": _self.cellphone,
							"password": _self.v_password,
							"authCode": _self.authcode
						}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('登录失败',data.rspMsg);
		   				}else if(data.rspCode=='100000'){
		   					_self.isloginsucess=true;
		   					_self.Alert('登录成功','欢迎回来');
		   					_self.usertoken=data.userToken;
		   				};
		   			},function(data){
		   				//error callback
		   				_self.Alert('登录失败',data.rspMsg);
		   				console.log(data);
		   				_self.cellphone='';
		   				_self.v_password='';
		   				_self.authcode='';
		   				_self.changeauthcode();
		       		});
        		}
        	}
        }
            
	}
</script>
<style>
div.login_content{
	width: 50%;
	margin: 0 auto;
	box-sizing: border-box;
}
div.login_content p.title{
	text-align: center;
	margin: 30px 0;
	font-weight: 600;
	font-size: 1.8rem;
}
	
</style>