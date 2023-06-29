"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[801],{93858:(Q,P,n)=>{n.r(P),n.d(P,{default:()=>Kt});var e=n(67294),s=n(86597),L=n(88767),v=n(27361),O=n.n(v);const S={i8:"4.10.7"};var T=n(95428),E=n(16550),y=n(86706),x=n(99168),V=n(61080),z=n(38914),U=n.n(z),Le=n(64729),C=n(46449),Oe=n(45697),r=n.n(Oe),k=n(86896),m=n(11047),ae=n(44034),oe=n(25896),xe=n(12028),M=n(41580),Y=n(29728),se=n(70968);const be=(0,C.ZP)(m.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,re=({onClose:t,onSkip:a,children:o,hideSkip:i})=>{const{formatMessage:d}=(0,k.Z)();return e.createElement(ae.h,null,e.createElement(be,{onClick:t,padding:8,justifyContent:"center"},e.createElement(oe.i,{onEscape:t},e.createElement(m.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,s.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:u=>u.stopPropagation()},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(xe.h,{onClick:t,"aria-label":d({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(se.Z,null)})),e.createElement(M.x,{paddingLeft:7,paddingRight:7,paddingBottom:i?8:0},o),!i&&e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(Y.z,{variant:"tertiary",onClick:a},d({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};re.propTypes={children:r().node.isRequired,onClose:r().func.isRequired,onSkip:r().func.isRequired,hideSkip:r().bool.isRequired};const De=re;var ie=n(18172);const le={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},Be=(t=le,a)=>(0,ie.ZP)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}});var f=n(75515),ce=n(37323);const We=C.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,de=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,k.Z)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:ke,b:Ze,p:Ge,light:Ue,ul:Ne,li:Fe}))},ke=t=>e.createElement(f.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),Ze=t=>e.createElement(f.Z,{fontWeight:"semiBold"},t),Ge=t=>e.createElement(f.Z,null,t),Ue=t=>e.createElement(f.Z,{textColor:"neutral600"},t),Ne=t=>e.createElement(M.x,{paddingLeft:6},e.createElement("ul",null,t)),Fe=t=>e.createElement(We,null,t);de.propTypes={id:r().string.isRequired,defaultMessage:r().string.isRequired};const je=de;var J=n(89285),Ke=n(96392);const w=({number:t,last:a,type:o})=>e.createElement(M.x,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Ke.Z,{number:t,type:o}));w.defaultProps={number:void 0,last:!1,type:""},w.propTypes={number:r().number,last:r().bool,type:r().string};const ue=w;var Z=n(99872);const X=({title:t,content:a,cta:o,onCtaClick:i,sectionIndex:d,stepIndex:u,hasSectionAfter:h})=>{const{formatMessage:p}=(0,k.Z)(),g=d>0,l=u>0,A=d+1;return e.createElement(e.Fragment,null,e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,justifyContent:"center",minWidth:(0,s.Q1)(30)},g&&e.createElement(J.Z,{type:Z.hx,minHeight:(0,s.Q1)(24)})),e.createElement(f.Z,{variant:"sigma",textColor:"primary600"},p({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(m.k,null,e.createElement(m.k,{marginRight:8,minWidth:(0,s.Q1)(30)},e.createElement(ue,{number:d+1,type:l?Z.hx:Z.lW})),e.createElement(f.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},p(t))),e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,s.Q1)(30)},h&&e.createElement(e.Fragment,null,e.createElement(J.Z,{type:Z.hx}),l&&e.createElement(ue,{number:A+1,type:Z.lW,last:!0}))),e.createElement(M.x,null,e.createElement(je,{...a}),o&&(o.target?e.createElement(s.Qj,{endIcon:e.createElement(ce.Z,null),onClick:i,to:o.target},p(o.title)):e.createElement(Y.z,{endIcon:e.createElement(ce.Z,null),onClick:i},p(o.title))))),l&&h&&e.createElement(M.x,{paddingTop:3},e.createElement(m.k,{marginRight:8,justifyContent:"center",width:(0,s.Q1)(30)},e.createElement(J.Z,{type:Z.hx,minHeight:(0,s.Q1)(24)}))))};X.defaultProps={currentStep:null,cta:void 0},X.propTypes={sectionIndex:r().number.isRequired,stepIndex:r().number.isRequired,hasSectionAfter:r().bool.isRequired,content:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired,cta:r().shape({target:r().string,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired})}),currentStep:r().string,onCtaClick:r().func.isRequired,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired};const $e=X,Qe=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:i,isGuidedTourVisible:d,setSkipped:u}=(0,s.c1)(),[h,p]=(0,e.useState)(t),[{stepContent:g,sectionIndex:l,stepIndex:A,hasSectionAfter:b,hasStepAfter:F},j]=(0,e.useReducer)(Be,le),{trackUsage:G}=(0,s.rS)();(0,e.useEffect)(()=>{if(!t){p(!1);return}const[D]=U()(a,t);p(!D&&d)},[t,a,d]),(0,e.useEffect)(()=>{if(t){const[D]=U()(Le.Z,t),R=Object.keys(a),[B,c]=t.split("."),W=R.indexOf(B),H=Object.keys(a[B]).indexOf(c),$=W<R.length-1,$t=H<Object.keys(a[B]).length-1;j({type:"UPDATE_MODAL",content:D,newSectionIndex:W,newStepIndex:H,newHasSectionAfter:$,newHasStepAfter:$t})}},[t,a]);const I=()=>{i(t,!0),G(g.trackingEvent),o(null)},K=()=>{u(!0),o(null),G("didSkipGuidedtour")};return h&&g?e.createElement(De,{hideSkip:!F&&!b,onSkip:K,onClose:I},e.createElement($e,{...g,onCtaClick:I,currentStep:t,sectionIndex:l,stepIndex:A,hasSectionAfter:b})):null};var N=n(73727),pe=n(70004),ze=n(64330),He=n(37907),Ve=n(98994),q=n(38040),me=n(51974),Ye=n(45842),Je=n(37227),we=n(56691),Xe=n(42384),qe=n(90690);const _e=(0,C.ZP)(M.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,ge=(0,C.ZP)(N.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,he=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[i,d]=(0,e.useState)(!1),{logos:{menu:u}}=(0,T.um)(),[h,p]=(0,s.Yw)("navbar-condensed",!1),{userDisplayName:g}=(0,s.L7)(),{formatMessage:l}=(0,k.Z)(),{trackUsage:A}=(0,s.rS)(),{pathname:b}=(0,E.TH)(),F=(0,E.k6)(),{post:j}=(0,s.tg)(),G=g.split(" ").map(c=>c.substring(0,1)).join("").substring(0,2),I=()=>d(c=>!c),K=async()=>{await j("/admin/logout"),s.I8.clearAppStorage(),I(),F.push("/auth/login")},D=c=>{!c.currentTarget.contains(c.relatedTarget)&&c.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&d(!1)},R=(c=null)=>{A("willNavigate",{from:b,to:c})},B=l({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(ze.$,{condensed:h},e.createElement(He.D,{as:N.OL,workplace:l({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:B,icon:e.createElement("img",{src:u.custom||u.default,alt:l({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(pe.i,null),e.createElement(Ve._,null,e.createElement(q.O,{as:N.OL,to:"/content-manager",icon:e.createElement(Xe.Z,null),onClick:()=>R("/content-manager")},l({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(me.y,{label:l({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(c=>{const W=c.icon;return e.createElement(q.O,{as:N.OL,to:c.to,key:c.to,icon:e.createElement(W,null),onClick:()=>R(c.to)},l(c.intlLabel))})):null,t.length>0?e.createElement(me.y,{label:l({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(c=>{const W=c.icon;return e.createElement(q.O,{as:N.OL,badgeContent:c.notificationsCount>0&&c.notificationsCount.toString()||void 0,to:c.to,key:c.to,icon:e.createElement(W,null),onClick:()=>R(c.to)},l(c.intlLabel))})):null),e.createElement(Ye.q,null,e.createElement(Je.r,{id:"main-nav-user-button",ref:o,onClick:I,initials:G},g),i&&e.createElement(_e,{onBlur:D,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(oe.i,{onEscape:I},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:0},e.createElement(ge,{tabIndex:0,onClick:I,to:"/me"},e.createElement(f.Z,null,l({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(ge,{tabIndex:0,onClick:K,logout:"logout",to:"/auth/login"},e.createElement(f.Z,{textColor:"danger600"},l({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(qe.Z,null))))),e.createElement(we.w,{onClick:()=>p(c=>!c)},l(h?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};he.propTypes={generalSectionLinks:r().array.isRequired,pluginsSectionLinks:r().array.isRequired};const et=he;var tt=n(727);const nt=(0,C.ZP)(M.x)`
  flex: 1;
