<template>
	 <div id="details">
	 	<component v-bind:is="component_a" v-on:alert_emit="alert_emit" :alert_options='alert_options'></component> 
	 	<section>
			<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
		</section>
    	<section>
			<div class='suateam suateam_container_frame'>
				<div class='shopInformationDetail'>
					<div class='shop_show_mainimg'>
						<img class="detail-img" :src="goodsInfo.img" />
						<img class='shopSpeciallStatus' v-if="goodsInfo.specialStatus=='Y'" v-bind:src='specialimg' style="right: 0;width: 150px;">
					</div>
					<div class="detail-right">
						<ul class="right-info">
							<li><h3><strong>{{goodsInfo.name}}</strong></h3>
							<li class="info-price" v-if="goodsInfo.specialStatus=='N'">
								<label>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</label>
								<i style='color: #ff4b5f; font-size: 1.2rem;'>¥</i>
								<span>{{goodsInfo.price|formatNum}}</span>
							</li>
							<li class="info-price" v-if="goodsInfo.specialStatus=='Y'">
								<label>特&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</label>
								<i style='color: #ff4b5f; font-size: 1.2rem;'>¥</i>
								<span>{{goodsInfo.specialPrice|formatNum}}</span>
							</li>
							<li class="info-price" v-if="goodsInfo.specialStatus=='Y'">
								<label>原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</label>
								<i style='color: #ff4b5f; font-size: 1.2rem;'>¥</i>
								<span style="text-decoration:line-through">{{goodsInfo.price|formatNum}}</span>
							</li>
							<li>
								<label>销&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</label>
								<span>最近有<span class='person_num'>{{goodsInfo.sales}}</span>人已购买</span>
							</li>
							<li>
								<label>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存：</label>
								<span>{{goodsInfo.shelfQty}}</span>
							</li>
							<li>
								<label v-if="currCase!==3">选择数量</label>
								<label v-if="currCase==3">服务次数</label>
								<div class="gw_num">
									<span class="jian" @click="counter1>1?counter1-=1:counter1=1">-</span>
									<input type="text" v-model="counter1" class="num" v-on:blur="checkCounter()"/>
									<span class="add" @click="counter1>goodsInfo.shelfQty-1?counter1:counter1++">+</span>
								</div>
							</li>
							<li v-if="currCase==2">
								<label>请选择租赁方式：</label>
								<label v-if='methodsChoices.length==0'>暂无租赁方式</label>
								<select class="choices" style="margin-top:15px;" v-if='methodsChoices.length!==0'>
									<option v-for="item in methodsChoices" v-bind:value="item.id">期限：{{item.name}}年，租金：{{item.price}}元/月，押金：{{item.deposition}}元</option>
								</select>
							</li>
							<li>
								<p class="detail-purchase">
									<button class="bluecolor" @click="purchase(goodsInfo.productCode)">购买</button>
								</p>
							</li>
						</ul>
					</div>
					<div class="detail-content" >
						<ul class="cp-header">
							<li class="active">产品参数<i></i></li>
							<li>产品描述<i></i></li>
						</ul>
						<div class="detail-body">
							<table class="detail-table">
								<tbody>
									<tr v-for="item in detailList">
										<td>{{item.typename}}</td>
										<td>{{item.paramValue}}</td>
									</tr>
								</tbody>
							</table>
							<div v-html="goodsInfo.description" class="goodsInfo_description hide" v-if="goodsInfo.description!==''"></div>
							<div class="goodsInfo_description hide" v-if="goodsInfo.description==''">
								<table class="detail-table">
									<tbody><tr><td>暂无产品描述</td></tr></tbody>
								</table>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	 </div>
