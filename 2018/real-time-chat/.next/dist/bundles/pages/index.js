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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ChatBox_container_ChatBox__ = __webpack_require__("./src/ChatBox/container/ChatBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App__ = __webpack_require__("./src/App/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("react-grid-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Login_components_login__ = __webpack_require__("./src/Login/components/login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_awesome_modal__ = __webpack_require__("react-awesome-modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_awesome_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_awesome_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
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

    _this.handleUsernameChange = function (e) {
      _this.setState({
        username: e.target.value
      });
    };

    _this.handleLogin = function (e) {
      e.preventDefault();
      console.log('User ' + _this.state.username + ' logged in');
      socket.emit('add user', _this.state.username);
      _this.closeModal();
    };

    _this.openModal = function () {
      console.log('activation');
      _this.setState({
        modalVisible: true
      });
    };

    _this.closeModal = function () {
      _this.setState({
        modalVisible: false
      });
    };

    _this.state = {
      userCount: 'No users',
      username: '',
      onlineUsers: ['Cimadev'],
      messages: [],
      connected: false,
      userTyping: '',
      modalVisible: false
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      socket = __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default()();
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
      this.openModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1309551143',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__src_App__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'section',
            {
              className: 'jsx-1309551143',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_awesome_modal___default.a,
              { visible: this.state.modalVisible, width: '400', height: '380px', effect: 'fadeInUp', onClickAway: function onClickAway() {
                  return _this3.closeModal();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1309551143',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_Login_components_login__["a" /* default */], {
                  username: this.state.username,
                  handleUsernameChange: this.handleUsernameChange,
                  handleLogin: this.handleLogin, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
            { style: { marginLeft: 0, marginRight: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 12, md: 8, style: { background: '#266e34', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_ChatBox_container_ChatBox__["a" /* default */], { socket: socket, connected: this.state.connected, messages: this.state.messages, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 0, md: 4, style: { background: 'white', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { style: { widt: '100%', height: '100%', background: 'white' }, className: 'jsx-1309551143',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'h1',
                  {
                    className: 'jsx-1309551143',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117
                    }
                  },
                  'Userlist'
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'h3',
                  {
                    className: 'jsx-1309551143',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117
                    }
                  },
                  'Online users: ',
                  this.state.userCount
                ),
                this.state.onlineUsers.map(function (username, key) {
                  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    { key: key, className: 'jsx-1309551143' + ' ' + 'list-group-item',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                      }
                    },
                    username
                  );
                }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'h2',
                  {
                    className: 'jsx-1309551143',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 125
                    }
                  },
                  'User typing: ',
                  this.state.userTyping
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1309551143',
          css: '.list-group-item.jsx-1309551143{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125);}.list-group-item.jsx-1309551143:hover{z-index:1;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJb0IsQUFHK0IsQUFTUixVQUNXLFFBVFAsY0FDUyx1QkFDSixLQVFyQixjQVB3QixzQkFDWSxrQ0FDcEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhdEJveCBmcm9tICcuLi9zcmMvQ2hhdEJveC9jb250YWluZXIvQ2hhdEJveCdcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL0FwcCdcbmltcG9ydCB7IFJvdywgQ29sfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSdcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9zcmMvTG9naW4vY29tcG9uZW50cy9sb2dpbidcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1hd2Vzb21lLW1vZGFsJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xubGV0IHNvY2tldFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyQ291bnQ6ICdObyB1c2VycycsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBvbmxpbmVVc2VyczogWydDaW1hZGV2J10sXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgdXNlclR5cGluZzogJycsXG4gICAgICBtb2RhbFZpc2libGU6IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBzb2NrZXQgPSBpbygpXG4gICAgc29ja2V0Lm9uKCdsb2dpbicsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlckNvdW50OiBkYXRhLnVzZXJDb3VudCxcbiAgICAgICAgb25saW5lVXNlcnM6IGRhdGEub25saW5lVXNlcnMsXG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhLm1zZ0RiLFxuICAgICAgICBjb25uZWN0ZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3VzZXIgam9pbmVkJywgKGRhdGEpID0+IHtcbiAgICAgIGxldCBqb2luZWQgPSB0aGlzLnN0YXRlLm9ubGluZVVzZXJzLmNvbmNhdChkYXRhLnVzZXJOYW1lKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXJDb3VudDogZGF0YS51c2VyQ291bnQsXG4gICAgICAgIG9ubGluZVVzZXJzOiBqb2luZWRcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnVXNlciBqb2luZWQ6ICcsIGRhdGEudXNlck5hbWUpXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3VzZXIgbGVmdCcsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlckNvdW50OiBkYXRhLnVzZXJDb3VudCxcbiAgICAgICAgb25saW5lVXNlcnM6IGRhdGEub25saW5lVXNlcnNcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ25ldyBtZXNzYWdlJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXcgbWVzc2FnZSBhcnJpdmVkJylcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogZGF0YS5tc2dEYlxuICAgICAgfSlcbiAgICB9KVxuICAgIHNvY2tldC5vbigndHlwaW5nJywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyVHlwaW5nOiBkYXRhLnVzZXJOYW1lXG4gICAgICB9KVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdzdG9wIHR5cGluZycsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlclR5cGluZzogJydcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3NlbmQgbWVzc2FnZScsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IGRhdGEubXNnRGJcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLm9wZW5Nb2RhbCgpXG4gIH1cblxuICBoYW5kbGVVc2VybmFtZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTG9naW4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKGBVc2VyICR7dGhpcy5zdGF0ZS51c2VybmFtZX0gbG9nZ2VkIGluYClcbiAgICBzb2NrZXQuZW1pdCgnYWRkIHVzZXInLCB0aGlzLnN0YXRlLnVzZXJuYW1lKVxuICAgIHRoaXMuY2xvc2VNb2RhbCgpXG4gIH1cblxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2YXRpb24nKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxWaXNpYmxlIDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxWaXNpYmxlIDogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcD5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPE1vZGFsIHZpc2libGU9e3RoaXMuc3RhdGUubW9kYWxWaXNpYmxlfSB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjM4MHB4XCIgZWZmZWN0PVwiZmFkZUluVXBcIiBvbkNsaWNrQXdheT17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExvZ2luXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgaGFuZGxlVXNlcm5hbWVDaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcm5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgaGFuZGxlTG9naW49e3RoaXMuaGFuZGxlTG9naW59IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbkxlZnQ6IDAsIG1hcmdpblJpZ2h0OiAwfX0+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezh9IHN0eWxlPXt7YmFja2dyb3VuZDogJyMyNjZlMzQnLCBtYXJnaW46IDB9fT5cbiAgICAgICAgICAgICAgPENoYXRCb3ggc29ja2V0PXtzb2NrZXR9IGNvbm5lY3RlZD17dGhpcy5zdGF0ZS5jb25uZWN0ZWR9IG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPXswfSBtZD17NH0gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnd2hpdGUnLCBtYXJnaW46IDB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHQ6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGJhY2tncm91bmQ6ICd3aGl0ZSd9fT5cbiAgICAgICAgICAgICAgICA8aDE+VXNlcmxpc3Q8L2gxPiA8aDM+T25saW5lIHVzZXJzOiB7dGhpcy5zdGF0ZS51c2VyQ291bnR9PC9oMz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9ubGluZVVzZXJzLm1hcCgodXNlcm5hbWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2tleX0+e3VzZXJuYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxoMj5Vc2VyIHR5cGluZzoge3RoaXMuc3RhdGUudXNlclR5cGluZ308L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0FwcD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

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
          css: '.container.jsx-1635333128{max-width:var(--site-width);margin:0 auto;overflow-y:hidden;overflow-x:hidden;height:100%;position:fixed;width:100%;}.app-wrapper.jsx-1635333128{height:100%;}.content.jsx-1635333128{width:100%;height:calc(100% - 1px);}#header.jsx-1635333128{height:69px;position:fixed;width:100%;top:0;z-index:999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9BcHAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENXLEFBRzJDLEFBU2hCLEFBR0QsQUFJQyxXQUhXLENBSHpCLEFBT2lCLGVBQ0osQ0FqQkUsT0FhZixHQUtRLElBakJZLEVBa0JOLFlBQ2QsSUFsQm9CLGtCQUNOLFlBQ0csZUFDSixXQUNiIiwiZmlsZSI6InNyYy9BcHAvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHAtd3JhcHBlcic+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud3JhcHBlckhlaWdodCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1zaXRlLXdpZHRoKTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcHAtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDpjYWxjKDEwMCUgLSAxcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogNjlweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=src/App/index.js */'
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
      className: 'jsx-63852907' + ' ' + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        className: 'jsx-63852907',
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
        className: 'jsx-63852907' + ' ' + 'time-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      props.username
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '63852907',
      css: '.messageBox.jsx-63852907{width:100%;height:100%;}p.jsx-63852907{font-size:large;margin-left:20px;}.container.jsx-63852907{clear:both;border-radius:20px;margin-bottom:2px;width:97%;display:inline-block;list-style:none;margin-top:10px;margin-left:18px;margin-right:18px;float:right;background:#d2e8d8;font-family:Helvetica,Arial,sans-serif;}.time-right.jsx-63852907{float:right;color:#f49320;margin-right:20px;margin-bottom:10px;}.container.jsx-63852907::after{content:"";clear:both;display:table;}.container.jsx-63852907 img.jsx-63852907{float:left;max-width:60px;width:100%;margin-right:20px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaGF0Qm94L2NvbXBvbmVudC9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1nQixBQUd3QixBQUlLLEFBSUosQUFjQSxBQU1DLEFBTUEsV0FqQ0QsQUFRUyxBQW9CUixBQU1JLENBWkgsSUFsQkcsTUF5QkQsQ0E1QmxCLEdBc0JvQixBQVlMLElBMUJPLEdBSnRCLEdBeUJBLENBTXNCLE9BWkQsSUFkUCxPQTJCUSxHQTFCRSxLQWN4QixVQWFBLE1BMUJtQixnQkFDQyxnQkFDQyxpQkFDQyxrQkFDTixZQUNPLG1CQUNzQix1Q0FDN0MiLCJmaWxlIjoic3JjL0NoYXRCb3gvY29tcG9uZW50L21lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IE1lc3NhZ2UgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgPHA+e3Byb3BzLm1lc3NhZ2V9PC9wPlxuICAgIDxzcGFuIGNsYXNzTmFtZT0ndGltZS1yaWdodCc+e3Byb3BzLnVzZXJuYW1lfTwvc3Bhbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lc3NhZ2VCb3gge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgICB3aWR0aDogOTclO1xuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkMmU4ZDg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGltZS1yaWdodCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogI2Y0OTMyMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIgaW1nIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcbiJdfQ== */\n/*@ sourceURL=src/ChatBox/component/message.js */'
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
          className: 'jsx-774371041' + ' ' + 'wrapper',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'jsx-774371041',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-774371041' + ' ' + 'chat-box-container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
              { className: 'Row', style: { marginLeft: 0, marginRight: 0, paddingBottom: 50 }, __source: {
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
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
            { style: { marginTop: '3%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 8, md: 8, lg: 8, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-774371041' + ' ' + 'input-container',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text',

                  ref: 'message',
                  onChange: this.handleInputChange,
                  value: this.state.inputValue, className: 'jsx-774371041' + ' ' + 'input__field input__field--minoru',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 4, md: 4, lg: 4, style: { paddingLeft: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'button',
                { type: 'submit', className: 'jsx-774371041' + ' ' + 'button',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  {
                    className: 'jsx-774371041',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  'SEND '
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '774371041',
          css: '.button.jsx-774371041{border-radius:4px;background-color:#f49320;border:none;color:#FFFFFF;text-align:center;font-size:28px;max-height:65px;margin-top:10px;padding-top:18px;padding-right:10px;padding-left:10px;padding-bottom:13px;width:100%;max-width:200px;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;}.button.jsx-774371041 span.jsx-774371041{cursor:pointer;display:inline-block;position:relative;-webkit-transition:0.5s;transition:0.5s;}span.jsx-774371041{margin:0px;font-weight:800;}.button.jsx-774371041 span.jsx-774371041:after{content:\'\\0bb\';position:absolute;opacity:0;top:0;right:-20px;-webkit-transition:0.5s;transition:0.5s;align:center;}.button.jsx-774371041:hover span.jsx-774371041{padding-right:25px;}.button.jsx-774371041:hover span.jsx-774371041:after{opacity:1;right:0;}.wrapper.jsx-774371041{width:100%;height:100vh;}.jsx-774371041,.input-container.jsx-774371041{width:100%;}.chat-box-container.jsx-774371041{width:100%;height:80vh;overflow:scroll;overflow-x:hidden;margin-top:3%;padding-top:13px;background-color:#f1f1f1;padding-right:10px;border-radius:12px;}.jsx-774371041::-webkit-scrollbar{width:10px;}.jsx-774371041::-webkit-scrollbar-track{background:#276e34;}.jsx-774371041::-webkit-scrollbar-thumb{background:#f49320;border-radius:10px;}.jsx-774371041::-webkit-scrollbar-thumb:hover{background:#b30000;}input.jsx-774371041{height:34px;width:100%;border-radius:3px;border:1px solid transparent;border-top:none;border-bottom:1px solid #DDD;box-shadow:inset 0 1px 2px rgba(0,0,0,.39),0 -1px 1px #red,0 1px 0 #red;}.input__field.jsx-774371041{float:left;padding-top:.8em;padding-bottom:.8em;width:100%;margin-top:10px;font-size:17px;border:none;border-radius:4px;background:#f0f0f0;color:#black;font-weight:bold;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-appearance:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaGF0Qm94L2NvbnRhaW5lci9DaGF0Qm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFJNkIsQUFtQkgsQUFNSixBQUtHLEFBVUssQUFJVCxBQUlHLEFBSUEsQUFHQSxBQWFFLEFBS1EsQUFLRixBQU1FLEFBSVQsQUFVRixVQXJESixDQW5CUSxBQXVCRCxBQUlmLEFBR2MsQUFhZCxBQThCa0IsQ0FWTCxHQXJFUSxBQVdILEdBOUJPLEFBNkMzQixDQUxBLEFBaUNFLEFBS3FCLEFBTXJCLElBNUJrQixBQWlDRSxDQXhDcEIsR0F2QkYsQ0F5RXdCLEtBcEVaLEdBWFEsRUEyRGxCLENBdEJvQixFQWlDVyxFQXpGbkIsQUErQk4sS0FvRU8sQ0FuRUQsS0FaSSxDQW5CRixFQXdERSxFQTJDRSxFQW5FRixRQS9CRSxDQXdGQSxDQWhDQyxJQTJDRixXQVZjLENBeEZoQixDQXdEWSxFQTJDZCxJQWpGZixPQWFlLENBOUJHLEFBbUdHLFdBM0NFLENBekJ2QixDQXlEOEUsR0F2RjVELEVBbUdJLFlBM0NDLEVBdkRKLEtBbUdILFlBbEdLLEFBdURuQixDQTRDa0IsaUJBQzBDLENBbkcxQyxpQkFxRmxCLENBcEZvQixvQkFDVCxXQUNLLE1BaUdTLFVBaEdMLGNBaUdwQixrQ0FoR2UsZUFDakIiLCJmaWxlIjoic3JjL0NoYXRCb3gvY29udGFpbmVyL0NoYXRCb3guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbHVpZ2kvRGVza3RvcC9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnQvbWVzc2FnZSdcbmltcG9ydCB7Q29udGFpbmVyLCBSb3csIENvbH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICB0eXBpbmc6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVHlwaW5nID0gdGhpcy51cGRhdGVUeXBpbmcuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCduZXcgbWVzc2FnZScsIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMucmVmcy5tZXNzYWdlLnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVR5cGluZygpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHVwZGF0ZVR5cGluZygpIHtcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyB0eXBlcicpXG4gICAgbGV0IHR5cGluZ01heFRpbWUgPSAyNTAwIC8vbXNcbiAgICBpZih0aGlzLnByb3BzLmNvbm5lY3RlZCkge1xuICAgICAgaWYoIXRoaXMuc3RhdGUudHlwaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHR5cGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KCd0eXBpbmcnKVxuICAgICAgfVxuICAgICAgbGV0IGxhc3RUeXBpbmdUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB0eXBpbmdUaW1lciA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgICAgbGV0IHRpbWVEaWZmID0gdHlwaW5nVGltZXItIGxhc3RUeXBpbmdUaW1lXG4gICAgICAgIGlmICh0aW1lRGlmZiA+PSB0eXBpbmdNYXhUaW1lICYmIHRoaXMuc3RhdGUudHlwaW5nKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdCgnc3RvcCB0eXBpbmcnKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHR5cGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LCB0eXBpbmdNYXhUaW1lKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1ib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIlJvd1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogMCwgbWFyZ2luUmlnaHQ6IDAsIHBhZGRpbmdCb3R0b206IDUwfX0+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcCgobXNnLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZXNzYWdlIHVzZXJuYW1lPXttc2cudXNlck5hbWV9IG1lc3NhZ2U9e21zZy5tc2d9IC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpblRvcDogJzMlJ319PlxuICAgICAgICAgICAgICA8Q29sIHhzPXs4fSBtZD17OH0gbGc9ezh9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9fZmllbGQgaW5wdXRfX2ZpZWxkLS1taW5vcnVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCB4cz17NH0gbWQ9ezR9IGxnPXs0fSBzdHlsZT17e3BhZGRpbmdMZWZ0OiAwfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+PHNwYW4+U0VORCA8L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDkzMjA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogNjVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiBzcGFuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICBhbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYXQtYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIHdpZHRoICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFRyYWNrICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzZlMzQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSGFuZGxlICovXG4gICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjQ5MzIwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IzMDAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjM5KSwgMCAtMXB4IDFweCAjcmVkLCAwIDFweCAwICNyZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlucHV0X19maWVsZCB7XG4gICAgICAgICAgXHRmbG9hdDogbGVmdDtcbiAgICAgICAgICBcdHBhZGRpbmctdG9wOiAuOGVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC44ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgXHRib3JkZXI6IG5vbmU7XG4gICAgICAgICAgXHRib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgXHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICAgIFx0Y29sb3I6ICNibGFjaztcbiAgICAgICAgICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIFx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogZm9yIGJveCBzaGFkb3dzIHRvIHNob3cgb24gaU9TICovXG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=src/ChatBox/container/ChatBox.js */'
        })
      );
    }
  }]);

  return ChatBox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ChatBox);

/***/ }),

/***/ "./src/Login/components/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/src/Login/components/login.js';



var Login = function Login(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-2059154562',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
                className: 'jsx-2059154562' + ' ' + 'logo',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/cimadev.png', width: '100%', height: '100', className: 'jsx-2059154562',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
                className: 'jsx-2059154562' + ' ' + 'login-block',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h1',
                {
                    className: 'jsx-2059154562',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                'Login'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { value: props.username, onChange: function onChange(e) {
                    return props.handleUsernameChange(e);
                }, className: 'jsx-2059154562',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'button',
                { onClick: props.handleLogin, className: 'jsx-2059154562',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                'Login'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2059154562',
            css: '.logo.jsx-2059154562{width:213px;background:url(\'/static/cimadev.png\') no-repeat;margin:30px auto;}.login-block.jsx-2059154562{width:320px;padding:20px;background:#fff;border-radius:5px;border-top:5px solid #076E3D;margin:0 auto;}.login-block.jsx-2059154562 h1.jsx-2059154562{text-align:center;color:#000;font-size:18px;text-transform:uppercase;margin-top:0;margin-bottom:20px;}.login-block.jsx-2059154562 input.jsx-2059154562{width:100%;height:42px;box-sizing:border-box;border-radius:5px;border:1px solid #ccc;margin-bottom:20px;font-size:14px;font-family:Montserrat;padding:0 20px 0 50px;outline:none;}.login-block.jsx-2059154562 input#username.jsx-2059154562{background:#076E3D url(\'http://i.imgur.com/u0XmBmv.png\') 20px top no-repeat;background-size:16px 80px;}.login-block.jsx-2059154562 input#username.jsx-2059154562:focus{background:#076E3D url(\'http://i.imgur.com/u0XmBmv.png\') 20px bottom no-repeat;background-size:16px 80px;}.login-block.jsx-2059154562 input.jsx-2059154562:active,.login-block.jsx-2059154562 input.jsx-2059154562:focus{border:1px solid #ff656c;}.login-block.jsx-2059154562 button.jsx-2059154562{width:100%;height:40px;background:#076E3D;box-sizing:border-box;border-radius:5px;border:1px solid #e15960;color:#fff;font-weight:bold;text-transform:uppercase;font-size:14px;font-family:Montserrat;outline:none;cursor:pointer;}.login-block.jsx-2059154562 button.jsx-2059154562:hover{background:#ff7b81;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Mb2dpbi9jb21wb25lbnRzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVljLEFBR3FCLEFBTUEsQUFTTSxBQVNQLEFBYWlFLEFBS0csQUFLdEQsQUFJZCxBQWdCUSxXQTFDUCxBQTJCQSxDQW5Eb0MsQUFNbkMsTUFTRixDQW9EZixJQTFDMEIsQUEyQkgsRUE3Q0gsQUF3Q3BCLElBL0JtQixZQVJHLENBNkNJLEVBcENHLENBU1AsY0FqQlcsQ0FSWixHQTBCSyxDQTJCSixLQXBDTCxPQW1CYSxDQW5DOUIsRUF3QzhCLEdBdkJQLEFBb0NNLEdBM0JOLEdBbEJMLGFBVWxCLENBVEEsQUEyQkEsRUFUbUIsQ0FjbkIsRUFhZSxXQUNNLENBM0JNLGdCQTRCRSxPQTNCSCxrQkE0QlAsSUEzQkYsV0E0QlUsRUEzQjNCLHFCQTRCaUIsYUFDRSxlQUNuQiIsImZpbGUiOiJzcmMvTG9naW4vY29tcG9uZW50cy9sb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9sdWlnaS9EZXNrdG9wL1BsYXRpY2FzVGFsbGVyZXMvMjAxOC9yZWFsLXRpbWUtY2hhdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgIDxpbWcgc3JjPScvc3RhdGljL2NpbWFkZXYucG5nJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAnLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJsb2NrXCI+XG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvcHMudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZVVzZXJuYW1lQ2hhbmdlKGUpfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8c3R5bGUganN4PntgXG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMjEzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9jaW1hZGV2LnBuZycpIG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDc2RTNEO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAubG9naW4tYmxvY2sgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCA1MHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC5sb2dpbi1ibG9jayBpbnB1dCN1c2VybmFtZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNzZFM0QgdXJsKCdodHRwOi8vaS5pbWd1ci5jb20vdTBYbUJtdi5wbmcnKSAyMHB4IHRvcCBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCA4MHB4O1xuICAgIH1cblxuICAgIC5sb2dpbi1ibG9jayBpbnB1dCN1c2VybmFtZTpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNzZFM0QgdXJsKCdodHRwOi8vaS5pbWd1ci5jb20vdTBYbUJtdi5wbmcnKSAyMHB4IGJvdHRvbSBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCA4MHB4O1xuICAgIH1cblxuICAgIC5sb2dpbi1ibG9jayBpbnB1dDphY3RpdmUsIC5sb2dpbi1ibG9jayBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjY1NmM7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNzZFM0Q7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxNTk2MDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjdiODE7XG4gICAgfVxuXG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXX0= */\n/*@ sourceURL=src/Login/components/login.js */'
        })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

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

/***/ "react-awesome-modal":
/***/ (function(module, exports) {

module.exports = require("react-awesome-modal");

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