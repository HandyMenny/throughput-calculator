import{$ as m,u as h,I as M,T,E as i,K as r,O as d,e as x,k as v,_ as b,w as g}from"./q-CS0xL3da.js";import{m as p,b as C,c as P}from"./q-BrffGYlV.js";import{S as I}from"./q-BO1KpbFS.js";const f=()=>{const[e]=m(),a=e.value,t=p[a],u=t.standard.map((s,n)=>({label:n+" - TBS "+s,value:n+""}));return Object.keys(t.alternative).map(s=>{t.alternative[s].map((n,o)=>{u.push({label:s+" - TBS "+n,value:s+"-"+(o+1)})})}),u.sort((s,n)=>parseInt(s.value)-parseInt(n.value)),u},S=()=>{const[e]=m(),a=e.ul?"TBS 34":"TBS 33B",t=[{label:"QPSK",value:"2"},{label:"16QAM",value:"4"},{label:"64QAM",value:"6"},{label:"256QAM - TBS 33",value:"8"},{label:`256QAM - ${a}`,value:"9"},{label:"MCS index",value:"-1"}];if(!e.ul){const u={label:"1024QAM",value:"10"};t.splice(5,0,u)}return t},q=e=>{const a=h("8"),t=h("qam256pdsch"),u=h("0"),s=M(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_gIlmzO0Ut0g",[e])),n=M(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_WxbvueHZ36U",[e])),o=M(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_77xPVIUvGy0",[t]));return T(v(()=>b(()=>Promise.resolve().then(()=>_),void 0),"s_E09bNMLPLtM",[e,u,t,a])),i(x,{children:[i(I,{get label(){return`${e.prefix} Modulation`},labelClass:"text-center",get options(){return s.value},selectedValue:a,get hidden(){return e.hidden},[r]:{label:d(l=>`${l.prefix} Modulation`,[e]),labelClass:r,options:d(l=>l.value,[s]),selectedValue:r,hidden:d(l=>l.hidden,[e])}},3,"CU_0"),i(I,{get label(){return`${e.prefix} MCS Table`},labelClass:"text-center",get options(){return n.value},selectedValue:t,get hidden(){return e.hidden||a.value!=="-1"},[r]:{label:d(l=>`${l.prefix} MCS Table`,[e]),labelClass:r,options:d(l=>l.value,[n]),selectedValue:r,hidden:d((l,c)=>l.hidden||c.value!=="-1",[e,a])}},3,"CU_1"),i(I,{get label(){return`${e.prefix} MCS Index`},labelClass:"text-center",get options(){return o.value},selectedValue:u,get hidden(){return e.hidden||a.value!=="-1"},[r]:{label:d(l=>`${l.prefix} MCS Index`,[e]),labelClass:r,options:d(l=>l.value,[o]),selectedValue:r,hidden:d((l,c)=>l.hidden||c.value!=="-1",[e,a])}},3,"CU_2")]},1,"CU_3")},V=()=>{const[e]=m();return e.ul?[{label:"64qam (8.6.1-1)",value:"qam64pusch"},{label:"256qam (8.6.1-3)",value:"qam256pusch"}]:[{label:"64qam (7.1.7.1-1)",value:"qam64pdsch"},{label:"256qam (7.1.7.1-1A)",value:"qam256pdsch"},{label:"1024qam (7.1.7.1-1B)",value:"qam1024pdsch"},{label:"6 bit (7.1.7.1-1C)",value:"bit6pdsch"}]},E=({track:e})=>{const[a,t,u,s]=m();if(e(()=>s.value),e(()=>u.value),e(()=>t.value),a.selectedValue==null)return;let n;if(s.value=="-1"){const o=u.value,l=t.value,c=parseInt(t.value.split("-")[1]||"0");n=C(parseInt(l),o,c)}else n=P(parseInt(s.value),a.ul?"ul":"dl");a.selectedValue.value=n},_=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_77xPVIUvGy0:f,s_E09bNMLPLtM:E,s_GRy0ThN0PIE:q,s_WxbvueHZ36U:V,s_gIlmzO0Ut0g:S},Symbol.toStringTag,{value:"Module"}));export{g as _hW,f as s_77xPVIUvGy0,E as s_E09bNMLPLtM,q as s_GRy0ThN0PIE,V as s_WxbvueHZ36U,S as s_gIlmzO0Ut0g};