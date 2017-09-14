<template>
	 <div id="contract">
	 	<component v-bind:is="component" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
    	<section>
	    	<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
    	</section>
    	<section>
    		<div class='suateam suateam_container_frame'>
    			<label class='table_label'>{{label_title}}</label>
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
						<tbody v-for ='items in orderArray'>
							<tr class='space_tr'><td colspan="7"></td></tr>
							<tr class='title'><td colspan="7">
								<span style="float: left;">订单号：{{items.orderNo}}</span>
								
								<!--<span style="float: right; margin-right: 20px;">共计：{{items.totalPrice}}元</span>-->
								
							</td></tr>
							<tr v-for ='(item, index) in items.productArray'>
								<td ><img v-bind:src='item.img' class='shop_img'></td>
								<td>{{item.name}}</td>
								<td>{{item.price}}</td>
								<td>{{item.commodityNum}}</td>
								<td>{{item.createDate}}</td>
								<td>{{item.totalPrice}}</td>
								<td>
									<span v-if='items.contrAddr2==null&&items.contrAddr1!==null' class='contract_up red'>*未上传合同文本</span>
									<span v-if='items.contrAddr1==null&&items.contrAddr2==null&&items.contrAddr3==null' class='contract_up red'>*未下载合同</span>
									<span v-if='items.contrAddr2!==null&&items.contrAddr1!==null&&items.contrAddr3==null' class='contract_up green'>√已上传合同文本</span>
									<span v-if='items.contrAddr3!==null' class='contract_up green'>√最终合同下载</span>
									<button class='bluecolor' v-on:click='downcontract(items.id)' style="margin-bottom: 10px;">下载合同</button>
									<span style="display: block; cursor: pointer; font-size: 1.2rem;line-height: 16px;" v-if='items.contrAddr1!==null&&items.contrAddr2==null' v-on:click='upcontract(items.id)'>上传合同</span>
										
								</td>
							</tr>
							<tr class='space_tr'><td colspan="7">
								<span class='contractState' v-if='items.contrAddr2!==null&&items.contrAddr1!==null&&items.contrAddr3==null'>尊敬的赛鳌用户，您好！您的合同我们已收到，正在快速审核盖章中，请耐心等待</span>
							</td></tr>
						</tbody>
					</table>
					
				</div>
				
				<div class='contract_up_frame' v-if='contract_up_frame==true'>
					<label class='suateam_alert_title'>
						<span>上传合同</span>
					</label>
					
					<Upfile v-on:upfile_emit="upfile_emit" :upfile_option="['png,jpeg','5120']" style='margin: 20px 25px; float: left;'></Upfile>
					<div class ='suateam_input_frame_btn2' style=" width:125px;">
						<button class='bluecolor' v-on:click='contract_confirm()'>确定</button>
						<button class='greycolor' v-on:click='contract_cancel()'>取消</button>
					</div>
				</div>
				<div class='contractTips'>
    				<p class='contractTips_title'>合同下载注意事项</p>
    				<div class='contractTips_content'>
    					<span>尊敬的赛鳌用户，您好！感谢您在我们的平台订购安全产品，为更好的保障双方权益，建议您下载对应产品的合同。具体如下：</span>
						<span>1、合同查找：进入订单详情，查找对应产品的订单，点击查看合同</span>
						<span>2、合同下载：点击下载合同按钮，下载对应合同并查看合同内容、金额等信息，如有问题请及时联系在线客服人员</span>
						<span>3、合同盖章：合同核查无误后，盖公司章</span>
						<span>4、合同上传：进入订单详情，查找对应产品的订单，点击查看合同页面后，点击上传合同按钮将盖章合同进行上传</span>
						<span>5、合同终版下载：合同上传成功后，我司将在5个工作日内盖章并上传，您可进行下载</span>
						<span>注：合同的上传进度不影响订单的成交，为保障您能及时收到货物，建议您先进行支付，过程中如有问题可随时联系在线客服或拨打客服热线。</span>
    					
    				</div>
    			</div>
    		</div>
    		
    	</section>
    	
	 	
	 </div>
