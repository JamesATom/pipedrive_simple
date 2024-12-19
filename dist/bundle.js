/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={656:(t,e)=>{var r,n,o,i,a,s,c,u,l;"function"==typeof SuppressedError&&SuppressedError,e.uB=void 0,(r=e.uB||(e.uB={})).SHOW_SNACKBAR="show_snackbar",r.SHOW_CONFIRMATION="show_confirmation",r.RESIZE="resize",r.INITIALIZE="initialize",r.OPEN_MODAL="open_modal",r.CLOSE_MODAL="close_modal",r.GET_SIGNED_TOKEN="get_signed_token",r.REDIRECT_TO="redirect_to",r.SHOW_FLOATING_WINDOW="show_floating_window",r.HIDE_FLOATING_WINDOW="hide_floating_window",r.SET_NOTIFICATION="set_notification",r.SET_FOCUS_MODE="set_focus_mode",r.GET_METADATA="get_metadata",e.Jh=void 0,(n=e.Jh||(e.Jh={})).VISIBILITY="visibility",n.CLOSE_CUSTOM_MODAL="close_custom_modal",n.PAGE_VISIBILITY_STATE="page_visibility_state",n.USER_SETTINGS_CHANGE="user_settings_change",e.Go=void 0,(o=e.Go||(e.Go={})).COMMAND="command",o.LISTENER="listener",o.TRACK="track",e.Q1=void 0,(i=e.Q1||(e.Q1={})).PRIMARY="primary",i.SECONDARY="secondary",i.NEGATIVE="negative",e.aF=void 0,(a=e.aF||(e.aF={})).DEAL="deal",a.ORGANIZATION="organization",a.PERSON="person",a.ACTIVITY="activity",a.JSON_MODAL="json_modal",a.CUSTOM_MODAL="custom_modal",e.mM=void 0,(s=e.mM||(e.mM={})).CLOSED="closed",s.SUBMITTED="submitted",e.iM=void 0,(e.iM||(e.iM={})).FOCUSED="focused",e.L4=void 0,(c=e.L4||(e.L4={})).USER="user",c.COMMAND="command",function(t){t.DARK="dark",t.LIGHT="light"}(u||(u={})),e.Ss=void 0,(l=e.Ss||(e.Ss={})).DEALS="deals",l.LEADS="leads",l.ORGANIZATIONS="organizations",l.CONTACTS="contacts",l.CAMPAIGNS="campaigns",l.PROJECTS="projects",l.SETTINGS="settings";const h=Object.values(e.uB),f=Object.values(e.Jh);e.Ay=class{constructor(t={}){const{identifier:r,targetWindow:n}=t;if(this.initialized=!1,this.window=null!=n?n:window.parent,this.identifier=null!=r?r:new URLSearchParams(window.location.search).get("id"),this.userSettings={theme:new URLSearchParams(window.location.search).get("theme")===u.DARK?u.DARK:u.LIGHT},!this.identifier)throw new Error("Missing custom UI identifier");!function(t){let e=!1;null===window||void 0===window||window.addEventListener("focus",(()=>{e||t(),e=!0})),null===window||void 0===window||window.addEventListener("blur",(()=>{e=!1}))}((()=>{this.track(e.iM.FOCUSED)}))}postMessage(t,e="*"){return new Promise(((r,n)=>{const o=new MessageChannel,i={payload:t,id:this.identifier};o.port1.onmessage=({data:t})=>{o.port1.close();const{error:e,data:i}=t;e?n(new Error(e)):r(i)},this.window.postMessage(i,e,[o.port2])}))}execute(t,...r){if(!this.initialized)throw new Error("SDK is not initialized");if(!h.includes(t))throw new Error("Invalid command");return this.postMessage({command:t,args:r[0],type:e.Go.COMMAND})}track(t,r="*"){const n={payload:{type:e.Go.TRACK,event:t},id:this.identifier};this.window.postMessage(n,r)}onPageVisibilityChange(t){const e=()=>{t({data:{state:document.visibilityState}})};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}listen(t,r){if(!f.includes(t))throw new Error("Invalid event");if(t===e.Jh.PAGE_VISIBILITY_STATE)return this.onPageVisibilityChange(r);const n=new MessageChannel,o={payload:{type:e.Go.LISTENER,event:t},id:this.identifier};return n.port1.onmessage=({data:o})=>{o.error&&n.port1.close(),r(o),t===e.Jh.USER_SETTINGS_CHANGE&&o&&(this.userSettings=o)},this.window.postMessage(o,"*",[n.port2]),()=>{n.port1.close()}}setWindow(t){this.window=t}initialize(t={}){return r=this,n=void 0,i=function*(){return yield this.postMessage({command:e.uB.INITIALIZE,args:t,type:e.Go.COMMAND}),this.initialized=!0,this},new((o=void 0)||(o=Promise))((function(t,e){function a(t){try{c(i.next(t))}catch(t){e(t)}}function s(t){try{c(i.throw(t))}catch(t){e(t)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof o?r:new o((function(t){t(r)}))).then(a,s)}c((i=i.apply(r,n||[])).next())}));var r,n,o,i}}}},e={},r=function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}(656);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),s=new D(n||[]);return a(i,"_invoke",{value:A(t,r,s)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",v="suspendedYield",y="executing",w="completed",g={};function m(){}function E(){}function S(){}var _={};h(_,c,(function(){return this}));var b=Object.getPrototypeOf,O=b&&b(b(C([])));O&&O!==r&&i.call(O,c)&&(_=O);var L=S.prototype=m.prototype=Object.create(_);function T(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(o,a,s,c){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==n(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function A(e,r,n){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===w){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=x(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=w,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=d(e,r,n);if("normal"===u.type){if(o=n.done?w:v,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=w,n.method="throw",n.arg=u.arg)}}}function x(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,x(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return E.prototype=S,a(L,"constructor",{value:S,configurable:!0}),a(S,"constructor",{value:E,configurable:!0}),E.displayName=h(S,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,h(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},T(I.prototype),h(I.prototype,u,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new I(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(L),h(L,l,"Generator"),h(L,c,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))}}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function c(t){var e=function(t){if("object"!=n(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:e+""}(new(function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sdk=new r.Ay,this.initialized=!1},e=[{key:"initialize",value:(c=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.initialized){t.next=8;break}return t.next=4,this.sdk.initialize();case 4:return console.log("SDK initialized successfully"),this.initialized=!0,t.next=8,this.addButton();case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error initializing SDK:",t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])}))),function(){return c.apply(this,arguments)})},{key:"addButton",value:(i=a(o().mark((function t(){var e=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.sdk.execute("ADD_BUTTON",{text:"Create Deal",location:"deal_list_view",onClick:function(){return e.showDealModal()}});case 3:console.log("Button added successfully"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Error adding button:",t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(){return i.apply(this,arguments)})},{key:"showDealModal",value:(n=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.sdk.execute("SHOW_MODAL",{title:"Create a New Deal",url:"https://your-app-url.vercel.app/index.html",width:400,height:600,buttons:[{label:"Cancel",action:"close"}]});case 3:console.log("Modal shown successfully"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Error showing modal:",t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(){return n.apply(this,arguments)})}],e&&s(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n,i,c}())).initialize()})();