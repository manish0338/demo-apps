module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}},s=!0;try{e[r].call(a.exports,a,a.exports,n),s=!1}finally{s&&delete t[r]}return a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"+En1":function(e,t){},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},0:function(e,t,n){e.exports=n("RNiq")},"4mXO":function(e,t,n){e.exports=n("k1wZ")},Bhuq:function(e,t,n){e.exports=n("/+oN")},ETxl:function(e,t){},"Jo+v":function(e,t,n){e.exports=n("Z6Kq")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),s=n("Jo+v"),o=n.n(s),c=n("4mXO"),i=n.n(c),l=n("pLtp"),u=n.n(l),f=n("hfKm"),p=n.n(f);function m(e,t,n){return t in e?p()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=u()(n);"function"==typeof i.a&&(r=r.concat(i()(n).filter(function(e){return o()(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}var h=n("eVuF"),d=n.n(h);function b(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(e){return void n(e)}c.done?t(i):d.a.resolve(i).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new d.a(function(r,a){var s=e.apply(t,n);function o(e){b(s,r,a,o,c,"next",e)}function c(e){b(s,r,a,o,c,"throw",e)}o(void 0)})}}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),p()(e,r.key,r)}}var x=n("XVgq"),_=n.n(x),E=n("Z7t5"),k=n.n(E);function w(e){return(w="function"==typeof k.a&&"symbol"==typeof _.a?function(e){return typeof e}:function(e){return e&&"function"==typeof k.a&&e.constructor===k.a&&e!==k.a.prototype?"symbol":typeof e})(e)}function N(e){return(N="function"==typeof k.a&&"symbol"===w(_.a)?function(e){return w(e)}:function(e){return e&&"function"==typeof k.a&&e.constructor===k.a&&e!==k.a.prototype?"symbol":w(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S=n("Bhuq"),j=n.n(S),K=n("TRZx"),C=n.n(K);function T(e){return(T=C.a?j.a:function(e){return e.__proto__||j()(e)})(e)}var F=n("SqZg"),O=n.n(F);function P(e,t){return(P=C.a||function(e,t){return e.__proto__=t,e})(e,t)}var U=n("zr5I"),Z=n.n(U),R=n("YLtl"),L=n.n(R),W=n("cDcd"),A=n.n(W),D=n("U7sd"),M=n.n(D),z=(n("+En1"),n("ETxl"),function(e){var t=e.children;e.title;return A.a.createElement("div",null,A.a.createElement(M.a,null,A.a.createElement("meta",{charSet:"UTF-8"}),A.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),A.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quicksand:400",rel:"stylesheet"}),A.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400",rel:"stylesheet"}),A.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:"static/img/favicon.png"}),A.a.createElement("title",null,"Lottery | ...")),A.a.createElement("header",{className:"header"},A.a.createElement("div",{className:"header__logoBox"},A.a.createElement("img",{src:"static/img/logo.svg",alt:"Lottery logo",className:"header__logo"}))),t)}),I="",J=function(e){function t(e){var n,r,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,s=T(t).call(this,e),n=!s||"object"!==N(s)&&"function"!=typeof s?q(r):s,m(q(n),"onSubmit",function(){var e=g(a.a.mark(function e(t){var r,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState(y({},n.state,{message:"Waiting on transaction success..."})),console.log("querying"),e.prev=3,e.next=6,Z.a.get("".concat(I,"/enter/").concat(n.state.key,"&1"));case 6:r=e.sent,s=r.data,n.setState(y({},n.state,{message:s.message})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n.setState(y({},n.state,{message:"Failed to call api from front-end"}));case 14:case"end":return e.stop()}},e,null,[[3,11]])}));return function(t){return e.apply(this,arguments)}}()),m(q(n),"onPickWinner",g(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState(y({},n.state,{message:"Waiting on transaction success..."})),e.prev=1,e.next=4,Z.a.get("".concat(I,"/winner/").concat(n.state.adminKey));case 4:t=e.sent,r=t.data,n.setState(y({},n.state,{message:r.message})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n.setState(y({},n.state,{message:"Failed to call api from front-end"}));case 12:case"end":return e.stop()}},e,null,[[1,9]])}))),m(q(n),"onClickRefresh",g(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.needUpdate();case 1:case"end":return e.stop()}},e)}))),m(q(n),"newSession",g(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("".concat(I,"/new"));case 3:t=e.sent,(r=t.data).success?n.setState({players:[],balances:[],message:r.message,adminKey:""}):n.setState(y({},n.state,{message:r.message})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n.setState(y({},n.state,{message:"Failed to call api from front-end"}));case 11:case"end":return e.stop()}},e,null,[[0,8]])}))),n.state=e,n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=O()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,W["Component"]),n=t,(r=[{key:"componentDidUpdate",value:function(){var e=g(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.needUpdate();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"needUpdate",value:function(){var e=g(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("".concat(I,"/result"));case 3:if(t=e.sent,(n=t.data)&&n.players&&n.balances){e.next=7;break}return e.abrupt("return");case 7:console.log("needUpdate",n),n.players.length==this.state.players.length&&n.balances.length==this.state.balances.length&&this.state.message===n.message||this.setState(y({},this.state,{players:n.players,balances:n.balances,message:"There are ".concat(n.players.length," players participating in the lottery session ").concat(n.session)})),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log("failed to call api"),e.abrupt("return");case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return A.a.createElement(z,null,A.a.createElement("button",{className:"btn btn__full enterKey__submit",value:"adminKey",type:"submit",onClick:this.newSession},"New Session"),A.a.createElement("section",{className:"section-enterKey"},A.a.createElement("form",{id:"",onSubmit:this.onSubmit,className:"enterKey__form"},A.a.createElement("div",{className:"enterKey__box"},A.a.createElement("input",{className:"enterKey__key",type:"text",name:"player",required:"",placeholder:"Enter PLAYER 's private key here",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:!0,value:this.state.key,onChange:function(t){return e.setState({key:t.target.value})}}),A.a.createElement("button",{className:"btn btn__full enterKey__submit",value:"playerKey",type:"submit"},"Enter"))),A.a.createElement("form",{id:"",onSubmit:this.onPickWinner,className:"enterKey__form"},A.a.createElement("div",{className:"enterKey__box"},A.a.createElement("input",{className:"enterKey__key",type:"text",name:"player",placeholder:"Enter ADMIN 's private key here",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:!0,value:this.state.adminKey,onChange:function(t){return e.setState(y({},e.state,{adminKey:t.target.value}))}}),A.a.createElement("button",{className:"btn btn__full enterKey__submit",value:"adminKey",type:"submit"},"Pick Winner"))),A.a.createElement("p",{className:"status"},this.state.message)),A.a.createElement("section",{className:"section-players"},A.a.createElement("div",{className:"heading"},A.a.createElement("h2",{className:"heading-secondary"},"Current players"),A.a.createElement("button",{className:"btn btn__outline btn__refresh",onClick:this.onClickRefresh},A.a.createElement("span",null,A.a.createElement("img",{src:"/static/img/refresh icon.svg",className:"refresh",alt:"refresh icon"})),"Refresh")),A.a.createElement("div",{className:"players"},A.a.createElement("ul",{className:"players__list"},L.a.map(L.a.range(this.state.players.length),function(t){return A.a.createElement("li",{className:"player",key:e.state.players[t]},A.a.createElement("p",{className:"player__key"},e.state.players[t]),A.a.createElement("p",{className:"player__balance"},(n=e.state.balances[t],Number(n)/Number(1e18))));var n}))),A.a.createElement("img",{className:"decor decor__left",src:"/static/img/decor-left.svg",alt:"decor"}),A.a.createElement("img",{className:"decor decor__right",src:"/static/img/decor-right.svg",alt:"decor"})))}}])&&v(n.prototype,r),s&&v(n,s),t}();J.getInitialProps=g(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("".concat(I,"/result"));case 3:if(t=e.sent,(n=t.data)&&n.players&&n.balances){e.next=7;break}return e.abrupt("return",{players:[],balances:[],message:"",adminKey:""});case 7:return e.abrupt("return",{players:n.players,balances:n.balances,message:"There are ".concat(n.players.length," players participating in the lottery session ").concat(n.session),adminKey:""});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{players:[],balances:[],message:"",adminKey:""});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));t.default=J},SqZg:function(e,t,n){e.exports=n("o5io")},TRZx:function(e,t,n){e.exports=n("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,n){e.exports=n("gHn/")},YLtl:function(e,t){e.exports=require("lodash")},Z6Kq:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},Z7t5:function(e,t,n){e.exports=n("vqFK")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},eVuF:function(e,t,n){e.exports=n("aC71")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,n){e.exports=n("TUA0")},k1wZ:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-symbols")},ln6h:function(e,t,n){e.exports=n("cu1A")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},pLtp:function(e,t,n){e.exports=n("qJj/")},"qJj/":function(e,t){e.exports=require("core-js/library/fn/object/keys")},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},zr5I:function(e,t){e.exports=require("axios")}});