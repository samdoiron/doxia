(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }

    var n,u,i,t,o,r,f,e={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return y(n,o,l&&l.key,l&&l.ref,null)}function y(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),n.vnode&&n.vnode(r),r}function p(){return {}}function d(n){return n.children}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function g(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||o!==n.debounceRendering)&&((o=n.debounceRendering)||t)(_);}function _(){for(var n;i=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=z(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?w(o):r),T(u,o),t!=r&&k(o)));});}function b(n,l,u,i,t,o,r,f,a,s){var h,p,m,k,g,_,b,x,A,P=i&&i.__k||c,C=P.length;for(a==e&&(a=null!=r?r[0]:C?w(i,0):null),u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?y(null,k,null,null,k):Array.isArray(k)?y(d,{children:k},null,null,null):null!=k.__e||null!=k.__c?y(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(m=P[h])||m&&k.key==m.key&&k.type===m.type)P[h]=void 0;else for(p=0;p<C;p++){if((m=P[p])&&k.key==m.key&&k.type===m.type){P[p]=void 0;break}m=null;}if(g=z(n,k,m=m||e,t,o,r,f,a,s),(p=k.ref)&&m.ref!=p&&(x||(x=[]),m.ref&&x.push(m.ref,null,k),x.push(p,k.__c||g,k)),null!=g){if(null==b&&(b=g),A=void 0,void 0!==k.__d)A=k.__d,k.__d=void 0;else if(r==m||g!=a||null==g.parentNode){n:if(null==a||a.parentNode!==n)n.appendChild(g),A=null;else {for(_=a,p=0;(_=_.nextSibling)&&p<C;p+=2)if(_==g)break n;n.insertBefore(g,a),A=a;}"option"==u.type&&(n.value="");}a=void 0!==A?A:g.nextSibling,"function"==typeof u.type&&(u.__d=a);}else a&&m.__e==a&&a.parentNode!=n&&(a=w(m));}if(u.__e=b,null!=r&&"function"!=typeof u.type)for(h=r.length;h--;)null!=r[h]&&v(r[h]);for(h=C;h--;)null!=P[h]&&D(P[h],P[h]);if(x)for(h=0;h<x.length;h++)j(x[h],x[++h],x[++h]);}function x(n){return null==n||"boolean"==typeof n?[]:Array.isArray(n)?c.concat.apply([],n.map(x)):[n]}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===a.test(l)?u+"px":null==u?"":u;}function C(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else {if("string"==typeof i&&(o.cssText="",i=null),i)for(e in i)u&&e in u||P(o,e,"");if(u)for(c in u)i&&u[c]===i[c]||P(o,c,u[c]);}else "o"===l[0]&&"n"===l[1]?(r=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N,r),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,r)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function N(l){this.l[l.type](n.event?n.event(l):l);}function z(l,u,i,t,o,r,f,e,c){var a,v,h,y,p,w,k,g,_,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,_=(a=P.contextType)&&t[a.__c],x=a?_?_.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new m(g,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,p=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){for(v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,p,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,p)),A=null!=a&&a.type==d&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function $(n,l,u,i,t,o,r,f){var a,s,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(a=0;a<o.length;a++)if(null!=(s=o[a])&&((null===l.type?3===s.nodeType:s.localName===l.type)||n==s)){n=s,o[a]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,f=!1;}if(null===l.type)p!==d&&n.data!=d&&(n.data=d);else {if(null!=o&&(o=c.slice.call(n.childNodes)),v=(p=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,f),h?l.__k=[]:(a=l.props.children,b(n,Array.isArray(a)?a:[a],l,u,i,"foreignObject"!==l.type&&t,o,r,e,f)),f||("value"in d&&void 0!==(a=d.value)&&a!==n.value&&C(n,"value",a,p.value,!1),"checked"in d&&void 0!==(a=d.checked)&&a!==n.checked&&C(n,"checked",a,p.checked,!1));}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function D(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D(t[r],u,i);null!=o&&v(o);}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,o,f;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],z(u,(t?u:i||u).__k=l,o||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?c.slice.call(u.childNodes):null,f,i||e,t),T(f,l);}function I(n,l){H(n,l,r);}function L(n,l){var u,i;for(i in l=s(s({},n.props),l),arguments.length>2&&(l.children=c.slice.call(arguments,2)),u={},l)"key"!==i&&"ref"!==i&&(u[i]=l[i]);return y(n.type,u,l.key||n.key,l.ref||n.ref,null)}function M(n){var l={},u={__c:"__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(n){t.props.value!==n.value&&i.some(function(l){l.context=n.value,g(l);});},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Consumer.contextType=u,u.Provider.__=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g(u.__E=u)}catch(l){n=l;}throw n}},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this));},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=e,f=0;

    var t$1,u$1,r$1,i$1=0,o$1=[],c$1=n.__r,f$1=n.diffed,e$1=n.__c,a$1=n.unmount;function v$1(t,r){n.__h&&n.__h(u$1,t,i$1||r),i$1=0;var o=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function m$1(n){return i$1=1,p$1(E$1,n)}function p$1(n,r,i){var o=v$1(t$1++,2);return o.t=n,o.__c||(o.__c=u$1,o.__=[i?i(r):E$1(void 0,r),function(n){var t=o.t(o.__[0],n);o.__[0]!==t&&(o.__[0]=t,o.__c.setState({}));}]),o.__}function l(r,i){var o=v$1(t$1++,3);!n.__s&&x$1(o.__H,i)&&(o.__=r,o.__H=i,u$1.__H.__h.push(o));}function y$1(r,i){var o=v$1(t$1++,4);!n.__s&&x$1(o.__H,i)&&(o.__=r,o.__H=i,u$1.__h.push(o));}function d$1(n){return i$1=5,h$1(function(){return {current:n}},[])}function s$1(n,t,u){i$1=6,y$1(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function h$1(n,u){var r=v$1(t$1++,7);return x$1(r.__H,u)?(r.__H=u,r.__h=n,r.__=n()):r.__}function T$1(n,t){return i$1=8,h$1(function(){return n},t)}function w$1(n){var r=u$1.context[n.__c],i=v$1(t$1++,9);return i.__c=n,r?(null==i.__&&(i.__=!0,r.sub(u$1)),r.props.value):n.__}function A$1(t,u){n.useDebugValue&&n.useDebugValue(u?u(t):t);}function _$1(){o$1.some(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(q),t.__H.__h=[];}catch(u){return t.__H.__h=[],n.__e(u,t.__v),!0}}),o$1=[];}function g$1(n){"function"==typeof n.u&&n.u();}function q(n){n.u=n.__();}function x$1(n,t){return !n||t.some(function(t,u){return t!==n[u]})}function E$1(n,t){return "function"==typeof t?t(n):t}n.__r=function(n){c$1&&c$1(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(q),r.__h=[]);},n.diffed=function(t){f$1&&f$1(t);var u=t.__c;u&&u.__H&&u.__H.__h.length&&(1!==o$1.push(u)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u));})(_$1));},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||q(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),e$1&&e$1(t,u);},n.unmount=function(t){a$1&&a$1(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){n.__e(t,u.__v);}};

    function w$2(n,t){for(var e in t)n[e]=t[e];return n}function x$2(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}var E$2=function(n){var t,e;function r(t){var e;return (e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return x$2(this.props,n)||x$2(this.state,t)},r}(m);function C$1(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:x$2(this.props,n)}function r(t){return this.shouldComponentUpdate=e,h(n,t)}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r.t=!0,r}var _$2=n.__b;n.__b=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),_$2&&_$2(n);};var A$2="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k$1(n){function t(t,e){var r=w$2({},t);return delete r.ref,n(r,t.ref||e)}return t.$$typeof=A$2,t.render=t,t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var R=function(n,t){return n?x(n).reduce(function(n,e,r){return n.concat(t(e,r))},[]):null},F={map:R,forEach:R,count:function(n){return n?x(n).length:0},only:function(n){if(1!==(n=x(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:x},N$1=n.__e;function U(n){return n&&((n=w$2({},n)).__c=null,n.__k=n.__k&&n.__k.map(U)),n}function M$1(){this.__u=0,this.o=null,this.__b=null;}function L$1(n){var t=n.__.__c;return t&&t.u&&t.u(n)}function O(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return h(e,o)}return o.displayName="Lazy",o.t=!0,o}function P$1(){this.i=null,this.l=null;}n.__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(n,t.__c);N$1(n,t,e);},(M$1.prototype=new m).__c=function(n,t){var e=this;null==e.o&&(e.o=[]),e.o.push(t);var r=L$1(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i());};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c();};var i=function(){var n;if(!--e.__u)for(e.__v.__k[0]=e.state.u,e.setState({u:e.__b=null});n=e.o.pop();)n.forceUpdate();};e.__u++||e.setState({u:e.__b=e.__v.__k[0]}),n.then(u,u);},M$1.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=U(this.__b),this.__b=null),[h(m,null,t.u?null:n.children),t.u&&n.fallback]};var W=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2];}};(P$1.prototype=new m).u=function(n){var t=this,e=L$1(t.__v),r=t.l.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),W(t,n,r)):o();};e?e(u):u();}},P$1.prototype.render=function(n){this.i=null,this.l=new Map;var t=x(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},P$1.prototype.componentDidUpdate=P$1.prototype.componentDidMount=function(){var n=this;n.l.forEach(function(t,e){W(n,e,t);});};var j$1=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function z$1(n){var t=this,e=n.container,r=h(j$1,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.v.parentNode&&t.s.removeChild(t.v),D(t.h),t.p=!1),n.vnode?t.p?(e.__k=t.__k,H(r,e),t.__k=e.__k):(t.v=document.createTextNode(""),I("",e),e.appendChild(t.v),t.p=!0,t.s=e,H(r,e,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),D(t.h)),t.h=r,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),D(t.h);},null}function D$1(n,t){return h(z$1,{vnode:n,container:t})}var H$1=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;m.prototype.isReactComponent={};var T$2="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function V(n,t,e){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return H(n,t),"function"==typeof e&&e(),n?n.__c:null}function Z(n,t,e){return I(n,t),"function"==typeof e&&e(),n?n.__c:null}var I$1=n.event;function $$1(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n;}});}n.event=function(n){I$1&&(n=I$1(n)),n.persist=function(){};var t=!1,e=!1,r=n.stopPropagation;n.stopPropagation=function(){r.call(n),t=!0;};var o=n.preventDefault;return n.preventDefault=function(){o.call(n),e=!0;},n.isPropagationStopped=function(){return t},n.isDefaultPrevented=function(){return e},n.nativeEvent=n};var q$1={configurable:!0,get:function(){return this.class}},B=n.vnode;n.vnode=function(n){n.$$typeof=T$2;var t=n.type,e=n.props;if(t){if(e.class!=e.className&&(q$1.enumerable="className"in e,null!=e.className&&(e.class=e.className),Object.defineProperty(e,"className",q$1)),"function"!=typeof t){var r,o,u;for(u in e.defaultValue&&void 0!==e.value&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(x(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0);}),delete e.value),e)if(r=H$1.test(u))break;if(r)for(u in o=n.props={},e)o[H$1.test(u)?u.replace(/[A-Z0-9]/,"-$&").toLowerCase():u]=e[u];}!function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange]);}}}(),"function"==typeof t&&!t.m&&t.prototype&&($$1(t.prototype,"componentWillMount"),$$1(t.prototype,"componentWillReceiveProps"),$$1(t.prototype,"componentWillUpdate"),t.m=!0);}B&&B(n);};function J(n){return h.bind(null,n)}function K(n){return !!n&&n.$$typeof===T$2}function Q(n){return K(n)?L.apply(null,arguments):n}function X(n){return !!n.__k&&(H(null,n),!0)}function Y(n){return n&&(n.base||1===n.nodeType&&n)||null}var nn=function(n,t){return n(t)};var React = {useState:m$1,useReducer:p$1,useEffect:l,useLayoutEffect:y$1,useRef:d$1,useImperativeHandle:s$1,useMemo:h$1,useCallback:T$1,useContext:w$1,useDebugValue:A$1,version:"16.8.0",Children:F,render:V,hydrate:Z,unmountComponentAtNode:X,createPortal:D$1,createElement:h,createContext:M,createFactory:J,cloneElement:Q,createRef:p,Fragment:d,isValidElement:K,findDOMNode:Y,Component:m,PureComponent:E$2,memo:C$1,forwardRef:k$1,unstable_batchedUpdates:nn,StrictMode:d,Suspense:M$1,SuspenseList:P$1,lazy:O};

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret;

    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;

    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,

        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,

        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };

      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
    });

    var ReactReduxContext =
    /*#__PURE__*/
    React.createContext(null);

    // Default to a dummy "batch" implementation that just runs the callback
    function defaultNoopBatch(callback) {
      callback();
    }

    var batch = defaultNoopBatch; // Allow injecting another batching function later

    var setBatch = function setBatch(newBatch) {
      return batch = newBatch;
    }; // Supply a getter just to skip dealing with ESM bindings

    var getBatch = function getBatch() {
      return batch;
    };

    // well as nesting subscriptions of descendant components, so that we can ensure the
    // ancestor components re-render before descendants

    var nullListeners = {
      notify: function notify() {}
    };

    function createListenerCollection() {
      var batch = getBatch();
      var first = null;
      var last = null;
      return {
        clear: function clear() {
          first = null;
          last = null;
        },
        notify: function notify() {
          batch(function () {
            var listener = first;

            while (listener) {
              listener.callback();
              listener = listener.next;
            }
          });
        },
        get: function get() {
          var listeners = [];
          var listener = first;

          while (listener) {
            listeners.push(listener);
            listener = listener.next;
          }

          return listeners;
        },
        subscribe: function subscribe(callback) {
          var isSubscribed = true;
          var listener = last = {
            callback: callback,
            next: null,
            prev: last
          };

          if (listener.prev) {
            listener.prev.next = listener;
          } else {
            first = listener;
          }

          return function unsubscribe() {
            if (!isSubscribed || first === null) return;
            isSubscribed = false;

            if (listener.next) {
              listener.next.prev = listener.prev;
            } else {
              last = listener.prev;
            }

            if (listener.prev) {
              listener.prev.next = listener.next;
            } else {
              first = listener.next;
            }
          };
        }
      };
    }

    var Subscription =
    /*#__PURE__*/
    function () {
      function Subscription(store, parentSub) {
        this.store = store;
        this.parentSub = parentSub;
        this.unsubscribe = null;
        this.listeners = nullListeners;
        this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
      }

      var _proto = Subscription.prototype;

      _proto.addNestedSub = function addNestedSub(listener) {
        this.trySubscribe();
        return this.listeners.subscribe(listener);
      };

      _proto.notifyNestedSubs = function notifyNestedSubs() {
        this.listeners.notify();
      };

      _proto.handleChangeWrapper = function handleChangeWrapper() {
        if (this.onStateChange) {
          this.onStateChange();
        }
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.unsubscribe);
      };

      _proto.trySubscribe = function trySubscribe() {
        if (!this.unsubscribe) {
          this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
          this.listeners = createListenerCollection();
        }
      };

      _proto.tryUnsubscribe = function tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
          this.listeners.clear();
          this.listeners = nullListeners;
        }
      };

      return Subscription;
    }();

    function Provider(_ref) {
      var store = _ref.store,
          context = _ref.context,
          children = _ref.children;
      var contextValue = h$1(function () {
        var subscription = new Subscription(store);
        subscription.onStateChange = subscription.notifyNestedSubs;
        return {
          store: store,
          subscription: subscription
        };
      }, [store]);
      var previousState = h$1(function () {
        return store.getState();
      }, [store]);
      l(function () {
        var subscription = contextValue.subscription;
        subscription.trySubscribe();

        if (previousState !== store.getState()) {
          subscription.notifyNestedSubs();
        }

        return function () {
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;
        };
      }, [contextValue, previousState]);
      var Context = context || ReactReduxContext;
      return React.createElement(Context.Provider, {
        value: contextValue
      }, children);
    }

    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b$1="function"===typeof Symbol&&Symbol.for,c$2=b$1?Symbol.for("react.element"):60103,d$2=b$1?Symbol.for("react.portal"):60106,e$2=b$1?Symbol.for("react.fragment"):60107,f$2=b$1?Symbol.for("react.strict_mode"):60108,g$2=b$1?Symbol.for("react.profiler"):60114,h$2=b$1?Symbol.for("react.provider"):60109,k$2=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$2=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$2=b$1?Symbol.for("react.suspense"):60113,q$2=b$1?
    Symbol.for("react.suspense_list"):60120,r$2=b$1?Symbol.for("react.memo"):60115,t$2=b$1?Symbol.for("react.lazy"):60116,v$2=b$1?Symbol.for("react.block"):60121,w$3=b$1?Symbol.for("react.fundamental"):60117,x$3=b$1?Symbol.for("react.responder"):60118,y$2=b$1?Symbol.for("react.scope"):60119;
    function z$2(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$2:switch(a=a.type,a){case l$1:case m$2:case e$2:case g$2:case f$2:case p$2:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case n$1:case t$2:case r$2:case h$2:return a;default:return u}}case d$2:return u}}}function A$3(a){return z$2(a)===m$2}var AsyncMode=l$1;var ConcurrentMode=m$2;var ContextConsumer=k$2;var ContextProvider=h$2;var Element=c$2;var ForwardRef=n$1;var Fragment=e$2;var Lazy=t$2;var Memo=r$2;var Portal=d$2;
    var Profiler=g$2;var StrictMode=f$2;var Suspense=p$2;var isAsyncMode=function(a){return A$3(a)||z$2(a)===l$1};var isConcurrentMode=A$3;var isContextConsumer=function(a){return z$2(a)===k$2};var isContextProvider=function(a){return z$2(a)===h$2};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$2};var isForwardRef=function(a){return z$2(a)===n$1};var isFragment=function(a){return z$2(a)===e$2};var isLazy=function(a){return z$2(a)===t$2};
    var isMemo=function(a){return z$2(a)===r$2};var isPortal=function(a){return z$2(a)===d$2};var isProfiler=function(a){return z$2(a)===g$2};var isStrictMode=function(a){return z$2(a)===f$2};var isSuspense=function(a){return z$2(a)===p$2};
    var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$2||a===m$2||a===g$2||a===f$2||a===p$2||a===q$2||"object"===typeof a&&null!==a&&(a.$$typeof===t$2||a.$$typeof===r$2||a.$$typeof===h$2||a.$$typeof===k$2||a.$$typeof===n$1||a.$$typeof===w$3||a.$$typeof===x$3||a.$$typeof===y$2||a.$$typeof===v$2)};var typeOf=z$2;

    var reactIs_production_min = {
    	AsyncMode: AsyncMode,
    	ConcurrentMode: ConcurrentMode,
    	ContextConsumer: ContextConsumer,
    	ContextProvider: ContextProvider,
    	Element: Element,
    	ForwardRef: ForwardRef,
    	Fragment: Fragment,
    	Lazy: Lazy,
    	Memo: Memo,
    	Portal: Portal,
    	Profiler: Profiler,
    	StrictMode: StrictMode,
    	Suspense: Suspense,
    	isAsyncMode: isAsyncMode,
    	isConcurrentMode: isConcurrentMode,
    	isContextConsumer: isContextConsumer,
    	isContextProvider: isContextProvider,
    	isElement: isElement,
    	isForwardRef: isForwardRef,
    	isFragment: isFragment,
    	isLazy: isLazy,
    	isMemo: isMemo,
    	isPortal: isPortal,
    	isProfiler: isProfiler,
    	isStrictMode: isStrictMode,
    	isSuspense: isSuspense,
    	isValidElementType: isValidElementType,
    	typeOf: typeOf
    };

    var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_production_min;
    }
    });

    var FORWARD_REF_STATICS = {
      '$$typeof': true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      '$$typeof': true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

    // To get around it, we can conditionally useEffect on the server (no-op) and
    // useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
    // subscription callback always has the selector from the latest render commit
    // available, otherwise a store update may happen between render and the effect,
    // which may cause missed updates; we also must ensure the store subscription
    // is created synchronously, otherwise a store update may occur before the
    // subscription is created and an inconsistent state may be observed

    var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? y$1 : l;

    function symbolObservablePonyfill(root) {
    	var result;
    	var Symbol = root.Symbol;

    	if (typeof Symbol === 'function') {
    		if (Symbol.observable) {
    			result = Symbol.observable;
    		} else {
    			result = Symbol('observable');
    			Symbol.observable = result;
    		}
    	} else {
    		result = '@@observable';
    	}

    	return result;
    }

    /* global window */

    var root;

    if (typeof self !== 'undefined') {
      root = self;
    } else if (typeof window !== 'undefined') {
      root = window;
    } else if (typeof global !== 'undefined') {
      root = global;
    } else if (typeof module !== 'undefined') {
      root = module;
    } else {
      root = Function('return this')();
    }

    var result = symbolObservablePonyfill(root);

    /**
     * These are private action types reserved by Redux.
     * For any unknown actions, you must return the current state.
     * If the current state is undefined, you must return the initial state.
     * Do not reference these action types directly in your code.
     */
    var randomString = function randomString() {
      return Math.random().toString(36).substring(7).split('').join('.');
    };

    var ActionTypes = {
      INIT: "@@redux/INIT" + randomString(),
      REPLACE: "@@redux/REPLACE" + randomString(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
      }
    };

    /**
     * @param {any} obj The object to inspect.
     * @returns {boolean} True if the argument appears to be a plain object.
     */
    function isPlainObject(obj) {
      if (typeof obj !== 'object' || obj === null) return false;
      var proto = obj;

      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }

      return Object.getPrototypeOf(obj) === proto;
    }

    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */

    function createStore(reducer, preloadedState, enhancer) {
      var _ref2;

      if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
      }

      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
      }

      if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
          throw new Error('Expected the enhancer to be a function.');
        }

        return enhancer(createStore)(reducer, preloadedState);
      }

      if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
      }

      var currentReducer = reducer;
      var currentState = preloadedState;
      var currentListeners = [];
      var nextListeners = currentListeners;
      var isDispatching = false;
      /**
       * This makes a shallow copy of currentListeners so we can use
       * nextListeners as a temporary list while dispatching.
       *
       * This prevents any bugs around consumers calling
       * subscribe/unsubscribe in the middle of a dispatch.
       */

      function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice();
        }
      }
      /**
       * Reads the state tree managed by the store.
       *
       * @returns {any} The current state tree of your application.
       */


      function getState() {
        if (isDispatching) {
          throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }

        return currentState;
      }
      /**
       * Adds a change listener. It will be called any time an action is dispatched,
       * and some part of the state tree may potentially have changed. You may then
       * call `getState()` to read the current state tree inside the callback.
       *
       * You may call `dispatch()` from a change listener, with the following
       * caveats:
       *
       * 1. The subscriptions are snapshotted just before every `dispatch()` call.
       * If you subscribe or unsubscribe while the listeners are being invoked, this
       * will not have any effect on the `dispatch()` that is currently in progress.
       * However, the next `dispatch()` call, whether nested or not, will use a more
       * recent snapshot of the subscription list.
       *
       * 2. The listener should not expect to see all state changes, as the state
       * might have been updated multiple times during a nested `dispatch()` before
       * the listener is called. It is, however, guaranteed that all subscribers
       * registered before the `dispatch()` started will be called with the latest
       * state by the time it exits.
       *
       * @param {Function} listener A callback to be invoked on every dispatch.
       * @returns {Function} A function to remove this change listener.
       */


      function subscribe(listener) {
        if (typeof listener !== 'function') {
          throw new Error('Expected the listener to be a function.');
        }

        if (isDispatching) {
          throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
        }

        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
          if (!isSubscribed) {
            return;
          }

          if (isDispatching) {
            throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
          }

          isSubscribed = false;
          ensureCanMutateNextListeners();
          var index = nextListeners.indexOf(listener);
          nextListeners.splice(index, 1);
          currentListeners = null;
        };
      }
      /**
       * Dispatches an action. It is the only way to trigger a state change.
       *
       * The `reducer` function, used to create the store, will be called with the
       * current state tree and the given `action`. Its return value will
       * be considered the **next** state of the tree, and the change listeners
       * will be notified.
       *
       * The base implementation only supports plain object actions. If you want to
       * dispatch a Promise, an Observable, a thunk, or something else, you need to
       * wrap your store creating function into the corresponding middleware. For
       * example, see the documentation for the `redux-thunk` package. Even the
       * middleware will eventually dispatch plain object actions using this method.
       *
       * @param {Object} action A plain object representing “what changed”. It is
       * a good idea to keep actions serializable so you can record and replay user
       * sessions, or use the time travelling `redux-devtools`. An action must have
       * a `type` property which may not be `undefined`. It is a good idea to use
       * string constants for action types.
       *
       * @returns {Object} For convenience, the same action object you dispatched.
       *
       * Note that, if you use a custom middleware, it may wrap `dispatch()` to
       * return something else (for example, a Promise you can await).
       */


      function dispatch(action) {
        if (!isPlainObject(action)) {
          throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }

        if (typeof action.type === 'undefined') {
          throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }

        if (isDispatching) {
          throw new Error('Reducers may not dispatch actions.');
        }

        try {
          isDispatching = true;
          currentState = currentReducer(currentState, action);
        } finally {
          isDispatching = false;
        }

        var listeners = currentListeners = nextListeners;

        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener();
        }

        return action;
      }
      /**
       * Replaces the reducer currently used by the store to calculate the state.
       *
       * You might need this if your app implements code splitting and you want to
       * load some of the reducers dynamically. You might also need this if you
       * implement a hot reloading mechanism for Redux.
       *
       * @param {Function} nextReducer The reducer for the store to use instead.
       * @returns {void}
       */


      function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
          throw new Error('Expected the nextReducer to be a function.');
        }

        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.

        dispatch({
          type: ActionTypes.REPLACE
        });
      }
      /**
       * Interoperability point for observable/reactive libraries.
       * @returns {observable} A minimal observable of state changes.
       * For more information, see the observable proposal:
       * https://github.com/tc39/proposal-observable
       */


      function observable() {
        var _ref;

        var outerSubscribe = subscribe;
        return _ref = {
          /**
           * The minimal observable subscription method.
           * @param {Object} observer Any object that can be used as an observer.
           * The observer object should have a `next` method.
           * @returns {subscription} An object with an `unsubscribe` method that can
           * be used to unsubscribe the observable from the store, and prevent further
           * emission of values from the observable.
           */
          subscribe: function subscribe(observer) {
            if (typeof observer !== 'object' || observer === null) {
              throw new TypeError('Expected the observer to be an object.');
            }

            function observeState() {
              if (observer.next) {
                observer.next(getState());
              }
            }

            observeState();
            var unsubscribe = outerSubscribe(observeState);
            return {
              unsubscribe: unsubscribe
            };
          }
        }, _ref[result] = function () {
          return this;
        }, _ref;
      } // When a store is created, an "INIT" action is dispatched so that every
      // reducer returns their initial state. This effectively populates
      // the initial state tree.


      dispatch({
        type: ActionTypes.INIT
      });
      return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
      }, _ref2[result] = observable, _ref2;
    }

    /**
     * Composes single-argument functions from right to left. The rightmost
     * function can take multiple arguments as it provides the signature for
     * the resulting composite function.
     *
     * @param {...Function} funcs The functions to compose.
     * @returns {Function} A function obtained by composing the argument functions
     * from right to left. For example, compose(f, g, h) is identical to doing
     * (...args) => f(g(h(...args))).
     */
    function compose() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      if (funcs.length === 0) {
        return function (arg) {
          return arg;
        };
      }

      if (funcs.length === 1) {
        return funcs[0];
      }

      return funcs.reduce(function (a, b) {
        return function () {
          return a(b.apply(void 0, arguments));
        };
      });
    }

    /**
     * A hook to access the value of the `ReactReduxContext`. This is a low-level
     * hook that you should usually not need to call directly.
     *
     * @returns {any} the value of the `ReactReduxContext`
     *
     * @example
     *
     * import React from 'react'
     * import { useReduxContext } from 'react-redux'
     *
     * export const CounterComponent = ({ value }) => {
     *   const { store } = useReduxContext()
     *   return <div>{store.getState()}</div>
     * }
     */

    function useReduxContext() {
      var contextValue = w$1(ReactReduxContext);

      return contextValue;
    }

    /**
     * Hook factory, which creates a `useStore` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useStore` hook bound to the specified context.
     */

    function createStoreHook(context) {
      if (context === void 0) {
        context = ReactReduxContext;
      }

      var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
        return w$1(context);
      };
      return function useStore() {
        var _useReduxContext = useReduxContext$1(),
            store = _useReduxContext.store;

        return store;
      };
    }
    /**
     * A hook to access the redux store.
     *
     * @returns {any} the redux store
     *
     * @example
     *
     * import React from 'react'
     * import { useStore } from 'react-redux'
     *
     * export const ExampleComponent = () => {
     *   const store = useStore()
     *   return <div>{store.getState()}</div>
     * }
     */

    var useStore =
    /*#__PURE__*/
    createStoreHook();

    /**
     * Hook factory, which creates a `useDispatch` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useDispatch` hook bound to the specified context.
     */

    function createDispatchHook(context) {
      if (context === void 0) {
        context = ReactReduxContext;
      }

      var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
      return function useDispatch() {
        var store = useStore$1();
        return store.dispatch;
      };
    }
    /**
     * A hook to access the redux `dispatch` function.
     *
     * @returns {any|function} redux store's `dispatch` function
     *
     * @example
     *
     * import React, { useCallback } from 'react'
     * import { useDispatch } from 'react-redux'
     *
     * export const CounterComponent = ({ value }) => {
     *   const dispatch = useDispatch()
     *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
     *   return (
     *     <div>
     *       <span>{value}</span>
     *       <button onClick={increaseCounter}>Increase counter</button>
     *     </div>
     *   )
     * }
     */

    var useDispatch =
    /*#__PURE__*/
    createDispatchHook();

    var refEquality = function refEquality(a, b) {
      return a === b;
    };

    function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
      var _useReducer = p$1(function (s) {
        return s + 1;
      }, 0),
          forceRender = _useReducer[1];

      var subscription = h$1(function () {
        return new Subscription(store, contextSub);
      }, [store, contextSub]);
      var latestSubscriptionCallbackError = d$1();
      var latestSelector = d$1();
      var latestSelectedState = d$1();
      var selectedState;

      try {
        if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
          selectedState = selector(store.getState());
        } else {
          selectedState = latestSelectedState.current;
        }
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
        }

        throw err;
      }

      useIsomorphicLayoutEffect(function () {
        latestSelector.current = selector;
        latestSelectedState.current = selectedState;
        latestSubscriptionCallbackError.current = undefined;
      });
      useIsomorphicLayoutEffect(function () {
        function checkForUpdates() {
          try {
            var newSelectedState = latestSelector.current(store.getState());

            if (equalityFn(newSelectedState, latestSelectedState.current)) {
              return;
            }

            latestSelectedState.current = newSelectedState;
          } catch (err) {
            // we ignore all errors here, since when the component
            // is re-rendered, the selectors are called again, and
            // will throw again, if neither props nor store state
            // changed
            latestSubscriptionCallbackError.current = err;
          }

          forceRender({});
        }

        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe();
        checkForUpdates();
        return function () {
          return subscription.tryUnsubscribe();
        };
      }, [store, subscription]);
      return selectedState;
    }
    /**
     * Hook factory, which creates a `useSelector` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useSelector` hook bound to the specified context.
     */


    function createSelectorHook(context) {
      if (context === void 0) {
        context = ReactReduxContext;
      }

      var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
        return w$1(context);
      };
      return function useSelector(selector, equalityFn) {
        if (equalityFn === void 0) {
          equalityFn = refEquality;
        }

        var _useReduxContext = useReduxContext$1(),
            store = _useReduxContext.store,
            contextSub = _useReduxContext.subscription;

        return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
      };
    }
    /**
     * A hook to access the redux store's state. This hook takes a selector function
     * as an argument. The selector is called with the store state.
     *
     * This hook takes an optional equality comparison function as the second parameter
     * that allows you to customize the way the selected state is compared to determine
     * whether the component needs to be re-rendered.
     *
     * @param {Function} selector the selector function
     * @param {Function=} equalityFn the function that will be used to determine equality
     *
     * @returns {any} the selected state
     *
     * @example
     *
     * import React from 'react'
     * import { useSelector } from 'react-redux'
     *
     * export const CounterComponent = () => {
     *   const counter = useSelector(state => state.counter)
     *   return <div>{counter}</div>
     * }
     */

    var useSelector =
    /*#__PURE__*/
    createSelectorHook();

    setBatch(nn);

    /* eslint no-plusplus: 0 */

    const PATCH_TYPE_CREATE_OBJECT = 1;
    const PATCH_TYPE_DELETE_OBJECT = 2;
    const PATCH_TYPE_RETURN_STATE = 3;

    /* eslint no-param-reassign: 0, no-console: 0 */

    const REPLACE_STATE = Symbol('REPLACE_STATE');

    const applyPatches = (objMap, oldState, patches) => {
      let state = oldState;
      patches.forEach((patch) => {
        switch (patch.type) {
          case PATCH_TYPE_CREATE_OBJECT: {
            const obj = patch.isArray ? [] : {};
            Object.keys(patch.props).forEach((name) => {
              const value = patch.props[name];
              if (typeof value === 'object' && value !== null) {
                obj[name] = objMap.get(value.id);
              } else {
                obj[name] = value;
              }
            });
            objMap.set(patch.id, obj);
            break;
          }
          case PATCH_TYPE_DELETE_OBJECT:
            objMap.delete(patch.id);
            break;
          case PATCH_TYPE_RETURN_STATE:
            state = objMap.get(patch.id);
            break;
          default:
            throw new Error(`wrapStore unknown patch type: ${patch.type}`);
        }
      });
      return state;
    };

    const applyWorker = worker => createStoreOrig => (...args) => {
      const store = createStoreOrig(...args);
      const dispatch = (action) => {
        if (typeof action.type === 'string') {
          worker.postMessage(action);
        } else {
          store.dispatch(action);
        }
      };
      const objMap = new Map();
      worker.onmessage = (e) => {
        const state = applyPatches(objMap, store.getState(), e.data);
        store.dispatch({ type: REPLACE_STATE, state });
      };
      worker.onerror = () => {
        console.error('wrapStore worker error');
      };
      worker.onmessageerror = () => {
        console.error('wrapStore worker message error');
      };
      return {
        ...store,
        dispatch,
      };
    };

    const wrapStore = (worker, initialState, enhancer) => {
      const reducer = (state, action) => {
        if (action.type === REPLACE_STATE) return action.state;
        return state;
      };
      const store = createStore(
        reducer,
        initialState,
        compose(applyWorker(worker), enhancer || (x => x)),
      );
      return store;
    };

    var n$2=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n$2(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$3=new Map;function e$3(s){var r=t$3.get(this);return r||(r=new Map,t$3.set(this,r)),(r=n$2(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

    var m$3=e$3.bind(h);

    var Grid = function (_a) {
        var children = _a.children;
        return m$3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  <div class=\"grid dynamic\">\n    ", "\n  </div>\n"], ["\n  <div class=\"grid dynamic\">\n    ",
            "\n  </div>\n"
            /*
            
            m_h = (16/25) * h
            w / (16/25)h = 16 / 9
            
            
            */ ])), children.map(function (child) { return m$3(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div class=\"grid-child\">", "</div>\n    "], ["\n      <div class=\"grid-child\">", "</div>\n    "])), child); }));
    };
    var templateObject_1, templateObject_2;
    /*

    m_h = (16/25) * h
    w / (16/25)h = 16 / 9


    */

    var Spacer = function (_a) {
        var size = _a.size, _b = _a.align, align = _b === void 0 ? 'start' : _b, children = _a.children;
        return (m$3(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  <div class=\"spacer-", " spacer-align-", "\">\n    ", "\n  </div>\n  "], ["\n  <div class=\"spacer-", " spacer-align-", "\">\n    ", "\n  </div>\n  "])), size, align, children));
    };
    var templateObject_1$1;

    var Card = function (_a) {
        var title = _a.title, detail = _a.detail, image = _a.image;
        return m$3(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  <div class=\"card\">\n    <img src=\"", "\" class=\"card-media\"></img>\n    <div class=\"card-text\">\n      <", " size=\"1\">\n        <h1 class=\"dynamic\">", "</h1>\n        <p class=\"card-detail dynamic\">\n          ", "\n        </p>\n      </", ">\n    </div>\n  </div>\n  "], ["\n  <div class=\"card\">\n    <img src=\"", "\" class=\"card-media\"></img>\n    <div class=\"card-text\">\n      <", " size=\"1\">\n        <h1 class=\"dynamic\">", "</h1>\n        <p class=\"card-detail dynamic\">\n          ", "\n        </p>\n      </", ">\n    </div>\n  </div>\n  "])), image, Spacer, title, detail, Spacer);
    };
    var templateObject_1$2;

    function App() {
        var cards = useSelector(function (state) { return state.cards; });
        var dispatch = useDispatch();
        console.log(cards);
        return m$3(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    <", ">\n      ", "\n    </", ">\n  "], ["\n    <", ">\n      ",
            "\n    </", ">\n  "])), Grid, cards.map(function (card) { return m$3(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n        <", " title=", " detail=", " image=", " />\n      "], ["\n        <", " title=", " detail=", " image=", " />\n      "])), Card, card.title, card.detail, card.image); }), Grid);
    }
    var templateObject_1$3, templateObject_2$1;

    var initialState = {
        cards: [
            {
                title: 'The Fey Forest',
                detail: 'You find yourself in a dark tangled Wood. What mysteries lurk here?',
                image: '/images/fey.png'
            },
            {
                title: 'Helena Bay',
                detail: 'Waves crash across the rocks. This is usually a quiet plcae, but a night it comes alive.',
                image: '/images/coastal.jpg'
            }
        ]
    };

    var worker = new Worker('worker.js', { type: 'module' });
    var store = wrapStore(worker, initialState);
    V(m$3(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  <", " store=", ">\n    <", " />\n  </", ">\n  "], ["\n  <", " store=", ">\n    <", " />\n  </", ">\n  "])), Provider, store, App, Provider), document.body);
    var templateObject_1$4;

}());
