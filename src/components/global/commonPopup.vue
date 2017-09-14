<template>
	<div class="popup">
		<div id='topayframe'></div>
		<component v-bind:is="component_a" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component>
		<component v-bind:is="component_d" v-on:dialog_emit="dialog_emit" :dialog_options='dialog_option'></component> 
		<div class="popup-modal">
			<img v-if="currCase!=4" v-bind:src="goodsInfo.img" />
			<br />
			<span v-if="currCase!=4" style="display:inline-block;font-size:1.8rem;padding:8px;">{{goodsInfo.name}}</span>
			<ul v-if='currCase==1' class='goodsNumUl'>
				<li><span>商品单价：</span><span class='total-price'>¥<i>{{goodsInfo.price}}</i></span></li>
				<li><span>销&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span><span class='total-price'><i>{{goodsInfo.sales}}</i></span></li>
				<li><span>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存：</span><span class='total-price'><i>{{goodsInfo.shelfQty}}</i></span></li>
				<li>
					<span>购买数量：</span>
					<div class="gw_num">
						<span class="jian" @click="counter1>1?counter1-=1:counter1=1">-</span>
						<input type="text" v-model="counter1" class="num" />
						<span class="add" @click="counter1+=1">+</span>
					</div>
				</li>
			</ul>
			<ul v-if='currCase==2' class='goodsNumUl goods-lease'>
				<li><span>销&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span><span class='total-price'><i>{{goodsInfo.sales}}</i></span></li>
				<li><span>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存：</span><span class='total-price'><i>{{goodsInfo.shelfQty}}</i></span></li>
				<li>
					<span>租赁数量：</span>
					<div class="gw_num">
						<span class="jian" @click="counter2>1?counter2-=1:counter2=1">-</span>
						<input type="text" v-model="counter2" class="num" />
						<span class="add" @click="counter2+=1">+</span>
					</div>
				</li>
				<li>
					<span>请选择方式：</span>
					<br />
					<select class="choices">
						<option v-for="item in methodsChoices" v-bind:value="item.id">期限：{{item.name}}，租金：{{item.price}}，押金：{{item.deposition}}</option>
					</select>
				</li>
				
			</ul>
			<ul v-if='currCase==3' class='goodsNumUl'>
				<li><span>商品单价：</span><span class='total-price'>¥<i>{{goodsInfo.price}}</i></span></li>
				<li><span>销&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span><span class='total-price'><i>{{goodsInfo.sales}}</i></span></li>
				<li><span>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存：</span><span class='total-price'><i>{{goodsInfo.shelfQty}}</i></span></li>
				<li>
					<span>购买数量：</span>
					<div class="gw_num">
						<span class="jian" @click="counter3>1?counter3-=1:counter3=1">-</span>
						<input type="text" v-model="counter3" class="num" />
						<span class="add" @click="counter3+=1">+</span>
					</div>
				</li>
			</ul>
			<ul v-if='currCase==4' class='goodsNumUl'>
				<!-- 社区 订阅   -->
				<li style="text-align:center;font-size:1.8rem;">资讯订阅</li>
				<!--<li id="currCase_frame">
					<div class='currCase_select'>
						<select id ='currCase_select_tag1' @change='currCase_select_tag(1,$event.target)'>
							<option v-for='items in currCase_orderTagArray' v-bind:id="items.id" v-bind:value="items.id">{{items.name}}</option>
						</select>
						<select id ='currCase_select_tag2' @change='currCase_select_tag(2,$event.target)' v-if='select2==true'>
							<option v-for='items in currCase_orderTagArray2' v-bind:id="items.id" v-bind:value="items.id">{{items.name}}</option>
						</select><span class='del_ico' v-if='select2==true&&select3==false' v-on:click="del_currCase_select(2)">×</span>
						<select id ='currCase_select_tag3' @change='currCase_select_tag(3,$event.target)' v-if='select3==true'>
							<option v-for='items in currCase_orderTagArray3' v-bind:id="items.id" v-bind:value="items.id">{{items.name}}</option>
						</select><span class='del_ico' v-if='select3==true' v-on:click="del_currCase_select(3)">×</span>
					</div>
					<p style="text-align: center;color:#0099CC;cursor:pointer" v-on:click="add_currCase_select()" v-if='select3!==true'>多行业定制</p>
					
					
				</li>-->
				<!--<li>
					<span>订阅价格：</span>
					<span class='total-price'>¥<i>{{currCase_total_price}}</i></span>
				</li>-->
				<li>
					<div class='suateam_select_frame'>
    					<label>行业选择:</label>
    					<select v-model='industry_name' @change='changeindustry($event.target)'>
    						<option v-for='items in industryArray' v-bind:id='items.id'>{{items.name}}</option>
    					</select>
    				</div>
    				<span>订阅价格：</span>
					<span class='total-price'>¥<i>{{currCase_total_price}}</i></span>
				</li>
				<div class='commonPopup_btn_containter'>
					<span class="seeMore" @click="isShow">我再看看</span>
					<button class='getScheme bluecolor' @click="currCase_sendinfo()">我要订阅</button>
				</div>
			</ul>
			<div class='commonPopup_btn_containter' v-if='currCase!=4'>
				<span class="seeMore" @click="isShow">我再看看</span>
				<button class='getScheme bluecolor' @click="purchase(getId)">购买</button>
			</div>
		</div>
	</div>
