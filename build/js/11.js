webpackJsonp([11,45],{

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(819)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(554),
  /* template */
  __webpack_require__(772),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\services\\services.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] services.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41d26c88", Component.options)
  } else {
    hotAPI.reload("data-v-41d26c88", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {;(function($,window,document,undefined){var defaults={totalData:0,showData:0,pageCount:9,current:1,prevCls:'prev',nextCls:'next',prevContent:'上一页',nextContent:'下一页',activeCls:'active',coping:false,homePage:'',endPage:'',count:3,jump:false,jumpIptCls:'jump-ipt',jumpBtnCls:'jump-btn',jumpBtn:'跳转',callback:function(){}};var Pagination=function(element,options){var opts=options,current,$document=$(document),$obj=$(element);this.setTotalPage=function(page){return opts.pageCount=page};this.getTotalPage=function(){var p=opts.totalData||opts.showData?Math.ceil(parseInt(opts.totalData)/opts.showData):opts.pageCount;return p};this.getCurrent=function(){return current};this.filling=function(index){var html='';current=index||opts.current;var pageCount=this.getTotalPage();if(current>1){html+='<a href="javascript:;" class="'+opts.prevCls+'">'+opts.prevContent+'</a>'}else{$obj.find('.'+opts.prevCls)&&$obj.find('.'+opts.prevCls).remove()}if(current>=opts.count*2&&current!=1&&pageCount!=opts.count){var home=opts.coping&&opts.homePage?opts.homePage:'1';html+=opts.coping?'<a href="javascript:;" data-page="1">'+home+'</a><span>...</span>':''}var start=current-opts.count,end=current+opts.count;((start>1&&current<opts.count)||current==1)&&end++;(current>pageCount-opts.count&&current>=pageCount)&&start++;for(;start<=end;start++){if(start<=pageCount&&start>=1){if(start!=current){html+='<a href="javascript:;" data-page="'+start+'">'+start+'</a>'}else{html+='<span class="'+opts.activeCls+'">'+start+'</span>'}}}if(current+opts.count<pageCount&&current>=1&&pageCount>opts.count){var end=opts.coping&&opts.endPage?opts.endPage:pageCount;html+=opts.coping?'<span>...</span><a href="javascript:;" data-page="'+pageCount+'">'+end+'</a>':''}if(current<pageCount){html+='<a href="javascript:;" class="'+opts.nextCls+'">'+opts.nextContent+'</a>'}else{$obj.find('.'+opts.nextCls)&&$obj.find('.'+opts.nextCls).remove()}html+=opts.jump?'<input type="text" class="'+opts.jumpIptCls+'"><a href="javascript:;" class="'+opts.jumpBtnCls+'">'+opts.jumpBtn+'</a>':'';$obj.empty().html(html)};this.eventBind=function(){var self=this;var pageCount=this.getTotalPage();$obj.off().on('click','a',function(){if($(this).hasClass(opts.nextCls)){var index=parseInt($obj.find('.'+opts.activeCls).text())+1}else if($(this).hasClass(opts.prevCls)){var index=parseInt($obj.find('.'+opts.activeCls).text())-1}else if($(this).hasClass(opts.jumpBtnCls)){if($obj.find('.'+opts.jumpIptCls).val()!==''){var index=parseInt($obj.find('.'+opts.jumpIptCls).val())}else{return}}else{var index=parseInt($(this).data('page'))}self.filling(index);typeof opts.callback==='function'&&opts.callback(self)});$obj.on('input propertychange','.'+opts.jumpIptCls,function(){var $this=$(this);var val=$this.val();var reg=/[^\d]/g;if(reg.test(val)){$this.val(val.replace(reg,''))}(parseInt(val)>pageCount)&&$this.val(pageCount);if(parseInt(val)===0){$this.val(1)}});$document.keydown(function(e){var self=this;if(e.keyCode==13&&$obj.find('.'+opts.jumpIptCls).val()){var index=parseInt($obj.find('.'+opts.jumpIptCls).val());self.filling(index);typeof opts.callback==='function'&&opts.callback(self)}})};this.init=function(){this.filling(opts.current);this.eventBind()};this.init()};$.fn.pagination=function(parameter,callback){if(typeof parameter=='function'){callback=parameter;parameter={}}else{parameter=parameter||{};callback=callback||function(){}}var options=$.extend({},defaults,parameter);return this.each(function(){var pagination=new Pagination(this,options);callback(pagination)})}})(jQuery,window,document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dialog = __webpack_require__(136);

var _dialog2 = _interopRequireDefault(_dialog);

var _alert = __webpack_require__(135);

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var common_tools = __webpack_require__(69);
exports.default = {
	props: ['currCase', 'getId'],
	components: { Dialog: _dialog2.default, Alert: _alert2.default },
	mounted: function mounted() {
		var _self = this;
		if (this.currCase == 4) {
			//资讯订单弹窗
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbTag/listSuateamEbTag', {}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {
					console.log(data);
				} else if (data.rspCode == '100000') {
					_self.industryArray = data.data.resultSet;
					_self.industry_id = data.data.resultSet[0].id;
					_self.industry_name = data.data.resultSet[0].name;
					_self.checkprice();
				};
			}, function (data) {
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
		} else {
			//单品汇、产品租赁、全息服务弹窗
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProductById', {
				"condition": { "id": _self.getId }
			}, function (data) {
				if (data.rspCode == '100000') {
					_self.goodsInfo = {
						name: data.data.resultSet.name,
						price: data.data.resultSet.price,
						img: data.data.resultSet.img,
						sales: data.data.resultSet.sales,
						shelfQty: data.data.resultSet.shelfQty
					};
					for (var l = 0; l < data.data.resultSet.productRenttypeList.length; l++) {
						_self.methodsChoices.push({
							id: data.data.resultSet.productRenttypeList[l].id,
							name: data.data.resultSet.productRenttypeList[l].name,
							price: data.data.resultSet.productRenttypeList[l].price,
							deposition: data.data.resultSet.productRenttypeList[l].deposition
						});
					};
				} else if (data.rspCode !== '100000') {
					console.log("暂无商品");
				};
			}, function (data) {
				console.log(data);
			});
		};
	},
	data: function data() {
		return {
			counter1: 1,
			counter2: 1,
			counter3: 1,
			counter4: 1,
			select3: false,
			select2: false,
			currCase_getTagArray: [],
			currCase_orderTagArray: [],
			currCase_orderTagArray2: [],
			currCase_orderTagArray3: [],
			currCase_orderTag1: '',
			currCase_orderTag2: '',
			currCase_orderTag3: '',
			currCase_total_price: '请稍后…',
			currCase_total_price_orderID: '',
			currCase_orderNo: '',
			currCase_productName: '',
			currCase_totalPrice: '',
			currCase_productTypeName: '',
			component_d: '',
			dialog_option: ['', ''], //['标题'，'内容']
			component_a: '',
			alert_options: ['', ''], //['标题'，'内容']
			isordersucess: false,
			goodsInfo: '',
			methodsChoices: [],
			selectedId: '',
			industry_id: '',
			industry_name: '',
			industryArray: []
		};
	},
	methods: {
		isShow: function isShow() {
			this.$emit('closeModal', 'false');
		},
		Dialog: function Dialog(_title, _content) {
			this.component_d = _dialog2.default;
			this.dialog_option = [_title, _content];
		},
		dialog_emit: function dialog_emit(_val) {
			if (_val == true && this.isordersucess == true) {
				this.toPay();
			} else {
				this.component_d = '';
			};
		},
		Alert: function Alert(_title, _content) {
			this.alert_options = [_title, _content];
			this.component_a = _alert2.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component_a = '';
			this.isShow();
		},
		toPay: function toPay() {
			//去支付--调用银行支付
			var _self = this;
			var _orderNo = _self.currCase_orderNo;
			//      		var _productType=_self.currCase_productTypeName;
			//      		var _name=_self.currCase_productName;
			//      		var _totalPrice=_self.currCase_totalPrice;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEPay/gpPay', {
				"condition": {
					"id": _orderNo
				}
			}, function (data) {
				console.log(data.responseText);
			}, function (data) {
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
		changeindustry: function changeindustry(_target) {
			this.industry_id = _target.options[_target.selectedIndex].id;
			this.checkprice();
		},
		checkprice: function checkprice() {
			//获得资讯订单价格
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbTag/getPrice', {
				"condition": {
					"tagId": _self.industry_id
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {
					console.log(data);
				} else if (data.rspCode == '100000') {
					_self.currCase_total_price = data.data.totalPrice;
					//	   					if(data.data!=null&&data.data.totalPrice==null){
					//	   						_self.Alert("提示",data.data.rspMsg);
					//	   					}else{
					//	   						_self.Alert("提示",data.rspMsg);
					//	   					};
				};
			}, function (data) {
				//error callback
				console.log(data);
			});
		},
		currCase_sendinfo: function currCase_sendinfo() {
			//提交资讯订单
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbTag/orderTags', {
				"condition": {
					"tagIds": [_self.industry_id]
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {
					_self.Dialog("订阅", data.rspMsg);
					_self.isordersucess = false;
				} else if (data.rspCode == '100000') {
					_self.currCase_total_price_orderID = data.data.orderId;
					common_tools.AJAX('POST', common_tools.interfaceurl + 'orderInfo/queryOrderById', {
						"condition": {
							"id": _self.currCase_total_price_orderID
						}
					}, function (data) {
						//success callback
						if (data.rspCode !== '100000') {
							if (data.data != null) {
								_self.Alert("提示", data.data.rspMsg);
							} else {
								_self.Alert("提示", data.rspMsg);
							};
						} else if (data.rspCode == '100000') {
							_self.isordersucess = true;
							_self.currCase_orderNo = data.data.resultSet.id;
							//								_self.currCase_productName=data.data.resultSet.orderCommoditiesList[0].product.name;
							//		   						_self.currCase_totalPrice=data.data.resultSet.orderCommoditiesList[0].totalPrice;
							//		   						_self.currCase_productTypeName=data.data.resultSet.orderCommoditiesList[0].productName;
						};
					}, function (data) {
						//error callback
						console.log(data);
					});

					_self.Dialog("订阅成功", "您已成功订阅");
				};
			}, function (data) {
				//error callback
				console.log(data);
			});
		}
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
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\n.popup {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tbackground: rgba(0, 0, 0, .3);\r\n\tz-index: 999999;\n}\n.popup-modal {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\twidth: 360px;\r\n\ttransform: translate(-50%, -50%);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\ttext-align: center;\r\n\tpadding: 4px 0;\n}\n.popup-modal img {\r\n\twidth: 97%;\n}\n.goodsNumUl>li{\r\n\ttext-align: left;\r\n\tpadding:6px 0;\n}\n.goodsNumUl>li>span{\r\n\tdisplay:inline-block;\r\n\twidth:33%;\r\n\ttext-align:left;\r\n\tmargin-left:20%;\r\n\tfont-size: 1.4rem;\r\n\tcolor: #696969;\n}\n.goodsNumUl>li .total-price{\r\n\tmargin-left:5%;\n}\n.total-price i{\r\n\tfont-style:normal;\r\n\tpadding-left:4px;\n}\n.gw_num,.gw_time {\r\n\tdisplay:inline-block;\r\n\tborder: 1px solid #dbdbdb;\r\n\twidth: 110px;\r\n\tline-height: 26px;\r\n\toverflow: hidden;\r\n\tvertical-align: middle;\n}\n.gw_num span ,.gw_time span{\r\n\tdisplay: block;\r\n\theight: 26px;\r\n\twidth: 26px;\r\n\tfloat: left;\r\n\tcolor: #7A7979;\r\n\tborder-right: 1px solid #dbdbdb;\r\n\ttext-align: center;\r\n\tcursor: pointer;\n}\n.gw_num .num,.gw_time .num {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\ttext-align: center;\r\n\twidth: 52px !important;\r\n\tmin-width: 0px !important;\r\n\theight:26px;\r\n\tfont-style: normal;\r\n\tfont-size: 1.4rem;\r\n\tpadding:0;\r\n\tline-height: 24px;\r\n\tborder: 0;\n}\n.gw_num span.add,.gw_time span.add {\r\n\tfloat: right;\r\n\tborder-right: 0;\r\n\tborder-left: 1px solid #dbdbdb;\n}\n.seeMore{\r\n\tfloat:left;\r\n\tfont-size:1.4rem;\r\n\tcolor:#aaa;\r\n\tcursor:pointer;\r\n\tposition:relative;\r\n\ttop:6px;\n}\n.getScheme{\r\n\tfloat:right;\n}\nspan.del_ico{\r\n\tfloat: right;\r\n\tcursor: pointer;\r\n\twidth: 32px !important;\r\n\theight: 32px !important;\r\n\tline-height: 32px;\r\n\ttext-align: center !important;\r\n\tmargin: 5px 0;\r\n\tcolor: darkred;\n}\nselect#currCase_select_tag1,select#currCase_select_tag2,select#currCase_select_tag3{\r\n\tfloat: left;\r\n\twidth: 85%;\r\n\tmargin: 5px 0;\n}\ndiv.currCase_select{\r\n\tdisplay: table;\r\n\tmargin: 0 auto;\r\n\twidth: 70%;\n}\n.goods-lease>li>span {\r\n\twidth:30%;\r\n\tmargin-left:14%;\n}\nul.goods-lease>li>select{\r\n\twidth:70%;\r\n\tmargin:0 auto;\r\n\tfont-size:1.2rem;\r\n\tmargin-top:14px;\n}\ndiv.commonPopup_btn_containter{\r\n\tfloat: left;\r\n\twidth: 100%;\r\n\tmargin: 12px 0;\r\n\tbox-sizing: border-box;\r\n\tpadding: 0 60px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sale71ea2ed978c217d0dfade632940f774c.png";

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/loadingd23bd610e3e7ac26d7dc203a24e1f0d2.gif";

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(454)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(440),
  /* template */
  __webpack_require__(452),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\components\\global\\commonPopup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] commonPopup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7256f9d2", Component.options)
  } else {
    hotAPI.reload("data-v-7256f9d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "popup"
  }, [_c('div', {
    attrs: {
      "id": "topayframe"
    }
  }), _vm._v(" "), _c(_vm.component_a, {
    tag: "component",
    attrs: {
      "alert_options": _vm.alert_options
    },
    on: {
      "alert_emit": _vm.alert_emit
    }
  }), _vm._v(" "), _c(_vm.component_d, {
    tag: "component",
    attrs: {
      "dialog_options": _vm.dialog_option
    },
    on: {
      "dialog_emit": _vm.dialog_emit
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "popup-modal"
  }, [(_vm.currCase != 4) ? _c('img', {
    attrs: {
      "src": _vm.goodsInfo.img
    }
  }) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.currCase != 4) ? _c('span', {
    staticStyle: {
      "display": "inline-block",
      "font-size": "1.8rem",
      "padding": "8px"
    }
  }, [_vm._v(_vm._s(_vm.goodsInfo.name))]) : _vm._e(), _vm._v(" "), (_vm.currCase == 1) ? _c('ul', {
    staticClass: "goodsNumUl"
  }, [_c('li', [_c('span', [_vm._v("商品单价：")]), _c('span', {
    staticClass: "total-price"
  }, [_vm._v("¥"), _c('i', [_vm._v(_vm._s(_vm.goodsInfo.price))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("销       量：")]), _c('span', {
    staticClass: "total-price"
  }, [_c('i', [_vm._v(_vm._s(_vm.goodsInfo.sales))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("库       存：")]), _c('span', {
    staticClass: "total-price"
  }, [_c('i', [_vm._v(_vm._s(_vm.goodsInfo.shelfQty))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("购买数量：")]), _vm._v(" "), _c('div', {
    staticClass: "gw_num"
  }, [_c('span', {
    staticClass: "jian",
    on: {
      "click": function($event) {
        _vm.counter1 > 1 ? _vm.counter1 -= 1 : _vm.counter1 = 1
      }
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.counter1),
      expression: "counter1"
    }],
    staticClass: "num",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.counter1)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.counter1 = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "add",
    on: {
      "click": function($event) {
        _vm.counter1 += 1
      }
    }
  }, [_vm._v("+")])])])]) : _vm._e(), _vm._v(" "), (_vm.currCase == 2) ? _c('ul', {
    staticClass: "goodsNumUl goods-lease"
  }, [_c('li', [_c('span', [_vm._v("销       量：")]), _c('span', {
    staticClass: "total-price"
  }, [_c('i', [_vm._v(_vm._s(_vm.goodsInfo.sales))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("库       存：")]), _c('span', {
    staticClass: "total-price"
  }, [_c('i', [_vm._v(_vm._s(_vm.goodsInfo.shelfQty))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("租赁数量：")]), _vm._v(" "), _c('div', {
    staticClass: "gw_num"
  }, [_c('span', {
    staticClass: "jian",
    on: {
      "click": function($event) {
        _vm.counter2 > 1 ? _vm.counter2 -= 1 : _vm.counter2 = 1
      }
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.counter2),
      expression: "counter2"
    }],
    staticClass: "num",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.counter2)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.counter2 = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "add",
    on: {
      "click": function($event) {
        _vm.counter2 += 1
      }
    }
  }, [_vm._v("+")])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("请选择方式：")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('select', {
    staticClass: "choices"
  }, _vm._l((_vm.methodsChoices), function(item) {
    return _c('option', {
      domProps: {
        "value": item.id
      }
    }, [_vm._v("期限：" + _vm._s(item.name) + "，租金：" + _vm._s(item.price) + "，押金：" + _vm._s(item.deposition))])
  }))])]) : _vm._e(), _vm._v(" "), (_vm.currCase == 3) ? _c('ul', {
    staticClass: "goodsNumUl"
  }, [_c('li', [_c('span', [_vm._v("商品单价：")]), _c('span', {
    staticClass: "total-price"
  }, [_vm._v("¥"), _c('i', [_vm._v(_vm._s(_vm.goodsInfo.price))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("销       量：")]), _c('span', {
    staticClass: "total-price"
  }, [_c('i', [_vm._v(_vm._s(_vm.goodsInfo.sales))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("库       存：")]), _c('span', {
    staticClass: "total-price"
  }, [_c('i', [_vm._v(_vm._s(_vm.goodsInfo.shelfQty))])])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("购买数量：")]), _vm._v(" "), _c('div', {
    staticClass: "gw_num"
  }, [_c('span', {
    staticClass: "jian",
    on: {
      "click": function($event) {
        _vm.counter3 > 1 ? _vm.counter3 -= 1 : _vm.counter3 = 1
      }
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.counter3),
      expression: "counter3"
    }],
    staticClass: "num",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.counter3)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.counter3 = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "add",
    on: {
      "click": function($event) {
        _vm.counter3 += 1
      }
    }
  }, [_vm._v("+")])])])]) : _vm._e(), _vm._v(" "), (_vm.currCase == 4) ? _c('ul', {
    staticClass: "goodsNumUl"
  }, [_c('li', {
    staticStyle: {
      "text-align": "center",
      "font-size": "1.8rem"
    }
  }, [_vm._v("资讯订阅")]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "suateam_select_frame"
  }, [_c('label', [_vm._v("行业选择:")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.industry_name),
      expression: "industry_name"
    }],
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.industry_name = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.changeindustry($event.target)
      }]
    }
  }, _vm._l((_vm.industryArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      }
    }, [_vm._v(_vm._s(items.name))])
  }))]), _vm._v(" "), _c('span', [_vm._v("订阅价格：")]), _vm._v(" "), _c('span', {
    staticClass: "total-price"
  }, [_vm._v("¥"), _c('i', [_vm._v(_vm._s(_vm.currCase_total_price))])])]), _vm._v(" "), _c('div', {
    staticClass: "commonPopup_btn_containter"
  }, [_c('span', {
    staticClass: "seeMore",
    on: {
      "click": _vm.isShow
    }
  }, [_vm._v("我再看看")]), _vm._v(" "), _c('button', {
    staticClass: "getScheme bluecolor",
    on: {
      "click": function($event) {
        _vm.currCase_sendinfo()
      }
    }
  }, [_vm._v("我要订阅")])])]) : _vm._e(), _vm._v(" "), (_vm.currCase != 4) ? _c('div', {
    staticClass: "commonPopup_btn_containter"
  }, [_c('span', {
    staticClass: "seeMore",
    on: {
      "click": _vm.isShow
    }
  }, [_vm._v("我再看看")]), _vm._v(" "), _c('button', {
    staticClass: "getScheme bluecolor",
    on: {
      "click": function($event) {
        _vm.purchase(_vm.getId)
      }
    }
  }, [_vm._v("购买")])]) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7256f9d2", module.exports)
  }
}

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(442);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("fd48f468", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7256f9d2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./commonPopup.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7256f9d2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./commonPopup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAADNUlEQVRo3u2Zz47SQBzHP6AxalTKxs0elzegbwAPoIE38HcwGk+SePCwmuzG9eQm4hPYxMR4MHFj9gH2DYQXMBjPJqAeVmNnPHTKQpmWAi2LK5P80jLTlvnM9/dnCgWtNeehFTknbQ2yBlmDnDXIgVTOiyIVDuSQA3HOg2s1gOM8YZYB0jHHap4wywBxh2eaKgrv3wTROCjAH1qD59JaXZC47ORTH4EI7SV72WazLBVp80JcC4hMgAQKeasJEqx8e6zvmQg+JYsioKixYwFfAZASPjX2pQ7Anjj4tK0QpyarBbIv7sjkmgbMi1Ujem0G7WJmbqXBmMtT8dA0RvqCuNATtj18RksqaPq88vpnp8h4QNfwuWMNcJudPqOySAJYHOSJ1PGpTnGheAuboo6iwQMTY0sF2REHhRcpeOmUiCqiENO3u3yQIKC3EyfsT4EEuC8y8pwad2cvlvMF+2Nx0ByiqVkCeNKI7R9wT1w07Uh/EyI1KRdFgvpQS+U6KsHVgr5PKEqRe2auL4WZf9d6JE00HxZUYvp1UOZN+lRcnEON3dQB7QNlYCOFYqOfg7rj5udaD8VFUU3tOgUDUjbncSDa2u/mF+zjFTzedcKxrZGl2gK+xtxrP3fyU0SZl6SoErZVvgBjUymZZYsqkHSeG4if0scVsGlRbDNlltORYpm5a6mUmacI3LCMXTdjfxJcitnVmMe1jlNlHsc8ORo3RQOjLDtiNXHs5AnSm5IyAysnJIGbMROftBxBXns9FN2ElBmk2csxq63NWCFWhfD4hUOvl+8WJdztxqlxZUq1VxFQuyJevjESgmgGsSnzaoqty7XE8cGsG8b5QN56fRTtWFWSlNAprtO0+Tj76+58u9933i6KrtW/T1JM+CR2N9BFz67GYi9WGkExmJjM9xSq/LTWnwEa4WjZPz689zpo6sN4CSf6C/icoErPXEPkBQvqHHmdeadTWPh/9qa4gAdUJ6r4BnDJfP4NfAN+TDyhC8giENmAADTEAVpoWmZ7OL7NsH9FmJ3a87pT9iBhuy0OIMaqMQBdo6CXBUA+INF2S9yRzXx/Ufc5O5AltvX/7GuQNch/AvIX+g+qXLItXZEAAAAASUVORK5CYII="

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonPopup = __webpack_require__(450);

var _commonPopup2 = _interopRequireDefault(_commonPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var common_tools = __webpack_require__(69);

exports.default = {
	beforeRouteEnter: function beforeRouteEnter(to, from, next) {
		var fromPagePath = from.path.toString();
		if (fromPagePath.indexOf('details') !== -1) {
			next(function (vm) {
				if (vm.$store.state.currentPages.type == '03') {
					vm.currentPages = vm.$store.state.currentPages.page;
					if (vm.$store.state.currentPages.searchKey !== '') {
						vm.searchShopString = vm.$store.state.currentPages.searchKey;
						vm.loadingProductType();
						vm.fromDetialReturnSearchShop();
					} else {
						vm.fromDetialReturnThisPage();
						vm.loadingProductType();
						vm.loadingHotProducts();
					};
				} else {
					vm.currentPages = 1;
					vm.init();
				};
			});
		} else {
			next(function (vm) {
				vm.currentPages = 1;
				vm.init();
			});
		};
	},

	components: { commonPopup: _commonPopup2.default },
	name: 'services',
	data: function data() {
		return {
			banner: 'url(' + __webpack_require__(729) + ')',
			fireSrc: __webpack_require__(462),
			isCur: null,
			isActive1: null,
			isActive2: null,
			isPurchase: null,
			gId: '',
			sinHotItems: [],
			sinItems: [],
			ishasorder: false,
			pages: {},
			categoryBox: [],
			currCase: 3,
			sinHotHasData: false,
			sinHasData: false,
			shopType: '',
			searchShopString: '',
			loadingImg: __webpack_require__(448),
			currentPages: 1,
			isShowHotProduct: true,
			specialimg: __webpack_require__(447)
		};
	},
	filters: {
		formatNum: function formatNum(value) {
			return value.toString().replace(/([0-9])(?=([0-9]{3})+$)/g, '$1,');
		}
	},
	methods: {
		ispopup: function ispopup(id) {
			this.isPurchase = 'true';
			this.gId = id;
		},
		searchShop: function searchShop() {
			//搜索产品
			var _self = this;
			_self.sinHasData = false;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": {
					"productType": "03",
					"typeCode": _self.shopType,
					"name": _self.searchShopString
				}, "page": {
					"currentPage": 1, //当前页数
					"pageSize": 12 //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.sinHasData = false;
						alert('暂无商品');
					} else {
						_self.pages = data.page;
						_self.sinItems = [];
						_self.isShowHotProduct = false;
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

					_self.update_products_list(_self.shopType, 1);
				} else if (data.rspCode == '999999') {}
			}, function (data) {
				console.log(data);
			});
		},
		fromDetialReturnSearchShop: function fromDetialReturnSearchShop() {
			//搜索商品
			var _self = this;
			_self.sinHasData = false;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": {
					"productType": "03",
					"typeCode": _self.shopType,
					"name": _self.searchShopString
				},
				"page": {
					"currentPage": _self.currentPages, //当前页数
					"pageSize": 12 //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.sinHasData = false;
						alert('暂无商品');
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
					};
					_self.sinHasData = true;
					console.log(_self.shopType);
					_self.update_products_list(_self.shopType);
				} else if (data.rspCode == '999999') {
					console.log(data);
				}
			}, function (data) {
				console.log(data);
			});
		},
		closeModal: function closeModal(arg) {
			this.isPurchase = !this.isPurchase;
		},
		fromDetialReturnThisPage: function fromDetialReturnThisPage() {
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": { "productType": "03" },
				"page": { "currentPage": _self.currentPages, "pageSize": 8 }
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						alert('暂无商品');
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
						}
					};
					_self.sinHasData = true;
					_self.update_products_list();
				} else if (data.rspCode == '999999') {}
			}, function (data) {
				console.log(data);
			});
		},
		update_products_list: function update_products_list(_code, _current) {
			var _self = this;
			$('.pagination').pagination({
				jump: true,
				coping: true,
				current: _current ? _current : _self.currentPages,
				endPage: _self.pages.totalPage,
				totalData: _self.pages.totalRecord,
				showData: _self.pages.pageSize,
				callback: function callback(e) {
					var currentpages = e.getCurrent();
					_self.currentPages = currentpages;
					_self.sinItems = [];
					_self.sinHasData = false;
					if (_code) {
						var sendData = {
							"condition": { "productType": "03", "typeCode": _code, "name": _self.searchShopString },
							"page": { "currentPage": currentpages, "pageSize": 8 }
						};
					} else {
						var sendData = {
							"condition": { "productType": "03", "name": _self.searchShopString },
							"page": { "currentPage": currentpages, "pageSize": 8 }
						};
					}
					common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', sendData, function (data) {
						if (data.rspCode == '100000') {
							if (data.data.resultSet.length == 0) {
								_self.sinHasData = false;
								alert('暂无商品');
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
							}
						} else if (data.rspCode == '999999') {}
					}, function (data) {
						console.log(data);
					});
				}
			});
		},
		goodsSearch: function goodsSearch(_code, _this) {
			$(_this).addClass('active').siblings().removeClass('active');
			var _self = this;
			var sendcode = null;
			_self.sinItems = [];
			_self.sinHasData = false;
			if (_code == 0) {
				sendcode = '';
				_self.shopType = sendcode;
			} else {
				sendcode = _code;
				_self.shopType = sendcode;
			}
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": { "productType": "03", "typeCode": sendcode },
				"page": { "currentPage": 1, "pageSize": 8 }
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.sinHasData = false;
						alert('暂无商品');
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
						}
					}
					_self.update_products_list(_code);
					_self.sinHasData = true;
				} else if (data.rspCode == '999999') {}
			}, function (data) {
				console.log(data);
			});
		},
		goToDetails: function goToDetails(sendId) {
			var _self = this;
			this.$store.state.currentPages.page = _self.currentPages;
			this.$store.state.currentPages.type = '03';
			this.$store.state.currentPages.searchKey = this.searchShopString;
			this.$router.push({ name: "details", params: { detail: sendId, case: this.currCase } });
		},
		loadingHotProducts: function loadingHotProducts() {
			var _self = this;
			//热门商品初始化加载
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryHotProducts', {
				"condition": { "productType": "03" },
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
		},
		loadingProductType: function loadingProductType() {
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbProductType/queryProductType', {
				"condition": { "productType": "03" }
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
		},
		init: function init() {
			__webpack_require__(438);
			var _self = this;
			_self.sinHotItems = [];
			_self.sinItems = [];
			_self.categoryBox = [];
			//热门商品初始化加载
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryHotProducts', {
				"condition": { "productType": "03" },
				"page": {
					"currentPage": 1, //当前页数
					"pageSize": 4 //页面内容个数
				}
			}, function (data) {
				if (data.rspCode == '100000') {
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
			//商品初始化加载
			common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProducts', {
				"condition": { "productType": "03" },
				"page": { "currentPage": _self.currentPages, "pageSize": 8 }
			}, function (data) {
				if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						alert('暂无商品');
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
						}
					};
					_self.sinHasData = true;
					_self.update_products_list();
				} else if (data.rspCode == '999999') {}
			}, function (data) {
				console.log(data);
			});
			common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbProductType/queryProductType', {
				"condition": { "productType": "03" }
			}, function (data) {
				if (data.rspCode == '100000') {
					for (var a = 0; a < data.data.resultSet.length; a++) {
						_self.categoryBox.push({
							code: data.data.resultSet[a].code,
							typeName: data.data.resultSet[a].typeName
						});
					}
				} else if (data.rspCode !== '100000') {}
			}, function (data) {
				console.log(data);
			});
		}
	},
	mounted: function mounted() {
		//			require('pagination');
		//			var _self = this;
		//			//热门商品初始化加载
		//			common_tools.AJAX('POST',common_tools.interfaceurl+'productInfo/queryHotProducts',{
		//			    "condition": {"productType": "03"},
		//			    "page": {
		//			        "currentPage": 1,	//当前页数
		//			        "pageSize": 4	//页面内容个数
		//			    }
		//			},function(data){
		//				if(data.rspCode=='100000'){
		//					for(var i=0;i<data.data.resultSet.length;i++){
		//						_self.sinHotItems.push({
		//							id:data.data.resultSet[i].id,
		//							name:data.data.resultSet[i].name,
		//							price:data.data.resultSet[i].price,
		//							img:data.data.resultSet[i].img,
		//							sellPoint:data.data.resultSet[i].sellPoint,
		//							specialStatus:data.data.resultSet[i].specialStatus,
		//							specialPrice:data.data.resultSet[i].specialPrice
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
		//			    "condition": {"productType": "03"},
		//			    "page": {"currentPage": _self.currentPages,"pageSize":8}
		//			},function(data){
		//				if(data.rspCode=='100000'){
		//					if(data.data.resultSet.length==0){
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
		//								specialStatus:data.data.resultSet[i].specialStatus,
		//								specialPrice:data.data.resultSet[i].specialPrice
		//							})
		//						}
		//	   				};
		//	   				_self.sinHasData=true;
		//					_self.update_products_list();
		//		   			
		//				}else if(data.rspCode=='999999'){
		//					
		//				}
		//			},function(data){
		//				console.log(data);
		//			});
		//			common_tools.AJAX('POST',common_tools.interfaceurl+'suateamEbProductType/queryProductType',{
		//			    "condition": {"productType": "03"}
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
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/banner8e80c8e813562576758466cfd20b8e51.jpg";

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "services"
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
  }, [_vm._v("×")]) : _vm._e()])])]), _vm._v(" "), (_vm.isShowHotProduct == true) ? _c('section', {
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
  }), _vm._v(" "), _c('span', [_vm._v("请稍等……")])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "pagination",
    attrs: {
      "id": "order_list"
    }
  }), _vm._v(" "), (_vm.isPurchase) ? _c('commonPopup', {
    attrs: {
      "currCase": 1,
      "getId": _vm.gId
    },
    on: {
      "closeModal": _vm.closeModal
    }
  }) : _vm._e()], 1)
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41d26c88", module.exports)
  }
}

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(609);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("443cec24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-41d26c88\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./services.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-41d26c88\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./services.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});