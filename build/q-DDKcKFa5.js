function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as d,I as m,T as v,E as n,K as l,M as a,e as b,q as r,_,$ as u,w as h}from"./q-_JLpC6VS.js";import{S as E}from"./q-Czg5PYpx.js";const p=t=>{const o=d("2"),s=m(r(()=>_(()=>Promise.resolve().then(()=>i),void 0),"s_bDT0o6NoNvE",[t]));return v(r(()=>_(()=>Promise.resolve().then(()=>i),void 0),"s_N0SLv5uHmPE",[t,o])),n(b,{children:n(E,{label:"MiMo",labelClass:"text-center",get options(){return s.value},selectedValue:o,get hidden(){return t.hidden},[l]:{hidden:a(e=>e.hidden,[t]),label:l,labelClass:l,options:a(e=>e.value,[s]),selectedValue:l}},3,"wr_0")},1,"wr_1")},P=()=>{const[t]=u(),o=t.standard=="ht"?4:8,s=[];for(let e=1;e<=o;e++){const c={label:`${e} x ${e}`,value:`${e}`};s.push(c)}return s},T=({track:t})=>{const[o,s]=u();t(()=>s.value),o.selectedValue.value=parseInt(s.value)},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_N0SLv5uHmPE:T,s_bDT0o6NoNvE:P,s_m7T4ZbxdfD8:p},Symbol.toStringTag,{value:"Module"}));export{h as _hW,T as s_N0SLv5uHmPE,P as s_bDT0o6NoNvE,p as s_m7T4ZbxdfD8};
