(self.webpackChunkfreedomotic_site=self.webpackChunkfreedomotic_site||[]).push([[678],{2993:function(e){"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;function o(e,l){if(e===l)return!0;if(e&&l&&"object"==typeof e&&"object"==typeof l){var i,c,s,u=t(e),m=t(l);if(u&&m){if((c=e.length)!=l.length)return!1;for(i=c;0!=i--;)if(!o(e[i],l[i]))return!1;return!0}if(u!=m)return!1;var f=e instanceof Date,d=l instanceof Date;if(f!=d)return!1;if(f&&d)return e.getTime()==l.getTime();var E=e instanceof RegExp,p=l instanceof RegExp;if(E!=p)return!1;if(E&&p)return e.toString()==l.toString();var T=n(e);if((c=T.length)!==n(l).length)return!1;for(i=c;0!=i--;)if(!r.call(l,T[i]))return!1;if(a&&e instanceof Element&&l instanceof Element)return e===l;for(i=c;0!=i--;)if(!("_owner"===(s=T[i])&&e.$$typeof||o(e[s],l[s])))return!1;return!0}return e!=e&&l!=l}e.exports=function(e,t){try{return o(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},7701:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=m(n(7294)),l=m(n(5697)),i=m(n(4839)),c=m(n(2993)),s=n(1640),u=n(286);function m(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var d,E,p,T=(0,i.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),A=(d=T,p=E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,l=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=i,t.titleAttributes=r({},l),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},l)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},l)})}return r({},o,((n={})[a.type]=r({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,l=f(a,["children"]),i=(0,s.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),E.propTypes={base:l.default.object,bodyAttributes:l.default.object,children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),defaultTitle:l.default.string,defer:l.default.bool,encodeSpecialCharacters:l.default.bool,htmlAttributes:l.default.object,link:l.default.arrayOf(l.default.object),meta:l.default.arrayOf(l.default.object),noscript:l.default.arrayOf(l.default.object),onChangeClientState:l.default.func,script:l.default.arrayOf(l.default.object),style:l.default.arrayOf(l.default.object),title:l.default.string,titleAttributes:l.default.object,titleTemplate:l.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=d.peek,E.rewind=function(){var e=d.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);A.renderStatic=A.rewind,t.ZP=A},286:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},1640:function(e,t,n){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(7294)),l=c(n(6494)),i=n(286);function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},m=function(e){var t=T(e,i.TAG_NAMES.TITLE),n=T(e,i.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,i.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return T(e,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[i.TAG_NAMES.BASE]})).map((function(e){return e[i.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},p=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),l=0;l<o.length;l++){var c=o[l],s=c.toLowerCase();-1===t.indexOf(s)||n===i.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===i.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==i.TAG_PROPERTIES.INNER_HTML&&c!==i.TAG_PROPERTIES.CSS_TEXT&&c!==i.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var s=o[c],u=(0,l.default)({},a[s],r[s]);a[s]=u}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:n.g.requestAnimationFrame||A,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:n.g.cancelAnimationFrame||h,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,m=e.styleTags,f=e.title,d=e.titleAttributes;S(i.TAG_NAMES.BODY,r),S(i.TAG_NAMES.HTML,a),P(f,d);var E={baseTag:C(i.TAG_NAMES.BASE,n),linkTags:C(i.TAG_NAMES.LINK,o),metaTags:C(i.TAG_NAMES.META,l),noscriptTags:C(i.TAG_NAMES.NOSCRIPT,c),scriptTags:C(i.TAG_NAMES.SCRIPT,u),styleTags:C(i.TAG_NAMES.STYLE,m)},p={},T={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(T[e]=E[e].oldTags)})),t&&t(),s(e,p,T)},N=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),S(i.TAG_NAMES.TITLE,t)},S=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(i.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),l=Object.keys(t),c=0;c<l.length;c++){var s=l[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var m=o.indexOf(s);-1!==m&&o.splice(m,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(i.HELMET_ATTRIBUTE):n.getAttribute(i.HELMET_ATTRIBUTE)!==l.join(",")&&n.setAttribute(i.HELMET_ATTRIBUTE,l.join(","))}},C=function(e,t){var n=document.head||document.querySelector(i.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+i.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],l=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===i.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===i.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(i.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return l=t,n.isEqualNode(e)}))?a.splice(l,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case i.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[i.HELMET_ATTRIBUTE]=!0,a=I(n,r),[o.default.createElement(i.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),o=N(t);return a?"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+i.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[i.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=i.REACT_TAG_MAP[e]||e;if(n===i.TAG_PROPERTIES.INNER_HTML||n===i.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===i.TAG_PROPERTIES.INNER_HTML||e===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",l=-1===i.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+a+(l?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){w&&y(w),e.defer?w=b((function(){v(e,(function(){w=null}))})):(v(e),w=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,m=e.title,f=void 0===m?"":m,d=e.titleAttributes;return{base:M(i.TAG_NAMES.BASE,t,r),bodyAttributes:M(i.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(i.ATTRIBUTE_NAMES.HTML,a,r),link:M(i.TAG_NAMES.LINK,o,r),meta:M(i.TAG_NAMES.META,l,r),noscript:M(i.TAG_NAMES.NOSCRIPT,c,r),script:M(i.TAG_NAMES.SCRIPT,s,r),style:M(i.TAG_NAMES.STYLE,u,r),title:M(i.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:E([i.TAG_PROPERTIES.HREF],e),bodyAttributes:d(i.ATTRIBUTE_NAMES.BODY,e),defer:T(e,i.HELMET_PROPS.DEFER),encode:T(e,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(i.ATTRIBUTE_NAMES.HTML,e),linkTags:p(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],e),metaTags:p(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:p(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],e),title:m(e),titleAttributes:d(i.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=g},4839:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(7294),o=r(a),l=r(n(6872));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function m(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=a.prototype;return i.shouldComponentUpdate=function(e){return!l(e,this.props)},i.componentWillMount=function(){u.push(this),m()},i.componentDidUpdate=function(){m()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),m()},i.render=function(){return o.createElement(r,this.props)},a}(a.Component);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},6872:function(e){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!i(s))return!1;var u=e[s],m=t[s];if(!1===(a=n?n.call(r,u,m,s):void 0)||void 0===a&&u!==m)return!1}return!0}},7658:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1721),a=n(7294);let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement("section",{id:"header"},a.createElement("div",{className:"inner"},a.createElement("img",{src:"data:image/png;base64,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",width:"400",alt:""}),a.createElement("h2",null,"Open IoT Framework"),a.createElement("h3",null,"Thing Wider"),a.createElement("ul",{className:"actions"},a.createElement("li",null,a.createElement("a",{href:"#one",className:"button scrolly"},"Discover")))))},t}(a.Component);var l=o;let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement("section",{id:"footer"},a.createElement("ul",{className:"icons"},a.createElement("li",null,a.createElement("a",{href:"https://twitter.com/freedomotic",className:"icon alt fa-twitter"},a.createElement("span",{className:"label"},"Twitter"))),a.createElement("li",null,a.createElement("a",{href:"https://www.facebook.com/Freedomotic-Open-Source-Building-Automation-189816744396642",className:"icon alt fa-facebook"},a.createElement("span",{className:"label"},"Facebook"))),a.createElement("li",null,a.createElement("a",{href:"https://www.linkedin.com/groups/5099925",className:"icon alt fa-linkedin"},a.createElement("span",{className:"label"},"LinkedIn"))),a.createElement("li",null,a.createElement("a",{href:"https://github.com/freedomotic",className:"icon alt fa-github"},a.createElement("span",{className:"label"},"GitHub"))),a.createElement("li",null,a.createElement("a",{href:"https://www.youtube.com/playlist?list=PLCbSCJEIR6CpZd7sEI2YTWkFObGCgTj45",className:"icon alt fa-youtube"},a.createElement("span",{className:"label"},"YouTube"))),a.createElement("li",null,a.createElement("a",{href:"https://www.slideshare.net/freedomotic/",className:"icon alt fa-slideshare"},a.createElement("span",{className:"label"},"SlideShare"))),a.createElement("li",null,a.createElement("a",{href:"mailto:info@freedomotic-iot.com",className:"icon alt fa-envelope"},a.createElement("span",{className:"label"},"Email")))),a.createElement("ul",{className:"copyright"},a.createElement("li",null,"© 2009-2023 Freedomotic Team"),a.createElement("li",null,"Design: ",a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))},t}(a.Component);var c=i;var s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({loading:""})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){const{children:e}=this.props;return a.createElement("div",{className:"body "+this.state.loading},a.createElement(l,null),e,a.createElement(c,null))},t}(a.Component)},191:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(1721),a=n(7294),o=n(7701),l=n(7658),i=n.p+"static/map-f70bdc46f167e60aa2cfcbad51de4760.png",c=n.p+"static/plugin-ba70952137284d0bb28d57a971899021.jpg",s=n.p+"static/developer-manual-6f66a03692dd9f7ae5479644d415333a.png",u=n.p+"static/user-guide-ab499cf6aaddafa3b718a21a78333576.jpg";let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement(l.Z,null,a.createElement(o.ZP,{title:"Freedomotic IoT Framework"}),a.createElement("section",{id:"one",className:"main style1"},a.createElement("div",{className:"grid-wrapper"},a.createElement("div",{className:"col-6"},a.createElement("header",{className:"major"},a.createElement("h2",null,"What is Freedomotic?",a.createElement("br",null))),a.createElement("p",null,"Freedomotic is an open source, flexible and secure Internet of Things (IoT) development framework. It can be used to build and manage modern smart spaces. It is targeted at individuals (home automation) as well as businesses (smart retail environments, ambient aware marketing, monitoring and analytics, etc). ",a.createElement("br",null),"Freedomotic can interact with well-known automation protocols as well as with “do it yourself” solutions. It treats the web, social networks and branded frontends as first class components of the system.")),a.createElement("div",{className:"col-6"},a.createElement("span",{className:"image fit"},a.createElement("img",{src:i,alt:""}))))),a.createElement("section",{id:"two",className:"main style2"},a.createElement("div",{className:"grid-wrapper"},a.createElement("div",{className:"col-6"},a.createElement("ul",{className:"major-icons"},a.createElement("li",null,a.createElement("span",{className:"icon style1 major fa-code"})),a.createElement("li",null,a.createElement("span",{className:"icon style2 major fa-bolt"})),a.createElement("li",null,a.createElement("span",{className:"icon style3 major fa-camera-retro"})),a.createElement("li",null,a.createElement("span",{className:"icon style4 major fa-cog"})),a.createElement("li",null,a.createElement("span",{className:"icon style5 major fa-desktop"})),a.createElement("li",null,a.createElement("span",{className:"icon style6 major fa-calendar"})))),a.createElement("div",{className:"col-6"},a.createElement("header",{className:"major"},a.createElement("h2",null,"Features")),a.createElement("p",null,a.createElement("b",null,"Identity:")," All things have a persistent unique identifier."),a.createElement("p",null,a.createElement("b",null,"Services:")," The framework is centered around the concept of services for users."),a.createElement("p",null,a.createElement("b",null,"Simulation:")," Freedomotic allows you to fully run it without any sensor or actuator connected. You can configure and test your automation before buying the hardware."),a.createElement("p",null,a.createElement("b",null,"Distributed:")," Freedomotic can be run as a decentralized peer to peer network with no single point of failure. "),a.createElement("p",null,a.createElement("b",null,"Plugins:")," You can install new plugins at runtime enriching the features. "),a.createElement("p",null,a.createElement("b",null,"Auto discovery:")," Freedomotic can autodiscover the objects (eg: home automation devices) deployed in your real environment. No more diving into complex configuration files."),a.createElement("p",null,a.createElement("b",null,"History aware:")," It can track any status change in the environment and update them in a database for analysis."),a.createElement("p",null,a.createElement("b",null,"Secure, Multilanguage and Multiuser ..."))))),a.createElement("section",{id:"three",className:"main style1 special"},a.createElement("div",{className:"grid-wrapper"},a.createElement("div",{className:"col-12"},a.createElement("header",{className:"major"},a.createElement("h2",null,a.createElement("strong",null,"Learn and Contribute"))),a.createElement("p",null,"Learn how to use Freedomotic and how to work internally or develop your own plugin.")),a.createElement("div",{className:"col-4"},a.createElement("span",{className:"image fit"},a.createElement("img",{src:c,alt:""})),a.createElement("h3",null,a.createElement("strong",null,"Plugins")),a.createElement("p",null,"Download and install a plugin to extend the functionalities of your framework."),a.createElement("ul",{className:"actions"},a.createElement("li",null,a.createElement("span",{className:"button"},a.createElement("a",{href:"https://github.com/freedomotic/freedomotic-plugins-marketplace",target:"_blank",rel:"noreferrer"},"Go to Marketplace"))))),a.createElement("div",{className:"col-4"},a.createElement("span",{className:"image fit"},a.createElement("img",{src:s,alt:""})),a.createElement("h3",null,a.createElement("strong",null,"Developer Manual")),a.createElement("p",null,"Learn the framework architecture, explore internals and write your own plugins."),a.createElement("ul",{className:"actions"},a.createElement("li",null,a.createElement("span",{className:"button"},a.createElement("a",{href:"https://freedomotic-developer-manual.readthedocs.io/en/latest/",target:"_blank",rel:"noreferrer"},"Online"))),a.createElement("li",null,a.createElement("span",{className:"button"},a.createElement("a",{href:"https://freedomotic-developer-manual.readthedocs.io/_/downloads/en/latest/pdf/",target:"_blank",rel:"noreferrer"},"PDF"))))),a.createElement("div",{className:"col-4"},a.createElement("span",{className:"image fit"},a.createElement("img",{src:u,alt:""})),a.createElement("h3",null,a.createElement("strong",null,"User Manual")),a.createElement("p",null,"How to download, install and configure your instance of Freedomotic."),a.createElement("ul",{className:"actions"},a.createElement("li",null,a.createElement("span",{className:"button"},a.createElement("a",{href:"https://freedomotic-user-manual.readthedocs.io/en/latest/",target:"_blank",rel:"noreferrer"},"Online"))),a.createElement("li",null,a.createElement("span",{className:"button"},a.createElement("a",{href:"https://freedomotic-user-manual.readthedocs.io/_/downloads/en/latest/pdf/",target:"_blank",rel:"noreferrer"},"PDF"))))))),a.createElement("section",{id:"fourth",className:"main style2 special"},a.createElement("div",{className:"container"},a.createElement("header",{className:"major"},a.createElement("h2",null,"Join our community")),a.createElement("p",null,"We have an international and an Italian community"),a.createElement("ul",{className:"actions uniform"},a.createElement("li",null,a.createElement("span",{className:"button special"},a.createElement("a",{href:"https://groups.google.com/forum/#!forum/freedom-domotics",target:"_blank",rel:"noreferrer"},"International Community"))),a.createElement("li",null,a.createElement("span",{className:"button"},a.createElement("a",{href:"https://groups.google.com/forum/#!forum/freedomotic-it",target:"_blank",rel:"noreferrer"},"Italian Community")))))),a.createElement("section",{id:"five",className:"main special"},a.createElement("div",{className:"container"},a.createElement("header",{className:"major"},a.createElement("h2",null,"Want to try it?")),a.createElement("p",null,"*** DAILYBUILDS ARE EXPERIMENTAL ***"),a.createElement("ul",{className:"actions uniform"},a.createElement("li",null,a.createElement("span",{className:"button special"},a.createElement("a",{href:"https://sourceforge.net/projects/freedomotic/files/freedomotic-commander-5.6.0-rc4.zip/download",target:"_blank",rel:"noreferrer"},"Download 5.6 RC4 version"))),a.createElement("li",null,a.createElement("span",{className:"button"},a.createElement("a",{href:"https://github.com/freedomotic/freedomotic/releases/download/dailybuild/freedomotic-5.6-SNAPSHOT.zip",target:"_blank",rel:"noreferrer"},"Download the latest dailybuild")))))))},t}(a.Component);var f=m}}]);
//# sourceMappingURL=component---src-pages-index-js-e63eaa3914a989592b19.js.map