<template>
	<div id='address_setting'>
		<component v-bind:is="component_address" v-on:add_address_emit="add_address_emit"></component> 
		<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<div class='suateam_select_frame'>
			<label>收货地址:</label>
			<select @change='changaddress($event.target)' v-model="detailedAddress">
				<option v-for='items in addressArray' v-bind:id='items.id'>{{items.detailedAddress}}</option>
			</select>
			<span class='blue' style="cursor: pointer;" v-if="isDefault=='N'" v-on:click="set_default_address()">设为默认</span>
			<span class='grey' v-if="isDefault=='Y'">已是默认</span>
			<i class='del_ico' v-on:click='del_address()' style="float: left;"></i>
		</div>
		<div class='suateam_select_frame'>
			<label>所在区域:</label>
			<Address_district v-on:address_emit="address_emit" :address_Array="[province,region,city]" style="width: 62%;"></Address_district>
		</div>
		<div class='suateam_input_frame'>
			<label>收货人姓名:</label>
			<input type="text" v-model="consigner_name" />
		</div>
		<div class='suateam_input_frame'>
			<label>联系电话:</label>
			<input type="text" v-model="consigner_phone" />
		</div>
		<div class='suateam_input_frame_btn2'>
			<button class='bluecolor' v-on:click='sendinfo()'>确认修改</button>
			<button class='greycolor' v-on:click='add_address()'>添加地址</button>		
		</div>
	</div>
</template>