</template>

<script>
var common_tools=require("common_tools");
import Dialog from './dialog';
import Alert from './alert';
	export default {
		props: ['currCase','getId'],
		components: {Dialog,Alert},
		mounted:function(){
			var _self = this;
			if(this.currCase==4){
				//资讯订单弹窗
				common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbTag/listSuateamEbTag',{
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log(data);
	   				}else if(data.rspCode=='100000'){
   						_self.industryArray=data.data.resultSet;
   						_self.industry_id=data.data.resultSet[0].id;
   						_self.industry_name=data.data.resultSet[0].name;
   						_self.checkprice();
					};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
				
//      		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbTag/listSuateamEbTag',{
//	       		},function(data){
//	   				//success callback
//	   				if(data.rspCode!=='100000'){
//	   				}else if(data.rspCode=='100000'){
//	   					_self.currCase_getTagArray=data.data.resultSet;
//	   					for(var x=0;x<data.data.resultSet.length;x++){
//	   						if(data.data.resultSet.order!==true){
//	   							var temporderobj={
//									id:data.data.resultSet[x].id,
//									price:data.data.resultSet[x].price,
//									name:data.data.resultSet[x].name,
//									order:data.data.resultSet[x].order
//								};
//	   						};
//							_self.currCase_orderTagArray.push(temporderobj);
//							_self.currCase_orderTag1=_self.currCase_orderTagArray[0].id;
//	   					}	
////	   					_self.checkprice();
//	   				};
//	   			},function(data){
//	   				//error callback
//	   				console.log(data);	   				
//	       		});
			}else{
				//单品汇、产品租赁、全息服务弹窗
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProductById',{
				    "condition": {"id":_self.getId}
				},function(data){
					if(data.rspCode=='100000'){
						_self.goodsInfo={
							name:data.data.resultSet.name,
							price:data.data.resultSet.price,
							img:data.data.resultSet.img,
							sales:data.data.resultSet.sales,
							shelfQty:data.data.resultSet.shelfQty
						}
						for(var l=0;l<data.data.resultSet.productRenttypeList.length;l++){
							_self.methodsChoices.push({
								id:data.data.resultSet.productRenttypeList[l].id,
								name:data.data.resultSet.productRenttypeList[l].name,
								price:data.data.resultSet.productRenttypeList[l].price,
								deposition:data.data.resultSet.productRenttypeList[l].deposition
							});
						};
					}else if(data.rspCode!=='100000'){
						console.log("暂无商品");
					};
				},function(data){
					console.log(data);
				});
			};
		},
		data:function(){
			return {
				counter1:1,
				counter2:1,
				counter3:1,
				counter4:1,
				select3:false,
				select2:false,
				currCase_getTagArray:[],
				currCase_orderTagArray:[],
				currCase_orderTagArray2:[],
				currCase_orderTagArray3:[],
				currCase_orderTag1:'',
				currCase_orderTag2:'',
				currCase_orderTag3:'',
				currCase_total_price:'请稍后…',
				currCase_total_price_orderID:'',
				currCase_orderNo:'',
				currCase_productName:'',
				currCase_totalPrice:'',
				currCase_productTypeName:'',
				component_d:'',
              	dialog_option:['',''],	//['标题'，'内容']
              	component_a:'',
            	alert_options:['',''],	//['标题'，'内容']
              	isordersucess:false,
              	goodsInfo:'',
              	methodsChoices:[],
              	selectedId:'',
              	industry_id:'',
            	industry_name:'',
            	industryArray:[]
			}
		},
		methods:{
			isShow:function(){
				this.$emit('closeModal','false');
			},
			Dialog:function(_title,_content){
        		this.component_d=Dialog;
        		this.dialog_option=[_title,_content];
        	},
        	dialog_emit:function(_val){
        		if(_val==true&&this.isordersucess==true){
        			this.toPay();
        		}else{
        			this.component_d='';
        		};
        	},
        	Alert:function(_title,_content){
        		this.alert_options=[_title,_content];
        		this.component_a=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_a='';
        		this.isShow();
        	},
        	toPay:function(){
        		//去支付--调用银行支付
        		var _self = this;
        		var _orderNo =_self.currCase_orderNo;
//      		var _productType=_self.currCase_productTypeName;
//      		var _name=_self.currCase_productName;
//      		var _totalPrice=_self.currCase_totalPrice;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEPay/gpPay',{
	       			"condition": {
	       				"id":_orderNo
					}
	       		},function(data){
	   				console.log(data.responseText);
	   			},function(data){
	   				$("div#topayframe").html(data.responseText);
	       		});
        	},
