<template>
	 <div id="order">
	 	<div id='topayframe'></div>
	 	<component v-bind:is="component_address" v-on:add_address_emit="add_address_emit"></component> 
	 	<component v-bind:is="component_a" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
	 	<component v-bind:is="component_d" v-on:dialog_emit="dialog_emit" :dialog_options='dialog_option'></component>  
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<div class='order_frame'></div>
    			<label class='table_label'>确认信息<span class='change_info' v-on:click='add_address()'>添加地址</span></label>
    			<div class='user_address'>
    				<div class='suateam_select_frame'>
    					<label>收货地址:</label>
    					<select @change='changeaddress($event.target)' v-model="detailedAddress">
    						<option v-for='items in addressArray' v-bind:id='items.id'>{{items.detailedAddress}}</option>
    					</select>
    				</div>
    				<div class='suateam_input_frame'>
    					<label>收货人姓名:</label>
    					<span>{{consigner_name}}</span>
    				</div>
    				<div class='suateam_input_frame'>
    					<label>联系电话:</label>
    					<span>{{consigner_phone}}</span>
    				</div>
    				<div class='suateam_input_frame'>
    					<label>发票:</label>
    					<label class='label_tag'>无<input type="radio" value="00" v-model='invoiceType'/></label>
    					<label class='label_tag'>普通<input type="radio" value="01" v-model='invoiceType'/></label>
    					<label class='label_tag'>专用<input type="radio" value="02" v-model='invoiceType'/></label>
    					
    				</div>
    				<div class='suateam_input_frame'>
    					<label>发票抬头:</label>
    					<input type="text" v-model='invoiceTitle' v-if="invoiceType!=='00'"/>
    					<span v-if="invoiceType=='00'">无需提供发票抬头</span>
    				</div>
    				
    			</div>
    		</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
	    		<div class ='orderlist_frame' >
					<table v-for ='items in orderArray'>
						<thead>
							<tr>
								<th>商品照片</th>
								<th>商品名称</th>
								<th v-if="items.productType!=='02'">单价(元)</th>
								<th v-if="items.productType=='02'">租金</th>
								<th>数量</th>
								<th>创建日期</th>
								<th v-if="items.productType!=='02'">合计价格(元)</th>
								<th v-if="items.productType=='02'">押金</th>
							</tr>
						</thead>
						<tbody  >
							<tr class='space_tr'><td colspan="7"></td></tr>
							<tr class='title'><td colspan="7">
								<span style="float: left;">订单列表</span>		
							</td></tr>
							<tr>
								<td >
									<img v-bind:src='items.product.img' class='shop_img'>
								</td>
								<td>{{items.product.name}}</td>
								<td v-if="items.productType!=='02'&&items.product.specialStatus=='N'">{{items.product.price}}</td>
								<td v-if="items.productType!=='02'&&items.product.specialStatus=='Y'">{{items.product.specialPrice}}</td>
								<td v-if="items.productType=='02'">{{items.rentType.price}}</td>
								<td>{{items.commodityNum}}</td>
								<td>{{items.createDate}}</td>
								<td v-if="items.productType!=='02'&&items.product.specialStatus=='N'">{{items.commodityNum*items.product.price}}</td>	
								<td v-if="items.productType!=='02'&&items.product.specialStatus=='Y'">{{items.commodityNum*items.product.specialPrice}}</td>	
								<td v-if="items.productType=='02'">{{items.rentType.deposition}}</td>	
							</tr>
						</tbody>
					</table>
					<div class='suateam_input_frame_btn1'>
    					<button class='bluecolor' v-on:click='sendinfo()'>确认订单</button>
    				</div> 
				</div>
			</div>
    	</section>
    	
	 	
	 </div>