</template>
<script>
	var common_tools = require("common_tools");
	import Alert from '../../components/global/Alert'
	export default {
		name: 'details',
		components: {Alert},
		data: function () {
            return {
            	banner:null,
				goodsInfo:'',
				detailList:[],
				counter1:1,
				methodsChoices:[],
				currCase:'',
				getId:'',
				component_a:'',
            	alert_options:['',''],	//['标题'，'内容']
            	alertStatus:null,
            	specialimg:require('../../public_resource/img/goods/sale.png')
			}
        },
		filters:{
			formatNum:function(value){return value.toString().replace(/([0-9])(?=([0-9]{3})+$)/g,'$1,');}
		},
		mounted:function(){
			var _self=this;
			$(window).scrollTop(0);
			$('.cp-header').delegate('li','click',function(){
				$(this).addClass('active').siblings().removeClass('active');
				var activeIndex=$(this).index();
				$('.detail-body').children().eq(activeIndex).show().siblings().hide();
			});
			this.getId=this.$route.params.detail;
			this.currCase=this.$route.params.case;
			common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProductById',{
			    "condition": {
			    	"id":_self.getId
			    }
			},function(data){
				if(data.rspCode=='100000'){
					_self.goodsInfo={
						id:data.data.resultSet.id,
						name:data.data.resultSet.name,
						price:data.data.resultSet.price,
						img:data.data.resultSet.img,
						sellPoint:data.data.resultSet.sellPoint,
						description:data.data.resultSet.description,
						sales:data.data.resultSet.sales,
						shelfQty:data.data.resultSet.shelfQty,
						productCode:data.data.resultSet.productCode,
						specialStatus:data.data.resultSet.specialStatus,
						specialPrice:data.data.resultSet.specialPrice,
					};
					for(var l=0;l<data.data.resultSet.proParValueList.length;l++){
						_self.detailList.push({
							paramValue:data.data.resultSet.proParValueList[l].paramValue,
							typename:data.data.resultSet.proParValueList[l].productParametersType.typename
						});
					};
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
				}
			},function(data){
				console.log(data);
			});
		},
		methods: {
			Alert:function(_title,_content){
        		common_tools.Shade_on('details');
        		this.alert_options=[_title,_content];
        		this.component_a=Alert;
        	},
        	alert_emit:function(_val){
        		common_tools.Shade_off();
        		this.component_a='';
        		if(this.alertStatus==1){
        			this.$router.push('/login');
        		};
        	},
			checkCounter:function(){
				if(this.counter1>=this.goodsInfo.shelfQty){
					this.counter1=this.goodsInfo.shelfQty;
				}else if(this.counter1<1){
					this.counter1=1;
				};
			},
			purchase:function(_productCode){
				var _self=this;
				if(_self.$store.state.islogin==true){
					switch(parseInt(_self.currCase)){
						case 1:
						var sendCondition={
				       		"productType": "01",
				       		"productCode":_productCode,
				       		"commodityNum":_self.counter1
						};
						break;
						case 2:
						var selectId=$('.choices').val();
						var sendCondition={
				       		"productType": "02",
				       		"productCode":_productCode,
				       		"commodityNum":_self.counter1,
				       		"rentTypeId":selectId
						};
						break;
						case 3:
						var sendCondition={
				       		"productType": "03",
				       		"productCode":_productCode,
				       		"commodityNum":_self.counter1
						};
						break;
					};
					common_tools.AJAX('POST',common_tools.interfaceurl+'shoppingCartInfo/addCartCommoditiesDirect',{
				       	"condition": sendCondition
		       		},function(data){
		   				//success callback
		   				if(data.rspCode!=='100000'){
		   					_self.Alert('提示',data.rspMsg);
		   				}else if(data.rspCode=='100000'){
		   					_self.$router.push({name:"order",params:{detail:data.data.id}})
		   				};
		   			},function(data){
		   				//error callback
		   				console.log(data);
		       		});
				}else{
					_self.Alert('提示','请先登录');
					_self.alertStatus=1;
					var tempSetNeedReturnThisPage={
						pageName:"details",
						parm:{getId:_self.getId,currCase:_self.currCase}
					};
					this.$store.commit('setNeedReturnThisPage',tempSetNeedReturnThisPage); 
				};	
			}
		},
	}
</script>
<style>
.hide{
	display:none;
}
.detail-right{
	float:left;
	padding-left:40px;
	font-size: 1.4rem;
}
.right-info label{
	display:inline-block;
	margin-right:14px;
	color:#999;
}
.right-info li:not(:first-child){
	padding-bottom:15px;
}
.right-info h3{
	font-size: 2rem;
    color: #696969;
    margin:16px 0;
}
.info-price i{
	font-style:normal;
	font-size:1.8rem;
	margin-right:4px;
}
.info-price span{
	font-size:1.8rem;
	color: #ff4b5f;
}
.gw_num,.gw_time {
	display:inline-block;
	border: 1px solid #dbdbdb;
	width: 110px;
	line-height: 26px;
	overflow: hidden;
	vertical-align: middle;
}
span.person_num{
	color: #696969;
}
.gw_num span ,.gw_time span{
	display: block;
	height: 26px;
	width: 26px;
	float: left;
	/*color: #7A7979;*/
	border-right: 1px solid #dbdbdb;
	text-align: center;
	cursor: pointer;
	background:#ededed;
	font-size: 1.8rem;
	font-weight:bold;
	color:#3c3c3c;
	-webkit-user-select: none;
	-moz-user-select: none;
}

.gw_num .num,.gw_time .num {
	display: block;
	float: left;
	text-align: center;
	width: 52px !important;
	min-width: 0px !important;
	height:26px;
	font-style: normal;
	padding:0;
	line-height: 24px;
	border: 0;
}

.gw_num span.add,.gw_time span.add {
	float: right;
	border-right: 0;
	border-left: 1px solid #dbdbdb;
}
/*.detail-purchase{
	padding:10px 0 0 40px;
	margin:0;
}*/
/*.detail-purchase button{
	padding:0.8rem 3rem;
	font-size:1.8rem;
}*/
.detail-content{
	margin-top: 50px;
	padding:0;
	float: left;
	box-sizing: border-box;
	width: 100%;
}
.detail-content p{
	position:relative;
	margin:0;
	padding:0;
}
.cp-header{
	height:40px;
	line-height:40px;
	font-size:1.4rem;
	background:#eee;
	color:#666;
}
.cp-header li{
	display:inline-block;
	width:88px;
	text-align:center;
	position:relative;
	cursor:pointer;
}
.cp-header li.active{
	background:#2196f3;
	color:#fff;
}
.cp-header li i{
	position:absolute;
	bottom:-12px;
	left:40px;
	width:0px;
	height:0px;
	border:6px solid transparent;
	border-top:6px solid #2196f3;
	display:none;
}
.cp-header li.active i{
	display:block
}
.detail-body{
	padding:18px 0;
	width: 100%;
	float: left;
}
.detail-table{
	width:100%;
}
.detail-table td{
	border:1px solid #ddd;
	text-align: left; 
	padding-left: 20px;
}
.detail-table tr td:first-child{
	width:20%;
}
div.shop_show_mainimg{
	position: relative;
    float: left;
    display: block;
    padding: 3px;
    border: 1px #ddd solid;
    box-sizing: border-box;
    width: 400px;
    height: 400px;
    overflow: hidden;
}
div.shop_show_mainimg img.detail-img{
	width:100%;
	float:left;
}
div.shopInformationDetail{
	float: left;
	width: 100%;
	box-sizing: border-box;
	padding: 36px;
}
div.goodsInfo_description{
	float: left;
	width: 100%;
}
div.goodsInfo_description img{
	width: 100%;
}
</style>