<template>
	<div id='sin-goods'>
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
					<span class="search_status" v-if='searchStatus_tips!==null'>{{searchStatus_tips}}</span>
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
							<div class='goods-price' v-if="item.specialStatus=='N'">
								<span>{{item.price|formatNum}}&nbsp;RMB</span>
							</div>
							<div class='goods-price' v-if="item.specialStatus=='Y'">
								<span>{{item.specialPrice|formatNum}}&nbsp;RMB</span>
							</div>
						</div>
						<!--<div class='goods-purchase' @click="ispopup(item.id)">
							购买
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
						<li @click="goodsSearch(0,$event.target)">
							全部
						</li>
						<li v-for="item in categoryBox" @click="goodsSearch(item.code,$event.target)">
							{{item.typeName}}
						</li>
					</ul>
				</div>
				
				<ul class='goodsUl' v-if='sinHasData==true'>
					<li v-for='(item,index) in sinItems' @mouseenter="isActive2=index" @mouseleave="isActive2=null" :class="{active:isActive2==index}"  @click="goToDetails(item.id)">
						<div class='goods-content'>
							<img v-if="item.specialStatus=='Y'" v-bind:src='specialimg' class='shopSpeciallStatus'>
							<div class='goods-img'>
								<img v-bind:src="item.img" alt="" />
							</div>
							<span class='goods-title'>{{item.name}}</span>
							<div class='goods-text' v-html="item.sellPoint"></div>
							<div class='goods-price' v-if="item.specialStatus=='N'">
								<span>{{item.price | formatNum}}&nbsp;RMB</span>
							</div>
							<div class='goods-price' v-if="item.specialStatus=='Y'">
								<span>{{item.specialPrice | formatNum}}&nbsp;RMB</span>
							</div>
						</div>
						<!--<div class='goods-purchase' @click="ispopup(item.id)">
							购买
						</div>-->
					</li>
				</ul>
				<div class='loading_frame' v-if='sinHasData==false'>
					<img class='loading_img' v-bind:src="loadingImg">
					<span >请稍等……</span>
				</div>
				<div class='replenishment_frame' v-if='sinHasDataZero==true&&sinHasData==true'>
					<img class='replenishment_img' v-bind:src="replenishmentImg">
				</div>
				<div class='shopStatus_frame' v-if='shopStatus_tips!==null'>
					{{shopStatus_tips}}
				</div>
			</div>
		</section>
		<div id="order_list" class='pagination'></div>
		<!--<commonPopup v-if='isPurchase' :currCase='1' :getId='gId' @closeModal='closeModal'></commonPopup>-->
	</div>
	
</template>
<script>
	require.ensure(['pagination'], function(){
    }, 'pagination'); // 第三个参数设置打包名称
