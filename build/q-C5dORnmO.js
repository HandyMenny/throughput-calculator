function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as _,l as i,T as c,E as r,K as l,M as h,e as m,q as v,_ as b,w}from"./q-_JLpC6VS.js";import{m as V,g as f,t as g}from"./q-BiqzbooR.js";import{S as p}from"./q-Czg5PYpx.js";const E=({track:e})=>{const[t,s]=_();e(()=>t.standard),e(()=>s.value),t.standard=="ht"||t.standard=="vht"?t.selectedValue.value=parseInt(s.value):t.selectedValue.value=V(s.value)||0},T=e=>{const t=i("20"),s=(()=>{const n=f(e.standard),u=e.standard!=="ht"&&e.standard!=="vht";return n.map(a=>{let d;if(u){const o=g(a);d={label:`${a}-tone RU (${o} MHz)`,value:`${o}`}}else d={label:`${a} MHz`,value:`${a}`};return d})})();return c(v(()=>b(()=>Promise.resolve().then(()=>$),void 0),"s_7KVgs37i06E",[e,t])),r(m,{children:r(p,{label:"Bandwdith",labelClass:"text-center",options:s,selectedValue:t,get hidden(){return e.hidden},[l]:{hidden:h(n=>n.hidden,[e]),label:l,labelClass:l,selectedValue:l}},3,"IV_0")},1,"IV_1")},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:w,s_4SyeEkQk4ss:T,s_7KVgs37i06E:E},Symbol.toStringTag,{value:"Module"}));export{w as _hW,T as s_4SyeEkQk4ss,E as s_7KVgs37i06E};
