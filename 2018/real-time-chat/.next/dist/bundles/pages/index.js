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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-grid-system"
var external__react_grid_system_ = __webpack_require__(2);
var external__react_grid_system__default = /*#__PURE__*/__webpack_require__.n(external__react_grid_system_);

// CONCATENATED MODULE: ./components/ChatBox/message.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var message_Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2595102443' + ' ' + 'container'
        },
        external__react__default.a.createElement(
          'p',
          {
            className: 'jsx-2595102443'
          },
          this.props.message
        ),
        external__react__default.a.createElement(
          'span',
          {
            className: 'jsx-2595102443' + ' ' + 'time-right'
          },
          this.props.username
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '2595102443',
          css: ['.messageBox.jsx-2595102443{width:100%;height:100%;}', 'p.jsx-2595102443{font-size:large;}', '.container.jsx-2595102443{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0;width:100%;margin-right:10px;}', '.time-right.jsx-2595102443{float:right;color:#aaa;}', '.container.jsx-2595102443::after{content:"";clear:both;display:table;}', '.container.jsx-2595102443 img.jsx-2595102443{float:left;max-width:60px;width:100%;margin-right:20px;border-radius:50%;}']
        })
      );
    }
  }]);

  return Message;
}(external__react__default.a.Component);

/* harmony default export */ var message = (message_Message);
// CONCATENATED MODULE: ./components/ChatBox/index.js
var ChatBox__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function ChatBox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChatBox__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ChatBox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ChatBox_ChatBox = function (_Component) {
  ChatBox__inherits(ChatBox, _Component);

  function ChatBox(props) {
    ChatBox__classCallCheck(this, ChatBox);

    var _this = ChatBox__possibleConstructorReturn(this, (ChatBox.__proto__ || Object.getPrototypeOf(ChatBox)).call(this, props));

    _this.state = {
      inputValue: '',
      typing: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.updateTyping = _this.updateTyping.bind(_this);
    return _this;
  }

  ChatBox__createClass(ChatBox, [{
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
      var typingMaxTime = 3000; //ms
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
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-197036673' + ' ' + 'wrapper'
        },
        external__react__default.a.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'jsx-197036673'
          },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-197036673' + ' ' + 'chat-box-container'
            },
            external__react__default.a.createElement(
              external__react_grid_system_["Row"],
              { className: 'Row', style: { marginLeft: 0, marginRight: 0 } },
              this.props.messages.map(function (msg, key) {
                return external__react__default.a.createElement(message, { username: msg.userName, message: msg.msg });
              })
            )
          ),
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-197036673' + ' ' + 'input-container'
            },
            external__react__default.a.createElement('input', { type: 'text',

              ref: 'message',
              onChange: this.handleInputChange,
              value: this.state.inputValue, className: 'jsx-197036673' + ' ' + 'input__field input__field--minoru'
            })
          ),
          external__react__default.a.createElement(
            'button',
            { type: 'submit', className: 'jsx-197036673' + ' ' + 'button'
            },
            external__react__default.a.createElement(
              'span',
              {
                className: 'jsx-197036673'
              },
              'SEND '
            )
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '197036673',
          css: ['.button.jsx-197036673{border-radius:4px;background-color:#f49320;border:none;color:#FFFFFF;text-align:center;font-size:28px;padding:20px;width:100%;max-width:200px;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;margin:5px;margin-left:15px;}', '.button.jsx-197036673 span.jsx-197036673{cursor:pointer;display:inline-block;position:relative;-webkit-transition:0.5s;transition:0.5s;}', 'span.jsx-197036673{margin:0px;font-weight:800;}', '.button.jsx-197036673 span.jsx-197036673:after{content:\'\\0bb\';position:absolute;opacity:0;top:0;right:-20px;-webkit-transition:0.5s;transition:0.5s;align:center;}', '.button.jsx-197036673:hover span.jsx-197036673{padding-right:25px;}', '.button.jsx-197036673:hover span.jsx-197036673:after{opacity:1;right:0;}', '.wrapper.jsx-197036673{width:100%;height:100vh;}', '.jsx-197036673,.input-container.jsx-197036673{margin-top:15px;width:100%;}', '.chat-box-container.jsx-197036673{width:100%;height:80vh;overflow:scroll;overflow-x:hidden;margin-top:3%;}', '.jsx-197036673::-webkit-scrollbar{width:10px;}', '.jsx-197036673::-webkit-scrollbar-track{background:#276e34;}', '.jsx-197036673::-webkit-scrollbar-thumb{background:#f49320;border-radius:10px;}', '.jsx-197036673::-webkit-scrollbar-thumb:hover{background:#b30000;}', 'input.jsx-197036673{height:34px;width:100%;border-radius:3px;border:1px solid transparent;border-top:none;border-bottom:1px solid #DDD;box-shadow:inset 0 1px 2px rgba(0,0,0,.39),0 -1px 1px #red,0 1px 0 #red;}', '.input__field.jsx-197036673{float:left;padding:0.8em;width:75%;font-size:17px;border:none;border-radius:4px;background:#f0f0f0;color:#black;font-weight:bold;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-appearance:none;}']
        })
      );
    }
  }]);

  return ChatBox;
}(external__react_["Component"]);

