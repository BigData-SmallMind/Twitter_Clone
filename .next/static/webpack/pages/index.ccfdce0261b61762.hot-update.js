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

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBarMenuItem */ \"./components/Sidebar/SideBarMenuItem.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Sidebar = function() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden sm:flex flex-col p-2 xl:items-start fixed\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center hoverEffect hover:bg-blue-100 p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    height: \"30\",\n                    width: \"30\",\n                    src: \"https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg\",\n                    alt: \"Twitter Logo\",\n                    className: \"\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 mb-2.5 xl:items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Home\",\n                        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.HomeIcon,\n                        active: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Explore\",\n                        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.HashtagIcon\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Notifications\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.BellIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Messages\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.InboxIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Bookmarks\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.BookmarkIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Lists\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ViewListIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Profiles\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.UserIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"More\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.DotsCircleHorizontalIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline \",\n                        children: \"Tweet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" text-blue-400 rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline \",\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn,\n                className: \" bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline \",\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, _this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hoverEffect text-gray-700 flex items-center justify-center xl:justify-start xl:mt-10 sm:w-full sm:mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: session.user.image,\n                            alt: \"Mohamed fareed front end developer face\",\n                            className: \"rounded-full mr-5\",\n                            width: \"40\",\n                            height: \"40\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-1 leading-5 hidden xl:inline\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"font-bold\",\n                                    children: session.user.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-500\",\n                                    children: [\n                                        \"@\",\n                                        session.user.username\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.DotsHorizontalIcon, {\n                            className: \"h-5 xl:ml-8 sm:ml-3 hidden xl:inline\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOzhDQUNsRCw4REFBQ0MsR0FBQztvQ0FBQ2QsU0FBUyxFQUFDLGVBQWU7O3dDQUFDLEdBQUM7d0NBQUNGLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDSyxRQUFROzs7Ozs7eUNBQUs7Ozs7OztpQ0FDckQ7c0NBQ04sOERBQUNwQix3RUFBa0I7NEJBQUNLLFNBQVMsRUFBQyxzQ0FBc0M7Ozs7O2lDQUFHOzs7Ozs7eUJBQ25FOzZCQUNMOzs7Ozs7YUFFRCxDQUNOO0NBQ0g7R0FoSEtKLE9BQU87O1FBQ2VYLHVEQUFVOzs7QUFEaENXLEtBQUFBLE9BQU87QUFrSGIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qcz8yMTgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgU2lkZUJhck1lbnVJdGVtIGZyb20gXCIuL1NpZGVCYXJNZW51SXRlbVwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSG9tZUljb24sXHJcbiAgSGFzaHRhZ0ljb24sXHJcbiAgQmVsbEljb24sXHJcbiAgSW5ib3hJY29uLFxyXG4gIEJvb2ttYXJrSWNvbixcclxuICBWaWV3TGlzdEljb24sXHJcbiAgVXNlckljb24sXHJcbiAgRG90c0NpcmNsZUhvcml6b250YWxJY29uLFxyXG4gIERvdHNIb3Jpem9udGFsSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IGZsZXgtY29sIHAtMiB4bDppdGVtcy1zdGFydCBmaXhlZFwiPlxyXG4gICAgICB7LyogTG9nbyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlckVmZmVjdCBob3ZlcjpiZy1ibHVlLTEwMCBwLTJcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy80LzRmL1R3aXR0ZXItbG9nby5zdmdcIlxyXG4gICAgICAgICAgYWx0PVwiVHdpdHRlciBMb2dvXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogTWVudSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1iLTIuNSB4bDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgIDxTaWRlQmFyTWVudUl0ZW0gdGV4dD1cIkhvbWVcIiBJY29uPXtIb21lSWNvbn0gYWN0aXZlIC8+XHJcbiAgICAgICAgPFNpZGVCYXJNZW51SXRlbSB0ZXh0PVwiRXhwbG9yZVwiIEljb249e0hhc2h0YWdJY29ufSAvPlxyXG5cclxuICAgICAgICB7c2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2lkZUJhck1lbnVJdGVtIHRleHQ9XCJOb3RpZmljYXRpb25zXCIgSWNvbj17QmVsbEljb259IC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyTWVudUl0ZW0gdGV4dD1cIk1lc3NhZ2VzXCIgSWNvbj17SW5ib3hJY29ufSAvPlxyXG4gICAgICAgICAgICA8U2lkZUJhck1lbnVJdGVtIHRleHQ9XCJCb29rbWFya3NcIiBJY29uPXtCb29rbWFya0ljb259IC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyTWVudUl0ZW0gdGV4dD1cIkxpc3RzXCIgSWNvbj17Vmlld0xpc3RJY29ufSAvPlxyXG4gICAgICAgICAgICA8U2lkZUJhck1lbnVJdGVtIHRleHQ9XCJQcm9maWxlc1wiIEljb249e1VzZXJJY29ufSAvPlxyXG4gICAgICAgICAgICA8U2lkZUJhck1lbnVJdGVtIHRleHQ9XCJNb3JlXCIgSWNvbj17RG90c0NpcmNsZUhvcml6b250YWxJY29ufSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogQnV0dG9uICovfVxyXG4gICAgICB7c2Vzc2lvbiA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIGJnLWJsdWUtNDAwXHJcbiAgICAgICAgICAgIHRleHQtd2hpdGVcclxuICAgICAgICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICAgICB3LTU2XHJcbiAgICAgICAgICAgICAgaC0xMlxyXG4gICAgICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICAgIHNoYWRvdy1tZFxyXG4gICAgICAgICAgICAgIGhvdmVyOmJyaWdodG5lc3MtOTVcclxuICAgICAgICAgICAgICB0ZXh0LWxnXHJcbiAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgeGw6aW5saW5lXHJcbiAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVHdlZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgdGV4dC1ibHVlLTQwMFxyXG4gICAgIFxyXG4gICAgICAgICAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICAgICAgICAgIHctNTZcclxuICAgICAgICAgICAgICBoLTEyXHJcbiAgICAgICAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgICAgICAgc2hhZG93LW1kXHJcbiAgICAgICAgICAgICAgaG92ZXI6YnJpZ2h0bmVzcy05NVxyXG4gICAgICAgICAgICAgIHRleHQtbGdcclxuICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICB4bDppbmxpbmVcclxuICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17c2lnbklufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICBiZy1ibHVlLTQwMFxyXG4gICAgICAgICAgdGV4dC13aGl0ZVxyXG4gICAgICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICAgdy01NlxyXG4gICAgICAgICAgICBoLTEyXHJcbiAgICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICBzaGFkb3ctbWRcclxuICAgICAgICAgICAgaG92ZXI6YnJpZ2h0bmVzcy05NVxyXG4gICAgICAgICAgICB0ZXh0LWxnXHJcbiAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICB4bDppbmxpbmVcclxuICAgICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogTWluaSBwcm9maWxlICovfVxyXG4gICAgICB7c2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJFZmZlY3QgdGV4dC1ncmF5LTcwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB4bDpqdXN0aWZ5LXN0YXJ0IHhsOm10LTEwIHNtOnctZnVsbCBzbTptdC01XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD1cIk1vaGFtZWQgZmFyZWVkIGZyb250IGVuZCBkZXZlbG9wZXIgZmFjZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG1yLTVcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0xIGxlYWRpbmctNSBoaWRkZW4geGw6aW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntzZXNzaW9uLnVzZXIubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Ae3Nlc3Npb24udXNlci51c2VybmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RG90c0hvcml6b250YWxJY29uIGNsYXNzTmFtZT1cImgtNSB4bDptbC04IHNtOm1sLTMgaGlkZGVuIHhsOmlubGluZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTaWRlQmFyTWVudUl0ZW0iLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwiSG9tZUljb24iLCJIYXNodGFnSWNvbiIsIkJlbGxJY29uIiwiSW5ib3hJY29uIiwiQm9va21hcmtJY29uIiwiVmlld0xpc3RJY29uIiwiVXNlckljb24iLCJEb3RzQ2lyY2xlSG9yaXpvbnRhbEljb24iLCJEb3RzSG9yaXpvbnRhbEljb24iLCJTaWRlYmFyIiwiZGF0YSIsInNlc3Npb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImFsdCIsInRleHQiLCJJY29uIiwiYWN0aXZlIiwiYnV0dG9uIiwib25DbGljayIsInVzZXIiLCJpbWFnZSIsImg0IiwibmFtZSIsInAiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar/Sidebar.js\n"));

/***/ })

});