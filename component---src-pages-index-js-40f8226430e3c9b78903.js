"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9644:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(3366),o=n(7462),i=n(7294),r=n(5505),s=n(9408),d=n(3656),l=n(2058),c=n(8267),u=n(8416);function m(e){return(0,u.Z)("MuiList",e)}(0,n(2194).Z)("MuiList",["root","padding","dense","subheader"]);var p=n(5893),b=["children","className","component","dense","disablePadding","subheader"],g=(0,d.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((function(e){var t=e.ownerState;return(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),v=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiList"}),d=n.children,u=n.className,v=n.component,f=void 0===v?"ul":v,Z=n.dense,h=void 0!==Z&&Z,y=n.disablePadding,x=void 0!==y&&y,S=n.subheader,I=(0,a.Z)(n,b),P=i.useMemo((function(){return{dense:h}}),[h]),C=(0,o.Z)({},n,{component:f,dense:h,disablePadding:x}),w=function(e){var t=e.classes,n={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(n,m,t)}(C);return(0,p.jsx)(c.Z.Provider,{value:P,children:(0,p.jsxs)(g,(0,o.Z)({as:f,className:(0,r.Z)(w.root,u),ref:t,ownerState:C},I,{children:[S,d]}))})}))},8267:function(e,t,n){var a=n(7294).createContext({});t.Z=a},942:function(e,t,n){n.d(t,{ZP:function(){return R}});var a=n(4942),o=n(3366),i=n(7462),r=n(7294),s=n(5505);var d=function(e){return"string"==typeof e},l=n(9408),c=n(7663),u=n(3656),m=n(2058),p=n(104),b=n(3128),g=n(4026),v=n(7761),f=n(8267),Z=n(8416),h=n(2194);function y(e){return(0,Z.Z)("MuiListItem",e)}var x=(0,h.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var S=(0,h.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function I(e){return(0,Z.Z)("MuiListItemSecondaryAction",e)}(0,h.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var P=n(5893),C=["className"],w=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,i.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),A=r.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,d=(0,o.Z)(n,C),c=r.useContext(f.Z),u=(0,i.Z)({},n,{disableGutters:c.disableGutters}),p=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,l.Z)(a,I,n)}(u);return(0,P.jsx)(w,(0,i.Z)({className:(0,s.Z)(p.root,a),ownerState:u,ref:t},d))}));A.muiName="ListItemSecondaryAction";var E=A,k=["className"],L=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],M=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,i.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,i.Z)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&(0,a.Z)({},"& > .".concat(S.root),{paddingRight:48}),(t={},(0,a.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:n.palette.action.focus}),(0,a.Z)(t,"&.".concat(x.selected),(0,a.Z)({backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(x.disabled),{opacity:n.palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},o.button&&(0,a.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.selected,":hover"),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),N=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),R=r.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,c=void 0===a?"center":a,u=n.autoFocus,Z=void 0!==u&&u,h=n.button,S=void 0!==h&&h,I=n.children,C=n.className,w=n.component,A=n.components,R=void 0===A?{}:A,G=n.componentsProps,F=void 0===G?{}:G,j=n.ContainerComponent,V=void 0===j?"li":j,O=n.ContainerProps,T=(O=void 0===O?{}:O).className,_=n.dense,B=void 0!==_&&_,q=n.disabled,z=void 0!==q&&q,D=n.disableGutters,H=void 0!==D&&D,Y=n.disablePadding,J=void 0!==Y&&Y,K=n.divider,Q=void 0!==K&&K,U=n.focusVisibleClassName,W=n.secondaryAction,X=n.selected,$=void 0!==X&&X,ee=(0,o.Z)(n.ContainerProps,k),te=(0,o.Z)(n,L),ne=r.useContext(f.Z),ae={dense:B||ne.dense||!1,alignItems:c,disableGutters:H},oe=r.useRef(null);(0,g.Z)((function(){Z&&oe.current&&oe.current.focus()}),[Z]);var ie=r.Children.toArray(I),re=ie.length&&(0,b.Z)(ie[ie.length-1],["ListItemSecondaryAction"]),se=(0,i.Z)({},n,{alignItems:c,autoFocus:Z,button:S,dense:ae.dense,disabled:z,disableGutters:H,disablePadding:J,divider:Q,hasSecondaryAction:re,selected:$}),de=function(e){var t=e.alignItems,n=e.button,a=e.classes,o=e.dense,i=e.disabled,r={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,l.Z)(r,y,a)}(se),le=(0,v.Z)(oe,t),ce=R.Root||M,ue=F.root||{},me=(0,i.Z)({className:(0,s.Z)(de.root,ue.className,C),disabled:z},te),pe=w||"li";return S&&(me.component=w||"div",me.focusVisibleClassName=(0,s.Z)(x.focusVisible,U),pe=p.Z),re?(pe=me.component||w?pe:"div","li"===V&&("li"===pe?pe="div":"li"===me.component&&(me.component="div")),(0,P.jsx)(f.Z.Provider,{value:ae,children:(0,P.jsxs)(N,(0,i.Z)({as:V,className:(0,s.Z)(de.container,T),ref:le,ownerState:se},ee,{children:[(0,P.jsx)(ce,(0,i.Z)({},ue,!d(ce)&&{as:pe,ownerState:(0,i.Z)({},se,ue.ownerState)},me,{children:ie})),ie.pop()]}))})):(0,P.jsx)(f.Z.Provider,{value:ae,children:(0,P.jsxs)(ce,(0,i.Z)({},ue,{as:pe,ref:le,ownerState:se},!d(ce)&&{ownerState:(0,i.Z)({},se,ue.ownerState)},me,{children:[ie,W&&(0,P.jsx)(E,{children:W})]}))})}))},7704:function(e,t,n){n.r(t);var a=n(7294),o=n(5444),i=n(6125),r=n(9211),s=n(5985),d=n(7935),l=n(9644),c=n(942),u=n(4382),m=n(9308),p=n(5982),b=n(7899),g=n(9535),v=n(306),f=n(4765);t.default=function(e){var t=e.data.allMarkdownRemark.nodes,n=e.location;return a.createElement(v.Z,{location:n},a.createElement(l.Z,null,t.map((function(e,t){var n,l=e.fields.slug,v=e.frontmatter.title||l;return a.createElement(a.Fragment,{key:t},a.createElement(c.ZP,{sx:{mt:0===t?0:3,mb:3}},a.createElement(r.Z,{component:"article",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement(r.Z,{component:"header"},a.createElement(f.Z,{href:e.fields.slug},a.createElement(m.Z,{variant:"h1",itemProp:"headline",sx:{display:"flex",alignItems:"center"}},a.createElement(p.Z,null),v)),a.createElement(m.Z,{variant:"body2",sx:{display:"flex",alignItems:"center",py:1}},a.createElement(g.Z,{sx:{fontSize:16,mr:.5}})," ",e.frontmatter.date)),a.createElement(u.Z,{direction:"row",spacing:1,sx:{my:1}},null===(n=e.frontmatter.tags)||void 0===n?void 0:n.map((function(e){return a.createElement(s.Z,{key:e,icon:a.createElement(b.Z,{sx:{fontSize:16}}),label:e,onClick:function(){return(0,o.navigate)("/tags/"+e+"/")}})}))),a.createElement(r.Z,{component:"section"},e.frontmatter.thumbnail&&a.createElement(f.Z,{href:e.fields.slug,sx:{float:"left",mr:1,mb:1}},a.createElement(i.G,{image:(0,i.d)(e.frontmatter.thumbnail),alt:"thumbnail",style:{width:"100px"}})),a.createElement(m.Z,{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))),a.createElement(d.Z,null))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-40f8226430e3c9b78903.js.map