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

/***/ "./components/menu/menu.tsx":
/*!**********************************!*\
  !*** ./components/menu/menu.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _link_a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/a */ \"./components/link/a.tsx\");\n/* harmony import */ var _menu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.module.scss */ \"./components/menu/menu.module.scss\");\n/* harmony import */ var _menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n// import { useState } from \"react\";\n\n\n\nvar _s = $RefreshSig$();\nvar LIST_MENU_ITEM;\n(function(LIST_MENU_ITEM) {\n    LIST_MENU_ITEM[\"HOME\"] = \"\";\n    LIST_MENU_ITEM[\"OUR_MISSION\"] = \"our_mission\";\n    LIST_MENU_ITEM[\"PLACES\"] = \"places\";\n    LIST_MENU_ITEM[\"TEAM\"] = \"team\";\n})(LIST_MENU_ITEM || (LIST_MENU_ITEM = {}));\nvar isActive = function(section, router) {\n    if (router.asPath === \"/\" && !section) return true;\n    var arr = router.asPath.split(\"/\");\n    return arr.includes(section) && section;\n};\nvar Menu = function() {\n    _s();\n    // const [isMobileMenu, setIsMobileMenu] = useState(false);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/assets/Logo.png\",\n                                srcSet: \"/assets/Logo.png 1x, /assets/Logo2x.png 2x\",\n                                alt: \"nature needs logo\"\n                            }, void 0, false, {\n                                fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().navigate),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().flex),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/\",\n                                            classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                            classNameTwo: isActive(LIST_MENU_ITEM.HOME, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/our_mission\",\n                                            classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                            classNameTwo: isActive(LIST_MENU_ITEM.OUR_MISSION, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                            children: \"Our mission\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/places\",\n                                            classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                            classNameTwo: isActive(LIST_MENU_ITEM.PLACES, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                            children: \"Places\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/team\",\n                                            classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                            classNameTwo: isActive(LIST_MENU_ITEM.TEAM, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                            children: \"Team\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().apply),\n                                children: \"Apply\"\n                            }, void 0, false, {\n                                fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mobileMenuWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mobileNavigate),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().flex),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/\",\n                                        classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                        classNameTwo: isActive(LIST_MENU_ITEM.HOME, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/our_mission\",\n                                        classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                        classNameTwo: isActive(LIST_MENU_ITEM.OUR_MISSION, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                        children: \"Our mission\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/places\",\n                                        classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                        classNameTwo: isActive(LIST_MENU_ITEM.PLACES, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                        children: \"Places\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/team\",\n                                        classNameOne: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                        classNameTwo: isActive(LIST_MENU_ITEM.TEAM, router) ? (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                        children: \"Team\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: (_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().apply),\n                        children: \"Apply\"\n                    }, void 0, false, {\n                        fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/slava/projects/halolabNextjs/components/menu/menu.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Menu, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxFQUFFN0IsK0RBQVc7d0NBQ3pCK0IsWUFBWSxFQUNWekIsUUFBUSxDQUFDTCxjQUFjLENBQUNHLE1BQU0sRUFBRUksTUFBTSxDQUFDLEdBQUdSLGlFQUFhLEdBQUcsRUFBRTtrREFFL0QsUUFFRDs7Ozs7NkNBQUk7Ozs7O3lDQUNEOzhDQUNMLDhEQUFDMEIsSUFBRTtvQ0FBQ1gsU0FBUyxFQUFFZixtRUFBZTs4Q0FDNUIsNEVBQUNELCtDQUFDO3dDQUNBNkIsSUFBSSxFQUFDLE9BQU87d0NBQ1pDLFlBQVksRUFBRTdCLCtEQUFXO3dDQUN6QitCLFlBQVksRUFDVnpCLFFBQVEsQ0FBQ0wsY0FBYyxDQUFDSSxJQUFJLEVBQUVHLE1BQU0sQ0FBQyxHQUFHUixpRUFBYSxHQUFHLEVBQUU7a0RBRTdELE1BRUQ7Ozs7OzZDQUFJOzs7Ozt5Q0FDRDs7Ozs7O2lDQUNGOzs7Ozs2QkFDRDtrQ0FDTiw4REFBQ2lDLFFBQU07d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDbkIsU0FBUyxFQUFFZixnRUFBWTtrQ0FBRSxPQUUvQzs7Ozs7NkJBQVM7Ozs7OztxQkFDTDs7b0JBQ0wsQ0FDSDtDQUNIO0dBaklLYSxJQUFJOztRQUVPZixrREFBUzs7O0FBRnBCZSxLQUFBQSxJQUFJO0FBbUlWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L21lbnUudHN4PzVlMGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciwgTmV4dFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgQSBmcm9tIFwiLi4vbGluay9hXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWVudS5tb2R1bGUuc2Nzc1wiO1xuXG5lbnVtIExJU1RfTUVOVV9JVEVNIHtcbiAgSE9NRSA9IFwiXCIsXG4gIE9VUl9NSVNTSU9OID0gXCJvdXJfbWlzc2lvblwiLFxuICBQTEFDRVMgPSBcInBsYWNlc1wiLFxuICBURUFNID0gXCJ0ZWFtXCIsXG59XG5cbmNvbnN0IGlzQWN0aXZlID0gKHNlY3Rpb246IHN0cmluZywgcm91dGVyOiBOZXh0Um91dGVyKSA9PiB7XG4gIGlmIChyb3V0ZXIuYXNQYXRoID09PSBcIi9cIiAmJiAhc2VjdGlvbikgcmV0dXJuIHRydWU7XG4gIGNvbnN0IGFyciA9IHJvdXRlci5hc1BhdGguc3BsaXQoXCIvXCIpO1xuICByZXR1cm4gYXJyLmluY2x1ZGVzKHNlY3Rpb24pICYmIHNlY3Rpb247XG59O1xuXG5jb25zdCBNZW51ID0gKCkgPT4ge1xuICAvLyBjb25zdCBbaXNNb2JpbGVNZW51LCBzZXRJc01vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVXcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL0xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgc3JjU2V0PXtcIi9hc3NldHMvTG9nby5wbmcgMXgsIC9hc3NldHMvTG9nbzJ4LnBuZyAyeFwifVxuICAgICAgICAgICAgICBhbHQ9XCJuYXR1cmUgbmVlZHMgbG9nb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGV9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PlxuICAgICAgICAgICAgICAgIDxBXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWVPbmU9e3N0eWxlcy5saW5rfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lVHdvPXtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUoTElTVF9NRU5VX0lURU0uSE9NRSwgcm91dGVyKSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvQT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfT5cbiAgICAgICAgICAgICAgICA8QVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdXJfbWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWVPbmU9e3N0eWxlcy5saW5rfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lVHdvPXtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUoTElTVF9NRU5VX0lURU0uT1VSX01JU1NJT04sIHJvdXRlcilcbiAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBPdXIgbWlzc2lvblxuICAgICAgICAgICAgICAgIDwvQT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfT5cbiAgICAgICAgICAgICAgICA8QVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wbGFjZXNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT25lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVR3bz17XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlKExJU1RfTUVOVV9JVEVNLlBMQUNFUywgcm91dGVyKSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGxhY2VzXG4gICAgICAgICAgICAgICAgPC9BPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PlxuICAgICAgICAgICAgICAgIDxBXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3RlYW1cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lT25lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVR3bz17XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlKExJU1RfTUVOVV9JVEVNLlRFQU0sIHJvdXRlcikgPyBzdHlsZXMuYWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICAgICAgICA8L0E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5hcHBseX0+XG4gICAgICAgICAgICAgIEFwcGx5XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlTWVudVdyYXBwZXJ9PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZU5hdmlnYXRlfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZmxleH0+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PlxuICAgICAgICAgICAgICA8QVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVPbmU9e3N0eWxlcy5saW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVR3bz17XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZShMSVNUX01FTlVfSVRFTS5IT01FLCByb3V0ZXIpID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvQT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19PlxuICAgICAgICAgICAgICA8QVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvb3VyX21pc3Npb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZU9uZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lVHdvPXtcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlKExJU1RfTUVOVV9JVEVNLk9VUl9NSVNTSU9OLCByb3V0ZXIpXG4gICAgICAgICAgICAgICAgICAgID8gc3R5bGVzLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPdXIgbWlzc2lvblxuICAgICAgICAgICAgICA8L0E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfT5cbiAgICAgICAgICAgICAgPEFcbiAgICAgICAgICAgICAgICBocmVmPVwiL3BsYWNlc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lT25lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWVUd289e1xuICAgICAgICAgICAgICAgICAgaXNBY3RpdmUoTElTVF9NRU5VX0lURU0uUExBQ0VTLCByb3V0ZXIpID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQbGFjZXNcbiAgICAgICAgICAgICAgPC9BPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+XG4gICAgICAgICAgICAgIDxBXG4gICAgICAgICAgICAgICAgaHJlZj1cIi90ZWFtXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVPbmU9e3N0eWxlcy5saW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVR3bz17XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZShMSVNUX01FTlVfSVRFTS5URUFNLCByb3V0ZXIpID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZWFtXG4gICAgICAgICAgICAgIDwvQT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmFwcGx5fT5cbiAgICAgICAgICBBcHBseVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBIiwic3R5bGVzIiwiTElTVF9NRU5VX0lURU0iLCJIT01FIiwiT1VSX01JU1NJT04iLCJQTEFDRVMiLCJURUFNIiwiaXNBY3RpdmUiLCJzZWN0aW9uIiwicm91dGVyIiwiYXNQYXRoIiwiYXJyIiwic3BsaXQiLCJpbmNsdWRlcyIsIk1lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwibWVudVdyYXBwZXIiLCJpbWciLCJzcmMiLCJzcmNTZXQiLCJhbHQiLCJuYXYiLCJuYXZpZ2F0ZSIsInVsIiwiZmxleCIsImxpIiwibWVudUl0ZW0iLCJocmVmIiwiY2xhc3NOYW1lT25lIiwibGluayIsImNsYXNzTmFtZVR3byIsImFjdGl2ZSIsImJ1dHRvbiIsInR5cGUiLCJhcHBseSIsIm1vYmlsZU1lbnVXcmFwcGVyIiwibW9iaWxlTmF2aWdhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu/menu.tsx\n"));

/***/ })

});