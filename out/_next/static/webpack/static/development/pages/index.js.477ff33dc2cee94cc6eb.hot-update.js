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
  return __jsx("ul", {
    className: "list ph2 f6 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("span", {
    className: "ph2 pv1 br2 bg-black white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, station), __jsx(_li_LiHappyBoxHeader__WEBPACK_IMPORTED_MODULE_2__["LiHappyBoxHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
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
        lineNumber: 12
      },
      __self: this
    });
  }));
};

/***/ }),

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
/* harmony import */ var _components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ul/UlHappyBoxes */ "./src/components/ul/UlHappyBoxes.tsx");
/* harmony import */ var _context_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/map */ "./src/context/map.ts");
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
    fetch(location.pathname + 'static/json/storage.json').then(function (response) {
      return response.json();
    }).then(setBoxes);
    setMount(true);
  }, []);
  return __jsx(_context_map__WEBPACK_IMPORTED_MODULE_2__["MapContext"].Provider, {
    value: map,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "relative w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "fixed w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h1", {
    className: "ph2 ph0-ns f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\uC9C0\uD558\uCCA0 \uBB3C\uD488\uBCF4\uAD00\uD568(\uD574\uD53C\uBC15\uC2A4) \uC704\uCE58"), __jsx("div", {
    className: "flex",
    style: {
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    id: "map",
    style: {
      width: '100%',
      height: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), __jsx("div", {
    className: "relative",
    style: {
      height: '350px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("span", {
    className: "ph2 pv1 br2 bg-black white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, station), __jsx("div", {
    className: "absolute overflow-scroll w-100",
    style: {
      height: 'calc(100vh - 350px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_1__["UlHappyBoxes"], {
    data: boxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.477ff33dc2cee94cc6eb.hot-update.js.map