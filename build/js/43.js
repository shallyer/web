webpackJsonp([43],{

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(809)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(540),
  /* template */
  __webpack_require__(762),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\marketingpartner\\components\\cooperative_product.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cooperative_product.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23e27928", Component.options)
  } else {
    hotAPI.reload("data-v-23e27928", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 540:
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

var common_tools = __webpack_require__(69);
module.exports = {

    name: 'cooperative_product',
    data: function data() {
        return {};
    },
    methods: {}
};

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#cooperative_product p.title{\n\twidth: 100%;\n\ttext-align: left;\n\tfont-size: 1.8rem;\n\tcolor: #818181;\n\tfont-weight: 600;\n}\ndiv#cooperative_product p.paragraph.head{\n\ttext-indent: 0;\n}\ndiv#cooperative_product{\n\tbox-sizing: border-box;\n\tpadding-left: 35px;\n}\n", ""]);

// exports


/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "cooperative_product"
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("赛鳌供应商合作")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("廉洁公平的合作关系   协作互补、合作共赢的合作模式    立足长期、战略性的合作方向")]), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("供应商洽谈联系方式")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("您可以通过以下制定的邮箱地址提交合作申请，收到邮件后在2个工作日内给予回复。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("邮箱："), _c('span', {
    staticStyle: {
      "font-weight": "600",
      "color": "#1973d0"
    }
  }, [_vm._v("gyshz@secoros.com")])]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("邮件内容如下：")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("邮件标题：供应商：公司名称。例如：供应商：天津圣目信息安全技术股份有限公司")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("发送方式：请以邮件正文形式发送，不以附件形式。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("邮件内容：请在邮件内容中列明以下信息。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("品牌名称；公司名称；品牌简介；品牌官网；明星产品；")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("申请人姓名及职务；申请人联系方式；")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("申请合作区域。")]), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("供应商合作方式")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("赛鳌网立足国内最大的专业网络空间安全管理领域电商平台，将整合利用自身技术资源"), _c('br'), _vm._v("优势，建立高效的全行业用户流量入口，为安全厂商优质产品提供展示、销售平台，进"), _c('br'), _vm._v("而实现平台与厂商深度合作，长期共赢！\n赛鳌网期待您的加入！")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-23e27928", module.exports)
  }
}

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(599);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("50966f80", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-23e27928\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cooperative_product.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-23e27928\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cooperative_product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});