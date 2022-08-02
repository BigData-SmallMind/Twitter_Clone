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

/***/ "./components/Feed/Post.js":
/*!*********************************!*\
  !*** ./components/Feed/Post.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Post = function(props) {\n    var ref;\n    _s();\n    var post = props.post;\n    var ref1 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref1.data;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), postIsLiked = ref2[0], setPostLiked = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), likes = ref3[0], setLikes = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\", post.id, \"likes\"), function(snapshot) {\n            return setLikes(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        setPostLiked(likes.findIndex(function(like) {\n            return like.id === session.user.uid;\n        }) !== -1);\n    }, [\n        likes\n    ]);\n    function likePost() {\n        return _likePost.apply(this, arguments);\n    }\n    function _likePost() {\n        _likePost = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_twitter_clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\", post.id, \"likes\", session.user.uid), {\n                            username: session.user.username\n                        });\n                    case 2:\n                        setPostLiked(!postIsLiked);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _likePost.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"p-3 flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"pr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: post.data().userImage,\n                    className: \"hover:brightness-95 cursor-pointer h-10 w-10 rounded-full\",\n                    alt: \"user-image\",\n                    height: \"40\",\n                    width: \"40\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                                        className: \"font-bold text-[15px] sm:text-[16px] hover:underline hover:cursor-pointer\",\n                                        children: post.data().name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"text-sm sm:text-[15px] hover:underline hover:cursor-pointer\",\n                                        children: [\n                                            \"@\",\n                                            post.data().username\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"text-sm sm:text-[15px] hover:underline hover:cursor-pointer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            fromNow: true,\n                                            children: (ref = post.data().timeStamp) === null || ref === void 0 ? void 0 : ref.toDate()\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.DotsHorizontalIcon, {\n                                className: \"hoverEffect h-10 w-10 p-2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"pt-5\",\n                        children: post.data().text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: post.data().image,\n                        className: \"w-full rounded-xl\",\n                        alt: post.text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around mt-2 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChartBarIcon, {\n                                className: \"h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.TrashIcon, {\n                                className: \"h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.HeartIcon, {\n                                onClick: likePost,\n                                className: \"h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, _this),\n                            postIsLiked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"Liked\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 102,\n                                columnNumber: 26\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"Not Liked\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 102,\n                                columnNumber: 45\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ShareIcon, {\n                                className: \"h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChatIcon, {\n                                className: \"h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Post.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"aykcau4K+m7k1cmifmmozmCmGmw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQywrREFBUztnQ0FBQ2tDLFNBQVMsRUFBQyw2REFBOEQ7Ozs7O3FDQUFHOzBDQUN0Riw4REFBQ3BDLDhEQUFRO2dDQUFDb0MsU0FBUyxFQUFDLDZEQUE4RDs7Ozs7cUNBQUc7Ozs7Ozs2QkFDakY7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBdkZLcEIsSUFBSTs7UUFFa0JULHVEQUFVOzs7QUFGaENTLEtBQUFBLElBQUk7QUF5RlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlZWQvUG9zdC5qcz8zNTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhcnRCYXJJY29uLFxyXG4gIENoYXRJY29uLFxyXG4gIEhlYXJ0SWNvbixcclxuICBTaGFyZUljb24sXHJcbiAgVHJhc2hJY29uLFxyXG4gIERvdHNIb3Jpem9udGFsSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IEhlYXJ0SWNvbkZpbGxlZCB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHNldERvYyxcclxuICBkb2MsXHJcbiAgb25TbmFwc2hvdCxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGRlbGV0ZURvYyxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBvc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFtwb3N0SXNMaWtlZCwgc2V0UG9zdExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25TbmFwc2hvdChcclxuICAgICAgY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiLCBwb3N0LmlkLCBcImxpa2VzXCIpLFxyXG4gICAgICAoc25hcHNob3QpID0+IHNldExpa2VzKHNuYXBzaG90LmRvY3MpXHJcbiAgICApO1xyXG4gIH0sIFtkYl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UG9zdExpa2VkKFxyXG4gICAgICBsaWtlcy5maW5kSW5kZXgoKGxpa2UpID0+IGxpa2UuaWQgPT09IHNlc3Npb24udXNlci51aWQpICE9PSAtMVxyXG4gICAgKTtcclxuICB9LCBbbGlrZXNdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbGlrZVBvc3QoKSB7XHJcbiAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCBcInBvc3RzXCIsIHBvc3QuaWQsIFwibGlrZXNcIiwgc2Vzc2lvbi51c2VyLnVpZCksIHtcclxuICAgICAgdXNlcm5hbWU6IHNlc3Npb24udXNlci51c2VybmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFBvc3RMaWtlZCghcG9zdElzTGlrZWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGZsZXhcIj5cclxuICAgICAgey8qIExlZnQgU2lkZSAtIFVzZXIgSW1hZ2UgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItMlwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cG9zdC5kYXRhKCkudXNlckltYWdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YnJpZ2h0bmVzcy05NSBjdXJzb3ItcG9pbnRlciBoLTEwIHctMTAgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgIGFsdD1cInVzZXItaW1hZ2VcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUmlnaHQgU2lkZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICB7LyogVG9wICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICB7LyogTmFtZSAmIEBOYW1lICYgdGltZXN0YW1wICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzE1cHhdIHNtOnRleHQtWzE2cHhdIGhvdmVyOnVuZGVybGluZSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgIHtwb3N0LmRhdGEoKS5uYW1lfVxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtWzE1cHhdIGhvdmVyOnVuZGVybGluZSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgIEB7cG9zdC5kYXRhKCkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LVsxNXB4XSBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICA8TW9tZW50IGZyb21Ob3c+e3Bvc3QuZGF0YSgpLnRpbWVTdGFtcD8udG9EYXRlKCl9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIERvdEljb24gKi99XHJcbiAgICAgICAgICA8RG90c0hvcml6b250YWxJY29uIGNsYXNzTmFtZT1cImhvdmVyRWZmZWN0IGgtMTAgdy0xMCBwLTJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUG9zdCBEZXNjcmlwdGlvbiBUZXh0Ki99XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHQtNVwiPntwb3N0LmRhdGEoKS50ZXh0fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgey8qIFBvc3QgaW1hZ2UgKi99XHJcblxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cG9zdC5kYXRhKCkuaW1hZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bFwiXHJcbiAgICAgICAgICBhbHQ9e3Bvc3QudGV4dH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7LyogUG9zdCBJY29ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgbXQtMiB3LWZ1bGxcIj5cclxuICAgICAgICAgIDxDaGFydEJhckljb24gY2xhc3NOYW1lPVwiaC05IHctOSAgaG92ZXJFZmZlY3QgcC0yIGhvdmVyOnRleHQtc2t5LTUwMCBob3ZlcjpiZy1za3ktMTAwXCIgLz5cclxuICAgICAgICAgIDxUcmFzaEljb24gY2xhc3NOYW1lPVwiaC05IHctOSAgaG92ZXJFZmZlY3QgcC0yIGhvdmVyOnRleHQtc2t5LTUwMCBob3ZlcjpiZy1za3ktMTAwXCIgLz5cclxuXHJcbiAgICAgICAgICA8SGVhcnRJY29uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2xpa2VQb3N0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy05ICBob3ZlckVmZmVjdCBwLTIgaG92ZXI6dGV4dC1yZWQtNTAwIGhvdmVyOmJnLXJlZC0xMDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtwb3N0SXNMaWtlZCA/IDxkaXY+TGlrZWQ8L2Rpdj4gOiA8ZGl2Pk5vdCBMaWtlZDwvZGl2Pn1cclxuICAgICAgICAgIDxTaGFyZUljb24gY2xhc3NOYW1lPVwiaC05IHctOSAgaG92ZXJFZmZlY3QgcC0yIGhvdmVyOnRleHQtc2t5LTUwMCBob3ZlcjpiZy1za3ktMTAwXCIgLz5cclxuICAgICAgICAgIDxDaGF0SWNvbiBjbGFzc05hbWU9XCJoLTkgdy05ICBob3ZlckVmZmVjdCBwLTIgaG92ZXI6dGV4dC1za3ktNTAwIGhvdmVyOmJnLXNreS0xMDBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwibmFtZXMiOlsiQ2hhcnRCYXJJY29uIiwiQ2hhdEljb24iLCJIZWFydEljb24iLCJTaGFyZUljb24iLCJUcmFzaEljb24iLCJEb3RzSG9yaXpvbnRhbEljb24iLCJIZWFydEljb25GaWxsZWQiLCJNb21lbnQiLCJ1c2VTZXNzaW9uIiwic2V0RG9jIiwiZG9jIiwib25TbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJkZWxldGVEb2MiLCJkYiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUG9zdCIsInByb3BzIiwicG9zdCIsImRhdGEiLCJzZXNzaW9uIiwicG9zdElzTGlrZWQiLCJzZXRQb3N0TGlrZWQiLCJsaWtlcyIsInNldExpa2VzIiwidW5zdWJzY3JpYmUiLCJpZCIsInNuYXBzaG90IiwiZG9jcyIsImZpbmRJbmRleCIsImxpa2UiLCJ1c2VyIiwidWlkIiwibGlrZVBvc3QiLCJ1c2VybmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInVzZXJJbWFnZSIsImFsdCIsImhlaWdodCIsIndpZHRoIiwiaDQiLCJuYW1lIiwic3BhbiIsImZyb21Ob3ciLCJ0aW1lU3RhbXAiLCJ0b0RhdGUiLCJ0ZXh0IiwiaW1hZ2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Feed/Post.js\n"));

/***/ })

});