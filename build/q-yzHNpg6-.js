function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as o,x as r,P as d,I as i,O as c,M as b,E as I,q as P,_ as u,U as E}from"./q-_JLpC6VS.js";import{ae as v,ad as x,af as f}from"./q-Dyu2sCja.js";const m=()=>{const[e,t]=o();return e.selectedTabIdSig.value===t._tabId},S=e=>{const t=r(e,["label","_tabId","_extraClass"]),a=d(f),s=a.tabsPrefix+v+e._tabId,n=a.tabsPrefix+x+e._tabId,l=i(P(()=>u(()=>Promise.resolve().then(()=>T),void 0),"s_i0H9g0nHXC0",[a,e]));return c("div",{...t,"aria-labelledby":n,children:I(E,null,3,"EC_0"),id:s},{hidden:b(_=>!_.value,[l],"!p0.value"),role:"tabpanel",tabIndex:0},0,"EC_1")},T=Object.freeze(Object.defineProperty({__proto__:null,s_3rcWDF00mPE:S,s_i0H9g0nHXC0:m},Symbol.toStringTag,{value:"Module"}));export{S as s_3rcWDF00mPE,m as s_i0H9g0nHXC0};
