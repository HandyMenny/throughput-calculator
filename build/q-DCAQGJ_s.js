function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{x as y,s as f,a as A,l as d,p as M,L as g,E as x,U as w,q as n,K as o,M as P,e as D,_ as i,$ as _,w as I}from"./q-uIvALmgb.js";import{ai as O,t as L,z as V}from"./q-D2xO9l-p.js";const S=e=>{const t=y(e,["offset","content","position","durationMs"]);f(n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_3jJQGcomGNw"));const r=A(),c=d(),v=d(),s=d("closing"),l=d({x:0,y:0}),p=t.inline?"span":"div",h=d(Date.now()),E=n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_b7EpqFj07nQ",[h,l,e,s,v,c]),m=n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_f0VZ50EMnCA",[e,s,E]),T=n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_o30x7aVxT7s",[e,s]);return M("keyup",n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_WXI9sB3m6wo",[T])),g(n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_MxQUZYxM4x8",[s,E])),x(D,{children:[x(p,{"aria-describedby":`#${r}`,children:x(w,null,3,"CG_0"),onBlur$:n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_UuCe1StpMkw",[T]),onFocus$:n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_Xt6DxIpnfrQ",[m]),onMouseEnter$:n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_Ct50X7n7U6E",[m]),onMouseLeave$:n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_oOqwq92vOlc",[T]),ref:c,style:"width: fit-content;",tabIndex:0,[o]:{"aria-describedby":o,onBlur$:o,onFocus$:o,onMouseEnter$:o,onMouseLeave$:o,ref:o,style:o,tabIndex:o}},1,"CG_1"),x(p,{class:`${s.value} ${t.class||""}`,id:r,onAnimationEnd$:n(()=>i(()=>Promise.resolve().then(()=>a),void 0),"s_v1ENxh73TXA",[l,s]),ref:v,role:"tooltip",...t,get style(){return`--duration: ${e.durationMs??100}ms;--x: ${l.value.x||0}px;--y: ${l.value.y||0}px;`},get"data-state"(){return s.value},children:P(u=>u.content,[e],"p0.content"),[o]:{"data-state":P(u=>u.value,[s],"p0.value"),id:o,onAnimationEnd$:o,ref:o,role:o,style:P((u,$)=>`--duration: ${$.durationMs??100}ms;--x: ${u.value.x||0}px;--y: ${u.value.y||0}px;`,[l,e],"`--duration: ${p1.durationMs??100}ms;`+`--x: ${p0.value.x||0}px;`+`--y: ${p0.value.y||0}px;`")}},0,"CG_2")]},1,"CG_3")},b=O,R=async()=>{const[e,t,r,c,v,s]=_(),l=Date.now(),p=[L(r.offset)],h=l-e.value>=300;if(s.value&&v.value&&h){const{x:E,y:m}=await V(s.value,v.value,{placement:r.position??"top",middleware:p});e.value=l,t.value={x:E,y:m},c.value="positioned"}},C=()=>{const[e,t,r]=_();r(),setTimeout(()=>t.value="positioned",e.durationMs??100)},G=()=>{const[e,t]=_();setTimeout(()=>t.value="closing",e.durationMs??100)},q=e=>{const[t]=_();e.key==="Escape"&&t()},Q=({track:e})=>{const[t,r]=_();e(()=>t.value)==="unpositioned"&&r()},U=()=>{const[e]=_();return e()},X=()=>{const[e]=_();return e()},k=()=>{const[e]=_();return e()},j=()=>{const[e]=_();return e()},W=()=>{const[e,t]=_();t.value=="closing"&&(t.value="hidden",e.value={x:0,y:0})},a=Object.freeze(Object.defineProperty({__proto__:null,_hW:I,s_3jJQGcomGNw:b,s_Ct50X7n7U6E:k,s_EkDvuGlapJE:S,s_MxQUZYxM4x8:Q,s_UuCe1StpMkw:U,s_WXI9sB3m6wo:q,s_Xt6DxIpnfrQ:X,s_b7EpqFj07nQ:R,s_f0VZ50EMnCA:C,s_o30x7aVxT7s:G,s_oOqwq92vOlc:j,s_v1ENxh73TXA:W},Symbol.toStringTag,{value:"Module"}));export{I as _hW,b as s_3jJQGcomGNw,k as s_Ct50X7n7U6E,S as s_EkDvuGlapJE,Q as s_MxQUZYxM4x8,U as s_UuCe1StpMkw,q as s_WXI9sB3m6wo,X as s_Xt6DxIpnfrQ,R as s_b7EpqFj07nQ,C as s_f0VZ50EMnCA,G as s_o30x7aVxT7s,j as s_oOqwq92vOlc,W as s_v1ENxh73TXA};
