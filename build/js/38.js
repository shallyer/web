webpackJsonp([38],{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(816)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(520),
  /* template */
  __webpack_require__(769),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\help\\components\\advice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] advice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34085dfa", Component.options)
  } else {
    hotAPI.reload("data-v-34085dfa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 520:
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

module.exports = {
    //components configs

    name: 'advice',
    data: function data() {
        return {
            adviceImg: __webpack_require__(643)
        };
    },
    methods: {}
};

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#advice p.title{\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 1.8rem;\n\tcolor: #818181;\n\tfont-weight: 600;\n}\ndiv#advice p.paragraph.head{\n\ttext-indent: 0;\n}\ndiv#advice{\n\tbox-sizing: border-box;\n}\n", ""]);

// exports


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/advicef3ca0d6e79c99af1d952046ef54f6748.jpg";

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "advice"
    }
  }, [_c('div', {}, [_c('img', {
    staticStyle: {
      "width": "100%",
      "float": "left",
      "display": "block"
    },
    attrs: {
      "src": _vm.adviceImg
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-34085dfa", module.exports)
  }
}

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("3107f4fe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-34085dfa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./advice.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-34085dfa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./advice.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});