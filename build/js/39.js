webpackJsonp([39],{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(826)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(559),
  /* template */
  __webpack_require__(779),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\user\\components\\phone_validate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] phone_validate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62bcaf53", Component.options)
  } else {
    hotAPI.reload("data-v-62bcaf53", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var common_tools = __webpack_require__(69);

module.exports = {
  //components configs
  name: 'phone_validate',
  data: function data() {
    return {
      cellphone: '',
      authCode: '',
      component: '',
      cellphone_tips: null,
      alert_options: ['', ''], //['标题'，'内容']
      countDown: 60,
      btnIsactive: false,
      authcodeString: '短信验证码'
    };
  },
  methods: {
    validateFtn: function validateFtn(_type) {
      switch (_type) {
        case 1:
          //cellphone
          var pattern = new RegExp("^[1][358][0-9]{9}$");
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
      }
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
    countDownftn: function countDownftn(_getThisDom) {
      var _self = this;
      if (_self.countDown == 0) {
        _getThisDom.removeAttribute("disabled");
        _self.countDown = 60;
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
      if (_self.countDown == 60) {
        _self.countDownftn(getThisDom);
        common_tools.AJAX('POST', common_tools.interfaceurl + 'login2/phoneAuthCode', {
          "condition": { "cellphone": _self.cellphone }
        }, function (data) {
          //success callback
          if (data.rspCode == '999999') {
            alert("传参错误，请重新检查");
          } else if (data.rspCode !== '999999') {
            console.log("验证码:" + data.data.authCode);
          };
        }, function (data) {
          //error callback
          console.log(data);
        });
      }
    },
    sendinfo: function sendinfo() {
      var _self = this;
      this.validateFtn(1);
      if (this.cellphone_tips == null) {
        common_tools.AJAX('POST', common_tools.interfaceurl + 'memberInfo/memberPhoneUpdate', {
          "condition": {
            "cellphone": _self.cellphone,
            "authCode": _self.authCode
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
  }
};

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#phone_validate{\r\n\twidth: 90%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "phone_validate"
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
  }, [_c('label', [_vm._v("验证码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.authCode),
      expression: "authCode"
    }],
    staticStyle: {
      "width": "45%"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入验证码"
    },
    domProps: {
      "value": (_vm.authCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.authCode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "bluecolor suateam_fl suateam_margin_horizontal_10",
    class: {
      greycolor: _vm.btnIsactive
    },
    staticStyle: {
      "margin": "0"
    },
    on: {
      "click": function($event) {
        _vm.sendauthcode($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.authcodeString))])]), _vm._v(" "), _c('div', {
    staticClass: "suateam_input_frame_btn1"
  }, [_c('button', {
    staticClass: "bluecolor",
    on: {
      "click": function($event) {
        _vm.sendinfo()
      }
    }
  }, [_vm._v("确认修改")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-62bcaf53", module.exports)
  }
}

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(616);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("110e9e9c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-62bcaf53\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./phone_validate.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-62bcaf53\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./phone_validate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});