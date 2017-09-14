webpackJsonp([34],{

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(834)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(538),
  /* template */
  __webpack_require__(787),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\login\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b091d9c", Component.options)
  } else {
    hotAPI.reload("data-v-7b091d9c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/banner5edd1bc8a76b61003eb2e95a034eca6c.jpg";

/***/ }),

/***/ 538:
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

var common_tools = __webpack_require__(69);
exports.default = {
	components: { Alert: _alert2.default },
	name: 'login',
	data: function data() {
		return {
			banner: 'url(' + __webpack_require__(487) + ')',
			username: '',
			authcodeimg: common_tools.authcodeimgurl,
			cellphone: '',
			v_password: '',
			authcode: '',
			component: '',
			alert_options: ['', ''], //['标题'，'内容']
			isloginsucess: false,
			usertoken: {},
			cellphone_tips: null,
			v_password_tips: null
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
						};
					} else {
						this.v_password_tips = '密码为空';
					};
					break;
			}
		},
		Alert: function Alert(_title, _content) {
			common_tools.Shade_on('login');
			this.alert_options = [_title, _content];
			this.component = _alert2.default;
		},
		alert_emit: function alert_emit(_val) {
			common_tools.Shade_off();
			this.component = '';
			if (this.isloginsucess == true) {
				this.$store.commit('userislogin', this.usertoken);
				this.$router.push('/index');
				$(window).scrollTop(0);
				sessionStorage.setItem("username", this.usertoken.username);
				sessionStorage.setItem("userid", this.usertoken.id);
				if (this.$store.state.needReturnThisPage !== null) {
					console.log(this.$store.state.needReturnThisPageParm);
					var tempNeedReturnThisPage = this.$store.state.needReturnThisPage;
					var tempNeedReturnThisPageParm = this.$store.state.needReturnThisPageParm;
					if (tempNeedReturnThisPageParm !== null) {
						this.$router.push({ name: tempNeedReturnThisPage, params: { detail: tempNeedReturnThisPageParm.getId, case: tempNeedReturnThisPageParm.currCase } });
					} else {
						this.$router.push('/' + tempNeedReturnThisPage);
					};
				};
			} else {
				//this.cellphone='';
				//      			this.v_password='';
				this.authcode = '';
				this.changeauthcode();
			};
		},
		changeauthcode: function changeauthcode() {
			this.authcodeimg = this.authcodeimg + '?t=' + Math.random();
		},
		sendinfo: function sendinfo() {
			var _self = this;
			this.validateFtn(1);
			this.validateFtn(2);
			if (this.cellphone_tips == null && this.v_password_tips == null) {
				common_tools.AJAX('POST', common_tools.interfaceurl + 'login/memberLogin', {
					"condition": {
						"cellphone": _self.cellphone,
						"password": _self.v_password,
						"authCode": _self.authcode
					}
				}, function (data) {
					//success callback
					if (data.rspCode !== '100000') {
						_self.Alert('登录失败', data.rspMsg);
					} else if (data.rspCode == '100000') {
						_self.isloginsucess = true;
						_self.Alert('登录成功', '欢迎回来');
						_self.usertoken = data.userToken;
					};
				}, function (data) {
					//error callback
					_self.Alert('登录失败', data.rspMsg);
					console.log(data);
					_self.cellphone = '';
					_self.v_password = '';
					_self.authcode = '';
					_self.changeauthcode();
				});
			}
		}
	}

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.login_content{\r\n\twidth: 50%;\r\n\tmargin: 0 auto;\r\n\tbox-sizing: border-box;\n}\ndiv.login_content p.title{\r\n\ttext-align: center;\r\n\tmargin: 30px 0;\r\n\tfont-weight: 600;\r\n\tfont-size: 1.8rem;\n}\r\n\t\r\n", ""]);

// exports


/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "login"
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
  }, [_vm._v("会员登录")]), _vm._v(" "), _c('div', {
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
  }, [_c('label', [_vm._v("密码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.v_password),
      expression: "v_password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码"
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
  }, [_vm._v("登录")])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame"
  }, [_c('p', {
    staticStyle: {
      "width": "50%",
      "margin": "0 auto"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("注册")]), _vm._v(" "), _c('router-link', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "to": "/forgetpw"
    }
  }, [_vm._v("忘记密码？")])], 1)])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7b091d9c", module.exports)
  }
}

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(624);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("5bc94910", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b091d9c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7b091d9c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});