webpackJsonp([72],{1613:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),c=n.n(o),u=n(34),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h2",null," Basic Affix "),c.a.createElement(u.a,null,c.a.createElement(u.g,{type:"primary"},"Affix top")),c.a.createElement("br",null),c.a.createElement(u.a,{offsetBottom:0},c.a.createElement(u.g,{type:"primary"},"Affix bottom")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h2",null," Containter to Scroll Affix "),c.a.createElement("div",{className:"scrollable-container",ref:function(t){e.container=t}},c.a.createElement("div",{className:"background"},c.a.createElement(u.a,{target:function(){return e.container}},c.a.createElement(u.g,{type:"primary"},"Fixed at the top of container")))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h2",null," Affix with Callback "),c.a.createElement(u.a,{offsetTop:120,onChange:function(e){}},c.a.createElement(u.g,null,"120px to affix top")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))}}]),t}(o.Component);t.default=f}});