webpackJsonp([41],{

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(843)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(557),
  /* template */
  __webpack_require__(796),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\user\\components\\agent_message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] agent_message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aed52a1e", Component.options)
  } else {
    hotAPI.reload("data-v-aed52a1e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 557:
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

__webpack_require__.e/* require.ensure */(45).then((function () {}).bind(null, __webpack_require__)).catch(__webpack_require__.oe); // 第三个参数设置打包名称
var common_tools = __webpack_require__(69);
module.exports = {
    //components configs
    name: 'agent_message',
    data: function data() {
        return {
            agent_messageArray: [],
            pages: {}
        };
    },
    mounted: function mounted() {
        var _self = this;
        common_tools.AJAX('POST', common_tools.interfaceurl + 'ebSolutionInfo/queryRecommended', {
            "condition": {}
        }, function (data) {
            //success callback
            if (data.rspCode !== '100000') {} else if (data.rspCode == '100000') {
                _self.agent_messageArray = data.data.resultSet;
            };
        }, function (data) {
            //error callback
            console.log(data);
        });
    },
    methods: {
        //			pagination:function(_current){
        //      		var _self = this;
        //    			$('.pagination').pagination({
        //    				totalData:_self.pages.totalRecord,
        //     				showData:_self.pages.pageSize,
        //     				callback:function(e){
        //     					_self.orderArray=[];
        //     					var currentpages=e.getCurrent();
        //     					common_tools.AJAX('POST',common_tools.interfaceurl+'orderInfo/queryOrderByMemberId',{
        //						    "page": {
        //						        "currentPage": currentpages,	//当前页数
        //						        "pageSize": 5	//页面内容个数
        //						    }
        //				       		},function(data){
    }

};

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv#agent_message_frame{\n\t\twidth: 90%;\n}\nli.agent_message_li{\n\t\tborder:1px #ededed solid;\n\t\tpadding: 0 10px;\n\t\tmargin: 10px 0;\n\t\tfont-size: 1.4rem;\n\t\theight: 45px;\n\t\tline-height: 45px;\n}\nli.agent_message_li span{\n\t\tfloat: left;\n\t\twidth: 60%;\n\t\toverflow: hidden;\n    \ttext-overflow: ellipsis;\n    \twhite-space: nowrap;\n}\nli.agent_message_li a{\n\t\tfloat: right;\n}\ndiv#agent_message{\n\t\twidth: 90%;\n\t\tmargin: 0 5%;\n}\n", ""]);

// exports


/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "agent_message"
    }
  }, [_c('div', {
    staticClass: "agent_message_frame"
  }, [_c('ul', [_vm._l((_vm.agent_messageArray), function(items) {
    return _c('li', {
      staticClass: "agent_message_li"
    }, [_c('span', [_vm._v(_vm._s(items.description))]), _vm._v(" "), _c('a', {
      attrs: {
        "href": items.wordDocument
      }
    }, [_vm._v("文件下载")])])
  }), _vm._v(" "), (_vm.agent_messageArray.length == 0) ? _c('p', {
    staticStyle: {
      "text-align": "center",
      "font-size": "1.4rem"
    }
  }, [_vm._v("暂无专属方案")]) : _vm._e()], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-aed52a1e", module.exports)
  }
}

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(633);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("5ce2f768", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-aed52a1e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./agent_message.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-aed52a1e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./agent_message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});