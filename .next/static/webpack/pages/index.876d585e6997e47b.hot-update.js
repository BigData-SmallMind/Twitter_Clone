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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atom/modalAtom */ \"./atom/modalAtom.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar CommentModal = function() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__.modalState), 2), isOpen = ref4[0], setOpen = ref4[1];\n    var ref5 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atom_modalAtom__WEBPACK_IMPORTED_MODULE_3__.postIdState), 1), postId = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), post = ref6[0], setPost = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\", postId), function(snapshot) {\n            setPost(snapshot);\n        });\n    }, [\n        postId,\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {\n            isOpen: isOpen,\n            onRequestClose: function() {\n                return setOpen(false);\n            },\n            className: \"max-w-lg w-[90%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-b border-gray-200 py-2 px-1.5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return setOpen(false);\n                            },\n                            className: \"hoverEffect w-10 h-10 flex items-center justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__.XIcon, {\n                                className: \"h-[23px] text-gray-700 p-0\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 flex items-center space-x-1 relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-11 w-11 rounded-full mr-4\",\n                                src: (ref = post === null || post === void 0 ? void 0 : post.data()) === null || ref === void 0 ? void 0 : ref.userImage,\n                                alt: \"user-img\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-bold text-[15px] sm:text-[16px] hover:underline\",\n                                children: (ref1 = post === null || post === void 0 ? void 0 : post.data()) === null || ref1 === void 0 ? void 0 : ref1.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm sm:text-[15px]\",\n                                children: [\n                                    \"@\",\n                                    post === null || post === void 0 ? void 0 : post.username,\n                                    \" -\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm sm:text-[15px] hover:underline\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    fromNow: true,\n                                    children: (ref2 = post === null || post === void 0 ? void 0 : post.data()) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.timestamp) === null || ref3 === void 0 ? void 0 : ref3.toDate()\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\CommentModal.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(CommentModal, \"CTgKOra3y2ySZwkfCupVMR6phJs=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = CommentModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentModal);\nvar _c;\n$RefreshReg$(_c, \"CommentModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRNb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTRDO0FBQ0o7QUFDb0I7QUFDNUI7QUFDaUI7QUFDaEI7QUFDb0I7QUFDcEI7O0FBRWpDLElBQU1XLFlBQVksR0FBRyxXQUFNOzs7SUFDekIsSUFBMEJULElBQTBCLG9GQUExQkEsc0RBQWMsQ0FBQ0MsdURBQVUsQ0FBQyxNQUE3Q1MsTUFBTSxHQUFhVixJQUEwQixHQUF2QyxFQUFFVyxPQUFPLEdBQUlYLElBQTBCLEdBQTlCO0lBQ3RCLElBQWlCQSxJQUEyQixvRkFBM0JBLHNEQUFjLENBQUNFLHdEQUFXLENBQUMsTUFBckNVLE1BQU0sR0FBSVosSUFBMkIsR0FBL0I7SUFDYixJQUF3QkQsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QmMsSUFBSSxHQUFhZCxJQUFZLEdBQXpCLEVBQUVlLE9BQU8sR0FBSWYsSUFBWSxHQUFoQjtJQUdwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLDhEQUFVLENBQUNDLHVEQUFHLENBQUNGLHlDQUFFLEVBQUUsT0FBTyxFQUFFTyxNQUFNLENBQUMsRUFBRSxTQUFDRyxRQUFRLEVBQUs7WUFDakRELE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ0osRUFBRTtRQUFDSCxNQUFNO1FBQUVQLHlDQUFFO0tBQUMsQ0FBQyxDQUFDO0lBRWpCLHFCQUNFLDhEQUFDVyxLQUFHO2tCQUVETixNQUFNLGtCQUNMLDhEQUFDUCxvREFBSztZQUNKTyxNQUFNLEVBQUVBLE1BQU07WUFDZE8sY0FBYyxFQUFFO3VCQUFNTixPQUFPLENBQUMsS0FBSyxDQUFDO2FBQUE7WUFDcENPLFNBQVMsRUFBQyw2SUFBOEk7c0JBRXhKLDRFQUFDRixLQUFHO2dCQUFDRSxTQUFTLEVBQUMsS0FBSzs7a0NBQ2xCLDhEQUFDRixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsc0NBQXNDO2tDQUNuRCw0RUFBQ0YsS0FBRzs0QkFDRkcsT0FBTyxFQUFFO3VDQUFNUixPQUFPLENBQUMsS0FBSyxDQUFDOzZCQUFBOzRCQUM3Qk8sU0FBUyxFQUFDLHdEQUF3RDtzQ0FFbEUsNEVBQUNkLDJEQUFLO2dDQUFDYyxTQUFTLEVBQUMsNEJBQTRCOzs7OztxQ0FBRzs7Ozs7aUNBQzVDOzs7Ozs2QkFDRjtrQ0FDTiw4REFBQ0YsS0FBRzt3QkFBQ0UsU0FBUyxFQUFDLDBDQUEwQzs7MENBQ3ZELDhEQUFDRSxNQUFJO2dDQUFDRixTQUFTLEVBQUMsd0RBQXdEOzs7OztxQ0FBRzswQ0FDM0UsOERBQUNHLEtBQUc7Z0NBQ0ZILFNBQVMsRUFBQyw2QkFBNkI7Z0NBQ3ZDSSxHQUFHLEVBQUVULE9BQUFBLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFVSxJQUFJLEVBQUUsNEJBQVcsR0FBdkJWLEtBQUFBLENBQXVCLE9BQVRXLFNBQVM7Z0NBQzVCQyxHQUFHLEVBQUMsVUFBVTs7Ozs7cUNBQ2Q7MENBQ0YsOERBQUNDLElBQUU7Z0NBQUNSLFNBQVMsRUFBQyxzREFBc0Q7MENBQ2pFTCxRQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLElBQUksQ0FBRVUsSUFBSSxFQUFFLDZCQUFNLEdBQWxCVixLQUFBQSxDQUFrQixRQUFKYyxJQUFJOzs7OztxQ0FDaEI7MENBQ0wsOERBQUNQLE1BQUk7Z0NBQUNGLFNBQVMsRUFBQyx3QkFBd0I7O29DQUFDLEdBQ3RDO29DQUFDTCxJQUFJLGFBQUpBLElBQUksV0FBVSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLElBQUksQ0FBRWUsUUFBUTtvQ0FBQyxJQUFFO29DQUFDLEdBQUc7Ozs7OztxQ0FDbEI7MENBQ1AsOERBQUNSLE1BQUk7Z0NBQUNGLFNBQVMsRUFBQyx3Q0FBd0M7MENBQ3RELDRFQUFDVixxREFBTTtvQ0FBQ3FCLE9BQU87OENBQUVoQixRQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLElBQUksQ0FBRVUsSUFBSSxFQUFFLDZCQUFXLEdBQXZCVixLQUFBQSxDQUF1QixHQUF2QkEsYUFBY2lCLFNBQVMsZ0NBQXZCakIsS0FBQUEsQ0FBdUIsR0FBdkJBLEtBQXlCa0IsTUFBTSxFQUFFOzs7Ozt5Q0FBVTs7Ozs7cUNBQ3ZEOzs7Ozs7NkJBQ0g7Ozs7OztxQkFDRjs7Ozs7aUJBQ0E7Ozs7O2FBRU4sQ0FDTjtDQUNIO0dBcERLdEIsWUFBWTs7UUFDVVQsa0RBQWM7UUFDdkJBLGtEQUFjOzs7QUFGM0JTLEtBQUFBLFlBQVk7QUFzRGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TW9kYWwuanM/OTQ1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBtb2RhbFN0YXRlLCBwb3N0SWRTdGF0ZSB9IGZyb20gXCIuLi9hdG9tL21vZGFsQXRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IFhJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBvblNuYXBzaG90LCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50J1xyXG5cclxuY29uc3QgQ29tbWVudE1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlUmVjb2lsU3RhdGUobW9kYWxTdGF0ZSk7XHJcbiAgY29uc3QgW3Bvc3RJZF0gPSB1c2VSZWNvaWxTdGF0ZShwb3N0SWRTdGF0ZSk7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25TbmFwc2hvdChkb2MoZGIsIFwicG9zdHNcIiwgcG9zdElkKSwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgIHNldFBvc3Qoc25hcHNob3QpO1xyXG4gICAgfSk7XHJcbiAgfSwgW3Bvc3RJZCwgZGJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8ZGl2Pk1vZGFsPC9kaXY+ICovfVxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctbGcgdy1bOTAlXSAgYWJzb2x1dGUgdG9wLVs1MCVdIHRyYW5zbGF0ZS15LVstNTAlXSBsZWZ0LVs1MCVdIHRyYW5zbGF0ZS14LVstNTAlXSBiZy13aGl0ZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZC14bCBzaGFkb3ctbWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB5LTIgcHgtMS41XCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlckVmZmVjdCB3LTEwIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLVsyM3B4XSB0ZXh0LWdyYXktNzAwIHAtMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTAuNSBoLWZ1bGwgei1bLTFdIGFic29sdXRlIGxlZnQtOCB0b3AtMTEgYmctZ3JheS0zMDBcIiAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgdy0xMSByb3VuZGVkLWZ1bGwgbXItNFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Bvc3Q/LmRhdGEoKT8udXNlckltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwidXNlci1pbWdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsxNXB4XSBzbTp0ZXh0LVsxNnB4XSBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0Py5kYXRhKCk/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtWzE1cHhdXCI+XHJcbiAgICAgICAgICAgICAgICBAe3Bvc3Q/LnVzZXJuYW1lfSAte1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtWzE1cHhdIGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPE1vbWVudCBmcm9tTm93Pntwb3N0Py5kYXRhKCk/LnRpbWVzdGFtcD8udG9EYXRlKCl9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudE1vZGFsO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsIm1vZGFsU3RhdGUiLCJwb3N0SWRTdGF0ZSIsIk1vZGFsIiwiWEljb24iLCJkYiIsIm9uU25hcHNob3QiLCJkb2MiLCJNb21lbnQiLCJDb21tZW50TW9kYWwiLCJpc09wZW4iLCJzZXRPcGVuIiwicG9zdElkIiwicG9zdCIsInNldFBvc3QiLCJzbmFwc2hvdCIsImRpdiIsIm9uUmVxdWVzdENsb3NlIiwiY2xhc3NOYW1lIiwib25DbGljayIsInNwYW4iLCJpbWciLCJzcmMiLCJkYXRhIiwidXNlckltYWdlIiwiYWx0IiwiaDQiLCJuYW1lIiwidXNlcm5hbWUiLCJmcm9tTm93IiwidGltZXN0YW1wIiwidG9EYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentModal.js\n"));

/***/ })

});