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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ChatBox__ = __webpack_require__("./src/ChatBox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App__ = __webpack_require__("./src/App/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var socket = void 0;

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      userCount: 'No users',
      username: '',
      onlineUsers: ['Cimadev'],
      messages: [],
      connected: false,
      userTyping: ''
    };
    _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
    _this.handleLogin = _this.handleLogin.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default()();
      socket.on('login', function (data) {
        _this2.setState({
          userCount: data.userCount,
          onlineUsers: data.onlineUsers,
          messages: data.msgDb,
          connected: true
        });
      });
      socket.on('user joined', function (data) {
        var joined = _this2.state.onlineUsers.concat(data.userName);
        _this2.setState({
          userCount: data.userCount,
          onlineUsers: joined
        });
        console.log('User joined: ', data.userName);
      });
      socket.on('user left', function (data) {
        _this2.setState({
          userCount: data.userCount,
          onlineUsers: data.onlineUsers
        });
      });
      socket.on('new message', function (data) {
        console.log('new message arrived');
        _this2.setState({
          messages: data.msgDb
        });
      });
      socket.on('typing', function (data) {
        _this2.setState({
          userTyping: data.userName
        });
      });
      socket.on('stop typing', function (data) {
        _this2.setState({
          userTyping: ''
        });
      });
      socket.on('send message', function (data) {
        _this2.setState({
          messages: data.msgDb
        });
      });
    }
  }, {
    key: 'handleUsernameChange',
    value: function handleUsernameChange(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin(e) {
      e.preventDefault();
      console.log('User ' + this.state.username + ' logged in');
      socket.emit('add user', this.state.username);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__src_App__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
          { style: { marginLeft: 0, marginRight: 0 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
            { xs: 8, md: 8, style: { background: '#266e34', margin: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_ChatBox__["a" /* default */], { socket: socket, connected: this.state.connected, messages: this.state.messages, __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
            { xs: 4, md: 4, style: { background: 'white', margin: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                'Username'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.username, onChange: function onChange(e) {
                  return _this3.handleUsernameChange(e);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { onClick: this.handleLogin, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                'Login'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { widt: '100%', height: '100%', background: 'white' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  }
                },
                'Userlist'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  }
                },
                'Online users: ',
                this.state.userCount
              ),
              this.state.onlineUsers.map(function (username, key) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { key: key, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98
                    }
                  },
                  username
                );
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                  }
                },
                'User typing: ',
                this.state.userTyping
              )
            )
          )
        )
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ "./src/App/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/App/index.js';

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
          css: '.container.jsx-1688225633{max-width:var(--site-width);margin:0 auto;overflow-y:hidden;overflow-x:hidden;height:100%;position:fixed;width:100%;}.wrapperHeight.jsx-1688225633{height:100%;}.content.jsx-1688225633{width:100%;height:calc(100% - 1px);}#header.jsx-1688225633{height:69px;position:fixed;width:100%;top:0;z-index:999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9BcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENXLEFBRzJDLEFBU2hCLEFBR0QsQUFJQyxXQUhXLENBSHpCLEFBT2lCLGVBQ0osQ0FqQkUsT0FhZixHQUtRLElBakJZLEVBa0JOLFlBQ2QsSUFsQm9CLGtCQUNOLFlBQ0csZUFDSixXQUNiIiwiZmlsZSI6InNyYy9BcHAvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL2dpdGh1Yi9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVySGVpZ2h0Jz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVySGVpZ2h0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogdmFyKC0tc2l0ZS13aWR0aCk7XG4gICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud3JhcHBlckhlaWdodCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDpjYWxjKDEwMCUgLSAxcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjlweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=src/App/index.js */'
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/ChatBox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__("./src/ChatBox/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/ChatBox/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ChatBox = function (_Component) {
  _inherits(ChatBox, _Component);

  function ChatBox(props) {
    _classCallCheck(this, ChatBox);

    var _this = _possibleConstructorReturn(this, (ChatBox.__proto__ || Object.getPrototypeOf(ChatBox)).call(this, props));

    _this.state = {
      inputValue: '',
      typing: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.updateTyping = _this.updateTyping.bind(_this);
    return _this;
  }

  _createClass(ChatBox, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.socket.emit('new message', this.state.inputValue);
      var message = this.refs.message.value;
      this.setState({
        inputValue: ''
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.updateTyping();
      this.setState({ inputValue: event.target.value });
    }
  }, {
    key: 'updateTyping',
    value: function updateTyping() {
      var _this2 = this;

      console.log('setting typer');
      var typingMaxTime = 2500; //ms
      if (this.props.connected) {
        if (!this.state.typing) {
          this.setState({
            typing: true
          });
          this.props.socket.emit('typing');
        }
        var lastTypingTime = new Date().getTime();
        setTimeout(function () {
          var typingTimer = new Date().getTime();
          var timeDiff = typingTimer - lastTypingTime;
          if (timeDiff >= typingMaxTime && _this2.state.typing) {
            _this2.props.socket.emit('stop typing');
            _this2.setState({
              typing: false
            });
          }
        }, typingMaxTime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-197036673' + ' ' + 'wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'jsx-197036673',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-197036673' + ' ' + 'chat-box-container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
              { className: 'Row', style: { marginLeft: 0, marginRight: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              this.props.messages.map(function (msg, key) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* default */], { username: msg.userName, message: msg.msg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
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
                lineNumber: 66
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text',

              ref: 'message',
              onChange: this.handleInputChange,
              value: this.state.inputValue, className: 'jsx-197036673' + ' ' + 'input__field input__field--minoru',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { type: 'submit', className: 'jsx-197036673' + ' ' + 'button',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-197036673',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              },
              'SEND '
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '197036673',
          css: '.button.jsx-197036673{border-radius:4px;background-color:#f49320;border:none;color:#FFFFFF;text-align:center;font-size:28px;padding:20px;width:100%;max-width:200px;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;margin:5px;margin-left:15px;}.button.jsx-197036673 span.jsx-197036673{cursor:pointer;display:inline-block;position:relative;-webkit-transition:0.5s;transition:0.5s;}span.jsx-197036673{margin:0px;font-weight:800;}.button.jsx-197036673 span.jsx-197036673:after{content:\'\\0bb\';position:absolute;opacity:0;top:0;right:-20px;-webkit-transition:0.5s;transition:0.5s;align:center;}.button.jsx-197036673:hover span.jsx-197036673{padding-right:25px;}.button.jsx-197036673:hover span.jsx-197036673:after{opacity:1;right:0;}.wrapper.jsx-197036673{width:100%;height:100vh;}.jsx-197036673,.input-container.jsx-197036673{margin-top:15px;width:100%;}.chat-box-container.jsx-197036673{width:100%;height:80vh;overflow:scroll;overflow-x:hidden;margin-top:3%;}.jsx-197036673::-webkit-scrollbar{width:10px;}.jsx-197036673::-webkit-scrollbar-track{background:#276e34;}.jsx-197036673::-webkit-scrollbar-thumb{background:#f49320;border-radius:10px;}.jsx-197036673::-webkit-scrollbar-thumb:hover{background:#b30000;}input.jsx-197036673{height:34px;width:100%;border-radius:3px;border:1px solid transparent;border-top:none;border-bottom:1px solid #DDD;box-shadow:inset 0 1px 2px rgba(0,0,0,.39),0 -1px 1px #red,0 1px 0 #red;}.input__field.jsx-197036673{float:left;padding:0.8em;width:75%;font-size:17px;border:none;border-radius:4px;background:#f0f0f0;color:#black;font-weight:bold;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-appearance:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaGF0Qm94L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFb0IsQUFJNkIsQUFnQkgsQUFNSixBQUtHLEFBVUssQUFJVCxBQUlHLEFBSUssQUFJTCxBQVNFLEFBS1EsQUFLRixBQU1FLEFBSVQsQUFVRixVQWxESixDQW5CUSxBQXVCRCxBQVFELEFBU2QsQUE4QmUsQ0FWRixHQWxFUSxBQVdILENBc0JMLEVBakRZLEFBMEMzQixDQUxBLEFBOEJFLEFBS3FCLEFBTXJCLElBeEJrQixBQTZCRSxDQXJDcEIsQ0ErQ1csRUF0RWIsQUEyQkUsTUF0QlUsRUFrRU8sQ0E3RUMsRUF3RGxCLENBbEJvQixFQTZCVyxFQW5GbkIsQUE0Qk4sTUFDTSxDQWlFQyxJQTdFRyxDQWhCRixFQXNERSxJQXpCQSxDQWlFRyxPQTdGRCxDQWtGQSxDQTVCbEIsU0F3Q29CLE1BWFcsQ0FsRmhCLE9BZWpCLEtBK0VnQixFQWxFRCxDQTNCQSxVQThGSyxFQWxFcEIsQ0EzQmEsQUFpRmlFLFdBaEY1RCxHQTZGNEMsYUE1RnhDLDJDQTZGSyxFQWJ6QixHQS9FZSxlQUNKLElBNEZYLE9BM0ZpQixpQkFDbkIiLCJmaWxlIjoic3JjL0NoYXRCb3gvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL2dpdGh1Yi9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL21lc3NhZ2UnXG5pbXBvcnQge0NvbnRhaW5lciwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0Qm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0VmFsdWU6ICcnLFxuICAgICAgdHlwaW5nOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVR5cGluZyA9IHRoaXMudXBkYXRlVHlwaW5nLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnbmV3IG1lc3NhZ2UnLCB0aGlzLnN0YXRlLmlucHV0VmFsdWUpXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnJlZnMubWVzc2FnZS52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVUeXBpbmcoKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICB1cGRhdGVUeXBpbmcoKSB7XG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgdHlwZXInKVxuICAgIGxldCB0eXBpbmdNYXhUaW1lID0gMjUwMCAvL21zXG4gICAgaWYodGhpcy5wcm9wcy5jb25uZWN0ZWQpIHtcbiAgICAgIGlmKCF0aGlzLnN0YXRlLnR5cGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0eXBpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgndHlwaW5nJylcbiAgICAgIH1cbiAgICAgIGxldCBsYXN0VHlwaW5nVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdHlwaW5nVGltZXIgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgICAgIGxldCB0aW1lRGlmZiA9IHR5cGluZ1RpbWVyLSBsYXN0VHlwaW5nVGltZVxuICAgICAgICBpZiAodGltZURpZmYgPj0gdHlwaW5nTWF4VGltZSAmJiB0aGlzLnN0YXRlLnR5cGluZykge1xuICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoJ3N0b3AgdHlwaW5nJyk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0eXBpbmc6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSwgdHlwaW5nTWF4VGltZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYm94LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJSb3dcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDAsIG1hcmdpblJpZ2h0OiAwfX0+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcCgobXNnLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZXNzYWdlIHVzZXJuYW1lPXttc2cudXNlck5hbWV9IG1lc3NhZ2U9e21zZy5tc2d9IC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0X19maWVsZCBpbnB1dF9fZmllbGQtLW1pbm9ydVwiXG4gICAgICAgICAgICAgIHJlZj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLmlucHV0VmFsdWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+PHNwYW4+U0VORCA8L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDkzMjA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24gc3BhbiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnXFwwMGJiJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IC0yMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b246aG92ZXIgc3BhbiB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC5pbnB1dC1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhdC1ib3gtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIHdpZHRoICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFRyYWNrICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzZlMzQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSGFuZGxlICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjQ5MzIwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IzMDAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjM5KSwgMCAtMXB4IDFweCAjcmVkLCAwIDFweCAwICNyZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlucHV0X19maWVsZCB7XG4gICAgICAgICAgXHRmbG9hdDogbGVmdDtcbiAgICAgICAgICBcdHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgIFx0d2lkdGg6IDc1JTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBcdGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBcdGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBcdGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgXHRjb2xvcjogI2JsYWNrO1xuICAgICAgICAgIFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgXHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBmb3IgYm94IHNoYWRvd3MgdG8gc2hvdyBvbiBpT1MgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=src/ChatBox/index.js */'
        })
      );
    }
  }]);

  return ChatBox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ChatBox);

/***/ }),

/***/ "./src/ChatBox/message.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/ChatBox/message.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Message = function (_Component) {
  _inherits(Message, _Component);

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
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: 'jsx-2595102443',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
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
              lineNumber: 8
            }
          },
          this.props.username
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2595102443',
          css: '.messageBox.jsx-2595102443{width:100%;height:100%;}p.jsx-2595102443{font-size:large;}.container.jsx-2595102443{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0;width:100%;margin-right:10px;}.time-right.jsx-2595102443{float:right;color:#aaa;}.container.jsx-2595102443::after{content:"";clear:both;display:table;}.container.jsx-2595102443 img.jsx-2595102443{float:left;max-width:60px;width:100%;margin-right:20px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaGF0Qm94L21lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW9CLEFBR3dCLEFBSUssQUFHUyxBQVNiLEFBSUMsQUFNQSxXQXpCRCxBQW9CQyxBQU1JLENBVk4sSUFaYixNQWlCa0IsQ0FwQmxCLEFBZ0JBLEVBVjJCLENBb0JaLFVBTGYsQ0FNc0IsYUFwQkYsS0FxQkUsYUFwQlAsS0FxQmYsUUFwQmdCLGNBQ0gsV0FDTyxrQkFDcEIiLCJmaWxlIjoic3JjL0NoYXRCb3gvbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tcmhvcnNlL0Rlc2t0b3AvZ2l0aHViL1BsYXRpY2FzVGFsbGVyZXMvMjAxOC9yZWFsLXRpbWUtY2hhdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8cD57dGhpcy5wcm9wcy5tZXNzYWdlfTwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aW1lLXJpZ2h0Jz57dGhpcy5wcm9wcy51c2VybmFtZX08L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWVzc2FnZUJveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aW1lLXJpZ2h0IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=src/ChatBox/message.js */'
        })
      );
    }
  }]);

  return Message;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Message);

/***/ }),

/***/ 3:
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

/***/ "socket.io-client":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map