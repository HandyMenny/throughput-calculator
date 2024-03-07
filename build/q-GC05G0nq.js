function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as n,I as r,E as u,K as a,M as s,q as o,_ as c}from"./q-uIvALmgb.js";import{S as d}from"./q-BFUzQiD-.js";const _=()=>{const[e]=n();return e.selectedRange=="fr1"?[{label:"15 kHz",value:"0"},{label:"30 kHz",value:"1"},{label:"60 kHz",value:"2"}]:[{label:"60 kHz",value:"2"},{label:"120 kHz",value:"3"},{label:"480 kHz",value:"5"},{label:"960 kHz",value:"6"}]},i=e=>{const t=r(o(()=>c(()=>Promise.resolve().then(()=>b),void 0),"s_X7yTMm0g35g",[e]));return u(d,{label:"SCS",labelClass:"text-center",get options(){return t.value},get selectedValue(){return e.selectedValue},get hidden(){return e.hidden},[a]:{hidden:s(l=>l.hidden,[e]),label:a,labelClass:a,options:s(l=>l.value,[t]),selectedValue:s(l=>l.selectedValue,[e])}},3,"Q8_0")},b=Object.freeze(Object.defineProperty({__proto__:null,s_OmE6qsg2EcM:i,s_X7yTMm0g35g:_},Symbol.toStringTag,{value:"Module"}));export{i as s_OmE6qsg2EcM,_ as s_X7yTMm0g35g};
