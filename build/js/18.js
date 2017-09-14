webpackJsonp([18],{

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(802)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(517),
  /* template */
  __webpack_require__(754),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\pages\\aboutus\\aboutus.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] aboutus.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06dbacc0", Component.options)
  } else {
    hotAPI.reload("data-v-06dbacc0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 470:
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
//

var common_tools = __webpack_require__(69);
exports.default = {
  name: 'customeservice',
  mounted: function mounted() {
    var _self = this;
    common_tools.AJAX('POST', common_tools.interfaceurl + 'suateamEbPartner/listSuateamEbPartner', {}, function (data) {
      //success callback
      if (data.rspCode !== '100000') {
        console.log(data);
      } else if (data.rspCode == '100000') {
        _self.datalist = data.data.resultSet;
        console.log(data);
      };
    }, function (data) {
      //error callback
      console.log(data);
    });
  },
  data: function data() {
    return {
      datalist: []
    };
  }
};

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.suateam_customer_service_frame{\n}\ndiv.suateam_customer_service_frame p.title_ch{\n\ttext-align: center;\n\tfont-size: 2.2rem;\n\tmargin: 0;\n\tletter-spacing: 2px;\n}\ndiv.suateam_customer_service_frame p.title_en{\n\ttext-align: center;\n\tfont-size: 1.8rem;\n\tcolor: #999;\n\tmargin: 0;\n}\ndiv.customer_service_list{\n\twidth: 100%;\n}\ndiv.customer_service_list li{\n\tfloat: left;\n\tdisplay: inline-block;\n\twidth: 25%;\n\tbox-sizing: border-box;\n\tmin-height: 100px;\n\tmargin: 8px 0;\n}\ndiv.customer_service_list li>div>span{\n\tdisplay:inline-block;\n\tline-height: 100px;\n}\ndiv.customer_service_list li img{\n\twidth: 100px;\n\theight: 100px;\n\tvertical-align: middle;\n\tmargin-left:14%;\n}\n", ""]);

// exports


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(503)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(470),
  /* template */
  __webpack_require__(498),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\project\\web\\suateamBusiness\\src\\components\\customerService\\customerService.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] customerService.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81a24b1c", Component.options)
  } else {
    hotAPI.reload("data-v-81a24b1c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "suateam_customer_service_frame"
  }, [_c('p', {
    staticClass: "title_ch"
  }, [_vm._v("服务客户")]), _vm._v(" "), _c('p', {
    staticClass: "title_en"
  }, [_vm._v("To serve our customers")]), _vm._v(" "), _c('div', {
    staticClass: "customer_service_list"
  }, [_c('ul', _vm._l((_vm.datalist), function(items) {
    return _c('li', [_c('div', {
      staticStyle: {
        "display": "table",
        "margin": "0 auto",
        "width": "100%"
      }
    }, [_c('img', {
      attrs: {
        "src": items.img
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(items.name))])])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-81a24b1c", module.exports)
  }
}

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(482);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("316d7aa3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81a24b1c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customerService.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81a24b1c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customerService.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _customerService = __webpack_require__(490);

var _customerService2 = _interopRequireDefault(_customerService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: { Customeservice: _customerService2.default },
	name: 'aboutus',
	data: function data() {
		return {
			banner: 'url(' + __webpack_require__(640) + ')'

		};
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "\ndiv.aboutus_content{\n\twidth: 100%;\n\tpadding: 30px;\n\tbox-sizing: border-box;\n}\ndiv.aboutus_content p.paragraph_title{\n\twidth: 100%;\n\ttext-align: left;\n\tfont-size: 1.8rem;\n\tcolor: #818181;\n\tfont-weight: 600;\n}\ndiv.aboutus_content p.paragraph.head{\n\ttext-indent: 0;\n}\ndiv.aboutus_content p.title{\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 2.2rem;\n\tcolor: #818181;\n}\n", ""]);

// exports


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/banner603b479e6002079a430a141ce1ffe3e7.jpg";

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "aboutus"
    }
  }, [_c('section', [_c('div', {
    staticClass: "section suateam_banner",
    class: {
      suateam_banner_hasbanner: _vm.banner != null
    },
    style: ({
      backgroundImage: _vm.banner
    })
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "suateam suateam_container_frame"
  }, [_c('Customeservice')], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "suateam suateam_container_frame"
  }, [_c('div', {
    staticClass: "aboutus_content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("关于我们")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph"
  }, [_vm._v("赛鳌网隶属于天津圣目信息安全技术股份有限公司，总部设于天津。圣目股份自2005年进入网络空间安全管理领域，汇聚了行业领域顶尖安全专家，是中国网络空间安全管理领域领先的技术力量。通过整合的视野和方法为用户打造具有前瞻性的IT安全战略管理体系架构及流程，以前瞻性的眼光，设计和研发了符合市场需求的多项安全服务。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph"
  }, [_vm._v("赛鳌网作为国内首家专业从事网络空间安全管理领域电子商务服务、交易的第三方平台，紧跟国家“互联网+”发展趋势，秉承以用户需求为导向，驱动平台最大价值的理念，整合国际、国内顶尖安全厂商、安全服务商，服务用户面向金融、政府、医疗、教育、公安、广电、铁路、海关、民航、电力、国防科工、能源、交通、农业、水利、央企、商业贸易、经营性互联网等集团企业、大型企业，更为众多中小型企业提供定制化的一站式安全需求满足。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph_title"
  }, [_vm._v("开启网络安全免费时代")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("风险评估自测产品免费获取。旨在为用户能够及时全面了解目前自身信息系统的安全现状，明确安全建设方向与相关方案。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("网站监测预警产品免费获取。针对用户网站实现实时、专业、可视的威胁监测与预警功能，为用户网站安全运行保驾护航。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("远程漏洞扫描服务免费获取。整合专业技术人员，为用户提供远程漏洞扫描，帮助用户及时发现并且在漏洞转变为威胁，威胁转变为损失之前予以发现。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("安全方案免费获取。细分用户属性，根据用户行业、规模、业务类型、互联网应用范围等建立用户模型，提供专家指导性的专属安全方案，涵盖安全部署技术、产品、解决方案、安全标准、政策法规、培训认证全流程内容。解决用户如何建设信息安全的困惑。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph_title"
  }, [_vm._v("网络安全产品畅选无忧")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("集合国内、国际顶尖安全厂商，选取数百款核心安全产品，满足不同属性用户的安全需求。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("提供销售、租赁可选形式，满足用户安全产品快速、灵活部署，减轻用户安全部署成本负担。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("秉承睿智、专注、真实、相伴的经营理念，坚持诚信经营，安全厂商直供产品，从源头确保安全产品质量，同时，始终为用户提供最新技术应用的安全产品。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph_title"
  }, [_vm._v("安全服务一站式保驾护航")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("集中各地优质安全服务商，建立战略合作。全面依托最终用户需求，制定标准化的安全服务要求，从安全产品的服务保障，到网络空间安全全息服务提供，建立国内首支在线式安全服务专家级团队，为用户信息化业务提供保驾护航。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph_title"
  }, [_vm._v("网络安全态势一览无遗")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("来自全球第一手安全资讯，及时了解全球最新信息安全动态。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("及时获知病毒和漏洞信息，让用户做好预防部署、防风险于未然。")]), _vm._v(" "), _c('p', {
    staticClass: "paragraph head"
  }, [_vm._v("细分用户属性的资讯订阅，提升用户对信息安全的认知，降低用户从海量数据中获取有用信息的时间成本，解决用户在信息化安全“痛点”方面的困惑。")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-06dbacc0", module.exports)
  }
}

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(592);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("b730f6d0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-06dbacc0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aboutus.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-06dbacc0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aboutus.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});