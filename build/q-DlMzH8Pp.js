function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as g,x as L,l as i,a as T,I as A,T as h,b as R,O as w,n as $,E as k,q as d,_ as u,U as C,w as V}from"./q-_JLpC6VS.js";import{a3 as D,a1 as M}from"./q-Dyu2sCja.js";const y=()=>{const[e]=g();return e._options===void 0||e._options.length===0?[]:e._options},G=function({track:a}){const[t,o,n,l]=g(),_=a(()=>{var r;return(r=n["bind:value"])==null?void 0:r.value});if(!_)return;const c=o.get(_)??-1;c!==-1&&(l.value=c,t.value=c)},K=async function({track:a}){var l;const[t,o,n]=g();a(()=>n.value),n.value!==null&&await((l=o.onChange$)==null?void 0:l.call(o,t.value[n.value].value))},Q=function({track:a}){var n;const[t,o]=g();a(()=>t.value),(n=o.onOpenChange$)==null||n.call(o,t.value)},U=e=>{var O;const a=L(e,["_options","_valuePropIndex","onChange$","onOpenChange$","scrollOptions","loop"]),t=i(),o=i(),n=i(),l=i(),_=i(),c=e.loop??!1,r=T(),f=`${r}-listbox`,x=A(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_ww527xi52pA",[e])),b=new Map((O=x.value)==null?void 0:O.map((E,P)=>[E.value,P])),p=i(e._valuePropIndex??null),I=i(e._valuePropIndex??null),S=i(!1),m=e.scrollOptions??{behavior:"instant",block:"nearest"};h(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_sGOKSQmGpU4",[I,b,e,p])),h(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_7EIf8g4thrQ",[x,e,p])),h(d(()=>u(()=>Promise.resolve().then(()=>v),void 0),"s_kxcASEcxnNg",[S,e]));const s={triggerRef:o,popoverRef:n,listboxRef:l,groupRef:_,optionsSig:x,localId:r,highlightedIndexSig:I,isListboxOpenSig:S,selectedIndexSig:p,scrollOptions:m,loop:c};return R(M,s),w("div",{"aria-activedescendant":s.isListboxOpenSig.value?D(s.highlightedIndexSig.value??-1,s.optionsSig.value,s.localId):"","aria-controls":f,"aria-expanded":$(s.isListboxOpenSig,"value"),"data-closed":s.isListboxOpenSig.value?void 0:"","data-open":s.isListboxOpenSig.value?"":void 0,ref:t,...a,children:k(C,null,3,"xi_0")},{"aria-haspopup":"listbox",role:"combobox"},0,"xi_1")},v=Object.freeze(Object.defineProperty({__proto__:null,_hW:V,s_7EIf8g4thrQ:K,s_karIvJKNPKY:U,s_kxcASEcxnNg:Q,s_sGOKSQmGpU4:G,s_ww527xi52pA:y},Symbol.toStringTag,{value:"Module"}));export{V as _hW,K as s_7EIf8g4thrQ,U as s_karIvJKNPKY,Q as s_kxcASEcxnNg,G as s_sGOKSQmGpU4,y as s_ww527xi52pA};