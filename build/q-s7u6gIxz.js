function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as n,l as e,q as C,b as t,E as m,_ as p,U as R}from"./q-_JLpC6VS.js";import{c as f,C as g,d as x,D as y,R as E,e as b,f as I,h as P,i as U}from"./q-Bz558kU2.js";const h=async()=>{console.warn("QwikCityMockProvider: goto not provided")},w=o=>{const s=o.url??"http://localhost/",a=new URL(s),r=n({url:a,params:o.params??{},isNavigating:!1,prevUrl:void 0},{deep:!1}),c=e({}),i=e({type:"initial",dest:a}),l=o.goto??C(()=>p(()=>Promise.resolve().then(()=>S),void 0),"s_BUbtvTyvVRE"),d=n(f,{deep:!1}),u=n({headings:void 0,menu:void 0},{deep:!1}),v=e(),_=e();return t(g,u),t(x,v),t(y,d),t(E,r),t(b,l),t(I,c),t(P,_),t(U,i),m(R,null,3,"qY_1")},S=Object.freeze(Object.defineProperty({__proto__:null,s_BUbtvTyvVRE:h,s_WmYC5H00wtI:w},Symbol.toStringTag,{value:"Module"}));export{h as s_BUbtvTyvVRE,w as s_WmYC5H00wtI};
