function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a4 as g,a1 as b}from"./q-CgKGXFzd.js";import{$ as v,u as f,P as x,h as O,O as p,M as _,E as m,U as P,q as o,_ as n}from"./q-uIvALmgb.js";const R=g,S=(t,e,s)=>e<t.left||e>t.right||s<t.top||s>t.bottom,I=async t=>{const[e,s]=v();if(!e.isListboxOpenSig.value||!e.listboxRef.value||!e.triggerRef.value)return;const a=e.listboxRef.value.getBoundingClientRect(),r=e.triggerRef.value.getBoundingClientRect(),{clientX:i,clientY:u}=t,c=await s(a,i,u),d=await s(r,i,u);c&&d&&(e.isListboxOpenSig.value=!1)},L=t=>{f(o(()=>n(()=>Promise.resolve().then(()=>l),void 0),"s_Kr2H5qlfgeI"));const e=x(b),s=`${e.localId}-listbox`;return O("pointerdown",o(()=>n(()=>Promise.resolve().then(()=>l),void 0),"s_qw8PmAYPgw0",[e,o(()=>n(()=>Promise.resolve().then(()=>l),void 0),"s_Sa5IcVHeiNo")])),p("ul",{...t,children:m(P,null,3,"bD_0"),id:s,ref:e.listboxRef},{"data-closed":_(i=>i.isListboxOpenSig.value?void 0:"",[e],'!p0.isListboxOpenSig.value?"":undefined'),"data-open":_(i=>i.isListboxOpenSig.value?"":void 0,[e],'p0.isListboxOpenSig.value?"":undefined'),role:"listbox"},0,"bD_1")},l=Object.freeze(Object.defineProperty({__proto__:null,s_CDIy00v0mUg:L,s_Kr2H5qlfgeI:R,s_Sa5IcVHeiNo:S,s_qw8PmAYPgw0:I},Symbol.toStringTag,{value:"Module"}));export{L as s_CDIy00v0mUg,R as s_Kr2H5qlfgeI,S as s_Sa5IcVHeiNo,I as s_qw8PmAYPgw0};
