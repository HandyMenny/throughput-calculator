function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as M,l as b,I as x,T as A,E as c,K as s,M as n,e as C,q as _,_ as m,w as S}from"./q-uIvALmgb.js";import{m as T,b as q}from"./q-CeKobtlo.js";import{N as O}from"./q-DX-NNlQ_.js";import{S as I}from"./q-BFUzQiD-.js";const P=()=>{const[e]=M(),a=[{label:"QPSK",value:"2"},{label:"16QAM",value:"4"},{label:"64QAM",value:"6"},{label:"256QAM",value:"8"},{label:"MCS index",value:"-1"},{label:"Modulation Order + Code rate",value:"-2"}];if(e.ul){if(e.dft){const t={label:"π/2 BPSK",value:"1"};a.splice(0,0,t)}}else{const t={label:"1024QAM",value:"10"};a.splice(4,0,t)}return a},V=()=>{const[e]=M(),a=e.value;return T[a].map((i,d)=>({label:d+"",value:d+""}))},Q=()=>{const[e]=M(),a=[{label:"2 (QPSK)",value:"2"},{label:"4 (16QAM)",value:"4"},{label:"6 (64QAM)",value:"6"},{label:"8 (256QAM)",value:"8"}];if(e.ul){if(e.dft){const t={label:"1 (π/2 BPSK)",value:"1"};a.splice(0,0,t)}}else{const t={label:"10 (1024QAM)",value:"10"};a.splice(4,0,t)}return a},R=({track:e})=>{const[a,t,r,i,d,v]=M();if(e(()=>d.value),e(()=>i.value),e(()=>r.value),e(()=>v.value),e(()=>t.value),a.selectedValue==null)return;let u;if(d.value=="-1"){const h=i.value;u=q(parseInt(r.value),h)}else d.value=="-2"?u={modOrder:parseInt(v.value),codeRate:t.value}:u={modOrder:parseInt(d.value),codeRate:948/1024};u==null&&(u={modOrder:0,codeRate:0}),a.selectedValue.value=u},E=e=>{const a=b("6"),t=b("qam64"),r=b("0"),i=b("6"),d=b(.92578125),v=x(_(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_aJJr0IG0n4o",[e])),u=x(_(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_XRaFyQxRrSw",[e])),h=x(_(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_I0txglKxT9M",[e])),g=x(_(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_duH44G97NGg",[t]));return A(_(()=>m(()=>Promise.resolve().then(()=>f),void 0),"s_sdAUSnIP67Q",[e,d,r,t,a,i])),c(C,{children:[c(I,{get label(){return`${e.prefix} Modulation`},labelClass:"text-center",get options(){return u.value},selectedValue:a,get hidden(){return e.hidden},[s]:{hidden:n(l=>l.hidden,[e]),label:n(l=>`${l.prefix} Modulation`,[e]),labelClass:s,options:n(l=>l.value,[u]),selectedValue:s}},3,"A2_0"),c(I,{get label(){return`${e.prefix} MCS Table`},labelClass:"text-center",get options(){return h.value},selectedValue:t,get hidden(){return e.hidden||a.value!=="-1"},[s]:{hidden:n((l,o)=>l.hidden||o.value!=="-1",[e,a]),label:n(l=>`${l.prefix} MCS Table`,[e]),labelClass:s,options:n(l=>l.value,[h]),selectedValue:s}},3,"A2_1"),c(I,{get label(){return`${e.prefix} MCS Index`},labelClass:"text-center",get options(){return g.value},selectedValue:r,get hidden(){return e.hidden||a.value!=="-1"},[s]:{hidden:n((l,o)=>l.hidden||o.value!=="-1",[e,a]),label:n(l=>`${l.prefix} MCS Index`,[e]),labelClass:s,options:n(l=>l.value,[g]),selectedValue:s}},3,"A2_2"),c(I,{get label(){return`${e.prefix} Modulation Order`},labelClass:"text-center",get options(){return v.value},selectedValue:i,get hidden(){return e.hidden||a.value!=="-2"},[s]:{hidden:n((l,o)=>l.hidden||o.value!=="-2",[e,a]),label:n(l=>`${l.prefix} Modulation Order`,[e]),labelClass:s,options:n(l=>l.value,[v]),selectedValue:s}},3,"A2_3"),c(O,{get label(){return`${e.prefix} Code Rate`},labelClass:"text-center",selectedValue:d,get hidden(){return e.hidden||a.value!=="-2"},[s]:{hidden:n((l,o)=>l.hidden||o.value!=="-2",[e,a]),label:n(l=>`${l.prefix} Code Rate`,[e]),labelClass:s,selectedValue:s}},3,"A2_4")]},1,"A2_5")},$=()=>{const[e]=M();if(e.ul&&e.dft)return[{label:"64qam (6.1.4.1-1)",value:"dftQam64"},{label:"256qam (5.1.3.1-2)",value:"qam256"},{label:"64qam low spectral efficiency (6.1.4.1-2)",value:"dftQam64LowSE"}];const a=[{label:"64qam (5.1.3.1-1)",value:"qam64"},{label:"256qam (5.1.3.1-2)",value:"qam256"},{label:"64qam low spectral efficiency (5.1.3.1-3)",value:"qam64LowSE"}];if(!e.ul){const t={label:"1024qam (5.1.3.1-4)",value:"qam1024"};a.push(t)}return a},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_308KUYpmhME:E,s_I0txglKxT9M:$,s_XRaFyQxRrSw:P,s_aJJr0IG0n4o:Q,s_duH44G97NGg:V,s_sdAUSnIP67Q:R},Symbol.toStringTag,{value:"Module"}));export{S as _hW,E as s_308KUYpmhME,$ as s_I0txglKxT9M,P as s_XRaFyQxRrSw,Q as s_aJJr0IG0n4o,V as s_duH44G97NGg,R as s_sdAUSnIP67Q};
