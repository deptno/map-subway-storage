webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ul/UlHappyBoxes */ "./src/components/ul/UlHappyBoxes.tsx");
/* harmony import */ var _context_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/map */ "./src/context/map.ts");
var _jsxFileName = "/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      boxes = _useState[0],
      setBoxes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      mount = _useState2[0],
      setMount = _useState2[1];

  var map = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (mount) {
      return new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      });
    }
  }, [mount]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch('/static/json/storage.json').then(ramda__WEBPACK_IMPORTED_MODULE_1__["invoker"](0, 'json')).then(setBoxes);
    setMount(true);
  }, []);
  return __jsx(_context_map__WEBPACK_IMPORTED_MODULE_3__["MapContext"].Provider, {
    value: map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "ph4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, " \uC9C0\uD558\uCCA0 \uBB3C\uD488\uBCF4\uAD00\uD568 \uC704\uCE58 "), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, " \uC9C0\uD558\uCCA0 \uD574\uD53C\uBC15\uC2A4 \uC704\uCE58 "), __jsx("div", {
    id: "map",
    style: {
      width: '500px',
      height: '400px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__["UlHappyBoxes"], {
    data: boxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.bb4c6993248996831cf3.hot-update.js.map