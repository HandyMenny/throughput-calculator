function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{n as M,q as V,_ as C,c as r,T as R,E as u,K as l,M as b,f as T,$ as L,w as W}from"./q-XGgtpwab.js";import{N as f}from"./q-CYh8T26N.js";import{S as x}from"./q-CS4dr75q.js";import{e as P,f as F,h as q}from"./q-CFU3JOUe.js";const D=M(V(()=>C(()=>import("./q-CmrMBBpT.js"),__vite__mapDeps([])),"s_FrTSgj3HbX8")),E=t=>{const a=r(""),n=r({periodicity:0,dlSlots:0,dlSymbols:0,ulSlots:0,ulSymbols:0}),m=r({periodicity:0,dlSlots:0,dlSymbols:0,ulSlots:0,ulSymbols:0}),S=r(""),v=r(74),c=r(23),h=[{label:"DL/UL percentage",value:"percentage"},{label:"Common pattern",value:"pattern"},{label:"Common pattern1 + pattern2",value:"pattern12"}],d=[{label:"Guard Period",value:"guard"},{label:"Downlink",value:"dl"},{label:"Uplink",value:"ul"}];return R(V(()=>C(()=>Promise.resolve().then(()=>p),void 0),"s_0qC8ouqtvRM",[v,t,S,n,m,a,c])),u(T,{children:[u(x,{label:"TDD DL/UL ratio",labelClass:"text-center",options:h,selectedValue:a,get hidden(){return t.hidden},[l]:{hidden:b(s=>s.hidden,[t]),label:l,labelClass:l,selectedValue:l}},3,"Os_0"),u(D,{selectedValue:n,suffix:"",get hidden(){return t.hidden||!a.value.startsWith("pattern")},[l]:{hidden:b((s,o)=>s.hidden||!o.value.startsWith("pattern"),[t,a]),selectedValue:l,suffix:l}},3,"Os_1"),u(D,{selectedValue:m,suffix:"2",get hidden(){return t.hidden||a.value!=="pattern12"},[l]:{hidden:b((s,o)=>s.hidden||o.value!=="pattern12",[t,a]),selectedValue:l,suffix:l}},3,"Os_2"),u(x,{label:"Flex Symbols",labelClass:"text-center",options:d,selectedValue:S,get hidden(){return t.hidden||!a.value.startsWith("pattern")},[l]:{hidden:b((s,o)=>s.hidden||!o.value.startsWith("pattern"),[t,a]),label:l,labelClass:l,selectedValue:l}},3,"Os_3"),u(f,{label:"Slots DL %",labelClass:"text-center",selectedValue:v,get hidden(){return t.hidden||a.value!="percentage"},[l]:{hidden:b((s,o)=>s.hidden||o.value!="percentage",[t,a]),label:l,labelClass:l,selectedValue:l}},3,"Os_4"),u(f,{label:"Slots UL %",labelClass:"text-center",selectedValue:c,get hidden(){return t.hidden||a.value!="percentage"},[l]:{hidden:b((s,o)=>s.hidden||o.value!="percentage",[t,a]),label:l,labelClass:l,selectedValue:l}},3,"Os_5")]},1,"Os_6")},w=({track:t})=>{const[a,n,m,S,v,c,h]=L();if(t(()=>n.selectedScs),t(()=>c.value),t(()=>m.value),t(()=>S.value),t(()=>v.value),t(()=>a.value),t(()=>h.value),n.selectedValue==null)return;let d=0,s=0;if(c.value.startsWith("pattern")){const o=m.value,i=S.value,e=c.value=="pattern12"?v.value:null;if(d=P(n.selectedScs,i.periodicity,i.dlSlots,i.dlSymbols,e==null?void 0:e.periodicity,e==null?void 0:e.dlSlots,e==null?void 0:e.dlSymbols)*100,s=P(n.selectedScs,i.periodicity,i.ulSlots,i.ulSymbols,e==null?void 0:e.periodicity,e==null?void 0:e.ulSlots,e==null?void 0:e.ulSymbols)*100,o!=="guard"){const y=F(i.dlSymbols,i.ulSymbols,(e==null?void 0:e.dlSymbols)??0,(e==null?void 0:e.ulSymbols)??0);console.log("flex count"+y);const O=q(n.selectedScs),_=y*1e3*O;console.log("flexduration "+_);const g=i.periodicity+((e==null?void 0:e.periodicity)??0);o=="dl"?(console.log("flex dl"),console.log("prev dl ratio: "+d),d+=_/g*100,console.log("new dl ratio: "+d)):o=="ul"&&(console.log("flex ul"),s+=_/g*100)}}else d=a.value,s=h.value;d=Math.max(0,Math.min(d,100)),s=Math.max(0,Math.min(s,100)),n.selectedValue.value=[d,s]},p=Object.freeze(Object.defineProperty({__proto__:null,_hW:W,s_0qC8ouqtvRM:w,s_SRWFC72LvAw:E},Symbol.toStringTag,{value:"Module"}));export{W as _hW,w as s_0qC8ouqtvRM,E as s_SRWFC72LvAw};
