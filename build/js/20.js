webpackJsonp([20,45],{

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(555),
  /* template */
  __webpack_require__(761),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\sin-goods\\sin-goods.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sin-goods.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-211cff0c", Component.options)
  } else {
    hotAPI.reload("data-v-211cff0c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {;(function($,window,document,undefined){var defaults={totalData:0,showData:0,pageCount:9,current:1,prevCls:'prev',nextCls:'next',prevContent:'上一页',nextContent:'下一页',activeCls:'active',coping:false,homePage:'',endPage:'',count:3,jump:false,jumpIptCls:'jump-ipt',jumpBtnCls:'jump-btn',jumpBtn:'跳转',callback:function(){}};var Pagination=function(element,options){var opts=options,current,$document=$(document),$obj=$(element);this.setTotalPage=function(page){return opts.pageCount=page};this.getTotalPage=function(){var p=opts.totalData||opts.showData?Math.ceil(parseInt(opts.totalData)/opts.showData):opts.pageCount;return p};this.getCurrent=function(){return current};this.filling=function(index){var html='';current=index||opts.current;var pageCount=this.getTotalPage();if(current>1){html+='<a href="javascript:;" class="'+opts.prevCls+'">'+opts.prevContent+'</a>'}else{$obj.find('.'+opts.prevCls)&&$obj.find('.'+opts.prevCls).remove()}if(current>=opts.count*2&&current!=1&&pageCount!=opts.count){var home=opts.coping&&opts.homePage?opts.homePage:'1';html+=opts.coping?'<a href="javascript:;" data-page="1">'+home+'</a><span>...</span>':''}var start=current-opts.count,end=current+opts.count;((start>1&&current<opts.count)||current==1)&&end++;(current>pageCount-opts.count&&current>=pageCount)&&start++;for(;start<=end;start++){if(start<=pageCount&&start>=1){if(start!=current){html+='<a href="javascript:;" data-page="'+start+'">'+start+'</a>'}else{html+='<span class="'+opts.activeCls+'">'+start+'</span>'}}}if(current+opts.count<pageCount&&current>=1&&pageCount>opts.count){var end=opts.coping&&opts.endPage?opts.endPage:pageCount;html+=opts.coping?'<span>...</span><a href="javascript:;" data-page="'+pageCount+'">'+end+'</a>':''}if(current<pageCount){html+='<a href="javascript:;" class="'+opts.nextCls+'">'+opts.nextContent+'</a>'}else{$obj.find('.'+opts.nextCls)&&$obj.find('.'+opts.nextCls).remove()}html+=opts.jump?'<input type="text" class="'+opts.jumpIptCls+'"><a href="javascript:;" class="'+opts.jumpBtnCls+'">'+opts.jumpBtn+'</a>':'';$obj.empty().html(html)};this.eventBind=function(){var self=this;var pageCount=this.getTotalPage();$obj.off().on('click','a',function(){if($(this).hasClass(opts.nextCls)){var index=parseInt($obj.find('.'+opts.activeCls).text())+1}else if($(this).hasClass(opts.prevCls)){var index=parseInt($obj.find('.'+opts.activeCls).text())-1}else if($(this).hasClass(opts.jumpBtnCls)){if($obj.find('.'+opts.jumpIptCls).val()!==''){var index=parseInt($obj.find('.'+opts.jumpIptCls).val())}else{return}}else{var index=parseInt($(this).data('page'))}self.filling(index);typeof opts.callback==='function'&&opts.callback(self)});$obj.on('input propertychange','.'+opts.jumpIptCls,function(){var $this=$(this);var val=$this.val();var reg=/[^\d]/g;if(reg.test(val)){$this.val(val.replace(reg,''))}(parseInt(val)>pageCount)&&$this.val(pageCount);if(parseInt(val)===0){$this.val(1)}});$document.keydown(function(e){var self=this;if(e.keyCode==13&&$obj.find('.'+opts.jumpIptCls).val()){var index=parseInt($obj.find('.'+opts.jumpIptCls).val());self.filling(index);typeof opts.callback==='function'&&opts.callback(self)}})};this.init=function(){this.filling(opts.current);this.eventBind()};this.init()};$.fn.pagination=function(parameter,callback){if(typeof parameter=='function'){callback=parameter;parameter={}}else{parameter=parameter||{};callback=callback||function(){}}var options=$.extend({},defaults,parameter);return this.each(function(){var pagination=new Pagination(this,options);callback(pagination)})}})(jQuery,window,document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sale71ea2ed978c217d0dfade632940f774c.png";

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/loadingd23bd610e3e7ac26d7dc203a24e1f0d2.gif";

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAADNUlEQVRo3u2Zz47SQBzHP6AxalTKxs0elzegbwAPoIE38HcwGk+SePCwmuzG9eQm4hPYxMR4MHFj9gH2DYQXMBjPJqAeVmNnPHTKQpmWAi2LK5P80jLTlvnM9/dnCgWtNeehFTknbQ2yBlmDnDXIgVTOiyIVDuSQA3HOg2s1gOM8YZYB0jHHap4wywBxh2eaKgrv3wTROCjAH1qD59JaXZC47ORTH4EI7SV72WazLBVp80JcC4hMgAQKeasJEqx8e6zvmQg+JYsioKixYwFfAZASPjX2pQ7Anjj4tK0QpyarBbIv7sjkmgbMi1Ujem0G7WJmbqXBmMtT8dA0RvqCuNATtj18RksqaPq88vpnp8h4QNfwuWMNcJudPqOySAJYHOSJ1PGpTnGheAuboo6iwQMTY0sF2REHhRcpeOmUiCqiENO3u3yQIKC3EyfsT4EEuC8y8pwad2cvlvMF+2Nx0ByiqVkCeNKI7R9wT1w07Uh/EyI1KRdFgvpQS+U6KsHVgr5PKEqRe2auL4WZf9d6JE00HxZUYvp1UOZN+lRcnEON3dQB7QNlYCOFYqOfg7rj5udaD8VFUU3tOgUDUjbncSDa2u/mF+zjFTzedcKxrZGl2gK+xtxrP3fyU0SZl6SoErZVvgBjUymZZYsqkHSeG4if0scVsGlRbDNlltORYpm5a6mUmacI3LCMXTdjfxJcitnVmMe1jlNlHsc8ORo3RQOjLDtiNXHs5AnSm5IyAysnJIGbMROftBxBXns9FN2ElBmk2csxq63NWCFWhfD4hUOvl+8WJdztxqlxZUq1VxFQuyJevjESgmgGsSnzaoqty7XE8cGsG8b5QN56fRTtWFWSlNAprtO0+Tj76+58u9933i6KrtW/T1JM+CR2N9BFz67GYi9WGkExmJjM9xSq/LTWnwEa4WjZPz689zpo6sN4CSf6C/icoErPXEPkBQvqHHmdeadTWPh/9qa4gAdUJ6r4BnDJfP4NfAN+TDyhC8giENmAADTEAVpoWmZ7OL7NsH9FmJ3a87pT9iBhuy0OIMaqMQBdo6CXBUA+INF2S9yRzXx/Ufc5O5AltvX/7GuQNch/AvIX+g+qXLItXZEAAAAASUVORK5CYII="

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

__webpack_require__.e/* require.ensure */(45).then((function () {}).bind(null, __webpack_require__)).catch(__webpack_require__.oe); // 第三个参数设置打包名称
//	import commonPopup from '../../components/global/commonPopup';
var common_tools = __webpack_require__(69);
exports.default = {
	beforeRouteEnter: function beforeRouteEnter(to, from, next) {
		var fromPagePath = from.path.toString();
		if (fromPagePath.indexOf('details') !== -1) {
			//如果是从detail返回列表页执行此段
			next(function (vm) {
				if (vm.$store.state.currentPages.type == '01') {
					//如果从列表页进入详情页的类型等于对应类型(单品汇产品类型01)，相当于从detail页返回列表页
					vm.currentPages = vm.$store.state.currentPages.page;
					//从vuex中获得原列表页分页数作为当前页数
					if (vm.$store.state.currentPages.searchKey !== '') {
						//是否在原列表页搜索过产品，这里为存在
						vm.searchShopString = vm.$store.state.currentPages.searchKey;
						//从vuex中获得原列表页搜索key作为当前搜索key
						vm.loadingProductType(); //加载产品分类
						vm.fromDetialReturnSearchShop(); //如果存在搜索key重新加载搜索key
					} else {
						//是否在原列表页搜索过产品，这里为不存在
						vm.loadingProductType(); //加载产品分类
						vm.fromDetialReturnThisPage(); //不存在搜索key请求分页数
						vm.loadingHotProducts(); //加载热门产品
					};
				} else {
					//如果从列表页进入详情页的类型不等于对应类型(单品汇产品类型01)，相当于从其他页返回列表页不加载搜索key或原分页数
					vm.currentPages = 1; //初始化默认分页为1
					vm.init(); //初始化运行
				};
			});
		} else {
			//相当于初始化加载列表页，不加载搜索key或原分页数
			next(function (vm) {
				vm.currentPages = 1; //初始化默认分页为1
				vm.init(); //初始化运行
			});
		};
	},

	components: {},
	name: 'sin-goods',
	data: function data() {
		return {
			banner: 'url(' + __webpack_require__(730) + ')',
			isActive1: null,
			isActive2: null,
			isPurchase: null,
			gId: '', //暂不使用
			sinHotItems: [], //热门产品列表
			sinItems: [], //产品列表
			pages: {}, //分页参数
			currentPages: 1, //分页当前页
			pageSize: 12, //分页大小
			categoryBox: [], //产品分类
			currCase: 1,
			shopType: '', //产品分类code
			sinHotHasData: false, //热门产品是否存在数据对应状态,false为loading状态
			sinHasData: false, //产品列表是否存在数据对应状态,false为loading状态
			sinHasDataZero: false, //产品列表是否存在数据存在但为空,false为有真实数据，true为空
			shopStatus_tips: null, //产品列表状态返回信息
			searchStatus_tips: null, //搜索信息为空
			isShowHotProduct: true, //是否显示热门产品
			searchShopString: '', //搜索商品对应关键字
			fireSrc: __webpack_require__(462),
			loadingImg: __webpack_require__(448),
			replenishmentImg: __webpack_require__(749),
			specialimg: __webpack_require__(447)
		};
	},
	filters: {
		formatNum: function formatNum(value) {
			return value.toString().replace(/([0-9])(?=([0-9]{3})+$)/g, '$1,');
		}
	},
	methods: {
		searchShop: function searchShop() {
			//搜索商品
			var _self = this;
			if (_self.searchShopString !== '') {
				_self.sinHasData = false;
				common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
					"condition": {
						"productType": "01",
						"typeCode": _self.shopType,
						"name": _self.searchShopString
					},
					"page": {
						"currentPage": 1,
						"pageSize": _self.pageSize
					}
				}, function (data) {
					if (data.rspCode == '100000') {
						if (data.data.resultSet.length == 0) {
							_self.sinItems = [];
							_self.sinHasData = true;
							_self.sinHasDataZero = false; //搜索时sinHasDataZero为false
							_self.shopStatus_tips = '未检索到您需要搜索的产品，请您尝试更改搜索关键字';
						} else {
							_self.sinItems = [];
							_self.isShowHotProduct = false;
							_self.pages = data.page;
							for (var i = 0; i < data.data.resultSet.length; i++) {
								_self.sinItems.push({
									id: data.data.resultSet[i].id,
									name: data.data.resultSet[i].name,
									price: data.data.resultSet[i].price,
									img: data.data.resultSet[i].img,
									sellPoint: data.data.resultSet[i].sellPoint,
									specialStatus: data.data.resultSet[i].specialStatus,
									specialPrice: data.data.resultSet[i].specialPrice
								});
							};
							_self.sinHasData = true;
							_self.shopStatus_tips = null;
							_self.sinHasDataZero = false;
							_self.update_products_list(1);
						};
					} else if (data.rspCode !== '100000') {
						console.log(data);
					}
				}, function (data) {
					console.log(data);
				});
			} else {
				_self.searchStatus_tips = '请正确输入要搜索的商品';
			};
		},
		fromDetialReturnSearchShop: function fromDetialReturnSearchShop() {
			//搜索商品
			var _self = this;
			_self.sinHasData = false;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": {
					"productType": "01",
					"typeCode": _self.shopType,
					"name": _self.searchShopString
				},
				"page": {
					"currentPage": _self.currentPages, //当前页数
					"pageSize": _self.pageSize
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.sinItems = [];
						_self.sinHasData = true;
						_self.sinHasDataZero = false; //搜索时sinHasDataZero为false
						_self.shopStatus_tips = '未检索到您需要搜索的产品，请您尝试更改搜索关键字';
					} else {
						_self.sinItems = [];
						_self.isShowHotProduct = false;
						_self.pages = data.page;
						for (var i = 0; i < data.data.resultSet.length; i++) {
							_self.sinItems.push({
								id: data.data.resultSet[i].id,
								name: data.data.resultSet[i].name,
								price: data.data.resultSet[i].price,
								img: data.data.resultSet[i].img,
								sellPoint: data.data.resultSet[i].sellPoint,
								specialStatus: data.data.resultSet[i].specialStatus,
								specialPrice: data.data.resultSet[i].specialPrice
							});
						};
						_self.sinHasData = true;
						_self.shopStatus_tips = null;
						_self.sinHasDataZero = false;
						_self.update_products_list();
					};
				} else if (data.rspCode !== '100000') {
					console.log(data);
				}
			}, function (data) {
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
		fromDetialReturnThisPage: function fromDetialReturnThisPage() {
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": { "productType": "01" },
				"page": {
					"currentPage": _self.currentPages, //当前页数
					"pageSize": _self.pageSize //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.sinItems = [];
						_self.sinHasDataZero = false;
						_self.sinHasData = true;
						_self.shopStatus_tips = null;
					} else {
						_self.pages = data.page;
						_self.sinItems = [];
						for (var i = 0; i < data.data.resultSet.length; i++) {
							_self.sinItems.push({
								id: data.data.resultSet[i].id,
								name: data.data.resultSet[i].name,
								price: data.data.resultSet[i].price,
								img: data.data.resultSet[i].img,
								sellPoint: data.data.resultSet[i].sellPoint,
								specialStatus: data.data.resultSet[i].specialStatus,
								specialPrice: data.data.resultSet[i].specialPrice
							});
						};
						_self.sinHasData = true;
						_self.update_products_list();
					};
				} else if (data.rspCode !== '100000') {
					console.log(data);
				}
			}, function (data) {
				console.log(data);
			});
		},
		update_products_list: function update_products_list(_currentPage) {
			//产品分页
			var _self = this;
			$('.pagination').pagination({
				jump: true,
				coping: true,
				current: _currentPage ? _currentPage : _self.currentPages,
				endPage: _self.pages.totalPage,
				totalData: _self.pages.totalRecord,
				showData: _self.pages.pageSize,
				callback: function callback(e) {
					_self.sinHasData = false;
					var currentpages = e.getCurrent();
					_self.currentPages = currentpages;
					_self.sinItems = [];
					var sendData = {
						"condition": { "productType": "01", "typeCode": _self.shopType, "name": _self.searchShopString },
						"page": { "currentPage": currentpages, "pageSize": _self.pageSize }
					};
					common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', sendData, function (data) {
						if (data.rspCode == '100000') {
							if (data.data.resultSet.length == 0) {
								_self.sinItems = [];
								_self.sinHasDataZero = false;
								_self.sinHasData = true;
								_self.shopStatus_tips = '未检索到您想要的产品';
							} else {
								_self.pages = data.page;
								for (var i = 0; i < data.data.resultSet.length; i++) {
									_self.sinItems.push({
										id: data.data.resultSet[i].id,
										name: data.data.resultSet[i].name,
										price: data.data.resultSet[i].price,
										img: data.data.resultSet[i].img,
										sellPoint: data.data.resultSet[i].sellPoint,
										specialStatus: data.data.resultSet[i].specialStatus,
										specialPrice: data.data.resultSet[i].specialPrice
									});
								};
								_self.sinHasData = true;
							};
						} else if (data.rspCode == '999999') {
							console.log(data);
						}
					}, function (data) {
						console.log(data);
					});
				}
			});
		},
		goodsSearch: function goodsSearch(_code, _this) {
			//产品分类查询
			var _self = this;
			$(_this).addClass('active').siblings().removeClass('active');
			if (_code == 0) {
				_self.shopType = '';
			} else {
				_self.shopType = _code;
			};
			_self.sinHasData = false;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": { "productType": "01", "typeCode": _self.shopType, "name": _self.searchShopString },
				"page": {
					"currentPage": _self.currentPages, //当前页数
					"pageSize": _self.pageSize //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.sinItems = [];
						_self.sinHasData = true;
						_self.sinHasDataZero = true;
						_self.shopStatus_tips = null;
					} else {
						_self.pages = data.page;
						_self.sinItems = [];
						for (var i = 0; i < data.data.resultSet.length; i++) {
							_self.sinItems.push({
								id: data.data.resultSet[i].id,
								name: data.data.resultSet[i].name,
								price: data.data.resultSet[i].price,
								img: data.data.resultSet[i].img,
								sellPoint: data.data.resultSet[i].sellPoint,
								specialStatus: data.data.resultSet[i].specialStatus,
								specialPrice: data.data.resultSet[i].specialPrice
							});
						};
						_self.sinHasData = true;
						_self.sinHasDataZero = false;
						_self.shopStatus_tips = null;
						_self.update_products_list();
					};
				} else if (data.rspCode !== '100000') {
					console.log(data);
				};
			}, function (data) {
				console.log(data);
			});
		},
		goToDetails: function goToDetails(sendId) {
			var _self = this;
			this.$store.state.currentPages.page = _self.currentPages;
			this.$store.state.currentPages.type = '01';
			this.$store.state.currentPages.searchKey = this.searchShopString;
			this.$router.push({ name: "details", params: { detail: sendId, case: this.currCase } });
		},
		loadingHotProducts: function loadingHotProducts() {
			var _self = this;
			//热门商品初始化加载
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryHotProducts', {
				"condition": { "productType": "01" },
				"page": {
					"currentPage": 1, //当前页数
					"pageSize": 4 //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					_self.sinHotItems = [];
					for (var i = 0; i < data.data.resultSet.length; i++) {
						_self.sinHotItems.push({
							id: data.data.resultSet[i].id,
							name: data.data.resultSet[i].name,
							price: data.data.resultSet[i].price,
							img: data.data.resultSet[i].img,
							sellPoint: data.data.resultSet[i].sellPoint,
							specialStatus: data.data.resultSet[i].specialStatus,
							specialPrice: data.data.resultSet[i].specialPrice
						});
					};
					_self.sinHotHasData = true;
				} else if (data.rspCode !== '100000') {
					console.log("暂无商品");
				}
			}, function (data) {
				console.log(data);
			});
		},
		loadingProductType: function loadingProductType() {
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbProductType/queryProductType', {
				"condition": { "productType": "01" }
			}, function (data) {
				if (data.rspCode == '100000') {
					_self.categoryBox = [];
					for (var a = 0; a < data.data.resultSet.length; a++) {
						_self.categoryBox.push({
							code: data.data.resultSet[a].code,
							typeName: data.data.resultSet[a].typeName
						});
					};
				} else if (data.rspCode !== '100000') {
					console.log(data);
				};
			}, function (data) {
				console.log(data);
			});
		},
		init: function init() {
			//初始化加载页面
			__webpack_require__(438);
			var _self = this;
			_self.sinHotItems = [];
			_self.sinItems = [];
			_self.categoryBox = [];
			//热门商品初始化加载
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryHotProducts', {
				"condition": { "productType": "01" },
				"page": {
					"currentPage": 1, //当前页数
					"pageSize": 4 //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					_self.sinHotItems = [];
					for (var i = 0; i < data.data.resultSet.length; i++) {
						_self.sinHotItems.push({
							id: data.data.resultSet[i].id,
							name: data.data.resultSet[i].name,
							price: data.data.resultSet[i].price,
							img: data.data.resultSet[i].img,
							sellPoint: data.data.resultSet[i].sellPoint,
							specialStatus: data.data.resultSet[i].specialStatus,
							specialPrice: data.data.resultSet[i].specialPrice
						});
					};
					_self.sinHotHasData = true;
				} else if (data.rspCode !== '100000') {
					console.log(data);
				}
			}, function (data) {
				console.log(data);
			});
			//商品初始化加载
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": { "productType": "01" },
				"page": {
					"currentPage": _self.currentPages, //当前页数
					"pageSize": _self.pageSize //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.sinHasData = false;
					} else {
						_self.pages = data.page;
						_self.sinItems = [];
						for (var i = 0; i < data.data.resultSet.length; i++) {
							_self.sinItems.push({
								id: data.data.resultSet[i].id,
								name: data.data.resultSet[i].name,
								price: data.data.resultSet[i].price,
								img: data.data.resultSet[i].img,
								sellPoint: data.data.resultSet[i].sellPoint,
								specialStatus: data.data.resultSet[i].specialStatus,
								specialPrice: data.data.resultSet[i].specialPrice
							});
						};
						_self.sinHasData = true;
						_self.update_products_list();
					};
				} else if (data.rspCode !== '100000') {
					console.log(data);
				}
			}, function (data) {
				console.log(data);
			});
			//产品分类选择
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbProductType/queryProductType', {
				"condition": { "productType": "01" }
			}, function (data) {
				if (data.rspCode == '100000') {
					_self.categoryBox = [];
					for (var a = 0; a < data.data.resultSet.length; a++) {
						_self.categoryBox.push({
							code: data.data.resultSet[a].code,
							typeName: data.data.resultSet[a].typeName
						});
					};
				} else if (data.rspCode !== '100000') {
					console.log(data);
				}
			}, function (data) {
				console.log(data);
			});
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/banner239cca1749fea38582238741867e77ac.jpg";

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/replenishment0c1592ae6fa1b34237073db153a4535f.png";

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "sin-goods"
    }
  }, [_c('section', [_c('div', {
    staticClass: "section suateam_banner",
    class: {
      suateam_banner_hasbanner: _vm.banner != null
    },
    style: ({
      backgroundImage: _vm.banner
    })
  })]), _vm._v(" "), _c('section', {
    staticClass: "searchShopFrame"
  }, [_c('div', {
    staticClass: "suateam suateam_container_frame",
    staticStyle: {
      "padding": "36px 36px 0 36px",
      "min-height": "100px"
    }
  }, [_c('div', {
    staticClass: "search_frame"
  }, [_c('i', {
    staticClass: "search"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchShopString),
      expression: "searchShopString"
    }],
    staticClass: "search_input",
    attrs: {
      "type": "text",
      "placeholder": "请输入要搜索的商品"
    },
    domProps: {
      "value": (_vm.searchShopString)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.searchShop()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchShopString = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "search_btn",
    on: {
      "click": function($event) {
        _vm.searchShop()
      }
    }
  }, [_vm._v("搜  索")]), _vm._v(" "), (_vm.searchShopString !== '') ? _c('i', {
    staticClass: "del",
    on: {
      "click": function($event) {
        _vm.searchShopString = ''
      }
    }
  }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), (_vm.searchStatus_tips !== null) ? _c('span', {
    staticClass: "search_status"
  }, [_vm._v(_vm._s(_vm.searchStatus_tips))]) : _vm._e()])])]), _vm._v(" "), (_vm.isShowHotProduct == true) ? _c('section', {
    staticClass: "goods-list"
  }, [_c('div', {
    staticClass: "suateam suateam_container_frame",
    staticStyle: {
      "padding": "0 36px"
    }
  }, [_c('div', {
    staticClass: "goods-title"
  }, [_c('span', [_vm._v("热门产品")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.fireSrc
    }
  })]), _vm._v(" "), (_vm.sinHotHasData == true) ? _c('ul', {
    staticClass: "goodsUl"
  }, _vm._l((_vm.sinHotItems), function(item, index) {
    return _c('li', {
      class: {
        active: _vm.isActive1 == index
      },
      on: {
        "mouseenter": function($event) {
          _vm.isActive1 = index
        },
        "mouseleave": function($event) {
          _vm.isActive1 = null
        }
      }
    }, [_c('div', {
      staticClass: "goods-content",
      on: {
        "click": function($event) {
          _vm.goToDetails(item.id)
        }
      }
    }, [(item.specialStatus == 'Y') ? _c('img', {
      staticClass: "shopSpeciallStatus",
      attrs: {
        "src": _vm.specialimg
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "goods-img"
    }, [_c('img', {
      attrs: {
        "src": item.img,
        "alt": ""
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "goods-title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "goods-text",
      domProps: {
        "innerHTML": _vm._s(item.sellPoint)
      }
    }), _vm._v(" "), (item.specialStatus == 'N') ? _c('div', {
      staticClass: "goods-price"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("formatNum")(item.price)) + " RMB")])]) : _vm._e(), _vm._v(" "), (item.specialStatus == 'Y') ? _c('div', {
      staticClass: "goods-price"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("formatNum")(item.specialPrice)) + " RMB")])]) : _vm._e()])])
  })) : _vm._e(), _vm._v(" "), (_vm.sinHotHasData == false) ? _c('div', {
    staticClass: "loading_frame"
  }, [_c('img', {
    staticClass: "loading_img",
    attrs: {
      "src": _vm.loadingImg
    }
  }), _vm._v(" "), _c('span', [_vm._v("请稍等……")])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "section-goods"
  }, [_c('div', {
    staticClass: "suateam suateam_container_frame",
    staticStyle: {
      "padding": "0 36px",
      "min-height": "0px"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "categoryBox"
  }, [_vm._m(1), _vm._v(" "), _c('ul', {
    staticClass: "goods-nav"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.goodsSearch(0, $event.target)
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t全部\n\t\t\t\t\t")]), _vm._v(" "), _vm._l((_vm.categoryBox), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.goodsSearch(item.code, $event.target)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(item.typeName) + "\n\t\t\t\t\t")])
  })], 2)]), _vm._v(" "), (_vm.sinHasData == true) ? _c('ul', {
    staticClass: "goodsUl"
  }, _vm._l((_vm.sinItems), function(item, index) {
    return _c('li', {
      class: {
        active: _vm.isActive2 == index
      },
      on: {
        "mouseenter": function($event) {
          _vm.isActive2 = index
        },
        "mouseleave": function($event) {
          _vm.isActive2 = null
        },
        "click": function($event) {
          _vm.goToDetails(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "goods-content"
    }, [(item.specialStatus == 'Y') ? _c('img', {
      staticClass: "shopSpeciallStatus",
      attrs: {
        "src": _vm.specialimg
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "goods-img"
    }, [_c('img', {
      attrs: {
        "src": item.img,
        "alt": ""
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "goods-title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "goods-text",
      domProps: {
        "innerHTML": _vm._s(item.sellPoint)
      }
    }), _vm._v(" "), (item.specialStatus == 'N') ? _c('div', {
      staticClass: "goods-price"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("formatNum")(item.price)) + " RMB")])]) : _vm._e(), _vm._v(" "), (item.specialStatus == 'Y') ? _c('div', {
      staticClass: "goods-price"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("formatNum")(item.specialPrice)) + " RMB")])]) : _vm._e()])])
  })) : _vm._e(), _vm._v(" "), (_vm.sinHasData == false) ? _c('div', {
    staticClass: "loading_frame"
  }, [_c('img', {
    staticClass: "loading_img",
    attrs: {
      "src": _vm.loadingImg
    }
  }), _vm._v(" "), _c('span', [_vm._v("请稍等……")])]) : _vm._e(), _vm._v(" "), (_vm.sinHasDataZero == true && _vm.sinHasData == true) ? _c('div', {
    staticClass: "replenishment_frame"
  }, [_c('img', {
    staticClass: "replenishment_img",
    attrs: {
      "src": _vm.replenishmentImg
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.shopStatus_tips !== null) ? _c('div', {
    staticClass: "shopStatus_frame"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.shopStatus_tips) + "\n\t\t\t")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "pagination",
    attrs: {
      "id": "order_list"
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "goods-title"
  }, [_c('span', [_vm._v("全部产品")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "category-name"
  }, [_c('span', [_vm._v("分类")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-211cff0c", module.exports)
  }
}

/***/ })

});