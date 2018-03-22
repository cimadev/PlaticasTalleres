module.exports=__NEXT_REGISTER_PAGE("/test",function(){var e=webpackJsonp([4],{277:function(e,t,n){e.exports=n(278)},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=n(0);var a=n.n(s);var i=n(120);var r=n.n(i);var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||false;s.configurable=true;if("value"in s)s.writable=true;Object.defineProperty(e,s.key,s)}}return function(t,n,s){if(n)e(t.prototype,n);if(s)e(t,s);return t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var g=function(e){c(t,e);function t(e){u(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={userCount:"No users",username:"",onlineUsers:["Cimadev"],messages:[],msgInput:"",typing:false,connected:false,userTyping:""};n.handeChange=n.handleChange.bind(n);n.handleSubmit=n.handleSubmit.bind(n);n.handleMessageChange=n.handleMessageChange.bind(n);n.sendMessage=n.sendMessage.bind(n);n.updateTyping=n.updateTyping.bind(n);return n}o(t,[{key:"componentDidMount",value:function e(){var t=this;this.socket=r()();this.socket.on("login",function(e){t.setState({userCount:e.userCount,onlineUsers:e.onlineUsers,messages:e.msgDb,connected:true})});this.socket.on("user joined",function(e){var n=t.state.onlineUsers.concat(e.userName);t.setState({userCount:e.userCount,onlineUsers:n});console.log("User joined: ",e.userName)});this.socket.on("user left",function(e){t.setState({userCount:e.userCount,onlineUsers:e.onlineUsers})});this.socket.on("send message",function(e){t.setState({messages:e.msgDb})});this.socket.on("new message",function(e){t.setState({messages:e.msgDb})});this.socket.on("typing",function(e){t.setState({userTyping:e.userName})});this.socket.on("stop typing",function(e){t.setState({userTyping:""})})}},{key:"handleChange",value:function e(t){this.setState({username:t.target.value})}},{key:"handleSubmit",value:function e(t){console.log("User "+this.state.username+" logged in");t.preventDefault();this.socket.emit("add user",this.state.username)}},{key:"handleMessageChange",value:function e(t){t.preventDefault();this.updateTyping();this.setState({msgInput:t.target.value})}},{key:"sendMessage",value:function e(){this.socket.emit("new message",this.state.msgInput);this.setState({msgInput:""})}},{key:"updateTyping",value:function e(){var t=this;console.log("setting typer");var n=600;if(this.state.connected){if(!this.state.typing){this.setState({typing:true});this.socket.emit("typing")}var s=(new Date).getTime();setTimeout(function(){var e=(new Date).getTime();var a=e-s;if(a>=n&&t.state.typing){t.socket.emit("stop typing");t.setState({typing:false})}},n)}}},{key:"render",value:function e(){var t=this;return a.a.createElement("div",null,"CimaChat - ",this.state.userCount," online",a.a.createElement("input",{value:this.state.username,onChange:function e(n){return t.handleChange(n)}}),a.a.createElement("button",{onClick:this.handleSubmit},"Login"),a.a.createElement("br",null),"Write message: ",a.a.createElement("br",null)," ",a.a.createElement("input",{value:this.state.msgInput,onChange:function e(n){return t.handleMessageChange(n)}}),a.a.createElement("button",{onClick:this.sendMessage},"send"),a.a.createElement("h1",null,"Userlist"),this.state.onlineUsers.map(function(e,t){return a.a.createElement("li",{key:t},e)}),a.a.createElement("h1",null,"Messages")," ",a.a.createElement("h2",null,"User typing: ",this.state.userTyping),this.state.messages.map(function(e,t){return a.a.createElement("li",{key:t},e.userName," - ",e.msg)}))}}]);return t}(s["Component"]);t["default"]=g}},[277]);return{page:e.default}});