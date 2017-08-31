webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('my-top', {
    attrs: {
      "id": "top"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box loginbox"
  }, [_c('p', {
    staticClass: "colorMove toptit"
  }, [_vm._v("\n            Login In\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "msg"
  }, [_c('p', [_c('span', [_vm._v("User Name2222：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user),
      expression: "user"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.user)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', [_c('span', [_vm._v("Password：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.loginFun
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "red",
      "font-size": ".8rem",
      "border": "none"
    }
  }, [_vm._v(_vm._s(_vm.errorMsg))])])]), _vm._v(" "), _c('my-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(88).rerender("data-v-9428feca", module.exports)
  }
}

/***/ })

})