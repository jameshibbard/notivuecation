!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(4),i=n(1),r=n(6),s=n(7);function a(t){const n=Object.assign({},t);return new Promise(t=>{n.resolve=t,e.eventBus.$emit(i.default.SHOW_NOTIFICATION,n)}).then(t=>(e.eventBus.$emit(i.default.HIDE_NOTIFICATION,n),t))}function c(t){return a(s.createNotifyParams(s.createNotificationLabels(t),o.default.CONFIRM))}function u(t){return a(s.createNotifyParams(s.createNotificationLabels(t),o.default.ALERT))}e.notify=a,e.confirm=c,e.alert=u;const l={addMethodsToVue:!0,componentName:"notivuecation",getButtonForEscape:s.defaultGetButtonForEscape};e.options={},e.default={install(t,n={}){Object.assign(e.options,l,n),e.eventBus=new t,e.options.addMethodsToVue&&(t.prototype.$alert=u,t.prototype.$confirm=c,t.prototype.$notify=a),t.component(e.options.componentName,r.default)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={SHOW_NOTIFICATION:"showNotification",HIDE_NOTIFICATION:"hideNotification"}},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(5).default)("b3681df2",o,!1,{})},function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),r=n(0);e.default={data:()=>({notifications:[]}),methods:{onShowNotification(t){this.notifications.push(t)},onHideNotification(t){const e=this.notifications.indexOf(t);e>-1&&this.notifications.splice(e,1)},onEscapeUp(t){if(27===t.keyCode&&this.notification&&r.options.getButtonForEscape){const t=r.options.getButtonForEscape(this.notification);t&&this.resolve(t.value)}}},mounted(){r.eventBus.$on(i.a.SHOW_NOTIFICATION,this.onShowNotification),r.eventBus.$on(i.a.HIDE_NOTIFICATION,this.onHideNotification),window.addEventListener("keyup",this.onEscapeUp)},computed:{resolve(){return this.notification?this.notification.resolve:null},buttons(){return this.notification?this.notification.buttons:null},title(){return this.notification?this.notification.title:null},message(){return this.notification?this.notification.message:null},notification(){return this.notifications[0]}},beforeDestroy(){r.eventBus.$off(i.a.SHOW_NOTIFICATION,this.onShowNotification),r.eventBus.$off(i.a.HIDE_NOTIFICATION,this.onHideNotification)}}},function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.ALERT="alert",t.CONFIRM="confirm"}(o||(o={})),e.default=o},function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],s=r[0],a={id:t+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}n.r(e),n.d(e,"default",function(){return v});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,i){u=n,f=i||{};var s=o(t,e);return m(s),function(e){for(var n=[],i=0;i<s.length;i++){var a=s[i];(c=r[a.id]).refs--,n.push(c)}e?m(s=o(t,e)):s=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete r[c.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],o=r[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(g(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function g(t){var e,n,o=document.querySelector("style["+d+'~="'+t.id+'"]');if(o){if(u)return l;o.parentNode.removeChild(o)}if(p){var i=c++;o=a||(a=h()),e=y.bind(null,o,i,!1),n=y.bind(null,o,i,!0)}else o=h(),e=function(t,e){var n=e.css,o=e.media,i=e.sourceMap;o&&t.setAttribute("media",o);f.ssrId&&t.setAttribute(d,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.notification?n("div",{staticClass:"notivuecation-overlay"},[n("div",{staticClass:"notivuecation-content"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.message))]),t._v(" "),n("div",{staticClass:"notivuecation-buttons"},t._l(t.buttons,function(e){return n("button",{class:e.css,on:{click:function(n){t.resolve(e.value)}}},[t._v(t._s(e.label))])}))])]):t._e()};o._withStripped=!0;var i={mixins:[n(3).default]};n(10);var r=function(t,e,n,o,i,r,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}(i,o,[],!1,null,null,null);r.options.__file="src/lib/Notification.vue";e.default=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(4),i={confirmOk:"Ok",cancel:"Cancel",alertOk:"Ok"},r={confirm:"confirm",cancel:"cancel"};e.createNotificationLabels=function(t){return"string"==typeof t?{message:t}:t},e.createNotifyParams=function(t,e){const n={confirmOk:t.confirm||i.confirmOk,alertOk:t.confirm||i.alertOk,cancel:t.cancel||i.cancel};let s,a;if(e===o.default.ALERT)s=[{label:n.alertOk,css:r.confirm}],a=t.title||"Alert";else{if(e!==o.default.CONFIRM)throw new Error(`Unknown type: ${e}`);s=[{label:n.confirmOk,value:!0,css:r.confirm},{label:n.cancel,value:!1,css:r.cancel}],a=t.title||"Confirm"}return{type:e,buttons:s,title:a,message:t.message}},e.defaultGetButtonForEscape=function(t){return t.type===o.default.CONFIRM?t.buttons.find(t=>!1===t.value):1===t.buttons.length?t.buttons[0]:null}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.notivuecation-overlay {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 9999;\n}\n.notivuecation-content {\n  max-width: 400px;\n  background-color: white;\n  padding: 20px;\n  border-radius: 3px;\n}\n.notivuecation-content h3 {\n  margin: 0;\n}\n.notivuecation-buttons {\n  text-align: right;\n}\n",""])},function(t,e,n){"use strict";var o=n(2);n.n(o).a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=o.default,e.notify=o.notify,e.alert=o.alert,e.confirm=o.confirm;var i=n(3);e.componentMixin=i.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(11);Vue.use(o.default),Vue.component("custom-component",{mixins:[o.componentMixin],template:'<div v-if="notification" class="notivuecation-overlay">\n      <div class="notivuecation-content">\n        <h1>{{title}}</h1>\n        <p>{{message}}</p>\n        \n        <button\n          v-for="button in buttons"\n          :class="button.css"\n          @click="resolve(button.value)"\n        >{{button.label}}</button>\n      </div>\n    </div>'}),new Vue({el:"#app",methods:{showFullCustom(){o.notify({title:"Custom title",message:"Custom message.",buttons:[{label:"option #1",value:1},{label:"option #2",value:2},{label:"option #3",value:3}]}).then(console.log)},showBasicConfirm(){o.confirm("Are you sure you want to do this?").then(console.log)},showCustomConfirm(){o.confirm({message:"Are you sure you want to do this?",confirm:"Yes!",cancel:"Hell no"}).then(console.log)},showCustomAlert(){o.alert({title:"Error!",message:"Something went wrong",confirm:"Bummer"}).then(console.log)},showBasicAlert(){o.alert("Please click ok").then(console.log)},onQueueDemoClick(){o.confirm("First confirm").then(console.log),setTimeout(()=>{o.confirm("Second confirm").then(console.log)},1e3),setTimeout(()=>{o.confirm("Third confirm").then(console.log)},2e3)}}})}]);