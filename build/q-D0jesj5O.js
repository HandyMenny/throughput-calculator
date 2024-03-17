function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as l,P as p,a as c,T as u,E as n,U as v,K as r,M as a,q as _,_ as g,w as f}from"./q-uIvALmgb.js";import{u as d,P as x,a1 as P}from"./q-D9AzQSp1.js";const b=async({track:t})=>{const[e,s]=l();t(()=>e.isListboxOpenSig.value),e.isListboxOpenSig.value?s.showPopover():s.hidePopover()},h=t=>{const e=p(P),s=c(),i=d(s);return u(_(()=>g(()=>Promise.resolve().then(()=>O),void 0),"s_WhFv6OtKi6w",[e,i])),n(x,{...t,floating:!0,id:s,get anchorRef(){return e.triggerRef},get ref(){return e.popoverRef},get class(){return["listbox",t.class]},manual:!0,get"data-state"(){return e.isListboxOpenSig.value?"open":"closed"},children:n(v,null,3,"xF_0"),[r]:{anchorRef:a(o=>o.triggerRef,[e],"p0.triggerRef"),class:a(o=>["listbox",o.class],[t],'["listbox",p0.class]'),"data-state":a(o=>o.isListboxOpenSig.value?"open":"closed",[e],'p0.isListboxOpenSig.value?"open":"closed"'),floating:r,id:r,manual:r,ref:a(o=>o.popoverRef,[e],"p0.popoverRef")}},0,"xF_1")},O=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_L77PFoQ0KGo:h,s_WhFv6OtKi6w:b},Symbol.toStringTag,{value:"Module"}));export{f as _hW,h as s_L77PFoQ0KGo,b as s_WhFv6OtKi6w};
