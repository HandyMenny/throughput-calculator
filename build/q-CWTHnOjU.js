function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as l,P as p,T as c,E as n,U as v,K as a,M as r,q as u,_,w as g}from"./q-_JLpC6VS.js";import{u as f,P as d,a1 as x}from"./q-MUbwB9EZ.js";const P=async({track:t})=>{const[e,s]=l();t(()=>e.isListboxOpenSig.value),e.isListboxOpenSig.value?await s.showPopover():await s.hidePopover()},b=t=>{const e=p(x),s=`${e.localId}-popover`,i=f(s);return c(u(()=>_(()=>Promise.resolve().then(()=>h),void 0),"s_WhFv6OtKi6w",[e,i])),n(d,{...t,floating:!0,id:s,get anchorRef(){return e.triggerRef},get ref(){return e.popoverRef},get class(){return["listbox",t.class]},manual:!0,get"data-state"(){return e.isListboxOpenSig.value?"open":"closed"},children:n(v,null,3,"xF_0"),[a]:{anchorRef:r(o=>o.triggerRef,[e],"p0.triggerRef"),class:r(o=>["listbox",o.class],[t],'["listbox",p0.class]'),"data-state":r(o=>o.isListboxOpenSig.value?"open":"closed",[e],'p0.isListboxOpenSig.value?"open":"closed"'),floating:a,manual:a,ref:r(o=>o.popoverRef,[e],"p0.popoverRef")}},0,"xF_1")},h=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_L77PFoQ0KGo:b,s_WhFv6OtKi6w:P},Symbol.toStringTag,{value:"Module"}));export{g as _hW,b as s_L77PFoQ0KGo,P as s_WhFv6OtKi6w};
