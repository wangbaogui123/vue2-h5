webpackHotUpdate(0,{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "\n<div class=\"top\">\n\n    <div class=\"top-bar\">\n        <router-link to=\"/\">\n            <img src=\"" + __webpack_require__(140) + "\" />\n        </router-link>\n\n        <p>{{page}}</p>\n        <a class=\"right\" v-on:click=\"topFun()\">\n            <img src=\"" + __webpack_require__(141) + "\" />\n        </a>\n    </div>\n    \n    <div class=\"top-cont bg-box\" v-if = \"topShow\">\n\n        <div class=\"login-box\">\n            <p v-if=\"!loginUser\"> \n                <!-- <v-link href=\"/login\" class=\"colorMove\">\n                    Login\n                </v-link> -->\n                <router-link to=\"/login\">Login</router-link>\n\n            </p>\n            <p v-if=\"loginUser\"> \n                <v-link href=\"/personal\" class=\"colorMove\">\n                    个人中心\n                </v-link>\n            </p>\n            <p> \n                <v-link href=\"/game\" class=\"colorMove\">\n                    游戏中心\n                </v-link>\n            </p>\n            <p> \n                <v-link href=\"/messages\" class=\"colorMove\">\n                    消息\n                </v-link>\n            </p>\n            <p> \n                <v-link href=\"/wallet\" class=\"colorMove\">\n                    钱包\n                </v-link>\n            </p>\n\n\n            \n            <p v-if=\"loginUser\"> \n                <a v-on:click=\"loginOut\" class=\"colorMove\">\n                    登出\n                </a> \n            </p>        \n        </div>      \n    </div>\n</div>\n\n";

/***/ })

})