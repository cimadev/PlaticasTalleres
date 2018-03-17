module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/components/App/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1688225633' + ' ' + 'wrapperHeight',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1688225633',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'style',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            '\n            body{\n              background-color: white;\n              width: 100%;\n              height: 100%;\n              margin: 0;\n              top: 0;\n              overflow-x: hidden;\n              overflow-y: hidden;\n              background-color: white;\n              font-family: \'Montserrat\', sans-serif;\n            }\n            html {\n              height: 100%;\n              width: 100%;\n              margin: 0;\n              top: 0;\n              box-sizing: border-box;\n              overflow-y: hidden;\n              font-family: \'Montserrat\', sans-serif;\n            }\n            #__next {\n              height: 100%;\n            }\n            .wrapperHeight {\n              height: 100%;\n            }\n            '
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1688225633' + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1688225633' + ' ' + 'content',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            this.props.children
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1688225633',
          css: '.container.jsx-1688225633{max-width:var(--site-width);margin:0 auto;overflow-y:hidden;overflow-x:hidden;height:100%;position:fixed;width:100%;}.wrapperHeight.jsx-1688225633{height:100%;}.content.jsx-1688225633{width:100%;height:calc(100% - 1px);}#header.jsx-1688225633{height:69px;position:fixed;width:100%;top:0;z-index:999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDVyxBQUcyQyxBQVNoQixBQUdELEFBSUMsV0FIVyxDQUh6QixBQU9pQixlQUNKLENBakJFLE9BYWYsR0FLUSxJQWpCWSxFQWtCTixZQUNkLElBbEJvQixrQkFDTixZQUNHLGVBQ0osV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL0FwcC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9sdWlnaS9EZXNrdG9wL1BsYXRpY2FzVGFsbGVyZXMvMjAxOC9yZWFsLXRpbWUtY2hhdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXJIZWlnaHQnPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLndyYXBwZXJIZWlnaHQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1zaXRlLXdpZHRoKTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVySGVpZ2h0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDFweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaGVhZGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2OXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/App/index.js */'
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./components/Chat_box/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__("./components/Chat_box/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/components/Chat_box/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ChatBox = function (_React$Component) {
  _inherits(ChatBox, _React$Component);

  function ChatBox(props) {
    _classCallCheck(this, ChatBox);

    var _this = _possibleConstructorReturn(this, (ChatBox.__proto__ || Object.getPrototypeOf(ChatBox)).call(this, props));

    _this.state = {
      inputValue: '',
      messages: _this.props.messages
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(ChatBox, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var username = 'Luis';
      var message = this.refs.message.value;
      this.setState({
        messages: this.state.messages.concat({ username: username, message: message }),
        inputValue: ''
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var filteredContacts = this.state.messages;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-197036673' + ' ' + 'wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'jsx-197036673',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-197036673' + ' ' + 'chat-box-container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
              { className: 'Row', style: { marginLeft: 0, marginRight: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              filteredContacts.map(function (_ref) {
                var username = _ref.username,
                    message = _ref.message;

                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* default */], { username: username, message: message, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                });
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-197036673' + ' ' + 'input-container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text',

              ref: 'message',
              onChange: this.handleInputChange,
              value: this.state.inputValue, className: 'jsx-197036673' + ' ' + 'input__field input__field--minoru',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { type: 'submit', className: 'jsx-197036673' + ' ' + 'button',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-197036673',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              'SEND '
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '197036673',
          css: '.button.jsx-197036673{border-radius:4px;background-color:#f49320;border:none;color:#FFFFFF;text-align:center;font-size:28px;padding:20px;width:100%;max-width:200px;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;margin:5px;margin-left:15px;}.button.jsx-197036673 span.jsx-197036673{cursor:pointer;display:inline-block;position:relative;-webkit-transition:0.5s;transition:0.5s;}span.jsx-197036673{margin:0px;font-weight:800;}.button.jsx-197036673 span.jsx-197036673:after{content:\'\\0bb\';position:absolute;opacity:0;top:0;right:-20px;-webkit-transition:0.5s;transition:0.5s;align:center;}.button.jsx-197036673:hover span.jsx-197036673{padding-right:25px;}.button.jsx-197036673:hover span.jsx-197036673:after{opacity:1;right:0;}.wrapper.jsx-197036673{width:100%;height:100vh;}.jsx-197036673,.input-container.jsx-197036673{margin-top:15px;width:100%;}.chat-box-container.jsx-197036673{width:100%;height:80vh;overflow:scroll;overflow-x:hidden;margin-top:3%;}.jsx-197036673::-webkit-scrollbar{width:10px;}.jsx-197036673::-webkit-scrollbar-track{background:#276e34;}.jsx-197036673::-webkit-scrollbar-thumb{background:#f49320;border-radius:10px;}.jsx-197036673::-webkit-scrollbar-thumb:hover{background:#b30000;}input.jsx-197036673{height:34px;width:100%;border-radius:3px;border:1px solid transparent;border-top:none;border-bottom:1px solid #DDD;box-shadow:inset 0 1px 2px rgba(0,0,0,.39),0 -1px 1px #red,0 1px 0 #red;}.input__field.jsx-197036673{float:left;padding:0.8em;width:75%;font-size:17px;border:none;border-radius:4px;background:#f0f0f0;color:#black;font-weight:bold;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-appearance:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdF9ib3gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RvQixBQUk2QixBQWdCSCxBQU1KLEFBS0csQUFVSyxBQUlULEFBSUcsQUFJSyxBQUlMLEFBU0UsQUFLUSxBQUtGLEFBTUUsQUFJVCxBQVVGLFVBbERKLENBbkJRLEFBdUJELEFBUUQsQUFTZCxBQThCZSxDQVZGLEdBbEVRLEFBV0gsQ0FzQkwsRUFqRFksQUEwQzNCLENBTEEsQUE4QkUsQUFLcUIsQUFNckIsSUF4QmtCLEFBNkJFLENBckNwQixDQStDVyxFQXRFYixBQTJCRSxNQXRCVSxFQWtFTyxDQTdFQyxFQXdEbEIsQ0FsQm9CLEVBNkJXLEVBbkZuQixBQTRCTixNQUNNLENBaUVDLElBN0VHLENBaEJGLEVBc0RFLElBekJBLENBaUVHLE9BN0ZELENBa0ZBLENBNUJsQixTQXdDb0IsTUFYVyxDQWxGaEIsT0FlakIsS0ErRWdCLEVBbEVELENBM0JBLFVBOEZLLEVBbEVwQixDQTNCYSxBQWlGaUUsV0FoRjVELEdBNkY0QyxhQTVGeEMsMkNBNkZLLEVBYnpCLEdBL0VlLGVBQ0osSUE0RlgsT0EzRmlCLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL0NoYXRfYm94L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2x1aWdpL0Rlc2t0b3AvUGxhdGljYXNUYWxsZXJlcy8yMDE4L3JlYWwtdGltZS1jaGF0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJ1xuaW1wb3J0IHtDb250YWluZXIsIFJvdywgQ29sfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgIG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHVzZXJuYW1lID0gJ0x1aXMnO1xuICAgIGxldCBtZXNzYWdlID0gdGhpcy5yZWZzLm1lc3NhZ2UudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IHRoaXMuc3RhdGUubWVzc2FnZXMuY29uY2F0KHt1c2VybmFtZSwgbWVzc2FnZX0pLFxuICAgICAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBmaWx0ZXJlZENvbnRhY3RzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiUm93XCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwLCBtYXJnaW5SaWdodDogMH19PlxuICAgICAgICAgICAgICB7ZmlsdGVyZWRDb250YWN0cy5tYXAoKHt1c2VybmFtZSwgbWVzc2FnZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZXNzYWdlIHVzZXJuYW1lPXt1c2VybmFtZX0gbWVzc2FnZT17bWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfX2ZpZWxkIGlucHV0X19maWVsZC0tbWlub3J1XCJcbiAgICAgICAgICAgICAgcmVmPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj48c3Bhbj5TRU5EIDwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OTMyMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiBzcGFuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICBhbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGF0LWJveC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogd2lkdGggKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVHJhY2sgKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI3NmUzNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBIYW5kbGUgKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNDkzMjA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwuMzkpLCAwIC0xcHggMXB4ICNyZWQsIDAgMXB4IDAgI3JlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5wdXRfX2ZpZWxkIHtcbiAgICAgICAgICBcdGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIFx0cGFkZGluZzogMC44ZW07XG4gICAgICAgICAgXHR3aWR0aDogNzUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIFx0Ym9yZGVyOiBub25lO1xuICAgICAgICAgIFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIFx0YmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICBcdGNvbG9yOiAjYmxhY2s7XG4gICAgICAgICAgXHRmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBcdGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIGZvciBib3ggc2hhZG93cyB0byBzaG93IG9uIGlPUyAqL1xuICAgICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Chat_box/index.js */'
        })
      );
    }
  }]);

  return ChatBox;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ChatBox);

/***/ }),

