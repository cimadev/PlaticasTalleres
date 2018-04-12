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
            'section',
            {
              className: 'jsx-1309551143',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-1309551143',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                }
              },
              'React-Modal Examples'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', { type: 'button', value: 'Open', onClick: function onClick() {
                return _this3.openModal();
              }, className: 'jsx-1309551143',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_awesome_modal___default.a,
              { visible: this.state.visible, width: '400', height: '300', effect: 'fadeInUp', onClickAway: function onClickAway() {
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
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'h1',
                  {
                    className: 'jsx-1309551143',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 104
                    }
                  },
                  'Title'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-1309551143',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
                    }
                  },
                  'Some Contents'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'a',
                  { href: 'javascript:void(0);', onClick: function onClick() {
                      return _this3.closeModal();
                    }, className: 'jsx-1309551143',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    }
                  },
                  'Close'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
            { style: { marginLeft: 0, marginRight: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 8, md: 8, style: { background: '#266e34', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_ChatBox_container_ChatBox__["a" /* default */], { socket: socket, connected: this.state.connected, messages: this.state.messages, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Col"],
              { xs: 4, md: 4, style: { background: 'white', margin: 0 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_grid_system__["Row"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                  }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', { type: 'button', value: 'Open', onClick: this.openModal, className: 'jsx-1309551143',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { style: { widt: '100%', height: '100%', background: 'white' }, className: 'jsx-1309551143',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                  }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'h1',
                  {
                    className: 'jsx-1309551143',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 119
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
                      lineNumber: 119
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
                        lineNumber: 123
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
                      lineNumber: 127
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
          css: '.list-group-item.jsx-1309551143{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125);}.list-group-item.jsx-1309551143:hover{z-index:1;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Jb0IsQUFHK0IsQUFTUixVQUNXLFFBVFAsY0FDUyx1QkFDSixLQVFyQixjQVB3QixzQkFDWSxrQ0FDcEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbXJob3JzZS9EZXNrdG9wL2dpdGh1Yi9QbGF0aWNhc1RhbGxlcmVzLzIwMTgvcmVhbC10aW1lLWNoYXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhdEJveCBmcm9tICcuLi9zcmMvQ2hhdEJveC9jb250YWluZXIvQ2hhdEJveCdcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL0FwcCdcbmltcG9ydCB7IFJvdywgQ29sfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSdcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9zcmMvTG9naW4vY29tcG9uZW50cy9sb2dpbidcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1hd2Vzb21lLW1vZGFsJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xubGV0IHNvY2tldFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyQ291bnQ6ICdObyB1c2VycycsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBvbmxpbmVVc2VyczogWydDaW1hZGV2J10sXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgdXNlclR5cGluZzogJycsXG4gICAgICBtb2RhbFZpc2libGU6IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBzb2NrZXQgPSBpbygpXG4gICAgc29ja2V0Lm9uKCdsb2dpbicsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlckNvdW50OiBkYXRhLnVzZXJDb3VudCxcbiAgICAgICAgb25saW5lVXNlcnM6IGRhdGEub25saW5lVXNlcnMsXG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhLm1zZ0RiLFxuICAgICAgICBjb25uZWN0ZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3VzZXIgam9pbmVkJywgKGRhdGEpID0+IHtcbiAgICAgIGxldCBqb2luZWQgPSB0aGlzLnN0YXRlLm9ubGluZVVzZXJzLmNvbmNhdChkYXRhLnVzZXJOYW1lKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXJDb3VudDogZGF0YS51c2VyQ291bnQsXG4gICAgICAgIG9ubGluZVVzZXJzOiBqb2luZWRcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnVXNlciBqb2luZWQ6ICcsIGRhdGEudXNlck5hbWUpXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3VzZXIgbGVmdCcsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlckNvdW50OiBkYXRhLnVzZXJDb3VudCxcbiAgICAgICAgb25saW5lVXNlcnM6IGRhdGEub25saW5lVXNlcnNcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ25ldyBtZXNzYWdlJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXcgbWVzc2FnZSBhcnJpdmVkJylcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogZGF0YS5tc2dEYlxuICAgICAgfSlcbiAgICB9KVxuICAgIHNvY2tldC5vbigndHlwaW5nJywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VyVHlwaW5nOiBkYXRhLnVzZXJOYW1lXG4gICAgICB9KVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdzdG9wIHR5cGluZycsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlclR5cGluZzogJydcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ3NlbmQgbWVzc2FnZScsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IGRhdGEubXNnRGJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVVzZXJuYW1lQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coYFVzZXIgJHt0aGlzLnN0YXRlLnVzZXJuYW1lfSBsb2dnZWQgaW5gKVxuICAgIHNvY2tldC5lbWl0KCdhZGQgdXNlcicsIHRoaXMuc3RhdGUudXNlcm5hbWUpXG4gIH1cblxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2YXRpb24nKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxWaXNpYmxlIDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxWaXNpYmxlIDogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcD5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDE+UmVhY3QtTW9kYWwgRXhhbXBsZXM8L2gxPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIk9wZW5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9wZW5Nb2RhbCgpfSAvPlxuICAgICAgICAgICAgPE1vZGFsIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIiBlZmZlY3Q9XCJmYWRlSW5VcFwiIG9uQ2xpY2tBd2F5PXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlRpdGxlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+U29tZSBDb250ZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0+Q2xvc2U8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbkxlZnQ6IDAsIG1hcmdpblJpZ2h0OiAwfX0+XG4gICAgICAgICAgICA8Q29sIHhzPXs4fSBtZD17OH0gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnIzI2NmUzNCcsIG1hcmdpbjogMH19PlxuICAgICAgICAgICAgICA8Q2hhdEJveCBzb2NrZXQ9e3NvY2tldH0gY29ubmVjdGVkPXt0aGlzLnN0YXRlLmNvbm5lY3RlZH0gbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezR9IG1kPXs0fSBzdHlsZT17e2JhY2tncm91bmQ6ICd3aGl0ZScsIG1hcmdpbjogMH19PlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJPcGVuXCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9IC8+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZDogJ3doaXRlJ319PlxuICAgICAgICAgICAgICAgIDxoMT5Vc2VybGlzdDwvaDE+IDxoMz5PbmxpbmUgdXNlcnM6IHt0aGlzLnN0YXRlLnVzZXJDb3VudH08L2gzPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub25saW5lVXNlcnMubWFwKCh1c2VybmFtZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17a2V5fT57dXNlcm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGgyPlVzZXIgdHlwaW5nOiB7dGhpcy5zdGF0ZS51c2VyVHlwaW5nfTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQXBwPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
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

/***/ }),

/***/ "./src/Login/components/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/Login/components/login.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



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
            css: '.logo.jsx-2059154562{width:213px;background:url(\'/static/cimadev.png\') no-repeat;margin:30px auto;}.login-block.jsx-2059154562{width:320px;padding:20px;background:#fff;border-radius:5px;border-top:5px solid #076E3D;margin:0 auto;}.login-block.jsx-2059154562 h1.jsx-2059154562{text-align:center;color:#000;font-size:18px;text-transform:uppercase;margin-top:0;margin-bottom:20px;}.login-block.jsx-2059154562 input.jsx-2059154562{width:100%;height:42px;box-sizing:border-box;border-radius:5px;border:1px solid #ccc;margin-bottom:20px;font-size:14px;font-family:Montserrat;padding:0 20px 0 50px;outline:none;}.login-block.jsx-2059154562 input#username.jsx-2059154562{background:#076E3D url(\'http://i.imgur.com/u0XmBmv.png\') 20px top no-repeat;background-size:16px 80px;}.login-block.jsx-2059154562 input#username.jsx-2059154562:focus{background:#076E3D url(\'http://i.imgur.com/u0XmBmv.png\') 20px bottom no-repeat;background-size:16px 80px;}.login-block.jsx-2059154562 input.jsx-2059154562:active,.login-block.jsx-2059154562 input.jsx-2059154562:focus{border:1px solid #ff656c;}.login-block.jsx-2059154562 button.jsx-2059154562{width:100%;height:40px;background:#076E3D;box-sizing:border-box;border-radius:5px;border:1px solid #e15960;color:#fff;font-weight:bold;text-transform:uppercase;font-size:14px;font-family:Montserrat;outline:none;cursor:pointer;}.login-block.jsx-2059154562 button.jsx-2059154562:hover{background:#ff7b81;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Mb2dpbi9jb21wb25lbnRzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVljLEFBR3FCLEFBTUEsQUFTTSxBQVNQLEFBYWlFLEFBS0csQUFLdEQsQUFJZCxBQWdCUSxXQTFDUCxBQTJCQSxDQW5Eb0MsQUFNbkMsTUFTRixDQW9EZixJQTFDMEIsQUEyQkgsRUE3Q0gsQUF3Q3BCLElBL0JtQixZQVJHLENBNkNJLEVBcENHLENBU1AsY0FqQlcsQ0FSWixHQTBCSyxDQTJCSixLQXBDTCxPQW1CYSxDQW5DOUIsRUF3QzhCLEdBdkJQLEFBb0NNLEdBM0JOLEdBbEJMLGFBVWxCLENBVEEsQUEyQkEsRUFUbUIsQ0FjbkIsRUFhZSxXQUNNLENBM0JNLGdCQTRCRSxPQTNCSCxrQkE0QlAsSUEzQkYsV0E0QlUsRUEzQjNCLHFCQTRCaUIsYUFDRSxlQUNuQiIsImZpbGUiOiJzcmMvTG9naW4vY29tcG9uZW50cy9sb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tcmhvcnNlL0Rlc2t0b3AvZ2l0aHViL1BsYXRpY2FzVGFsbGVyZXMvMjAxOC9yZWFsLXRpbWUtY2hhdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgIDxpbWcgc3JjPScvc3RhdGljL2NpbWFkZXYucG5nJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAnLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJsb2NrXCI+XG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvcHMudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHByb3BzLmhhbmRsZVVzZXJuYW1lQ2hhbmdlKGUpfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8c3R5bGUganN4PntgXG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMjEzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9jaW1hZGV2LnBuZycpIG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDc2RTNEO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAubG9naW4tYmxvY2sgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCA1MHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC5sb2dpbi1ibG9jayBpbnB1dCN1c2VybmFtZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNzZFM0QgdXJsKCdodHRwOi8vaS5pbWd1ci5jb20vdTBYbUJtdi5wbmcnKSAyMHB4IHRvcCBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCA4MHB4O1xuICAgIH1cblxuICAgIC5sb2dpbi1ibG9jayBpbnB1dCN1c2VybmFtZTpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNzZFM0QgdXJsKCdodHRwOi8vaS5pbWd1ci5jb20vdTBYbUJtdi5wbmcnKSAyMHB4IGJvdHRvbSBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCA4MHB4O1xuICAgIH1cblxuICAgIC5sb2dpbi1ibG9jayBpbnB1dDphY3RpdmUsIC5sb2dpbi1ibG9jayBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjY1NmM7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNzZFM0Q7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxNTk2MDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmxvZ2luLWJsb2NrIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjdiODE7XG4gICAgfVxuXG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXX0= */\n/*@ sourceURL=src/Login/components/login.js */'
        })
    );
};

var _default = Login;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Login, 'Login', '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/Login/components/login.js');
    reactHotLoader.register(_default, 'default', '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/Login/components/login.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.13ef38e08e0d07099f61.hot-update.js.map