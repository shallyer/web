<template>
	<div id ='orderlist'>
		<div id='topayframe'></div>
		<component v-bind:is="component_a" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
		<component v-bind:is="component_d" v-on:dialog_emit="dialog_emit" :dialog_options='dialog_option'></component> 
		<div class ='orderlist_frame'>
			<table>
				<thead>
					<tr>
						<th>商品照片</th>
						<th>商品名称</th>
						<th>单价</th>
						<th>数量</th>
						<th>创建日期</th>
						<th>合计价格</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody v-for ='items in orderArray' v-if ='ishasorder==true'>
					<tr class='space_tr'><td colspan="7"></td></tr>
					<tr class='title'><td colspan="7">
						<span style="float:left; margin-right: 20px;">订单号：{{items.orderNo}}</span>
						<span style="float:left;" v-if ='items.trackingNumber!==null'>运单号：{{items.trackingNumber}}</span>
						<span style="float:right;" v-if="items.orderStatus!=='01'" v-on:click='del_orderItem(items.id)'>
							<i class='del_ico'></i>
						</span>
						<span style="float: right; margin-right: 20px;">共计：{{items.totalPrice}}元</span>
						
					</td></tr>
					<tr v-for ='(item, index) in items.productArray'>
						<td >
							<img v-bind:src='item.img' class='shop_img' v-if='item.img!==null'>
							<img v-bind:src='shopNoImg' class='shop_img' v-if='item.img==null'>
						</td>
						<td>{{item.name}}</td>
						<td>{{item.price}}</td>
						<td>{{item.commodityNum}}</td>
						<td>{{item.createDate}}</td>
						<td>{{item.totalPrice}}</td>
						<td v-if="index==0" v-bind:rowspan='999999'>
							<div class='pay_state' v-if="items.orderStatus=='01'">
								<button class='bluecolor' v-on:click='reallypay(item.contract,items.id)'>待支付</button>
								<a style='display: block;' v-if="item.contract==null&&item.productType!=='04'" v-on:click='tocontract(item.orderId)'>{{items.contract}}[查看合同]</a>
								<a style='display: block;' v-on:click="cancel_orderItem(items.id)">取消订单</a>
							</div>
							<div class='pay_state' v-if="items.orderStatus=='02'">
								成功支付
								<a style='display: block;' v-if="item.contract==null&&item.productType!=='04'" v-on:click='tocontract(item.orderId)'>{{items.contract}}[查看合同]</a>
							</div>
							<div class='pay_state' v-if="items.orderStatus=='03'">
								已完成订单
							</div>
							<div class='pay_state' v-if="items.orderStatus=='04'">
								订单已取消
							</div>
							
						</td>
					</tr>
				</tbody>
				<tbody v-if ='ishasorder==false'>
					<tr><td colspan="7">
						<div class='loading_frame'>
							<img class='loading_img' v-bind:src="loadingImg" v-if='shopStatus==null'>
							<span v-if='shopStatus!==null'>{{shopStatus}}</span>
						</div>
					</td></tr>
				</tbody>
			</table>
		</div>
		
		<div id="order_list" class='pagination'></div>
	</div>
</template>

