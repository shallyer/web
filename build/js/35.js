webpackJsonp([35],{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(836)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(537),
  /* template */
  __webpack_require__(789),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\login\\forgetpw.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] forgetpw.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8fd9615e", Component.options)
  } else {
    hotAPI.reload("data-v-8fd9615e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/banner5edd1bc8a76b61003eb2e95a034eca6c.jpg";

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var common_tools = __webpack_require__(69);
exports.default = {
	components: { Alert: _alert2.default },
	name: 'forgetpw',
	data: function data() {
		return {
			banner: 'url(' + __webpack_require__(487) + ')',
			cellphone: '',
			v_password: '',
			f_password: '',
			authcode: '',
			component: '',
			alert_options: ['', ''], //['标题'，'内容']
			comment: '',
			cellphone_tips: null,
			v_password_tips: null,
			countDown: 90,
			btnIsactive: false,
			authcodeString: '短信验证码'
		};
	},
	mounted: function mounted() {},
	methods: {
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
					if (!this.v_password == '') {
						var getuserpw = this.v_password;
						if (!getuserpw.match(pattern)) {
							this.v_password_tips = '请输入正确的密码';
						} else {
							this.v_password_tips = null;
						}
					} else {
						this.v_password_tips = '密码为空';
					};
					break;
			}
		},
		Alert: function Alert(_title, _content) {
			common_tools.Shade_on('forgetpw');
			this.alert_options = [_title, _content];
			this.component = _alert2.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component = '';
			if (this.isloginsucess == true) {
				this.$store.commit('userislogin', this.usertoken);
				this.$router.push('/index');
				sessionStorage.setItem("username", this.usertoken.username);
				sessionStorage.setItem("userid", this.usertoken.id);
			};
		},
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
				common_tools.AJAX('POST', common_tools.interfaceurl + 'login2/phoneAuthCode', {
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
			this.validateFtn(1);
			this.validateFtn(2);
			if (this.cellphone_tips == null && this.v_password_tips == null) {
				common_tools.AJAX('POST', common_tools.interfaceurl + 'memberInfo/changeMemberPasswordForgeted', {
					"condition": {
						"cellphone": _self.cellphone,
						"newPassword1st": _self.f_password,
						"newPassword2nd": _self.v_password,
						"authCode": _self.authcode
					}
				}, function (data) {
					//success callback
					if (data.rspCode !== '100000') {
						_self.Alert('修改失败', data.rspMsg);
					} else if (data.rspCode == '100000') {
						_self.Alert('修改成功', '请重新登录');
						this.$router.push('/index');
					};
				}, function (data) {
					//error callback
					_self.Alert('登录失败', data.rspMsg);
					console.log(data);
				});
			}
		}
	}

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.login_content{\n\twidth: 70%;\n\tmargin: 0 auto;\n\tbox-sizing: border-box;\n}\ndiv.login_content p.title{\n\ttext-align: center;\n\tmargin: 30px 0;\n\tfont-weight: 600;\n\tfont-size: 1.8rem;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "forgetpw"
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
    staticClass: "login_content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("忘记密码")]), _vm._v(" "), _c('div', {
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
  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
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
    staticClass: "suateam_input_frame_btn1",
    staticStyle: {
      "margin-top": "30px"
    }
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.sendinfo()
      }
    }
  }, [_vm._v("修改密码")])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('p', {
    staticStyle: {
      "width": "50%",
      "margin": "0 auto"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("返回登录")])], 1)])])])])], 1)
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8fd9615e", module.exports)
  }
}

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(626);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("7e4c31fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8fd9615e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgetpw.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8fd9615e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgetpw.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});