//	import commonPopup from '../../components/global/commonPopup';
	var common_tools = require("common_tools");
	export default {
		beforeRouteEnter (to, from, next) {
	   		var fromPagePath=from.path.toString();
	   		if(fromPagePath.indexOf('details')!==-1){
	   			//如果是从detail返回列表页执行此段
				next(vm=>{
					if(vm.$store.state.currentPages.type=='01'){
						//如果从列表页进入详情页的类型等于对应类型(单品汇产品类型01)，相当于从detail页返回列表页
						vm.currentPages=vm.$store.state.currentPages.page;
						//从vuex中获得原列表页分页数作为当前页数
						if(vm.$store.state.currentPages.searchKey!==''){
							//是否在原列表页搜索过产品，这里为存在
							vm.searchShopString=vm.$store.state.currentPages.searchKey;
							//从vuex中获得原列表页搜索key作为当前搜索key
							vm.loadingProductType();	//加载产品分类
							vm.fromDetialReturnSearchShop();	//如果存在搜索key重新加载搜索key
						}else{
							//是否在原列表页搜索过产品，这里为不存在
							vm.loadingProductType();	//加载产品分类
							vm.fromDetialReturnThisPage();	//不存在搜索key请求分页数
							vm.loadingHotProducts();	//加载热门产品
						};
					}else{
						//如果从列表页进入详情页的类型不等于对应类型(单品汇产品类型01)，相当于从其他页返回列表页不加载搜索key或原分页数
						vm.currentPages=1;	//初始化默认分页为1
						vm.init();	//初始化运行
					};
				});		   			
	   		}else{
	   			//相当于初始化加载列表页，不加载搜索key或原分页数
	   			next(vm=>{	
					vm.currentPages=1;	//初始化默认分页为1
					vm.init();	//初始化运行
				});	
	   		};
	   	},	
		components: {},
		name: 'sin-goods',
		data: function () {
			return {
				banner: 'url(' + require('./banner.jpg') + ')',
				isActive1:null,
				isActive2:null,
				isPurchase:null,
				gId:'',					//暂不使用
				sinHotItems:[],			//热门产品列表
				sinItems: [],			//产品列表
				pages:{},				//分页参数
				currentPages:1,			//分页当前页
				pageSize:12,			//分页大小
				categoryBox:[],			//产品分类
				currCase:1,				
				shopType:'',			//产品分类code
				sinHotHasData:false,	//热门产品是否存在数据对应状态,false为loading状态
				sinHasData:false,		//产品列表是否存在数据对应状态,false为loading状态
				sinHasDataZero:false,	//产品列表是否存在数据存在但为空,false为有真实数据，true为空
				shopStatus_tips:null,	//产品列表状态返回信息
				searchStatus_tips:null,	//搜索信息为空
				isShowHotProduct:true,	//是否显示热门产品
				searchShopString:'',	//搜索商品对应关键字
				fireSrc: require('../../public_resource/img/goods/fire.png'),
				loadingImg:require('../../public_resource/img/loading.gif'),
				replenishmentImg:require('../../public_resource/img/replenishment.png'),
				specialimg:require('../../public_resource/img/goods/sale.png')
			}
		},
		filters:{
			formatNum:function(value){return value.toString().replace(/([0-9])(?=([0-9]{3})+$)/g,'$1,');}
		},
		methods: {
			searchShop:function(){
				//搜索商品
				var _self = this;
				if(_self.searchShopString!==''){
					_self.sinHasData=false;
					common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
					    "condition": {
					    	"productType": "01",
					    	"typeCode":_self.shopType,
					    	"name":_self.searchShopString
					    },
					    "page": {
					        "currentPage": 1,
					        "pageSize": _self.pageSize
					    }
					},function(data){
						if(data.rspCode=='100000'){
							if(data.data.resultSet.length==0){
							_self.sinItems=[];
							_self.sinHasData=true;
							_self.sinHasDataZero=false;	//搜索时sinHasDataZero为false
							_self.shopStatus_tips='未检索到您需要搜索的产品，请您尝试更改搜索关键字';
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
									});
								};
								_self.sinHasData=true;
			   					_self.shopStatus_tips=null;
			   					_self.sinHasDataZero=false;
								_self.update_products_list(1);	
			   				};
						}else if(data.rspCode!=='100000'){
							console.log(data);
						}
					},function(data){
						console.log(data);
					});
				}else{
					_self.searchStatus_tips='请正确输入要搜索的商品';
				};
			},
			fromDetialReturnSearchShop:function(){
				//搜索商品
				var _self = this;
				_self.sinHasData=false;
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
				    "condition": {
				    	"productType": "01",
				    	"typeCode":_self.shopType,
				    	"name":_self.searchShopString
				    },
				    "page": {
				        "currentPage": _self.currentPages,	//当前页数
				        "pageSize": _self.pageSize	
				    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
						_self.sinItems=[];
						_self.sinHasData=true;
						_self.sinHasDataZero=false;	//搜索时sinHasDataZero为false
						_self.shopStatus_tips='未检索到您需要搜索的产品，请您尝试更改搜索关键字';
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
								});
							};
							_self.sinHasData=true;
			   				_self.shopStatus_tips=null;
			   				_self.sinHasDataZero=false;
							_self.update_products_list();
		   				};
		   				
					}else if(data.rspCode!=='100000'){
						console.log(data);
					}
				},function(data){
					console.log(data);
				});
			},
