"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contacts/page",{

/***/ "(app-pages-browser)/./src/app/contacts/page.tsx":
/*!***********************************!*\
  !*** ./src/app/contacts/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_contactCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/contactCard */ \"(app-pages-browser)/./src/app/components/ui/contactCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [otherUsers, setOtherUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await fetch(\"http://localhost:4000/user/\".concat(localStorage.getItem(\"userid\")));\n            const user1 = await res.json();\n            console.log(user1);\n            setUser(user1.user);\n            await Promise.all(user.contacts.map(async (otherid)=>{\n                const newres = await fetch(\"http://localhost:4000/user/\".concat(otherid));\n                const other = await newres.json();\n                setOtherUsers((prev)=>[\n                        ...prev,\n                        other\n                    ]);\n            }));\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n            children: otherUsers.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_contactCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data._id,\n                    title: data.firstName,\n                    subtitle: data.authorityLevel\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"isU4QPqH6y9E1gjAg/6b+hkZBjU=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNnRDtBQUNNO0FBRXRELE1BQU1JLE9BQWlCOztJQUNuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWE7SUFDN0MsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFlLEVBQUU7SUFFN0RDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sWUFBWTtZQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4QkFBNkQsT0FBL0JDLGFBQWFDLE9BQU8sQ0FBQztZQUMzRSxNQUFNQyxRQUFRLE1BQU1KLElBQUlLLElBQUk7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWlIsUUFBUVEsTUFBTVQsSUFBSTtZQUVsQixNQUFNYSxRQUFRQyxHQUFHLENBQ2JkLEtBQUtlLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLE9BQU9DO2dCQUN2QixNQUFNQyxTQUFTLE1BQU1aLE1BQU0sOEJBQXNDLE9BQVJXO2dCQUN6RCxNQUFNRSxRQUFRLE1BQU1ELE9BQU9SLElBQUk7Z0JBQy9CUCxjQUFjLENBQUNpQixPQUFTOzJCQUFJQTt3QkFBTUQ7cUJBQU07WUFDMUM7UUFJUjtRQUVBZjtJQUNKLEdBQUcsRUFBRTtJQUNQLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWnBCLFdBQVdjLEdBQUcsQ0FBQyxDQUFDTyxNQUFNQyxzQkFDckIsOERBQUMxQixrRUFBV0E7b0JBQWEyQixJQUFJRixLQUFLRyxHQUFHO29CQUFFQyxPQUFPSixLQUFLSyxTQUFTO29CQUFFQyxVQUFVTixLQUFLTyxjQUFjO21CQUF6RU47Ozs7Ozs7Ozs7Ozs7OztBQUs1QjtHQWpDTXpCO0tBQUFBO0FBbUNOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGFjdHMvcGFnZS50c3g/MmU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhY3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdWkvY29udGFjdENhcmQnXHJcblxyXG5jb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW290aGVyVXNlcnMsIHNldE90aGVyVXNlcnNdID0gdXNlU3RhdGU8YW55W10gfCBudWxsPihbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VyLyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJpZCcpfWApO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyMSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIxKVxyXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIxLnVzZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICB1c2VyLmNvbnRhY3RzLm1hcChhc3luYyAob3RoZXJpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3VzZXIvJHtvdGhlcmlkfWApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvdGhlciA9IGF3YWl0IG5ld3Jlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE90aGVyVXNlcnMoKHByZXYpID0+IFsuLi5wcmV2LCBvdGhlcl0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgICAgICB7b3RoZXJVc2Vycy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q29udGFjdENhcmQga2V5PXtpbmRleH0gaWQ9e2RhdGEuX2lkfSB0aXRsZT17ZGF0YS5maXJzdE5hbWV9IHN1YnRpdGxlPXtkYXRhLmF1dGhvcml0eUxldmVsfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFjdENhcmQiLCJQYWdlIiwidXNlciIsInNldFVzZXIiLCJvdGhlclVzZXJzIiwic2V0T3RoZXJVc2VycyIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIxIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwiYWxsIiwiY29udGFjdHMiLCJtYXAiLCJvdGhlcmlkIiwibmV3cmVzIiwib3RoZXIiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YSIsImluZGV4IiwiaWQiLCJfaWQiLCJ0aXRsZSIsImZpcnN0TmFtZSIsInN1YnRpdGxlIiwiYXV0aG9yaXR5TGV2ZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contacts/page.tsx\n"));

/***/ })

});