<template>
	<div id='address_district'>
		<select class='district_select' v-model="selectedProvince" @click='selectregion(1,$event.target)'>
			<option value="default">请选择</option>
			<option v-for="items in provinceArray" v-bind:id='items.id' v-bind:value='items.id'>{{items.name}}</option>	
		</select>
		<select class='district_select' v-model="selectedCity" @click='selectregion(2,$event.target)'>
			<option value="default">请选择</option>
			<option v-for="items in districtArray" v-bind:id='items.id' v-bind:value='items.id'>{{items.name}}</option>	
		</select>
		<select class='district_select' v-model="selectedRegions" @click='selectregion(3,$event.target)'>
			<option value="default">请选择</option>
			<option v-for="items in countyArray" v-bind:id='items.id' v-bind:value='items.id'>{{items.name}}</option>	
		</select>
	</div>
</template>

<script>
	var common_tools=require("common_tools");
	
	export default {
		name: 'address_district',
		data: function () {
            return {
            	provinceArray:[],
            	districtArray:[],
            	countyArray:[],
            	provinceid:'',
            	districtid:'',
            	countyid:'',
            	selectedProvince:"default",
            	selectedCity:"default",
            	selectedRegions:"default"
            }
      	},
      	props:['address_Array'],
      	mounted:function(){
      		var _self = this;
       		common_tools.AJAX('POST',common_tools.interfaceurl+'cityInfo/queryProvinceCityRegionAll',{
       		},function(data){
   				//success callback
   				if(data.rspCode=='999999'){
   					console.log(data);
   				}else if(data.rspCode=='100000'){
					var allList=JSON.parse(data.data.resultSet).provinces;
					_self.selectedProvince=_self.address_Array[0];
					_self.selectedCity=_self.address_Array[1];
					_self.selectedRegions=_self.address_Array[2];
					if(_self.selectedProvince!="default"){
						var proviceChildList=[];
						for(var a=0;a<allList.length;a++){
	   						var provinceChild1=allList[a].cities;
	   						var proviceChildList1=[];
	   						for(var b=0;b<provinceChild1.length;b++){
	   							var provinceChild2=provinceChild1[b].regions;
	   							var proviceChildList2=[];
	   							for(var c=0;c<provinceChild2.length;c++){
	   								proviceChildList2.push({
	   									code:provinceChild2[c].code,
	   									name:provinceChild2[c].name,
	   									id:provinceChild2[c].id,
	   								})
	   							}
	   							proviceChildList1.push({
	   								code:provinceChild1[b].code,
	   								name:provinceChild1[b].name,
	   								id:provinceChild1[b].id,
	   								regions:proviceChildList2
	   							})
   							};

	   						proviceChildList.push({
								code:allList[a].code,
								name:allList[a].name,
								id:allList[a].id,
								cities:proviceChildList1
							})
	   					};
	   					_self.provinceArray=proviceChildList;
						_self.districtArray=[];
						_self.countyArray=[];
						for(var a=0;a<_self.provinceArray.length;a++){
							if(_self.provinceArray[a].id==_self.selectedProvince){
								_self.districtArray=_self.provinceArray[a].cities;
								_self.countyArray=[];
							  	for(var b=0;b<_self.districtArray.length;b++){
									if(_self.districtArray[b].id==_self.selectedCity){
										_self.countyArray=_self.districtArray[b].regions;
									};
								};
							};
						};
					}else{
						var proviceChildList=[];
						for(var a=0;a<allList.length;a++){
	   						var provinceChild1=allList[a].cities;
	   						var proviceChildList1=[];
	   						for(var b=0;b<provinceChild1.length;b++){
	   							var provinceChild2=provinceChild1[b].regions;
	   							var proviceChildList2=[];
	   							for(var c=0;c<provinceChild2.length;c++){
	   								proviceChildList2.push({
	   									code:provinceChild2[c].code,
	   									name:provinceChild2[c].name,
	   									id:provinceChild2[c].id,
	   								})
	   							}
//	   							_self.countyArray=proviceChildList2;
	   							proviceChildList1.push({
	   								code:provinceChild1[b].code,
	   								name:provinceChild1[b].name,
	   								id:provinceChild1[b].id,
	   								regions:proviceChildList2
	   							})
   							}
//	   						_self.districtArray=proviceChildList1;
	
	   						proviceChildList.push({
								code:allList[a].code,
								name:allList[a].name,
								id:allList[a].id,
								cities:proviceChildList1
							})
	   					};
	   					_self.provinceArray=proviceChildList;

					};
		
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
			    this.$emit('address_emit',temp_districtobj);
			},
        	selectregion:function(_type,_target){
        		var _self = this;
        		switch (_type){
				case 1:
					_self.provinceid=_target.selectedOptions[0].id;
					_self.districtArray=[];
					_self.countyArray=[];
					for(var a=0;a<_self.provinceArray.length;a++){
						if(_self.provinceArray[a].id==_self.provinceid){
							_self.districtArray=_self.provinceArray[a].cities;
							return;
						}
					}
				case 2:
				  	_self.countyArray=[];
				  	_self.districtid=_target.selectedOptions[0].id;
				  	for(var b=0;b<_self.districtArray.length;b++){
						if(_self.districtArray[b].id==_self.districtid){
							_self.countyArray=_self.districtArray[b].regions;
							return;
						}
					}
			  	case 3:
				  	_self.countyid=_target.selectedOptions[0].id;
				  	_self.update();
				  	break;
				}
        		
        	}
        }
            
	}
</script>

<style>
div#address_district{
	display: table;
}
div#address_district select.district_select{
	margin-right: 3%;
	width: 30% !important;
	display: block;
}
</style>