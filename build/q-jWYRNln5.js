function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as l,x as a,P as n,I as c,O as i,M as u,q as _,_ as d}from"./q-uIvALmgb.js";import{a1 as p}from"./q-CgKGXFzd.js";const v=()=>{const[e,t]=l();return e.selectedIndexSig.value!==null?e.optionsSig.value[e.selectedIndexSig.value].displayValue:t.placeholder},S=e=>{const t=a(e,["placeholder"]),r=n(p);if(!r.optionsSig.value)return;const o=c(_(()=>d(()=>Promise.resolve().then(()=>g),void 0),"s_YNH6Am6MTrw",[r,e]));return i("span",{...t,children:u(s=>s.value,[o],"p0.value")},{"data-value":!0},0,"2w_0")},g=Object.freeze(Object.defineProperty({__proto__:null,s_YNH6Am6MTrw:v,s_n92TrcEV90g:S},Symbol.toStringTag,{value:"Module"}));export{v as s_YNH6Am6MTrw,S as s_n92TrcEV90g};