`,Ee=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,k.Z)();return e.createElement(M.x,{background:"neutral100"},e.createElement(tt.z,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(m.k,{alignItems:"flex-start"},a,e.createElement(nt,null,t)))};Ee.propTypes={children:r().node.isRequired,sideNav:r().node.isRequired};const at=Ee;var _=n(19631),ot=n(36657),ee=n(52624),st=n(34860),rt=n(63237),it=n(90296),lt=n(87801),ct=n(45448);const dt=n.p+"19eb2dfcf2603eb55733.png";var ut=n(78976),pt=n(9474);const mt=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],fe={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},gt=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:ut.Z},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:pt.Z}],ht=(0,C.ZP)(Y.z)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,Et=(0,C.ZP)(m.k)`
  transform: translate(-50%, -50%);
`,ft=(0,C.ZP)(m.k)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${f.Z}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${f.Z}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,yt=C.ZP.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,ye=(0,C.ZP)(f.Z)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,ve=(0,C.ZP)(ye)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,vt=()=>{const t=(0,e.useRef)(),[a,o]=(0,e.useState)(!1),{formatMessage:i}=(0,k.Z)(),{communityEdition:d}=(0,s.L7)(),u=()=>{o(p=>!p)},h=[...gt,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:it.Z,href:d?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(M.x,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(ht,{"aria-label":i(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:u,ref:t},e.createElement(ee.J,{as:a?se.Z:lt.Z,color:"buttonNeutral0"})),a&&e.createElement(ae.h,null,e.createElement(st.M.Content,{padding:0,onDimiss:u,source:t,placement:"top-end",spacing:12},e.createElement(m.k,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(ye,{fontWeight:"bold"},i({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(ve,{as:"a",href:fe.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},i(fe.label))),e.createElement(pe.i,null),mt.map(({href:p,duration:g,label:l},A)=>e.createElement(ft,{as:"a",href:p,target:"_blank",rel:"noreferrer noopener",key:p,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(M.x,{paddingRight:5},e.createElement(f.Z,{textColor:"neutral200",variant:"alpha"},A+1)),e.createElement(M.x,{position:"relative"},e.createElement(yt,{src:dt,alt:""}),e.createElement(Et,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(ee.J,{as:ct.Z,color:"buttonNeutral0",width:3,height:3}))),e.createElement(m.k,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(f.Z,{fontWeight:"bold"},i(l)),e.createElement(rt.T,null,":"),e.createElement(f.Z,{textColor:"neutral600",variant:"pi"},g)))),e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},h.map(({label:p,href:g,icon:l})=>e.createElement(m.k,{gap:3,key:g},e.createElement(ee.J,{as:l,color:"primary600"}),e.createElement(ve,{as:"a",href:g,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},i(p))))))))},Tt=(0,e.lazy)(()=>Promise.all([n.e(3848),n.e(1713),n.e(7027),n.e(994)]).then(n.bind(n,44545))),Ct=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,15737))),Mt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),Pt=(0,e.lazy)(()=>n.e(5516).then(n.bind(n,75907))),Te=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),St=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),At=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),Ce=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,62053))),Rt=()=>{const{trackUsage:t}=(0,s.rS)(),a=(0,y.I0)(),o=(0,y.v9)(i=>i.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:ot.e}))},[o])},It=()=>{Rt();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,T.H9)(),{menu:i}=(0,s.j1)(),{showTutorials:d}=(0,T.um)(),u=(0,e.useMemo)(()=>i.filter(h=>h.Component).map(({to:h,Component:p,exact:g})=>(0,_.ot)(p,h,g)),[i]);return t?e.createElement(s.dO,null):e.createElement(x.DndProvider,{backend:V.PD},e.createElement(at,{sideNav:e.createElement(et,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(s.dO,null)},e.createElement(E.rs,null,e.createElement(E.AW,{path:"/",component:Ct,exact:!0}),e.createElement(E.AW,{path:"/me",component:At,exact:!0}),e.createElement(E.AW,{path:"/content-manager",component:Tt}),u,e.createElement(E.AW,{path:"/settings/:settingId",component:Ce}),e.createElement(E.AW,{path:"/settings",component:Ce,exact:!0}),e.createElement(E.AW,{path:"/marketplace"},e.createElement(Pt,null)),e.createElement(E.AW,{path:"/list-plugins",exact:!0},e.createElement(Mt,null)),e.createElement(E.AW,{path:"/404",component:Te}),e.createElement(E.AW,{path:"/500",component:St}),e.createElement(E.AW,{path:"",component:Te}))),e.createElement(Qe,null),d&&e.createElement(vt,null)))},Lt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]={...t[o]},a),{})});var Ot=n(36968),xt=n.n(Ot);const Me={plugins:null},bt=(t=Me,a)=>(0,ie.ZP)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{xt()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),Dt=()=>{const{plugins:t}=(0,s.j1)(),[{plugins:a},o]=(0,e.useReducer)(bt,Me,()=>Lt(t)),i=(0,e.useRef)(u=>{o({type:"SET_PLUGIN_READY",pluginId:u})});if(Object.keys(a).some(u=>a[u].isReady===!1)){const u=Object.keys(a).reduce((h,p)=>{const g=a[p].initializer;if(g){const l=a[p].pluginId;h.push(e.createElement(g,{key:l,setPlugin:i.current}))}return h},[]);return e.createElement(e.Fragment,null,u,e.createElement(s.dO,null))}return e.createElement(It,null)};var Pe=n(28344);const Bt=()=>({type:Pe.l}),Wt=t=>({type:Pe.m,permissions:t}),Se=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:i}=(0,y.v9)(u=>u.rbacProvider),d=(0,y.I0)();return(0,e.useEffect)(()=>(d(Wt(a)),()=>{d(Bt())}),[a,d]),i?e.createElement(s.oL.Provider,{value:{allPermissions:i,refetchPermissions:o}},t):e.createElement(s.dO,null)};Se.propTypes={children:r().element.isRequired,permissions:r().array.isRequired,refetchPermissions:r().func.isRequired};const kt=Se;var Zt=n(81249),te=n.n(Zt);const Ae=(t,a)=>!te().valid(t)||!te().valid(a)?!1:te().lt(t,a),Re=S.i8,Gt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:ne}=(0,s.tg)(),Ut=async t=>{try{const a=await fetch("https://api.github.com/repos/strapi/strapi/releases/latest");if(!a.ok)throw new Error("Failed to fetch latest Strapi version.");const{tag_name:o}=await a.json();return Ae(Re,o)&&Gt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${o}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),o}catch{return Re}},Nt=async()=>{try{const{data:t,headers:a}=await ne("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Ft=async()=>{try{const{data:t,headers:a}=await ne("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},jt=async()=>{try{const{data:{data:{roles:t}}}=await ne("/admin/users/me");return t}catch(t){throw new Error(t)}},Ie=S.i8,Kt=()=>{const{setGuidedTourVisibility:t}=(0,s.c1)(),a=(0,s.lm)(),o=s.I8.getUserInfo(),i=O()(o,"username")||(0,_.Pp)(o.firstname,o.lastname),[d,u]=(0,e.useState)(i),[h,p]=(0,e.useState)(null),{showReleaseNotification:g}=(0,T.um)(),[{data:l,status:A},{data:b,isLoading:F},{data:j,status:G,refetch:I,isFetched:K,isFetching:D},{data:R}]=(0,L.useQueries)([{queryKey:"app-infos",queryFn:Nt},{queryKey:"strapi-release",queryFn:()=>Ut(a),enabled:g,initialData:Ie},{queryKey:"admin-users-permission",queryFn:Ft,initialData:[]},{queryKey:"user-roles",queryFn:jt}]),B=Ae(Ie,b);return(0,e.useEffect)(()=>{R&&R.find(({code:$})=>$==="strapi-super-admin")&&l?.autoReload&&t(!0)},[R,l,t]),(0,e.useEffect)(()=>{(async()=>{const $=await(0,_.Qy)(o);p($)})()},[o]),F||(D&&K||A==="loading"||G==="loading")?e.createElement(s.dO,null):A==="error"?e.createElement("div",null,"error..."):e.createElement(s.iq,{...l,userId:h,latestStrapiReleaseTag:b,setUserDisplayName:u,shouldUpdateStrapi:B,userDisplayName:d},e.createElement(kt,{permissions:j,refetchPermissions:I},e.createElement(Dt,null)))}},89285:(Q,P,n)=>{n.d(P,{Z:()=>E});var e=n(67294),s=n(45697),L=n.n(s),v=n(86597),O=n(41580),S=n(99872);const T=({type:y,...x})=>e.createElement(O.x,{width:(0,v.Q1)(2),height:"100%",background:y===S.VM?"neutral300":"primary500",hasRadius:!0,...x});T.defaultProps={type:S.VM},T.propTypes={type:L().oneOf([S.lW,S.hx,S.VM])};const E=T},96392:(Q,P,n)=>{n.d(P,{Z:()=>V});var e=n(67294),s=n(45697),L=n.n(s),v=n(86597),O=n(11047),S=n(52624),T=n(75515),E=n(85018),y=n(99872);const x=({type:z,number:U})=>z===y.hx?e.createElement(O.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,v.Q1)(30),height:(0,v.Q1)(30),justifyContent:"center"},e.createElement(S.J,{as:E.Z,"aria-hidden":!0,width:(0,v.Q1)(16),color:"neutral0"})):z===y.lW?e.createElement(O.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,v.Q1)(30),height:(0,v.Q1)(30),justifyContent:"center"},e.createElement(T.Z,{fontWeight:"semiBold",textColor:"neutral0"},U)):e.createElement(O.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,v.Q1)(30),height:(0,v.Q1)(30),justifyContent:"center"},e.createElement(T.Z,{fontWeight:"semiBold",textColor:"neutral600"},U));x.defaultProps={number:void 0,type:y.VM},x.propTypes={number:L().number,type:L().oneOf([y.lW,y.hx,y.VM])};const V=x},99872:(Q,P,n)=>{n.d(P,{VM:()=>L,hx:()=>s,lW:()=>e});const e="isActive",s="isDone",L="isNotDone"},64729:(Q,P,n)=>{n.d(P,{Z:()=>s});const s={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
