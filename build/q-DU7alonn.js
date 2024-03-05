import{$ as b,c as f,R as M,T as x,E as c,K as n,M as u,f as T,q as i,_,w as S}from"./q-XGgtpwab.js";import{m as g,b as q}from"./q-CFU3JOUe.js";import{S as h}from"./q-CS4dr75q.js";const I=()=>{const[e]=b(),l=[{label:"QPSK",value:"2"},{label:"16QAM",value:"4"},{label:"64QAM",value:"6"},{label:"256QAM",value:"8"},{label:"MCS index",value:"-1"}];if(e.ul){if(e.dft){const t={label:"π/2 BPSK",value:"1"};l.splice(0,0,t)}}else{const t={label:"1024QAM",value:"10"};l.splice(4,0,t)}return l},A=()=>{const[e]=b(),l=e.value;return l==""?[]:g[l].map((d,s)=>({label:s+"",value:s+""}))},P=({track:e})=>{const[l,t,o,d]=b();if(e(()=>d.value),e(()=>o.value),e(()=>t.value),l.selectedValue==null)return;let s;if(d.value=="-1"){const r=o.value;s=q(parseInt(t.value),r)}else s={modOrder:parseInt(d.value),codeRate:948/1024};s==null&&(s={modOrder:0,codeRate:0}),l.selectedValue.value=s},E=e=>{const l=f(""),t=f(""),o=f(""),d=M(i(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_XRaFyQxRrSw",[e])),s=M(i(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_I0txglKxT9M",[e])),r=M(i(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_duH44G97NGg",[t]));return x(i(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_sdAUSnIP67Q",[e,o,t,l])),c(T,{children:[c(h,{get label(){return`${e.prefix} Modulation`},labelClass:"text-center",get options(){return d.value},selectedValue:l,get hidden(){return e.hidden},[n]:{hidden:u(a=>a.hidden,[e]),label:u(a=>`${a.prefix} Modulation`,[e]),labelClass:n,options:u(a=>a.value,[d]),selectedValue:n}},3,"A2_0"),c(h,{get label(){return`${e.prefix} MCS Table`},labelClass:"text-center",get options(){return s.value},selectedValue:t,get hidden(){return e.hidden||l.value!=="-1"},[n]:{hidden:u((a,m)=>a.hidden||m.value!=="-1",[e,l]),label:u(a=>`${a.prefix} MCS Table`,[e]),labelClass:n,options:u(a=>a.value,[s]),selectedValue:n}},3,"A2_1"),c(h,{get label(){return`${e.prefix} MCS Index`},labelClass:"text-center",get options(){return r.value},selectedValue:o,get hidden(){return e.hidden||l.value!=="-1"},[n]:{hidden:u((a,m)=>a.hidden||m.value!=="-1",[e,l]),label:u(a=>`${a.prefix} MCS Index`,[e]),labelClass:n,options:u(a=>a.value,[r]),selectedValue:n}},3,"A2_2")]},1,"A2_3")},R=()=>{const[e]=b();if(e.ul&&e.dft)return[{label:"64qam (6.1.4.1-1)",value:"dftQam64"},{label:"256qam (5.1.3.1-2)",value:"qam256"},{label:"64qam low spectral efficiency (6.1.4.1-2)",value:"dftQam64LowSE"}];const l=[{label:"64qam (5.1.3.1-1)",value:"qam64"},{label:"256qam (5.1.3.1-2)",value:"qam256"},{label:"64qam low spectral efficiency (5.1.3.1-3)",value:"qam64LowSE"}];if(!e.ul){const t={label:"1024qam (5.1.3.1-4)",value:"qam1024"};l.push(t)}return l},v=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_308KUYpmhME:E,s_I0txglKxT9M:R,s_XRaFyQxRrSw:I,s_duH44G97NGg:A,s_sdAUSnIP67Q:P},Symbol.toStringTag,{value:"Module"}));export{S as _hW,E as s_308KUYpmhME,R as s_I0txglKxT9M,I as s_XRaFyQxRrSw,A as s_duH44G97NGg,P as s_sdAUSnIP67Q};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
