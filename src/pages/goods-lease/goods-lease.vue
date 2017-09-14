<template>
	<div id='goods-lease'>
		<section>
			<div class='section suateam_banner' v-bind:style="{backgroundImage:banner}" :class='{suateam_banner_hasbanner:banner!=null}'>
	    	</div>
		</section>
		<section class="searchShopFrame">
			<div class='suateam suateam_container_frame' style="padding:36px 36px 0 36px;min-height: 100px;">
				<div class='search_frame'>
					<i class='search'></i>
					<input class='search_input' type='text' v-model='searchShopString' placeholder="请输入要搜索的商品" @keyup.enter="searchShop()"/>
					<button class='search_btn' v-on:click='searchShop()'>搜&nbsp;&nbsp;索</button>
					<i class='del' v-if="searchShopString!==''" v-on:click="searchShopString=''">×</i>
				</div>
			</div>
		</section>
		<section class="goods-list" v-if='isShowHotProduct==true'>
			<div class='suateam suateam_container_frame' style="padding:0 36px;">
				<div class="goods-title">
					<span>热门产品</span>
					<img v-bind:src="fireSrc" />
				</div>
				<ul class='goodsUl' v-if='sinHotHasData==true'>
					<li v-for='(item,index) in sinHotItems' @mouseenter="isActive1=index" @mouseleave="isActive1=null" :class="{active:isActive1==index}" >
						<div class='goods-content' @click="goToDetails(item.id)">
							<img v-if="item.specialStatus=='Y'" v-bind:src='specialimg' class='shopSpeciallStatus'>
							<div class='goods-img'>
								<img v-bind:src="item.img" alt="" />
							</div>
							<span class='goods-title'>{{item.name}}</span>
							<div class='goods-text' v-html="item.sellPoint"></div>
							<div class='goods-price'>
								<span>{{item.price | formatNum}}&nbsp;RMB</span>
							</div>
						</div>
						<!--<div class='goods-purchase' @click="ispopup(item.id)">
							租赁
						</div>-->
					</li>
				</ul>
				<div class='loading_frame' v-if='sinHotHasData==false'>
					<img class='loading_img' v-bind:src="loadingImg">
					<span>请稍等……</span>
				</div>
			</div>
		</section>
		<section class="section-goods">
			<div class='suateam suateam_container_frame' style="padding:0 36px;min-height:0px;">
				<div class="goods-title">
					<span>全部产品</span>
				</div>
				<div class="categoryBox">
					<div class="category-name"><span>分类</span></div>
					<ul class="goods-nav">
						<li v-for="item in categoryBox" @click="goodsSearch(item.code,$event.target)">
							{{item.typeName}}
						</li>
					</ul>
				</div>
				
				<ul class='goodsUl' v-if ='sinHasData==true'>
					<li v-for='(item,index) in sinItems' @mouseenter="isActive2=index" @mouseleave="isActive2=null" :class="{active:isActive2==index}"  @click="goToDetails(item.id)">
						<div class='goods-content'>
							<img v-if="item.specialStatus=='Y'" v-bind:src='specialimg' class='shopSpeciallStatus'>
							<div class='goods-img'>
								<img v-bind:src="item.img" alt="" />
							</div>
							<span class='goods-title'>{{item.name}}</span>
							<div class='goods-text' v-html="item.sellPoint"></div>
							<div class='goods-price'>
								<span>{{item.price |formatNum}}&nbsp;RMB</span>
							</div>
						</div>
						<!--<div class='goods-purchase' @click="ispopup(item.id)">
							租赁
						</div>-->
					</li>
				</ul>
				<div class='loading_frame' v-if='sinHasData==false'>
					<img class='loading_img' v-bind:src="loadingImg">
					<span>请稍等……</span>
				</div>
			</div>
		</section>
		<div id="order_list" class='pagination'></div>
		<commonPopup v-if='isPurchase' :currCase='2' :getId='gId' @closeModal='closeModal'></commonPopup>
	</div>
	
