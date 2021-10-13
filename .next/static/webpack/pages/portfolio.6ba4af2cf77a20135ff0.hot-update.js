"use strict";
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/portfolio/index.js":
/*!**********************************!*\
  !*** ./pages/portfolio/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_low_profile_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_portfolios_PortfolioCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/portfolios/PortfolioCard */ "./components/portfolios/PortfolioCard.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/apollo/actions */ "./apollo/actions.js");
/* harmony import */ var _hoc_withApollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hoc/withApollo */ "./hoc/withApollo.js");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/index.js");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Projects\\low_profile\\pages\\portfolio\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Portfolios = function Portfolios() {
  _s();

  var _useGetPortfolios = (0,_apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useGetPortfolios)(),
      data = _useGetPortfolios.data;

  var _useUpdatePortfolio = (0,_apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useUpdatePortfolio)(),
      _useUpdatePortfolio2 = (0,D_Projects_low_profile_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useUpdatePortfolio, 1),
      updatePortfolio = _useUpdatePortfolio2[0];

  var _useDeletePortfolio = (0,_apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useDeletePortfolio)(),
      _useDeletePortfolio2 = (0,D_Projects_low_profile_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useDeletePortfolio, 1),
      deletePortfolio = _useDeletePortfolio2[0];

  var _useCreatePortfolio = (0,_apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useCreatePortfolio)(),
      _useCreatePortfolio2 = (0,D_Projects_low_profile_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useCreatePortfolio, 1),
      createPortfolio = _useCreatePortfolio2[0];

  var portfolios = data && data.portfolios || [];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "section-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "px-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pt-5 pb-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Portfolios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: createPortfolio,
        className: "btn btn-primary",
        children: "Create Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "pb-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: portfolios.map(function (portfolio) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/portfolios/[id]",
              as: "/portfolios/".concat(portfolio._id),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "card-link",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_portfolios_PortfolioCard__WEBPACK_IMPORTED_MODULE_2__.default, {
                  portfolio: portfolio
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "btn btn-warning",
              onClick: function onClick() {
                return updatePortfolio({
                  variables: {
                    id: portfolio._id
                  }
                });
              },
              children: "Update Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: function onClick() {
                return deletePortfolio({
                  variables: {
                    id: portfolio._id
                  }
                });
              },
              className: "btn btn-danger",
              children: "Delete Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)]
          }, portfolio._id, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Portfolios, "8uciL4KYwehOmq3S7tf2bEYRZjo=", false, function () {
  return [_apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useGetPortfolios, _apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useUpdatePortfolio, _apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useDeletePortfolio, _apollo_actions__WEBPACK_IMPORTED_MODULE_4__.useCreatePortfolio];
});

_c = Portfolios;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_hoc_withApollo__WEBPACK_IMPORTED_MODULE_5__.default)(Portfolios, {
  getDataFromTree: _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_6__.getDataFromTree
}));

var _c, _c2;

