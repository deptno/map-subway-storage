webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/li/LiHappyBox.tsx":
/*!******************************************!*\
  !*** ./src/components/li/LiHappyBox.tsx ***!
  \******************************************/
/*! exports provided: LiHappyBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiHappyBox", function() { return LiHappyBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/map */ "./src/context/map.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var _jsxFileName = "/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/components/li/LiHappyBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LiHappyBox = function LiHappyBox(props) {
  var data = props.data,
      focus = props.focus,
      onClick = props.onClick;
  var 호선 = data.호선,
      역명 = data.역명,
      위치정보 = data.위치정보,
      계 = data.계,
      열 = data.열,
      제어부 = data.제어부,
      소형 = data.소형,
      중형 = data.중형,
      대형 = data.대형,
      x = data.x,
      y = data.y;
  var map = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_map__WEBPACK_IMPORTED_MODULE_1__["MapContext"]);
  var move = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ramda__WEBPACK_IMPORTED_MODULE_2__["ifElse"](ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"], ramda__WEBPACK_IMPORTED_MODULE_2__["always"](undefined), ramda__WEBPACK_IMPORTED_MODULE_2__["compose"](function () {
      return map.setCenter(new kakao.maps.LatLng(y, x));
    }, ramda__WEBPACK_IMPORTED_MODULE_2__["tap"](ramda__WEBPACK_IMPORTED_MODULE_2__["compose"](onClick, ramda__WEBPACK_IMPORTED_MODULE_2__["always"](역명)))))(map);
  }, [map]);
  var css = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return focus ? 'flex items-center lh-copy h2 bg-blue white' : 'flex items-center lh-copy h2 hover-bg-light-blue hover-white';
  }, [focus]);
  return __jsx("li", {
    className: css,
    onClick: move,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("span", {
    className: "f5-ns f7 tc w3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, 호선), __jsx("span", {
    className: "f5-ns f7 tc bg-black-05 w4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, 역명), __jsx("span", {
    className: "f5-ns f7 tc w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, 위치정보), __jsx("span", {
    className: "f5-ns f7 tc bg-black-05 w3-ns w2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, 계), __jsx("span", {
    className: "f5-ns f7 tc w3-ns w2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, 열), __jsx("span", {
    className: "f5-ns f7 tc bg-black-05 w4-ns w2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, 제어부), __jsx("span", {
    className: "f5-ns f7 tc w3-ns w2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, 소형), __jsx("span", {
    className: "f5-ns f7 tc bg-black-05 w3-ns w2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, 중형), __jsx("span", {
    className: "f5-ns f7 tc w3-ns w2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, 대형));
};

/***/ })

})
//# sourceMappingURL=index.js.36b3a4aa6f10b3270bdf.hot-update.js.map