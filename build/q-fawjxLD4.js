import{ab as l,aa as v}from"./q-BN3E81Wg.js";import{$ as u,u as p,M as _,p as i,b as c,k as n,_ as s,E as m,H as d}from"./q-CS0xL3da.js";const x=a=>{const[e,o]=u();e.positionX.value&&(e.value.value=l(a.pageX-e.positionX.value,e.min.value,e.max.value)),o.value=!0},f=a=>{const[e,o]=u();e.positionX.value&&o.value&&(e.value.value=l(a.pageX-e.positionX.value,e.min.value,e.max.value))},g=a=>{const[e,o]=u();e.positionX.value&&o.value&&(e.value.value=l(a.pageX-e.positionX.value,e.min.value,e.max.value)),o.value=!1},w=a=>{const e=p(!1),o=_(v),r=n(()=>s(()=>Promise.resolve().then(()=>t),void 0),"s_D8WvLnKHNUw",[o,e]);return i("mousemove",n(()=>s(()=>Promise.resolve().then(()=>t),void 0),"s_kd2cGCnxV3Y",[o,e])),i("mouseup",n(()=>s(()=>Promise.resolve().then(()=>t),void 0),"s_mV7WaK4570w",[o,e])),c("div",{style:`
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: rgba(0, 0, 250);
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
        left: ${o.percentage.value}%;
        ${a.style??""}
      `},{onMouseDown$:r},m(d,null,3,"fJ_0"),1,"fJ_1")},t=Object.freeze(Object.defineProperty({__proto__:null,s_D8WvLnKHNUw:x,s_MhzlhYr2v00:w,s_kd2cGCnxV3Y:f,s_mV7WaK4570w:g},Symbol.toStringTag,{value:"Module"}));export{x as s_D8WvLnKHNUw,w as s_MhzlhYr2v00,f as s_kd2cGCnxV3Y,g as s_mV7WaK4570w};
