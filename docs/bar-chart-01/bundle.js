!function t(n,e,r){function i(u,c){if(!e[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var l=e[u]={exports:{}};n[u][0].call(l.exports,function(t){return i(n[u][1][t]||t)},l,l.exports,t,n,e,r)}return e[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(t,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var n=t.barWidth,e=t.data,i=t.height,c=t.width,a=u(null);return o(function(){(0,r.select)(ReactDOM.findDOMNode(a.current)).selectAll("rect").data(e).enter().append("rect").attr("x",function(t,e){return e*(n+5)}).attr("y",function(t,n){return i-10*t}).attr("width",n).attr("height",function(t,n){return 10*t}).attr("fill","green")}),React.createElement("svg",{ref:a,height:i,width:c})};var r=t("d3-selection"),i=React,o=i.useEffect,u=i.useRef},{"d3-selection":3}],2:[function(t,n,e){"use strict";var r,i=(r=t("./BarChart.js"))&&r.__esModule?r:{default:r};ReactDOM.render(React.createElement("div",null,React.createElement(i.default,{barWidth:60,data:[12,5,6,6,9,10],height:300,width:400})),document.getElementById("root"))},{"./BarChart.js":1}],3:[function(t,n,e){!function(t,r){"object"==typeof e&&void 0!==n?r(e):"function"==typeof define&&define.amd?define(["exports"],r):r(t.d3=t.d3||{})}(this,function(t){"use strict";var n="http://www.w3.org/1999/xhtml",e={svg:"http://www.w3.org/2000/svg",xhtml:n,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function r(t){var n=t+="",r=n.indexOf(":");return r>=0&&"xmlns"!==(n=t.slice(0,r))&&(t=t.slice(r+1)),e.hasOwnProperty(n)?{space:e[n],local:t}:t}function i(t){var e=r(t);return(e.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===n&&e.documentElement.namespaceURI===n?e.createElement(t):e.createElementNS(r,t)}})(e)}function o(){}function u(t){return null==t?o:function(){return this.querySelector(t)}}function c(){return[]}function a(t){return null==t?c:function(){return this.querySelectorAll(t)}}function s(t){return function(){return this.matches(t)}}function l(t){return new Array(t.length)}function f(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}f.prototype={constructor:f,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var h="$";function p(t,n,e,r,i,o){for(var u,c=0,a=n.length,s=o.length;c<s;++c)(u=n[c])?(u.__data__=o[c],r[c]=u):e[c]=new f(t,o[c]);for(;c<a;++c)(u=n[c])&&(i[c]=u)}function d(t,n,e,r,i,o,u){var c,a,s,l={},p=n.length,d=o.length,_=new Array(p);for(c=0;c<p;++c)(a=n[c])&&(_[c]=s=h+u.call(a,a.__data__,c,n),s in l?i[c]=a:l[s]=a);for(c=0;c<d;++c)(a=l[s=h+u.call(t,o[c],c,o)])?(r[c]=a,a.__data__=o[c],l[s]=null):e[c]=new f(t,o[c]);for(c=0;c<p;++c)(a=n[c])&&l[_[c]]===a&&(i[c]=a)}function _(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function v(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function y(t,n){return t.style.getPropertyValue(n)||v(t).getComputedStyle(t,null).getPropertyValue(n)}function m(t){return t.trim().split(/^|\s+/)}function g(t){return t.classList||new w(t)}function w(t){this._node=t,this._names=m(t.getAttribute("class")||"")}function A(t,n){for(var e=g(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function x(t,n){for(var e=g(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function E(){this.textContent=""}function b(){this.innerHTML=""}function S(){this.nextSibling&&this.parentNode.appendChild(this)}function N(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function C(){return null}function O(){var t=this.parentNode;t&&t.removeChild(this)}function P(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function M(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}w.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var D={};function q(t,n,e){return t=B(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function B(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function L(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function R(t,n,e){var r=D.hasOwnProperty(t.type)?q:B;return function(i,o,u){var c,a=this.__on,s=r(n,o,u);if(a)for(var l=0,f=a.length;l<f;++l)if((c=a[l]).type===t.type&&c.name===t.name)return this.removeEventListener(c.type,c.listener,c.capture),this.addEventListener(c.type,c.listener=s,c.capture=e),void(c.value=n);this.addEventListener(t.type,s,e),c={type:t.type,name:t.name,value:n,listener:s,capture:e},a?a.push(c):this.__on=[c]}}function T(t,n,e){var r=v(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}t.event=null,"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(D={mouseenter:"mouseover",mouseleave:"mouseout"}));var j=[null];function V(t,n){this._groups=t,this._parents=n}function U(){return new V([[document.documentElement]],j)}function I(t){return"string"==typeof t?new V([[document.querySelector(t)]],[document.documentElement]):new V([[t]],j)}V.prototype=U.prototype={constructor:V,select:function(t){"function"!=typeof t&&(t=u(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,c,a=n[i],s=a.length,l=r[i]=new Array(s),f=0;f<s;++f)(o=a[f])&&(c=t.call(o,o.__data__,f,a))&&("__data__"in o&&(c.__data__=o.__data__),l[f]=c);return new V(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=a(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,c=n[o],s=c.length,l=0;l<s;++l)(u=c[l])&&(r.push(t.call(u,u.__data__,l,c)),i.push(u));return new V(r,i)},filter:function(t){"function"!=typeof t&&(t=s(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],c=u.length,a=r[i]=[],l=0;l<c;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&a.push(o);return new V(r,this._parents)},data:function(t,n){if(!t)return v=new Array(this.size()),l=-1,this.each(function(t){v[++l]=t}),v;var e,r=n?d:p,i=this._parents,o=this._groups;"function"!=typeof t&&(e=t,t=function(){return e});for(var u=o.length,c=new Array(u),a=new Array(u),s=new Array(u),l=0;l<u;++l){var f=i[l],h=o[l],_=h.length,v=t.call(f,f&&f.__data__,l,i),y=v.length,m=a[l]=new Array(y),g=c[l]=new Array(y);r(f,h,m,g,s[l]=new Array(_),v,n);for(var w,A,x=0,E=0;x<y;++x)if(w=m[x]){for(x>=E&&(E=x+1);!(A=g[E])&&++E<y;);w._next=A||null}}return(c=new V(c,i))._enter=a,c._exit=s,c},enter:function(){return new V(this._enter||this._groups.map(l),this._parents)},exit:function(){return new V(this._exit||this._groups.map(l),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),c=0;c<o;++c)for(var a,s=n[c],l=e[c],f=s.length,h=u[c]=new Array(f),p=0;p<f;++p)(a=s[p]||l[p])&&(h[p]=a);for(;c<r;++c)u[c]=n[c];return new V(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=_);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,c=e[o],a=c.length,s=i[o]=new Array(a),l=0;l<a;++l)(u=c[l])&&(s[l]=u);s.sort(n)}return new V(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,c=o.length;u<c;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=r(t);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):y(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=m(t+"");if(arguments.length<2){for(var r=g(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?A:x)(this,t)}}:n?function(t){return function(){A(this,t)}}:function(t){return function(){x(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?E:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?b:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(S)},lower:function(){return this.each(N)},append:function(t){var n="function"==typeof t?t:i(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:i(t),r=null==n?C:"function"==typeof n?n:u(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(O)},clone:function(t){return this.select(t?M:P)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),u=o.length;if(!(arguments.length<2)){for(c=n?R:L,null==e&&(e=!1),r=0;r<u;++r)this.each(c(o[r],n,e));return this}var c=this.node().__on;if(c)for(var a,s=0,l=c.length;s<l;++s)for(r=0,a=c[s];r<u;++r)if((i=o[r]).type===a.type&&i.name===a.name)return a.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return T(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return T(this,t,n)}})(t,n))}};var H=0;function z(){return new G}function G(){this._="@"+(++H).toString(36)}function X(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function k(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}G.prototype=z.prototype={constructor:G,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},t.create=function(t){return I(i(t).call(document.documentElement))},t.creator=i,t.local=z,t.matcher=s,t.mouse=function(t){var n=X();return n.changedTouches&&(n=n.changedTouches[0]),k(t,n)},t.namespace=r,t.namespaces=e,t.clientPoint=k,t.select=I,t.selectAll=function(t){return"string"==typeof t?new V([document.querySelectorAll(t)],[document.documentElement]):new V([null==t?[]:t],j)},t.selection=U,t.selector=u,t.selectorAll=a,t.style=y,t.touch=function(t,n,e){arguments.length<3&&(e=n,n=X().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return k(t,r);return null},t.touches=function(t,n){null==n&&(n=X().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=k(t,n[e]);return i},t.window=v,t.customEvent=function(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}},Object.defineProperty(t,"__esModule",{value:!0})})},{}]},{},[2]);
