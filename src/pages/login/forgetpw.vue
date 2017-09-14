<template>
	 <div id='forgetpw'>
	 	<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class='login_content'>
    				
    				<p class='title'>忘记密码</p>
    				<div class='suateam_input_frame'>
    					<label>手机号:</label>
    					<input type="text" v-model='cellphone' v-on:blur="validateFtn(1)" placeholder="请输入您的手机号"/>
						<span v-if='cellphone_tips!==null' class='suateam_validate red'>{{cellphone_tips}}</span>
    				</div>
    				<div class='suateam_input_frame'>
    					<label>手机验证:</label>
    					<input type="text" v-model='authcode' style="width: 45%;" placeholder='请输入短信验证码'/>
    					<button class='bluecolor suateam_fl suateam_margin_horizontal_10' v-bind:class="{greycolor:btnIsactive }" v-on:click="sendauthcode($event)">{{authcodeString}}</button>
    				</div>
    				<div class='suateam_input_frame'>
    					<label>设置密码:</label>
    					<input type="password" placeholder='请输入密码8-20位' v-model='f_password' v-on:keyup="passwordValidate()"/>
    					<div id="level" class="pw-strength">           	
							<div class="pw-bar"></div>
							<div class="pw-bar-on"></div>
							<div class="pw-txt">
								<span>弱</span>
								<span>中</span>
								<span>强</span>
							</div>
						</div>	
    				</div>
    				<div class='suateam_input_frame'>
    					<label>确认密码:</label>
    					<input type="password" v-model='v_password' v-on:blur="validateFtn(2)" placeholder='请确认密码8-20位'/>
    					<span v-if='v_password_tips!==null' class='suateam_validate red'>{{v_password_tips}}</span>
	    				
	    			</div>
    				
    				<div class='suateam_input_frame_btn1' style="margin-top: 30px;">
    					<button class='bluecolor' v-on:click='sendinfo()'>修改密码</button>
    				</div>  
    				<div class='suateam_input_frame'>
    					<p style='width: 50%; margin: 0 auto;'>
    						<router-link to='/login'>返回登录</router-link>
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
		name: 'forgetpw',
		data: function () {
            return {
            	banner:'url(' + require('./banner.jpg') + ')',
            	cellphone:'',
            	v_password:'',
            	f_password:'',
     			authcode:'',
              	component:'',
            	alert_options:['',''],	//['标题'，'内容']
            	comment:'',
            	cellphone_tips:null,
            	v_password_tips:null,
            	countDown:90,
            	btnIsactive:false,
            	authcodeString:'短信验证码'
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
			    			
				   		}
			   		}else{
				   		this.v_password_tips='密码为空';
				   	};
					break
			   	}
			},
        	Alert:function(_title,_content){
        		common_tools.Shade_on('forgetpw');
        		this.alert_options=[_title,_content];
        		this.component=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component='';
        		if(this.isloginsucess==true){
        			this.$store.commit('userislogin',this.usertoken);
	   				this.$router.push('/index');
	   				sessionStorage.setItem("username", this.usertoken.username);
	   				sessionStorage.setItem("userid", this.usertoken.id);
        		};
        	},
        	passwordValidate:function(){
        		$(".pw-strength").css("display","block");
        		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
				var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
				var enoughRegex = new RegExp("(?=.{8,}).*", "g"); 
				if (false == enoughRegex.test(this.f_password)) { 
					$('#level').removeClass('pw-weak'); 
					$('#level').removeClass('pw-medium'); 
					$('#level').removeClass('pw-strong'); 
					$('#level').addClass(' pw-defule'); 
			 		//密码小于六位的时候，密码强度图片都为灰色 
				} else if (strongRegex.test(this.f_password)) { 
					$('#level').removeClass('pw-weak'); 
					$('#level').removeClass('pw-medium'); 
					$('#level').removeClass('pw-strong'); 
					$('#level').addClass(' pw-strong'); 
					 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
				} else if (mediumRegex.test(this.f_password)) { 
					$('#level').removeClass('pw-weak'); 
					$('#level').removeClass('pw-medium'); 
					$('#level').removeClass('pw-strong'); 
					$('#level').addClass(' pw-medium'); 
					 //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
				} else { 
					$('#level').removeClass('pw-weak'); 
					$('#level').removeClass('pw-medium'); 
					$('#level').removeClass('pw-strong'); 
					$('#level').addClass('pw-weak'); 
					 //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
				};
				return true; 
        	},
        	countDownftn:function(_getThisDom){
        		var _self = this;
        		if(_self.countDown== 0){
        			_getThisDom.removeAttribute("disabled"); 
        			_self.countDown = 90;
        			_self.btnIsactive=false;
        			_self.authcodeString="短信验证码"; 
        		}else{
        			_getThisDom.setAttribute("disabled", true); 
        			setTimeout(function(){
						_self.countDown--;
						_self.btnIsactive=true;
						_self.authcodeString="重新发送(" + _self.countDown + ")"; 
						_self.countDownftn(_getThisDom);
					},1000);
				};
        	},
        	sendauthcode:function(_this){
        		var _self = this;
        		var getThisDom = _this.target;
        		_self.btnIsactive=true;
        		if(_self.countDown ==90){
        			getThisDom.setAttribute("disabled", true); 
        			common_tools.AJAX('POST',common_tools.interfaceurl+'login2/phoneAuthCode',{
		       			"condition": {"cellphone": _self.cellphone}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode=='100000'){
		   					_self.countDownftn(getThisDom);
		   				}else if(data.rspCode=='101000'){
		   					_self.Alert('提示',data.rspMsg);
		   					_self.btnIsactive=false;
		   					getThisDom.removeAttribute("disabled"); 
		   				};
		   				
		   			},function(data){
		   				//error callback
		   				console.log(data);
		       		});	
        		};	
        	},
        	sendinfo:function(){
        		var _self = this;
        		this.validateFtn(1);
        		this.validateFtn(2);
        		if(this.cellphone_tips==null&&this.v_password_tips==null){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'memberInfo/changeMemberPasswordForgeted',{
		       			"condition": {
							"cellphone": _self.cellphone,
							"newPassword1st":_self.f_password,
							"newPassword2nd":_self.v_password,
							"authCode": _self.authcode
						}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('修改失败',data.rspMsg);
		   				}else if(data.rspCode=='100000'){
		   					_self.Alert('修改成功','请重新登录');
		   					this.$router.push('/index');
		   				};
		   			},function(data){
		   				//error callback
		   				_self.Alert('登录失败',data.rspMsg);
		   				console.log(data);
		   				
		       		});
        		}
        	}
        }
            
	}
</script>
<style>
	div.login_content{
		width: 70%;
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