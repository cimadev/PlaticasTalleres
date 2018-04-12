webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ChatBox_container_ChatBox__ = __webpack_require__("./src/ChatBox/container/ChatBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App__ = __webpack_require__("./src/App/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("./node_modules/react-grid-system/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Login_components_login__ = __webpack_require__("./src/Login/components/login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_awesome_modal__ = __webpack_require__("./node_modules/react-awesome-modal/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_awesome_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_awesome_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var socket = void 0;

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.handleUsernameChange = function (e) {
      _this.setState({
        username: e.target.value
      });
    };

    _this.handleLogin = function (e) {
      e.preventDefault();
      console.log('User ' + _this.state.username + ' logged in');
      socket.emit('add user', _this.state.username);
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

  _createClass(_default, [{
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
            lineNumber: 97
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__src_App__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
            { style: { marginLeft: 0, marginRight: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 8, md: 8, style: { background: '#266e34', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_ChatBox_container_ChatBox__["a" /* default */], { socket: socket, connected: this.state.connected, messages: this.state.messages, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 4, md: 4, style: { background: 'white', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', { type: 'button', value: 'Open', onClick: function onClick() {
                    return _this3.openModal;
                  }, className: 'jsx-1309551143',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_react_awesome_modal___default.a,
                  { visible: this.state.visible, width: '400', height: '300', effect: 'fadeInUp', onClickAway: function onClickAway() {
                      return _this3.closeModal();
                    }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'div',
                    {
                      className: 'jsx-1309551143',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_Login_components_login__["a" /* default */], {
                      username: this.state.username,
                      handleUsernameChange: this.handleUsernameChange,
                      handleLogin: this.handleLogin, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'a',
                      { href: 'javascript:void(0);', onClick: function onClick() {
                          return _this3.closeModal();
                        }, className: 'jsx-1309551143',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 112
                        }
                      },
                      'Close'
                    )
                  )
                )
              ),
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
          css: '.list-group-item.jsx-1309551143{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125);}.list-group-item.jsx-1309551143:hover{z-index:1;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJb0IsQUFHK0IsQUFTUixVQUNXLFFBVFAsY0FDUyx1QkFDSixLQVFyQixjQVB3QixzQkFDWSxrQ0FDcEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL2dpdGh1Yi9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhdEJveCBmcm9tICcuLi9zcmMvQ2hhdEJveC9jb250YWluZXIvQ2hhdEJveCdcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL0FwcCdcbmltcG9ydCB7IFJvdywgQ29sfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSdcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9zcmMvTG9naW4vY29tcG9uZW50cy9sb2dpbidcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1hd2Vzb21lLW1vZGFsJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xubGV0IHNvY2tldFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyQ291bnQ6ICdObyB1c2VycycsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBvbmxpbmVVc2VyczogWydDaW1hZGV2J10sXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgdXNlclR5cGluZzogJycsXG4gICAgICBtb2RhbFZpc2libGU6IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBzb2NrZXQgPSBpbygpXG4gICAgc29ja2V0Lm9uKCdsb2dpbicsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlckNvdW50OiBkYXRhLnVzZXJDb3VudCxcbiAgICAgICAgb25saW5lVXNlcnM6IGRhdGEub25saW5lVXNlcnMsXG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhLm1zZ0RiLFxuICAgICAgICBjb25uZWN0ZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3VzZXIgam9pbmVkJywgKGRhdGEpID0+IHtcbiAgICAgIGxldCBqb2luZWQgPSB0aGlzLnN0YXRlLm9ubGluZVVzZXJzLmNvbmNhdChkYXRhLnVzZXJOYW1lKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXJDb3VudDogZGF0YS51c2VyQ291bnQsXG4gICAgICAgIG9ubGluZVVzZXJzOiBqb2luZWRcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnVXNlciBqb2luZWQ6ICcsIGRhdGEudXNlck5hbWUpXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3VzZXIgbGVmdCcsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlckNvdW50OiBkYXRhLnVzZXJDb3VudCxcbiAgICAgICAgb25saW5lVXNlcnM6IGRhdGEub25saW5lVXNlcnNcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ25ldyBtZXNzYWdlJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXcgbWVzc2FnZSBhcnJpdmVkJylcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogZGF0YS5tc2dEYlxuICAgICAgfSlcbiAgICB9KVxuICAgIHNvY2tldC5vbigndHlwaW5nJywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyVHlwaW5nOiBkYXRhLnVzZXJOYW1lXG4gICAgICB9KVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdzdG9wIHR5cGluZycsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlclR5cGluZzogJydcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3NlbmQgbWVzc2FnZScsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IGRhdGEubXNnRGJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVVzZXJuYW1lQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coYFVzZXIgJHt0aGlzLnN0YXRlLnVzZXJuYW1lfSBsb2dnZWQgaW5gKVxuICAgIHNvY2tldC5lbWl0KCdhZGQgdXNlcicsIHRoaXMuc3RhdGUudXNlcm5hbWUpXG4gIH1cblxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2YXRpb24nKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxWaXNpYmxlIDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxWaXNpYmxlIDogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcD5cbiAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luTGVmdDogMCwgbWFyZ2luUmlnaHQ6IDB9fT5cbiAgICAgICAgICAgIDxDb2wgeHM9ezh9IG1kPXs4fSBzdHlsZT17e2JhY2tncm91bmQ6ICcjMjY2ZTM0JywgbWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgIDxDaGF0Qm94IHNvY2tldD17c29ja2V0fSBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfSBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17NH0gbWQ9ezR9IHN0eWxlPXt7YmFja2dyb3VuZDogJ3doaXRlJywgbWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIk9wZW5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9wZW5Nb2RhbH0gLz5cbiAgICAgICAgICAgICAgICA8TW9kYWwgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfSB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjMwMFwiIGVmZmVjdD1cImZhZGVJblVwXCIgb25DbGlja0F3YXk9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMb2dpblxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVVzZXJuYW1lQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJuYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUxvZ2luPXt0aGlzLmhhbmRsZUxvZ2lufSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PkNsb3NlPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0OiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnfX0+XG4gICAgICAgICAgICAgICAgPGgxPlVzZXJsaXN0PC9oMT4gPGgzPk9ubGluZSB1c2Vyczoge3RoaXMuc3RhdGUudXNlckNvdW50fTwvaDM+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vbmxpbmVVc2Vycy5tYXAoKHVzZXJuYW1lLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXtrZXl9Pnt1c2VybmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8aDI+VXNlciB0eXBpbmc6IHt0aGlzLnN0YXRlLnVzZXJUeXBpbmd9PC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9BcHA+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(socket, 'socket', '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/index.js');
  reactHotLoader.register(_default, 'default', '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.6ddf0517f6e7f55e68d0.hot-update.js.map