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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atom/modalAtom */ \"./atom/modalAtom.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar CommentModal = function() {\n    var ref;\n    _s();\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__.modalState), 2), isOpen = ref1[0], setOpen = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__.postIdState), 2), postId = ref2[0], setPostId = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), post = ref3[0], setPost = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\", postId), function(snapshot) {\n            setPost(snapshot);\n        });\n    }, [\n        postId,\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {\n            isOpen: isOpen,\n            onRequestClose: function() {\n                return setOpen(false);\n            },\n            className: \"max-w-lg w-[90%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: (ref = post === null || post === void 0 ? void 0 : post.data()) === null || ref === void 0 ? void 0 : ref.username\n            }, void 0, false, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(CommentModal, \"a3p6qa0fkIOJm0qnTs1WkojHITo=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = CommentModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentModal);\nvar _c;\n$RefreshReg$(_c, \"CommentModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRNb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDSjtBQUNvQjtBQUM1QjtBQUNpQjtBQUNoQjtBQUNvQjtBQUNwQjs7QUFFakMsSUFBTVcsWUFBWSxHQUFHLFdBQU07OztJQUN6QixJQUEwQlQsSUFBMEIsb0ZBQTFCQSxzREFBYyxDQUFDQyx1REFBVSxDQUFDLE1BQTdDUyxNQUFNLEdBQWFWLElBQTBCLEdBQXZDLEVBQUVXLE9BQU8sR0FBSVgsSUFBMEIsR0FBOUI7SUFDdEIsSUFBNEJBLElBQTJCLG9GQUEzQkEsc0RBQWMsQ0FBQ0Usd0RBQVcsQ0FBQyxNQUFoRFUsTUFBTSxHQUFlWixJQUEyQixHQUExQyxFQUFFYSxTQUFTLEdBQUliLElBQTJCLEdBQS9CO0lBQ3hCLElBQXdCRCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCZSxJQUFJLEdBQWFmLElBQVksR0FBekIsRUFBRWdCLE9BQU8sR0FBSWhCLElBQVksR0FBaEI7SUFHcEJELGdEQUFTLENBQUMsV0FBTTtRQUNkUSw4REFBVSxDQUFDQyx1REFBRyxDQUFDRix5Q0FBRSxFQUFFLE9BQU8sRUFBRU8sTUFBTSxDQUFDLEVBQUUsU0FBQ0ksUUFBUSxFQUFLO1lBQ2pERCxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1NBQ25CLENBQUMsQ0FBQztLQUNKLEVBQUU7UUFBQ0osTUFBTTtRQUFFUCx5Q0FBRTtLQUFDLENBQUMsQ0FBQztJQUVqQixxQkFDRSw4REFBQ1ksS0FBRztrQkFFRFAsTUFBTSxrQkFDTCw4REFBQ1Asb0RBQUs7WUFDSk8sTUFBTSxFQUFFQSxNQUFNO1lBQ2RRLGNBQWMsRUFBRTt1QkFBTVAsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUFBO1lBQ3BDUSxTQUFTLEVBQUMsNklBQThJO3NCQUV4Siw0RUFBQ0YsS0FBRzswQkFBRUgsT0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVNLElBQUksRUFBRSw0QkFBVSxHQUF0Qk4sS0FBQUEsQ0FBc0IsT0FBUk8sUUFBUTs7Ozs7cUJBQU87Ozs7O2lCQTRCN0I7Ozs7O2FBRU4sQ0FDTjtDQUNIO0dBckRLWixZQUFZOztRQUNVVCxrREFBYztRQUNaQSxrREFBYzs7O0FBRnRDUyxLQUFBQSxZQUFZO0FBdURsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbWVudE1vZGFsLmpzPzk0NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgbW9kYWxTdGF0ZSwgcG9zdElkU3RhdGUgfSBmcm9tIFwiLi4vYXRvbS9tb2RhbEF0b21cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgeyBYSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgb25TbmFwc2hvdCwgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCdcclxuXHJcbmNvbnN0IENvbW1lbnRNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsU3RhdGUpO1xyXG4gIGNvbnN0IFtwb3N0SWQsIHNldFBvc3RJZF0gPSB1c2VSZWNvaWxTdGF0ZShwb3N0SWRTdGF0ZSk7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25TbmFwc2hvdChkb2MoZGIsIFwicG9zdHNcIiwgcG9zdElkKSwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHNldFBvc3Qoc25hcHNob3QpO1xyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3RJZCwgZGJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8ZGl2Pk1vZGFsPC9kaXY+ICovfVxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctbGcgdy1bOTAlXSAgYWJzb2x1dGUgdG9wLVs1MCVdIHRyYW5zbGF0ZS15LVstNTAlXSBsZWZ0LVs1MCVdIHRyYW5zbGF0ZS14LVstNTAlXSBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZC14bCBzaGFkb3ctbWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+e3Bvc3Q/LmRhdGEoKT8udXNlcm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwLTFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHktMiBweC0xLjVcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyRWZmZWN0IHctMTAgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtWzIzcHhdIHRleHQtZ3JheS03MDAgcC0wXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMC41IGgtZnVsbCB6LVstMV0gYWJzb2x1dGUgbGVmdC04IHRvcC0xMSBiZy1ncmF5LTMwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMSB3LTExIHJvdW5kZWQtZnVsbCBtci00XCJcclxuICAgICAgICAgICAgICAgIHNyYz17cG9zdD8uZGF0YSgpPy51c2VySW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ1c2VyLWltZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzE1cHhdIHNtOnRleHQtWzE2cHhdIGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3Q/LmRhdGEoKT8ubmFtZX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1bMTVweF1cIj5cclxuICAgICAgICAgICAgICAgIEB7cG9zdD8uZGF0YSgpPy51c2VybmFtZX0gLXtcIiBcIn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LVsxNXB4XSBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxNb21lbnQgZnJvbU5vdz57cG9zdD8uZGF0YSgpPy50aW1lc3RhbXA/LnRvRGF0ZSgpfTwvTW9tZW50PlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwibW9kYWxTdGF0ZSIsInBvc3RJZFN0YXRlIiwiTW9kYWwiLCJYSWNvbiIsImRiIiwib25TbmFwc2hvdCIsImRvYyIsIk1vbWVudCIsIkNvbW1lbnRNb2RhbCIsImlzT3BlbiIsInNldE9wZW4iLCJwb3N0SWQiLCJzZXRQb3N0SWQiLCJwb3N0Iiwic2V0UG9zdCIsInNuYXBzaG90IiwiZGl2Iiwib25SZXF1ZXN0Q2xvc2UiLCJjbGFzc05hbWUiLCJkYXRhIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentModal.js\n"));

/***/ })

});