"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CommentModal.js":
/*!************************************!*\
  !*** ./components/CommentModal.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atom/modalAtom */ \"./atom/modalAtom.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar CommentModal = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__.modalState), 2), isOpen = ref[0], setOpen = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__.postIdState), 2), postId = ref1[0], setPostId = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), post = ref2[0], setPost = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\", postId), function(snapshot) {\n            setPost(snapshot);\n        });\n    }, [\n        postId,\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {\n            isOpen: isOpen,\n            onRequestClose: function() {\n                return setOpen(false);\n            },\n            className: \"max-w-lg w-[90%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: postId\n            }, void 0, false, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(CommentModal, \"a3p6qa0fkIOJm0qnTs1WkojHITo=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = CommentModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentModal);\nvar _c;\n$RefreshReg$(_c, \"CommentModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRNb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDSjtBQUNvQjtBQUM1QjtBQUNpQjtBQUNoQjtBQUNvQjtBQUNwQjs7QUFFakMsSUFBTVcsWUFBWSxHQUFHLFdBQU07O0lBQ3pCLElBQTBCVCxHQUEwQixvRkFBMUJBLHNEQUFjLENBQUNDLHVEQUFVLENBQUMsTUFBN0NTLE1BQU0sR0FBYVYsR0FBMEIsR0FBdkMsRUFBRVcsT0FBTyxHQUFJWCxHQUEwQixHQUE5QjtJQUN0QixJQUE0QkEsSUFBMkIsb0ZBQTNCQSxzREFBYyxDQUFDRSx3REFBVyxDQUFDLE1BQWhEVSxNQUFNLEdBQWVaLElBQTJCLEdBQTFDLEVBQUVhLFNBQVMsR0FBSWIsSUFBMkIsR0FBL0I7SUFDeEIsSUFBd0JELElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JlLElBQUksR0FBYWYsSUFBWSxHQUF6QixFQUFFZ0IsT0FBTyxHQUFJaEIsSUFBWSxHQUFoQjtJQUdwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLDhEQUFVLENBQUNDLHVEQUFHLENBQUNGLHlDQUFFLEVBQUUsT0FBTyxFQUFFTyxNQUFNLENBQUMsRUFBRSxTQUFDSSxRQUFRLEVBQUs7WUFDakRELE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ0osRUFBRTtRQUFDSixNQUFNO1FBQUVQLHlDQUFFO0tBQUMsQ0FBQyxDQUFDO0lBRWpCLHFCQUNFLDhEQUFDWSxLQUFHO2tCQUVEUCxNQUFNLGtCQUNMLDhEQUFDUCxvREFBSztZQUNKTyxNQUFNLEVBQUVBLE1BQU07WUFDZFEsY0FBYyxFQUFFO3VCQUFNUCxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQUE7WUFDcENRLFNBQVMsRUFBQyw2SUFBOEk7c0JBRXhKLDRFQUFDRixLQUFHOzBCQUFFTCxNQUFNOzs7OztxQkFBTzs7Ozs7aUJBNEJiOzs7OzthQUVOLENBQ047Q0FDSDtHQXJES0gsWUFBWTs7UUFDVVQsa0RBQWM7UUFDWkEsa0RBQWM7OztBQUZ0Q1MsS0FBQUEsWUFBWTtBQXVEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRNb2RhbC5qcz85NDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7IG1vZGFsU3RhdGUsIHBvc3RJZFN0YXRlIH0gZnJvbSBcIi4uL2F0b20vbW9kYWxBdG9tXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IHsgWEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IG9uU25hcHNob3QsIGRvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnXHJcblxyXG5jb25zdCBDb21tZW50TW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShtb2RhbFN0YXRlKTtcclxuICBjb25zdCBbcG9zdElkLCBzZXRQb3N0SWRdID0gdXNlUmVjb2lsU3RhdGUocG9zdElkU3RhdGUpO1xyXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uU25hcHNob3QoZG9jKGRiLCBcInBvc3RzXCIsIHBvc3RJZCksIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICBzZXRQb3N0KHNuYXBzaG90KTtcclxuICAgIH0pO1xyXG4gIH0sIFtwb3N0SWQsIGRiXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPGRpdj5Nb2RhbDwvZGl2PiAqL31cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LWxnIHctWzkwJV0gIGFic29sdXRlIHRvcC1bNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gbGVmdC1bNTAlXSB0cmFuc2xhdGUteC1bLTUwJV0gYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQteGwgc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2Pntwb3N0SWR9PC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHktMiBweC0xLjVcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyRWZmZWN0IHctMTAgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtWzIzcHhdIHRleHQtZ3JheS03MDAgcC0wXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMC41IGgtZnVsbCB6LVstMV0gYWJzb2x1dGUgbGVmdC04IHRvcC0xMSBiZy1ncmF5LTMwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMSB3LTExIHJvdW5kZWQtZnVsbCBtci00XCJcclxuICAgICAgICAgICAgICAgIHNyYz17cG9zdD8uZGF0YSgpPy51c2VySW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ1c2VyLWltZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzE1cHhdIHNtOnRleHQtWzE2cHhdIGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3Q/LmRhdGEoKT8ubmFtZX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1bMTVweF1cIj5cclxuICAgICAgICAgICAgICAgIEB7cG9zdD8uZGF0YSgpPy51c2VybmFtZX0gLXtcIiBcIn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LVsxNXB4XSBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxNb21lbnQgZnJvbU5vdz57cG9zdD8uZGF0YSgpPy50aW1lc3RhbXA/LnRvRGF0ZSgpfTwvTW9tZW50PlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwibW9kYWxTdGF0ZSIsInBvc3RJZFN0YXRlIiwiTW9kYWwiLCJYSWNvbiIsImRiIiwib25TbmFwc2hvdCIsImRvYyIsIk1vbWVudCIsIkNvbW1lbnRNb2RhbCIsImlzT3BlbiIsInNldE9wZW4iLCJwb3N0SWQiLCJzZXRQb3N0SWQiLCJwb3N0Iiwic2V0UG9zdCIsInNuYXBzaG90IiwiZGl2Iiwib25SZXF1ZXN0Q2xvc2UiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentModal.js\n"));

/***/ })

});