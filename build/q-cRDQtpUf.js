import{$ as u,s as v,M as b,T as f,P as x,O as d,E as O,k as n,_ as l,H as p,w as P}from"./q-wS8-6zKl.js";import{S as m,W as L}from"./q-pyMCkchf.js";const S=(s,e,t)=>e<s.left||e>s.right||t<s.top||t>s.bottom,w=async s=>{const[e,t]=u();if(!e.isListboxOpenSig.value||!e.listboxRef.value||!e.triggerRef.value)return;const o=e.listboxRef.value.getBoundingClientRect(),a=e.triggerRef.value.getBoundingClientRect(),{clientX:i,clientY:_}=s,c=await t(o,i,_),g=await t(a,i,_);c&&g&&(e.isListboxOpenSig.value=!1)},R=({track:s,cleanup:e})=>{const[t,o]=u();s(()=>t.isListboxOpenSig.value),t.isListboxOpenSig.value&&window.addEventListener("pointerdown",o),e(()=>{window.removeEventListener("pointerdown",o)})},E=s=>{v(n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_Kr2H5qlfgeI"));const e=b(m),t=`${e.localId}-listbox`;return f(n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_0j6s60JYfP0",[e,n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_qw8PmAYPgw0",[e,n(()=>l(()=>Promise.resolve().then(()=>r),void 0),"s_Sa5IcVHeiNo")])])),x("ul",{...s,children:O(p,null,3,"bD_0"),id:t,ref:e.listboxRef},{"data-closed":d(i=>i.isListboxOpenSig.value?void 0:"",[e],'!p0.isListboxOpenSig.value?"":undefined'),"data-open":d(i=>i.isListboxOpenSig.value?"":void 0,[e],'p0.isListboxOpenSig.value?"":undefined'),role:"listbox"},0,"bD_1")},I=L,r=Object.freeze(Object.defineProperty({__proto__:null,_hW:P,s_0j6s60JYfP0:R,s_CDIy00v0mUg:E,s_Kr2H5qlfgeI:I,s_Sa5IcVHeiNo:S,s_qw8PmAYPgw0:w},Symbol.toStringTag,{value:"Module"}));export{P as _hW,R as s_0j6s60JYfP0,E as s_CDIy00v0mUg,I as s_Kr2H5qlfgeI,S as s_Sa5IcVHeiNo,w as s_qw8PmAYPgw0};