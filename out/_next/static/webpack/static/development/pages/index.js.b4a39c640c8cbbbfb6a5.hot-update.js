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
    className: "jsx-1568529602" + " " + "ph4-ns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1568529602",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZ2xlZS93b3Jrc3BhY2Uvc3JjL2dpdGh1Yi5jb20vZGVwdG5vL21hcC1zdWJ3YXktc3RvcmFnZS9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCNEIiLCJmaWxlIjoiL1VzZXJzL2JnbGVlL3dvcmtzcGFjZS9zcmMvZ2l0aHViLmNvbS9kZXB0bm8vbWFwLXN1YndheS1zdG9yYWdlL3NyYy9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7VWxIYXBweUJveGVzfSBmcm9tICcuLi9jb21wb25lbnRzL3VsL1VsSGFwcHlCb3hlcydcbmltcG9ydCB7TWFwQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9tYXAnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW2JveGVzLCBzZXRCb3hlc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW21vdW50LCBzZXRNb3VudF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgbWFwID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKG1vdW50KSB7XG4gICAgICByZXR1cm4gbmV3IGtha2FvLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICBjZW50ZXI6IG5ldyBrYWthby5tYXBzLkxhdExuZygzMy40NTA3MDEsIDEyNi41NzA2NjcpLFxuICAgICAgICBsZXZlbDogMyxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbbW91bnRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2gobG9jYXRpb24ucGF0aG5hbWUgKyAnc3RhdGljL2pzb24vc3RvcmFnZS5qc29uJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHNldEJveGVzKVxuICAgIHNldE1vdW50KHRydWUpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPE1hcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21hcH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBoNC1uc1wiPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHsvKmxhbmd1YWdlPWNzcyovIGBcblxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBoMiBwaDAtbnMgZjVcIj7sp4DtlZjssqAg66y87ZKI67O06rSA7ZWoKO2VtO2UvOuwleyKpCkg7JyE7LmYPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgZmxleCBcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICczMDBweCd9fSBjbGFzc05hbWU9XCJmaXhlZFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxVbEhhcHB5Qm94ZXMgZGF0YT17Ym94ZXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTWFwQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/bglee/workspace/src/github.com/deptno/map-subway-storage/src/pages/index.tsx */"), __jsx("h1", {
    className: "jsx-1568529602" + " " + "ph2 ph0-ns f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\uC9C0\uD558\uCCA0 \uBB3C\uD488\uBCF4\uAD00\uD568(\uD574\uD53C\uBC15\uC2A4) \uC704\uCE58"), __jsx("div", {
    className: "jsx-1568529602" + " " + "container relative flex ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    id: "map",
    style: {
      width: '100%',
      height: '300px'
    },
    className: "jsx-1568529602" + " " + "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(_components_ul_UlHappyBoxes__WEBPACK_IMPORTED_MODULE_2__["UlHappyBoxes"], {
    data: boxes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.b4a39c640c8cbbbfb6a5.hot-update.js.map