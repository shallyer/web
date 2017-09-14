<template>
	<div id='phone_validate'>
		 <component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<div class='suateam_input_frame'>
			<label>手机号:</label>
			<input type="text" v-model='cellphone' v-on:blur="validateFtn(1)" placeholder="请输入您的手机号"/>
			<span v-if='cellphone_tips!==null' class='suateam_validate red'>{{cellphone_tips}}</span>
		</div>
		
		<div class='suateam_input_frame'>
			<label>验证码:</label>
			<input type="text" v-model='authCode' style="width:45%;" placeholder='请输入验证码'/>
			<button class='bluecolor suateam_fl suateam_margin_horizontal_10' v-bind:class="{greycolor:btnIsactive }" v-on:click="sendauthcode($event)" style="margin:0 ">{{authcodeString}}</button>
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
    	name:'phone_validate',
        data: function () {
            return {
            	cellphone:'',
            	authCode:'',
            	component:'',
            	cellphone_tips:null,
            	alert_options:['',''],//['标题'，'内容']
            	countDown:60,
            	btnIsactive:false,
            	authcodeString:'短信验证码'
            }
        },
        methods:{
        	validateFtn:function(_type){
				switch (_type){
				case 1:	
					//cellphone
	   				var pattern = new RegExp("^[1][358][0-9]{9}$");
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
				}
			},
        	Alert:function(_title,_content){
        		common_tools.Shade_on('usercenter');
        		this.alert_options=[_title,_content];
        		this.component=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component='';
        		
        	},
        	countDownftn:function(_getThisDom){
        		var _self = this;
        		if(_self.countDown== 0){
        			_getThisDom.removeAttribute("disabled"); 
        			_self.countDown = 60;
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
        		if(_self.countDown ==60){
        			_self.countDownftn(getThisDom);
        			common_tools.AJAX('POST',common_tools.interfaceurl+'login2/phoneAuthCode',{
		       			"condition": {"cellphone": _self.cellphone}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode=='999999'){
		   					alert("传参错误，请重新检查");
		   				}else if(data.rspCode!=='999999'){
		   					console.log("验证码:"+data.data.authCode);
		   				};
		   				
		   			},function(data){
		   				//error callback
		   				console.log(data);
		       		});
        		}
        		
        	},
        	sendinfo:function(){
        		var _self = this;
        		this.validateFtn(1);
        		if(this.cellphone_tips==null){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'memberInfo/memberPhoneUpdate',{
		       			"condition": {
		       				"cellphone":_self.cellphone,
							"authCode": _self.authCode
						}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('修改失败',data.rspMsg);
		   					
		   				}else if(data.rspCode=='100000'){
		   					_self.Alert('修改成功',data.rspMsg);
	
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
div#phone_validate{
	width: 90%;
}
</style>