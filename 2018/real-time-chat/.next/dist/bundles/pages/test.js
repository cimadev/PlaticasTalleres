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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
      var typingMaxTime = 600; //ms
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
        null,
        'CimaChat - ',
        this.state.userCount,
        ' online',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.username, onChange: function onChange(e) {
            return _this4.handleChange(e);
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.handleSubmit },
          'Login'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        'Write message: ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: this.state.msgInput, onChange: function onChange(e) {
            return _this4.handleMessageChange(e);
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.sendMessage },
          'send'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Userlist'
        ),
        this.state.onlineUsers.map(function (username, key) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: key },
            username
          );
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Messages'
        ),
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'User typing: ',
          this.state.userTyping
        ),
        this.state.messages.map(function (msg, key) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: key },
            msg.userName,
            ' - ',
            msg.msg
          );
        })
      );
    }
  }]);

  return Text;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })
/******/ ]);