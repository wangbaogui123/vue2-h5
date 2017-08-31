webpackHotUpdate(0,{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('my-top', {
    attrs: {
      "top-show": _vm.topshow,
      "login-user": _vm.isLogin
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "home"
  }, [_c('swipe', {
    staticClass: "my-swipe"
  }, _vm._l((_vm.banner), function(item) {
    return _c('swipe-item', {
      key: item.$index
    }, [_c('a', {
      attrs: {
        "href": item.href
      }
    }, [_c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload",
        value: (item.imgUrl),
        expression: "item.imgUrl"
      }]
    })])])
  })), _vm._v(" "), _c('div', {
    staticClass: "home-list"
  }, [_c('div', {
    staticClass: "home-list-div"
  }, [_c('ul', {
    staticClass: "list-ul"
  }, _vm._l((_vm.list), function(i) {
    return _c('li', {
      key: i.$index
    }, [_vm._v(_vm._s(i))])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "home-view"
  }, [_c('p', {
    staticClass: "viewtop"
  }, [_vm._v("热门文章222")]), _vm._v(" "), _vm._l((_vm.allData), function(item, index) {
    return _c('div', {
      key: item.$index,
      class: {
        "last": index == _vm.allData.length - 1
      }
    }, [_c('v-link', {
      attrs: {
        "href": /detail/ + item.id
      }
    }, [_c('p', [_c('a', [_c('img', {
      directives: [{
        name: "lazyload",
        rawName: "v-lazyload",
        value: (item.user.avatar),
        expression: "item.user.avatar"
      }]
    })]), _c('span', {
      staticClass: "colorMove"
    }, [_vm._v(_vm._s(item.user.nickname))])]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.public_abbr))]), _vm._v(" "), _c('p', [_c('a', {
      staticClass: "colorMove"
    }, [_c('span', [_vm._v(_vm._s(item.public_comments_count) + "评论")]), _vm._v(" "), (item.likes_count) ? _c('span', [_vm._v("· " + _vm._s(item.likes_count) + "喜欢")]) : _vm._e(), _vm._v(" "), (item.total_rewards_count) ? _c('span', [_vm._v("· " + _vm._s(item.total_rewards_count) + "赞赏")]) : _vm._e()])])])], 1)
  }), _vm._v(" "), _c('p', {
    staticClass: "more",
    on: {
      "click": _vm.moreFun
    }
  }, [_vm._v(_vm._s(_vm.msg))])], 2)], 1)]), _vm._v(" "), _c('my-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(88).rerender("data-v-cce6ccc6", module.exports)
  }
}

/***/ })

})