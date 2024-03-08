function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a5 as u}from"./q-D2xO9l-p.js";import{$ as i,x as c,I as t,O as p,M as d,q as r,_ as n}from"./q-uIvALmgb.js";const m=()=>{const[o]=i();return u.includes(o.orientation??"horizontal")?o.orientation??"horizontal":(console.warn(`Invalid prop 'orientation' of value '${o.orientation??"horizontal"}' supplied to 'separator',
        expected one of:
        - horizontal
        - vertical

        Defaulting to 'horizontal'.`),"horizontal")},I=()=>{const[o]=i();return o.value==="vertical"?o.value:void 0},O=()=>{const[o,e]=i();return e.decorative?{role:"none"}:{role:"separator","aria-orientation":o.value}},P=o=>{const e=c(o,["orientation","decorative"]),s=t(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_D24KQnvZKfo",[o])),l=t(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_HeX0Zr0PaZI",[s])),_=t(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_mE8oaukqj3U",[l,o]));return p("div",{..._.value,...e},{"data-orientation":d(v=>v.value,[s],"p0.value")},0,"FC_0")},a=Object.freeze(Object.defineProperty({__proto__:null,s_BmtaV0nCbAI:P,s_D24KQnvZKfo:m,s_HeX0Zr0PaZI:I,s_mE8oaukqj3U:O},Symbol.toStringTag,{value:"Module"}));export{P as s_BmtaV0nCbAI,m as s_D24KQnvZKfo,I as s_HeX0Zr0PaZI,O as s_mE8oaukqj3U};
