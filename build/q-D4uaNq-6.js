import{G as f,H as g,I as y,J as h,L as p,M as O,N as b,O as k,Q as A}from"./q-D5fYlJTS.js";import{$ as c,u as M,c as S,T as P,O as T,M as B,E as L,q as r,_ as l,H as q,w as R}from"./q-BVRLNf3v.js";const $=f,F=async function({track:o,cleanup:s}){var v,w;const[t,a,d]=c(),m=o(()=>d.value),n=t.value;if(!n)return;const _=g(n),u=k(()=>{d.value=!1});if(window.addEventListener("keydown",u),m){const E=window.requestAnimationFrame;window.requestAnimationFrame=()=>42,y(n),h(n,{reserveScrollBarGap:!0}),window.requestAnimationFrame=E,(v=a.onShow$)==null||v.call(a),p(_)}else O(n),(w=a.onClose$)==null||w.call(a);s(()=>{b(_),window.removeEventListener("keydown",u)})},V=e=>{const[o,s,t]=c();s.alert===!0||s.closeOnBackdropClick===!1||A(o.value,e)&&(t.value=!1)},C=e=>{const[o]=c();return o(e)},I=e=>{M(r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_6kc6yEJKobw"));const o=S(),{"bind:show":s}=e;P(r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_boBpVEMpnGQ",[o,e,s]));const t=r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_qbpjydAbzcE",[o,e,s]);return T("dialog",{...e,children:L(q,null,3,"9p_0"),"data-state":s.value?"open":"closed",onClick$:r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_rnAxN4ftyEs",[t]),ref:o},{role:B(a=>a.alert===!0?"alertdialog":"dialog",[e],'p0.alert===true?"alertdialog":"dialog"')},0,"9p_1")},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_6kc6yEJKobw:$,s_VXOY7yQNLIw:I,s_boBpVEMpnGQ:F,s_qbpjydAbzcE:V,s_rnAxN4ftyEs:C},Symbol.toStringTag,{value:"Module"}));export{R as _hW,$ as s_6kc6yEJKobw,I as s_VXOY7yQNLIw,F as s_boBpVEMpnGQ,V as s_qbpjydAbzcE,C as s_rnAxN4ftyEs};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
