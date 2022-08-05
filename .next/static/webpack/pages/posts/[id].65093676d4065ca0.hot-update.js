"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CommentModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CommentModal */ \"./components/CommentModal.js\");\n/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sidebar/Sidebar */ \"./components/sidebar/Sidebar.js\");\n/* harmony import */ var _components_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Widgets/Widgets */ \"./components/Widgets/Widgets.js\");\n/* harmony import */ var _components_Feed_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Feed/Post */ \"./components/Feed/Post.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Comment */ \"./components/Comment.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction PostPage(param) {\n    var newsResults = param.newsResults, randomUsersResults = param.randomUsersResults;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({}), post = ref[0], setPost = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), comments = ref1[0], setComments = ref1[1];\n    // get the post data\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, \"posts\", id), function(snapshot) {\n            return setPost(snapshot);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_9__.db,\n        id\n    ]);\n    // get comments of the post\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, \"posts\", id, \"comments\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.orderBy)(\"timestamp\", \"desc\")), function(snapshot) {\n            return setComments(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_9__.db,\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Post Page\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-screen mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hoverEffect\",\n                                        onClick: function() {\n                                            return router.push(\"/\");\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ArrowLeftIcon, {\n                                            className: \"h-5 \"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg sm:text-xl font-bold cursor-pointer\",\n                                        children: \"Tweet\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                post: post\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            comments.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: comments.map(function(comment) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Comment__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        commentId: comment.id,\n                                        originalPostId: id,\n                                        comment: comment.data()\n                                    }, comment.id, false, {\n                                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        newsResults: newsResults,\n                        usersResults: randomUsersResults\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n};\n_s(PostPage, \"JbllCedKyFET9lAYdkYrPZYxuyM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFOzBDQUNkYixRQUFRLENBQUNrQixHQUFHLENBQUMsU0FBQ0MsT0FBTzt5REFDcEIsOERBQUMzQiw0REFBTzt3Q0FFTjRCLFNBQVMsRUFBRUQsT0FBTyxDQUFDdEIsRUFBRTt3Q0FDckJ3QixjQUFjLEVBQUV4QixFQUFFO3dDQUNsQnNCLE9BQU8sRUFBRUEsT0FBTyxDQUFDRyxJQUFJLEVBQUU7dUNBSGxCSCxPQUFPLENBQUN0QixFQUFFOzs7OzZDQUlmO2lDQUNILENBQUM7Ozs7O29DQUNFOzs7Ozs7NEJBRUo7a0NBSU4sOERBQUNoQixtRUFBTzt3QkFBQ2EsV0FBVyxFQUFFQSxXQUFXO3dCQUFFNkIsWUFBWSxFQUFFNUIsa0JBQWtCOzs7Ozs0QkFBSTtrQ0FJdkUsOERBQUNoQixnRUFBWTs7Ozs0QkFBRzs7Ozs7O29CQUNYOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0EzRXVCYyxRQUFROztRQUNmVixrREFBUzs7O0FBREZVLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qcz83OTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFycm93TGVmdEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENvbW1lbnRNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tZW50TW9kYWxcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCBXaWRnZXRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dpZGdldHMvV2lkZ2V0c1wiO1xyXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GZWVkL1Bvc3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBjb2xsZWN0aW9uLFxyXG4gIGRvYyxcclxuICBvblNuYXBzaG90LFxyXG4gIG9yZGVyQnksXHJcbiAgcXVlcnksXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UGFnZSh7IG5ld3NSZXN1bHRzLCByYW5kb21Vc2Vyc1Jlc3VsdHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIGdldCB0aGUgcG9zdCBkYXRhXHJcblxyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+IG9uU25hcHNob3QoZG9jKGRiLCBcInBvc3RzXCIsIGlkKSwgKHNuYXBzaG90KSA9PiBzZXRQb3N0KHNuYXBzaG90KSksXHJcbiAgICBbZGIsIGlkXVxyXG4gICk7XHJcblxyXG4gIC8vIGdldCBjb21tZW50cyBvZiB0aGUgcG9zdFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25TbmFwc2hvdChcclxuICAgICAgcXVlcnkoXHJcbiAgICAgICAgY29sbGVjdGlvbihkYiwgXCJwb3N0c1wiLCBpZCwgXCJjb21tZW50c1wiKSxcclxuICAgICAgICBvcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKVxyXG4gICAgICApLFxyXG4gICAgICAoc25hcHNob3QpID0+IHNldENvbW1lbnRzKHNuYXBzaG90LmRvY3MpXHJcbiAgICApO1xyXG4gIH0sIFtkYiwgaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb3N0IFBhZ2U8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIG14LWF1dG9cIj5cclxuICAgICAgICB7LyogU2lkZWJhciAqL31cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG5cclxuICAgICAgICB7LyogRmVlZCAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDptbC1bMzcwcHhdIGJvcmRlci1sIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCAgeGw6bWluLXctWzU3NnB4XSBzbTptbC1bNzNweF0gZmxleC1ncm93IG1heC13LXhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAgcHktMiBweC0zIHN0aWNreSB0b3AtMCB6LTUwIGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyRWZmZWN0XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cclxuICAgICAgICAgICAgICA8QXJyb3dMZWZ0SWNvbiBjbGFzc05hbWU9XCJoLTUgXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQteGwgZm9udC1ib2xkIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgVHdlZXRcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgIHsvKiA8ZGl2PntKU09OLnN0cmluZ2lmeShwb3N0LmRhdGEoKS51c2VybmFtZSl9PC9kaXY+ICovfVxyXG4gICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgY29tbWVudElkPXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbFBvc3RJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnQuZGF0YSgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogV2lkZ2V0cyAqL31cclxuXHJcbiAgICAgICAgPFdpZGdldHMgbmV3c1Jlc3VsdHM9e25ld3NSZXN1bHRzfSB1c2Vyc1Jlc3VsdHM9e3JhbmRvbVVzZXJzUmVzdWx0c30gLz5cclxuXHJcbiAgICAgICAgey8qIE1vZGFsICovfVxyXG5cclxuICAgICAgICA8Q29tbWVudE1vZGFsIC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vc2F1cmF2LnRlY2gvTmV3c0FQSS90b3AtaGVhZGxpbmVzL2NhdGVnb3J5L2J1c2luZXNzL3VzLmpzb25cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgbmV3c1Jlc3VsdHMgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9zYXVyYXYudGVjaC9OZXdzQVBJL3RvcC1oZWFkbGluZXMvY2F0ZWdvcnkvYnVzaW5lc3MvdXMuanNvblwiXHJcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG5cclxuICAvLyBXaG8gdG8gZm9sbG93IHNlY3Rpb25cclxuXHJcbiAgY29uc3QgcmFuZG9tVXNlcnNSZXN1bHRzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvP3Jlc3VsdHM9MzAmaW5jPW5hbWUsbG9naW4scGljdHVyZVwiXHJcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbmV3c1Jlc3VsdHMsXHJcbiAgICAgIHJhbmRvbVVzZXJzUmVzdWx0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXJyb3dMZWZ0SWNvbiIsIkhlYWQiLCJDb21tZW50TW9kYWwiLCJTaWRlYmFyIiwiV2lkZ2V0cyIsIlBvc3QiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJvblNuYXBzaG90Iiwib3JkZXJCeSIsInF1ZXJ5IiwiZGIiLCJDb21tZW50IiwiUG9zdFBhZ2UiLCJuZXdzUmVzdWx0cyIsInJhbmRvbVVzZXJzUmVzdWx0cyIsInJvdXRlciIsImlkIiwicG9zdCIsInNldFBvc3QiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic25hcHNob3QiLCJkb2NzIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsImgyIiwibGVuZ3RoIiwibWFwIiwiY29tbWVudCIsImNvbW1lbnRJZCIsIm9yaWdpbmFsUG9zdElkIiwiZGF0YSIsInVzZXJzUmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});