function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as u,I as r,E as n,K as a,M as s,e as o,q as c,_ as i}from"./q-uIvALmgb.js";import{S as d}from"./q-BFUzQiD-.js";const _=()=>{const[l]=u(),t=l.selectedDuplex,e=[{label:"DL + UL",value:"dl-ul"},{label:"DL + UL Tx Switch",value:"dl-ul-tx-switch"},{label:"DL",value:"dl"},{label:"UL",value:"ul"},{label:"UL Tx Switch",value:"ul-tx-switch"},{label:"None",value:"none"}];return t=="SDL"?(e.splice(0,2),e.splice(1,2)):t=="SUL"&&e.splice(0,3),e},g=l=>{const t=r(c(()=>i(()=>Promise.resolve().then(()=>b),void 0),"s_bgLUTAunyYU",[l]));return n(o,{children:n(d,{label:"Aggregate",labelClass:"text-center",get options(){return t.value},get selectedValue(){return l.selectedValue},get hidden(){return l.hidden},[a]:{hidden:s(e=>e.hidden,[l]),label:a,labelClass:a,options:s(e=>e.value,[t]),selectedValue:s(e=>e.selectedValue,[l])}},3,"mZ_0")},1,"mZ_1")},b=Object.freeze(Object.defineProperty({__proto__:null,s_OjhCTchHyIY:g,s_bgLUTAunyYU:_},Symbol.toStringTag,{value:"Module"}));export{g as s_OjhCTchHyIY,_ as s_bgLUTAunyYU};
