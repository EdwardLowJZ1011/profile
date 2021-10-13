"use strict";
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./apollo/actions.js":
/*!***************************!*\
  !*** ./apollo/actions.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGetPortfolios": function() { return /* binding */ useGetPortfolios; },
/* harmony export */   "useUpdatePortfolio": function() { return /* binding */ useUpdatePortfolio; },
/* harmony export */   "useDeletePortfolio": function() { return /* binding */ useDeletePortfolio; },
/* harmony export */   "useCreatePortfolio": function() { return /* binding */ useCreatePortfolio; }
/* harmony export */ });
/* harmony import */ var D_Projects_low_profile_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var _apollo_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apollo/queries */ "./apollo/queries/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();



var useGetPortfolios = function useGetPortfolios() {
  _s();

  return (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_apollo_queries__WEBPACK_IMPORTED_MODULE_1__.GET_PORTFOLIOS);
};

_s(useGetPortfolios, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery];
});

var useUpdatePortfolio = function useUpdatePortfolio() {
  _s2();

  return (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_apollo_queries__WEBPACK_IMPORTED_MODULE_1__.UPDATE_PORTFOLIO);
};

_s2(useUpdatePortfolio, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutation];
});

var useDeletePortfolio = function useDeletePortfolio() {
  _s3();

  return (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_apollo_queries__WEBPACK_IMPORTED_MODULE_1__.DELETE_PORTFOLIO, {
    update: function update(cache, _ref) {
      var deletePortfolio = _ref.data.deletePortfolio;

      var _cache$readQuery = cache.readQuery({
        query: _apollo_queries__WEBPACK_IMPORTED_MODULE_1__.GET_PORTFOLIOS
      }),
          portfolios = _cache$readQuery.portfolios;

      var newPortfolios = portfolios.filter(function (p) {
        return p._id !== deletePortfolio;
      });
      cache.writeQuery({
        query: _apollo_queries__WEBPACK_IMPORTED_MODULE_1__.GET_PORTFOLIOS,
        data: {
          portfolios: newPortfolios
        }
      });
    }
  });
};

_s3(useDeletePortfolio, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutation];
});

