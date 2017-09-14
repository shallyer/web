webpackJsonp([6],{

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(838)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(556),
  /* template */
  __webpack_require__(791),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\user\\components\\address_setting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] address_setting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92eb77ae", Component.options)
  } else {
    hotAPI.reload("data-v-92eb77ae", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var common_tools = __webpack_require__(69);
exports.default = {
	name: 'district',
	data: function data() {
		return {
			provinceArray: [],
			districtArray: [],
			countyArray: [],
			provinceid: '',
			districtid: '',
			countyid: ''
		};
	},
	mounted: function mounted() {
		var _self = this;
		common_tools.AJAX('POST', common_tools.interfaceurl + 'cityInfo/queryProvince', {}, function (data) {
			//success callback
			console.log(data);
			if (data.rspCode == '999999') {
				console.log(data);
			} else if (data.rspCode == '100000') {
				var temp_provinceArray = [];
				for (var a = 0; a < data.data.resultSet.length; a++) {
					var temp_parentCityobj = {
						id: data.data.resultSet[a].id,
						cityCode: data.data.resultSet[a].cityCode,
						parentCityCode: data.data.resultSet[a].parentCityCode,
						cityName: data.data.resultSet[a].cityName
					};
					temp_provinceArray.push(temp_parentCityobj);
					_self.provinceArray = temp_provinceArray;
				};
				common_tools.AJAX('POST', common_tools.interfaceurl + 'cityInfo/queryCityByProvince', {
					"condition": { "province": _self.provinceArray[0].cityCode }
				}, function (data) {
					//success callback
					if (data.rspCode == '999999') {} else if (data.rspCode !== '999999') {
						var temp_parentCityArray = [];
						for (var a = 0; a < data.data.resultSet.length; a++) {
							var temp_parentCityobj = {
								id: data.data.resultSet[a].id,
								cityCode: data.data.resultSet[a].cityCode,
								parentCityCode: data.data.resultSet[a].parentCityCode,
								cityName: data.data.resultSet[a].cityName
							};
							_self.districtArray.push(temp_parentCityobj);
						};
						common_tools.AJAX('POST', common_tools.interfaceurl + 'cityInfo/queryCityByProvince', {
							"condition": { "province": _self.districtArray[0].cityCode }
						}, function (data) {
							//success callback
							if (data.rspCode == '999999') {} else if (data.rspCode !== '999999') {
								var temp_parentCityArray = [];
								for (var a = 0; a < data.data.resultSet.length; a++) {
									var temp_parentCityobj = {
										id: data.data.resultSet[a].id,
										cityCode: data.data.resultSet[a].cityCode,
										parentCityCode: data.data.resultSet[a].parentCityCode,
										cityName: data.data.resultSet[a].cityName
									};
									_self.countyArray.push(temp_parentCityobj);
									_self.districtid = _self.districtArray[0].id;
									_self.provinceid = _self.provinceArray[0].id;
									_self.countyid = _self.countyArray[0].id;
									_self.update();
								};
							};
						}, function (data) {
							//error callback
							console.log(data);
						});
					};
				}, function (data) {
					//error callback
					console.log(data);
				});
			};
		}, function (data) {
			//error callback
			console.log(data);
		});
	},
	methods: {
		update: function update(value) {
			var temp_districtobj = {
				provinceid: this.provinceid,
				districtid: this.districtid,
				countyid: this.countyid
			};
			this.$emit('district_emit', temp_districtobj);
		},
		selectregion: function selectregion(_type, _target) {
			var _self = this;
			switch (_type) {
				case 1:
					//_self.provinceid=_target.selectedOptions[0].id;
					_self.provinceid = _target.options[_target.selectedIndex].id;
					_self.districtArray = [];
					_self.countyArray = [];

					var senddata = _target.value;
					common_tools.AJAX('POST', common_tools.interfaceurl + 'cityInfo/queryCityByProvince', {
						"condition": { "province": senddata }
					}, function (data) {
						//success callback
						if (data.rspCode == '999999') {} else if (data.rspCode !== '999999') {
							var temp_parentCityArray = [];
							for (var a = 0; a < data.data.resultSet.length; a++) {
								var temp_parentCityobj = {
									id: data.data.resultSet[a].id,
									cityCode: data.data.resultSet[a].cityCode,
									parentCityCode: data.data.resultSet[a].parentCityCode,
									cityName: data.data.resultSet[a].cityName
								};
								_self.districtArray.push(temp_parentCityobj);

								common_tools.AJAX('POST', common_tools.interfaceurl + 'cityInfo/queryCityByProvince', {
									"condition": { "province": _self.districtArray[0].cityCode }
								}, function (data) {
									//success callback
									if (data.rspCode == '999999') {
										alert("传参错误，请重新检查");
									} else if (data.rspCode !== '999999') {
										var temp_parentCityArray = [];
										_self.countyArray = [];
										for (var a = 0; a < data.data.resultSet.length; a++) {
											var temp_parentCityobj = {
												id: data.data.resultSet[a].id,
												cityCode: data.data.resultSet[a].cityCode,
												parentCityCode: data.data.resultSet[a].parentCityCode,
												cityName: data.data.resultSet[a].cityName
											};
											_self.countyArray.push(temp_parentCityobj);
										};
										_self.districtid = _self.districtArray[0].id;
										_self.countyid = _self.countyArray[0].id;
										_self.update();
									};
								}, function (data) {
									//error callback
									console.log(data);
								});
							};
						};
					}, function (data) {
						//error callback
						console.log(data);
					});

					break;
				case 2:
					_self.countyArray = [];
					//_self.districtid=_target.selectedOptions[0].id;
					_self.provinceid = _target.options[_target.selectedIndex].id;
					var senddata = _target.value;
					common_tools.AJAX('POST', common_tools.interfaceurl + 'cityInfo/queryCityByProvince', {
						"condition": { "province": senddata }
					}, function (data) {
						//success callback
						if (data.rspCode == '999999') {
							alert("传参错误，请重新检查");
						} else if (data.rspCode !== '999999') {
							var temp_parentCityArray = [];
							for (var a = 0; a < data.data.resultSet.length; a++) {
								var temp_parentCityobj = {
									id: data.data.resultSet[a].id,
									cityCode: data.data.resultSet[a].cityCode,
									parentCityCode: data.data.resultSet[a].parentCityCode,
									cityName: data.data.resultSet[a].cityName
								};
								_self.countyArray.push(temp_parentCityobj);
								_self.countyid = _self.countyArray[0].id;
								_self.update();
							};
						};
					}, function (data) {
						//error callback
						console.log(data);
					});

					break;
				case 3:
					//_self.countyid=_target.selectedOptions[0].id;
					_self.countyid = _target.options[_target.selectedIndex].id;
					_self.update();
					break;
			}
		}
	}

};

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#district{\r\n\tdisplay: table;\n}\ndiv#district select.district_select{\r\n\tmargin-right: 3%;\r\n\twidth: 30% !important;\r\n\tdisplay: block;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(467)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(455),
  /* template */
  __webpack_require__(465),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\components\\district\\district.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] district.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65cc76c2", Component.options)
  } else {
    hotAPI.reload("data-v-65cc76c2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "district"
    }
  }, [_c('select', {
    staticClass: "district_select",
    on: {
      "change": function($event) {
        _vm.selectregion(1, $event.target)
      }
    }
  }, _vm._l((_vm.provinceArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      },
      domProps: {
        "value": items.cityCode
      }
    }, [_vm._v(_vm._s(items.cityName))])
  })), _vm._v(" "), _c('select', {
    staticClass: "district_select",
    on: {
      "change": function($event) {
        _vm.selectregion(2, $event.target)
      }
    }
  }, _vm._l((_vm.districtArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      },
      domProps: {
        "value": items.cityCode
      }
    }, [_vm._v(_vm._s(items.cityName))])
  })), _vm._v(" "), _c('select', {
    staticClass: "district_select",
    on: {
      "change": function($event) {
        _vm.selectregion(3, $event.target)
      }
    }
  }, _vm._l((_vm.countyArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      },
      domProps: {
        "value": items.cityCode
      }
    }, [_vm._v(_vm._s(items.cityName))])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-65cc76c2", module.exports)
  }
}

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("b64433ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-65cc76c2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./district.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-65cc76c2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./district.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var common_tools = __webpack_require__(69);

exports.default = {
	name: 'address_district',
	data: function data() {
		return {
			provinceArray: [],
			districtArray: [],
			countyArray: [],
			provinceid: '',
			districtid: '',
			countyid: '',
			selectedProvince: "default",
			selectedCity: "default",
			selectedRegions: "default"
		};
	},
	props: ['address_Array'],
	mounted: function mounted() {
		var _self = this;
		common_tools.AJAX('POST', common_tools.interfaceurl + 'cityInfo/queryProvinceCityRegionAll', {}, function (data) {
			//success callback
			if (data.rspCode == '999999') {
				console.log(data);
			} else if (data.rspCode == '100000') {
				var allList = JSON.parse(data.data.resultSet).provinces;
				_self.selectedProvince = _self.address_Array[0];
				_self.selectedCity = _self.address_Array[1];
				_self.selectedRegions = _self.address_Array[2];
				if (_self.selectedProvince != "default") {
					var proviceChildList = [];
					for (var a = 0; a < allList.length; a++) {
						var provinceChild1 = allList[a].cities;
						var proviceChildList1 = [];
						for (var b = 0; b < provinceChild1.length; b++) {
							var provinceChild2 = provinceChild1[b].regions;
							var proviceChildList2 = [];
							for (var c = 0; c < provinceChild2.length; c++) {
								proviceChildList2.push({
									code: provinceChild2[c].code,
									name: provinceChild2[c].name,
									id: provinceChild2[c].id
								});
							}
							proviceChildList1.push({
								code: provinceChild1[b].code,
								name: provinceChild1[b].name,
								id: provinceChild1[b].id,
								regions: proviceChildList2
							});
						};

						proviceChildList.push({
							code: allList[a].code,
							name: allList[a].name,
							id: allList[a].id,
							cities: proviceChildList1
						});
					};
					_self.provinceArray = proviceChildList;
					_self.districtArray = [];
					_self.countyArray = [];
					for (var a = 0; a < _self.provinceArray.length; a++) {
						if (_self.provinceArray[a].id == _self.selectedProvince) {
							_self.districtArray = _self.provinceArray[a].cities;
							_self.countyArray = [];
							for (var b = 0; b < _self.districtArray.length; b++) {
								if (_self.districtArray[b].id == _self.selectedCity) {
									_self.countyArray = _self.districtArray[b].regions;
								};
							};
						};
					};
				} else {
					var proviceChildList = [];
					for (var a = 0; a < allList.length; a++) {
						var provinceChild1 = allList[a].cities;
						var proviceChildList1 = [];
						for (var b = 0; b < provinceChild1.length; b++) {
							var provinceChild2 = provinceChild1[b].regions;
							var proviceChildList2 = [];
							for (var c = 0; c < provinceChild2.length; c++) {
								proviceChildList2.push({
									code: provinceChild2[c].code,
									name: provinceChild2[c].name,
									id: provinceChild2[c].id
								});
							}
							//	   							_self.countyArray=proviceChildList2;
							proviceChildList1.push({
								code: provinceChild1[b].code,
								name: provinceChild1[b].name,
								id: provinceChild1[b].id,
								regions: proviceChildList2
							});
						}
						//	   						_self.districtArray=proviceChildList1;

						proviceChildList.push({
							code: allList[a].code,
							name: allList[a].name,
							id: allList[a].id,
							cities: proviceChildList1
						});
					};
					_self.provinceArray = proviceChildList;
				};
			};
		}, function (data) {
			//error callback
			console.log(data);
		});
	},
	methods: {
		update: function update(value) {
			var temp_districtobj = {
				provinceid: this.provinceid,
				districtid: this.districtid,
				countyid: this.countyid
			};
			this.$emit('address_emit', temp_districtobj);
		},
		selectregion: function selectregion(_type, _target) {
			var _self = this;
			switch (_type) {
				case 1:
					_self.provinceid = _target.selectedOptions[0].id;
					_self.districtArray = [];
					_self.countyArray = [];
					for (var a = 0; a < _self.provinceArray.length; a++) {
						if (_self.provinceArray[a].id == _self.provinceid) {
							_self.districtArray = _self.provinceArray[a].cities;
							return;
						}
					}
				case 2:
					_self.countyArray = [];
					_self.districtid = _target.selectedOptions[0].id;
					for (var b = 0; b < _self.districtArray.length; b++) {
						if (_self.districtArray[b].id == _self.districtid) {
							_self.countyArray = _self.districtArray[b].regions;
							return;
						}
					}
				case 3:
					_self.countyid = _target.selectedOptions[0].id;
					_self.update();
					break;
			}
		}
	}

};

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _district = __webpack_require__(463);

var _district2 = _interopRequireDefault(_district);

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

var common_tools = __webpack_require__(69);

module.exports = {
				components: { District: _district2.default, Alert: _alert2.default },
				name: 'add_address',
				data: function data() {
								return {
												provinceid: '',
												districtid: '',
												countyid: '',
												consigner_name: '',
												consigner_phone: '',
												cellphone_tips: null,
												detailedAddress: '',
												component: '',
												alert_options: ['', ''] //['标题'，'内容']
								};
				},
				methods: {
								validateFtn: function validateFtn(_type) {
												switch (_type) {
																case 1:
																				//cellphone
																				var pattern = new RegExp("^[1][358][0-9]{9}$");
																				if (!this.consigner_phone == '') {
																								var consigner_phone = this.consigner_phone;
																								if (!consigner_phone.match(pattern)) {
																												this.cellphone_tips = '请输入正确的手机号';
																								} else {
																												this.cellphone_tips = null;
																								}
																				} else {
																								this.cellphone_tips = '手机号为空';
																				};
																				break;
												}
								},
								Alert: function Alert(_title, _content) {
												this.alert_options = [_title, _content];
												this.component = _alert2.default;
								},
								alert_emit: function alert_emit(_val) {
												common_tools.Shade_off();
												this.component = '';
												this.$emit('add_address_emit', false);
								},
								district_emit: function district_emit(_val) {
												var _self = this;
												_self.provinceid = _val.provinceid;
												_self.districtid = _val.districtid;
												_self.countyid = _val.countyid;
												console.log(_val.provinceid + "====" + _val.districtid + "====" + _val.countyid);
								},
								confirm: function confirm() {
												this.$emit('add_address_emit', true);
								},
								cancel: function cancel() {
												this.$emit('add_address_emit', false);
								},
								sendinfo: function sendinfo() {
												var _self = this;
												if (this.cellphone_tips == null) {
																common_tools.AJAX('POST', common_tools.interfaceurl + 'memberAddress/addMemberAddress', {
																				"condition": {
																								"id": _self.addressId,
																								"consigee": _self.consigner_name,
																								"cellphone": _self.consigner_phone,
																								"province": _self.provinceid,
																								"city": _self.countyid,
																								"region": _self.districtid,
																								"detailedAddress": _self.detailedAddress

																				}
																}, function (data) {
																				//success callback
																				if (data.rspCode !== '100000') {
																								_self.Alert('修改失败', data.rspMsg);
																				} else if (data.rspCode == '100000') {
																								_self.Alert('修改成功', data.rspMsg);
																								//this.$emit('add_address_emit',true); 
																				};
																}, function (data) {
																				//error callback
																				console.log(data);
																});
												}
								}
				}
};

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#address_district{\r\n\tdisplay: table;\n}\ndiv#address_district select.district_select{\r\n\tmargin-right: 3%;\r\n\twidth: 30% !important;\r\n\tdisplay: block;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.user_setting_add_address{\n\twidth: 720px;\n\theight: 360px;\n\tleft: 50%;\n\ttop:50%;\n\tmargin-left: -360px;\n\tmargin-top: -150px;\n\tbox-shadow: 1px 1px 5px #999;\n\tbackground-color: #fff;\n\tz-index:999999;\n\tposition: absolute;\n}\ndiv.user_setting_add_address label.title{\n\tbackground-color: #f5f5f5;\n    width: 100%;\n    float: left;\n    box-sizing: border-box;\n    padding: 0 20px;\n    height: 40px;\n    line-height: 40px;\n    color: #666;\n    overflow: hidden;\n    margin-bottom: 20px;\n    -webkit-user-select: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(500)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(471),
  /* template */
  __webpack_require__(495),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\components\\district\\address_district.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] address_district.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-132e15a6", Component.options)
  } else {
    hotAPI.reload("data-v-132e15a6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(504)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(474),
  /* template */
  __webpack_require__(499),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\user\\components\\add_address.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] add_address.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2cff20c", Component.options)
  } else {
    hotAPI.reload("data-v-e2cff20c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "address_district"
    }
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedProvince),
      expression: "selectedProvince"
    }],
    staticClass: "district_select",
    on: {
      "click": function($event) {
        _vm.selectregion(1, $event.target)
      },
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.selectedProvince = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "default"
    }
  }, [_vm._v("请选择")]), _vm._v(" "), _vm._l((_vm.provinceArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      },
      domProps: {
        "value": items.id
      }
    }, [_vm._v(_vm._s(items.name))])
  })], 2), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedCity),
      expression: "selectedCity"
    }],
    staticClass: "district_select",
    on: {
      "click": function($event) {
        _vm.selectregion(2, $event.target)
      },
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.selectedCity = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "default"
    }
  }, [_vm._v("请选择")]), _vm._v(" "), _vm._l((_vm.districtArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      },
      domProps: {
        "value": items.id
      }
    }, [_vm._v(_vm._s(items.name))])
  })], 2), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedRegions),
      expression: "selectedRegions"
    }],
    staticClass: "district_select",
    on: {
      "click": function($event) {
        _vm.selectregion(3, $event.target)
      },
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.selectedRegions = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "default"
    }
  }, [_vm._v("请选择")]), _vm._v(" "), _vm._l((_vm.countyArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      },
      domProps: {
        "value": items.id
      }
    }, [_vm._v(_vm._s(items.name))])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-132e15a6", module.exports)
  }
}

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user_setting_add_address",
    attrs: {
      "id": "add_address"
    }
  }, [_vm._m(0), _vm._v(" "), _c(_vm.component, {
    tag: "component",
    attrs: {
      "alert_options": _vm.alert_options
    },
    on: {
      "alert_emit": _vm.alert_emit
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "suateam_select_frame"
  }, [_c('label', [_vm._v("所在区域:")]), _vm._v(" "), _c('District', {
    staticStyle: {
      "width": "62%"
    },
    on: {
      "district_emit": _vm.district_emit
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("收货地址:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.detailedAddress),
      expression: "detailedAddress"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.detailedAddress)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.detailedAddress = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("收货人姓名:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.consigner_name),
      expression: "consigner_name"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.consigner_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.consigner_name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("联系电话:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.consigner_phone),
      expression: "consigner_phone"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.consigner_phone)
    },
    on: {
      "blur": function($event) {
        _vm.validateFtn(1)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.consigner_phone = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.cellphone_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red",
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v(_vm._s(_vm.cellphone_tips))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame_btn2"
  }, [_c('button', {
    staticClass: "bluecolor",
    staticStyle: {
      "display": "inline-block"
    },
    on: {
      "click": function($event) {
        _vm.sendinfo()
      }
    }
  }, [_vm._v("确认添加")]), _vm._v(" "), _c('button', {
    staticClass: "greycolor",
    staticStyle: {
      "display": "inline-block"
    },
    on: {
      "click": function($event) {
        _vm.cancel()
      }
    }
  }, [_vm._v("返回")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "title"
  }, [_c('span', [_vm._v("添加地址")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e2cff20c", module.exports)
  }
}

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("6dd67dfd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-132e15a6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./address_district.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-132e15a6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./address_district.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(483);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("4e7caeac", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e2cff20c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add_address.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e2cff20c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add_address.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _add_address = __webpack_require__(494);

var _add_address2 = _interopRequireDefault(_add_address);

var _alert = __webpack_require__(135);

var _alert2 = _interopRequireDefault(_alert);

var _address_district = __webpack_require__(491);

var _address_district2 = _interopRequireDefault(_address_district);

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

var common_tools = __webpack_require__(69);


module.exports = {
	components: { Add_address: _add_address2.default, Address_district: _address_district2.default },
	name: 'address_setting',
	beforeRouteEnter: function beforeRouteEnter(to, from, next) {
		var addressArray = [];
		var consigner_name = '';
		var consigner_phone = '';
		var defaultaddress_id = '';
		var detailedAddress = '';
		var province = '';
		var city = '';
		var region = '';
		var isDefault = '';
		common_tools.AJAX('POST', common_tools.interfaceurl + 'memberAddress/queryMemberAddressList', {}, function (data) {
			//success callback
			if (data.rspCode !== '100000') {} else if (data.rspCode == '100000') {
				if (data.data.resultSet.length == 0) {
					next();
				} else {
					addressArray = data.data.resultSet;
					for (var a = 0; a < data.data.resultSet.length; a++) {
						if (data.data.resultSet[a].isDefault == "Y") {
							defaultaddress_id = data.data.resultSet[a].id;
							consigner_name = data.data.resultSet[a].consigee;
							consigner_phone = data.data.resultSet[a].cellphone;
							detailedAddress = data.data.resultSet[a].detailedAddress;
							province = data.data.resultSet[a].province;
							city = data.data.resultSet[a].city;
							region = data.data.resultSet[a].region;
							isDefault = data.data.resultSet[a].isDefault;
						} else {
							defaultaddress_id = data.data.resultSet[0].id;
							consigner_name = data.data.resultSet[0].consigee;
							consigner_phone = data.data.resultSet[0].cellphone;
							detailedAddress = data.data.resultSet[0].detailedAddress;
							province = data.data.resultSet[0].province;
							city = data.data.resultSet[0].city;
							region = data.data.resultSet[0].region;
							isDefault = data.data.resultSet[0].isDefault;
						}
					}
					next(function (vm) {
						vm.addressArray = addressArray;
						vm.consigner_name = consigner_name;
						vm.consigner_phone = consigner_phone;
						vm.addressId = defaultaddress_id;
						vm.detailedAddress = detailedAddress;
						vm.region = region;
						vm.province = province;
						vm.city = city;
						vm.isDefault = isDefault;
					});
				}
			};
		}, function (data) {
			//error callback
			next({
				path: '/notfound'
			});
		});
	},

	data: function data() {
		return {
			addressArray: [],
			consigner_name: '',
			consigner_phone: '',
			detailedAddress: '',
			isDefault: '',
			addressId: '',
			component: '',
			province: '',
			city: '',
			region: '',
			component_address: '',
			alert_options: ['', ''] //['标题'，'内容']
		};
	},
	methods: {
		upData: function upData() {
			var addressArray = [];
			var consigner_name = '';
			var consigner_phone = '';
			var defaultaddress_id = '';
			var detailedAddress = '';
			var province = '';
			var city = '';
			var region = '';
			var isDefault = '';
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'memberAddress/queryMemberAddressList', {}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {} else if (data.rspCode == '100000') {
					if (data.data.resultSet.length == 0) {
						_self.Alert('提示', '加载数据异常，请尝试刷新页面');
					} else {
						addressArray = data.data.resultSet;
						for (var a = 0; a < data.data.resultSet.length; a++) {
							if (data.data.resultSet[a].isDefault == "Y") {
								defaultaddress_id = data.data.resultSet[a].id;
								consigner_name = data.data.resultSet[a].consigee;
								consigner_phone = data.data.resultSet[a].cellphone;
								detailedAddress = data.data.resultSet[a].detailedAddress;
								province = data.data.resultSet[a].province;
								city = data.data.resultSet[a].city;
								region = data.data.resultSet[a].region;
								isDefault = data.data.resultSet[a].isDefault;
							} else {
								defaultaddress_id = data.data.resultSet[0].id;
								consigner_name = data.data.resultSet[0].consigee;
								consigner_phone = data.data.resultSet[0].cellphone;
								detailedAddress = data.data.resultSet[0].detailedAddress;
								province = data.data.resultSet[0].province;
								city = data.data.resultSet[0].city;
								region = data.data.resultSet[0].region;
								isDefault = data.data.resultSet[0].isDefault;
							};
						};
						_self.addressArray = addressArray;
						_self.consigner_name = consigner_name;
						_self.consigner_phone = consigner_phone;
						_self.addressId = defaultaddress_id;
						_self.detailedAddress = detailedAddress;
						_self.region = region;
						_self.province = province;
						_self.city = city;
						_self.isDefault = isDefault;
					};
				};
			}, function (data) {
				console.log(data);
			});
		},
		Alert: function Alert(_title, _content) {
			common_tools.Shade_on('usercenter');
			this.alert_options = [_title, _content];
			this.component = _alert2.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component = '';
		},
		address_emit: function address_emit(_val) {
			var _self = this;
			_self.province = _val.provinceid;
			_self.region = _val.districtid;
			_self.city = _val.countyid;
			//console.log(_val.provinceid+"===="+_val.districtid+"===="+_val.countyid);
		},
		changaddress: function changaddress(_target) {
			//this.addressId=_target.selectedOptions[0].id;
			this.addressId = _target.options[_target.selectedIndex].id;
			for (var a = 0; a < this.addressArray.length; a++) {
				if (this.addressId == this.addressArray[a].id) {
					this.consigner_name = this.addressArray[a].consigee;
					this.consigner_phone = this.addressArray[a].cellphone;
					this.province = this.addressArray[a].province;
					this.city = this.addressArray[a].city;
					this.region = this.addressArray[a].region;
					this.isDefault = this.addressArray[a].isDefault;
				};
			};
		},
		//add address function
		add_address: function add_address() {
			common_tools.Shade_on('usercenter');
			this.component_address = _add_address2.default;
		},
		add_address_emit: function add_address_emit(_val) {
			common_tools.Shade_off();
			this.upData();
			this.component_address = '';
		},
		//add address function

		//del address function
		del_address: function del_address() {
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'memberAddress/deleteMemberAddress', {
				"condition": {
					"id": _self.addressId
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {
					_self.Alert('删除失败', data.rspMsg);
				} else if (data.rspCode == '100000') {
					_self.Alert('删除成功', data.rspMsg);
				};
			}, function (data) {
				//error callback
				console.log(data);
			});
		},
		//del address function

		//set default address function
		set_default_address: function set_default_address() {
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'memberAddress/updateMemberAddressDefault', {
				"condition": {
					"id": _self.addressId
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {
					_self.Alert('设置失败', data.rspMsg);
				} else if (data.rspCode == '100000') {
					_self.Alert('设置成功', data.rspMsg);
				};
			}, function (data) {
				//error callback
				console.log(data);
			});
		},
		//set default address function
		sendinfo: function sendinfo() {
			var _self = this;
			common_tools.AJAX('POST', common_tools.interfaceurl + 'memberAddress/updateMemberAddress', {
				"condition": {
					"id": _self.addressId,
					"consigee": _self.consigner_name,
					"cellphone": _self.consigner_phone,
					"province": _self.province,
					"city": _self.city,
					"region": _self.region,
					"detailedAddress": _self.detailedAddress,
					"isDefault": _self.isDefault
				}
			}, function (data) {
				//success callback
				if (data.rspCode !== '100000') {
					_self.Alert('修改失败', data.rspMsg);
				} else if (data.rspCode == '100000') {
					_self.Alert('修改成功', data.rspMsg);
				};
			}, function (data) {
				//error callback
				console.log(data);
			});
		}
	}
};

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#address_setting{\n\twidth: 90%;\n}\n", ""]);

// exports


/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "address_setting"
    }
  }, [_c(_vm.component_address, {
    tag: "component",
    on: {
      "add_address_emit": _vm.add_address_emit
    }
  }), _vm._v(" "), _c(_vm.component, {
    tag: "component",
    attrs: {
      "alert_options": _vm.alert_options
    },
    on: {
      "alert_emit": _vm.alert_emit
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "suateam_select_frame"
  }, [_c('label', [_vm._v("收货地址:")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.detailedAddress),
      expression: "detailedAddress"
    }],
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.detailedAddress = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.changaddress($event.target)
      }]
    }
  }, _vm._l((_vm.addressArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.id
      }
    }, [_vm._v(_vm._s(items.detailedAddress))])
  })), _vm._v(" "), (_vm.isDefault == 'N') ? _c('span', {
    staticClass: "blue",
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": function($event) {
        _vm.set_default_address()
      }
    }
  }, [_vm._v("设为默认")]) : _vm._e(), _vm._v(" "), (_vm.isDefault == 'Y') ? _c('span', {
    staticClass: "grey"
  }, [_vm._v("已是默认")]) : _vm._e(), _vm._v(" "), _c('i', {
    staticClass: "del_ico",
    staticStyle: {
      "float": "left"
    },
    on: {
      "click": function($event) {
        _vm.del_address()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "suateam_select_frame"
  }, [_c('label', [_vm._v("所在区域:")]), _vm._v(" "), _c('Address_district', {
    staticStyle: {
      "width": "62%"
    },
    attrs: {
      "address_Array": [_vm.province, _vm.region, _vm.city]
    },
    on: {
      "address_emit": _vm.address_emit
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("收货人姓名:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.consigner_name),
      expression: "consigner_name"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.consigner_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.consigner_name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("联系电话:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.consigner_phone),
      expression: "consigner_phone"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.consigner_phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.consigner_phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame_btn2"
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.sendinfo()
      }
    }
  }, [_vm._v("确认修改")]), _vm._v(" "), _c('button', {
    staticClass: "greycolor",
    on: {
      "click": function($event) {
        _vm.add_address()
      }
    }
  }, [_vm._v("添加地址")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-92eb77ae", module.exports)
  }
}

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(628);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("658c8b12", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-92eb77ae\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./address_setting.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-92eb77ae\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./address_setting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});