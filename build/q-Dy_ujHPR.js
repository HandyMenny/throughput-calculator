import{$ as I,r as E,k as u,_ as a,u as d,A as O,I as V,b as h,E as o,K as e,O as i,w as P}from"./q-CS0xL3da.js";import{l as U}from"./q-BrffGYlV.js";import{S as A}from"./q-BO1KpbFS.js";import{T as M}from"./q-xBPDpIvF.js";const S=()=>{const[l]=I();return l.value==="TDD"},B=({track:l})=>{const[s,c,r,_,v,D,p,g,m]=I();console.log("layer lte speed calculation"),l(()=>r.value),l(()=>v.value),l(()=>D.value),l(()=>_.value),l(()=>p.value),l(()=>g.value),l(()=>c.value),l(()=>m.value);const n=p.value,x=g.value,t=v.value,y=D.value;let R=1,b=1;r.value=="TDD"&&(R=m.value.dl,b=m.value.ul),c.value.includes("dl")||(R=0),(r.value=="SDL"||!c.value.includes("ul"))&&(b=0);const T={duplex:r.value,resourceBlocksDl:n,resourceBlocksUl:x,mimoDl:parseInt(_.value),tbsIndexDl:t,tbsIndexUl:y,dlPercentage:R,ulPercentage:b};s.speed.dl=U(T,"dl"),s.speed.ul=U(T,"ul")},w=()=>{const[l]=I();return l.value!=="SDL"},F=E(u(()=>a(()=>import("./q-Bn4gJRSW.js"),[]),"s_nowmDa6LDj8")),G=E(u(()=>a(()=>import("./q-DiQqEcA5.js"),[]),"s_YzFijexl58I")),z=E(u(()=>a(()=>import("./q-B31FlVGc.js"),[]),"s_c0nRsxRssL0")),L=E(u(()=>a(()=>import("./q-DoNxwhIW.js"),[]),"s_GRy0ThN0PIE")),j=E(u(()=>a(()=>import("./q-WgaUVIX5.js"),[]),"s_iczBxOIiOp4")),k=l=>{const s=d("FDD"),c=d("26"),r=d("26"),_=d("2"),v=d(100),D=d(100),p=d("dl-ul"),g=d({dl:0,ul:0}),m=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"}];O(u(()=>a(()=>Promise.resolve().then(()=>f),void 0),"s_Fs0d0JATyB8",[l,p,s,_,c,r,v,D,g]),{strategy:"document-ready"});const n=V(u(()=>a(()=>Promise.resolve().then(()=>f),void 0),"s_EXdr5YhyGFI",[s])),x=V(u(()=>a(()=>Promise.resolve().then(()=>f),void 0),"s_lWs4GD6fRQM",[s]));return h("div",null,{class:"m-4 border-2 border-solid border-gray-500 p-4"},[o(M,{class:"text-center text-xl font-semibold leading-8",get dl(){return l.speed.dl},get ul(){return l.speed.ul},dlUlSeparator:"/",iconSize:20,iconStroke:2,[e]:{class:e,dl:i(t=>t.speed.dl,[l]),ul:i(t=>t.speed.ul,[l]),dlUlSeparator:e,iconSize:e,iconStroke:e}},3,"9E_0"),h("div",null,{class:"grid grid-cols-1 items-end gap-x-5 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"},[o(z,{selectedValue:s,[e]:{selectedValue:e}},3,"9E_1"),o(G,{prefixDl:"Downlink",prefixUl:"Uplink",selectedRBsDl:v,selectedRBsUl:D,get hideUl(){return!n.value},[e]:{prefixDl:e,prefixUl:e,selectedRBsDl:e,selectedRBsUl:e,hideUl:i(t=>!t.value,[n])}},3,"9E_2"),o(A,{label:"Downlink MIMO Layers",labelClass:"text-center",options:m,selectedValue:_,[e]:{label:e,labelClass:e,selectedValue:e}},3,"9E_3"),o(L,{prefix:"Downlink",selectedValue:c,[e]:{prefix:e,selectedValue:e}},3,"9E_4"),o(L,{prefix:"Uplink",selectedValue:r,ul:!0,get hidden(){return!n.value},[e]:{prefix:e,selectedValue:e,ul:e,hidden:i(t=>!t.value,[n])}},3,"9E_5"),o(j,{selectedValue:g,get hidden(){return!x.value},[e]:{selectedValue:e,hidden:i(t=>!t.value,[x])}},3,"9E_6"),o(F,{get selectedDuplex(){return s.value},selectedValue:p,[e]:{selectedDuplex:i(t=>t.value,[s]),selectedValue:e}},3,"9E_7")],1,null)],1,"9E_8")},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:P,s_EXdr5YhyGFI:w,s_Fs0d0JATyB8:B,s_N7GgnYKEqrc:k,s_lWs4GD6fRQM:S},Symbol.toStringTag,{value:"Module"}));export{P as _hW,w as s_EXdr5YhyGFI,B as s_Fs0d0JATyB8,k as s_N7GgnYKEqrc,S as s_lWs4GD6fRQM};