$RefreshReg$(_c, "Portfolios");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjZiYTRhZjJjZjc3YTIwMTM1ZmYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLElBQU1RLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSwwQkFDTk4saUVBQWdCLEVBRFY7QUFBQSxNQUNmTyxJQURlLHFCQUNmQSxJQURlOztBQUFBLDRCQUVLTixtRUFBa0IsRUFGdkI7QUFBQTtBQUFBLE1BRWZPLGVBRmU7O0FBQUEsNEJBR0tOLG1FQUFrQixFQUh2QjtBQUFBO0FBQUEsTUFHZk8sZUFIZTs7QUFBQSw0QkFJS04sbUVBQWtCLEVBSnZCO0FBQUE7QUFBQSxNQUlmTyxlQUplOztBQU12QixNQUFNQyxVQUFVLEdBQUdKLElBQUksSUFBSUEsSUFBSSxDQUFDSSxVQUFiLElBQTJCLEVBQTlDO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBQyxlQUFuQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUNFLGVBQU8sRUFBRUQsZUFEWDtBQUVFLGlCQUFTLEVBQUMsaUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVdFO0FBQVMsZUFBUyxFQUFDLE1BQW5CO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDSUMsVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQUMsU0FBUztBQUFBLDhCQUN4QjtBQUF5QixxQkFBUyxFQUFDLFVBQW5DO0FBQUEsb0NBQ0UsOERBQUMsa0RBQUQ7QUFDRSxrQkFBSSxFQUFDLGtCQURQO0FBRUUsZ0JBQUUsd0JBQWlCQSxTQUFTLENBQUNDLEdBQTNCLENBRko7QUFBQSxxQ0FHRTtBQUFHLHlCQUFTLEVBQUMsV0FBYjtBQUFBLHVDQUNFLDhEQUFDLHlFQUFEO0FBQWUsMkJBQVMsRUFBRUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUU7QUFDRSx1QkFBUyxFQUFDLGlCQURaO0FBRUUscUJBQU8sRUFBRTtBQUFBLHVCQUFNTCxlQUFlLENBQUM7QUFBQ08sa0JBQUFBLFNBQVMsRUFBRTtBQUFDQyxvQkFBQUEsRUFBRSxFQUFFSCxTQUFTLENBQUNDO0FBQWY7QUFBWixpQkFBRCxDQUFyQjtBQUFBLGVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFXRTtBQUNFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUwsZUFBZSxDQUFDO0FBQUNNLGtCQUFBQSxTQUFTLEVBQUU7QUFBQ0Msb0JBQUFBLEVBQUUsRUFBRUgsU0FBUyxDQUFDQztBQUFmO0FBQVosaUJBQUQsQ0FBckI7QUFBQSxlQURYO0FBRUUsdUJBQVMsRUFBQyxnQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRjtBQUFBLGFBQVVELFNBQVMsQ0FBQ0MsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEd0I7QUFBQSxTQUF4QjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQSxrQkFERjtBQXNDRCxDQTdDRDs7R0FBTVI7VUFDYU4sK0RBQ1dDLGlFQUNBQyxpRUFDQUM7OztLQUp4Qkc7QUErQ04sK0RBQWUsTUFBQUYsd0RBQVUsQ0FBQ0UsVUFBRCxFQUFhO0FBQUNELEVBQUFBLGVBQWUsRUFBZkEsOERBQWVBO0FBQWhCLENBQWIsQ0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUG9ydGZvbGlvQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcG9ydGZvbGlvcy9Qb3J0Zm9saW9DYXJkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtcclxuICB1c2VHZXRQb3J0Zm9saW9zLFxyXG4gIHVzZVVwZGF0ZVBvcnRmb2xpbyxcclxuICB1c2VEZWxldGVQb3J0Zm9saW8sXHJcbiAgdXNlQ3JlYXRlUG9ydGZvbGlvIH0gZnJvbSAnQC9hcG9sbG8vYWN0aW9ucyc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ0AvaG9jL3dpdGhBcG9sbG8nO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdAYXBvbGxvL3JlYWN0LXNzcic7XHJcblxyXG5jb25zdCBQb3J0Zm9saW9zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlR2V0UG9ydGZvbGlvcygpO1xyXG4gIGNvbnN0IFsgdXBkYXRlUG9ydGZvbGlvIF0gPSB1c2VVcGRhdGVQb3J0Zm9saW8oKTtcclxuICBjb25zdCBbIGRlbGV0ZVBvcnRmb2xpbyBdID0gdXNlRGVsZXRlUG9ydGZvbGlvKCk7XHJcbiAgY29uc3QgWyBjcmVhdGVQb3J0Zm9saW8gXSA9IHVzZUNyZWF0ZVBvcnRmb2xpbygpO1xyXG5cclxuICBjb25zdCBwb3J0Zm9saW9zID0gZGF0YSAmJiBkYXRhLnBvcnRmb2xpb3MgfHwgW107XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi00XCI+XHJcbiAgICAgICAgICAgIDxoMT5Qb3J0Zm9saW9zPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZVBvcnRmb2xpb31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkNyZWF0ZSBQb3J0Zm9saW88L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHsgcG9ydGZvbGlvcy5tYXAocG9ydGZvbGlvID0+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtwb3J0Zm9saW8uX2lkfSBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPScvcG9ydGZvbGlvcy9baWRdJ1xyXG4gICAgICAgICAgICAgICAgYXM9e2AvcG9ydGZvbGlvcy8ke3BvcnRmb2xpby5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPFBvcnRmb2xpb0NhcmQgcG9ydGZvbGlvPXtwb3J0Zm9saW99IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVQb3J0Zm9saW8oe3ZhcmlhYmxlczoge2lkOiBwb3J0Zm9saW8uX2lkfX0pfT5VcGRhdGUgUG9ydGZvbGlvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9ydGZvbGlvKHt2YXJpYWJsZXM6IHtpZDogcG9ydGZvbGlvLl9pZH19KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICBEZWxldGUgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oUG9ydGZvbGlvcywge2dldERhdGFGcm9tVHJlZX0pOyJdLCJuYW1lcyI6WyJQb3J0Zm9saW9DYXJkIiwiTGluayIsInVzZUdldFBvcnRmb2xpb3MiLCJ1c2VVcGRhdGVQb3J0Zm9saW8iLCJ1c2VEZWxldGVQb3J0Zm9saW8iLCJ1c2VDcmVhdGVQb3J0Zm9saW8iLCJ3aXRoQXBvbGxvIiwiZ2V0RGF0YUZyb21UcmVlIiwiUG9ydGZvbGlvcyIsImRhdGEiLCJ1cGRhdGVQb3J0Zm9saW8iLCJkZWxldGVQb3J0Zm9saW8iLCJjcmVhdGVQb3J0Zm9saW8iLCJwb3J0Zm9saW9zIiwibWFwIiwicG9ydGZvbGlvIiwiX2lkIiwidmFyaWFibGVzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9