function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{c,T as _,E as s,K as t,M as a,f,q as v,_ as S,$ as h,w as y}from"./q-XGgtpwab.js";import{N as r}from"./q-CYh8T26N.js";import{S as x}from"./q-CS4dr75q.js";const g=e=>{const d=c("5"),n=c(7),u=c(2),i=c(6),b=c(4),o=[{label:"0.5 ms",value:"0.5"},{label:"0.625 ms",value:"0.625"},{label:"1 ms",value:"1"},{label:"1.25 ms",value:"1.25"},{label:"2 ms",value:"2"},{label:"2.5 ms",value:"2.5"},{label:"3 ms",value:"3"},{label:"4 ms",value:"4"},{label:"5 ms",value:"5"},{label:"10 ms",value:"10"}];return _(v(()=>S(()=>Promise.resolve().then(()=>$),void 0),"s_dPiencF2kJQ",[n,i,e,d,u,b])),s(f,{children:[s(x,{get label(){return`Periodicity ${e.suffix}`},labelClass:"text-center",options:o,selectedValue:d,get hidden(){return e.hidden},[t]:{hidden:a(l=>l.hidden,[e]),label:a(l=>`Periodicity ${l.suffix}`,[e]),labelClass:t,selectedValue:t}},3,"XH_0"),s(r,{get label(){return`Slots DL ${e.suffix}`},labelClass:"text-center",selectedValue:n,get hidden(){return e.hidden},[t]:{hidden:a(l=>l.hidden,[e]),label:a(l=>`Slots DL ${l.suffix}`,[e]),labelClass:t,selectedValue:t}},3,"XH_1"),s(r,{get label(){return`Slots UL ${e.suffix}`},labelClass:"text-center",selectedValue:u,get hidden(){return e.hidden},[t]:{hidden:a(l=>l.hidden,[e]),label:a(l=>`Slots UL ${l.suffix}`,[e]),labelClass:t,selectedValue:t}},3,"XH_2"),s(r,{get label(){return`Symbols DL ${e.suffix}`},labelClass:"text-center",selectedValue:i,get hidden(){return e.hidden},[t]:{hidden:a(l=>l.hidden,[e]),label:a(l=>`Symbols DL ${l.suffix}`,[e]),labelClass:t,selectedValue:t}},3,"XH_3"),s(r,{get label(){return`Symbols UL ${e.suffix}`},labelClass:"text-center",selectedValue:b,get hidden(){return e.hidden},[t]:{hidden:a(l=>l.hidden,[e]),label:a(l=>`Symbols UL ${l.suffix}`,[e]),labelClass:t,selectedValue:t}},3,"XH_4")]},1,"XH_5")},V=({track:e})=>{const[d,n,u,i,b,o]=h();if(e(()=>i.value),e(()=>d.value),e(()=>b.value),e(()=>n.value),e(()=>o.value),u.selectedValue==null)return;const m={periodicity:parseFloat(i.value),dlSlots:d.value,dlSymbols:n.value,ulSlots:b.value,ulSymbols:o.value};u.selectedValue.value=m},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_FrTSgj3HbX8:g,s_dPiencF2kJQ:V},Symbol.toStringTag,{value:"Module"}));export{y as _hW,g as s_FrTSgj3HbX8,V as s_dPiencF2kJQ};
