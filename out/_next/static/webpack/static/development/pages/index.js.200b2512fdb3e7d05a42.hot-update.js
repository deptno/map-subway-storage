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
  }, __jsx("div", {
    className: "jsx-3102972638" + " " + "ph4-ns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3102972638",
    __self: this
  }, ".container.jsx-3102972638{height:300%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZ2xlZS93b3Jrc3BhY2Uvc3JjL2dpdGh1Yi5jb20vZGVwdG5vL21hcC1zdWJ3YXktc3RvcmFnZS9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCNEIsQUFHMkIsWUFDZCIsImZpbGUiOiIvVXNlcnMvYmdsZWUvd29ya3NwYWNlL3NyYy9naXRodWIuY29tL2RlcHRuby9tYXAtc3Vid2F5LXN0b3JhZ2Uvc3JjL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtVbEhhcHB5Qm94ZXN9IGZyb20gJy4uL2NvbXBvbmVudHMvdWwvVWxIYXBweUJveGVzJ1xuaW1wb3J0IHtNYXBDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L21hcCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbYm94ZXMsIHNldEJveGVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBtYXAgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAobW91bnQpIHtcbiAgICAgIHJldHVybiBuZXcga2FrYW8ubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgIGNlbnRlcjogbmV3IGtha2FvLm1hcHMuTGF0TG5nKDMzLjQ1MDcwMSwgMTI2LjU3MDY2NyksXG4gICAgICAgIGxldmVsOiAzLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFttb3VudF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChsb2NhdGlvbi5wYXRobmFtZSArICdzdGF0aWMvanNvbi9zdG9yYWdlLmpzb24nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oc2V0Qm94ZXMpXG4gICAgc2V0TW91bnQodHJ1ZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TWFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWFwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGg0LW5zXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgey8qbGFuZ3VhZ2U9Y3NzKi8gYFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGgyIHBoMC1ucyBmNVwiPuyngO2VmOyyoCDrrLztkojrs7TqtIDtlago7ZW07ZS867CV7IqkKSDsnITsuZg8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBmbGV4IFwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzMwMHB4J319IGNsYXNzTmFtZT1cImZpeGVkXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFVsSGFwcHlCb3hlcyBkYXRhPXtib3hlc30vPlxuICAgICAgPC9kaXY+XG4gICAgPC9NYXBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/pages/index.tsx */"), __jsx("h1", {
    className: "jsx-3102972638" + " " + "ph2 ph0-ns f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\uC9C0\uD558\uCCA0 \uBB3C\uD488\uBCF4\uAD00\uD568(\uD574\uD53C\uBC15\uC2A4) \uC704\uCE58"), __jsx("div", {
    className: "jsx-3102972638" + " " + "container relative flex ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    id: "map",
    style: {
      width: '100%',
      height: '300px'
    },
    className: "jsx-3102972638" + " " + "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__["UlHappyBoxes"], {
    data: boxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.200b2512fdb3e7d05a42.hot-update.js.map