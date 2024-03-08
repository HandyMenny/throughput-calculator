function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as r,I as o,E as s,K as a,M as n,e as u,q as c,_ as d}from"./q-uIvALmgb.js";import{S as i}from"./q-BFUzQiD-.js";const _=()=>{const[l]=r(),t=l.selectedDuplex,e=[{label:"DL + UL",value:"dl-ul"},{label:"DL",value:"dl"},{label:"UL",value:"ul"},{label:"None",value:"none"}];return t=="SDL"?(e.splice(0,1),e.splice(1,1)):t=="SUL"&&e.splice(0,2),e},g=l=>{const t=o(c(()=>d(()=>Promise.resolve().then(()=>b),void 0),"s_bgLUTAunyYU",[l]));return s(u,{children:s(i,{label:"Aggregate",labelClass:"text-center",get options(){return t.value},get selectedValue(){return l.selectedValue},get hidden(){return l.hidden},[a]:{hidden:n(e=>e.hidden,[l]),label:a,labelClass:a,options:n(e=>e.value,[t]),selectedValue:n(e=>e.selectedValue,[l])}},3,"mZ_0")},1,"mZ_1")},b=Object.freeze(Object.defineProperty({__proto__:null,s_OjhCTchHyIY:g,s_bgLUTAunyYU:_},Symbol.toStringTag,{value:"Module"}));export{g as s_OjhCTchHyIY,_ as s_bgLUTAunyYU};
