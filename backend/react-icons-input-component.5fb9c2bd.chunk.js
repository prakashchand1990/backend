"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[533],{41200:(G,m,t)=>{t.r(m),t.d(m,{default:()=>b});var e=t(67294),y=t(16364),d=t(25752),A=t(42866),T=t(24969),r=t(75515),L=t(59946),W=t(11047),B=t(41580),R=t(36856),K=t(40619),U=t(82562),f=t(29728),P=t(871),M=t(37106),h=t(86896),S=t(86597),u=t(44405);const p=window.localStorage.STRAPI_THEME,D=({icon:l,size:E})=>{const n=P[l];return n===void 0?e.createElement(e.Fragment,null):e.createElement(u.Pd.Provider,{value:{color:p==="light"?"#212134":"#a5a5ba"}},e.createElement(n,{size:E}))},b=({description:l,error:E,intlLabel:n,placeholder:O,name:c,required:Z,onChange:I,value:_})=>{const{formatMessage:o}=(0,h.Z)(),[F,V]=(0,e.useState)([]),[a,x]=(0,e.useState)(null),[v,C]=(0,e.useState)([]),[z,N]=(0,e.useState)(!1),i=()=>N(s=>!s),g=s=>I({target:{name:c,type:"string",value:s}});return(0,e.useEffect)(()=>{(async()=>{V((await(0,S.WY)("/react-icons/iconlibrary/find",{method:"GET"})).filter(j=>j.isEnabled))})()},[]),(0,e.useEffect)(()=>{a&&C(Object.keys(P).filter(s=>s.toLowerCase().startsWith(a)))},[a,C]),e.createElement(e.Fragment,null,e.createElement(y.o,{type:"text",label:n&&o(n),placeholder:O&&o(O),hint:l&&o(l),disabled:!0,onChange:I,id:c,name:c,value:_||"",required:Z,error:E,startAction:e.createElement(d.E,{onClick:i},_?e.createElement(D,{icon:_}):e.createElement(M.adB,null)),endAction:!!_&&e.createElement(d.E,{onClick:()=>g("")},e.createElement(M.lhV,null))}),z&&e.createElement(A.P,{onClose:i,labelledBy:"title"},e.createElement(T.x,null,e.createElement(r.Z,{fontWeight:"bold",id:"title"},"Select icon")),e.createElement(L.f,null,e.createElement(W.k,{direction:"row",wrap:"wrap",gap:2},a?v.length>0?v.map(s=>e.createElement(B.x,{key:s,variant:"secondary",onClick:()=>{i(),g(s)}},e.createElement(D,{size:30,icon:s}))):e.createElement(r.Z,{variant:"pi"},"No icons available"):e.createElement(r.Z,{variant:"pi"},"No icon library selected"))),e.createElement(R.m,{startActions:e.createElement(K.P,{id:"iconLibrarySelect",minWidth:500,selectButtonTitle:"Select icon library",placeholder:"Select icon library",required:0,error:E,value:a,onChange:x},F.map(s=>e.createElement(U.W,{key:s.id,value:s.abbreviation},s.name))),endActions:e.createElement(f.z,{variant:"tertiary",onClick:i},"Close")})))}}}]);