/* harmony default export */ var components_ChatBox = (ChatBox_ChatBox);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/App/index.js
var App__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function App__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function App__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App_App = function (_Component) {
  App__inherits(App, _Component);

  function App() {
    App__classCallCheck(this, App);

    return App__possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  App__createClass(App, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-1688225633' + ' ' + 'wrapperHeight'
        },
        external__react__default.a.createElement(
          head__default.a,
          null,
          external__react__default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1688225633'
          }),
          external__react__default.a.createElement(
            'style',
            null,
            '\n            body{\n              background-color: white;\n              width: 100%;\n              height: 100%;\n              margin: 0;\n              top: 0;\n              overflow-x: hidden;\n              overflow-y: hidden;\n              background-color: white;\n              font-family: \'Montserrat\', sans-serif;\n            }\n            html {\n              height: 100%;\n              width: 100%;\n              margin: 0;\n              top: 0;\n              box-sizing: border-box;\n              overflow-y: hidden;\n              font-family: \'Montserrat\', sans-serif;\n            }\n            #__next {\n              height: 100%;\n            }\n            .wrapperHeight {\n              height: 100%;\n            }\n            '
          )
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-1688225633' + ' ' + 'container'
          },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-1688225633' + ' ' + 'content'
            },
            this.props.children
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '1688225633',
          css: ['.container.jsx-1688225633{max-width:var(--site-width);margin:0 auto;overflow-y:hidden;overflow-x:hidden;height:100%;position:fixed;width:100%;}', '.wrapperHeight.jsx-1688225633{height:100%;}', '.content.jsx-1688225633{width:100%;height:calc(100% - 1px);}', '#header.jsx-1688225633{height:69px;position:fixed;width:100%;top:0;z-index:999;}']
        })
      );
    }
  }]);

  return App;
}(external__react_["Component"]);

/* harmony default export */ var components_App = (App_App);
// EXTERNAL MODULE: external "socket.io-client"
var external__socket_io_client_ = __webpack_require__(3);
var external__socket_io_client__default = /*#__PURE__*/__webpack_require__.n(external__socket_io_client_);

// CONCATENATED MODULE: ./pages/index.js
var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var socket = external__socket_io_client__default()('http://localhost:3000');

var pages__class = function (_Component) {
  pages__inherits(_class, _Component);

  function _class(props) {
    pages__classCallCheck(this, _class);

    var _this = pages__possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

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

  pages__createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

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

      return external__react__default.a.createElement(
        components_App,
        null,
        external__react__default.a.createElement(
          external__react_grid_system_["Row"],
          { style: { marginLeft: 0, marginRight: 0 } },
          external__react__default.a.createElement(
            external__react_grid_system_["Col"],
            { xs: 8, md: 8, style: { background: '#266e34', margin: 0 } },
            external__react__default.a.createElement(components_ChatBox, { socket: socket, connected: this.state.connected, messages: this.state.messages })
          ),
          external__react__default.a.createElement(
            external__react_grid_system_["Col"],
            { xs: 4, md: 4, style: { background: 'white', margin: 0 } },
            external__react__default.a.createElement(
              external__react_grid_system_["Row"],
              null,
              external__react__default.a.createElement(
                'h1',
                null,
                'Username'
              ),
              external__react__default.a.createElement('input', { value: this.state.username, onChange: function onChange(e) {
                  return _this3.handleUsernameChange(e);
                } }),
              external__react__default.a.createElement(
                'button',
                { onClick: this.handleLogin },
                'Login'
              )
            ),
            external__react__default.a.createElement(
              'div',
              { style: { widt: '100%', height: '100%', background: 'white' } },
              external__react__default.a.createElement(
                'h1',
                null,
                'Userlist'
              ),
              ' ',
              external__react__default.a.createElement(
                'h3',
                null,
                'Online users: ',
                this.state.userCount
              ),
              this.state.onlineUsers.map(function (username, key) {
                return external__react__default.a.createElement(
                  'li',
                  { key: key },
                  username
                );
              }),
              external__react__default.a.createElement(
                'h2',
                null,
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
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages__class);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);