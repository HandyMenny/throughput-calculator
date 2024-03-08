function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as I,g,q as o,_ as c,l as n,T as q,I as w,c as y,E as r,K as l,M as u,w as B}from"./q-uIvALmgb.js";import{d as C,e as Y,b as L}from"./q-BdEP0g59.js";import{S as A}from"./q-BFUzQiD-.js";const G=({track:t})=>{const[s,d,a,p,R,D,b,v,h,x,V,f,E]=I();t(()=>h.value),t(()=>a.value),t(()=>v.value),t(()=>D.value),t(()=>b.value),t(()=>p.value),t(()=>R.value),t(()=>f.value),t(()=>x.value),t(()=>V.value),t(()=>d.value),t(()=>E.value);const O=parseInt(v.value),S=h.value,_=f.value=="true",i=x.value;let m=V.value;_&&(m=Y(m));const e=D.value,N=b.value;let M=1,U=1;a.value=="TDD"&&(M=E.value.dl,U=E.value.ul),(a.value=="SUL"||!d.value.includes("dl"))&&(M=0),(a.value=="SDL"||!d.value.includes("ul"))&&(U=0);const T={range:S,numerology:O,duplex:a.value,resourceBlocksDl:i,resourceBlocksUl:m,mimoDl:parseInt(p.value),mimoUl:parseInt(R.value),modDl:e,modUl:N,dlPercentage:M,ulPercentage:U,ulTransformPrecoding:_};s.speed.dl=C(T,"dl"),s.speed.ul=C(T,"ul"),s.ulTxSwitchPair.on=d.value.includes("ul-tx-switch"),s.ulTxSwitchPair.on&&(s.ulTxSwitchPair.airtime=T.ulPercentage,s.ulTxSwitchPair.throughput=s.speed.ul,s.ulTxSwitchPair.mimo=T.mimoUl)},j=()=>{const[t]=I();return t.value==="TDD"},Q=()=>{const[t]=I();return t.value!=="SUL"},$=()=>{const[t]=I();return t.value!=="SDL"},k=g(o(()=>c(()=>import("./q-Dm1iUaTu.js"),__vite__mapDeps([])),"s_OjhCTchHyIY")),W=g(o(()=>c(()=>import("./q-BP-ZbGzF.js"),__vite__mapDeps([])),"s_A6b3xTcSm4I")),K=g(o(()=>c(()=>import("./q-BZAeIgVC.js"),__vite__mapDeps([])),"s_VYrxGS1B1WY")),X=g(o(()=>c(()=>import("./q-79ufbi8G.js"),__vite__mapDeps([])),"s_ABN5NpqRiGQ")),F=g(o(()=>c(()=>import("./q-BE5_5V-3.js"),__vite__mapDeps([])),"s_308KUYpmhME")),z=g(o(()=>c(()=>import("./q-GC05G0nq.js"),__vite__mapDeps([])),"s_OmE6qsg2EcM")),H=g(o(()=>c(()=>import("./q-CxLH-ZGu.js"),__vite__mapDeps([])),"s_SRWFC72LvAw")),Z=t=>{const s=n("fr1"),d=n("FDD"),a=n("0"),p=n({modOrder:0,codeRate:0}),R=n({modOrder:0,codeRate:0}),D=n(""),b=n(""),v=n(""),h=n(100),x=n(100),V=n({dl:.74,ul:.23,periodicity:1}),f=n("dl-ul"),E=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"}],O=[{label:"1",value:"1"},{label:"2",value:"2"}],S=[{label:"CP-OFDM",value:"false"},{label:"DFT-s-OFDM",value:"true"}];q(o(()=>c(()=>Promise.resolve().then(()=>P),void 0),"s_4sSbGYyX0BU",[t,f,d,D,b,p,R,a,s,h,x,v,V]));const _=w(o(()=>c(()=>Promise.resolve().then(()=>P),void 0),"s_WuMdOEkoql0",[d])),i=w(o(()=>c(()=>Promise.resolve().then(()=>P),void 0),"s_CubkyFxVlm4",[d])),m=w(o(()=>c(()=>Promise.resolve().then(()=>P),void 0),"s_WvNenEQw0iE",[d]));return y("div",null,{class:"border-2 border-solid border-gray-500 p-4 m-4"},[y("h1",null,{class:"text-center text-xl"},["Throughput: ",L(t.speed.dl)," Mbps / ",L(t.speed.ul)," ",t.txReduction>0&&`(${L(t.speed.ul-t.txReduction)})`," Mbps"],1,null),y("div",null,{class:"grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},[r(X,{selectedValue:s,[l]:{selectedValue:l}},3,"R5_0"),r(K,{get selectedRange(){return s.value},selectedValue:d,get hidden(){return s.value=="fr2"},[l]:{hidden:u(e=>e.value=="fr2",[s]),selectedRange:u(e=>e.value,[s]),selectedValue:l}},3,"R5_1"),r(z,{get selectedRange(){return s.value},selectedValue:a,[l]:{selectedRange:u(e=>e.value,[s]),selectedValue:l}},3,"R5_2"),r(W,{prefix:"Downlink",get selectedRange(){return s.value},get selectedScs(){return parseInt(a.value)},selectedValue:h,get hidden(){return!_.value},[l]:{hidden:u(e=>!e.value,[_]),prefix:l,selectedRange:u(e=>e.value,[s]),selectedScs:u(e=>parseInt(e.value),[a]),selectedValue:l}},3,"R5_3"),r(W,{prefix:"Uplink",get selectedRange(){return s.value},get selectedScs(){return parseInt(a.value)},selectedValue:x,get dft(){return v.value=="true"},get hidden(){return!i.value},[l]:{dft:u(e=>e.value=="true",[v]),hidden:u(e=>!e.value,[i]),prefix:l,selectedRange:u(e=>e.value,[s]),selectedScs:u(e=>parseInt(e.value),[a]),selectedValue:l}},3,"R5_4"),r(A,{label:"Downlink Mimo Layers",labelClass:"text-center",options:E,selectedValue:D,get hidden(){return!_.value},[l]:{hidden:u(e=>!e.value,[_]),label:l,labelClass:l,selectedValue:l}},3,"R5_5"),r(A,{label:"Uplink Mimo Layers",labelClass:"text-center",options:O,selectedValue:b,get hidden(){return!i.value},[l]:{hidden:u(e=>!e.value,[i]),label:l,labelClass:l,selectedValue:l}},3,"R5_6"),r(F,{prefix:"Downlink",selectedValue:p,get hidden(){return!_.value},[l]:{hidden:u(e=>!e.value,[_]),prefix:l,selectedValue:l}},3,"R5_7"),r(F,{prefix:"Uplink",selectedValue:R,ul:!0,get dft(){return v.value=="true"},get hidden(){return!i.value},[l]:{dft:u(e=>e.value=="true",[v]),hidden:u(e=>!e.value,[i]),prefix:l,selectedValue:l,ul:l}},3,"R5_8"),r(A,{label:"Uplink Waveform",labelClass:"text-center",options:S,selectedValue:v,get hidden(){return!i.value},[l]:{hidden:u(e=>!e.value,[i]),label:l,labelClass:l,selectedValue:l}},3,"R5_9"),r(H,{get selectedScs(){return parseInt(a.value)},selectedValue:V,get hidden(){return!m.value},[l]:{hidden:u(e=>!e.value,[m]),selectedScs:u(e=>parseInt(e.value),[a]),selectedValue:l}},3,"R5_10"),r(k,{get selectedDuplex(){return d.value},selectedValue:f,[l]:{selectedDuplex:u(e=>e.value,[d]),selectedValue:l}},3,"R5_11")],1,null)],1,"R5_12")},P=Object.freeze(Object.defineProperty({__proto__:null,_hW:B,s_4sSbGYyX0BU:G,s_9mLv3ZTnxuc:Z,s_CubkyFxVlm4:$,s_WuMdOEkoql0:Q,s_WvNenEQw0iE:j},Symbol.toStringTag,{value:"Module"}));export{B as _hW,G as s_4sSbGYyX0BU,Z as s_9mLv3ZTnxuc,$ as s_CubkyFxVlm4,Q as s_WuMdOEkoql0,j as s_WvNenEQw0iE};
