webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ul/UlHappyBoxes */ "./src/components/ul/UlHappyBoxes.tsx");
/* harmony import */ var _context_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/map */ "./src/context/map.ts");
var _jsxFileName = "/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      boxes = _useState[0],
      setBoxes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mount = _useState2[0],
      setMount = _useState2[1];

  var map = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (mount) {
      return new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      });
    }
  }, [mount]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch(location.pathname + 'static/json/storage.json').then(function (response) {
      return response.json();
    }).then(setBoxes);
    setMount(true);
  }, []);
  return __jsx(_context_map__WEBPACK_IMPORTED_MODULE_3__["MapContext"].Provider, {
    value: map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "748784225",
    __self: this
  }, ".container.jsx-748784225{height:300px;content:' ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZ2xlZS93b3Jrc3BhY2Uvc3JjL2dpdGh1Yi5jb20vZGVwdG5vL21hcC1zdWJ3YXktc3RvcmFnZS9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCNEIsQUFHMEIsYUFDRCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9iZ2xlZS93b3Jrc3BhY2Uvc3JjL2dpdGh1Yi5jb20vZGVwdG5vL21hcC1zdWJ3YXktc3RvcmFnZS9zcmMvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1VsSGFwcHlCb3hlc30gZnJvbSAnLi4vY29tcG9uZW50cy91bC9VbEhhcHB5Qm94ZXMnXG5pbXBvcnQge01hcENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvbWFwJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtib3hlcywgc2V0Qm94ZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFttb3VudCwgc2V0TW91bnRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IG1hcCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChtb3VudCkge1xuICAgICAgcmV0dXJuIG5ldyBrYWthby5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzMuNDUwNzAxLCAxMjYuNTcwNjY3KSxcbiAgICAgICAgbGV2ZWw6IDMsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW21vdW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGxvY2F0aW9uLnBhdGhuYW1lICsgJ3N0YXRpYy9qc29uL3N0b3JhZ2UuanNvbicpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihzZXRCb3hlcylcbiAgICBzZXRNb3VudCh0cnVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxNYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttYXB9PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgey8qIGxhbmd1YWdlPWNzcyAqLyBgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHBoNC1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHctMTAwIGg1IGNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwaDIgcGgwLW5zIGY1XCI+7KeA7ZWY7LKgIOusvO2SiOuztOq0gO2VqCjtlbTtlLzrsJXsiqQpIOychOy5mDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3toZWlnaHQ6ICczMDBweCd9fT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzMwMHB4J319Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBzdHlsZT17e2hlaWdodDogJzMwMHB4J319Lz5cbiAgICAgICAgPFVsSGFwcHlCb3hlcyBkYXRhPXtib3hlc30vPlxuICAgICAgPC9kaXY+XG4gICAgPC9NYXBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/pages/index.tsx */"), __jsx("div", {
    className: "jsx-748784225" + " " + "relative ph4-ns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-748784225" + " " + "fixed w-100 h5 container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-748784225" + " " + "ph2 ph0-ns f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\uC9C0\uD558\uCCA0 \uBB3C\uD488\uBCF4\uAD00\uD568(\uD574\uD53C\uBC15\uC2A4) \uC704\uCE58"), __jsx("div", {
    style: {
      height: '300px'
    },
    className: "jsx-748784225" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    id: "map",
    style: {
      width: '100%',
      height: '300px'
    },
    className: "jsx-748784225",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("div", {
    style: {
      height: '300px'
    },
    className: "jsx-748784225" + " " + "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__["UlHappyBoxes"], {
    data: boxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.02f0e2240e01bb09c5d0.hot-update.js.map