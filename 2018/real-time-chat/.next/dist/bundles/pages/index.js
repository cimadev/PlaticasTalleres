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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ChatBox_container_ChatBox__ = __webpack_require__("./src/ChatBox/container/ChatBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_App__ = __webpack_require__("./src/App/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_grid_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/pages/index.js';

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

      socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default()();
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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1972161259',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__src_App__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_grid_system__["Row"],
            { style: { marginLeft: 0, marginRight: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_grid_system__["Col"],
              { xs: 8, md: 8, style: { background: '#266e34', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_ChatBox_container_ChatBox__["a" /* default */], { socket: socket, connected: this.state.connected, messages: this.state.messages, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_grid_system__["Col"],
              { xs: 4, md: 4, style: { background: 'white', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_grid_system__["Row"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'h1',
                  {
                    className: 'jsx-1972161259',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    }
                  },
                  'Username'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { value: this.state.username, onChange: function onChange(e) {
                    return _this3.handleUsernameChange(e);
                  }, className: 'jsx-1972161259',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'button',
                  { onClick: this.handleLogin, className: 'jsx-1972161259',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  'Login'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { style: { widt: '100%', height: '100%', background: 'white' }, className: 'jsx-1972161259',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'h1',
                  {
                    className: 'jsx-1972161259',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    }
                  },
                  'Userlist'
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'h3',
                  {
                    className: 'jsx-1972161259',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    }
                  },
                  'Online users: ',
                  this.state.userCount
                ),
                this.state.onlineUsers.map(function (username, key) {
                  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    { key: key, className: 'jsx-1972161259' + ' ' + 'list-group-item',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                      }
                    },
                    username
                  );
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'h2',
                  {
                    className: 'jsx-1972161259',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    }
                  },
                  'User typing: ',
                  this.state.userTyping
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1972161259',
          css: '.list-group-item.jsx-1972161259{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125);}.list-group-item.jsx-1972161259:hover{z-index:1;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHb0IsQUFJK0IsQUFTUixVQUNXLFFBVFAsYUFVaEIsQ0FUeUIsdUJBQ0osbUJBQ0csc0JBQ1ksa0NBQ3BDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2x1aWdpL0Rlc2t0b3AvUGxhdGljYXNUYWxsZXJlcy8yMDE4L3JlYWwtdGltZS1jaGF0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXRCb3ggZnJvbSAnLi4vc3JjL0NoYXRCb3gvY29udGFpbmVyL0NoYXRCb3gnXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NyYy9BcHAnXG5pbXBvcnQgeyBSb3csIENvbH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xubGV0IHNvY2tldFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyQ291bnQ6ICdObyB1c2VycycsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBvbmxpbmVVc2VyczogWydDaW1hZGV2J10sXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgdXNlclR5cGluZzogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVVc2VybmFtZUNoYW5nZSA9IHRoaXMuaGFuZGxlVXNlcm5hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlTG9naW4gPSB0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcylcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgc29ja2V0ID0gaW8oKVxuICAgIHNvY2tldC5vbignbG9naW4nLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXJDb3VudDogZGF0YS51c2VyQ291bnQsXG4gICAgICAgIG9ubGluZVVzZXJzOiBkYXRhLm9ubGluZVVzZXJzLFxuICAgICAgICBtZXNzYWdlczogZGF0YS5tc2dEYixcbiAgICAgICAgY29ubmVjdGVkOiB0cnVlXG4gICAgICB9KVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCd1c2VyIGpvaW5lZCcsIChkYXRhKSA9PiB7XG4gICAgICBsZXQgam9pbmVkID0gdGhpcy5zdGF0ZS5vbmxpbmVVc2Vycy5jb25jYXQoZGF0YS51c2VyTmFtZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyQ291bnQ6IGRhdGEudXNlckNvdW50LFxuICAgICAgICBvbmxpbmVVc2Vyczogam9pbmVkXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgam9pbmVkOiAnLCBkYXRhLnVzZXJOYW1lKVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCd1c2VyIGxlZnQnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXJDb3VudDogZGF0YS51c2VyQ291bnQsXG4gICAgICAgIG9ubGluZVVzZXJzOiBkYXRhLm9ubGluZVVzZXJzXG4gICAgICB9KVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCduZXcgbWVzc2FnZScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbmV3IG1lc3NhZ2UgYXJyaXZlZCcpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IGRhdGEubXNnRGJcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3R5cGluZycsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlclR5cGluZzogZGF0YS51c2VyTmFtZVxuICAgICAgfSlcbiAgICB9KVxuICAgIHNvY2tldC5vbignc3RvcCB0eXBpbmcnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXJUeXBpbmc6ICcnXG4gICAgICB9KVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdzZW5kIG1lc3NhZ2UnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhLm1zZ0RiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVVc2VybmFtZUNoYW5nZSAoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUxvZ2luIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coYFVzZXIgJHt0aGlzLnN0YXRlLnVzZXJuYW1lfSBsb2dnZWQgaW5gKVxuICAgIHNvY2tldC5lbWl0KCdhZGQgdXNlcicsIHRoaXMuc3RhdGUudXNlcm5hbWUpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcD5cbiAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luTGVmdDogMCwgbWFyZ2luUmlnaHQ6IDB9fT5cbiAgICAgICAgICAgIDxDb2wgeHM9ezh9IG1kPXs4fSBzdHlsZT17e2JhY2tncm91bmQ6ICcjMjY2ZTM0JywgbWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgIDxDaGF0Qm94IHNvY2tldD17c29ja2V0fSBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfSBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17NH0gbWQ9ezR9IHN0eWxlPXt7YmFja2dyb3VuZDogJ3doaXRlJywgbWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPGgxPlVzZXJuYW1lPC9oMT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlVXNlcm5hbWVDaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHQ6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZSd9fT5cbiAgICAgICAgICAgICAgICA8aDE+VXNlcmxpc3Q8L2gxPiA8aDM+T25saW5lIHVzZXJzOiB7dGhpcy5zdGF0ZS51c2VyQ291bnR9PC9oMz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9ubGluZVVzZXJzLm1hcCgodXNlcm5hbWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2tleX0+e3VzZXJuYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxoMj5Vc2VyIHR5cGluZzoge3RoaXMuc3RhdGUudXNlclR5cGluZ308L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0FwcD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

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
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/src/App/index.js';

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
          css: '.container.jsx-1688225633{max-width:var(--site-width);margin:0 auto;overflow-y:hidden;overflow-x:hidden;height:100%;position:fixed;width:100%;}.wrapperHeight.jsx-1688225633{height:100%;}.content.jsx-1688225633{width:100%;height:calc(100% - 1px);}#header.jsx-1688225633{height:69px;position:fixed;width:100%;top:0;z-index:999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9BcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENXLEFBRzJDLEFBU2hCLEFBR0QsQUFJQyxXQUhXLENBSHpCLEFBT2lCLGVBQ0osQ0FqQkUsT0FhZixHQUtRLElBakJZLEVBa0JOLFlBQ2QsSUFsQm9CLGtCQUNOLFlBQ0csZUFDSixXQUNiIiwiZmlsZSI6InNyYy9BcHAvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVySGVpZ2h0Jz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVySGVpZ2h0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogdmFyKC0tc2l0ZS13aWR0aCk7XG4gICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud3JhcHBlckhlaWdodCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDpjYWxjKDEwMCUgLSAxcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjlweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=src/App/index.js */'
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/ChatBox/component/message.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/src/ChatBox/component/message.js';



var Message = function Message(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-2595102443' + ' ' + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-2595102443',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      props.message
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'span',
      {
        className: 'jsx-2595102443' + ' ' + 'time-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      props.username
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2595102443',
      css: '.messageBox.jsx-2595102443{width:100%;height:100%;}p.jsx-2595102443{font-size:large;}.container.jsx-2595102443{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0;width:100%;margin-right:10px;}.time-right.jsx-2595102443{float:right;color:#aaa;}.container.jsx-2595102443::after{content:"";clear:both;display:table;}.container.jsx-2595102443 img.jsx-2595102443{float:left;max-width:60px;width:100%;margin-right:20px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaGF0Qm94L2NvbXBvbmVudC9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1nQixBQUd3QixBQUlLLEFBR1MsQUFTYixBQUlDLEFBTUEsV0F6QkQsQUFvQkMsQUFNSSxDQVZOLElBWmIsTUFpQmtCLENBcEJsQixBQWdCQSxFQVYyQixDQW9CWixVQUxmLENBTXNCLGFBcEJGLEtBcUJFLGFBcEJQLEtBcUJmLFFBcEJnQixjQUNILFdBQ08sa0JBQ3BCIiwiZmlsZSI6InNyYy9DaGF0Qm94L2NvbXBvbmVudC9tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2x1aWdpL0Rlc2t0b3AvUGxhdGljYXNUYWxsZXJlcy8yMDE4L3JlYWwtdGltZS1jaGF0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNZXNzYWdlID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgIDxwPntwcm9wcy5tZXNzYWdlfTwvcD5cbiAgICA8c3BhbiBjbGFzc05hbWU9J3RpbWUtcmlnaHQnPntwcm9wcy51c2VybmFtZX08L3NwYW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tZXNzYWdlQm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpbWUtcmlnaHQge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIgaW1nIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcbiJdfQ== */\n/*@ sourceURL=src/ChatBox/component/message.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Message);

/***/ }),

/***/ "./src/ChatBox/container/ChatBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_message__ = __webpack_require__("./src/ChatBox/component/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/src/ChatBox/container/ChatBox.js';

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
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__component_message__["a" /* default */], { username: msg.userName, message: msg.msg, __source: {
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
          css: '.button.jsx-197036673{border-radius:4px;background-color:#f49320;border:none;color:#FFFFFF;text-align:center;font-size:28px;padding:20px;width:100%;max-width:200px;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;margin:5px;margin-left:15px;}.button.jsx-197036673 span.jsx-197036673{cursor:pointer;display:inline-block;position:relative;-webkit-transition:0.5s;transition:0.5s;}span.jsx-197036673{margin:0px;font-weight:800;}.button.jsx-197036673 span.jsx-197036673:after{content:\'\\0bb\';position:absolute;opacity:0;top:0;right:-20px;-webkit-transition:0.5s;transition:0.5s;align:center;}.button.jsx-197036673:hover span.jsx-197036673{padding-right:25px;}.button.jsx-197036673:hover span.jsx-197036673:after{opacity:1;right:0;}.wrapper.jsx-197036673{width:100%;height:100vh;}.jsx-197036673,.input-container.jsx-197036673{margin-top:15px;width:100%;}.chat-box-container.jsx-197036673{width:100%;height:80vh;overflow:scroll;overflow-x:hidden;margin-top:3%;}.jsx-197036673::-webkit-scrollbar{width:10px;}.jsx-197036673::-webkit-scrollbar-track{background:#276e34;}.jsx-197036673::-webkit-scrollbar-thumb{background:#f49320;border-radius:10px;}.jsx-197036673::-webkit-scrollbar-thumb:hover{background:#b30000;}input.jsx-197036673{height:34px;width:100%;border-radius:3px;border:1px solid transparent;border-top:none;border-bottom:1px solid #DDD;box-shadow:inset 0 1px 2px rgba(0,0,0,.39),0 -1px 1px #red,0 1px 0 #red;}.input__field.jsx-197036673{float:left;padding:0.8em;width:75%;font-size:17px;border:none;border-radius:4px;background:#f0f0f0;color:#black;font-weight:bold;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-appearance:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaGF0Qm94L2NvbnRhaW5lci9DaGF0Qm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFb0IsQUFJNkIsQUFnQkgsQUFNSixBQUtHLEFBVUssQUFJVCxBQUlHLEFBSUssQUFJTCxBQVNFLEFBS1EsQUFLRixBQU1FLEFBSVQsQUFVRixVQWxESixDQW5CUSxBQXVCRCxBQVFELEFBU2QsQUE4QmUsQ0FWRixHQWxFUSxBQVdILENBc0JMLEVBakRZLEFBMEMzQixDQUxBLEFBOEJFLEFBS3FCLEFBTXJCLElBeEJrQixBQTZCRSxDQXJDcEIsQ0ErQ1csRUF0RWIsQUEyQkUsTUF0QlUsRUFrRU8sQ0E3RUMsRUF3RGxCLENBbEJvQixFQTZCVyxFQW5GbkIsQUE0Qk4sTUFDTSxDQWlFQyxJQTdFRyxDQWhCRixFQXNERSxJQXpCQSxDQWlFRyxPQTdGRCxDQWtGQSxDQTVCbEIsU0F3Q29CLE1BWFcsQ0FsRmhCLE9BZWpCLEtBK0VnQixFQWxFRCxDQTNCQSxVQThGSyxFQWxFcEIsQ0EzQmEsQUFpRmlFLFdBaEY1RCxHQTZGNEMsYUE1RnhDLDJDQTZGSyxFQWJ6QixHQS9FZSxlQUNKLElBNEZYLE9BM0ZpQixpQkFDbkIiLCJmaWxlIjoic3JjL0NoYXRCb3gvY29udGFpbmVyL0NoYXRCb3guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnQvbWVzc2FnZSdcbmltcG9ydCB7Q29udGFpbmVyLCBSb3csIENvbH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICB0eXBpbmc6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVHlwaW5nID0gdGhpcy51cGRhdGVUeXBpbmcuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCduZXcgbWVzc2FnZScsIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMucmVmcy5tZXNzYWdlLnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVR5cGluZygpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHVwZGF0ZVR5cGluZygpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyB0eXBlcicpXG4gICAgbGV0IHR5cGluZ01heFRpbWUgPSAyNTAwIC8vbXNcbiAgICBpZih0aGlzLnByb3BzLmNvbm5lY3RlZCkge1xuICAgICAgaWYoIXRoaXMuc3RhdGUudHlwaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHR5cGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCd0eXBpbmcnKVxuICAgICAgfVxuICAgICAgbGV0IGxhc3RUeXBpbmdUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB0eXBpbmdUaW1lciA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgICAgbGV0IHRpbWVEaWZmID0gdHlwaW5nVGltZXItIGxhc3RUeXBpbmdUaW1lXG4gICAgICAgIGlmICh0aW1lRGlmZiA+PSB0eXBpbmdNYXhUaW1lICYmIHRoaXMuc3RhdGUudHlwaW5nKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnc3RvcCB0eXBpbmcnKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHR5cGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LCB0eXBpbmdNYXhUaW1lKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIlJvd1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogMCwgbWFyZ2luUmlnaHQ6IDB9fT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZXMubWFwKChtc2csIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1lc3NhZ2UgdXNlcm5hbWU9e21zZy51c2VyTmFtZX0gbWVzc2FnZT17bXNnLm1zZ30gLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfX2ZpZWxkIGlucHV0X19maWVsZC0tbWlub3J1XCJcbiAgICAgICAgICAgICAgcmVmPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj48c3Bhbj5TRU5EIDwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OTMyMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiBzcGFuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICBhbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGF0LWJveC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogd2lkdGggKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVHJhY2sgKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI3NmUzNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBIYW5kbGUgKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNDkzMjA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwuMzkpLCAwIC0xcHggMXB4ICNyZWQsIDAgMXB4IDAgI3JlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5wdXRfX2ZpZWxkIHtcbiAgICAgICAgICBcdGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIFx0cGFkZGluZzogMC44ZW07XG4gICAgICAgICAgXHR3aWR0aDogNzUlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIFx0Ym9yZGVyOiBub25lO1xuICAgICAgICAgIFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIFx0YmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICBcdGNvbG9yOiAjYmxhY2s7XG4gICAgICAgICAgXHRmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBcdGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIGZvciBib3ggc2hhZG93cyB0byBzaG93IG9uIGlPUyAqL1xuICAgICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=src/ChatBox/container/ChatBox.js */'
        })
      );
    }
  }]);

  return ChatBox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ChatBox);

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