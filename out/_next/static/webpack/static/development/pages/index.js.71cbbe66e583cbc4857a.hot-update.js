webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ul/UlHappyBoxes.tsx":
/*!********************************************!*\
  !*** ./src/components/ul/UlHappyBoxes.tsx ***!
  \********************************************/
/*! exports provided: UlHappyBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlHappyBoxes", function() { return UlHappyBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _li_LiHappyBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../li/LiHappyBox */ "./src/components/li/LiHappyBox.tsx");
/* harmony import */ var _li_LiHappyBoxHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../li/LiHappyBoxHeader */ "./src/components/li/LiHappyBoxHeader.tsx");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var _jsxFileName = "/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/components/ul/UlHappyBoxes.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UlHappyBoxes = function UlHappyBoxes(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      station = _useState[0],
      select = _useState[1];

  return __jsx("ul", {
    className: "list ph2 f6 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("span", {
    className: "ph2 pv1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, station), __jsx(_li_LiHappyBoxHeader__WEBPACK_IMPORTED_MODULE_2__["LiHappyBoxHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), props.data.map(function (box) {
    return __jsx(_li_LiHappyBox__WEBPACK_IMPORTED_MODULE_1__["LiHappyBox"], {
      key: box.역명,
      data: box,
      onClick: select,
      focus: ramda__WEBPACK_IMPORTED_MODULE_3__["equals"](station, box.역명),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.71cbbe66e583cbc4857a.hot-update.js.map