</template>
<script>
	var common_tools=require("common_tools");
	import Upfile from '../../components/global/upfile';
	import Alert from '../../components/global/alert';
	export default {
		components: {Upfile,Alert},
		name: 'contract',
		data: function () {
            return {
            	label_title:'合同信息',
            	orderArray:[],
            	upfileurl:null,
            	currentorderid:null,
            	banner:null,
            	component:{},
            	alert_options:'',
            	contract_up_frame:false,
            	current_order_id:''
            }
      	},
      	mounted:function(){
			var order_id=common_tools.GetParam();
			this.current_order_id=order_id;
			var _self = this;
			if(1){
				common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderById',{
					"condition": {
						"id": order_id
						}
	       			},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					
	   				}else if(data.rspCode=='100000'){
		   						var orderItem_Array=[];
		   						var temp_productdetial_of_orderItem_Array=[];
		   						var temp_orderItem_Obj={};
		   						temp_orderItem_Obj.createDate=data.data.resultSet.createDate;
		   						temp_orderItem_Obj.id=data.data.resultSet.id;
		   						temp_orderItem_Obj.contrAddr1=data.data.resultSet.contrAddr1;
		   						temp_orderItem_Obj.contrAddr2=data.data.resultSet.contrAddr2;
		   						temp_orderItem_Obj.contrAddr3=data.data.resultSet.contrAddr3;
		   						temp_orderItem_Obj.productType=data.data.resultSet.orderCommoditiesList[0].productType;
		   						temp_orderItem_Obj.contract=data.data.resultSet.contract;
		   						temp_orderItem_Obj.orderStatus=data.data.resultSet.orderStatus;
		   						temp_orderItem_Obj.orderNo=data.data.resultSet.orderNo;
		   						temp_orderItem_Obj.totalPrice=data.data.resultSet.totalPrice;	
		   						console.log(temp_orderItem_Obj);
		   						for(var i=0;i<data.data.resultSet.orderCommoditiesList.length;i++){
		   							var temp_productdetial_of_orderItem_Obj=data.data.resultSet.orderCommoditiesList[i].product;
		   							temp_productdetial_of_orderItem_Obj.commodityNum=data.data.resultSet.orderCommoditiesList[i].commodityNum;
		   							temp_productdetial_of_orderItem_Obj.createDate=data.data.resultSet.orderCommoditiesList[i].createDate;
		   							temp_productdetial_of_orderItem_Obj.totalPrice=data.data.resultSet.orderCommoditiesList[i].totalPrice;
		   							temp_productdetial_of_orderItem_Obj.id=data.data.resultSet.orderCommoditiesList[i].id;
		   							temp_productdetial_of_orderItem_Obj.contract=data.data.resultSet.orderCommoditiesList[i].contract;
		   							console.log(temp_productdetial_of_orderItem_Obj.id);
		   							temp_productdetial_of_orderItem_Array.push(temp_productdetial_of_orderItem_Obj);	
		   						};
		   						temp_orderItem_Obj.productArray=temp_productdetial_of_orderItem_Array;
		   						_self.orderArray.push(temp_orderItem_Obj);
		   						console.log(_self.orderArray);
		   					
	   				};
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
			}else{
				this.$router.push({name:'notfound'})
			}
			
		},
		methods:{
        	Alert:function(_title,_content){
        		this.alert_options=[_title,_content];
        		this.component=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component='';
        	},
        	upfile_emit:function(_val){
        		this.upfileurl=_val;
        	},
        	contract_cancel:function(){
        		//取消合同上传
        		this.upfileurl=null;
        		this.contract_up_frame=false;
        		common_tools.Shade_off();
        	},
        	to_pay:function(){
        		this.$router.push('/orderlist');
        	},
        	contract_confirm:function(){
        		//确定合同上传
        		console.log(this.currentorderid);
        		var _self = this;
        		if(this.upfileurl!==null){
        			common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/uploadOrderContract',{
		       			"condition": {
					        "id": _self.currentorderid,
					        "contrAddr2": _self.upfileurl
					    }
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					
		   				}else if(data.rspCode=='100000'){
		   					_self.contract_up_frame=false;
		   					_self.updatalist();
		   					_self.Alert("上传合同",data.rspMsg);
		   				};
		   			},function(data){
		   				//error callback
		   				console.log(data);
		   				
		       		});
        		};	
        	},
        	upcontract:function(_id){
        		//打开上传文件模块
        		this.currentorderid=_id;
        		console.log(this.currentorderid);
        		common_tools.Shade_on('contract');
        		this.contract_up_frame=true;
        	},
        	updatalist:function(){
        		var _self = this;
        		_self.orderArray=[];
				common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderById',{
					"condition": {
						"id": _self.current_order_id
						}
	       			},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					
	   				}else if(data.rspCode=='100000'){
   						var orderItem_Array=[];
   						var temp_productdetial_of_orderItem_Array=[];
   						var temp_orderItem_Obj={};
   						temp_orderItem_Obj.createDate=data.data.resultSet.createDate;
   						temp_orderItem_Obj.id=data.data.resultSet.id;
   						temp_orderItem_Obj.contrAddr1=data.data.resultSet.contrAddr1;
   						temp_orderItem_Obj.contrAddr2=data.data.resultSet.contrAddr2;
   						temp_orderItem_Obj.contrAddr3=data.data.resultSet.contrAddr3;
   						temp_orderItem_Obj.productType=data.data.resultSet.orderCommoditiesList[0].productType;
   						temp_orderItem_Obj.contract=data.data.resultSet.contract;
   						temp_orderItem_Obj.orderStatus=data.data.resultSet.orderStatus;
   						temp_orderItem_Obj.orderNo=data.data.resultSet.orderNo;
   						temp_orderItem_Obj.totalPrice=data.data.resultSet.totalPrice;	
   						console.log(temp_orderItem_Obj);
   						for(var i=0;i<data.data.resultSet.orderCommoditiesList.length;i++){
   							var temp_productdetial_of_orderItem_Obj=data.data.resultSet.orderCommoditiesList[i].product;
   							temp_productdetial_of_orderItem_Obj.commodityNum=data.data.resultSet.orderCommoditiesList[i].commodityNum;
   							temp_productdetial_of_orderItem_Obj.createDate=data.data.resultSet.orderCommoditiesList[i].createDate;
   							temp_productdetial_of_orderItem_Obj.totalPrice=data.data.resultSet.orderCommoditiesList[i].totalPrice;
   							temp_productdetial_of_orderItem_Obj.id=data.data.resultSet.orderCommoditiesList[i].id;
   							temp_productdetial_of_orderItem_Obj.contract=data.data.resultSet.orderCommoditiesList[i].contract;
   							temp_productdetial_of_orderItem_Array.push(temp_productdetial_of_orderItem_Obj);	
   						};
   						temp_orderItem_Obj.productArray=temp_productdetial_of_orderItem_Array;
   						_self.orderArray.push(temp_orderItem_Obj);
		   					
	   				}
	   			},function(data){
	   				//error callback
	   				console.log(data);
	       		});
        	},
        	downcontract:function(_id){
        		//下载合同
        		var _self = this;
	    		common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/downloadOrderContract',{
	       			"condition": {
						"id":_id
					}
	       		},function(data){
	   				//success callback
	   				if(data.rspCode!=='100000'){
	   					console.log(data)
	   				}else if(data.rspCode=='100000'){
	   					window.location.href=data.data.resultSet;
	   					_self.updatalist();
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
	span.contract_up.red{
		color: red;
		font-size: 1.2rem;
	}
	span.contract_up.green{
		color: green;
		font-size: 1.2rem;
	}
	div.contract_up_frame{
		width: 300px;
	    height: 164px;
	    position: fixed;
	    left: 50%;
	    top: 50%;
	    margin-left: -150px;
	    margin-top: -82px;
	    box-shadow: 1px 1px 5px #999;
	    background-color: #fff;
	    z-index: 9999;
	}
	span.contractState{
		color: green
	}
	div.contract_up_frame label{
		background-color: #f5f5f5;
		width: 100%;
		float: left;
		box-sizing: border-box;
		padding: 0 20px;
		height: 40px;
		line-height: 40px;
		color: #666;
		overflow: hidden;
		-webkit-user-select: none;
}
	div.contractTips{
		border:1px #144d69 solid;
		border-radius: 8px;
		min-height: 100px;
		width: 100%;
		background-color: #c5edec;
		box-sizing: border-box;
		padding: 10px 100px 30px 100px;
		float: left;
		margin: 50px 0;
		color: #144d69;
		font-size: 1.4rem;
	}
	p.contractTips_title{
		color: #144d69;
		font-size: 1.8rem;
		text-align: center;
		font-weight: 700;
	}
	div.contractTips_content span{
		float: left;
		clear: both;
		line-height: 1.8;
	}
</style>