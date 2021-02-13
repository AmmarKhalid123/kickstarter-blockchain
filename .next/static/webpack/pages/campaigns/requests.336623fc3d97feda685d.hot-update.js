webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RequestRow; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\nvar _jsxFileName = \"/home/ammar/blockchain/ethereum complete dev guide/kickstart/components/RequestRow.js\";\n\n\n\n\nfunction RequestRow(_ref) {\n  var request = _ref.request,\n      id = _ref.id,\n      address = _ref.address,\n      approversCount = _ref.approversCount;\n  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Table\"].Row,\n      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Table\"].Cell;\n\n  var onApprove = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var campaign, accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(address);\n              _context.prev = 1;\n              _context.next = 4;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n\n            case 4:\n              accounts = _context.sent;\n              console.log(accounts);\n              _context.next = 8;\n              return campaign.methods.approveRequest(id).send({\n                from: accounts[0]\n              });\n\n            case 8:\n              _context.next = 13;\n              break;\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 10]]);\n    }));\n\n    return function onApprove() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Row, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Cell, {\n      children: id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Cell, {\n      children: request.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Cell, {\n      children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.fromWei(request.value, 'ether')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Cell, {\n      children: request.recipient\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Cell, {\n      children: \"\".concat(request.approvalCount, \"/\").concat(approversCount)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Cell, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        color: \"green\",\n        basic: true,\n        onClick: onApprove,\n        children: \"Approve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n_c = RequestRow;\n\nvar _c;\n\n$RefreshReg$(_c, \"RequestRow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2M0MGUiXSwibmFtZXMiOlsiUmVxdWVzdFJvdyIsInJlcXVlc3QiLCJpZCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQTJEO0FBQUEsTUFBdENDLE9BQXNDLFFBQXRDQSxPQUFzQztBQUFBLE1BQTdCQyxFQUE2QixRQUE3QkEsRUFBNkI7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLGNBQWdCLFFBQWhCQSxjQUFnQjtBQUFBLE1BQzlEQyxHQUQ4RCxHQUNoREMsdURBRGdELENBQzlERCxHQUQ4RDtBQUFBLE1BQ3pERSxJQUR5RCxHQUNoREQsdURBRGdELENBQ3pEQyxJQUR5RDs7QUFFdEUsTUFBTUMsU0FBUztBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxzQkFEUSxHQUNHQyxrRUFBUSxDQUFDUCxPQUFELENBRFg7QUFBQTtBQUFBO0FBQUEscUJBR2FRLHNEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUhiOztBQUFBO0FBR0pDLHNCQUhJO0FBSVZDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUpVO0FBQUEscUJBS0pMLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkMsY0FBakIsQ0FBZ0NoQixFQUFoQyxFQUFvQ2lCLElBQXBDLENBQXlDO0FBQzNDQyxvQkFBSSxFQUFHTixRQUFRLENBQUMsQ0FBRDtBQUQ0QixlQUF6QyxDQUxJOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTVkMscUJBQU8sQ0FBQ0MsR0FBUjs7QUFUVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUUixTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBWUEsc0JBQ0kscUVBQUMsR0FBRDtBQUFBLDRCQUNJLHFFQUFDLElBQUQ7QUFBQSxnQkFBT047QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxJQUFEO0FBQUEsZ0JBQU9ELE9BQU8sQ0FBQ29CO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0kscUVBQUMsSUFBRDtBQUFBLGdCQUFPVixzREFBSSxDQUFDVyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ0QixPQUFPLENBQUN1QixLQUEzQixFQUFrQyxPQUFsQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLHFFQUFDLElBQUQ7QUFBQSxnQkFBT3ZCLE9BQU8sQ0FBQ3dCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0kscUVBQUMsSUFBRDtBQUFBLDBCQUFVeEIsT0FBTyxDQUFDeUIsYUFBbEIsY0FBbUN0QixjQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JLHFFQUFDLElBQUQ7QUFBQSw2QkFDQSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxPQUFkO0FBQXNCLGFBQUssTUFBM0I7QUFBNEIsZUFBTyxFQUFFSSxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIO0tBNUJ1QlIsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0Um93KHtyZXF1ZXN0LCBpZCwgYWRkcmVzcywgYXBwcm92ZXJzQ291bnR9KXtcbiAgICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XG4gICAgY29uc3Qgb25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KGlkKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tIDogYWNjb3VudHNbMF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxuICAgICAgICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCAnZXRoZXInKX08L0NlbGw+XG4gICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxuICAgICAgICAgICAgPENlbGw+e2Ake3JlcXVlc3QuYXBwcm92YWxDb3VudH0vJHthcHByb3ZlcnNDb3VudH1gfTwvQ2VsbD5cbiAgICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17b25BcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICB7LyogPENlbGw+PEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWM+UmVqZWN0PC9CdXR0b24+PC9DZWxsPiAqL31cblxuICAgICAgICA8L1Jvdz5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

})