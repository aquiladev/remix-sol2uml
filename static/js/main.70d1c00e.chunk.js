(this["webpackJsonpremix-sol2uml"] = this["webpackJsonpremix-sol2uml"] || []).push([[0],{

/***/ 147:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 425;

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(74);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@remixproject/plugin-webview/index.js
var plugin_webview = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/@remixproject/plugin/index.js
var _remixproject_plugin = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/@solidity-parser/parser/dist/index.cjs.js
var index_cjs = __webpack_require__(42);
var index_cjs_default = /*#__PURE__*/__webpack_require__.n(index_cjs);

// EXTERNAL MODULE: ./node_modules/sol2uml/lib/index.js
var lib = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/sol2uml/lib/parser.js
var parser = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/react-viewer/dist/index.js
var dist = __webpack_require__(151);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(433);

// CONCATENATED MODULE: ./src/App.js
function App_App(){console.debug('Plugin: remix-sol2uml: starting');var _React$useState=react_default.a.useState(null),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),client=_React$useState2[0],setClient=_React$useState2[1];var _React$useState3=react_default.a.useState(false),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),isClientLoaded=_React$useState4[0],setIsClientLoaded=_React$useState4[1];var _useState=Object(react["useState"])(undefined),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),svg=_useState2[0],setSvg=_useState2[1];Object(react["useEffect"])(function(){function init(){return _init.apply(this,arguments);}function _init(){_init=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(client){_context2.next=4;break;}setClient(Object(plugin_webview["createClient"])(new _remixproject_plugin["PluginClient"]()));_context2.next=9;break;case 4:_context2.next=6;return client.onload();case 6:setIsClientLoaded(true);console.debug('Plugin: remix-sol2uml: remix client loaded');client.on('solidity','compilationFinished',/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(target,source){var ast,umlClass,solSvg;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.debug('Plugin: remix-sol2uml: compilationFinished');ast=index_cjs_default.a.parse(source.sources[target].content);console.debug('Plugin: remix-sol2uml: AST',ast);umlClass=Object(parser["convertNodeToUmlClass"])(ast,target);_context.next=6;return Object(lib["convertUmlClassesToSvg"])(umlClass);case 6:solSvg=_context.sent;setSvg(solSvg.substr(solSvg.indexOf('<svg ')));case 8:case"end":return _context.stop();}}},_callee);}));return function(_x,_x2){return _ref.apply(this,arguments);};}());case 9:case"end":return _context2.stop();}}},_callee2);}));return _init.apply(this,arguments);}init();},[client]);return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"App",children:/*#__PURE__*/Object(jsx_runtime["jsx"])("header",{className:"App-header",children:client?/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:isClientLoaded?/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:svg?/*#__PURE__*/Object(jsx_runtime["jsx"])(dist_default.a,{visible:true,rotatable:false,loop:false,noClose:true,noFooter:true,showTotal:false,changeable:false,zoomSpeed:0.2,minScale:1,images:[{src:"data:image/svg+xml;base64,".concat(btoa(svg))}]}):/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("h2",{children:"This plugin generates UML diagrams for Solidity contracts."}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"small",children:["Instructions:",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),"1. Compile a smart contract.",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),"2. Come back here to view the diagram.",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),"Use the mouse to move the diagram.",/*#__PURE__*/Object(jsx_runtime["jsx"])("br",{}),"Use the scroll wheel to zoom."]})]})}):/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:["Waiting for connection to ",/*#__PURE__*/Object(jsx_runtime["jsx"])("a",{href:"https://remix.ethereum.org/",className:"App-link",children:"Remix"})]})}):/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:"Loading..."})})});}/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals=function reportWebVitals(onPerfEntry){if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 435)).then(function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.StrictMode,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(src_App,{})}),document.getElementById('root'));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[434,1,2]]]);
//# sourceMappingURL=main.70d1c00e.chunk.js.map