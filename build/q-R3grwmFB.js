import{$ as g,x as A,u as i,d as L,I as T,T as h,a as k,P as R,o as w,E as C,k as d,_ as u,H as $,w as V}from"./q-CS0xL3da.js";import{a3 as D,a1 as y}from"./q-BN3E81Wg.js";const G=()=>{const[e]=g();return e._options===void 0||e._options.length===0?[]:e._options},K=function({track:a}){const[t,o,n,l]=g(),_=a(()=>{var r;return(r=n["bind:value"])==null?void 0:r.value});if(!_)return;const c=o.get(_)??-1;c!==-1&&(l.value=c,t.value=c)},M=async function({track:a}){var l;const[t,o,n]=g();a(()=>n.value),n.value!==null&&await((l=o.onChange$)==null?void 0:l.call(o,t.value[n.value].value))},Q=function({track:a}){var n;const[t,o]=g();a(()=>t.value),(n=o.onOpenChange$)==null||n.call(o,t.value)},N=e=>{var f;const a=A(e,["_options","_valuePropIndex","onChange$","onOpenChange$","scrollOptions","loop"]),t=i(),o=i(),n=i(),l=i(),_=i(),c=e.loop??!1,r=L(),O=`${r}-listbox`,x=T(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_ww527xi52pA",[e])),b=new Map((f=x.value)==null?void 0:f.map((m,E)=>[m.value,E])),p=i(e._valuePropIndex??null),I=i(e._valuePropIndex??null),S=i(!1),P=e.scrollOptions??{behavior:"instant",block:"nearest"};h(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_sGOKSQmGpU4",[I,b,e,p])),h(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_7EIf8g4thrQ",[x,e,p])),h(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_kxcASEcxnNg",[S,e]));const s={triggerRef:o,popoverRef:n,listboxRef:l,groupRef:_,optionsSig:x,localId:r,highlightedIndexSig:I,isListboxOpenSig:S,selectedIndexSig:p,scrollOptions:P,loop:c};return k(y,s),R("div",{"aria-activedescendant":s.isListboxOpenSig.value?D(s.highlightedIndexSig.value??-1,s.optionsSig.value,s.localId):"","aria-controls":O,"aria-expanded":w(s.isListboxOpenSig,"value"),"data-closed":s.isListboxOpenSig.value?void 0:"","data-open":s.isListboxOpenSig.value?"":void 0,ref:t,...a,children:C($,null,3,"xi_0")},{"aria-haspopup":"listbox",role:"combobox"},0,"xi_1")},v=Object.freeze(Object.defineProperty({__proto__:null,_hW:V,s_7EIf8g4thrQ:M,s_karIvJKNPKY:N,s_kxcASEcxnNg:Q,s_sGOKSQmGpU4:K,s_ww527xi52pA:G},Symbol.toStringTag,{value:"Module"}));export{V as _hW,M as s_7EIf8g4thrQ,N as s_karIvJKNPKY,Q as s_kxcASEcxnNg,K as s_sGOKSQmGpU4,G as s_ww527xi52pA};