</template>
<script>
	require.ensure(['pagination'], function(){
    }, 'pagination'); // 第三个参数设置打包名称
	import commonPopup from '../../components/global/commonPopup'
	var common_tools = require("common_tools");

	export default {
		beforeRouteEnter (to, from, next) {
	   		var fromPagePath=from.path.toString();
	   		if(fromPagePath.indexOf('details')!==-1){
				next(vm=>{
					if(vm.$store.state.currentPages.type=='02'){
						vm.currentPages=vm.$store.state.currentPages.page;
						if(vm.$store.state.currentPages.searchKey!==''){
							vm.searchShopString=vm.$store.state.currentPages.searchKey;
							vm.loadingProductType();
							vm.fromDetialReturnSearchShop();
							
						}else{
							vm.fromDetialReturnThisPage();
							vm.loadingProductType();
							vm.loadingHotProducts();
						};
					}else{
						vm.currentPages=1;
						vm.init();
					};
				});		   			
	   		}else{
	   			next(vm=>{	
					vm.currentPages=1;
					vm.init();
				});	
	   		};
	   	},
		components: {commonPopup},
		name: 'goods-lease',
		data: function () {
			return {
				banner:'url(' + require('./banner.jpg') + ')',
				fireSrc: require('../../public_resource/img/goods/fire.png'),
				isCur:null,
				isActive1:null,
				isActive2:null,
				isPurchase:null,
				gId:'',
				sinHotItems:[],
				sinItems: [],
				ishasorder: false,
				pages:{},
				categoryBox:[],
				currCase:2,
				sinHotHasData:false,
				sinHasData:false,
				shopType:'',
				searchShopString:'',
				loadingImg:require('../../public_resource/img/loading.gif'),
				currentPages:1,
				isShowHotProduct:true,
				specialimg:require('../../public_resource/img/goods/sale.png'),
			}
		},
		filters:{
			formatNum:function(value){
				return value.toString().replace(/([0-9])(?=([0-9]{3})+$)/g,'$1,');
			}
		},
		methods: {
			searchShop:function(){
				//搜索产品
				var _self = this;
				_self.sinHasData=false;
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
			    "condition": {
			    	"productType": "02",
			    	"typeCode":_self.shopType,
			    	"name":_self.searchShopString
			    },"page": {
			        "currentPage": 1,	//当前页数
			        "pageSize": 12	//页面内容个数
			    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
							_self.sinHasData=false;
							alert('暂无商品');
		   				}else{
		   					_self.pages=data.page;
		   					_self.sinItems=[];
		   					_self.isShowHotProduct=false;
							for(var i=0;i<data.data.resultSet.length;i++){
								_self.sinItems.push({
									id:data.data.resultSet[i].id,
									name:data.data.resultSet[i].name,
									price:data.data.resultSet[i].price,
									img:data.data.resultSet[i].img,
									sellPoint:data.data.resultSet[i].sellPoint,
								})
							};
		   				};
		   				_self.sinHasData=true;
						_self.update_products_list(_self.shopType,1);
					}else if(data.rspCode=='999999'){
						
					}
				},function(data){
					console.log(data);
				});
			},
			fromDetialReturnSearchShop:function(){
				//搜索商品
				var _self = this;
				_self.sinHasData=false;
				_self.sinItems=[];
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
			    "condition": {
			    	"productType": "02",
			    	"typeCode":_self.shopType,
			    	"name":_self.searchShopString
			    },
			    "page": {
				        "currentPage": _self.currentPages,	//当前页数
				        "pageSize": 12	//页面内容个数
				    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
						_self.sinHasData=false;
						alert('暂无商品');
		   				}else{
		   					_self.sinItems=[];
		   					_self.isShowHotProduct=false;
		   					_self.pages=data.page;
							for(var i=0;i<data.data.resultSet.length;i++){
								_self.sinItems.push({
									id:data.data.resultSet[i].id,
									name:data.data.resultSet[i].name,
									price:data.data.resultSet[i].price,
									img:data.data.resultSet[i].img,
									sellPoint:data.data.resultSet[i].sellPoint,
									specialStatus:data.data.resultSet[i].specialStatus,
									specialPrice:data.data.resultSet[i].specialPrice
								})
							};
		   				};
		   				_self.sinHasData=true;
		   				console.log(_self.shopType);
						_self.update_products_list(_self.shopType);
					}else if(data.rspCode=='999999'){
						console.log(data);
					}
				},function(data){
					console.log(data);
				});
			},
			ispopup:function(id){
				this.isPurchase='true';
				this.gId=id;
			},
			closeModal:function(arg){
				this.isPurchase=!this.isPurchase;
			},
			fromDetialReturnThisPage:function(){
				var _self=this;
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
				    "condition": {"productType": "02"},
				    "page": {
					        "currentPage": _self.currentPages,	//当前页数
					        "pageSize": 8	//页面内容个数
					    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
							_self.sinHasData=false;
		   					alert('暂无商品');
		   				}else{
		   					_self.pages=data.page;
		   					_self.sinItems=[];
							for(var i=0;i<data.data.resultSet.length;i++){
								_self.sinItems.push({
									id:data.data.resultSet[i].id,
									name:data.data.resultSet[i].name,
									price:data.data.resultSet[i].price,
									img:data.data.resultSet[i].img,
									sellPoint:data.data.resultSet[i].sellPoint,
								})
							};
		   				}
		   				_self.sinHasData=true;
						_self.update_products_list();
					}else if(data.rspCode=='999999'){
						
					}
				},function(data){
					console.log(data);
				});
				
			},
			update_products_list:function(_code,_current){
				var _self=this;
				$('.pagination').pagination({
					jump:true,
					coping:true,
					endPage:_self.pages.totalPage,
					current:_current?_current:_self.currentPages,
      				totalData:_self.pages.totalRecord,
       				showData:_self.pages.pageSize,
       				callback:function(e){
       					var currentpages=e.getCurrent();
       					_self.currentPages=currentpages;
       					_self.sinItems=[];
       					_self.sinHasData=false;
       					
       					if(_code){
       						var sendData={
							    "condition": {"productType": "02","typeCode":_code,"name":_self.searchShopString},
							    "page": {"currentPage": currentpages,"pageSize": 8}
							}
       					}else{
       						var sendData={
							    "condition": {"productType": "02","name":_self.searchShopString},
							    "page": {"currentPage": currentpages,"pageSize": 8}
							}
       					}
						common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',sendData,function(data){
							if(data.rspCode=='100000'){
								if(data.data.resultSet.length==0){
									_self.sinHasData=false;
				   					alert('暂无商品');
				   				}else{
				   					_self.pages=data.page;
									for(var i=0;i<data.data.resultSet.length;i++){
										_self.sinItems.push({
											id:data.data.resultSet[i].id,
											name:data.data.resultSet[i].name,
											price:data.data.resultSet[i].price,
											img:data.data.resultSet[i].img,
											sellPoint:data.data.resultSet[i].sellPoint,
										})
									}
				   				};
					   			_self.sinHasData=true;
							}else if(data.rspCode=='999999'){
								
							}
						},function(data){
							console.log(data);
						});
       				}
				})
			},
			goodsSearch:function(_code,_this){
				$(_this).addClass('active').siblings().removeClass('active');
				var _self=this;
				_self.sinItems=[];
				var sendcode=null;
				_self.sinHasData=false;
				if(_code==0){
					sendcode='';
					_self.shopType=sendcode;
				}else{
					sendcode=_code;
					_self.shopType=sendcode;
				}
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
			    "condition": {"productType": "02","typeCode":sendcode},
			    "page": {
				        "currentPage": 1,	//当前页数
				        "pageSize": 8	//页面内容个数
				    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
							_self.sinHasData=false;
							alert('暂无商品');
		   				}else{
		   					_self.pages=data.page;
							for(var i=0;i<data.data.resultSet.length;i++){
								_self.sinItems.push({
									id:data.data.resultSet[i].id,
									name:data.data.resultSet[i].name,
									price:data.data.resultSet[i].price,
									img:data.data.resultSet[i].img,
									sellPoint:data.data.resultSet[i].sellPoint,
								})
							}
		   				};
		   				_self.sinHasData=true;
						_self.update_products_list(_code);
			   			
					}else if(data.rspCode=='999999'){
						
					}
				},function(data){
					console.log(data);
				});
			},
			goToDetails:function(sendId){
				var _self=this;
				this.$store.state.currentPages.page=_self.currentPages;
				this.$store.state.currentPages.type='02';
				this.$store.state.currentPages.searchKey=this.searchShopString;
				this.$router.push({name:"details",params:{detail:sendId,case:this.currCase}});
			},
			loadingHotProducts:function(){
				var _self =this;
				//热门商品初始化加载
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryHotProducts',{
				    "condition": {"productType": "02"},
				    "page": {
					        "currentPage": 1,	//当前页数
					        "pageSize": 4	//页面内容个数
					    }
				},function(data){
					if(data.rspCode=='100000'){
						_self.sinHotItems=[];
						for(var i=0;i<data.data.resultSet.length;i++){
							_self.sinHotItems.push({
								id:data.data.resultSet[i].id,
								name:data.data.resultSet[i].name,
								price:data.data.resultSet[i].price,
								img:data.data.resultSet[i].img,
								sellPoint:data.data.resultSet[i].sellPoint,
								specialStatus:data.data.resultSet[i].specialStatus,
								specialPrice:data.data.resultSet[i].specialPrice
							})
						};
						_self.sinHotHasData=true;
					}else if(data.rspCode!=='100000'){
						console.log(data);
					}
				},function(data){
					console.log(data);
				});
			},
			loadingProductType:function(){
				var _self =this;
				common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbProductType/queryProductType',{
				    "condition": {"productType": "02"}
				},function(data){
					if(data.rspCode=='100000'){
						_self.categoryBox=[];
						for(var a=0;a<data.data.resultSet.length;a++){
							_self.categoryBox.push({
								code:data.data.resultSet[a].code,
								typeName:data.data.resultSet[a].typeName
							});
						};
					}else if(data.rspCode!=='100000'){
						console.log(data);
					}
				},function(data){
					console.log(data);
				});
			},
			init:function(){
				require('pagination');
				var _self = this;
				_self.sinHotItems=[];
				_self.sinItems=[];
				_self.categoryBox=[];
				//热门商品初始化加载
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryHotProducts',{
				    "condition": {"productType": "02"},
				    "page": {
					        "currentPage": 1,	//当前页数
					        "pageSize": 4	//页面内容个数
					    }
				},function(data){
					if(data.rspCode=='100000'){
						for(var i=0;i<data.data.resultSet.length;i++){
							_self.sinHotItems.push({
								id:data.data.resultSet[i].id,
								name:data.data.resultSet[i].name,
								price:data.data.resultSet[i].price,
								img:data.data.resultSet[i].img,
								sellPoint:data.data.resultSet[i].sellPoint,
							})
						};
						_self.sinHotHasData=true;
					}else if(data.rspCode!=='100000'){
						console.log("暂无商品");
					}
				},function(data){
					console.log(data);
				});
				//商品初始化加载
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
				    "condition": {"productType": "02"},
				    "page": {
					        "currentPage": _self.currentPages,	//当前页数
					        "pageSize": 8	//页面内容个数
					    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
							_self.sinHasData=false;
		   					alert('暂无商品');
		   				}else{
		   					_self.pages=data.page;
							for(var i=0;i<data.data.resultSet.length;i++){
								_self.sinItems.push({
									id:data.data.resultSet[i].id,
									name:data.data.resultSet[i].name,
									price:data.data.resultSet[i].price,
									img:data.data.resultSet[i].img,
									sellPoint:data.data.resultSet[i].sellPoint,
								})
							};
		   				}
		   				_self.sinHasData=true;
						_self.update_products_list();
					}else if(data.rspCode=='999999'){
						
					}
				},function(data){
					console.log(data);
				});
				common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbProductType/queryProductType',{
				    "condition": {"productType": "02"}
				},function(data){
					if(data.rspCode=='100000'){
						for(var a=0;a<data.data.resultSet.length;a++){
							_self.categoryBox.push({
								code:data.data.resultSet[a].code,
								typeName:data.data.resultSet[a].typeName
							})
						}
					}else if(data.rspCode!=='100000'){
						
					}
				},function(data){
					console.log(data);
				});
			}
		},
		mounted:function(){
//			require('pagination');
//			var _self = this;
//			//热门商品初始化加载
//			common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryHotProducts',{
//			    "condition": {"productType": "02"},
//			    "page": {
//				        "currentPage": 1,	//当前页数
//				        "pageSize": 4	//页面内容个数
//				    }
//			},function(data){
//				if(data.rspCode=='100000'){
//					for(var i=0;i<data.data.resultSet.length;i++){
//						_self.sinHotItems.push({
//							id:data.data.resultSet[i].id,
//							name:data.data.resultSet[i].name,
//							price:data.data.resultSet[i].price,
//							img:data.data.resultSet[i].img,
//							sellPoint:data.data.resultSet[i].sellPoint,
//						})
//					};
//					_self.sinHotHasData=true;
//				}else if(data.rspCode!=='100000'){
//					console.log("暂无商品");
//				}
//			},function(data){
//				console.log(data);
//			});
//			//商品初始化加载
//			common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
//			    "condition": {"productType": "02"},
//			    "page": {
//				        "currentPage": _self.currentPages,	//当前页数
//				        "pageSize": 8	//页面内容个数
//				    }
//			},function(data){
//				if(data.rspCode=='100000'){
//					if(data.data.resultSet.length==0){
//						_self.sinHasData=false;
//	   					alert('暂无商品');
//	   				}else{
//	   					_self.pages=data.page;
//						for(var i=0;i<data.data.resultSet.length;i++){
//							_self.sinItems.push({
//								id:data.data.resultSet[i].id,
//								name:data.data.resultSet[i].name,
//								price:data.data.resultSet[i].price,
//								img:data.data.resultSet[i].img,
//								sellPoint:data.data.resultSet[i].sellPoint,
//							})
//						};
//	   				}
//	   				_self.sinHasData=true;
//					_self.update_products_list();
//				}else if(data.rspCode=='999999'){
//					
//				}
//			},function(data){
//				console.log(data);
//			});
//			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbProductType/queryProductType',{
//			    "condition": {"productType": "02"}
//			},function(data){
//				if(data.rspCode=='100000'){
//					for(var a=0;a<data.data.resultSet.length;a++){
//						_self.categoryBox.push({
//							code:data.data.resultSet[a].code,
//							typeName:data.data.resultSet[a].typeName
//						})
//					}
//				}else if(data.rspCode!=='100000'){
//					
//				}
//			},function(data){
//				console.log(data);
//			});
		},
	}
</script>
<style>
	
</style>