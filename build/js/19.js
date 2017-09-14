webpackJsonp([19],{

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(823)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(544),
  /* template */
  __webpack_require__(776),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\order\\contract.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] contract.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5558fcea", Component.options)
  } else {
    hotAPI.reload("data-v-5558fcea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _store = __webpack_require__(54);

var _store2 = _interopRequireDefault(_store);

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

var common_tools = __webpack_require__(69);

module.exports = {
	name: 'upfile',
	props: ['upfile_option'],
	data: function data() {
		return {
			fileArray: null,
			returndataurl: null,
			limitsize: true,
			limittype: true,
			inputdom: {},
			islimitsize: true,
			islimittype: true,
			upfile_options: []
		};
	},
	mounted: function mounted() {},
	methods: {
		initupfire: function initupfire(_this) {
			this.fileArray = [];
			this.inputdom = _this.target;
			if (this.limitsize == true) {
				this.checkfilesize(this.upfile_option[1]);
			};
			if (this.limittype == true) {
				this.checkfiletype(this.upfile_option[0]);
			};
			this.senddata();
		},
		checkfilesize: function checkfilesize(_size) {
			var limitsize = _size;
			var filesx = this.inputdom.files;
			for (var a = 0; a < filesx.length; a++) {
				var tempsize = filesx[a].size / 1024;
				var tempname = filesx[a].name;
				if (tempsize > limitsize) {
					alert(tempname + "文件大小大于" + limitsize + "KB");
					this.islimitsize = false;
				};
			};
		},
		checkfiletype: function checkfiletype(_type) {
			var limittype = _type.split(",");
			var filesx = this.inputdom.files;

			for (var a = 0; a < filesx.length; a++) {
				var temptype = filesx[a].type.toString();
				var file_length = 0;
				for (var x = 0; x < limittype.length; x++) {
					if (temptype.indexOf(limittype[x].toString()) !== -1) {
						this.islimittype = true;
						break;
					} else {
						file_length++;
					};
				};
				if (file_length == limittype.length) {
					alert("文件类型异常");
					this.islimittype = false;
				};
			};
		},
		senddata: function senddata() {
			var _self = this;
			if (this.islimitsize == true && this.islimittype == true) {
				var formData = new FormData();
				var filesx = this.inputdom.files;
				for (var a = 0; a < filesx.length; a++) {
					this.fileArray.push(filesx[a].name);
					formData.append('file', filesx[a]);
				};
				$.ajax({
					url: common_tools.interfaceurl + '/common/filesUpload',
					type: 'POST',
					cache: false,
					data: formData,
					processData: false,
					contentType: false,
					success: function success(data) {
						if (data.rspCode == '100000') {
							_self.returndataurl = data.data.imgUrl;
							_self.$emit('upfile_emit', _self.returndataurl);
						} else if (data.rspCode !== '100000') {
							console.log(data);
						}
					},
					error: function error(data) {
						console.log(data);
					}
				});
			}
		}

	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.upfile_frame{\n\tdisplay: table;\n\tmin-height: 32px;\n\twidth: 60%;\n\tmin-width: 250px;\n}\ndiv.up_btn_frame{\n\theight: 32px;\n\twidth: 86px;\n\tposition: relative;\n\toverflow: hidden;\n\tfloat: left;\n}\ndiv.up_btn_frame button.upfile_btn{\n\tposition: absolute;\n\tleft: 0;\n\ttop:0;\n\tdisplay:table;\n\tz-index: 1;\n}\ndiv.up_btn_frame input[type='file']{\n\tz-index: 2;\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\topacity: 0;\n}\ndiv.upfile_selected {\n\tdisplay: table;\n\tfloat: left;\n\tmargin-left: 20px;\n\tbox-sizing: border-box;\n\tpadding-top: 14px;\n}\ndiv.upfile_selected span {\n\tdisplay: inline-block;\n    min-width: 10px;\n    padding: .25em .625em;\n    font-size: 1.2rem;\n    color: #fff;\n    line-height: 1;\n    vertical-align: baseline;\n    white-space: nowrap;\n    text-align: center;\n    background-color: #999;\n    border-radius: 3px;\n    float: left;\n    margin: 0 7px;\n    max-height: 19px;\n    overflow: hidden;\n    max-width: 110px;\n}\n", ""]);

// exports


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(502)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(472),
  /* template */
  __webpack_require__(497),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\components\\global\\upfile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] upfile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78e4efd6", Component.options)
  } else {
    hotAPI.reload("data-v-78e4efd6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "upfile_frame"
  }, [_c('div', {
    staticClass: "up_btn_frame"
  }, [_c('button', {
    staticClass: "bluecolor upfile_btn"
  }, [_vm._v("文件上传")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "multiple": "multiple",
      "name": "fileToUpload"
    },
    on: {
      "change": function($event) {
        _vm.initupfire($event)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "upfile_selected"
  }, _vm._l((_vm.fileArray), function(items) {
    return (_vm.fileArray !== null) ? _c('span', [_vm._v(_vm._s(items))]) : _vm._e()
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-78e4efd6", module.exports)
  }
}

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(481);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("05dda62a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-78e4efd6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upfile.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-78e4efd6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./upfile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _upfile = __webpack_require__(492);

var _upfile2 = _interopRequireDefault(_upfile);

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

var common_tools = __webpack_require__(69);
exports.default = {
	components: { Upfile: _upfile2.default, Alert: _alert2.default },
	name: 'contract',
	data: function data() {
		return {
			label_title: '合同信息',
			orderArray: [],
			upfileurl: null,
			currentorderid: null,
			banner: null,
			component: {},
			alert_options: '',
			contract_up_frame: false,
			current_order_id: ''
		};
	},
	mounted: function mounted() {
		var order_id = common_tools.GetParam();
		this.current_order_id = order_id;
		var _self = this;
		if (1) {
			common_tools.AJAX('POST', common_tools.interfaceurl + 'orderInfo/queryOrderById', {
				"condition": {
					"id": order_id
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {} else if (data.rspCode == '100000') {
					var orderItem_Array = [];
					var temp_productdetial_of_orderItem_Array = [];
					var temp_orderItem_Obj = {};
					temp_orderItem_Obj.createDate = data.data.resultSet.createDate;
					temp_orderItem_Obj.id = data.data.resultSet.id;
					temp_orderItem_Obj.contrAddr1 = data.data.resultSet.contrAddr1;
					temp_orderItem_Obj.contrAddr2 = data.data.resultSet.contrAddr2;
					temp_orderItem_Obj.contrAddr3 = data.data.resultSet.contrAddr3;
					temp_orderItem_Obj.productType = data.data.resultSet.orderCommoditiesList[0].productType;
					temp_orderItem_Obj.contract = data.data.resultSet.contract;
					temp_orderItem_Obj.orderStatus = data.data.resultSet.orderStatus;
					temp_orderItem_Obj.orderNo = data.data.resultSet.orderNo;
					temp_orderItem_Obj.totalPrice = data.data.resultSet.totalPrice;
					console.log(temp_orderItem_Obj);
					for (var i = 0; i < data.data.resultSet.orderCommoditiesList.length; i++) {
						var temp_productdetial_of_orderItem_Obj = data.data.resultSet.orderCommoditiesList[i].product;
						temp_productdetial_of_orderItem_Obj.commodityNum = data.data.resultSet.orderCommoditiesList[i].commodityNum;
						temp_productdetial_of_orderItem_Obj.createDate = data.data.resultSet.orderCommoditiesList[i].createDate;
						temp_productdetial_of_orderItem_Obj.totalPrice = data.data.resultSet.orderCommoditiesList[i].totalPrice;
						temp_productdetial_of_orderItem_Obj.id = data.data.resultSet.orderCommoditiesList[i].id;
						temp_productdetial_of_orderItem_Obj.contract = data.data.resultSet.orderCommoditiesList[i].contract;
						console.log(temp_productdetial_of_orderItem_Obj.id);
						temp_productdetial_of_orderItem_Array.push(temp_productdetial_of_orderItem_Obj);
					};
					temp_orderItem_Obj.productArray = temp_productdetial_of_orderItem_Array;
					_self.orderArray.push(temp_orderItem_Obj);
					console.log(_self.orderArray);
				};
			}, function (data) {
				//error callback
				console.log(data);
			});
		} else {
			this.$router.push({ name: 'notfound' });
		}
	},
	methods: {
		Alert: function Alert(_title, _content) {
			this.alert_options = [_title, _content];
			this.component = _alert2.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component = '';
		},
		upfile_emit: function upfile_emit(_val) {
			this.upfileurl = _val;
		},
		contract_cancel: function contract_cancel() {
			//取消合同上传
			this.upfileurl = null;
			this.contract_up_frame = false;
			common_tools.Shade_off();
		},
		to_pay: function to_pay() {
			this.$router.push('/orderlist');
		},
		contract_confirm: function contract_confirm() {
			//确定合同上传
			console.log(this.currentorderid);
			var _self = this;
			if (this.upfileurl !== null) {
				common_tools.AJAX('POST', common_tools.interfaceurl + 'orderInfo/uploadOrderContract', {
					"condition": {
						"id": _self.currentorderid,
						"contrAddr2": _self.upfileurl
					}
				}, function (data) {
					//success callback
					if (data.rspCode !== '100000') {} else if (data.rspCode == '100000') {
						_self.contract_up_frame = false;
						_self.updatalist();
						_self.Alert("上传合同", data.rspMsg);
					};
				}, function (data) {
					//error callback
					console.log(data);
				});
			};
		},
		upcontract: function upcontract(_id) {
			//打开上传文件模块
			this.currentorderid = _id;
			console.log(this.currentorderid);
			common_tools.Shade_on('contract');
			this.contract_up_frame = true;
		},
		updatalist: function updatalist() {
			var _self = this;
			_self.orderArray = [];
			common_tools.AJAX('POST', common_tools.interfaceurl + 'orderInfo/queryOrderById', {
				"condition": {
					"id": _self.current_order_id
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {} else if (data.rspCode == '100000') {
					var orderItem_Array = [];
					var temp_productdetial_of_orderItem_Array = [];
					var temp_orderItem_Obj = {};
					temp_orderItem_Obj.createDate = data.data.resultSet.createDate;
					temp_orderItem_Obj.id = data.data.resultSet.id;
					temp_orderItem_Obj.contrAddr1 = data.data.resultSet.contrAddr1;
					temp_orderItem_Obj.contrAddr2 = data.data.resultSet.contrAddr2;
					temp_orderItem_Obj.contrAddr3 = data.data.resultSet.contrAddr3;
					temp_orderItem_Obj.productType = data.data.resultSet.orderCommoditiesList[0].productType;
					temp_orderItem_Obj.contract = data.data.resultSet.contract;
					temp_orderItem_Obj.orderStatus = data.data.resultSet.orderStatus;
					temp_orderItem_Obj.orderNo = data.data.resultSet.orderNo;
					temp_orderItem_Obj.totalPrice = data.data.resultSet.totalPrice;
					console.log(temp_orderItem_Obj);
					for (var i = 0; i < data.data.resultSet.orderCommoditiesList.length; i++) {
						var temp_productdetial_of_orderItem_Obj = data.data.resultSet.orderCommoditiesList[i].product;
						temp_productdetial_of_orderItem_Obj.commodityNum = data.data.resultSet.orderCommoditiesList[i].commodityNum;
						temp_productdetial_of_orderItem_Obj.createDate = data.data.resultSet.orderCommoditiesList[i].createDate;
						temp_productdetial_of_orderItem_Obj.totalPrice = data.data.resultSet.orderCommoditiesList[i].totalPrice;
						temp_productdetial_of_orderItem_Obj.id = data.data.resultSet.orderCommoditiesList[i].id;
						temp_productdetial_of_orderItem_Obj.contract = data.data.resultSet.orderCommoditiesList[i].contract;
						temp_productdetial_of_orderItem_Array.push(temp_productdetial_of_orderItem_Obj);
					};
					temp_orderItem_Obj.productArray = temp_productdetial_of_orderItem_Array;
					_self.orderArray.push(temp_orderItem_Obj);
				}
			}, function (data) {
				//error callback
				console.log(data);
			});
		},
		downcontract: function downcontract(_id) {
			//下载合同
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'orderInfo/downloadOrderContract', {
				"condition": {
					"id": _id
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {
					console.log(data);
				} else if (data.rspCode == '100000') {
					window.location.href = data.data.resultSet;
					_self.updatalist();
				};
			}, function (data) {
				//error callback
				console.log(data);
			});
		}
	}

};

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.orderlist_frame img.shop_img{\n\t\twidth: 120px;\n\t\theight: 120px;\n\t\tdisplay: table;\n\t\tmargin: 0 auto;\n}\ndiv.orderlist_frame table td:nth-child(1){\n\t\twidth: 15%;\n}\ndiv.orderlist_frame table td:nth-child(2){\n\t\twidth: 25%;\n}\ndiv.orderlist_frame table td:nth-child(3){\n\t\twidth: 10%;\n}\ndiv.orderlist_frame table td:nth-child(4){\n\t\twidth: 10%;\n}\ndiv.orderlist_frame table td:nth-child(5){\n\t\twidth: 10%;\n}\ndiv.orderlist_frame table td:nth-child(6){\n\t\twidth: 15%;\n}\ndiv.orderlist_frame table td:nth-child(7){\n\t\twidth: 10%;\n}\nspan.contract_up.red{\n\t\tcolor: red;\n\t\tfont-size: 1.2rem;\n}\nspan.contract_up.green{\n\t\tcolor: green;\n\t\tfont-size: 1.2rem;\n}\ndiv.contract_up_frame{\n\t\twidth: 300px;\n\t    height: 164px;\n\t    position: fixed;\n\t    left: 50%;\n\t    top: 50%;\n\t    margin-left: -150px;\n\t    margin-top: -82px;\n\t    box-shadow: 1px 1px 5px #999;\n\t    background-color: #fff;\n\t    z-index: 9999;\n}\nspan.contractState{\n\t\tcolor: green\n}\ndiv.contract_up_frame label{\n\t\tbackground-color: #f5f5f5;\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\tbox-sizing: border-box;\n\t\tpadding: 0 20px;\n\t\theight: 40px;\n\t\tline-height: 40px;\n\t\tcolor: #666;\n\t\toverflow: hidden;\n\t\t-webkit-user-select: none;\n}\ndiv.contractTips{\n\t\tborder:1px #144d69 solid;\n\t\tborder-radius: 8px;\n\t\tmin-height: 100px;\n\t\twidth: 100%;\n\t\tbackground-color: #c5edec;\n\t\tbox-sizing: border-box;\n\t\tpadding: 10px 100px 30px 100px;\n\t\tfloat: left;\n\t\tmargin: 50px 0;\n\t\tcolor: #144d69;\n\t\tfont-size: 1.4rem;\n}\np.contractTips_title{\n\t\tcolor: #144d69;\n\t\tfont-size: 1.8rem;\n\t\ttext-align: center;\n\t\tfont-weight: 700;\n}\ndiv.contractTips_content span{\n\t\tfloat: left;\n\t\tclear: both;\n\t\tline-height: 1.8;\n}\n", ""]);

// exports


/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "contract"
    }
  }, [_c(_vm.component, {
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
  }, [_c('label', {
    staticClass: "table_label"
  }, [_vm._v(_vm._s(_vm.label_title))]), _vm._v(" "), _c('div', {
    staticClass: "orderlist_frame"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.orderArray), function(items) {
    return _c('tbody', [_vm._m(1, true), _vm._v(" "), _c('tr', {
      staticClass: "title"
    }, [_c('td', {
      attrs: {
        "colspan": "7"
      }
    }, [_c('span', {
      staticStyle: {
        "float": "left"
      }
    }, [_vm._v("订单号：" + _vm._s(items.orderNo))])])]), _vm._v(" "), _vm._l((items.productArray), function(item, index) {
      return _c('tr', [_c('td', [_c('img', {
        staticClass: "shop_img",
        attrs: {
          "src": item.img
        }
      })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.price))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.commodityNum))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.createDate))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.totalPrice))]), _vm._v(" "), _c('td', [(items.contrAddr2 == null && items.contrAddr1 !== null) ? _c('span', {
        staticClass: "contract_up red"
      }, [_vm._v("*未上传合同文本")]) : _vm._e(), _vm._v(" "), (items.contrAddr1 == null && items.contrAddr2 == null && items.contrAddr3 == null) ? _c('span', {
        staticClass: "contract_up red"
      }, [_vm._v("*未下载合同")]) : _vm._e(), _vm._v(" "), (items.contrAddr2 !== null && items.contrAddr1 !== null && items.contrAddr3 == null) ? _c('span', {
        staticClass: "contract_up green"
      }, [_vm._v("√已上传合同文本")]) : _vm._e(), _vm._v(" "), (items.contrAddr3 !== null) ? _c('span', {
        staticClass: "contract_up green"
      }, [_vm._v("√最终合同下载")]) : _vm._e(), _vm._v(" "), _c('button', {
        staticClass: "bluecolor",
        staticStyle: {
          "margin-bottom": "10px"
        },
        on: {
          "click": function($event) {
            _vm.downcontract(items.id)
          }
        }
      }, [_vm._v("下载合同")]), _vm._v(" "), (items.contrAddr1 !== null && items.contrAddr2 == null) ? _c('span', {
        staticStyle: {
          "display": "block",
          "cursor": "pointer",
          "font-size": "1.2rem",
          "line-height": "16px"
        },
        on: {
          "click": function($event) {
            _vm.upcontract(items.id)
          }
        }
      }, [_vm._v("上传合同")]) : _vm._e()])])
    }), _vm._v(" "), _c('tr', {
      staticClass: "space_tr"
    }, [_c('td', {
      attrs: {
        "colspan": "7"
      }
    }, [(items.contrAddr2 !== null && items.contrAddr1 !== null && items.contrAddr3 == null) ? _c('span', {
      staticClass: "contractState"
    }, [_vm._v("尊敬的赛鳌用户，您好！您的合同我们已收到，正在快速审核盖章中，请耐心等待")]) : _vm._e()])])], 2)
  })], 2)]), _vm._v(" "), (_vm.contract_up_frame == true) ? _c('div', {
    staticClass: "contract_up_frame"
  }, [_vm._m(2), _vm._v(" "), _c('Upfile', {
    staticStyle: {
      "margin": "20px 25px",
      "float": "left"
    },
    attrs: {
      "upfile_option": ['png,jpeg', '5120']
    },
    on: {
      "upfile_emit": _vm.upfile_emit
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame_btn2",
    staticStyle: {
      "width": "125px"
    }
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.contract_confirm()
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    staticClass: "greycolor",
    on: {
      "click": function($event) {
        _vm.contract_cancel()
      }
    }
  }, [_vm._v("取消")])])], 1) : _vm._e(), _vm._v(" "), _vm._m(3)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("商品照片")]), _vm._v(" "), _c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', [_vm._v("单价")]), _vm._v(" "), _c('th', [_vm._v("数量")]), _vm._v(" "), _c('th', [_vm._v("创建日期")]), _vm._v(" "), _c('th', [_vm._v("合计价格")]), _vm._v(" "), _c('th', [_vm._v("操作")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "space_tr"
  }, [_c('td', {
    attrs: {
      "colspan": "7"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "suateam_alert_title"
  }, [_c('span', [_vm._v("上传合同")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "contractTips"
  }, [_c('p', {
    staticClass: "contractTips_title"
  }, [_vm._v("合同下载注意事项")]), _vm._v(" "), _c('div', {
    staticClass: "contractTips_content"
  }, [_c('span', [_vm._v("尊敬的赛鳌用户，您好！感谢您在我们的平台订购安全产品，为更好的保障双方权益，建议您下载对应产品的合同。具体如下：")]), _vm._v(" "), _c('span', [_vm._v("1、合同查找：进入订单详情，查找对应产品的订单，点击查看合同")]), _vm._v(" "), _c('span', [_vm._v("2、合同下载：点击下载合同按钮，下载对应合同并查看合同内容、金额等信息，如有问题请及时联系在线客服人员")]), _vm._v(" "), _c('span', [_vm._v("3、合同盖章：合同核查无误后，盖公司章")]), _vm._v(" "), _c('span', [_vm._v("4、合同上传：进入订单详情，查找对应产品的订单，点击查看合同页面后，点击上传合同按钮将盖章合同进行上传")]), _vm._v(" "), _c('span', [_vm._v("5、合同终版下载：合同上传成功后，我司将在5个工作日内盖章并上传，您可进行下载")]), _vm._v(" "), _c('span', [_vm._v("注：合同的上传进度不影响订单的成交，为保障您能及时收到货物，建议您先进行支付，过程中如有问题可随时联系在线客服或拨打客服热线。")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5558fcea", module.exports)
  }
}

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(613);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("583dc3d4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5558fcea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contract.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5558fcea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contract.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});