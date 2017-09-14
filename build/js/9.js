webpackJsonp([9],{

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(810)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(549),
  /* template */
  __webpack_require__(763),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\register\\register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26a7da28", Component.options)
  } else {
    hotAPI.reload("data-v-26a7da28", Component.options)
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

/***/ 548:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alert = __webpack_require__(135);

var _alert2 = _interopRequireDefault(_alert);

var _district = __webpack_require__(463);

var _district2 = _interopRequireDefault(_district);

var _agreement = __webpack_require__(753);

var _agreement2 = _interopRequireDefault(_agreement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var common_tools = __webpack_require__(69); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	components: { District: _district2.default, Agreement: _agreement2.default },
	name: 'register',
	data: function data() {
		return {
			banner: 'url(' + __webpack_require__(724) + ')',
			nickname: '',
			authcode: '',
			cellphone: '',
			email: '',
			f_password: '',
			v_password: '',
			provinceid: '',
			districtid: '',
			countyid: '',
			businesstype: '',
			business_name: '',
			industry_id: '',
			industry_name: '',
			industryArray: [],
			businessArray: [],
			component: '',
			alert_options: ['', ''], //['标题'，'内容']
			isregistersucess: false,
			cellphone_tips: null,
			v_password_tips: null,
			f_password_tips: null,
			nickname_tips: null,
			email_tips: null,
			agreement_confirm: false,
			usertoken: {},
			countDown: 90,
			btnIsactive: false,
			authcodeString: '短信验证码'

		};
	},
	beforeRouteEnter: function beforeRouteEnter(to, from, next) {
		var _self = this;
		var business = {};
		var industry = {};

		common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbBusiDemand/listSuateamEbBusiDemand', {}, function (data) {
			//success callback
			if (data.rspCode == '999999') {
				console.log(data);
			} else if (data.rspCode !== '999999') {
				business.businessArray = data.data.resultSet;
				business.business_name = data.data.resultSet[0].name;
				business.businesstype = data.data.resultSet[0].code;
				common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbTag/listSuateamEbTag', {}, function (data) {
					//success callback
					if (data.rspCode == '999999') {
						console.log(data);
					} else if (data.rspCode !== '999999') {
						industry.industryArray = data.data.resultSet;
						industry.industry_id = data.data.resultSet[0].id;
						industry.industry_name = data.data.resultSet[0].name;
						next(function (vm) {
							vm.businessArray = business.businessArray;
							vm.business_name = business.business_name;
							vm.businesstype = business.businesstype;
							//
							vm.industryArray = industry.industryArray;
							vm.industry_id = industry.industry_id;
							vm.industry_name = industry.industry_name;
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
		passwordValidate: function passwordValidate() {
			$(".pw-strength").css("display", "block");
			var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
			var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
			var enoughRegex = new RegExp("(?=.{8,}).*", "g");
			if (false == enoughRegex.test(this.f_password)) {
				$('#level').removeClass('pw-weak');
				$('#level').removeClass('pw-medium');
				$('#level').removeClass('pw-strong');
				$('#level').addClass(' pw-defule');
				//密码小于六位的时候，密码强度图片都为灰色 
			} else if (strongRegex.test(this.f_password)) {
				$('#level').removeClass('pw-weak');
				$('#level').removeClass('pw-medium');
				$('#level').removeClass('pw-strong');
				$('#level').addClass(' pw-strong');
				//密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
			} else if (mediumRegex.test(this.f_password)) {
				$('#level').removeClass('pw-weak');
				$('#level').removeClass('pw-medium');
				$('#level').removeClass('pw-strong');
				$('#level').addClass(' pw-medium');
				//密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
			} else {
				$('#level').removeClass('pw-weak');
				$('#level').removeClass('pw-medium');
				$('#level').removeClass('pw-strong');
				$('#level').addClass('pw-weak');
				//如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
			};
			return true;
		},
		validateFtn: function validateFtn(_type) {
			switch (_type) {
				case 1:
					//cellphone
					var pattern = new RegExp("^[1][3578][0-9]{9}$");
					if (!this.cellphone == '') {
						var cellphone = this.cellphone;
						if (!cellphone.match(pattern)) {
							this.cellphone_tips = '请输入正确的手机号';
						} else {
							this.cellphone_tips = null;
						}
					} else {
						this.cellphone_tips = '手机号为空';
					};
					break;
				case 2:
					//password
					var pattern = new RegExp("(?=.{8,20}).*", "g");
					if (this.f_password == '') {
						this.f_password_tips = '密码为空';
					} else {
						this.f_password_tips = null;
					}
					if (this.v_password == '') {
						this.v_password_tips = '密码为空';
					} else {
						this.v_password_tips = null;
					};
					if (this.f_password.match(pattern)) {
						if (this.v_password.match(pattern)) {
							if (this.f_password !== this.v_password) {
								this.v_password_tips = this.f_password_tips = '密码输入不一致';
							} else {
								this.v_password_tips = null;
								this.f_password_tips = null;
							}
						} else {
							this.v_password_tips = '请输入合法的密码';
						}
					} else {
						this.f_password_tips = '请输入合法的密码';
					};

					//					if(this.f_password!==this.v_password){
					//						this.v_password_tips=this.f_password_tips='密码输入不一致'
					//					}else{
					//						if(!this.v_password==''){
					//				   			var getuserpw=this.v_password;
					//				   			if(!getuserpw.match(pattern)){
					//				    			this.v_password_tips='请输入正确的密码';
					//				    			
					//					   		}else{
					//					   			this.v_password_tips=null;
					//					   			this.f_password_tips=null;
					//				    			
					//					   		}
					//				   		}else{
					//					   		this.v_password_tips='密码为空';
					//					   	};
					//					}

					break;
				case 3:
					//nickname
					if (!this.nickname == '') {
						this.nickname_tips = null;
					} else {
						this.nickname_tips = '昵称不能为空';
					};
					break;
				case 4:
					//email
					var emailPattern = new RegExp("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])");
					if (!this.email == '') {
						if (!this.email.match(emailPattern)) {
							this.email_tips = '请填写正确的邮箱';
						} else {
							this.email_tips = null;
						}
					} else {
						this.email_tips = '邮箱不能为空';
					};
					break;
			}
		},
		Alert: function Alert(_title, _content) {
			common_tools.Shade_on('register');
			this.alert_options = [_title, _content];
			this.component = _alert2.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component = '';
			if (this.isregistersucess == true) {
				this.$store.commit('userislogin', this.usertoken);
				this.$router.push('/index');
				$(window).scrollTop(0);
				sessionStorage.setItem("username", this.usertoken.username);
				sessionStorage.setItem("userid", this.usertoken.id);
			};
		},
		district_emit: function district_emit(_val) {
			var _self = this;
			_self.provinceid = _val.provinceid;
			_self.districtid = _val.districtid;
			_self.countyid = _val.countyid;
			//console.log(_val.provinceid+"===="+_val.districtid+"===="+_val.countyid);
		},
		changebusiness: function changebusiness(_target) {
			//this.businesstype=_target.selectedOptions[0].id;
			this.businesstype = _target.options[_target.selectedIndex].id;
		},
		changeindustry: function changeindustry(_target) {
			//this.industry_id=_target.selectedOptions[0].id;
			this.industry_id = _target.options[_target.selectedIndex].id;
		},
		countDownftn: function countDownftn(_getThisDom) {
			var _self = this;
			if (_self.countDown == 0) {
				_getThisDom.removeAttribute("disabled");
				_self.countDown = 90;
				_self.btnIsactive = false;
				_self.authcodeString = "短信验证码";
			} else {
				_getThisDom.setAttribute("disabled", true);
				setTimeout(function () {
					_self.countDown--;
					_self.btnIsactive = true;
					_self.authcodeString = "重新发送(" + _self.countDown + ")";
					_self.countDownftn(_getThisDom);
				}, 1000);
			};
		},
		sendauthcode: function sendauthcode(_this) {
			var _self = this;
			var getThisDom = _this.target;
			_self.btnIsactive = true;
			if (_self.countDown == 90) {
				getThisDom.setAttribute("disabled", true);
				common_tools.AJAX('POST', common_tools.interfaceurl + 'login2/phoneAuthCodeRegester', {
					"condition": { "cellphone": _self.cellphone }
				}, function (data) {
					//success callback
					if (data.rspCode == '100000') {
						_self.countDownftn(getThisDom);
					} else if (data.rspCode == '101000') {
						_self.Alert('提示', data.rspMsg);
						_self.btnIsactive = false;
						getThisDom.removeAttribute("disabled");
					};
				}, function (data) {
					//error callback
					console.log(data);
				});
			};
		},
		sendinfo: function sendinfo() {
			var _self = this;
			$(window).scrollTop(0);
			this.validateFtn(1);this.validateFtn(2);this.validateFtn(3);this.validateFtn(4);
			if (this.cellphone_tips == null && this.v_password_tips == null && this.nickname_tips == null && this.email_tips == null) {
				if (this.agreement_confirm == true) {
					common_tools.AJAX('POST', common_tools.interfaceurl + 'memberInfo/memberRegister', {
						"condition": {
							"nickname": _self.nickname,
							"email": _self.email,
							"cellphone": _self.cellphone,
							"password": _self.v_password,
							"province": _self.provinceid,
							"city": _self.districtid,
							"region": _self.countyid,
							"busiDemand": _self.businesstype,
							"authCode": _self.authcode
							//								"tagId": _self.industry_id
						}
					}, function (data) {
						//success callback
						if (data.rspCode !== '100000') {
							_self.Alert('注册失败', data.rspMsg);
						} else if (data.rspCode == '100000') {
							_self.isregistersucess = true;
							_self.Alert('注册成功', '欢迎您的加入');
							_self.usertoken = data.userToken;
						};
					}, function (data) {
						console.log(data);
						_self.Alert('注册失败', data.rspMsg);
					});
				} else {
					_self.Alert('注册失败', '您未阅读或同意注册协议');
				}
			}
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.register_content{\n\t\twidth: 70%;\n\t\tmargin: 0 auto;\n\t\tbox-sizing: border-box;\n}\ndiv.register_content p.title{\n\t\ttext-align: center;\n\t\tmargin: 30px 0;\n\t\tfont-weight: 600;\n\t\tfont-size: 1.8rem;\n}\np.paragraph{\n\t\tfont-size: 1.4rem;\n\t\tline-height: 1.9;\n\t\ttext-indent: 2em;\n\t\tcolor: #818181;\n\t\ttext-align: justify;\n}\ndiv.agreement_frame{\n\t\toverflow-y: scroll;\n\t\toverflow-x: hidden;\n\t\theight: 400px;\n\t\tpadding: 0 20px;\n\t\tbox-sizing: border-box;\n}\np.agreement_confirm{\n\t\tfont-size: 1.2rem;\n    \ttext-align: center;\n    \twidth: 100%;\n   \t\tdisplay: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/bannerca36650908ff513b7ec9e494798ebaee.jpg";

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(828)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(548),
  /* template */
  __webpack_require__(781),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\register\\components\\agreement.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] agreement.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ff41f56", Component.options)
  } else {
    hotAPI.reload("data-v-6ff41f56", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "register"
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
  }, [_c('div', {
    staticClass: "register_content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("注册")]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("昵称:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nickname),
      expression: "nickname"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入您的昵称"
    },
    domProps: {
      "value": (_vm.nickname)
    },
    on: {
      "blur": function($event) {
        _vm.validateFtn(3)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nickname = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.nickname_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red"
  }, [_vm._v(_vm._s(_vm.nickname_tips))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("手机号:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cellphone),
      expression: "cellphone"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入您的手机号"
    },
    domProps: {
      "value": (_vm.cellphone)
    },
    on: {
      "blur": function($event) {
        _vm.validateFtn(1)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cellphone = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.cellphone_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red"
  }, [_vm._v(_vm._s(_vm.cellphone_tips))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("邮箱:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入您的电子邮箱"
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "blur": function($event) {
        _vm.validateFtn(4)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.email_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red"
  }, [_vm._v(_vm._s(_vm.email_tips))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("手机验证:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.authcode),
      expression: "authcode"
    }],
    staticStyle: {
      "width": "45%"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入短信验证码"
    },
    domProps: {
      "value": (_vm.authcode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.authcode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "bluecolor suateam_fl suateam_margin_horizontal_10",
    class: {
      greycolor: _vm.btnIsactive
    },
    on: {
      "click": function($event) {
        _vm.sendauthcode($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.authcodeString))])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("设置密码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.f_password),
      expression: "f_password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码8-20位"
    },
    domProps: {
      "value": (_vm.f_password)
    },
    on: {
      "keyup": function($event) {
        _vm.passwordValidate()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.f_password = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.f_password_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red"
  }, [_vm._v(_vm._s(_vm.f_password_tips))]) : _vm._e(), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("确认密码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.v_password),
      expression: "v_password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请确认密码8-20位"
    },
    domProps: {
      "value": (_vm.v_password)
    },
    on: {
      "blur": function($event) {
        _vm.validateFtn(2)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.v_password = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.v_password_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red"
  }, [_vm._v(_vm._s(_vm.v_password_tips))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "suateam_select_frame"
  }, [_c('label', [_vm._v("所在区域:")]), _vm._v(" "), _c('District', {
    staticStyle: {
      "width": "62%"
    },
    on: {
      "district_emit": _vm.district_emit
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "suateam_select_frame"
  }, [_c('label', [_vm._v("业务需求:")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.business_name),
      expression: "business_name"
    }],
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.business_name = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.changebusiness($event.target)
      }]
    }
  }, _vm._l((_vm.businessArray), function(items) {
    return _c('option', {
      attrs: {
        "id": items.code
      }
    }, [_vm._v(_vm._s(items.name))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "agreement_frame"
  }, [_c('Agreement')], 1), _vm._v(" "), _c('p', {
    staticClass: "agreement_confirm"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.agreement_confirm),
      expression: "agreement_confirm"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.agreement_confirm) ? _vm._i(_vm.agreement_confirm, null) > -1 : (_vm.agreement_confirm)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.agreement_confirm,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.agreement_confirm = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.agreement_confirm = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.agreement_confirm = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("我已阅读并同意《注册协议》")])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame_btn1"
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.sendinfo()
      }
    }
  }, [_vm._v("注册")])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pw-strength",
    attrs: {
      "id": "level"
    }
  }, [_c('div', {
    staticClass: "pw-bar"
  }), _vm._v(" "), _c('div', {
    staticClass: "pw-bar-on"
  }), _vm._v(" "), _c('div', {
    staticClass: "pw-txt"
  }, [_c('span', [_vm._v("弱")]), _vm._v(" "), _c('span', [_vm._v("中")]), _vm._v(" "), _c('span', [_vm._v("强")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-26a7da28", module.exports)
  }
}

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "agreement"
    }
  }, [_c('p', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "24px"
    }
  }, [_c('span', {
    staticStyle: {
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_vm._v("用户协议")])]), _c('span', {
    staticStyle: {
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  })]), _c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  })]), _vm._v(" "), _c('p', [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("一、总则")])])])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "font-family": "微软雅黑",
      "line-height": "125%",
      "font-size": "16px"
    }
  }, [_vm._v("1"), _c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑"
    }
  }, [_vm._v("、赛鳌与用户共同确认：")])])])])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-weight": "normal",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("1.1、用户在使用赛鳌电商平台服务前，已仔细阅读《赛鳌用户协议》（以下简称“本协议”）的全部内容，对于本协议中的加重字体、斜体、下划线、颜色标记等条款已重点阅读、理解。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-weight": "normal",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("1.2、 用户同意本协议的全部条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击\"注册\"按钮即表示用户与赛鳌达成以下协议，完全接受本协议项下的全部条款，本协议即在用户与赛鳌之间产生法律效力，对双方均具有法律约束力。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-weight": "normal",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("1.3、 用户注册成功后，将获得自行注册的用户账号和自行设定的密码在赛鳌的使用权限，该用户帐号和密码由用户负责保管；用户对以其用户帐号进行的所有活动和事件负法律责任。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-weight": "normal",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("1.4、 赛鳌用户协议、各个单项服务条款、全部活动规则及公告、声明等，均为本协议不可分割的组成部分（以下统称协议）。赛鳌有权对协议进行不定期修订、更新。修改后的协议一经公布即有效替代原有协议，新协议公布时会以适当方式通知用户，用户可随时查询最新协议。用户在使用赛鳌提供的各项服务之前，应仔细阅读本协议及本协议不可分割的各项内容。用户在使用相关服务时,应关注并遵守其所适用的相关条款。用户如不同意本服务协议及/或对其的修改，可以主动取消或停止使用赛鳌提供的服务；用户一旦使用赛鳌服务，即视为用户已了解并完全同意本协议及其他服务条款中的各项内容，包括赛鳌对本协议及其他服务条款所做的任何修改协议及/或协议的修改将在用户与赛鳌之间产生法律效力。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("二、相关定义")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("2.1、 赛鳌：指天津赛鳌软件技术有限公司运营和所有的网络交易服务平台。天津赛鳌软件技术有限公司通过赛鳌平台向用户和商户提供相关互联网端交易服务。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("2.2、 用户：指接受并同意“赛鳌用户协议”全部条款，并完成赛鳌平台注册程序，获得可以登陆赛鳌会员系统权限的正式注册会员。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("三、用户资格及注册")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("3.1、用户应为具有完全民事权利能力和民事行为能力的自然人、法人，或是能够独立承担民事责任的其他组织。用户若不具有前述规定的法律能力，须经法定代理人同意或由法定代理人代理，或是得到有权主体授权后进行注册、交易。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("3.2、本站仅提供相关的网上服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("3.3、用户点击“同意以下协议并注册”按钮，则视为用户同意本协议的所有条款，且具有浏览赛鳌平台相关信息、提交订单、发表评价等使用赛鳌提供的全部服务的权利能力和行为能力，同意承担由此带来的全部法律责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("3.4、 用户注册、使用赛鳌不得出于非法或破坏赛鳌交易秩序的目的，用户保证向赛鳌提交的全部信息均为本人真实、准确、有效和完整的信息，不存在盗用、借用、买入非本人手机号码、电子邮箱等进行注册、虚假交易和作弊交易的行为，用户若存在上述违规行为，赛鳌有权取消停止服务、封停帐号且以后也不再向其提供服务。如该违规行为给赛鳌造成损失的，赛鳌保留追究赔偿及诉至法律解决的权利。")])]), _vm._v(" "), _c('p', [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("3.5、 用户注册成功后，应妥善保管其赛鳌平台帐户及密码，定期或不定期修改密码，在每次使用赛鳌服务完毕后及时退出帐户，以确保帐户安全。用户应对其赛鳌注册账号和密码下进行的行为和发生的事件负责。用户不得将赛鳌平台帐户出借、转让或用作其他非法用途，否则因帐户未妥善保管而造成损失的，用户应承担相应法律责任，除非有证据证明该行为与用户无关。若用户因赛鳌平台帐户被盗或因其他非用户原因造成损失的，用户应立即通知赛鳌并向公安机关报案。凡因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("四、用户信息保护")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.1、 赛鳌仅在用户注册时，基于用户帐户安全、平台协助保障用户相应权益等需要，收集用户的手机号、电子邮箱等必要的用户数据，除此之外，赛鳌不会收集任何用户信息；用户在提交订单、获取免费产品或服务时，基于用户服务需求、配送用户订购、查询的商品或服务、或平台协助保障用户相应权益等需要，收集用户的企业名称、规模、收货地址、营业执照副本等必要的用户数据；用户同意赛鳌基于上述目的及范围收集信息。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.2、用户同意接收赛鳌向用户在平台注册的手机号码、邮箱地址发送商业信息。若用户不再需要这些信息，可通知赛鳌取消发送。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.3、 赛鳌对收集的用户信息中涉及识别用户个人身份和用户个人隐私的信息进行保护，不会将用户的上述信息对外公开或提供给任何第三方，但以下情况除外：")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.3.1、 用户同意让第三方共享资料；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.3.2、 用户同意公开其个人资料，享受为其提供的产品和服务；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.3.3、 根据法律法规的规定，或行政机关的要求，向行政机关、司法机关或其他法律规定的第三方披露；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.4、本站可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本站同等的保护用户隐私的责任，则本站有权将用户的注册资料等提供给该第三方。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("4.5、在不透露单个用户隐私资料的前提下，本站有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("五、赛鳌服务")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("5.1、 用户可根据本协议及赛鳌公布的相关使用规则，查阅在赛鳌平台上发布的活动信息、产品信息，通过赛鳌平台订购具体服务、产品，发布服务、产品评价信息，参加赛鳌不定期组织的有关活动，及赛鳌现有及将来可能提供的其他服务。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("5.2、赛鳌提供网络信息安全产品及相关服务。服务的具体内容赛鳌根据实际情况提供，保留随时变更、中断或终止部分或全部服务的权利。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('span', {
    staticStyle: {
      "font-family": "宋体",
      "line-height": "125%",
      "font-size": "16px"
    }
  }, [_vm._v("5.3"), _c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("、为了保障消费者的权益，赛鳌建立了相应的保障机制。用户在购买某个产品时，若该产品页面标识了相应的服务承诺，则用户可依据该服务规则享受相应的保障服务。")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("但未标识保障服务标识或不符合保障条件的用户，无法获得相应保障。用户购买非赛鳌保障的服务或产品产生消费纠纷的，应依照普通处理程序，优先联系相应的")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("第三方")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("处理。")])])])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("六、用户行为规范")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.1、用户保证在账户注册及下订单时向赛鳌提交的信息真实、有效、详尽、准确，能满足赛鳌向用户提供服务的需要。若用户信息发生变更的，用户应及时修改相应信息，以保证服务的准确性。若用户提交的信息中有虚假、不准确等内容，导致赛鳌无法提供服务的，赛鳌有权暂停向该用户提供服务，直至用户提交正确的信息。若因用户提交信息虚假、错误造成损失的，赛鳌不承担责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.2、 用户在使用赛鳌提供的前述服务时，应遵守本协议及赛鳌的相关使用规则，遵守自愿、平等、公平及诚实信用原则，不利用赛鳌平台侵犯他人合法权益及谋取不正当利益，不扰乱网上交易的正常秩序。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3、 用户可以在赛鳌平台发布对商品或服务的购买体验、评价等信息，并可对其进行适当的修改、删除，但不得在赛鳌平台发布包含以下内容的言论：")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.1、 反对宪法所确定的基本原则，煽动、抗拒、破坏宪法和法律、行政法规实施的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.2、 煽动颠覆国家政权，推翻社会主义制度，煽动、分裂国家，破坏国家统一的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.3、 损害国家荣誉和利益的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.4、 煽动民族仇恨、民族歧视，破坏民族团结的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.5、 任何包含对种族、性别、宗教、地域内容等歧视的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.6、 捏造或者歪曲事实，散布谣言，扰乱社会秩序的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.7、 宣扬封建迷信、邪教、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.8、 公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.9、 损害国家机关信誉的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.3.10、 其他违反宪法和法律行政法规的。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-indent": "32px",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("用户在赛鳌平台发布的信息，均代表用户的观点，与赛鳌无关，用户须对其言论独立承担完全的法律责任。")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4、 用户在使用赛鳌提供的服务时，不得有下列行为：")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.1、 利用赛鳌平台从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.2、 将有关干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其他计算机代码、档案和程序之资料，加以上载、发布、发送电子邮件或以其他方式传送；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.3、 干扰赛鳌平台正常运行，非法入侵赛鳌服务器、篡改赛鳌代码或其他损害赛鳌系统的行为；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.4、 企图规避赛鳌平台的安全设置或网络系统，包括获取用户不应获取的数据，登录未经明确授权的服务器或帐户，或采用运行端口扫描等方式窥探其他网络的安全措施；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.5、 以导致赛鳌的计算机系统或设施承受不合理负载的方式获取赛鳌提供的服务或网站信息，或进行可能导致此类情况出现的行为；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.6、 实施任何形式的网络监控，从而截取与自身无关的信息；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.7、 利用赛鳌平台试图扰乱正常购物秩序，谋取不正当利益的行为；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.8、通过不正当手段（包括但不限于通过使用虚假手机号、非本人手机号、模拟客户端等）批量注册账户、批量购买产品，从而有碍其他用户公平参与平台活动等其他经济利益的行为 ；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.9、 大量购买商品或服务后又大量退货或囤积牟利，损害商户、用户或赛鳌利益的行为；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.10、购买、盗用或通过其他方式获得他人注册账号参与活动或交易的行为。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.4.11、 其他损害他人或赛鳌合法权益的行为。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "font-family": "宋体",
      "line-height": "125%",
      "font-size": "16px"
    }
  }, [_vm._v("6.5、一经发现用户提供虚假信息或有上述禁止的言论或行为的，赛鳌有权采取暂停提供服务、删除违法违规信息、限制用户购买、")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("试用、")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("取消优惠或获得的权益资格、禁止用户发言、冻结用户帐户、永久封禁账户等处理措施。若因用户的上述言论或行为给他人或赛鳌造成损失的，用户还应承担赔偿责任及其他相关法律责任，包括但不限于行政责任、刑事责任等。")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.6、 若国家相关机关向赛鳌发出命令、指示、裁决等法律文书或第三人向赛鳌投诉并提供相关证据材料，要求冻结、关闭用户帐号及交易的，赛鳌有权对相关帐号及交易进行冻结或取消，同时对违反本协议及赛鳌相关服务规则的用户，赛鳌有权封停其帐号。赛鳌采取上述措施的，将通过用户注册时提交的联系信息通知用户。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.7、 用户应遵守本协议及赛鳌公示的各项服务规则的内容，若因用户违反本协议及服务规则造成损失的，用户应予以赔偿。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.8、用户发现赛鳌平台商户页面内容错误或有其他虚假信息时，可以通过纠错通道进行反馈，也可通过赛鳌客服进行反馈，赛鳌鼓励用户对不实信息进行举报。对用户反馈的不实信息，赛鳌将尽快予以核实。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("6.9、用户使用赛鳌提供的服务，发现客户端内容有瑕疵或其他影响用户体验的问题时，可通过赛鳌客户端预留的通道向赛鳌反馈相关问题或提出相关建议。赛鳌收到用户的反馈后会尽快予以核实和解决。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("七、赛鳌的权利与义务")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("7.1、赛鳌有权对平台功能进行升级和改造，有权基于服务的稳定对相关服务器进行停机维护，赛鳌在行使以上权利时，将尽力不对用户的使用造成影响。若影响用户使用的，赛鳌会提前在客户端予以公告。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("7.2、赛鳌根据提供服务的过程，经营上的变化，无需向用户得到同意即可变更所提供服务的内容。且赛鳌有权制定赛鳌平台的相关交易规则和服务规则，并有权对这些规则进行修订和更新。赛鳌修改上述内容时，会以适当的方式通知用户。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("7.3、赛鳌有权记录用户的相关交易行为，有权对用户是否合法进行交易进行监督和检查。若发现用户违反国家相关法律法规规定或赛鳌平台相关规则的，赛鳌有权采取包括冻结账号、冻结交易、永久封禁、拒绝服务等措施。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "font-family": "宋体",
      "line-height": "125%",
      "font-size": "16px"
    }
  }, [_vm._v("7.4、赛鳌有权在赛鳌平台开展相关营销活动，这些营销活动赛鳌有权以自己认为合适的方式开放给符合条件的不特定用户，且活动的形式、内容、期限、条件等均由赛鳌自行决定。这些活动用户可以自行选择参加，也可以不参加，但若用户选择参加，用户应遵守相关活动规则。")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("7.5、出于维护正常交易秩序，保证平台全体用户合法权益和公平交易权的目的，赛鳌会制定相关的反作弊策略。对购买或试用条件有限制或必须符合条件才可享受优惠的用户或产品，赛鳌有权进行监控和抽查，若发现用户违反相关反作弊策略的，赛鳌有权取消用户所获优惠，并冻结其账号。同时，赛鳌有权根据用户违反本协议的情节严重程度，决定是否永久封停用户账号并拒绝为其提供服务。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("7.6、赛鳌应尽力保证服务的稳定性和安全性，在力所能及的情况下，保证用户信息安全，未经用户同意，不得随意泄露用户信息。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("7.7、赛鳌应履行其通过客户端向用户做出的服务保障承诺，履行试用后产品可退等赛鳌在平台明确对用户做出的承诺，但赛鳌明示不适用这些承诺的除外。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("7.8、本网站在提供服务过程中，应及时解决会员提出的不满事宜，如在解决过程中确有难处，可以采取公开通知方式或向会员发送电子邮件寻求解决办法。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("八、服务的中断和终止")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.1、 赛鳌会尽全力维护平台的正常运行，以向用户提供持续、稳定、安全、顺畅的服务。但用户理解并同意：赛鳌对服务页面进行改版、升级网站系统、增加服务功能等须中断服务的操作时，有权暂时中断服务。赛鳌将尽可能在实施以上行为时予以提前公告，并尽可能将影响降低到最小。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.2、 用户可自行停止使用赛鳌提供的服务，并可向赛鳌提交申请，要求封停或注销其帐户。用户帐户被封停或注销后，用户将不能使用赛鳌平台除浏览页面外的所有服务，但赛鳌仍有权保留用户的所有注册信息及过往交易记录，对用户在赛鳌平台从事违法行为或违反本协议及相关规定的行为，赛鳌仍有权行使本协议规定的权利并追究用户的法律责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.3、 赛鳌可在下列情况下，自行停止向用户提供服务，并封停或注销其帐户，若因用户行为给赛鳌造成损失的，用户还应负责赔偿：")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.3.1、 用户违反本协议相关规定的，不论用户是否直接、间接或者通过他人再次注册成为赛鳌用户，赛鳌均有权停止向其提供服务；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.3.2、 每个用户仅可在赛鳌注册一个帐户，若用户注册多个帐户或使用关联帐户购买、试用本站有购买、试用限制的产品或谋取不正当利益的，赛鳌有权取消交易并停止向该用户提供服务，用户因此获取的利益须退还；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.3.3、若赛鳌通过技术检测、人工抽检等手段有合理理由认为用户资料信息为错误、不实、失效或不完整，本网站有权冻结或封禁用户账号及其账号内的金额，并拒绝用户现在或将来使用本站网站网络服务的全部或部分，用户因此获取的利益须退还。 用户使用虚假信息注册的，包括但不限于使用虚假姓名、虚假地址、虚假手机号、虚假电子邮箱等，赛鳌均有权立即停止向其提供服务；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.3.4、 本协议终止或更新时，用户明示不同意接受新协议的；")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("8.3.5、 其他违反赛鳌相关规定或致使赛鳌或他人遭受利益损害的行为。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("九、责任限制")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("9.1、用户明确同意其使用本站网络服务所存在的风险及一切后果将完全由用户本人承担，赛鳌对此不承担任何责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("9.2、对于站向用户提供的下列产品或者服务的质量缺陷本身及其引发的任何损失，本站无需承担任何责任：(1)本站向用户免费提供的各项网络服务；(2)本站向用户赠送的任何产品或者服务。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("9.3、不论在任何情况下，赛鳌对由于互联网正常的设备维护，互联网络连接故障，电脑、通讯或其他系统的故障，电力故障，罢工，暴乱，骚乱，灾难性天气（如火灾、洪水、风暴等），爆炸，战争，政府行为，司法行政机关的命令或第三方的不作为而造成的不能履行或延迟履行服务不承担责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('span', {
    staticStyle: {
      "font-family": "宋体",
      "line-height": "125%",
      "font-size": "16px"
    }
  }, [_vm._v("9.4"), _c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("、")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("如因上述不可抗力或其他赛鳌无法控制的原因使赛鳌平台")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("的")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("系统崩溃或无法正常使用导致网上交易无法完成或丢失有关的信息、记录等，赛鳌不承担责任。")])]), _c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("但赛鳌会在最大限度内尽可能合理地协助处理善后事宜，并努力使客户免受经济损失及其他损失。")])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("9.5、任何人因使用本客户端而可能遭致的意外及其造成的损失（包括因下载本客户端可能链接的第三方网站内容而感染电脑病毒），我们对此概不负责，亦不承担任何法律责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("9.6、本网站禁止制作、复制、发布、传播等具有反动、色情、暴力、淫秽等内容的信息，一经发现，立即删除。若您因此触犯法律，我们对此不承担任何法律责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("9.7、本网站用户自行上传或通过网络收集的资源，我们仅提供一个展示、交流的平台，不对其内容的准确性、真实性、正当性、合法性负责，也不承担任何法律责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("9.8、任何单位或个人认为通过本网站网页内容可能涉嫌侵犯其著作权，应该及时向我们提出书面权利通知，并提供身份证明、权属证明及详细侵权情况证明。我们收到上述法律文件后，将会依法尽快处理。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "font-family": "宋体",
      "line-height": "125%",
      "font-size": "16px"
    }
  }, [_vm._v("9.9、")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("基于互联网的特殊性，赛鳌平台显示的信息可能有一定的滞后性或差错，对此情形用户应知悉并理解；用户须自行辨别真伪，谨慎预防风险。")])])])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("十、知识产权")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("10.1、本客户端所有的产品、技术、程序、页面（包括但不限于页面设计及内容）以及资料内容（包括但不限于本站所刊载的图片、视频、Flash等）均属于知识产权，仅供本用户交流、学习、研究和欣赏，未经授权，任何人不得擅自使用，否则，将依法追究法律责任。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("10.2、 用户同意，用户在赛鳌平台发表的产品使用体验、产品讨论或图片、视频等所有信息（以下简称“信息”），除署名权、发表权、修改权外的其他知识产权权利（包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利），均独家排他无偿许可给赛鳌，并同意赛鳌以自己名义就所述权利的保护采取任何形式的法律行为，并获得全部赔偿。 本协议已经构成《著作权法》第二十五条所规定的书面协议，其效力及于用户在赛鳌平台发布的任何受著作权法保护的作品内容，无论该内容形成于本协议签订前还是本协议签订后。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("10.3、 赛鳌及赛鳌许可的关联方有权将用户在赛鳌平台发表的产品使用体验、产品讨论或图片进行使用或者与其他人合作使用，使用范围包括但不限于网站、电子杂志、杂志、刊物等。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("10.4、用户不得发布任何侵犯他人著作权、商标权等知识产权或其他合法权利的内容；如果有其他用户或权利人发现用户发布的信息涉嫌知识产权、或其他合法权益争议的，上述用户或权利人要求赛鳌删除用户发布的信息，或者采取其他必要措施予以制止的，赛鳌将会依法采取必要措施予以处理。因抄袭、转载、侵权等行为所产生的纠纷由用户自行解决，赛鳌不承担任何法律责任")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "font-family": "宋体",
      "line-height": "125%",
      "font-size": "21px"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("十一、")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "宋体"
    }
  }, [_vm._v("通知和公告")])])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("11.1、 赛鳌向用户发送的所有通告，将通过手机短信息、客户端信息推送或电子邮件的方式传送。赛鳌的活动信息也将定期或不定期通过上述方式向用户发送。用户协议条款的修改、服务变更、或其它重要事件的通告都会以此形式进行。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "vertical-align": "baseline",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("11.2、 用户可以选择接受或不接受赛鳌通过上述形式向其发送订单信息、促销活动等信息。用户选择不接受的，可以随时通知赛鳌取消发送。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("十二、")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("修改协议")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("12.1、赛鳌将可能不时的修改本协议的有关条款，一旦条款内容发生变动，赛鳌将会在相关的页面提示修改内容。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("12.2、如果不同意赛鳌对服务条款所做的修改，用户有权停止使用赛鳌。如果用户继续使用圣目关啊，则视为用户接受服务条款的变动。")])]), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("十三、")])]), _c('strong', [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "21px",
      "font-family": "宋体"
    }
  }, [_vm._v("法律管辖和适用")])])])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("13.1、本协议使用的标题仅为方便阅读而加入，并不会对本协议的条款起到定义或限制的作用。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("13.2、如发生本协议条款与中国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它合法条款则依旧保持对用户产生法律效力和影响。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("13.3、本服务条款规定是可分割的，如本服务条款任何规定被裁定为无效或不可执行，该规定可被删除而其余条款应予以执行。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("13.4 、本协议的订立、执行和解释及争议的解决均应适用中国法律。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v("13.5、如双方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向被告所在地人民法院提出诉讼解决。")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-indent": "32px",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v(" ")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-indent": "32px",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v(" ")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0",
      "text-indent": "32px",
      "text-align": "justify",
      "text-justify": "inter-ideograph",
      "line-height": "125%"
    }
  }, [_c('span', {
    staticStyle: {
      "line-height": "125%",
      "font-size": "16px",
      "font-family": "微软雅黑, \"Microsoft YaHei\""
    }
  }, [_vm._v(" ")])]), _vm._v(" "), _c('p', [_c('br')])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6ff41f56", module.exports)
  }
}

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("5b5cacb8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-26a7da28\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-26a7da28\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(618);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("03ebaef3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6ff41f56\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./agreement.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6ff41f56\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./agreement.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});