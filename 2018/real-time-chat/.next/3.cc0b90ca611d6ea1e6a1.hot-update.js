webpackHotUpdate(3,{

/***/ "./src/ChatBox/container/ChatBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_message__ = __webpack_require__("./src/ChatBox/component/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system__ = __webpack_require__("./node_modules/react-grid-system/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_grid_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_grid_system__);
var _jsxFileName = '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/src/ChatBox/container/ChatBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ChatBox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = ChatBox;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChatBox, 'ChatBox', '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/src/ChatBox/container/ChatBox.js');
  reactHotLoader.register(_default, 'default', '/home/luigi/Desktop/PlaticasTalleres/2018/real-time-chat/src/ChatBox/container/ChatBox.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.cc0b90ca611d6ea1e6a1.hot-update.js.map