<script>
	require.ensure(['pagination'], function(){
    }, 'pagination'); // 第三个参数设置打包名称
    
	import Dialog from '../../components/global/dialog'
	import Alert from '../../components/global/Alert'
	var common_tools=require("common_tools");
	export default {
		components: {Dialog,Alert},
		name: 'orderlist',
		data: function () {
            return {
            	orderArray:[],
              	ishasorder:false,
              	component_a:'',
              	alert_options:['',''],	//['标题'，'内容']
              	component_d:'',
              	dialog_option:['',''],	//['标题'，'内容']
              	currentpages:1,
              	dialog_callback:{},
              	current_order_id:'',
              	loadingImg:require('../../public_resource/img/loading.gif'),
              	shopNoImg:require('../../public_resource/img/noimg.png'),
              	shopStatus:null
            }
       	},
      	mounted:function(){
       		require('pagination');
			var _self = this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderByMemberId',{
				    "page": {
				        "currentPage": 1,	//当前页数
				        "pageSize": 6	//页面内容个数
				    }
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log("暂无商品");
	   					
	   				}else if(data.rspCode=='100000'){
	   					if(data.data.resultSet.length==0){
	   						_self.ishasorder=false;
	   						_self.shopStatus='暂无订单';
	   					}else{
	   						_self.pages=data.page;
	   						for(var a=0;a<data.data.resultSet.length;a++){
	   						//初始化数据
		   						var orderItem_Array=[];
		   						var temp_productdetial_of_orderItem_Array=[];
		   						var temp_orderItem_Obj={};
		   						temp_orderItem_Obj.createDate=data.data.resultSet[a].createDate;
		   						temp_orderItem_Obj.trackingNumber=data.data.resultSet[a].trackingNumber;
		   						temp_orderItem_Obj.id=data.data.resultSet[a].id;
		   						temp_orderItem_Obj.productType=data.data.resultSet[a].orderCommoditiesList[0].productType;
		   						temp_orderItem_Obj.contract=data.data.resultSet[a].contract;
		   						temp_orderItem_Obj.orderStatus=data.data.resultSet[a].orderStatus;
		   						temp_orderItem_Obj.orderNo=data.data.resultSet[a].orderNo;
		   						temp_orderItem_Obj.totalPrice=data.data.resultSet[a].totalPrice;			
		   						for(var i=0;i<data.data.resultSet[a].orderCommoditiesList.length;i++){
		   							var temp_productdetial_of_orderItem_Obj=data.data.resultSet[a].orderCommoditiesList[i].product;
		   							temp_productdetial_of_orderItem_Obj.commodityNum=data.data.resultSet[a].orderCommoditiesList[i].commodityNum;
		   							temp_productdetial_of_orderItem_Obj.createDate=data.data.resultSet[a].orderCommoditiesList[i].createDate;
		   							temp_productdetial_of_orderItem_Obj.totalPrice=data.data.resultSet[a].orderCommoditiesList[i].totalPrice;
		   							temp_productdetial_of_orderItem_Obj.productType=data.data.resultSet[a].orderCommoditiesList[i].productType;
		   							temp_productdetial_of_orderItem_Obj.contract=data.data.resultSet[a].orderCommoditiesList[i].contract;
		   							temp_productdetial_of_orderItem_Obj.orderId=data.data.resultSet[a].orderCommoditiesList[i].orderId;
		   							//console.log(temp_productdetial_of_orderItem_Obj);
		   							temp_productdetial_of_orderItem_Array.push(temp_productdetial_of_orderItem_Obj);	
		   						};
		   						temp_orderItem_Obj.productArray=temp_productdetial_of_orderItem_Array;
		   						_self.orderArray.push(temp_orderItem_Obj);
		   						console.log(_self.orderArray);
		   					};
		   					_self.ishasorder=true;
		   					_self.shopStatus=null;
		   					_self.update_order_list();
		   					
	   					};
	   					 
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);		
       		});
		},
      
        methods:{
        	Alert:function(_title,_content){
        		common_tools.Shade_on('orderlist');
        		this.alert_options=[_title,_content];
        		this.component_a=Alert;
        	},
        	alert_emit:function(_val){
        		this.update_order_list_after();
        		common_tools.Shade_off();
        		this.component_a='';
        	},
        	Dialog:function(_title,_content){
        		common_tools.Shade_on('orderlist');
        		this.dialog_option=[_title,_content];
        		this.component_d=Dialog
        	},
        	dialog_emit:function(_val){
        		if(_val==true){
        			this.dialog_callback(this.current_order_id);
        		};
        		this.component_d='';
        		common_tools.Shade_off();
        		
        	},
        	update_order_list_after:function(){
        		//操作后更新列表
        		var _self = this;
        		_self.orderArray=[];
        		_self.ishasorder=false;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderByMemberId',{
					    "page": {
					        "currentPage": _self.currentpages,	//当前页数
					        "pageSize": 6	//页面内容个数
					    }
			       		},function(data){
			   				//success callback
			   				if(data.rspCode!=='100000'){
			   					console.log("暂无商品");
			   					
			   				}else if(data.rspCode=='100000'){
			   					if(data.data.resultSet.length==0){
			   						_self.ishasorder=false;
			   						_self.shopStatus='暂无订单';
			   					}else{
			   						_self.pages=data.page;
			   						console.log(_self.pages);
			   						for(var a=0;a<data.data.resultSet.length;a++){
			   						//初始化数据
				   						var orderItem_Array=[];
				   						var temp_productdetial_of_orderItem_Array=[];
				   						var temp_orderItem_Obj={};
				   						temp_orderItem_Obj.createDate=data.data.resultSet[a].createDate;
				   						temp_orderItem_Obj.trackingNumber=data.data.resultSet[a].trackingNumber;
				   						temp_orderItem_Obj.id=data.data.resultSet[a].id;
			   							temp_orderItem_Obj.productType=data.data.resultSet[a].orderCommoditiesList[0].productType;
				   						temp_orderItem_Obj.contract=data.data.resultSet[a].contract;
				   						temp_orderItem_Obj.orderStatus=data.data.resultSet[a].orderStatus;
				   						temp_orderItem_Obj.orderNo=data.data.resultSet[a].orderNo;
				   						temp_orderItem_Obj.totalPrice=data.data.resultSet[a].totalPrice;			
				   						for(var i=0;i<data.data.resultSet[a].orderCommoditiesList.length;i++){
				   							var temp_productdetial_of_orderItem_Obj=data.data.resultSet[a].orderCommoditiesList[i].product;
				   							temp_productdetial_of_orderItem_Obj.commodityNum=data.data.resultSet[a].orderCommoditiesList[i].commodityNum;
				   							temp_productdetial_of_orderItem_Obj.createDate=data.data.resultSet[a].orderCommoditiesList[i].createDate;
				   							temp_productdetial_of_orderItem_Obj.totalPrice=data.data.resultSet[a].orderCommoditiesList[i].totalPrice;
				   							temp_productdetial_of_orderItem_Obj.contract=data.data.resultSet[a].orderCommoditiesList[i].contract;
				   							temp_productdetial_of_orderItem_Obj.productType=data.data.resultSet[a].orderCommoditiesList[i].productType;
				   							temp_productdetial_of_orderItem_Obj.orderId=data.data.resultSet[a].orderCommoditiesList[i].orderId;
				   							//console.log(temp_productdetial_of_orderItem_Obj);
				   							temp_productdetial_of_orderItem_Array.push(temp_productdetial_of_orderItem_Obj);	
				   						};
				   						temp_orderItem_Obj.productArray=temp_productdetial_of_orderItem_Array;
				   						_self.orderArray.push(temp_orderItem_Obj);
				   						//console.log(_self.orderArray);
				   					_self.shopStatus=null;
				   					_self.ishasorder=true;
			   					};
			   					
			   				};
			   			}},function(data){
			   				//error callback
			   				console.log(data);		
		       		});
   				
      			
        	},
        	tocontract:function(_orderid){
        		this.$router.push({ name:'contract', params: {orderid:_orderid }})
        	},
        	update_order_list:function(_current){
        		//分页函数
        		var _self = this;
      			$('.pagination').pagination({
      				jump:true,
      				coping:true,
					endPage:_self.pages.totalPage,
      				totalData:_self.pages.totalRecord,
       				showData:_self.pages.pageSize,
       				callback:function(e){
       					_self.orderArray=[];
       					_self.ishasorder=false;
       					var currentpages=e.getCurrent();
       					_self.currentpages=currentpages;
       					common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderByMemberId',{
						    "page": {
						        "currentPage": currentpages,	//当前页数
						        "pageSize": 10	//页面内容个数
						    }
				       		},function(data){
				   				//success callback
				   				if(data.rspCode!=='100000'){
				   					console.log("暂无商品");
				   					
				   				}else if(data.rspCode=='100000'){
				   					if(data.data.resultSet.length==0){
				   						_self.ishasorder=false;
				   						_self.shopStatus='暂无订单';
				   					}else{
				   						_self.pages=data.page;
				   						for(var a=0;a<data.data.resultSet.length;a++){
				   						//初始化数据
					   						var orderItem_Array=[];
					   						var temp_productdetial_of_orderItem_Array=[];
					   						var temp_orderItem_Obj={};
					   						temp_orderItem_Obj.createDate=data.data.resultSet[a].createDate;
					   						temp_orderItem_Obj.trackingNumber=data.data.resultSet[a].trackingNumber;
					   						temp_orderItem_Obj.id=data.data.resultSet[a].id;
				   							temp_orderItem_Obj.productType=data.data.resultSet[a].orderCommoditiesList[0].productType;
					   						temp_orderItem_Obj.contract=data.data.resultSet[a].contract;
					   						temp_orderItem_Obj.orderStatus=data.data.resultSet[a].orderStatus;
					   						temp_orderItem_Obj.orderNo=data.data.resultSet[a].orderNo;
					   						temp_orderItem_Obj.totalPrice=data.data.resultSet[a].totalPrice;			
					   						for(var i=0;i<data.data.resultSet[a].orderCommoditiesList.length;i++){
					   							var temp_productdetial_of_orderItem_Obj=data.data.resultSet[a].orderCommoditiesList[i].product;
					   							temp_productdetial_of_orderItem_Obj.commodityNum=data.data.resultSet[a].orderCommoditiesList[i].commodityNum;
					   							temp_productdetial_of_orderItem_Obj.createDate=data.data.resultSet[a].orderCommoditiesList[i].createDate;
					   							temp_productdetial_of_orderItem_Obj.totalPrice=data.data.resultSet[a].orderCommoditiesList[i].totalPrice;
					   							temp_productdetial_of_orderItem_Obj.contract=data.data.resultSet[a].orderCommoditiesList[i].contract;
					   							temp_productdetial_of_orderItem_Obj.productType=data.data.resultSet[a].orderCommoditiesList[i].productType;
					   							temp_productdetial_of_orderItem_Obj.orderId=data.data.resultSet[a].orderCommoditiesList[i].orderId;
					   							//console.log(temp_productdetial_of_orderItem_Obj);
					   							temp_productdetial_of_orderItem_Array.push(temp_productdetial_of_orderItem_Obj);	
					   						};
					   						temp_orderItem_Obj.productArray=temp_productdetial_of_orderItem_Array;
					   						_self.orderArray.push(temp_orderItem_Obj);
					   						//console.log(_self.orderArray);
					   						
					   					_self.ishasorder=true;
					   					_self.shopStatus=null;
				   					};
				   					
				   				};
				   			}},function(data){
				   				//error callback
				   				console.log(data);		
			       		});
       				}
      			})	
        	},
        	reallypay:function(_state,_ID){
        		var state = _state;
        		if(state==null){
        			//this.Alert("提示","您还未上传合同");
        			this.toPay(_ID);
        		}else{
        			
        		};	
        	},
        	toPay:function(_ID){
        		var _self = this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEPay/gpPay',{
		       			"condition": {
		       				"id":_ID
						}
		       		},function(data){
		   				console.log(data.responseText);
		   			},function(data){
		   				console.log(data);
		   				$("div#topayframe").html(data.responseText);
		       		});
        	},
        	del_orderItem:function(_id){
        		this.Dialog('确认删除订单',"您确定要删除订单吗？");
        		this.current_order_id=_id;
        		var _self = this;
        		var temp_function=function(){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/deleteOrder',{
		       			"condition": {
		       				"id":_id
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
        		};
        		this.dialog_callback=temp_function;
        	},
        	cancel_orderItem:function(_id){
        		this.Dialog('确认取消订单',"您确定要取消待支付的订单吗？");
        		this.current_order_id=_id;
        		var temp_function=function(){
        			var _self =this;
        			common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/cancelOrder',{
		       			"condition": {
		       				"id":_id
						}
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('取消订单',data.rspMsg);
		   				}else if(data.rspCode=='100000'){
		   					_self.Alert('取消订单',data.rspMsg);
	
		   				};
		   			},function(data){
		   				//error callback
		   				console.log(data);

		       		});
        		};
        		this.dialog_callback=temp_function;
        		
        	}
        
        	
        }
            
	}
</script>

<style>
	/*div.orderlist_frame table{
		width: 100%;
		height: 32px;
	    line-height: 32px;
	    text-align: center;
	    color: #666;
	    border-collapse:collapse;
	}
	div.orderlist_frame table thead tr{
		background-color: #e5e5e5;
		font-size: 1.4rem;
		height: 40px;
		line-height: 40px;
	}
	div.orderlist_frame table tbody tr.space_tr{
		height: 20px;
		background: #fff;
	}
	div.orderlist_frame table tbody tr.space_tr td{
		border: 0;
	}
	div.orderlist_frame table tbody tr.title td{
		padding: 0 15px;
		background-color: #f5f5f5;
		font-size: 1.4rem;
	}
	div.orderlist_frame table tbody td{
		border:1px #e5e5e5 solid;
		font-size: 1.4rem;
	}*/
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
		width: 10%;
	}
	div.orderlist_frame table td:nth-child(6){
		width: 15%;
	}
	div.orderlist_frame table td:nth-child(7){
		width: 10%;
	}
</style>