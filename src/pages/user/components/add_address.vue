<template>
	<div id='add_address' class='user_setting_add_address'>
		<label class='title'>
			<span>添加地址</span>
		</label>
		<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<div class='suateam_select_frame'>
			<label>所在区域:</label>
			<District v-on:district_emit="district_emit" style='width: 62%;'></District>
		</div>
		<div class='suateam_input_frame'>
			<label>收货地址:</label>
			<input type="text" v-model="detailedAddress" />
		</div>
		<div class='suateam_input_frame'>
			<label>收货人姓名:</label>
			<input type="text" v-model="consigner_name" />
		</div>
		<div class='suateam_input_frame'>
			<label>联系电话:</label>
			<input type="text" v-model="consigner_phone" v-on:blur="validateFtn(1)" />
			<span v-if='cellphone_tips!==null' class='suateam_validate red' style="float: left;">{{cellphone_tips}}</span>
		</div>
		<div class='suateam_input_frame_btn2'>
			<button class='bluecolor' v-on:click='sendinfo()' style="display: inline-block;">确认添加</button>
			<button class='greycolor'  style="display: inline-block;" v-on:click='cancel()'>返回</button>
		</div>
		
	</div>

</template>

<script>
	var common_tools=require("common_tools");
	import District from '../../../components/district/district'
	import Alert from '../../../components/global/alert'
	module.exports = {
    	components: {District,Alert},
    	name:'add_address',
        data: function () {
            return {
            	provinceid:'',
            	districtid:'',
            	countyid:'',
              	consigner_name:'',
              	consigner_phone:'',
              	cellphone_tips:null,
              	detailedAddress:'',
            	component:'',
            	alert_options:['',''],	//['标题'，'内容']
            }
        },
        methods:{
        	validateFtn:function(_type){
				switch (_type){
				case 1:	
					//cellphone
	   				var pattern = new RegExp("^[1][358][0-9]{9}$");
			   		if(!this.consigner_phone==''){
			   			var consigner_phone=this.consigner_phone;
			   			if(!consigner_phone.match(pattern)){
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
        		this.alert_options=[_title,_content];
        		this.component=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component='';
        		this.$emit('add_address_emit',false); 
        		
        	},
        	district_emit:function(_val){
        		var _self = this;
        		_self.provinceid=_val.provinceid;
        		_self.districtid=_val.districtid;
        		_self.countyid=_val.countyid;
				console.log(_val.provinceid+"===="+_val.districtid+"===="+_val.countyid);
        	},
        	confirm:function() {
		        this.$emit('add_address_emit',true); 
		    },
		    cancel:function() {
		    	this.$emit('add_address_emit',false); 
			},
        	sendinfo:function(){
        		var _self = this;
        		if(this.cellphone_tips==null){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/addMemberAddress',{
		       			"condition": {
		       				"id":_self.addressId,
							"consigee": _self.consigner_name,
							"cellphone":_self.consigner_phone,
							"province":_self.provinceid,
							"city":_self.countyid,
							"region":_self.districtid,
							"detailedAddress":_self.detailedAddress
							
						}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('修改失败',data.rspMsg);
		   				}else if(data.rspCode=='100000'){
		   					_self.Alert('修改成功',data.rspMsg);
		   					//this.$emit('add_address_emit',true); 
	
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
	div.user_setting_add_address{
		width: 720px;
		height: 360px;
		left: 50%;
		top:50%;
		margin-left: -360px;
		margin-top: -150px;
		box-shadow: 1px 1px 5px #999;
		background-color: #fff;
		z-index:999999;
		position: absolute;
	}
	div.user_setting_add_address label.title{
		background-color: #f5f5f5;
	    width: 100%;
	    float: left;
	    box-sizing: border-box;
	    padding: 0 20px;
	    height: 40px;
	    line-height: 40px;
	    color: #666;
	    overflow: hidden;
	    margin-bottom: 20px;
	    -webkit-user-select: none;
	}
	
</style>