</template>
<script>
	var common_tools=require("common_tools");
	import Add_address from '../user/components/add_address'
	import Dialog from '../../components/global/Dialog'
	import Alert from '../../components/global/Alert'
	export default {
		components: {Add_address,Dialog,Alert},
		name: 'order',
		beforeRouteEnter (to, from, next) {
			var addressArray=[];
			var consigner_name='';
			var consigner_phone='';
			var defaultaddress_id='';
			var detailedAddress='';
			common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/queryMemberAddressList',{
       			},function(data){
   				//success callback
   				if(data.rspCode!=='100000'){
   					next({
		              		path: '/notfound',
		          		});
   				}else if(data.rspCode=='100000'){
   					if(data.data.resultSet.length==0){
   						 next(vm => {
						    vm.add_address()
						  })

   					}else{
   						addressArray=data.data.resultSet;
   						for(var a=0;a<data.data.resultSet.length;a++){
							if(data.data.resultSet[a].isDefault=="Y"){
								defaultaddress_id=data.data.resultSet[a].id;
								consigner_name=data.data.resultSet[a].consigee;
								consigner_phone=data.data.resultSet[a].cellphone;
								detailedAddress=data.data.resultSet[a].detailedAddress;
							}
						}
   						next(vm=>{
							vm.addressArray=addressArray;
							vm.consigner_name=consigner_name;
							vm.consigner_phone=consigner_phone;
							vm.addressId=defaultaddress_id;
							vm.detailedAddress=detailedAddress
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
		mounted:function(){
			var shoppingCart_id=common_tools.GetParam();
			this.cartCommodityIds=shoppingCart_id;
			var _self = this;
			if(this.cartCommodityIds!==''){
				common_tools.AJAX('POST',common_tools.interfaceurl+'shoppingCartInfo/queryShoppingCommoditiesById',{
					"condition": {
						"cartCommodityIds": shoppingCart_id
						}
	       			},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					_self.Alert('提示','无法请求数据，请尝试重新购买');
	   				}else if(data.rspCode=='100000'){
	   					if(data.data.resultSet.length!==0){
	   						for(var a=0;a<data.data.resultSet.length;a++){
		   						var temp_orderItem_Obj={};
		   						temp_orderItem_Obj.createDate=data.data.resultSet[a].createDate;
		   						temp_orderItem_Obj.productType=data.data.resultSet[a].productType;
		   						temp_orderItem_Obj.id=data.data.resultSet[a].id;
								temp_orderItem_Obj.commodityNum=data.data.resultSet[a].commodityNum;
								if(data.data.resultSet[a].rentType!==null){
									temp_orderItem_Obj.rentType=data.data.resultSet[a].rentType;
								};
		   						temp_orderItem_Obj.product=data.data.resultSet[a].product;
		   						_self.orderArray.push(temp_orderItem_Obj);
		   					};
	   					}else{
	   						_self.$router.push('/orderlist');
	   					};
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
			}else{
				_self.$router.push('/orderlist');
			};
		},
		methods:{
			Alert:function(_title,_content){
        		common_tools.Shade_on('order');
        		this.alert_options=[_title,_content];
        		this.component_a=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_a='';
        	},
			update_address:function(){
				var _self =this;
				var addressArray=[];
				var consigner_name='';
				var consigner_phone='';
				var defaultaddress_id='';
				var detailedAddress='';
				common_tools.AJAX('POST',common_tools.interfaceurl+'memberAddress/queryMemberAddressList',{
	       			},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					
	   				}else if(data.rspCode=='100000'){
						addressArray=data.data.resultSet;
						for(var a=0;a<data.data.resultSet.length;a++){
							if(data.data.resultSet[a].isDefault=="Y"){
								defaultaddress_id=data.data.resultSet[a].id;
								consigner_name=data.data.resultSet[a].consigee;
								consigner_phone=data.data.resultSet[a].cellphone;
								detailedAddress=data.data.resultSet[a].detailedAddress;
							};
						};
						_self.addressArray=addressArray;
						_self.consigner_name=consigner_name;
						_self.consigner_phone=consigner_phone;
						_self.addressId=defaultaddress_id;
						_self.detailedAddress=detailedAddress
		   					
	   					}
	   					
	   				
	   			},function(data){
	   				//error callback
	   				next({
	              		path: '/notfound',
	          		});
	       		});
			},
			Dialog:function(_title,_content,_confirmBtnText,_cancelBtnText){
        		common_tools.Shade_on('order');
        		this.dialog_option=[_title,_content,{confirm:_confirmBtnText,cancel:_cancelBtnText}];
        		this.component_d=Dialog;
        	},
        	dialog_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_d='';
        		if(_val==true){
        			this.toPay();
        		}else if(_val==false){
        			this.$router.push('/orderlist');
        		}
        	},
        	toPay:function(){
        		//去支付--调用银行支付
        		var _self = this;
        		var _order_id =_self.order_id;
//      		var _productType=_self.productTypeName;
//      		var _name=_self.productName;
//      		var _totalPrice=_self.totalPrice;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEPay/gpPay',{
	       			"condition": {
	       				"id":_order_id
					}
	       		},function(data){
	   				console.log(data.responseText);
	   			},function(data){
	   				$("div#topayframe").html(data.responseText);
	       		});
        	},
			//add address function
        	add_address:function(){
        		common_tools.Shade_on('order');
        		this.component_address=Add_address;
        	},
        	add_address_emit:function(_val){
        		console.log(_val)
        		common_tools.Shade_off();
        		this.component_address='';
        		this.update_address();
        	},
        	//change address function
			changeaddress:function(_target){
				//this.addressId=_target.selectedOptions[0].id;
				this.addressId=_target.options[_target.selectedIndex].id;
				for(var a=0;a<this.addressArray.length;a++){
					if(this.addressId==this.addressArray[a].id){
						this.consigner_name=this.addressArray[a].consigee;
						this.consigner_phone=this.addressArray[a].cellphone
					}
				}
			},
			//提交订单
        	sendinfo:function(){
        		var _self = this;
        		if(_self.invoiceTitle!==''||_self.invoiceType=='00'){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/generateOrder',{
						"condition": {
					        "invoiceType": _self.invoiceType,
					        "shoppingCommodities":[
					            {
					                "cartCommodityId": _self.cartCommodityIds,
					                "promtInfos": [{}]
					            }
					        ],
					        "invoiceTitle": _self.invoiceTitle,
					        "addressId": _self.addressId
					    }
		       			},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					
		   				}else if(data.rspCode=='100000'){
		   					
		   					_self.order_id=data.data.orderInfo[0].id;
//		   					_self.productName=data.data.orderInfo[0].orderCommoditiesList[0].product.name;
//		   					_self.totalPrice=data.data.orderInfo[0].orderCommoditiesList[0].totalPrice;
//		   					_self.productTypeName=data.data.orderInfo[0].orderCommoditiesList[0].productName;
		   					_self.Dialog('提交订单成功','您的订单已确认，为不影响发货时间，建议您在支付后可至订单管理中心进行合同下载。','立即支付','前往订单管理');
		   				};
		   			},function(data){
		   				//error callback
		   				console.log(data);
		       		});
        		}else{
        			_self.Alert('提示','请必须填写发票抬头');
        		}
        		
        		
        	}
        },
		data: function () {
            return {
            	cartCommodityIds:'',
            	addressId:'',
              	addressArray:[],
              	orderArray:[],
              	invoiceType:'00',
              	invoiceTitle:'',
              	defaultaddress_id:'',
              	consigner_name:'',
              	consigner_phone:'',
              	detailedAddress:'',
              	component_address:'',
              	order_id:'',
              	orderNo:'',
              	totalPrice:'',
              	productName:'',
              	productTypeName:'',
              	component:'',
            	component_d:'',
              	dialog_option:['',''],	//['标题'，'内容']
              	component_a:'',
            	alert_options:['',''],	//['标题'，'内容']
              
            }
       },
	}
</script>
<style>
	div.order_frame{
		margin: 15px 0;
		width: 100%;
		box-sizing:border-box;
	}
	div.user_address{
		float: left;
		width: 70%;
	}
	div.user_address div.suateam_input_frame label,div.user_address div.suateam_select_frame label{
		width: auto;
	}
	div.orderlist_frame img.shop_img{
		width: 120px;
		height: 120px;
		display: table;
		margin: 0 auto;
	}
	div.orderlist_frame table td:nth-child(1){
		width: 15%;
	}
	div.orderlist_frame table td:nth-child(2){
		width: 25%;
	}
	div.orderlist_frame table td:nth-child(3){
		width: 10%;
	}
	div.orderlist_frame table td:nth-child(4){
		width: 10%;
	}
	div.orderlist_frame table td:nth-child(5){
		width: 20%;
	}
	div.orderlist_frame table td:nth-child(6){
		width: 15%;
	}
	label.table_label span.change_info{
		margin-left: 20px;
		font-weight: 400;
		color: #16b0ff;
		cursor: pointer;
	}
	label.table_label span.change_info:hover{
		text-decoration: underline;
	}
</style>