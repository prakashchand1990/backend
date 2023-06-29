"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[8418],{95972:(D,h,t)=>{t.r(h),t.d(h,{default:()=>ie});var e=t(67294),i=t(88767),v=t(86896),a=t(86597),T=t(14087),O=t(185),d=t(53979),y=t(49066),E=t(81912),n=t(89031);const c=async()=>{const{get:o}=(0,a.tg)(),{data:g}=await o((0,n.Gc)("email-templates"));return g},M=o=>{const{put:g}=(0,a.tg)();return g((0,n.Gc)("email-templates"),o)};var s=t(45697),l=t.n(s),m=t(38939),u=t(8060),p=t(79031),r=t(37909),C=t(63237),b=t(75515),U=t(15234),I=t(52624),F=t(12028),J=t(30815),W=t(4585),Q=t(85018);const K=({canUpdate:o,onEditClick:g})=>{const{formatMessage:f}=(0,v.Z)();return e.createElement(m.i,{colCount:3,rowCount:3},e.createElement(u.h,null,e.createElement(p.Tr,null,e.createElement(r.Th,{width:"1%"},e.createElement(C.T,null,f({id:(0,n.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(r.Th,null,e.createElement(b.Z,{variant:"sigma",textColor:"neutral600"},f({id:(0,n.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(r.Th,{width:"1%"},e.createElement(C.T,null,f({id:(0,n.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(U.p,null,e.createElement(p.Tr,{...(0,a.X7)({fn:()=>g("reset_password")})},e.createElement(r.Td,null,e.createElement(I.J,null,e.createElement(J.Z,{"aria-label":f({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(r.Td,null,e.createElement(b.Z,null,f({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(r.Td,{...a.UW},e.createElement(F.h,{onClick:()=>g("reset_password"),label:f({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:o&&e.createElement(W.Z,null)}))),e.createElement(p.Tr,{...(0,a.X7)({fn:()=>g("email_confirmation")})},e.createElement(r.Td,null,e.createElement(I.J,null,e.createElement(Q.Z,{"aria-label":f({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(r.Td,null,e.createElement(b.Z,null,f({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(r.Td,{...a.UW},e.createElement(F.h,{onClick:()=>g("email_confirmation"),label:f({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:o&&e.createElement(W.Z,null)})))))};K.propTypes={canUpdate:l().bool.isRequired,onEditClick:l().func.isRequired};const X=K;var Y=t(41054),w=t(42866),k=t(24969),A=t(2407),q=t(59946),_=t(11276),Z=t(74571),ee=t(61467),te=t(36856),H=t(29728),j=t(87561);const ae=j.Ry().shape({options:j.Ry().shape({from:j.Ry().shape({name:j.Z_().required(a.I0.required),email:j.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:j.Z_().email(a.I0.email),object:j.Z_().required(a.I0.required),message:j.Z_().required(a.I0.required)}).required(a.I0.required)}),N=({template:o,onToggle:g,onSubmit:f})=>{const{formatMessage:x}=(0,v.Z)();return e.createElement(w.P,{onClose:g,labelledBy:`${x({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${x({id:(0,n.OB)(o.display),defaultMessage:o.display})}`},e.createElement(k.x,null,e.createElement(A.O,{label:`${x({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${x({id:(0,n.OB)(o.display),defaultMessage:o.display})}`},e.createElement(A.$,null,x({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(A.$,null,x({id:(0,n.OB)(o.display),defaultMessage:o.display})))),e.createElement(Y.J9,{onSubmit:f,initialValues:o,validateOnChange:!1,validationSchema:ae,enableReinitialize:!0},({errors:B,values:P,handleChange:R,isSubmitting:S})=>e.createElement(a.l0,null,e.createElement(q.f,null,e.createElement(_.r,{gap:5},e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:R,value:P.options.from.name,error:B?.options?.from?.name,type:"text"})),e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:R,value:P.options.from.email,error:B?.options?.from?.email,type:"text"})),e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:R,value:P.options.response_email,error:B?.options?.response_email,type:"text"})),e.createElement(Z.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:R,value:P.options.object,error:B?.options?.object,type:"text"})),e.createElement(Z.P,{col:12,s:12},e.createElement(ee.g,{label:x({id:(0,n.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:R,value:P.options.message,error:B?.options?.message&&x({id:B.options.message,defaultMessage:B.options.message})})))),e.createElement(te.m,{startActions:e.createElement(H.z,{onClick:g,variant:"tertiary"},"Cancel"),endActions:e.createElement(H.z,{loading:S,type:"submit"},"Finish")}))))};N.propTypes={template:l().shape({display:l().string,icon:l().string,options:l().shape({from:l().shape({name:l().string,email:l().string}),message:l().string,object:l().string,response_email:l().string})}).isRequired,onSubmit:l().func.isRequired,onToggle:l().func.isRequired};const ne=N,le=()=>e.createElement(a.O4,{permissions:E.Z.readEmailTemplates},e.createElement(se,null)),se=()=>{const{formatMessage:o}=(0,v.Z)(),{trackUsage:g}=(0,a.rS)(),{notifyStatus:f}=(0,T.G)(),x=(0,a.lm)(),{lockApp:B,unlockApp:P}=(0,a.o1)(),R=(0,e.useRef)(g),S=(0,i.useQueryClient)();(0,a.go)();const[oe,re]=(0,e.useState)(!1),[z,de]=(0,e.useState)(null),me=(0,e.useMemo)(()=>({update:E.Z.updateEmailTemplates}),[]),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)(me),{status:pe,data:G}=(0,i.useQuery)("email-templates",()=>c(),{onSuccess(){f(o({id:(0,n.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){x({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",$=()=>{re(L=>!L)},ge=L=>{de(L),$()},V=(0,i.useMutation)(L=>M({"email-templates":L}),{async onSuccess(){await S.invalidateQueries("email-templates"),x({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),R.current("didEditEmailTemplates"),P(),$()},onError(){x({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),P()},refetchActive:!0}),{isLoading:fe}=V,he=L=>{B(),R.current("willEditEmailTemplates");const ve={...G,[z]:L};V.mutate(ve)};return Ee?e.createElement(O.o,{"aria-busy":"true"},e.createElement(a.SL,{name:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(d.T,{title:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(y.D,null,e.createElement(a.dO,null))):e.createElement(O.o,{"aria-busy":fe},e.createElement(a.SL,{name:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(d.T,{title:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(y.D,null,e.createElement(X,{onEditClick:ge,canUpdate:ue}),oe&&e.createElement(ne,{template:G[z],onToggle:$,onSubmit:he})))},ie=le},89031:(D,h,t)=>{t.d(h,{YX:()=>a,Gc:()=>d,OB:()=>y.Z});var e=t(41609),i=t.n(e);const a=E=>Object.keys(E).reduce((n,c)=>{const M=E[c].controllers,s=Object.keys(M).reduce((l,m)=>(i()(M[m])||(l[m]=M[m]),l),{});return i()(s)||(n[c]={controllers:s}),n},{});var T=t(31498);const d=E=>`/${T.Z}/${E}`;var y=t(84757)},2407:(D,h,t)=>{t.d(h,{$:()=>E,O:()=>n});var e=t(85893),i=t(16405),v=t(46449),a=t(63237),T=t(11047),O=t(41580),d=t(75515);const y=(0,v.ZP)(T.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:c})=>c.colors.neutral500};
    }
  }
  :last-of-type ${O.x} {
    display: none;
  }
  :last-of-type ${d.Z} {
    color: ${({theme:c})=>c.colors.neutral800};
    font-weight: ${({theme:c})=>c.fontWeights.bold};
  }
`,E=({children:c})=>(0,e.jsxs)(y,{inline:!0,as:"li",children:[(0,e.jsx)(d.Z,{variant:"pi",textColor:"neutral600",children:c}),(0,e.jsx)(O.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(i.Z,{})})]});E.displayName="Crumb";const n=({children:c,label:M,...s})=>(0,e.jsxs)(T.k,{...s,children:[(0,e.jsx)(a.T,{children:M}),(0,e.jsx)("ol",{"aria-hidden":!0,children:c})]});n.displayName="Breadcrumbs"},49066:(D,h,t)=>{t.d(h,{D:()=>v});var e=t(85893),i=t(41580);const v=({children:a})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:a})},53979:(D,h,t)=>{t.d(h,{A:()=>M,T:()=>n});var e=t(85893),i=t(67294),v=t(46449);const a=s=>{const l=(0,i.useRef)(null),[m,u]=(0,i.useState)(!0),p=([r])=>{u(r.isIntersecting)};return(0,i.useEffect)(()=>{const r=l.current,C=new IntersectionObserver(p,s);return r&&C.observe(l.current),()=>{r&&C.disconnect()}},[l,s]),[l,m]};var T=t(79698);const O=(s,l)=>{const m=(0,T.W)(l);(0,i.useLayoutEffect)(()=>{const u=new ResizeObserver(m);return Array.isArray(s)?s.forEach(p=>{p.current&&u.observe(p.current)}):s.current&&u.observe(s.current),()=>{u.disconnect()}},[s,m])};var d=t(41580),y=t(11047),E=t(75515);const n=s=>{const l=(0,i.useRef)(null),[m,u]=(0,i.useState)(null),[p,r]=a({root:null,rootMargin:"0px",threshold:0});return O(p,()=>{p.current&&u(p.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{l.current&&u(l.current.getBoundingClientRect())},[l]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:m?.height},ref:p,children:r&&(0,e.jsx)(M,{ref:l,...s})}),!r&&(0,e.jsx)(M,{...s,sticky:!0,width:m?.width})]})};n.displayName="HeaderLayout";const c=(0,v.ZP)(d.x)`
  width: ${({width:s})=>s?`${s/16}rem`:void 0};
  z-index: ${({theme:s})=>s.zIndices[1]};
`,M=i.forwardRef(({navigationAction:s,primaryAction:l,secondaryAction:m,subtitle:u,title:p,sticky:r,width:C,...b},U)=>{const I=typeof u=="string";return r?(0,e.jsx)(c,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:C,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(y.k,{justifyContent:"space-between",children:[(0,e.jsxs)(y.k,{children:[s&&(0,e.jsx)(d.x,{paddingRight:3,children:s}),(0,e.jsxs)(d.x,{children:[(0,e.jsx)(E.Z,{variant:"beta",as:"h1",...b,children:p}),I?(0,e.jsx)(E.Z,{variant:"pi",textColor:"neutral600",children:u}):u]}),m?(0,e.jsx)(d.x,{paddingLeft:4,children:m}):null]}),(0,e.jsx)(y.k,{children:l?(0,e.jsx)(d.x,{paddingLeft:2,children:l}):void 0})]})}):(0,e.jsxs)(d.x,{ref:U,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0,children:[s?(0,e.jsx)(d.x,{paddingBottom:2,children:s}):null,(0,e.jsxs)(y.k,{justifyContent:"space-between",children:[(0,e.jsxs)(y.k,{minWidth:0,children:[(0,e.jsx)(E.Z,{as:"h1",variant:"alpha",...b,children:p}),m?(0,e.jsx)(d.x,{paddingLeft:4,children:m}):null]}),l]}),I?(0,e.jsx)(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:u}):u]})})},185:(D,h,t)=>{t.d(h,{o:()=>T});var e=t(85893),i=t(46449),v=t(41580);const a=(0,i.ZP)(v.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,T=({labelledBy:O="main-content-title",...d})=>(0,e.jsx)(a,{"aria-labelledby":O,as:"main",id:"main-content",tabIndex:-1,...d})}}]);