var useCreatePortfolio = function useCreatePortfolio() {
  _s4();

  return (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_apollo_queries__WEBPACK_IMPORTED_MODULE_1__.CREATE_PORTFOLIO, {
    update: function update(cache, _ref2) {
      var createPortfolio = _ref2.data.createPortfolio;

      var _cache$readQuery2 = cache.readQuery({
        query: _apollo_queries__WEBPACK_IMPORTED_MODULE_1__.GET_PORTFOLIOS
      }),
          portfolios = _cache$readQuery2.portfolios;

      cache.writeQuery({
        query: _apollo_queries__WEBPACK_IMPORTED_MODULE_1__.GET_PORTFOLIOS,
        data: {
          portfolios: [].concat((0,D_Projects_low_profile_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(portfolios), [createPortfolio])
        }
      });
    }
  });
};

_s4(useCreatePortfolio, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutation];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLjA4NmRlYzhhNDc0ODZkMTk1N2Y5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVFPLElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQTs7QUFBQSxTQUFNTiw2REFBUSxDQUFDRSwyREFBRCxDQUFkO0FBQUEsQ0FBekI7O0dBQU1JO1VBQXlCTjs7O0FBQy9CLElBQU1PLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQTs7QUFBQSxTQUFNTixnRUFBVyxDQUFDRyw2REFBRCxDQUFqQjtBQUFBLENBQTNCOztJQUFNRztVQUEyQk47OztBQUNqQyxJQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUE7O0FBQUEsU0FBTVAsZ0VBQVcsQ0FBQ0ksNkRBQUQsRUFBbUI7QUFDcEVJLElBQUFBLE1BRG9FLGtCQUM3REMsS0FENkQsUUFDM0I7QUFBQSxVQUFuQkMsZUFBbUIsUUFBMUJDLElBQTBCLENBQW5CRCxlQUFtQjs7QUFBQSw2QkFDbEJELEtBQUssQ0FBQ0csU0FBTixDQUFnQjtBQUFDQyxRQUFBQSxLQUFLLEVBQUVaLDJEQUFjQTtBQUF0QixPQUFoQixDQURrQjtBQUFBLFVBQ2hDYSxVQURnQyxvQkFDaENBLFVBRGdDOztBQUV2QyxVQUFNQyxhQUFhLEdBQUdELFVBQVUsQ0FBQ0UsTUFBWCxDQUFrQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVVSLGVBQWQ7QUFBQSxPQUFuQixDQUF0QjtBQUNBRCxNQUFBQSxLQUFLLENBQUNVLFVBQU4sQ0FBaUI7QUFDZk4sUUFBQUEsS0FBSyxFQUFFWiwyREFEUTtBQUVmVSxRQUFBQSxJQUFJLEVBQUU7QUFBRUcsVUFBQUEsVUFBVSxFQUFFQztBQUFkO0FBRlMsT0FBakI7QUFJRDtBQVJtRSxHQUFuQixDQUFqQjtBQUFBLENBQTNCOztJQUFNUjtVQUEyQlA7OztBQVVqQyxJQUFNb0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBOztBQUFBLFNBQU1wQixnRUFBVyxDQUFDRSw2REFBRCxFQUFtQjtBQUNwRU0sSUFBQUEsTUFEb0Usa0JBQzdEQyxLQUQ2RCxTQUMzQjtBQUFBLFVBQW5CWSxlQUFtQixTQUExQlYsSUFBMEIsQ0FBbkJVLGVBQW1COztBQUFBLDhCQUNsQlosS0FBSyxDQUFDRyxTQUFOLENBQWdCO0FBQUNDLFFBQUFBLEtBQUssRUFBRVosMkRBQWNBO0FBQXRCLE9BQWhCLENBRGtCO0FBQUEsVUFDaENhLFVBRGdDLHFCQUNoQ0EsVUFEZ0M7O0FBRXZDTCxNQUFBQSxLQUFLLENBQUNVLFVBQU4sQ0FBaUI7QUFDZk4sUUFBQUEsS0FBSyxFQUFFWiwyREFEUTtBQUVmVSxRQUFBQSxJQUFJLEVBQUU7QUFBRUcsVUFBQUEsVUFBVSxxSUFBTUEsVUFBTixJQUFrQk8sZUFBbEI7QUFBWjtBQUZTLE9BQWpCO0FBSUQ7QUFQbUUsR0FBbkIsQ0FBakI7QUFBQSxDQUEzQjs7SUFBTUQ7VUFBMkJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcG9sbG8vYWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7XHJcbiAgR0VUX1BPUlRGT0xJT1MsXHJcbiAgQ1JFQVRFX1BPUlRGT0xJTyxcclxuICBVUERBVEVfUE9SVEZPTElPLFxyXG4gIERFTEVURV9QT1JURk9MSU9cclxufSBmcm9tICdAL2Fwb2xsby9xdWVyaWVzJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHZXRQb3J0Zm9saW9zID0gKCkgPT4gdXNlUXVlcnkoR0VUX1BPUlRGT0xJT1MpO1xyXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlUG9ydGZvbGlvID0gKCkgPT4gdXNlTXV0YXRpb24oVVBEQVRFX1BPUlRGT0xJTyk7XHJcbmV4cG9ydCBjb25zdCB1c2VEZWxldGVQb3J0Zm9saW8gPSAoKSA9PiB1c2VNdXRhdGlvbihERUxFVEVfUE9SVEZPTElPLCB7XHJcbiAgdXBkYXRlKGNhY2hlLCB7ZGF0YToge2RlbGV0ZVBvcnRmb2xpb319KSB7XHJcbiAgICBjb25zdCB7cG9ydGZvbGlvc30gPSBjYWNoZS5yZWFkUXVlcnkoe3F1ZXJ5OiBHRVRfUE9SVEZPTElPU30pXHJcbiAgICBjb25zdCBuZXdQb3J0Zm9saW9zID0gcG9ydGZvbGlvcy5maWx0ZXIocCA9PiBwLl9pZCAhPT0gZGVsZXRlUG9ydGZvbGlvKTtcclxuICAgIGNhY2hlLndyaXRlUXVlcnkoe1xyXG4gICAgICBxdWVyeTogR0VUX1BPUlRGT0xJT1MsXHJcbiAgICAgIGRhdGE6IHsgcG9ydGZvbGlvczogbmV3UG9ydGZvbGlvcyB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5leHBvcnQgY29uc3QgdXNlQ3JlYXRlUG9ydGZvbGlvID0gKCkgPT4gdXNlTXV0YXRpb24oQ1JFQVRFX1BPUlRGT0xJTywge1xyXG4gIHVwZGF0ZShjYWNoZSwge2RhdGE6IHtjcmVhdGVQb3J0Zm9saW99fSkge1xyXG4gICAgY29uc3Qge3BvcnRmb2xpb3N9ID0gY2FjaGUucmVhZFF1ZXJ5KHtxdWVyeTogR0VUX1BPUlRGT0xJT1N9KVxyXG4gICAgY2FjaGUud3JpdGVRdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiBHRVRfUE9SVEZPTElPUyxcclxuICAgICAgZGF0YTogeyBwb3J0Zm9saW9zOiBbLi4ucG9ydGZvbGlvcywgY3JlYXRlUG9ydGZvbGlvXX1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7Il0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwidXNlTXV0YXRpb24iLCJHRVRfUE9SVEZPTElPUyIsIkNSRUFURV9QT1JURk9MSU8iLCJVUERBVEVfUE9SVEZPTElPIiwiREVMRVRFX1BPUlRGT0xJTyIsInVzZUdldFBvcnRmb2xpb3MiLCJ1c2VVcGRhdGVQb3J0Zm9saW8iLCJ1c2VEZWxldGVQb3J0Zm9saW8iLCJ1cGRhdGUiLCJjYWNoZSIsImRlbGV0ZVBvcnRmb2xpbyIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsInBvcnRmb2xpb3MiLCJuZXdQb3J0Zm9saW9zIiwiZmlsdGVyIiwicCIsIl9pZCIsIndyaXRlUXVlcnkiLCJ1c2VDcmVhdGVQb3J0Zm9saW8iLCJjcmVhdGVQb3J0Zm9saW8iXSwic291cmNlUm9vdCI6IiJ9