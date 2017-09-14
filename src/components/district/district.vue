<template>
	<div id='district'>
		<select @change='selectregion(1,$event.target)' class='district_select'>
			<option v-for="items in provinceArray" v-bind:id='items.id' v-bind:value='items.cityCode'>{{items.cityName}}</option>	
		</select>
		<select @change='selectregion(2,$event.target)' class='district_select'>
			<option v-for="items in districtArray" v-bind:id='items.id' v-bind:value='items.cityCode'>{{items.cityName}}</option>	
		</select>
		<select @change='selectregion(3,$event.target)' class='district_select'>
			<option v-for="items in countyArray" v-bind:id='items.id' v-bind:value='items.cityCode'>{{items.cityName}}</option>	
		</select>
		<!--<span style="float: left; font-size: 1.2rem;width: 100%;">测试模式：{{provinceid}}+{{districtid}}+{{countyid}}</span>-->
	</div>
</template>

<script>
	var common_tools=require("common_tools");
	export default {
		name: 'district',
		data: function () {
            return {
            	provinceArray:[],
            	districtArray:[],
            	countyArray:[],
            	provinceid:'',
            	districtid:'',
            	countyid:'',	
            }
      	},
      	mounted:function(){
      		var _self = this;
       		common_tools.AJAX('POST',common_tools.interfaceurl+'cityInfo/queryProvince',{
	       		},function(data){
	   				//success callback
	   				console.log(data);
	   				if(data.rspCode=='999999'){
	   					console.log(data);
	   				}else if(data.rspCode=='100000'){
	   					var temp_provinceArray=[];
	   					for(var a=0;a<data.data.resultSet.length;a++){
	   						var temp_parentCityobj={
	   							id:data.data.resultSet[a].id,
	   							cityCode:data.data.resultSet[a].cityCode,
	   							parentCityCode:data.data.resultSet[a].parentCityCode,
	   							cityName:data.data.resultSet[a].cityName
	   						};
	   						temp_provinceArray.push(temp_parentCityobj);
	   						_self.provinceArray=temp_provinceArray;
	   					};
	   					common_tools.AJAX('POST',common_tools.interfaceurl+'cityInfo/queryCityByProvince',{
			       			"condition": {"province": _self.provinceArray[0].cityCode}
			       		},function(data){
			   				//success callback
			   				if(data.rspCode=='999999'){
			   					
			   				}else if(data.rspCode!=='999999'){
			   					var temp_parentCityArray=[];
			   					for(var a=0;a<data.data.resultSet.length;a++){
			   						var temp_parentCityobj={
			   							id:data.data.resultSet[a].id,
			   							cityCode:data.data.resultSet[a].cityCode,
			   							parentCityCode:data.data.resultSet[a].parentCityCode,
			   							cityName:data.data.resultSet[a].cityName
			   						};
			   						_self.districtArray.push(temp_parentCityobj);
			   						
			   					};
			   					common_tools.AJAX('POST',common_tools.interfaceurl+'cityInfo/queryCityByProvince',{
					       			"condition": {"province": _self.districtArray[0].cityCode}
					       		},function(data){
					   				//success callback
					   				if(data.rspCode=='999999'){
					   					
					   				}else if(data.rspCode!=='999999'){
					   					var temp_parentCityArray=[];
					   					for(var a=0;a<data.data.resultSet.length;a++){
					   						var temp_parentCityobj={
					   							id:data.data.resultSet[a].id,
					   							cityCode:data.data.resultSet[a].cityCode,
					   							parentCityCode:data.data.resultSet[a].parentCityCode,
					   							cityName:data.data.resultSet[a].cityName
					   						};
					   						_self.countyArray.push(temp_parentCityobj);
					   						_self.districtid=_self.districtArray[0].id;
					   						_self.provinceid=_self.provinceArray[0].id;
					   						_self.countyid=_self.countyArray[0].id;
					   						_self.update();
					   					};
					   					
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
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);		
	       });  	
       	},
        methods:{ 
        	update: function (value) {
        		var temp_districtobj={
        			provinceid:this.provinceid,
	            	districtid:this.districtid,
	            	countyid:this.countyid
        		};
			    this.$emit('district_emit',temp_districtobj);
			},
        	selectregion:function(_type,_target){
        		var _self = this;
        		switch (_type){
				case 1:
					//_self.provinceid=_target.selectedOptions[0].id;
					_self.provinceid=_target.options[_target.selectedIndex].id;
					_self.districtArray=[];
					_self.countyArray=[];
					
					var senddata=_target.value;
					common_tools.AJAX('POST',common_tools.interfaceurl+'cityInfo/queryCityByProvince',{
		       			"condition": {"province": senddata}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode=='999999'){
		   					
		   				}else if(data.rspCode!=='999999'){
		   					var temp_parentCityArray=[];
		   					for(var a=0;a<data.data.resultSet.length;a++){
		   						var temp_parentCityobj={
		   							id:data.data.resultSet[a].id,
		   							cityCode:data.data.resultSet[a].cityCode,
		   							parentCityCode:data.data.resultSet[a].parentCityCode,
		   							cityName:data.data.resultSet[a].cityName
		   						};
		   						_self.districtArray.push(temp_parentCityobj);
		   						
		   						common_tools.AJAX('POST',common_tools.interfaceurl+'cityInfo/queryCityByProvince',{
					       			"condition": {"province": _self.districtArray[0].cityCode}
					       		},function(data){
					   				//success callback
					   				if(data.rspCode=='999999'){
					   					alert("传参错误，请重新检查");
					   					
					   				}else if(data.rspCode!=='999999'){
					   					var temp_parentCityArray=[];
					   					_self.countyArray=[];
					   					for(var a=0;a<data.data.resultSet.length;a++){
					   						var temp_parentCityobj={
					   							id:data.data.resultSet[a].id,
					   							cityCode:data.data.resultSet[a].cityCode,
					   							parentCityCode:data.data.resultSet[a].parentCityCode,
					   							cityName:data.data.resultSet[a].cityName
					   						};
					   						_self.countyArray.push(temp_parentCityobj);
					   					};
					   					_self.districtid=_self.districtArray[0].id;
					   					_self.countyid=_self.countyArray[0].id;
					   					_self.update();
					   				};
					   				
					   			},function(data){
				   					//error callback
				   					console.log(data);
					       		});
		   					};
		   				};
		   				
		   			},function(data){
		   				//error callback
		   				console.log(data);
		       		});
		       		
				  	break;
				case 2:
				  	_self.countyArray=[];
				  	//_self.districtid=_target.selectedOptions[0].id;
				  	_self.provinceid=_target.options[_target.selectedIndex].id;
				  	var senddata=_target.value;
					common_tools.AJAX('POST',common_tools.interfaceurl+'cityInfo/queryCityByProvince',{
		       			"condition": {"province": senddata}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode=='999999'){
		   					alert("传参错误，请重新检查");
		   					
		   				}else if(data.rspCode!=='999999'){
		   					var temp_parentCityArray=[];
		   					for(var a=0;a<data.data.resultSet.length;a++){
		   						var temp_parentCityobj={
		   							id:data.data.resultSet[a].id,
		   							cityCode:data.data.resultSet[a].cityCode,
		   							parentCityCode:data.data.resultSet[a].parentCityCode,
		   							cityName:data.data.resultSet[a].cityName
		   						};
		   						_self.countyArray.push(temp_parentCityobj);
		   						_self.countyid=_self.countyArray[0].id;
		   						_self.update();
		   					};
		   					
		   				};
		   				
		   			},function(data){
	   					//error callback
	   					console.log(data);
		       		});
		       		
				  	break;
			  	case 3:
				  	//_self.countyid=_target.selectedOptions[0].id;
				  	_self.countyid=_target.options[_target.selectedIndex].id;
				  	_self.update();
				  	break;
				}
        		
        	}
        }
            
	}
</script>

<style>
div#district{
	display: table;
}
div#district select.district_select{
	margin-right: 3%;
	width: 30% !important;
	display: block;
}
</style>