/***/ "./components/Chat_box/message.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_grid_system__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/components/Chat_box/message.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2595102443' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-2595102443',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          this.props.message
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          {
            className: 'jsx-2595102443' + ' ' + 'time-right',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          this.props.username
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2595102443',
          css: '.messageBox.jsx-2595102443{width:100%;height:100%;}p.jsx-2595102443{font-size:large;}.container.jsx-2595102443{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0;width:100%;margin-right:10px;}.time-right.jsx-2595102443{float:right;color:#aaa;}.container.jsx-2595102443::after{content:"";clear:both;display:table;}.container.jsx-2595102443 img.jsx-2595102443{float:left;max-width:60px;width:100%;margin-right:20px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdF9ib3gvbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTb0IsQUFHd0IsQUFJSyxBQUdTLEFBU2IsQUFJQyxBQU1BLFdBekJELEFBb0JDLEFBTUksQ0FWTixJQVpiLE1BaUJrQixDQXBCbEIsQUFnQkEsRUFWMkIsQ0FvQlosVUFMZixDQU1zQixhQXBCRixLQXFCRSxhQXBCUCxLQXFCZixRQXBCZ0IsY0FDSCxXQUNPLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL0NoYXRfYm94L21lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0NvbnRhaW5lciwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHA+e3RoaXMucHJvcHMubWVzc2FnZX08L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtcmlnaHRcIj57dGhpcy5wcm9wcy51c2VybmFtZX08L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVzc2FnZUJveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aW1lLXJpZ2h0IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Chat_box/message.js */'
        })
      );
    }
  }]);

  return Message;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Message);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Chat_box__ = __webpack_require__("./components/Chat_box/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__("./components/App/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var messages = [];

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
          { style: { marginLeft: 0, marginRight: 0 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
            { xs: 8, md: 8, style: { background: '#266e34', margin: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Chat_box__["a" /* default */], { messages: messages, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
            { xs: 4, md: 4, style: { background: 'white', margin: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { widt: '100%', height: '100%', background: 'white' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            })
          )
        )
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-grid-system":
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map