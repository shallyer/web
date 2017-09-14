<template>
	<div id='change_password'>
		<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<div class='suateam_input_frame'>
			<label>旧密码:</label>
			<input type="password" v-model='o_password' v-on:blur="validateFtn(5)" placeholder='请输入旧密码'>
			<span v-if='o_password_tips!==null' class='suateam_validate red'>{{o_password_tips}}</span>
		</div>
		<div class='suateam_input_frame'>
			<label>新密码:</label>
			<input type="password" v-model='n_password' v-on:blur="validateFtn(4)" v-on:keyup="passwordValidate()" placeholder='请输入新密码'>
			<span v-if='n_password_tips!==null' class='suateam_validate red'>{{n_password_tips}}</span>
			<div id="level" class="pw-strength" style='left:213px'>           	
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
			<label>确认新密码:</label>
			<input type="password" v-model='v_password' v-on:blur="validateFtn(2)" placeholder='请确认新密码'>
			<span v-if='v_password_tips!==null' class='suateam_validate red'>{{v_password_tips}}</span>
		</div>
		
		<div class='suateam_input_frame'>
			<label>验证码:</label>
			<input type="text" v-model='authcode' placeholder='请输入验证码' />
		</div>
		<div class='suateam_input_frame authcodeframe'>
			<img v-bind:src='authcodeimg'>
			<span>看不清？ <a v-on:click='changeauthcode()'>换一张</a></span>
		</div>
		<div class='suateam_input_frame_btn1'>
			<button class='bluecolor' v-on:click='sendinfo()'>确认修改</button>
		</div>
	
		
	</div>

</template>

<script>
	var common_tools=require("common_tools");
	import Alert from '../../../components/global/alert';
	module.exports = {
    	//components configs
    	name:'change_password',
        data: function () {
            return {
              	authcodeimg:common_tools.authcodeimgurl,
            	v_password:'',
            	o_password:'',
            	n_password:'',
            	authcode:'',
            	component:'',
            	o_password_tips:null,
            	n_password_tips:null,
            	v_password_tips:null,
            	alert_options:['',''],	//['标题'，'内容']
            }
        },
        methods:{
        	Alert:function(_title,_content){
        		common_tools.Shade_on('usercenter');
        		this.alert_options=[_title,_content];
        		this.component=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component='';
        	},
        	passwordValidate:function(){
        		$(".pw-strength").css("display","block");
        		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
				var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
				var enoughRegex = new RegExp("(?=.{8,}).*", "g"); 
				if (false == enoughRegex.test(this.n_password)) { 
					$('#level').removeClass('pw-weak'); 
					$('#level').removeClass('pw-medium'); 
					$('#level').removeClass('pw-strong'); 
					$('#level').addClass(' pw-defule'); 
			 		//密码小于六位的时候，密码强度图片都为灰色 
				} else if (strongRegex.test(this.n_password)) { 
					$('#level').removeClass('pw-weak'); 
					$('#level').removeClass('pw-medium'); 
					$('#level').removeClass('pw-strong'); 
					$('#level').addClass(' pw-strong'); 
					 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
				} else if (mediumRegex.test(this.n_password)) { 
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
        	validateFtn:function(_type){
				switch (_type){
				case 2:	
					//password
			   		//var pattern = new RegExp("^[0-9_a-zA-Z]{8,20}$");
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
				case 4:	
					//n_password
			   			var pattern =new RegExp("(?=.{8,20}).*","g");
			   		if(!this.n_password==''){
			   			var getuserpw=this.n_password;
			   			
			   			if(!getuserpw.match(pattern)){
			    			this.n_password_tips='请输入正确的密码';
				   		}else{
				   			this.n_password_tips=null;
				   		}
			   		}else{
				   		this.n_password_tips='密码为空';
				   	};
					break
				case 5:	
					//o_password
			   			var pattern =new RegExp("(?=.{8,20}).*","g");
			   		if(!this.o_password==''){
			   			var getuserpw=this.o_password;
			   			if(!getuserpw.match(pattern)){
			    			this.o_password_tips='请输入正确的密码';
				   		}else{
				   			this.o_password_tips=null;
				   		}
			   		}else{
				   		this.o_password_tips='密码为空';
				   	};
					break
			   	}
			},
        	changeauthcode:function(){
        		this.authcodeimg=this.authcodeimg+'?t='+Math.random(); 
        	},
        	sendinfo:function(){
        		var _self = this;
        		this.validateFtn(5);this.validateFtn(4);this.validateFtn(2);
        		if(this.o_password_tips==null&&this.n_password_tips==null&&this.v_password_tips==null){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'memberInfo/changeMemberPassword',{
		       			"condition": {
		       				"password":_self.o_password,
							"newPassword1st": _self.n_password,
							"newPassword2nd": _self.v_password,
							"authCode": _self.authcode
						}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('修改失败',data.rspMsg);
		   					
		   				}else if(data.rspCode=='100000'){
		   					_self.Alert('修改成功',data.rspMsg);
		   					console.log(data);
	
		   				};
		   			},function(data){
		   				//error callback
		   				console.log(data);
		   				
		       		});
        		}	
        	}
        }
    }
</script>

<style>
	div#change_password{
		width: 90%;
	}
</style>