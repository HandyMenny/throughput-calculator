import{$ as b,r as m,k as n,_ as i,u,A as V,b as g,E as o,K as e,O as s,w as E}from"./q-CS0xL3da.js";import{a as f,l as h}from"./q-BiqzbooR.js";import{N as O}from"./q-C6FWXTfz.js";import{T as x}from"./q-Dw8fOteB.js";const y=({track:t})=>{const[a,d,r,c,_,v,l]=b();console.log("layer wifi speed calculation"),t(()=>l.value),t(()=>d.value),t(()=>c.value),t(()=>_.value),t(()=>r.value),t(()=>v.value);const p={standard:l.value,subCarriers:f(d.value,l.value)||0,mimo:c.value,mod:_.value,guardInterval:r.value,overhead:v.value/100};a.speed.dl=a.speed.ul=h(p)},S=m(n(()=>i(()=>import("./q-CvCkD1VH.js"),[]),"s_4SyeEkQk4ss")),T=m(n(()=>i(()=>import("./q-DGsLNMiw.js"),[]),"s_hoAYrqfq9v4")),w=m(n(()=>i(()=>import("./q-BrsiqYPQ.js"),[]),"s_m7T4ZbxdfD8")),I=m(n(()=>i(()=>import("./q-WoOijZ0J.js"),[]),"s_ljgMBwhI1go")),M=m(n(()=>i(()=>import("./q-CV0nhVd4.js"),[]),"s_x0NkbMQyv8U")),Y=t=>{const a=u("ht"),d=u(20),r=u(2),c=u({modOrder:6,codeRate:5/6}),_=u(.4**10^-6),v=u(0);return V(n(()=>i(()=>Promise.resolve().then(()=>A),void 0),"s_KWGo0QauVnE",[t,d,_,r,c,v,a]),{strategy:"document-ready"}),g("div",null,{class:"m-4 border-2 border-solid border-gray-500 p-4"},[o(x,{class:"text-center text-xl font-semibold leading-8",get dl(){return t.speed.dl},get ul(){return t.speed.ul},dlUlSeparator:"/",iconSize:20,iconStroke:2,[e]:{class:e,dl:s(l=>l.speed.dl,[t]),ul:s(l=>l.speed.ul,[t]),dlUlSeparator:e,iconSize:e,iconStroke:e}},3,"Y3_0"),g("div",null,{class:"grid grid-cols-1 items-end gap-x-5 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"},[o(M,{selectedValue:a,[e]:{selectedValue:e}},3,"Y3_1"),o(S,{get standard(){return a.value},selectedValue:d,[e]:{standard:s(l=>l.value,[a]),selectedValue:e}},3,"Y3_2"),o(w,{get standard(){return a.value},selectedValue:r,[e]:{standard:s(l=>l.value,[a]),selectedValue:e}},3,"Y3_3"),o(I,{get standard(){return a.value},get mimo(){return r.value},get bw(){return d.value},selectedValue:c,[e]:{standard:s(l=>l.value,[a]),mimo:s(l=>l.value,[r]),bw:s(l=>l.value,[d]),selectedValue:e}},3,"Y3_4"),o(T,{get standard(){return a.value},selectedValue:_,[e]:{standard:s(l=>l.value,[a]),selectedValue:e}},3,"Y3_5"),o(O,{label:"Overhead %",labelClass:"text-center",min:0,max:100,selectedValue:v,[e]:{label:e,labelClass:e,min:e,max:e,selectedValue:e}},3,"Y3_6")],1,null)],1,"Y3_7")},A=Object.freeze(Object.defineProperty({__proto__:null,_hW:E,s_KWGo0QauVnE:y,s_hKrYkqxp4bU:Y},Symbol.toStringTag,{value:"Module"}));export{E as _hW,y as s_KWGo0QauVnE,Y as s_hKrYkqxp4bU};
