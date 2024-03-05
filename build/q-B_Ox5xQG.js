import{$ as M,n as _,q as o,_ as c,c as a,R as x,d as U,M as s,E as u,K as l}from"./q-XGgtpwab.js";import{c as k,d as W}from"./q-CFU3JOUe.js";import{S as T}from"./q-CS4dr75q.js";const q=()=>{const[t]=M();return t.value==="TDD"},F=()=>{const[t]=M();return t.value!=="SUL"},N=()=>{const[t]=M();return t.value!=="SDL"},B=()=>{const[t,v,n,g,R,p,D,i,b,V,m]=M(),P=parseInt(b.value);if(p.value=="")return[0,0];const I=p.value,f=V.value=="true",h=D.value;let r=i.value;f&&(r=W(r));const d=g.value,E=R.value;let e=100,S=100;t.value=="TDD"?(e=m.value[0],S=m.value[1]):t.value=="SUL"?e=0:t.value=="SDL"&&(S=0);const L={range:I,numerology:P,duplex:t.value,resourceBlocksDl:h,resourceBlocksUl:r,mimoDl:parseInt(v.value),mimoUl:parseInt(n.value),modDl:d,modUl:E,dlPercentage:e,ulPercentage:S,ulTransformPrecoding:f},w=Math.floor(k(L,"dl")/1e4)/100,C=Math.floor(k(L,"ul")/1e4)/100;return[w,C]},A=_(o(()=>c(()=>import("./q-s3zYqxVz.js"),__vite__mapDeps([])),"s_A6b3xTcSm4I")),Q=_(o(()=>c(()=>import("./q-DYrAX3Q9.js"),__vite__mapDeps([])),"s_VYrxGS1B1WY")),Y=_(o(()=>c(()=>import("./q-D9usmF0A.js"),__vite__mapDeps([])),"s_ABN5NpqRiGQ")),y=_(o(()=>c(()=>import("./q-DU7alonn.js"),__vite__mapDeps([])),"s_308KUYpmhME")),j=_(o(()=>c(()=>import("./q-CQqIpSjn.js"),__vite__mapDeps([])),"s_OmE6qsg2EcM")),G=_(o(()=>c(()=>import("./q-Bv_YBDeb.js"),__vite__mapDeps([])),"s_SRWFC72LvAw")),K=()=>{const t=a(""),v=a(""),n=a(""),g=a({modOrder:0,codeRate:0}),R=a({modOrder:0,codeRate:0}),p=a(""),D=a(""),i=a(""),b=a(100),V=a(100),m=a([100,100]),P=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"}],I=[{label:"1",value:"1"},{label:"2",value:"2"}],f=[{label:"CP-OFDM",value:"false"},{label:"DFT-s-OFDM",value:"true"}],h=x(o(()=>c(()=>Promise.resolve().then(()=>O),void 0),"s_hgssO6t0cso",[v,p,D,g,R,t,b,V,n,i,m])),r=x(o(()=>c(()=>Promise.resolve().then(()=>O),void 0),"s_WuMdOEkoql0",[v])),d=x(o(()=>c(()=>Promise.resolve().then(()=>O),void 0),"s_CubkyFxVlm4",[v])),E=x(o(()=>c(()=>Promise.resolve().then(()=>O),void 0),"s_WvNenEQw0iE",[v]));return U("div",null,{class:"p-4"},[U("h1",null,{class:"text-center text-xl"},["Speed: ",s(e=>e.value[0],[h])," Mbps / ",s(e=>e.value[1],[h])," Mbps"],3,null),U("div",null,{class:"grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},[u(Y,{selectedValue:t,[l]:{selectedValue:l}},3,"R5_0"),u(Q,{get selectedRange(){return t.value},selectedValue:v,get hidden(){return t.value=="fr2"},[l]:{hidden:s(e=>e.value=="fr2",[t]),selectedRange:s(e=>e.value,[t]),selectedValue:l}},3,"R5_1"),u(j,{get selectedRange(){return t.value},selectedValue:n,[l]:{selectedRange:s(e=>e.value,[t]),selectedValue:l}},3,"R5_2"),u(A,{prefix:"Downlink",get selectedRange(){return t.value},get selectedScs(){return parseInt(n.value)},selectedValue:b,get hidden(){return!r.value},[l]:{hidden:s(e=>!e.value,[r]),prefix:l,selectedRange:s(e=>e.value,[t]),selectedScs:s(e=>parseInt(e.value),[n]),selectedValue:l}},3,"R5_3"),u(A,{prefix:"Uplink",get selectedRange(){return t.value},get selectedScs(){return parseInt(n.value)},selectedValue:V,get dft(){return i.value=="true"},get hidden(){return!d.value},[l]:{dft:s(e=>e.value=="true",[i]),hidden:s(e=>!e.value,[d]),prefix:l,selectedRange:s(e=>e.value,[t]),selectedScs:s(e=>parseInt(e.value),[n]),selectedValue:l}},3,"R5_4"),u(T,{label:"Downlink Mimo Layers",labelClass:"text-center",options:P,selectedValue:p,get hidden(){return!r.value},[l]:{hidden:s(e=>!e.value,[r]),label:l,labelClass:l,selectedValue:l}},3,"R5_5"),u(T,{label:"Uplink Mimo Layers",labelClass:"text-center",options:I,selectedValue:D,get hidden(){return!d.value},[l]:{hidden:s(e=>!e.value,[d]),label:l,labelClass:l,selectedValue:l}},3,"R5_6"),u(y,{prefix:"Downlink",selectedValue:g,get hidden(){return!r.value},[l]:{hidden:s(e=>!e.value,[r]),prefix:l,selectedValue:l}},3,"R5_7"),u(y,{prefix:"Uplink",selectedValue:R,ul:!0,get dft(){return i.value=="true"},get hidden(){return!d.value},[l]:{dft:s(e=>e.value=="true",[i]),hidden:s(e=>!e.value,[d]),prefix:l,selectedValue:l,ul:l}},3,"R5_8"),u(T,{label:"Uplink Waveform",labelClass:"text-center",options:f,selectedValue:i,get hidden(){return!d.value},[l]:{hidden:s(e=>!e.value,[d]),label:l,labelClass:l,selectedValue:l}},3,"R5_9"),u(G,{get selectedScs(){return parseInt(n.value)},selectedValue:m,get hidden(){return!E.value},[l]:{hidden:s(e=>!e.value,[E]),selectedScs:s(e=>parseInt(e.value),[n]),selectedValue:l}},3,"R5_10")],1,null)],1,"R5_11")},O=Object.freeze(Object.defineProperty({__proto__:null,s_9mLv3ZTnxuc:K,s_CubkyFxVlm4:N,s_WuMdOEkoql0:F,s_WvNenEQw0iE:q,s_hgssO6t0cso:B},Symbol.toStringTag,{value:"Module"}));export{K as s_9mLv3ZTnxuc,N as s_CubkyFxVlm4,F as s_WuMdOEkoql0,q as s_WvNenEQw0iE,B as s_hgssO6t0cso};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
