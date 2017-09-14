webpackJsonp([40],{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(807)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(558),
  /* template */
  __webpack_require__(759),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\user\\components\\change_password.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] change_password.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d380a24", Component.options)
  } else {
    hotAPI.reload("data-v-1d380a24", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

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

var common_tools = __webpack_require__(69);

module.exports = {
	//components configs
	name: 'change_password',
	data: function data() {
		return {
			authcodeimg: common_tools.authcodeimgurl,
			v_password: '',
			o_password: '',
			n_password: '',
			authcode: '',
			component: '',
			o_password_tips: null,
			n_password_tips: null,
			v_password_tips: null,
			alert_options: ['', ''] //['标题'，'内容']
		};
	},
	methods: {
		Alert: function Alert(_title, _content) {
			common_tools.Shade_on('usercenter');
			this.alert_options = [_title, _content];
			this.component = _alert2.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component = '';
		},
		passwordValidate: function passwordValidate() {
			$(".pw-strength").css("display", "block");
			var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
			var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
			var enoughRegex = new RegExp("(?=.{8,}).*", "g");
			if (false == enoughRegex.test(this.n_password)) {
				$('#level').removeClass('pw-weak');
				$('#level').removeClass('pw-medium');
				$('#level').removeClass('pw-strong');
				$('#level').addClass(' pw-defule');
				//密码小于六位的时候，密码强度图片都为灰色 
			} else if (strongRegex.test(this.n_password)) {
				$('#level').removeClass('pw-weak');
				$('#level').removeClass('pw-medium');
				$('#level').removeClass('pw-strong');
				$('#level').addClass(' pw-strong');
				//密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
			} else if (mediumRegex.test(this.n_password)) {
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
				case 2:
					//password
					//var pattern = new RegExp("^[0-9_a-zA-Z]{8,20}$");
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
				case 4:
					//n_password
					var pattern = new RegExp("(?=.{8,20}).*", "g");
					if (!this.n_password == '') {
						var getuserpw = this.n_password;

						if (!getuserpw.match(pattern)) {
							this.n_password_tips = '请输入正确的密码';
						} else {
							this.n_password_tips = null;
						}
					} else {
						this.n_password_tips = '密码为空';
					};
					break;
				case 5:
					//o_password
					var pattern = new RegExp("(?=.{8,20}).*", "g");
					if (!this.o_password == '') {
						var getuserpw = this.o_password;
						if (!getuserpw.match(pattern)) {
							this.o_password_tips = '请输入正确的密码';
						} else {
							this.o_password_tips = null;
						}
					} else {
						this.o_password_tips = '密码为空';
					};
					break;
			}
		},
		changeauthcode: function changeauthcode() {
			this.authcodeimg = this.authcodeimg + '?t=' + Math.random();
		},
		sendinfo: function sendinfo() {
			var _self = this;
			this.validateFtn(5);this.validateFtn(4);this.validateFtn(2);
			if (this.o_password_tips == null && this.n_password_tips == null && this.v_password_tips == null) {
				common_tools.AJAX('POST', common_tools.interfaceurl + 'memberInfo/changeMemberPassword', {
					"condition": {
						"password": _self.o_password,
						"newPassword1st": _self.n_password,
						"newPassword2nd": _self.v_password,
						"authCode": _self.authcode
					}
				}, function (data) {
					//success callback
					if (data.rspCode !== '100000') {
						_self.Alert('修改失败', data.rspMsg);
					} else if (data.rspCode == '100000') {
						_self.Alert('修改成功', data.rspMsg);
						console.log(data);
					};
				}, function (data) {
					//error callback
					console.log(data);
				});
			}
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#change_password{\n\twidth: 90%;\n}\n", ""]);

// exports


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "change_password"
    }
  }, [_c(_vm.component, {
    tag: "component",
    attrs: {
      "alert_options": _vm.alert_options
    },
    on: {
      "alert_emit": _vm.alert_emit
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("旧密码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.o_password),
      expression: "o_password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入旧密码"
    },
    domProps: {
      "value": (_vm.o_password)
    },
    on: {
      "blur": function($event) {
        _vm.validateFtn(5)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.o_password = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.o_password_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red"
  }, [_vm._v(_vm._s(_vm.o_password_tips))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("新密码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.n_password),
      expression: "n_password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入新密码"
    },
    domProps: {
      "value": (_vm.n_password)
    },
    on: {
      "blur": function($event) {
        _vm.validateFtn(4)
      },
      "keyup": function($event) {
        _vm.passwordValidate()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.n_password = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.n_password_tips !== null) ? _c('span', {
    staticClass: "suateam_validate red"
  }, [_vm._v(_vm._s(_vm.n_password_tips))]) : _vm._e(), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("确认新密码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.v_password),
      expression: "v_password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请确认新密码"
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
    staticClass: "suateam_input_frame"
  }, [_c('label', [_vm._v("验证码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.authcode),
      expression: "authcode"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入验证码"
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame authcodeframe"
  }, [_c('img', {
    attrs: {
      "src": _vm.authcodeimg
    }
  }), _vm._v(" "), _c('span', [_vm._v("看不清？ "), _c('a', {
    on: {
      "click": function($event) {
        _vm.changeauthcode()
      }
    }
  }, [_vm._v("换一张")])])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame_btn1"
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.sendinfo()
      }
    }
  }, [_vm._v("确认修改")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pw-strength",
    staticStyle: {
      "left": "213px"
    },
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1d380a24", module.exports)
  }
}

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(597);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("94d20c48", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1d380a24\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./change_password.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1d380a24\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./change_password.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});