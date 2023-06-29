"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[4121],{62872:(k,m,t)=>{t.r(m),t.d(m,{default:()=>se});var e=t(67294),s=t(86597),r=t(87751),c=t(16550),g=t(86896),E=t(88767),T=t(14087),x=t(17034),L=t(185),i=t(53979),S=t(36989),d=t(75515),A=t(29728),N=t(49066),Q=t(41580),Y=t(38939),G=t(49386),X=t(8060),B=t(79031),o=t(37909),W=t(92155),J=t(63237),q=t(15234),I=t(11047),_=t(3566),R=t(12028),ee=t(89722),D=t(96315),$=t(20022),te=t(4585),ae=t(86031);const ne=()=>{const[le,f]=(0,e.useState)(!1),[P,h]=(0,e.useState)([]),{formatMessage:n}=(0,g.Z)(),{formatAPIError:b}=(0,s.So)(),M=(0,s.lm)();(0,s.go)();const{push:oe}=(0,c.k6)(),{pathname:U}=(0,c.TH)(),{isLoading:ie,allowedActions:{canCreate:p,canUpdate:K,canDelete:V}}=(0,s.ss)(r.Z.settings.webhooks),{get:re,post:de,put:ce}=(0,s.kY)(),{notifyStatus:F}=(0,T.G)(),me="webhooks",{isLoading:ge,data:u,error:w,refetch:z}=(0,E.useQuery)(me,async()=>{const{data:{data:a}}=await re("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(w){M({type:"warning",message:b(w)});return}u&&F(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[u,w,M,n,F,b]);const H=(0,E.useMutation)(async()=>{await de("/admin/webhooks/batch-delete",{ids:P})},{onError(a){M({type:"warning",message:b(a)}),f(!1)},onSuccess(){h([]),f(!1),z()}}),he=(0,E.useMutation)(async({isEnabled:a,id:l})=>{const{id:y,...j}=u.find(be=>be.id===l)??{},ve={...j,isEnabled:a};await ce(`/admin/webhooks/${l}`,ve)},{onError(a){M({type:"warning",message:b(a)})},onSuccess(){z()}}),ue=()=>H.mutate(),Ee=a=>h(a?u.map(l=>l.id):[]),fe=(a,l)=>h(a?y=>[...y,l]:y=>y.filter(j=>j!==l)),O=a=>oe(`${U}/${a}`),Z=ie||ge,C=u?.length??0,v=P.length;return e.createElement(x.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(L.o,{"aria-busy":Z},e.createElement(i.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:p&&!Z&&e.createElement(s.Qj,{startIcon:e.createElement(D.Z,null),variant:"default",to:`${U}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),v>0&&V&&e.createElement(S.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(d.Z,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:v})),e.createElement(A.z,{onClick:()=>f(!0),startIcon:e.createElement($.Z,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(N.D,null,Z?e.createElement(Q.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):C>0?e.createElement(Y.i,{colCount:5,rowCount:C+1,footer:e.createElement(G.c,{onClick:()=>p?O("create"):{},icon:e.createElement(D.Z,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(X.h,null,e.createElement(B.Tr,null,e.createElement(o.Th,null,e.createElement(W.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:v>0&&v<C,value:v===C,onValueChange:Ee})),e.createElement(o.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(o.Th,{width:"60%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(o.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(o.Th,null,e.createElement(J.T,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(q.p,null,u.map(a=>e.createElement(B.Tr,{key:a.id,...(0,s.X7)({fn:()=>O(a.id),condition:K})},e.createElement(o.Td,{...s.UW},e.createElement(W.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:P?.includes(a.id),onValueChange:l=>fe(l,a.id),name:"select"})),e.createElement(o.Td,null,e.createElement(d.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(o.Td,null,e.createElement(d.Z,{textColor:"neutral800"},a.url)),e.createElement(o.Td,null,e.createElement(I.k,null,e.createElement(_.r,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:l=>{l.stopPropagation(),he.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(o.Td,null,e.createElement(I.k,{gap:1},K&&e.createElement(R.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(te.Z,null),noBorder:!0}),V&&e.createElement(R.h,{onClick:l=>{l.stopPropagation(),h([a.id]),f(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement($.Z,null),noBorder:!0}))))))):e.createElement(ee.x,{icon:e.createElement(ae.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(A.z,{variant:"secondary",startIcon:e.createElement(D.Z,null),onClick:()=>p?O("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:le,onToggleDialog:()=>f(a=>!a),onConfirm:ue,isConfirmButtonLoading:H.isLoading}))},se=()=>e.createElement(s.O4,{permissions:r.Z.settings.webhooks.main},e.createElement(ne,null))},36989:(k,m,t)=>{t.d(m,{Z:()=>r});var e=t(85893),s=t(11047);const r=({startActions:c,endActions:g})=>!c&&!g?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:c}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:g})]})},49386:(k,m,t)=>{t.d(m,{c:()=>L});var e=t(85893),s=t(46449),r=t(41580),c=t(70004),g=t(11047),E=t(75515);const T=(0,s.ZP)(r.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:i})=>i.colors.primary600};
  }
`,x=(0,s.ZP)(r.x)`
  border-radius: 0 0 ${({theme:i})=>i.borderRadius} ${({theme:i})=>i.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,L=({children:i,icon:S,...d})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(c.i,{}),(0,e.jsx)(x,{as:"button",background:"primary100",padding:5,...d,children:(0,e.jsxs)(g.k,{children:[(0,e.jsx)(T,{"aria-hidden":!0,background:"primary200",children:S}),(0,e.jsx)(r.x,{paddingLeft:3,children:(0,e.jsx)(E.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:i})})]})})]})}}]);