<script>
	var common_tools=require("common_tools");
	import Add_address from './add_address';
	import Alert from '../../../components/global/alert';
	import Address_district from '../../../components/district/address_district.vue';
	
	module.exports = {
    	components: {Add_address,Address_district},
    	name:'address_setting',
    	beforeRouteEnter (to, from, next) {
			var addressArray=[];
			var consigner_name='';
			var consigner_phone='';
			var defaultaddress_id='';
			var detailedAddress='';
			var province='';
			var city='';
			var region='';
			var isDefault='';
			common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/queryMemberAddressList',{
       			},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   				}else if(data.rspCode=='100000'){
   					if(data.data.resultSet.length==0){
   						next();
   					}else{
   						addressArray=data.data.resultSet;
   						for(var a=0;a<data.data.resultSet.length;a++){
							if(data.data.resultSet[a].isDefault=="Y"){
								defaultaddress_id=data.data.resultSet[a].id;
								consigner_name=data.data.resultSet[a].consigee;
								consigner_phone=data.data.resultSet[a].cellphone;
								detailedAddress=data.data.resultSet[a].detailedAddress;
								province=data.data.resultSet[a].province;
								city=data.data.resultSet[a].city;
								region=data.data.resultSet[a].region;
								isDefault=data.data.resultSet[a].isDefault;
							}else{
								defaultaddress_id=data.data.resultSet[0].id;
								consigner_name=data.data.resultSet[0].consigee;
								consigner_phone=data.data.resultSet[0].cellphone;
								detailedAddress=data.data.resultSet[0].detailedAddress;
								province=data.data.resultSet[0].province;
								city=data.data.resultSet[0].city;
								region=data.data.resultSet[0].region;
								isDefault=data.data.resultSet[0].isDefault;
							}
						}
   						next(vm=>{
							vm.addressArray=addressArray;
							vm.consigner_name=consigner_name;
							vm.consigner_phone=consigner_phone;
							vm.addressId=defaultaddress_id;
							vm.detailedAddress=detailedAddress;
							vm.region=region;
							vm.province=province;
							vm.city=city;
							vm.isDefault=isDefault;
	   					})
   					}
   					
   				};
   			},function(data){
   				//error callback
   				next({
              		path: '/notfound',
          		});
       		});
		},
        data: function () {
            return {
              	addressArray:[],
              	consigner_name:'',
              	consigner_phone:'',
              	detailedAddress:'',
              	isDefault:'',
            	addressId:'',
            	component:'',
            	province:'',
            	city:'',
            	region:'',
            	component_address:'',
            	alert_options:['',''],	//['标题'，'内容']
            }
        },
        methods:{
        	upData:function(){
        		var addressArray=[];
				var consigner_name='';
				var consigner_phone='';
				var defaultaddress_id='';
				var detailedAddress='';
				var province='';
				var city='';
				var region='';
				var isDefault='';
				var _self =this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/queryMemberAddressList',{
	       			},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   				}else if(data.rspCode=='100000'){
	   					if(data.data.resultSet.length==0){
	   						_self.Alert('提示','加载数据异常，请尝试刷新页面');
	   					}else{
	   						addressArray=data.data.resultSet;
	   						for(var a=0;a<data.data.resultSet.length;a++){
								if(data.data.resultSet[a].isDefault=="Y"){
									defaultaddress_id=data.data.resultSet[a].id;
									consigner_name=data.data.resultSet[a].consigee;
									consigner_phone=data.data.resultSet[a].cellphone;
									detailedAddress=data.data.resultSet[a].detailedAddress;
									province=data.data.resultSet[a].province;
									city=data.data.resultSet[a].city;
									region=data.data.resultSet[a].region;
									isDefault=data.data.resultSet[a].isDefault;
								}else{
									defaultaddress_id=data.data.resultSet[0].id;
									consigner_name=data.data.resultSet[0].consigee;
									consigner_phone=data.data.resultSet[0].cellphone;
									detailedAddress=data.data.resultSet[0].detailedAddress;
									province=data.data.resultSet[0].province;
									city=data.data.resultSet[0].city;
									region=data.data.resultSet[0].region;
									isDefault=data.data.resultSet[0].isDefault;
								};
							};
							_self.addressArray=addressArray;
							_self.consigner_name=consigner_name;
							_self.consigner_phone=consigner_phone;
							_self.addressId=defaultaddress_id;
							_self.detailedAddress=detailedAddress;
							_self.region=region;
							_self.province=province;
							_self.city=city;
							_self.isDefault=isDefault;
		   					
	   					};	
	   				};
	   			},function(data){
	   				console.log(data);
	       		});
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
        	address_emit:function(_val){
        		var _self = this;
        		_self.province=_val.provinceid;
        		_self.region=_val.districtid;
        		_self.city=_val.countyid;
				//console.log(_val.provinceid+"===="+_val.districtid+"===="+_val.countyid);
        	},
        	changaddress:function(_target){
				//this.addressId=_target.selectedOptions[0].id;
				this.addressId=_target.options[_target.selectedIndex].id;
				for(var a=0;a<this.addressArray.length;a++){
					if(this.addressId==this.addressArray[a].id){
						this.consigner_name=this.addressArray[a].consigee;
						this.consigner_phone=this.addressArray[a].cellphone;
						this.province=this.addressArray[a].province;
						this.city=this.addressArray[a].city;
						this.region=this.addressArray[a].region;
						this.isDefault=this.addressArray[a].isDefault;
					};
				};
			},
        	//add address function
        	add_address:function(){
        		common_tools.Shade_on('usercenter');
        		this.component_address=Add_address;
        	},
        	add_address_emit:function(_val){
        		common_tools.Shade_off();
        		this.upData();
        		this.component_address='';
        	},
        	//add address function
        	
        	//del address function
        	del_address:function(){
        		var _self = this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/deleteMemberAddress',{
	       			"condition": {
	       				"id":_self.addressId,
					}
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					_self.Alert('删除失败',data.rspMsg);
	   					
	   				}else if(data.rspCode=='100000'){
	   					_self.Alert('删除成功',data.rspMsg);

	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
        	},
        	//del address function
       
        	//set default address function
        	set_default_address:function(){
        		var _self = this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/updateMemberAddressDefault',{
	       			"condition": {
	       				"id":_self.addressId,
					}
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					_self.Alert('设置失败',data.rspMsg);
	   					
	   				}else if(data.rspCode=='100000'){
	   					_self.Alert('设置成功',data.rspMsg);

	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
        	},
        	//set default address function
        	sendinfo:function(){
        		var _self = this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/updateMemberAddress',{
	       			"condition": {
						"id": _self.addressId,
						"consigee": _self.consigner_name,
						"cellphone": _self.consigner_phone,
						"province": _self.province,
						"city": _self.city,
						"region": _self.region,
						"detailedAddress": _self.detailedAddress,
						"isDefault":_self.isDefault
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
</script>

<style>
	div#address_setting{
		width: 90%;
	}
</style>