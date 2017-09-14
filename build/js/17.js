webpackJsonp([17],{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(814)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(518),
  /* template */
  __webpack_require__(767),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\details\\details.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ffb8b64", Component.options)
  } else {
    hotAPI.reload("data-v-2ffb8b64", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import store from "store";
module.exports = {
    //components configs
    name: 'suateam_alert',
    props: ['alert_options'],
    data: function data() {
        return {};
    },
    methods: {
        confirm: function confirm() {
            this.$emit('alert_emit', 'true');
        }
    }
};

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.suateam_alert{\r\n\twidth: 300px;\r\n\theight: 200px;\r\n\tposition: fixed;\r\n\tleft: 50%;\r\n\ttop:50%;\r\n\tmargin-left: -150px;\r\n\tmargin-top: -150px;\r\n\tbox-shadow: 1px 1px 5px #999;\r\n\tbackground-color: #fff;\r\n\tz-index: 9999;\n}\nlabel.suateam_alert_title{\r\n\tbackground-color: #f5f5f5;\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tbox-sizing: border-box;\r\n\tpadding: 0 20px;\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\tcolor: #666;\r\n\toverflow: hidden;\r\n\t-webkit-user-select: none;\n}\ndiv.suateam_alert_content{\r\n\tbox-sizing: border-box;\r\n\tpadding:10px 20px;\r\n\tfont-size: 1.4rem;\r\n\tfloat: left;\r\n\twidth: 100%;\r\n\theight: 120px;\r\n\toverflow: hidden;\n}\ndiv.suateam_alert_btn{\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\theight: 40px;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\tpadding: 0 20px;\n}\ndiv.suateam_alert_btn button{\r\n\tmargin: 0 auto;\r\n\tdisplay: table;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sale71ea2ed978c217d0dfade632940f774c.png";

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(453)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(439),
  /* template */
  __webpack_require__(451),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\components\\global\\Alert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6359cacd", Component.options)
  } else {
    hotAPI.reload("data-v-6359cacd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "suateam_alert"
  }, [_c('label', {
    staticClass: "suateam_alert_title"
  }, [_c('span', [_vm._v(_vm._s(_vm.alert_options[0]))])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_alert_content"
  }, [_c('p', [_vm._v(_vm._s(_vm.alert_options[1]))])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_alert_btn"
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.confirm()
      }
    }
  }, [_vm._v("确定")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6359cacd", module.exports)
  }
}

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(441);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("0e79cf34", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6359cacd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6359cacd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Alert2 = __webpack_require__(449);

var _Alert3 = _interopRequireDefault(_Alert2);

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

var common_tools = __webpack_require__(69);
exports.default = {
	name: 'details',
	components: { Alert: _Alert3.default },
	data: function data() {
		return {
			banner: null,
			goodsInfo: '',
			detailList: [],
			counter1: 1,
			methodsChoices: [],
			currCase: '',
			getId: '',
			component_a: '',
			alert_options: ['', ''], //['标题'，'内容']
			alertStatus: null,
			specialimg: __webpack_require__(447)
		};
	},
	filters: {
		formatNum: function formatNum(value) {
			return value.toString().replace(/([0-9])(?=([0-9]{3})+$)/g, '$1,');
		}
	},
	mounted: function mounted() {
		var _self = this;
		$(window).scrollTop(0);
		$('.cp-header').delegate('li', 'click', function () {
			$(this).addClass('active').siblings().removeClass('active');
			var activeIndex = $(this).index();
			$('.detail-body').children().eq(activeIndex).show().siblings().hide();
		});
		this.getId = this.$route.params.detail;
		this.currCase = this.$route.params.case;
		common_tools.AJAX('POST', common_tools.interfaceurl + 'productInfo/queryProductById', {
			"condition": {
				"id": _self.getId
			}
		}, function (data) {
			if (data.rspCode == '100000') {
				_self.goodsInfo = {
					id: data.data.resultSet.id,
					name: data.data.resultSet.name,
					price: data.data.resultSet.price,
					img: data.data.resultSet.img,
					sellPoint: data.data.resultSet.sellPoint,
					description: data.data.resultSet.description,
					sales: data.data.resultSet.sales,
					shelfQty: data.data.resultSet.shelfQty,
					productCode: data.data.resultSet.productCode,
					specialStatus: data.data.resultSet.specialStatus,
					specialPrice: data.data.resultSet.specialPrice
				};
				for (var l = 0; l < data.data.resultSet.proParValueList.length; l++) {
					_self.detailList.push({
						paramValue: data.data.resultSet.proParValueList[l].paramValue,
						typename: data.data.resultSet.proParValueList[l].productParametersType.typename
					});
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
			}
		}, function (data) {
			console.log(data);
		});
	},
	methods: {
		Alert: function Alert(_title, _content) {
			common_tools.Shade_on('details');
			this.alert_options = [_title, _content];
			this.component_a = _Alert3.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component_a = '';
			if (this.alertStatus == 1) {
				this.$router.push('/login');
			};
		},
		checkCounter: function checkCounter() {
			if (this.counter1 >= this.goodsInfo.shelfQty) {
				this.counter1 = this.goodsInfo.shelfQty;
			} else if (this.counter1 < 1) {
				this.counter1 = 1;
			};
		},
		purchase: function purchase(_productCode) {
			var _self = this;
			if (_self.$store.state.islogin == true) {
				switch (parseInt(_self.currCase)) {
					case 1:
						var sendCondition = {
							"productType": "01",
							"productCode": _productCode,
							"commodityNum": _self.counter1
						};
						break;
					case 2:
						var selectId = $('.choices').val();
						var sendCondition = {
							"productType": "02",
							"productCode": _productCode,
							"commodityNum": _self.counter1,
							"rentTypeId": selectId
						};
						break;
					case 3:
						var sendCondition = {
							"productType": "03",
							"productCode": _productCode,
							"commodityNum": _self.counter1
						};
						break;
				};
				common_tools.AJAX('POST', common_tools.interfaceurl + 'shoppingCartInfo/addCartCommoditiesDirect', {
					"condition": sendCondition
				}, function (data) {
					//success callback
					if (data.rspCode !== '100000') {
						_self.Alert('提示', data.rspMsg);
					} else if (data.rspCode == '100000') {
						_self.$router.push({ name: "order", params: { detail: data.data.id } });
					};
				}, function (data) {
					//error callback
					console.log(data);
				});
			} else {
				_self.Alert('提示', '请先登录');
				_self.alertStatus = 1;
				var tempSetNeedReturnThisPage = {
					pageName: "details",
					parm: { getId: _self.getId, currCase: _self.currCase }
				};
				this.$store.commit('setNeedReturnThisPage', tempSetNeedReturnThisPage);
			};
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\n.hide{\r\n\tdisplay:none;\n}\n.detail-right{\r\n\tfloat:left;\r\n\tpadding-left:40px;\r\n\tfont-size: 1.4rem;\n}\n.right-info label{\r\n\tdisplay:inline-block;\r\n\tmargin-right:14px;\r\n\tcolor:#999;\n}\n.right-info li:not(:first-child){\r\n\tpadding-bottom:15px;\n}\n.right-info h3{\r\n\tfont-size: 2rem;\r\n    color: #696969;\r\n    margin:16px 0;\n}\n.info-price i{\r\n\tfont-style:normal;\r\n\tfont-size:1.8rem;\r\n\tmargin-right:4px;\n}\n.info-price span{\r\n\tfont-size:1.8rem;\r\n\tcolor: #ff4b5f;\n}\n.gw_num,.gw_time {\r\n\tdisplay:inline-block;\r\n\tborder: 1px solid #dbdbdb;\r\n\twidth: 110px;\r\n\tline-height: 26px;\r\n\toverflow: hidden;\r\n\tvertical-align: middle;\n}\nspan.person_num{\r\n\tcolor: #696969;\n}\n.gw_num span ,.gw_time span{\r\n\tdisplay: block;\r\n\theight: 26px;\r\n\twidth: 26px;\r\n\tfloat: left;\r\n\t/*color: #7A7979;*/\r\n\tborder-right: 1px solid #dbdbdb;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tbackground:#ededed;\r\n\tfont-size: 1.8rem;\r\n\tfont-weight:bold;\r\n\tcolor:#3c3c3c;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\n}\n.gw_num .num,.gw_time .num {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\ttext-align: center;\r\n\twidth: 52px !important;\r\n\tmin-width: 0px !important;\r\n\theight:26px;\r\n\tfont-style: normal;\r\n\tpadding:0;\r\n\tline-height: 24px;\r\n\tborder: 0;\n}\n.gw_num span.add,.gw_time span.add {\r\n\tfloat: right;\r\n\tborder-right: 0;\r\n\tborder-left: 1px solid #dbdbdb;\n}\r\n/*.detail-purchase{\r\n\tpadding:10px 0 0 40px;\r\n\tmargin:0;\r\n}*/\r\n/*.detail-purchase button{\r\n\tpadding:0.8rem 3rem;\r\n\tfont-size:1.8rem;\r\n}*/\n.detail-content{\r\n\tmargin-top: 50px;\r\n\tpadding:0;\r\n\tfloat: left;\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\n}\n.detail-content p{\r\n\tposition:relative;\r\n\tmargin:0;\r\n\tpadding:0;\n}\n.cp-header{\r\n\theight:40px;\r\n\tline-height:40px;\r\n\tfont-size:1.4rem;\r\n\tbackground:#eee;\r\n\tcolor:#666;\n}\n.cp-header li{\r\n\tdisplay:inline-block;\r\n\twidth:88px;\r\n\ttext-align:center;\r\n\tposition:relative;\r\n\tcursor:pointer;\n}\n.cp-header li.active{\r\n\tbackground:#2196f3;\r\n\tcolor:#fff;\n}\n.cp-header li i{\r\n\tposition:absolute;\r\n\tbottom:-12px;\r\n\tleft:40px;\r\n\twidth:0px;\r\n\theight:0px;\r\n\tborder:6px solid transparent;\r\n\tborder-top:6px solid #2196f3;\r\n\tdisplay:none;\n}\n.cp-header li.active i{\r\n\tdisplay:block\n}\n.detail-body{\r\n\tpadding:18px 0;\r\n\twidth: 100%;\r\n\tfloat: left;\n}\n.detail-table{\r\n\twidth:100%;\n}\n.detail-table td{\r\n\tborder:1px solid #ddd;\r\n\ttext-align: left; \r\n\tpadding-left: 20px;\n}\n.detail-table tr td:first-child{\r\n\twidth:20%;\n}\ndiv.shop_show_mainimg{\r\n\tposition: relative;\r\n    float: left;\r\n    display: block;\r\n    padding: 3px;\r\n    border: 1px #ddd solid;\r\n    box-sizing: border-box;\r\n    width: 400px;\r\n    height: 400px;\r\n    overflow: hidden;\n}\ndiv.shop_show_mainimg img.detail-img{\r\n\twidth:100%;\r\n\tfloat:left;\n}\ndiv.shopInformationDetail{\r\n\tfloat: left;\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n\tpadding: 36px;\n}\ndiv.goodsInfo_description{\r\n\tfloat: left;\r\n\twidth: 100%;\n}\ndiv.goodsInfo_description img{\r\n\twidth: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "details"
    }
  }, [_c(_vm.component_a, {
    tag: "component",
    attrs: {
      "alert_options": _vm.alert_options
    },
    on: {
      "alert_emit": _vm.alert_emit
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "section suateam_banner",
    class: {
      suateam_banner_hasbanner: _vm.banner != null
    },
    style: ({
      backgroundImage: _vm.banner
    })
  })]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "suateam suateam_container_frame"
  }, [_c('div', {
    staticClass: "shopInformationDetail"
  }, [_c('div', {
    staticClass: "shop_show_mainimg"
  }, [_c('img', {
    staticClass: "detail-img",
    attrs: {
      "src": _vm.goodsInfo.img
    }
  }), _vm._v(" "), (_vm.goodsInfo.specialStatus == 'Y') ? _c('img', {
    staticClass: "shopSpeciallStatus",
    staticStyle: {
      "right": "0",
      "width": "150px"
    },
    attrs: {
      "src": _vm.specialimg
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "detail-right"
  }, [_c('ul', {
    staticClass: "right-info"
  }, [_c('li', [_c('h3', [_c('strong', [_vm._v(_vm._s(_vm.goodsInfo.name))])])]), (_vm.goodsInfo.specialStatus == 'N') ? _c('li', {
    staticClass: "info-price"
  }, [_c('label', [_vm._v("价       格：")]), _vm._v(" "), _c('i', {
    staticStyle: {
      "color": "#ff4b5f",
      "font-size": "1.2rem"
    }
  }, [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm._f("formatNum")(_vm.goodsInfo.price)))])]) : _vm._e(), _vm._v(" "), (_vm.goodsInfo.specialStatus == 'Y') ? _c('li', {
    staticClass: "info-price"
  }, [_c('label', [_vm._v("特       价：")]), _vm._v(" "), _c('i', {
    staticStyle: {
      "color": "#ff4b5f",
      "font-size": "1.2rem"
    }
  }, [_vm._v("¥")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm._f("formatNum")(_vm.goodsInfo.specialPrice)))])]) : _vm._e(), _vm._v(" "), (_vm.goodsInfo.specialStatus == 'Y') ? _c('li', {
    staticClass: "info-price"
  }, [_c('label', [_vm._v("原       价：")]), _vm._v(" "), _c('i', {
    staticStyle: {
      "color": "#ff4b5f",
      "font-size": "1.2rem"
    }
  }, [_vm._v("¥")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "text-decoration": "line-through"
    }
  }, [_vm._v(_vm._s(_vm._f("formatNum")(_vm.goodsInfo.price)))])]) : _vm._e(), _vm._v(" "), _c('li', [_c('label', [_vm._v("销       量：")]), _vm._v(" "), _c('span', [_vm._v("最近有"), _c('span', {
    staticClass: "person_num"
  }, [_vm._v(_vm._s(_vm.goodsInfo.sales))]), _vm._v("人已购买")])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("库       存：")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.goodsInfo.shelfQty))])]), _vm._v(" "), _c('li', [(_vm.currCase !== 3) ? _c('label', [_vm._v("选择数量")]) : _vm._e(), _vm._v(" "), (_vm.currCase == 3) ? _c('label', [_vm._v("服务次数")]) : _vm._e(), _vm._v(" "), _c('div', {
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
      "blur": function($event) {
        _vm.checkCounter()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.counter1 = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "add",
    on: {
      "click": function($event) {
        _vm.counter1 > _vm.goodsInfo.shelfQty - 1 ? _vm.counter1 : _vm.counter1++
      }
    }
  }, [_vm._v("+")])])]), _vm._v(" "), (_vm.currCase == 2) ? _c('li', [_c('label', [_vm._v("请选择租赁方式：")]), _vm._v(" "), (_vm.methodsChoices.length == 0) ? _c('label', [_vm._v("暂无租赁方式")]) : _vm._e(), _vm._v(" "), (_vm.methodsChoices.length !== 0) ? _c('select', {
    staticClass: "choices",
    staticStyle: {
      "margin-top": "15px"
    }
  }, _vm._l((_vm.methodsChoices), function(item) {
    return _c('option', {
      domProps: {
        "value": item.id
      }
    }, [_vm._v("期限：" + _vm._s(item.name) + "年，租金：" + _vm._s(item.price) + "元/月，押金：" + _vm._s(item.deposition) + "元")])
  })) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('li', [_c('p', {
    staticClass: "detail-purchase"
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.purchase(_vm.goodsInfo.productCode)
      }
    }
  }, [_vm._v("购买")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "detail-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "detail-body"
  }, [_c('table', {
    staticClass: "detail-table"
  }, [_c('tbody', _vm._l((_vm.detailList), function(item) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(item.typename))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.paramValue))])])
  }))]), _vm._v(" "), (_vm.goodsInfo.description !== '') ? _c('div', {
    staticClass: "goodsInfo_description hide",
    domProps: {
      "innerHTML": _vm._s(_vm.goodsInfo.description)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.goodsInfo.description == '') ? _c('div', {
    staticClass: "goodsInfo_description hide"
  }, [_vm._m(1)]) : _vm._e()])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "cp-header"
  }, [_c('li', {
    staticClass: "active"
  }, [_vm._v("产品参数"), _c('i')]), _vm._v(" "), _c('li', [_vm._v("产品描述"), _c('i')])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "detail-table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v("暂无产品描述")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2ffb8b64", module.exports)
  }
}

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("8420bdb4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2ffb8b64\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./details.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2ffb8b64\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./details.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});