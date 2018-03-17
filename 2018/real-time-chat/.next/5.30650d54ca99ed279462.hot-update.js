webpackHotUpdate(5,{

/***/ "./pages/test.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/test.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text(props) {
    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

    _this.state = {
      userCount: 'No users',
      username: '',
      onlineUsers: ['Cimadev'],
      messages: [],
      msgInput: '',
      typing: false,
      connected: false,
      userTyping: ''
    };
    _this.handeChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleMessageChange = _this.handleMessageChange.bind(_this);
    _this.sendMessage = _this.sendMessage.bind(_this);
    _this.updateTyping = _this.updateTyping.bind(_this);
    return _this;
  }

  _createClass(Text, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default()();
      this.socket.on('login', function (data) {
        _this2.setState({
          userCount: data.userCount,
          onlineUsers: data.onlineUsers,
          messages: data.msgDb,
          connected: true
        });
      });
      this.socket.on('user joined', function (data) {
        var joined = _this2.state.onlineUsers.concat(data.userName);
        _this2.setState({
          userCount: data.userCount,
          onlineUsers: joined
        });
        console.log('User joined: ', data.userName);
      });
      this.socket.on('user left', function (data) {
        _this2.setState({
          userCount: data.userCount,
          onlineUsers: data.onlineUsers
        });
      });
      this.socket.on('send message', function (data) {
        _this2.setState({
          messages: data.msgDb
        });
      });
      this.socket.on('new message', function (data) {
        _this2.setState({
          messages: data.msgDb
        });
      });
      this.socket.on('typing', function (data) {
        _this2.setState({
          userTyping: data.userName
        });
      });
      this.socket.on('stop typing', function (data) {
        _this2.setState({
          userTyping: ''
        });
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      console.log('User ' + this.state.username + ' logged in');
      e.preventDefault();
      this.socket.emit('add user', this.state.username);
    }
  }, {
    key: 'handleMessageChange',
    value: function handleMessageChange(e) {
      e.preventDefault();
      this.updateTyping();
      this.setState({
        msgInput: e.target.value
      });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {
      this.socket.emit('new message', this.state.msgInput);
      this.setState({
        msgInput: ''
      });
    }
  }, {
    key: 'updateTyping',
    value: function updateTyping() {
      var _this3 = this;

      console.log('setting typer');
      var typingMaxTime = 400; //ms
      if (this.state.connected) {
        if (!this.state.typing) {
          this.setState({
            typing: true
          });
          this.socket.emit('typing');
        }
        var lastTypingTime = new Date().getTime();
        setTimeout(function () {
          var typingTimer = new Date().getTime();
          var timeDiff = typingTimer - lastTypingTime;
          if (timeDiff >= typingMaxTime && _this3.state.typing) {
            _this3.socket.emit('stop typing');
            _this3.setState({
              typing: false
            });
          }
        }, typingMaxTime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        },
        'CimaChat - ',
        this.state.userCount,
        ' online',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.username, onChange: function onChange(e) {
            return _this4.handleChange(e);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            }
          },
          'Login'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }),
        'Write message: ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }),
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.msgInput, onChange: function onChange(e) {
            return _this4.handleMessageChange(e);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.sendMessage, __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          },
          'send'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          },
          'Userlist'
        ),
        this.state.onlineUsers.map(function (username, key) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: key, __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            username
          );
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          },
          'Messages'
        ),
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          },
          'User typing: ',
          this.state.userTyping
        ),
        this.state.messages.map(function (msg, key) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: key, __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            },
            msg.userName,
            ' - ',
            msg.msg
          );
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Text;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Text;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Text, 'Text', '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/test.js');
  reactHotLoader.register(_default, 'default', '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/test.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/test")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.30650d54ca99ed279462.hot-update.js.map