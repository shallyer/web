<template>
	
	<div id='user_setting'>
		<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<div class='' v-if='avataurl!==null'>
			<img v-bind:src='avataurl' class='userAvata'>
		</div>
		<div class='suateam_input_frame'>
			<label>昵称:</label>
			<input type="text" v-model='nickname'/>
		</div>
		<div class='suateam_input_frame'>
			<label>邮箱:</label>
			<input type="text" v-model='email' placeholder="请输入您的电子邮箱"/>
		</div>
		<div class='suateam_select_frame'>
			<label>所在区域:</label>
			<Address_district v-on:address_emit="address_emit" :address_Array="[provinceid,countyid,districtid]" style="width: 62%;"></Address_district>
		</div>
		<div class='suateam_select_frame'>
			<label>业务需求:</label>
			<select v-model='business_name' @change='changebusiness($event.target)'>
				<option v-for='items in businessArray' v-bind:id='items.code'>{{items.name}}</option>
			</select>
		</div>
		<div class='suateam_select_frame'>
			<label>行业选择:</label>
			<select v-model='industry_name' @change='changeindustry($event.target)'>
				<option v-for='items in industryArray' v-bind:id='items.id'>{{items.name}}</option>
			</select>
			<span style="float: left; color: red; font-size: 1.2rem; margin-left: 215px;">*行业只许修改一次</span>
		</div>
		<div class='suateam_select_frame'>
			<label>上传头像:</label>
			<div style="float: left;"><Upfile v-on:upfile_emit="upfile_emit" :upfile_option="['png,jpeg','2048']"></Upfile></div>
			
			<span style="float: left;">上传格式：png、jpg，上传大小2MB</span>
		</div>
		<div class='suateam_input_frame_btn1'>
			<button class='bluecolor' v-on:click='sendinfo()'>确认修改</button>
		</div>
	</div>
</template>

<script>
	var common_tools=require("common_tools");
	import Address_district from '../../../components/district/address_district.vue';
	import Upfile from '../../../components/global/upfile';
	import Alert from '../../../components/global/alert';
	export default {
    	components :{Upfile,Alert,Address_district},
    	name:'user_setting',
        data: function () {
            return {
            	provinceid:'',
              	districtid:'',
              	countyid:'',
              	nickname:'',
            	email:null,
            	businessArray:[],
            	businesstype:'',
            	business_name:'',
            	industryArray:[],
            	industry_id:'',
            	industry_name:'',
            	avataurl:null,
            	component:'',
            	alert_options:['',''],	//['标题'，'内容']
            }
        },
        mounted:function(){
      		var _self = this;	
       		var business={},industry={};
       		common_tools.AJAX('POST',common_tools.interfaceurl+'memberInfo/queryMemberInfoById',{
       		},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					console.log(data);
   				}else if(data.rspCode=='100000'){
					_self.nickname=data.data.resultSet.nickname;
					_self.email=data.data.resultSet.email;
					_self.avataurl=data.data.resultSet.icon;
					_self.businesstype=data.data.resultSet.busiDemand;
					_self.industry_id=data.data.resultSet.tagId;
					_self.provinceid=data.data.resultSet.province;
					_self.districtid=data.data.resultSet.region;
					_self.countyid=data.data.resultSet.city;
				};
   			},function(data){
   				//error callback
   				console.log(data);
       		});
       		
    		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbBusiDemand/listSuateamEbBusiDemand',{
       		},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					console.log(data);
   				}else if(data.rspCode=='100000'){
   					business.businessArray=data.data.resultSet;
   					common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbTag/listSuateamEbTag',{
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					console.log(data);
		   				}else if(data.rspCode=='100000'){
	   						industry.industryArray=data.data.resultSet;
	   						for(var a=0;a<business.businessArray.length;a++){
		   						if(business.businessArray[a].code==_self.businesstype){
		   							business.business_name=business.businessArray[a].name;
		   						};
		   					};
	   						for(var i=0;i<data.data.resultSet.length;i++){
		   						if(data.data.resultSet[i].id==_self.industry_id){
		   							industry.industry_name=data.data.resultSet[i].name;
		   						};
		   					};
							_self.businessArray=business.businessArray;
							_self.business_name=business.business_name;
				
							_self.industryArray=industry.industryArray;
							_self.industry_name=industry.industry_name;		   					
						};
		   			},function(data){
		   				//error callback
		   				console.log(data);
		       		});
				};
   			},function(data){
   				//error callback
   				console.log(data);
       		});
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
        	upfile_emit:function(_val){
        		this.avataurl=_val;
        	},
        	address_emit:function(_val){
        		var _self = this;
        		_self.provinceid=_val.provinceid;
        		_self.districtid=_val.districtid;
        		_self.countyid=_val.countyid;
        		_self.isDefault=_val.isDefault;
//				console.log(_val.provinceid+"===="+_val.districtid+"===="+_val.countyid);
        	},
        	changebusiness:function(_target){
        		//this.businesstype=_target.selectedOptions[0].id;
        		this.businesstype=_target.options[_target.selectedIndex].id;
        	},
        	changeindustry:function(_target){
        		//this.industry_id=_target.selectedOptions[0].id;
        		this.industry_id=_target.options[_target.selectedIndex].id;
        	},
        	sendinfo:function(){
        		var _self = this;
        		if(this.email!==''&&this.avataurl!==null){
	        			common_tools.AJAX('POST',common_tools.interfaceurl+'memberInfo/memberInfoUpdate',{
		       			"condition": {
		       				"icon":_self.avataurl,
							"email": _self.email,
							"nickname": _self.nickname,								
							"province": _self.provinceid,
							"city": _self.districtid,
							"region": _self.countyid,
							"busiDemand": _self.businesstype,							
							"tagId": _self.industry_id
						}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('修改成功',data.rspMsg);
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
div#user_setting{
	width: 90%;
}
img.userAvata{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	box-shadow: 1px 1px 5px #ccc;
	margin: 0 auto;
	display: table;
	background: #ccc;
}
</style>