//			ispopup:function(id){
//				this.isPurchase='true';
//				this.gId=id;
//			},
//			closeModal:function(arg){
//				this.isPurchase=!this.isPurchase;
//			},
			fromDetialReturnThisPage:function(){
				var _self=this;
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
				    "condition": {"productType": "01"},
				    "page": {
					        "currentPage": _self.currentPages,	//当前页数
					        "pageSize": _self.pageSize	//页面内容个数
					    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
							_self.sinItems=[];
							_self.sinHasDataZero=false;	
							_self.sinHasData=true;
							_self.shopStatus_tips=null;
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
									specialStatus:data.data.resultSet[i].specialStatus,
									specialPrice:data.data.resultSet[i].specialPrice
								});
							};
							_self.sinHasData=true;
							_self.update_products_list();
		   				};
					}else if(data.rspCode!=='100000'){
						console.log(data);
					}
				},function(data){
					console.log(data);
				});	
			},
			update_products_list:function(_currentPage){
				//产品分页
				var _self=this;
				$('.pagination').pagination({
					jump:true,
					coping:true,
					current:_currentPage?_currentPage:_self.currentPages,
					endPage:_self.pages.totalPage,
      				totalData:_self.pages.totalRecord,
       				showData:_self.pages.pageSize,
       				callback:function(e){
       					_self.sinHasData=false;
       					var currentpages=e.getCurrent();
       					_self.currentPages=currentpages;
       					_self.sinItems=[];
   						var sendData={
						    "condition": {"productType": "01","typeCode":_self.shopType,"name":_self.searchShopString},
						    "page": {"currentPage": currentpages,"pageSize": _self.pageSize}
						};
						common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',
						sendData,function(data){
							if(data.rspCode=='100000'){
								if(data.data.resultSet.length==0){
									_self.sinItems=[];
									_self.sinHasDataZero=false;	
									_self.sinHasData=true;
									_self.shopStatus_tips='未检索到您想要的产品';
				   				}else{
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
										});
									};
									_self.sinHasData=true;
				   				};
				   				
							}else if(data.rspCode=='999999'){
								console.log(data);
							}
						},function(data){
							console.log(data);
						});
       				}
				})
			},
			goodsSearch:function(_code,_this){
				//产品分类查询
				var _self=this;
				$(_this).addClass('active').siblings().removeClass('active');
				if(_code==0){_self.shopType=''} else {_self.shopType=_code};
				_self.sinHasData=false;
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
			    "condition": {"productType": "01","typeCode":_self.shopType,"name":_self.searchShopString},
			    "page": {
				        "currentPage": _self.currentPages,	//当前页数
				        "pageSize": _self.pageSize	//页面内容个数
				    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
							_self.sinItems=[];
							_self.sinHasData=true;
							_self.sinHasDataZero=true;
							_self.shopStatus_tips=null;
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
									specialStatus:data.data.resultSet[i].specialStatus,
									specialPrice:data.data.resultSet[i].specialPrice
								})
							};
							_self.sinHasData=true;
							_self.sinHasDataZero=false;
							_self.shopStatus_tips=null;
							_self.update_products_list();
		   				};
					}else if(data.rspCode!=='100000'){
						console.log(data);
					};
				},function(data){
					console.log(data);
				});
			},
			goToDetails:function(sendId){
				var _self=this;
				this.$store.state.currentPages.page=_self.currentPages;
				this.$store.state.currentPages.type='01';
				this.$store.state.currentPages.searchKey=this.searchShopString;
				this.$router.push({name:"details",params:{detail:sendId,case:this.currCase,}})
			},
			loadingHotProducts:function(){
				var _self =this;
				//热门商品初始化加载
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryHotProducts',{
				    "condition": {"productType": "01"},
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
							});
						};
						_self.sinHotHasData=true;
					}else if(data.rspCode!=='100000'){
						console.log("暂无商品");
					}
				},function(data){
					console.log(data);
				});
			},
			loadingProductType:function(){
				var _self =this;
				common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbProductType/queryProductType',{
				    "condition": {"productType": "01"}
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
					};
				},function(data){
					console.log(data);
				});
			},
			init:function(){
				//初始化加载页面
				require('pagination');
				var _self = this;
				_self.sinHotItems=[];
				_self.sinItems=[];
				_self.categoryBox=[];
				//热门商品初始化加载
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryHotProducts',{
				    "condition": {"productType": "01"},
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
							});
						};
						_self.sinHotHasData=true;
					}else if(data.rspCode!=='100000'){
						console.log(data);
					}
				},function(data){
					console.log(data);
				});
				//商品初始化加载
				common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryProducts',{
				    "condition": {"productType": "01"},
				    "page": {
					        "currentPage": _self.currentPages,	//当前页数
					        "pageSize": _self.pageSize	//页面内容个数
					    }
				},function(data){
					if(data.rspCode=='100000'){
						if(data.data.resultSet.length==0){
							_self.sinHasData=false;
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
									specialStatus:data.data.resultSet[i].specialStatus,
									specialPrice:data.data.resultSet[i].specialPrice
								});
							};
							_self.sinHasData=true;
							_self.update_products_list();
		   				};
						
					}else if(data.rspCode!=='100000'){
						console.log(data);
					}
				},function(data){
					console.log(data);
				});
				//产品分类选择
				common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbProductType/queryProductType',{
				    "condition": {"productType": "01"}
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
			}
		}	
	}
</script>
