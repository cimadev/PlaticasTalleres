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
          className: 'jsx-1635333128' + ' ' + 'app-wrapper',
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
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1635333128',
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
            className: 'jsx-1635333128' + ' ' + 'content',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          this.props.children
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1635333128',
          css: '.container.jsx-1635333128{max-width:var(--site-width);margin:0 auto;overflow-y:hidden;overflow-x:hidden;height:100%;position:fixed;width:100%;}.app-wrapper.jsx-1635333128{height:100%;}.content.jsx-1635333128{width:100%;height:calc(100% - 1px);}#header.jsx-1635333128{height:69px;position:fixed;width:100%;top:0;z-index:999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDVyxBQUcyQyxBQVNoQixBQUdELEFBSUMsV0FIVyxDQUh6QixBQU9pQixlQUNKLENBakJFLE9BYWYsR0FLUSxJQWpCWSxFQWtCTixZQUNkLElBbEJvQixrQkFDTixZQUNHLGVBQ0osV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL0FwcC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9sdWlnaS9EZXNrdG9wL1BsYXRpY2FzVGFsbGVyZXMvMjAxOC9yZWFsLXRpbWUtY2hhdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcC13cmFwcGVyJz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVySGVpZ2h0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXNpdGUtd2lkdGgpO1xuICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFwcC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDFweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaGVhZGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2OXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/App/index.js */'
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
          className: 'jsx-4276785950' + ' ' + 'wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'jsx-4276785950',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-4276785950' + ' ' + 'chat-box-container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'ul',
              {
                className: 'jsx-4276785950',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              filteredContacts.map(function (_ref) {
                var username = _ref.username,
                    message = _ref.message;

                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'li',
                  {
                    className: 'jsx-4276785950',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-4276785950' + ' ' + 'span',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      }
                    },
                    message
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-4276785950' + ' ' + 'span-username',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      }
                    },
                    username
                  )
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
            { style: { marginTop: '5%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 8, md: 8, lg: 8, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-4276785950' + ' ' + 'input-container',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text',

                  ref: 'message',
                  onChange: this.handleInputChange,
                  value: this.state.inputValue, className: 'jsx-4276785950' + ' ' + 'input__field input__field--minoru',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 4, md: 4, lg: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'button',
                { type: 'submit', className: 'jsx-4276785950' + ' ' + 'button',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  {
                    className: 'jsx-4276785950',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    }
                  },
                  'SEND '
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '4276785950',
          css: '.button.jsx-4276785950{border-radius:4px;background-color:#f49320;border:none;color:#FFFFFF;text-align:center;font-size:28px;padding:20px 10px 20px 10px;width:100%;max-width:200px;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;margin:5px;}.button.jsx-4276785950 span.jsx-4276785950{cursor:pointer;display:inline-block;position:relative;-webkit-transition:0.5s;transition:0.5s;}span.jsx-4276785950{margin:0px;font-weight:800;}.button.jsx-4276785950 span.jsx-4276785950:after{content:\'\\0bb\';position:absolute;opacity:0;top:0;right:-20px;-webkit-transition:0.5s;transition:0.5s;align:center;}.button.jsx-4276785950:hover span.jsx-4276785950{padding-right:25px;}.button.jsx-4276785950:hover span.jsx-4276785950:after{opacity:1;right:0;}.wrapper.jsx-4276785950{width:100%;height:100vh;}.jsx-4276785950,.input-container.jsx-4276785950{width:100%;}.chat-box-container.jsx-4276785950{width:100%;height:80vh;overflow:scroll;overflow-x:hidden;margin-top:3%;padding-top:13px;background-color:#f1f1f1;padding-right:10px;border-radius:12px;}.jsx-4276785950::-webkit-scrollbar{width:10px;}.jsx-4276785950::-webkit-scrollbar-track{background:#276e34;}.jsx-4276785950::-webkit-scrollbar-thumb{background:#f49320;border-radius:10px;}.jsx-4276785950::-webkit-scrollbar-thumb:hover{background:#b30000;}input.jsx-4276785950{height:34px;width:100%;border-radius:3px;border:1px solid transparent;border-top:none;border-bottom:1px solid #DDD;box-shadow:inset 0 1px 2px rgba(0,0,0,.39),0 -1px 1px #red,0 1px 0 #red;}.input__field.jsx-4276785950{float:left;padding:0.8em;width:100%;margin-top:10px;font-size:17px;border:none;border-radius:4px;background:#f0f0f0;color:#black;font-weight:bold;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-appearance:none;}ul.jsx-4276785950{list-style:none;margin:0;padding:0;width:100%;height:100%;}li.jsx-4276785950{clear:both;padding-top:20px;padding-bottom:20px;border-radius:20px;margin-bottom:2px;width:97%;display:inline-block;list-style:none;margin-top:10px;float:right;background:#d2e8d8;border-width:medium;border-color:#276e34;border-style:solid;font-family:Helvetica,Arial,sans-serif;}.span.jsx-4276785950{margin-left:15px;float:left;width:85%;}.span-username.jsx-4276785950{float:left;width:85%;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdF9ib3gvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERvQixBQUk2QixBQWVILEFBTUosQUFLRyxBQVVLLEFBSVQsQUFJRyxBQUtBLEFBR0EsQUFhRSxBQUtRLEFBS0YsQUFNRSxBQUlULEFBVUYsQUFlTSxBQVFMLEFBaUJNLEFBS04sVUFuR0wsQ0FuQlEsQUF1QkQsQUFLZixBQUdjLEFBYWQsQUE4QmUsQUF3QmIsQUFxQlUsQ0F2REMsR0F0RVEsQUFXSCxDQW9GUCxDQXlCRSxDQXZJWSxBQXlDM0IsQ0FMQSxBQWtDRSxBQUtxQixBQU1yQixFQTREbUIsRUF4RkQsQUFpQ0UsQ0F4Q3BCLENBa0RZLEFBZUEsRUF6RmQsQ0FpR3dCLEFBaUJWLEtBN0dGLEVBcUZHLENBaEdLLEFBaUZBLEVBckJsQixBQTZEQSxBQUtBLENBeEZvQixFQWlDVyxFQXRGbkIsQUEyQk4sR0FxRlEsRUFPTyxDQTNGVCxHQXFFSyxFQWpGRCxDQWZGLEVBcURFLENBMkRoQixHQXBGZ0IsTUFxRUgsQUFzQk8sRUF0SEYsQ0FxRkEsQ0FoQ0MsUUE0Q0EsTUFzQlAsQ0FqQ21CLENBckZoQixDQXFEWSxNQXZDN0IsQ0F5R3dCLEVBdEJGLElBdEVQLENBMUJlLFdBcURQLENBMUJ2QixDQTBEOEUsQ0FZOUQsQUFzQkcsYUFyQkMsQ0FqR1AsRUFxRFUsQUFrRUgsU0F0SEYsS0FpRzRDLEVBc0I5QyxHQWxFZCxNQXBEb0IsR0F1SEMsbUJBQ0MsUUFyQ3RCLFlBc0N1QixHQXhCRSxHQWhHVixlQUNKLEFBd0hVLE1BeEJyQixLQS9GRixRQXdINkMsdUNBQzNDIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2hhdF9ib3gvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL21lc3NhZ2UnXG5pbXBvcnQge0NvbnRhaW5lciwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgbWVzc2FnZXM6IHRoaXMucHJvcHMubWVzc2FnZXNcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdXNlcm5hbWUgPSAnTHVpcyc7XG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnJlZnMubWVzc2FnZS52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZXNzYWdlczogdGhpcy5zdGF0ZS5tZXNzYWdlcy5jb25jYXQoe3VzZXJuYW1lLCBtZXNzYWdlfSksXG4gICAgICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IGZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZmlsdGVyZWRDb250YWN0cy5tYXAoKHt1c2VybmFtZSwgbWVzc2FnZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cInNwYW5cIj57bWVzc2FnZX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3Bhbi11c2VybmFtZVwiPnt1c2VybmFtZX08L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpblRvcDogJzUlJ319PlxuICAgICAgICAgICAgPENvbCB4cz17OH0gbWQ9ezh9IGxnPXs4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfX2ZpZWxkIGlucHV0X19maWVsZC0tbWlub3J1XCJcbiAgICAgICAgICAgICAgICAgIHJlZj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezR9IG1kPXs0fSBsZz17NH0+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPjxzcGFuPlNFTkQgPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDkzMjA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24gc3BhbiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnXFwwMGJiJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b246aG92ZXIgc3BhbiB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYXQtYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIHdpZHRoICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFRyYWNrICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzZlMzQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSGFuZGxlICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjQ5MzIwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IzMDAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjM5KSwgMCAtMXB4IDFweCAjcmVkLCAwIDFweCAwICNyZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlucHV0X19maWVsZCB7XG4gICAgICAgICAgXHRmbG9hdDogbGVmdDtcbiAgICAgICAgICBcdHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgIFx0d2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIFx0Ym9yZGVyOiBub25lO1xuICAgICAgICAgIFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIFx0YmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICBcdGNvbG9yOiAjYmxhY2s7XG4gICAgICAgICAgXHRmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBcdGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIGZvciBib3ggc2hhZG93cyB0byBzaG93IG9uIGlPUyAqL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVse1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHhcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDJlOGQ4O1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMyNzZlMzQ7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Bhbi11c2VybmFtZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Chat_box/index.js */'
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
          className: 'jsx-70817390' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-70817390',
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
            className: 'jsx-70817390' + ' ' + 'time-right',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          this.props.username
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '70817390',
          css: '.messageBox.jsx-70817390{width:100%;height:100%;}p.jsx-70817390{font-size:large;}.container.jsx-70817390{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;margin:10px 0;width:100%;margin-right:10px;}.time-right.jsx-70817390{float:right;color:#aaa;}.container.jsx-70817390::after{content:"";clear:both;display:table;}.container.jsx-70817390 img.jsx-70817390{float:left;max-width:60px;width:100%;margin-right:20px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdF9ib3gvbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTb0IsQUFHd0IsQUFJSyxBQUdTLEFBUWIsQUFJQyxBQU1BLFdBeEJELEFBbUJDLEFBTUksQ0FWTixJQVhiLE1BZ0JrQixDQW5CbEIsQUFlQSxFQVQyQixDQW1CWixVQUxmLENBTXNCLGFBbkJGLEtBb0JFLGFBbkJOLEtBb0JoQixTQW5CYSxXQUNPLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL0NoYXRfYm94L21lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0NvbnRhaW5lciwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHA+e3RoaXMucHJvcHMubWVzc2FnZX08L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtcmlnaHRcIj57dGhpcy5wcm9wcy51c2VybmFtZX08L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVzc2FnZUJveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpbWUtcmlnaHQge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIgaW1nIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Chat_box/message.js */'
        })
      );
    }
  }]);

  return Message;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Message);

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
            { xs: 12, md: 8, style: { background: '#266e34', margin: 0 }, __source: {
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
            { xs: 0, md: 4, style: { background: 'white', margin: 0 }, __source: {
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