//			add_currCase_select:function(){
//				//三联动添加暂不使用
//				if(this.select2==false){
//					this.select2=true;
//					$("#currCase_select_tag1").attr("disabled","disabled");
//					$("#currCase_select_tag1").css("color","#ddd");
//					this.currCase_orderTagArray2=[];
//					for(var a=0;a<this.currCase_orderTagArray.length;a++){
//						if(this.currCase_orderTagArray[a].id!==this.currCase_orderTag1){
//							this.currCase_orderTagArray2.push(this.currCase_orderTagArray[a]);
//						};
//					};
//					this.currCase_orderTag2=this.currCase_orderTagArray2[0].id;
//					this.checkprice();
//				}else if(this.select2==true&&this.select3==false){
//					$("#currCase_select_tag2").attr("disabled","disabled");
//					$("#currCase_select_tag2").css("color","#ddd");
//					this.select3=true;
//					this.currCase_orderTagArray3=[];
//					for(var a=0;a<this.currCase_orderTagArray2.length;a++){
//						if(this.currCase_orderTagArray2[a].id!==this.currCase_orderTag2){
//							this.currCase_orderTagArray3.push(this.currCase_orderTagArray2[a]);	
//						};
//					};
//					this.currCase_orderTag3=this.currCase_orderTagArray3[0].id;
//					this.checkprice();
//				};
//			},
//			del_currCase_select:function(_val){
//				//三联动删除暂不使用
//				if(_val==3){
//					$("#currCase_select_tag2").removeAttr("disabled");
//					$("#currCase_select_tag2").css("color","");	
//					this.currCase_orderTag3='';
//					this.select3=false;
//					this.checkprice();
//				}else if(_val==2){
//					$("#currCase_select_tag1").removeAttr("disabled");
//					$("#currCase_select_tag1").css("color","");	
//					this.currCase_orderTag2='';
//					this.select2=false;
//					this.checkprice();
//				}
//			},
//			currCase_select_tag:function(_index,_target){
//				//三联动选择暂不使用
//				var getchange_id=_target.selectedOptions[0].id;
//				switch (_index){
//				case 1:
//					this.currCase_orderTagArray2=[];
//					for(var a=0;a<this.currCase_orderTagArray.length;a++){
//						if(this.currCase_orderTagArray[a].id!==getchange_id){
//							this.currCase_orderTagArray2.push(this.currCase_orderTagArray[a]);
//						};
//					};
//					this.currCase_orderTag1=getchange_id;
//					this.checkprice();
//					break;
//				case 2:
//					this.currCase_orderTagArray3=[];
//					for(var a=0;a<this.currCase_orderTagArray2.length;a++){
//						if(this.currCase_orderTagArray2[a].id!==getchange_id){
//							this.currCase_orderTagArray3.push(this.currCase_orderTagArray2[a]);
//						};
//					};
//					this.currCase_orderTag2=getchange_id;
//					this.checkprice();
//					break;
//				case 3:
//					this.currCase_orderTag3=getchange_id;
//					this.checkprice();
//					break;
//				};	
//			},
			changeindustry:function(_target){
        		this.industry_id=_target.options[_target.selectedIndex].id;
        		this.checkprice();
        	},
			checkprice:function(){
				//获得资讯订单价格
				var _self = this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbTag/getPrice',{
	       			"condition": {
 						"tagId":_self.industry_id
 					}
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log(data);
	   				}else if(data.rspCode=='100000'){
	   					_self.currCase_total_price=data.data.totalPrice;
//	   					if(data.data!=null&&data.data.totalPrice==null){
//	   						_self.Alert("提示",data.data.rspMsg);
//	   					}else{
//	   						_self.Alert("提示",data.rspMsg);
//	   					};
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);	   				
	       		});
			},
			currCase_sendinfo:function(){
				//提交资讯订单
				var _self = this;
        		common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbTag/orderTags',{
	       			"condition": {
 						"tagIds": [_self.industry_id]
 					}
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					_self.Dialog("订阅",data.rspMsg)
	   					_self.isordersucess=false;
	   				}else if(data.rspCode=='100000'){
	   					_self.currCase_total_price_orderID=data.data.orderId;
	   					common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderById',{
			       			"condition": {
		 						"id": _self.currCase_total_price_orderID
		 					}
			       		},function(data){
			   				//success callback
			   				if(data.rspCode!=='100000'){
			   					if(data.data!=null){
			   						_self.Alert("提示",data.data.rspMsg);
			   					}else{
			   						_self.Alert("提示",data.rspMsg);
			   					};
			   				}else if(data.rspCode=='100000'){
			   					_self.isordersucess=true;
			   					_self.currCase_orderNo=data.data.resultSet.id;
//								_self.currCase_productName=data.data.resultSet.orderCommoditiesList[0].product.name;
//		   						_self.currCase_totalPrice=data.data.resultSet.orderCommoditiesList[0].totalPrice;
//		   						_self.currCase_productTypeName=data.data.resultSet.orderCommoditiesList[0].productName;
			   		
			   				};
			   			},function(data){
			   				//error callback
			   				console.log(data);
			       		});
	   					
						_self.Dialog("订阅成功","您已成功订阅");
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	   				
	   				
	       		});
			},
