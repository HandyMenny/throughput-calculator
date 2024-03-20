function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as i,x as u,I as t,O as c,M as p,q as r,_ as n}from"./q-_JLpC6VS.js";import{a8 as d}from"./q-MUbwB9EZ.js";const m=()=>{const[o,e]=i();return e.decorative?{role:"none"}:{role:"separator","aria-orientation":o.value}},I=o=>{const e=u(o,["orientation","decorative"]),s=t(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_D24KQnvZKfo",[o])),l=t(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_HeX0Zr0PaZI",[s])),_=t(r(()=>n(()=>Promise.resolve().then(()=>a),void 0),"s_mE8oaukqj3U",[l,o]));return c("div",{..._.value,...e},{"data-orientation":p(v=>v.value,[s],"p0.value")},0,"FC_0")},O=()=>{const[o]=i();return d.includes(o.orientation??"horizontal")?o.orientation??"horizontal":(console.warn(`Invalid prop 'orientation' of value '${o.orientation??"horizontal"}' supplied to 'separator',
        expected one of:
        - horizontal
        - vertical

        Defaulting to 'horizontal'.`),"horizontal")},P=()=>{const[o]=i();return o.value==="vertical"?o.value:void 0},a=Object.freeze(Object.defineProperty({__proto__:null,s_BmtaV0nCbAI:I,s_D24KQnvZKfo:O,s_HeX0Zr0PaZI:P,s_mE8oaukqj3U:m},Symbol.toStringTag,{value:"Module"}));export{I as s_BmtaV0nCbAI,O as s_D24KQnvZKfo,P as s_HeX0Zr0PaZI,m as s_mE8oaukqj3U};
