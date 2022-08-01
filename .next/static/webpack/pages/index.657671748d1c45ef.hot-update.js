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

/***/ "./components/Feed/Input.js":
/*!**********************************!*\
  !*** ./components/Feed/Input.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Input = function() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), postText = ref1[0], setPostText = ref1[1];\n    var imagePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var handlePostText = function(e) {\n        setPostText(e.target.value);\n    };\n    var sendPost = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var docRef;\n            return D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\"), {\n                            id: session.user.uid,\n                            text: postText,\n                            userImage: session.user.image,\n                            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.serverTimestamp)(),\n                            name: session.user.name,\n                            username: session.user.username\n                        });\n                    case 2:\n                        docRef = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function sendPost() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var addImageToPost = function(e) {\n        e.preventDefault();\n        e.stopPropagation();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex border-b border-gray-200 p-3 space-x-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: session.user.image,\n                        className: \"hover:brightness-95 cursor-pointer h-10 w-10 rounded-full xl:mr-2\",\n                        alt: \"user-image\",\n                        height: \"40\",\n                        width: \"40\",\n                        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-full divide-y divide-gray-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                            className: \"w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-800\",\n                            rows: \"2\",\n                            placeholder: \"What's on your mind?\",\n                            onChange: handlePostText,\n                            value: postText\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center pt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                imagePickerRef.current.click();\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PhotographIcon, {\n                                                    className: \"h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 hoverEffect\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                    hidden: true,\n                                                    ref: imagePickerRef,\n                                                    type: \"file\",\n                                                    onClick: addImageToPost\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.EmojiHappyIcon, {\n                                            className: \"h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 hoverEffect\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \" bg-blue-400 text-white rounded-full font-bold shadow-md hover:brightness-95 px-4 py-1.5 disabled:opacity-25 \",\n                                    disabled: !postText.trim(),\n                                    onClick: sendPost,\n                                    children: \"Tweet\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Input, \"ez7HRXJnyev+rUWcTgYtndH8PMk=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yzs7Ozs7eURBQ3ZCOzs7Ozs7aURBQ0U7c0RBQ04sOERBQUNqQyxvRUFBYzs0Q0FBQ3FDLFNBQVMsRUFBQyx5REFBeUQ7Ozs7O2lEQUFHOzs7Ozs7eUNBQ2xGOzhDQUNOLDhEQUFDZ0IsUUFBTTtvQ0FDTGhCLFNBQVMsRUFBQywrR0FVVDtvQ0FDRGlCLFFBQVEsRUFBRSxDQUFDdkMsUUFBUSxDQUFDd0MsSUFBSSxFQUFFO29DQUMxQmIsT0FBTyxFQUFFcEIsUUFBUTs4Q0FDbEIsT0FFRDs7Ozs7eUNBQVM7Ozs7OztpQ0FDTDs7Ozs7O3lCQUNGOzs7Ozs7aUJBQ0Y7cUJBRVAsQ0FDSDtDQUNIO0dBMUZLVixLQUFLOztRQUNpQlIsdURBQVU7OztBQURoQ1EsS0FBQUEsS0FBSztBQTRGWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVlZC9JbnB1dC5qcz9hYWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRW1vamlIYXBweUljb24sXHJcbiAgUGhvdG9ncmFwaEljb24sXHJcbiAgWEljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24sIHNlcnZlclRpbWVzdGFtcCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IElucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFtwb3N0VGV4dCwgc2V0UG9zdFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaW1hZ2VQaWNrZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBvc3RUZXh0ID0gKGUpID0+IHtcclxuICAgIHNldFBvc3RUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZW5kUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGlmIChsb2FkaW5nKSByZXR1cm47XHJcbiAgICAvLyBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInBvc3RzXCIpLCB7XHJcbiAgICAgIGlkOiBzZXNzaW9uLnVzZXIudWlkLFxyXG4gICAgICB0ZXh0OiBwb3N0VGV4dCxcclxuICAgICAgdXNlckltYWdlOiBzZXNzaW9uLnVzZXIuaW1hZ2UsXHJcbiAgICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIG5hbWU6IHNlc3Npb24udXNlci5uYW1lLFxyXG4gICAgICB1c2VybmFtZTogc2Vzc2lvbi51c2VyLnVzZXJuYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkSW1hZ2VUb1Bvc3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcC0zIHNwYWNlLXgtM1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YnJpZ2h0bmVzcy05NSBjdXJzb3ItcG9pbnRlciBoLTEwIHctMTAgcm91bmRlZC1mdWxsIHhsOm1yLTJcIlxyXG4gICAgICAgICAgICAgIGFsdD1cInVzZXItaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzaWduT3V0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1ub25lIGZvY3VzOnJpbmctMCB0ZXh0LWxnIHBsYWNlaG9sZGVyLWdyYXktNzAwIHRyYWNraW5nLXdpZGUgbWluLWgtWzUwcHhdIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgIHJvd3M9XCIyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyBvbiB5b3VyIG1pbmQ/XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUG9zdFRleHR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bvc3RUZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VQaWNrZXJSZWYuY3VycmVudC5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UGhvdG9ncmFwaEljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHAtMiB0ZXh0LXNreS01MDAgaG92ZXI6Ymctc2t5LTEwMCBob3ZlckVmZmVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW1hZ2VQaWNrZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEltYWdlVG9Qb3N0fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RW1vamlIYXBweUljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHAtMiB0ZXh0LXNreS01MDAgaG92ZXI6Ymctc2t5LTEwMCBob3ZlckVmZmVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICBiZy1ibHVlLTQwMFxyXG4gICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxyXG4gICAgICAgICAgICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgICAgICAgIHNoYWRvdy1tZFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6YnJpZ2h0bmVzcy05NVxyXG4gICAgICAgICAgICAgICAgcHgtNFxyXG4gICAgICAgICAgICAgICAgcHktMS41XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDpvcGFjaXR5LTI1XHJcbiAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwb3N0VGV4dC50cmltKCl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZW5kUG9zdH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBUd2VldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXSwibmFtZXMiOlsiRW1vamlIYXBweUljb24iLCJQaG90b2dyYXBoSWNvbiIsIlhJY29uIiwiSW1hZ2UiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwic2VydmVyVGltZXN0YW1wIiwiSW5wdXQiLCJkYXRhIiwic2Vzc2lvbiIsInBvc3RUZXh0Iiwic2V0UG9zdFRleHQiLCJpbWFnZVBpY2tlclJlZiIsImhhbmRsZVBvc3RUZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZFBvc3QiLCJkb2NSZWYiLCJpZCIsInVzZXIiLCJ1aWQiLCJ0ZXh0IiwidXNlckltYWdlIiwiaW1hZ2UiLCJ0aW1lc3RhbXAiLCJuYW1lIiwidXNlcm5hbWUiLCJhZGRJbWFnZVRvUG9zdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwidGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImN1cnJlbnQiLCJjbGljayIsImlucHV0IiwiaGlkZGVuIiwicmVmIiwidHlwZSIsImJ1dHRvbiIsImRpc2FibGVkIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feed/Input.js\n"));

/***/ })

});