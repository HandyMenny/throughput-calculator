import{$ as _,d as m,u as c,g,a as x,A,p as S,b as I,O as f,k as a,E as b,_ as u,H as y,w as D}from"./q-CS0xL3da.js";import{K as d,E as P,F as T}from"./q-BN3E81Wg.js";const M=({track:e})=>{const[t,s,n]=_();e(()=>n.value),n.value||(t.value=-1,s.value="")},H=()=>{var n;const[e,t]=_(),s=(n=t.value)==null?void 0:n.querySelectorAll("button");s!=null&&s.length&&s.forEach(o=>e.push(o))},k=e=>{const[t,s]=_(),n=e.target;t.value&&n!==s.value&&(t.value=!1)},p=e=>{var v;const[t,s,n,o,E]=_();if(e.key===d.ESCAPE&&o.value){o.value=!1,(v=E.value)==null||v.focus();return}if(e.key===d.ARROW_DOWN||e.key===d.ARROW_UP){let r=s.value;e.key===d.ARROW_DOWN?(r=s.value+1,r>=t.length&&(r=0)):e.key===d.ARROW_UP&&(r=s.value-1,r<0&&(r=t.length-1)),t[r].focus(),n.value=t[r].id,s.value=r}},V=()=>{const[e]=_();return e.value=!0},W=()=>{const[e]=_();return e.value=!1},C=()=>{const[e]=_();return e.value=!e.value},L=e=>{const t=m(),s=m(),n=c((e==null?void 0:e.isExpanded)||!1),o=c(!1),E=c(),v=g([]),r=c(-1),h=c(),O=c("");return x(T,{currentId:O}),A(a(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_z5TUX3lfqYo",[r,O,n])),A(a(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_nW9Eu00kceY",[v,E])),S("click",a(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_ZOEh0cr01Zo",[n,h])),I("div",{class:[e.class,{[P.IS_EXPANDED]:n.value,[P.IS_HOVERED]:o.value}]},{id:t,onKeyDown$:a(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_ImVFKNhBMvE",[v,r,O,n,h]),onMouseEnter$:a(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_Un3HTfrqbP4",[o]),onMouseLeave$:a(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_ehS07sC621w",[o])},[I("button",{ref:h},{"aria-controls":f((l,R)=>R.value?l:"",[s,n],'p1.value?p0:""'),"aria-expanded":f(l=>l.value,[n],"p0.value"),"aria-haspopup":!0,onClick$:a(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_s7AfHHK96OE",[n])},f(l=>l.triggerElement||"Menu",[e],'p0.triggerElement||"Menu"'),3,null),I("nav",{ref:E},{"aria-labelledby":t,id:s,role:"menu",style:f(l=>({visibility:l.value?"visible":"hidden"}),[n],'{visibility:p0.value?"visible":"hidden"}')},b(y,null,3,"nG_0"),1,null)],1,"nG_1")},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:D,s_GMwdTIoT1z4:L,s_ImVFKNhBMvE:p,s_Un3HTfrqbP4:V,s_ZOEh0cr01Zo:k,s_ehS07sC621w:W,s_nW9Eu00kceY:H,s_s7AfHHK96OE:C,s_z5TUX3lfqYo:M},Symbol.toStringTag,{value:"Module"}));export{D as _hW,L as s_GMwdTIoT1z4,p as s_ImVFKNhBMvE,V as s_Un3HTfrqbP4,k as s_ZOEh0cr01Zo,W as s_ehS07sC621w,H as s_nW9Eu00kceY,C as s_s7AfHHK96OE,M as s_z5TUX3lfqYo};