//			purchase:function(_id){
//				var _self=this;
//				if(_self.$store.state.islogin==true){
//					var gw_num=$(".gw_num").children('input').val();
//					switch(_self.currCase){
//						case 1:
//							var sendCondition={
//					       		"productType": "01",
//					       		"productId":_self.getId,
//					       		"commodityNum":gw_num
//							};
//						break;
//						case 2:
//							var selectId=$('.goods-lease .choices').val();
//							var sendCondition={
//					       		"productType": "02",
//					       		"productId":_self.getId,
//					       		"commodityNum":gw_num,
//					       		"rentTypeId":selectId
//							};
//						break;
//						case 3:
//							var sendCondition={
//					       		"productType": "03",
//					       		"productId":_self.getId,
//					       		"commodityNum":gw_num
//							};
//						break;
//					}
//					common_tools.AJAX('POST',common_tools.interfaceurl+'shoppingCartInfo/addCartCommoditiesDirect',{
//				       	"condition": sendCondition
//		       		},function(data){
//		       			console.log(data);
//		   				//success callback
//		   				if(data.rspCode!=='100000'){
//		   					
//		   					console.log(sendCondition);
//		   				}else if(data.rspCode=='100000'){
//		   					console.log(data.data.id);
//		   					_self.$router.push({name:"order",params:{detail:data.data.id}})
//		   				};
//		   			},function(data){
//		   				//error callback
//		   				console.log(data);	
//		       		});
//				}else{
//					_self.Alert('提示','请先登录');
//					_self.$router.push('/login');
//				}
//				
//			}
		}
	}
