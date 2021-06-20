/**
 * Tagify (v 4.3.1) - tags input component
 * By Yair Even-Or
 * Don't sell this code. (c)
 * https://github.com/yairEO/tagify
 */

!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.React.tagify=n()}(this,(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.MixedTags=void 0;var e,n=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=r?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=e[u]}o.default=e,t&&t.set(e,o);return o}(require("react")),t=require("react-dom/server"),o=require("prop-types"),r=(e=require("./tagify.min.js"))&&e.__esModule?e:{default:e};const u=["children"];function a(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i=e=>e;const l=({name:e,value:o,loading:u=!1,onInput:a=i,onAdd:c=i,onRemove:d=i,onEditInput:l=i,onEditBeforeUpdate:f=i,onEditUpdated:s=i,onEditStart:p=i,onEditKeydown:y=i,onInvalid:g=i,onClick:w=i,onKeydown:h=i,onFocus:O=i,onBlur:m=i,onChange:b=i,onDropdownShow:v=i,onDropdownHide:E=i,onDropdownSelect:j=i,onDropdownScroll:D=i,onDropdownNoMatch:M=i,onDropdownUpdated:x=i,readOnly:S,children:k,settings:I={},InputMode:N="input",autoFocus:P,className:R,whitelist:T,tagifyRef:C,placeholder:U="",defaultValue:F,showDropdown:_})=>{const V=(0,n.useRef)(),q=(0,n.useRef)(),B=(0,n.useRef)(),K=F||o,W=(0,n.useMemo)((()=>({ref:q,name:e,defaultValue:k||"string"==typeof K?K:JSON.stringify(K),className:R,readOnly:S,autoFocus:P,placeholder:U})),[]),A=(0,n.useCallback)((()=>{P&&B.current&&B.current.DOM.input.focus()}),[B]);return(0,n.useEffect)((()=>{!function(e){if(e)for(let o in e)if(String(e[o]).includes(".createElement")){let r=e[o];e[o]=e=>(0,t.renderToStaticMarkup)(n.default.createElement(r,e))}}(I.templates),"textarea"==N&&(I.mode="mix"),T&&T.length&&(I.whitelist=T);const e=new r.default(q.current,I);return e.on("input",a).on("add",c).on("remove",d).on("invalid",g).on("keydown",h).on("focus",O).on("blur",m).on("click",w).on("change",b).on("edit:input",l).on("edit:beforeUpdate",f).on("edit:updated",s).on("edit:start",p).on("edit:keydown",y).on("dropdown:show",v).on("dropdown:hide",E).on("dropdown:select",j).on("dropdown:scroll",D).on("dropdown:noMatch",M).on("dropdown:updated",x),C&&(C.current=e),B.current=e,A(),()=>{e.destroy()}}),[]),(0,n.useEffect)((()=>{A()}),[P]),(0,n.useEffect)((()=>{V.current&&(B.current.settings.whitelist.length=0,T&&T.length&&B.current.settings.whitelist.push(...T))}),[T]),(0,n.useEffect)((()=>{const e=B.current.getInputValue();V.current&&!((e,n)=>{const t=e=>"string"==typeof e?e:JSON.stringify(e);return t(e)==t(n)})(o,e)&&B.current.loadOriginalValues(o)}),[o]),(0,n.useEffect)((()=>{V.current&&B.current.toggleClass(R)}),[R]),(0,n.useEffect)((()=>{V.current&&B.current.loading(u)}),[u]),(0,n.useEffect)((()=>{V.current&&B.current.setReadonly(S)}),[S]),(0,n.useEffect)((()=>{const e=B.current;V.current&&(_?(e.dropdown.show.call(e,_),e.toggleFocusClass(!0)):e.dropdown.hide.call(e))}),[_]),(0,n.useEffect)((()=>{V.current=!0}),[]),n.default.createElement("div",{className:"tags-input"},n.default.createElement(N,W))};l.propTypes={name:o.string,value:(0,o.oneOfType)([o.string,o.array]),loading:o.bool,children:(0,o.oneOfType)([o.string,o.array]),onChange:o.func,readOnly:o.bool,settings:o.object,InputMode:o.string,autoFocus:o.bool,className:o.string,tagifyRef:o.object,whitelist:o.array,placeholder:o.string,defaultValue:(0,o.oneOfType)([o.string,o.array]),showDropdown:(0,o.oneOfType)([o.string,o.bool]),onInput:o.func,onAdd:o.func,onRemove:o.func,onEditInput:o.func,onEditBeforeUpdate:o.func,onEditUpdated:o.func,onEditStart:o.func,onEditKeydown:o.func,onInvalid:o.func,onClick:o.func,onKeydown:o.func,onFocus:o.func,onBlur:o.func,onDropdownShow:o.func,onDropdownHide:o.func,onDropdownSelect:o.func,onDropdownScroll:o.func,onDropdownNoMatch:o.func,onDropdownUpdated:o.func};const f=n.default.memo(l);f.displayName="Tags";exports.MixedTags=e=>{let t=e.children,o=d(e,u);return n.default.createElement(f,c({InputMode:"textarea"},o),t)};var s=f;return exports.default=s,exports}));