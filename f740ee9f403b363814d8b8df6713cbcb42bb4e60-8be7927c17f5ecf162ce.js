"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[679],{9644:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3366),i=a(7462),o=a(7294),r=a(5505),s=a(9236),d=a(3656),c=a(184),l=a(8267),u=a(1351);function m(e){return(0,u.Z)("MuiList",e)}(0,a(9508).Z)("MuiList",["root","padding","dense","subheader"]);var p=a(5893),v=["children","className","component","dense","disablePadding","subheader"],g=(0,d.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disablePadding&&t.padding,a.dense&&t.dense,a.subheader&&t.subheader]}})((function(e){var t=e.ownerState;return(0,i.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),b=o.forwardRef((function(e,t){var a=(0,c.Z)({props:e,name:"MuiList"}),d=a.children,u=a.className,b=a.component,f=void 0===b?"ul":b,Z=a.dense,h=void 0!==Z&&Z,y=a.disablePadding,x=void 0!==y&&y,S=a.subheader,C=(0,n.Z)(a,v),I=o.useMemo((function(){return{dense:h}}),[h]),P=(0,i.Z)({},a,{component:f,dense:h,disablePadding:x}),w=function(e){var t=e.classes,a={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(a,m,t)}(P);return(0,p.jsx)(l.Z.Provider,{value:I,children:(0,p.jsxs)(g,(0,i.Z)({as:f,className:(0,r.Z)(w.root,u),ref:t,ownerState:P},C,{children:[S,d]}))})}))},8267:function(e,t,a){var n=a(7294).createContext({});t.Z=n},8583:function(e,t,a){a.d(t,{Z:function(){return D}});var n=a(7294),i=a(1597),o=a(7059),r=a(9211),s=a(5985),d=a(7935),c=a(4942),l=a(3366),u=a(7462),m=a(5505),p=a(9236);var v=function(e){return"string"==typeof e},g=a(7663),b=a(3656),f=a(184),Z=a(104),h=a(3128),y=a(4026),x=a(7761),S=a(8267),C=a(1351),I=a(9508);function P(e){return(0,C.Z)("MuiListItem",e)}var w=(0,I.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var A=(0,I.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function L(e){return(0,C.Z)("MuiListItemSecondaryAction",e)}(0,I.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var E=a(5893),N=["className"],k=(0,b.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,u.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),G=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiListItemSecondaryAction"}),i=a.className,o=(0,l.Z)(a,N),r=n.useContext(S.Z),s=(0,u.Z)({},a,{disableGutters:r.disableGutters}),d=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,p.Z)(n,L,a)}(s);return(0,E.jsx)(k,(0,u.Z)({className:(0,m.Z)(d.root,i),ownerState:s,ref:t},o))}));G.muiName="ListItemSecondaryAction";var M=G,R=["className"],O=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],F=(0,b.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,u.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,u.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,c.Z)({},"& > .".concat(A.root),{paddingRight:48}),(t={},(0,c.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,c.Z)(t,"&.".concat(w.selected),(0,c.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,c.Z)(t,"&.".concat(w.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,c.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(w.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),j=(0,b.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),V=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiListItem"}),i=a.alignItems,o=void 0===i?"center":i,r=a.autoFocus,s=void 0!==r&&r,d=a.button,c=void 0!==d&&d,g=a.children,b=a.className,C=a.component,I=a.components,A=void 0===I?{}:I,L=a.componentsProps,N=void 0===L?{}:L,k=a.ContainerComponent,G=void 0===k?"li":k,V=a.ContainerProps,T=(V=void 0===V?{}:V).className,_=a.dense,B=void 0!==_&&_,q=a.disabled,z=void 0!==q&&q,D=a.disableGutters,H=void 0!==D&&D,Y=a.disablePadding,J=void 0!==Y&&Y,K=a.divider,Q=void 0!==K&&K,U=a.focusVisibleClassName,W=a.secondaryAction,X=a.selected,$=void 0!==X&&X,ee=(0,l.Z)(a.ContainerProps,R),te=(0,l.Z)(a,O),ae=n.useContext(S.Z),ne={dense:B||ae.dense||!1,alignItems:o,disableGutters:H},ie=n.useRef(null);(0,y.Z)((function(){s&&ie.current&&ie.current.focus()}),[s]);var oe=n.Children.toArray(g),re=oe.length&&(0,h.Z)(oe[oe.length-1],["ListItemSecondaryAction"]),se=(0,u.Z)({},a,{alignItems:o,autoFocus:s,button:c,dense:ne.dense,disabled:z,disableGutters:H,disablePadding:J,divider:Q,hasSecondaryAction:re,selected:$}),de=function(e){var t=e.alignItems,a=e.button,n=e.classes,i=e.dense,o=e.disabled,r={root:["root",i&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,p.Z)(r,P,n)}(se),ce=(0,x.Z)(ie,t),le=A.Root||F,ue=N.root||{},me=(0,u.Z)({className:(0,m.Z)(de.root,ue.className,b),disabled:z},te),pe=C||"li";return c&&(me.component=C||"div",me.focusVisibleClassName=(0,m.Z)(w.focusVisible,U),pe=Z.Z),re?(pe=me.component||C?pe:"div","li"===G&&("li"===pe?pe="div":"li"===me.component&&(me.component="div")),(0,E.jsx)(S.Z.Provider,{value:ne,children:(0,E.jsxs)(j,(0,u.Z)({as:G,className:(0,m.Z)(de.container,T),ref:ce,ownerState:se},ee,{children:[(0,E.jsx)(le,(0,u.Z)({},ue,!v(le)&&{as:pe,ownerState:(0,u.Z)({},se,ue.ownerState)},me,{children:oe})),oe.pop()]}))})):(0,E.jsx)(S.Z.Provider,{value:ne,children:(0,E.jsxs)(le,(0,u.Z)({},ue,{as:pe,ref:ce,ownerState:se},!v(le)&&{ownerState:(0,u.Z)({},se,ue.ownerState)},me,{children:[oe,W&&(0,E.jsx)(M,{children:W})]}))})})),T=a(4382),_=a(9308),B=a(4478),q=a(7899),z=a(2946),D=function(e){var t,a,c=e.post,l=e.currentTag,u=c.frontmatter.title||c.fields.slug;return n.createElement(n.Fragment,null,n.createElement(V,{sx:{mt:3,mb:3},disablePadding:!0},n.createElement(r.Z,{component:"article",itemScope:!0,itemType:"http://schema.org/Article",sx:{width:"100%"}},n.createElement(r.Z,{component:"header"},n.createElement(z.Z,{href:"/articles"+c.fields.slug,underline:"hover"},n.createElement(_.Z,{variant:"h2",itemProp:"headline",sx:{display:"flex",alignItems:"center"}},u)),n.createElement(r.Z,{display:"flex",alignItems:"center",my:1},n.createElement(B.Z,{sx:{fontSize:16}}),n.createElement(_.Z,{variant:"body2"},c.frontmatter.date))),n.createElement(T.Z,{direction:"row",spacing:1,my:1,sx:{overflow:"scroll"}},null===(t=c.frontmatter)||void 0===t||null===(a=t.tags)||void 0===a?void 0:a.map((function(e){var t=e===l;return n.createElement(s.Z,{key:e,label:e,color:t?"primary":void 0,onClick:t?void 0:function(){return(0,i.navigate)("/tags/"+e+"/")},icon:n.createElement(q.Z,{sx:{fontSize:16}})})}))),n.createElement(r.Z,{component:"section"},n.createElement(z.Z,{href:"/articles"+c.fields.slug,sx:{float:"left",mr:1,mb:1}},c.frontmatter.thumbnail?n.createElement(o.G,{image:(0,o.c)(c.frontmatter.thumbnail),alt:u,style:{width:"100px"}}):n.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/P/"+c.frontmatter.asins[0]+".09.LZZZZZZZ",alt:u,style:{display:"block",width:"100px"}})),n.createElement(_.Z,{dangerouslySetInnerHTML:{__html:c.frontmatter.description||c.excerpt},itemProp:"description"})))),n.createElement(d.Z,{sx:{my:5}}))}}}]);
//# sourceMappingURL=f740ee9f403b363814d8b8df6713cbcb42bb4e60-8be7927c17f5ecf162ce.js.map