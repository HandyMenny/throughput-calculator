import{$ as d,M as S,u as l,T as g,P as f,O as u,E as p,k as r,_ as c,H as m,w as O}from"./q-CS0xL3da.js";import{h}from"./q-BN3E81Wg.js";const E=()=>{const[t,i]=d();t.isOpenSig.value||(i.value=!0)},P=async function({track:i}){const[e,a,s]=d();if(i(()=>e.isOpenSig.value),!e.contentRef.value)return;await e.getContentDimensions$();const{animationDuration:n,transitionDuration:o}=getComputedStyle(e.contentRef.value);n!=="0s"?(console.log(n),a.value=!0):o!=="0s"&&(a.value=!0),e.isOpenSig.value&&(s.value=!1),e.initialStateSig.value=!1},$=t=>{const i=S(h),e=l(!1),a=l(!1),s=r(()=>c(()=>Promise.resolve().then(()=>v),void 0),"s_c3W0WhB6hn8",[i,e]);return g(r(()=>c(()=>Promise.resolve().then(()=>v),void 0),"s_vL9GRJix2tM",[i,a,e])),f("div",{...t,children:p(m,null,3,"5i_0"),onAnimationEnd$:[s,t.onAnimationEnd$],onTransitionEnd$:[s,t.onTransitionEnd$],ref:i.contentRef},{"data-state":u(n=>n.initialStateSig.value?"initial":n.isOpenSig.value?"open":"closed",[i],'p0.initialStateSig.value?"initial":p0.isOpenSig.value?"open":"closed"'),hidden:u((n,o,_)=>o.value?_.value:!n.isOpenSig.value,[i,a,e],"p1.value?p2.value:!p0.isOpenSig.value")},0,"5i_1")},v=Object.freeze(Object.defineProperty({__proto__:null,_hW:O,s_VKFXS9azuEM:$,s_c3W0WhB6hn8:E,s_vL9GRJix2tM:P},Symbol.toStringTag,{value:"Module"}));export{O as _hW,$ as s_VKFXS9azuEM,E as s_c3W0WhB6hn8,P as s_vL9GRJix2tM};