</script>

<style>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, .3);
	z-index: 999999;
}
.popup-modal {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 360px;
	transform: translate(-50%, -50%);
	background: #fff;
	border-radius: 5px;
	text-align: center;
	padding: 4px 0;
}

.popup-modal img {
	width: 97%;
}

.goodsNumUl>li{
	text-align: left;
	padding:6px 0;
}
.goodsNumUl>li>span{
	display:inline-block;
	width:33%;
	text-align:left;
	margin-left:20%;
	font-size: 1.4rem;
	color: #696969;
}
.goodsNumUl>li .total-price{
	margin-left:5%;
}
.total-price i{
	font-style:normal;
	padding-left:4px;
}
.gw_num,.gw_time {
	display:inline-block;
	border: 1px solid #dbdbdb;
	width: 110px;
	line-height: 26px;
	overflow: hidden;
	vertical-align: middle;
}

.gw_num span ,.gw_time span{
	display: block;
	height: 26px;
	width: 26px;
	float: left;
	color: #7A7979;
	border-right: 1px solid #dbdbdb;
	text-align: center;
	cursor: pointer;
}

.gw_num .num,.gw_time .num {
	display: block;
	float: left;
	text-align: center;
	width: 52px !important;
	min-width: 0px !important;
	height:26px;
	font-style: normal;
	font-size: 1.4rem;
	padding:0;
	line-height: 24px;
	border: 0;
}

.gw_num span.add,.gw_time span.add {
	float: right;
	border-right: 0;
	border-left: 1px solid #dbdbdb;
}
.seeMore{
	float:left;
	font-size:1.4rem;
	color:#aaa;
	cursor:pointer;
	position:relative;
	top:6px;
}
.getScheme{
	float:right;
}
	span.del_ico{
	float: right;
	cursor: pointer;
	width: 32px !important;
	height: 32px !important;
	line-height: 32px;
	text-align: center !important;
	margin: 5px 0;
	color: darkred;
}
select#currCase_select_tag1,select#currCase_select_tag2,select#currCase_select_tag3{
	float: left;
	width: 85%;
	margin: 5px 0;
}
div.currCase_select{
	display: table;
	margin: 0 auto;
	width: 70%;
}
.goods-lease>li>span {
	width:30%;
	margin-left:14%;
}
ul.goods-lease>li>select{
	width:70%;
	margin:0 auto;
	font-size:1.2rem;
	margin-top:14px;
}
div.commonPopup_btn_containter{
	float: left;
	width: 100%;
	margin: 12px 0;
	box-sizing: border-box;
	padding: 0 60px;
}
</style>