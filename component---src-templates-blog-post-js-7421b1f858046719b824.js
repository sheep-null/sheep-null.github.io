"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{3109:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(2174)),i=n(5893),o=(0,a.default)((0,i.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.Z=o},1132:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(2174)),i=n(5893),o=(0,a.default)((0,i.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=o},2927:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(7294),a=n(1597),i=n(3723),o=n(9299),c=n(7243),l=n(6909),s=n(2982),u=n(4942),m=n(3366),p=n(7462),f=n(5505),d=n(2692),g=n(8297),v=n(9236),h=n(8379),Z=n(6981),b=n(9785);var w=r.createContext(),x=n(1351);function E(e){return(0,x.Z)("MuiGrid",e)}var k=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=(0,n(9508).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,s.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,s.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,s.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,s.Z)(k.map((function(e){return"grid-xs-".concat(e)}))),(0,s.Z)(k.map((function(e){return"grid-sm-".concat(e)}))),(0,s.Z)(k.map((function(e){return"grid-md-".concat(e)}))),(0,s.Z)(k.map((function(e){return"grid-lg-".concat(e)}))),(0,s.Z)(k.map((function(e){return"grid-xl-".concat(e)}))))),S=n(5893),z=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function M(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function W(e){var t=e.breakpoints,n=e.values,r="";Object.keys(n).forEach((function(e){""===r&&0!==n[e]&&(r=e)}));var a=Object.keys(t).sort((function(e,n){return t[e]-t[n]}));return a.slice(0,a.indexOf(r))}var N=(0,h.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.container,a=n.direction,i=n.item,o=n.spacing,c=n.wrap,l=n.zeroMinWidth,u=n.breakpoints,m=[];r&&(m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n["spacing-xs-".concat(String(e))]];var r=[];return t.forEach((function(t){var a=e[t];Number(a)>0&&r.push(n["spacing-".concat(t,"-").concat(String(a))])})),r}(o,u,t));var p=[];return u.forEach((function(e){var r=n[e];r&&p.push(t["grid-".concat(e,"-").concat(String(r))])})),[t.root,r&&t.container,i&&t.item,l&&t.zeroMinWidth].concat((0,s.Z)(m),["row"!==a&&t["direction-xs-".concat(String(a))],"wrap"!==c&&t["wrap-xs-".concat(String(c))]],p)}})((function(e){var t=e.ownerState;return(0,p.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,n=e.ownerState,r=(0,d.P$)({values:n.direction,breakpoints:t.breakpoints.values});return(0,d.k9)({theme:t},r,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(y.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,a=n.rowSpacing,i={};if(r&&0!==a){var o,c=(0,d.P$)({values:a,breakpoints:t.breakpoints.values});"object"==typeof c&&(o=W({breakpoints:t.breakpoints.values,values:c})),i=(0,d.k9)({theme:t},c,(function(e,n){var r,a=t.spacing(e);return"0px"!==a?(0,u.Z)({marginTop:"-".concat(M(a))},"& > .".concat(y.item),{paddingTop:M(a)}):null!=(r=o)&&r.includes(n)?{}:(0,u.Z)({marginTop:0},"& > .".concat(y.item),{paddingTop:0})}))}return i}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,a=n.columnSpacing,i={};if(r&&0!==a){var o,c=(0,d.P$)({values:a,breakpoints:t.breakpoints.values});"object"==typeof c&&(o=W({breakpoints:t.breakpoints.values,values:c})),i=(0,d.k9)({theme:t},c,(function(e,n){var r,a=t.spacing(e);return"0px"!==a?(0,u.Z)({width:"calc(100% + ".concat(M(a),")"),marginLeft:"-".concat(M(a))},"& > .".concat(y.item),{paddingLeft:M(a)}):null!=(r=o)&&r.includes(n)?{}:(0,u.Z)({width:"100%",marginLeft:0},"& > .".concat(y.item),{paddingLeft:0})}))}return i}),(function(e){var t,n=e.theme,r=e.ownerState;return n.breakpoints.keys.reduce((function(e,a){var i={};if(r[a]&&(t=r[a]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,d.P$)({values:r.columns,breakpoints:n.breakpoints.values}),c="object"==typeof o?o[a]:o;if(null==c)return e;var l="".concat(Math.round(t/c*1e8)/1e6,"%"),s={};if(r.container&&r.item&&0!==r.columnSpacing){var u=n.spacing(r.columnSpacing);if("0px"!==u){var m="calc(".concat(l," + ").concat(M(u),")");s={flexBasis:m,maxWidth:m}}}i=(0,p.Z)({flexBasis:l,flexGrow:0,maxWidth:l},s)}return 0===n.breakpoints.values[a]?Object.assign(e,i):e[n.breakpoints.up(a)]=i,e}),{})}));var j=function(e){var t=e.classes,n=e.container,r=e.direction,a=e.item,i=e.spacing,o=e.wrap,c=e.zeroMinWidth,l=e.breakpoints,u=[];n&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return["spacing-xs-".concat(String(e))];var n=[];return t.forEach((function(t){var r=e[t];if(Number(r)>0){var a="spacing-".concat(t,"-").concat(String(r));n.push(a)}})),n}(i,l));var m=[];l.forEach((function(t){var n=e[t];n&&m.push("grid-".concat(t,"-").concat(String(n)))}));var p={root:["root",n&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,s.Z)(u),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==o&&"wrap-xs-".concat(String(o))],m)};return(0,v.Z)(p,E,t)},P=r.forwardRef((function(e,t){var n=(0,Z.Z)({props:e,name:"MuiGrid"}),a=(0,b.Z)().breakpoints,i=(0,g.Z)(n),o=i.className,c=i.columns,l=i.columnSpacing,s=i.component,u=void 0===s?"div":s,d=i.container,v=void 0!==d&&d,h=i.direction,x=void 0===h?"row":h,E=i.item,k=void 0!==E&&E,y=i.rowSpacing,M=i.spacing,W=void 0===M?0:M,P=i.wrap,L=void 0===P?"wrap":P,_=i.zeroMinWidth,C=void 0!==_&&_,G=(0,m.Z)(i,z),I=y||W,B=l||W,O=r.useContext(w),T=v?c||12:O,A={},R=(0,p.Z)({},G);a.keys.forEach((function(e){null!=G[e]&&(A[e]=G[e],delete R[e])}));var $=(0,p.Z)({},i,{columns:T,container:v,direction:x,item:k,rowSpacing:I,columnSpacing:B,wrap:L,zeroMinWidth:C,spacing:W},A,{breakpoints:a.keys}),F=j($);return(0,S.jsx)(w.Provider,{value:T,children:(0,S.jsx)(N,(0,p.Z)({ownerState:$,className:(0,f.Z)(F.root,o),as:u,ref:t},R))})})),L=P,_=n(2826),C=n(3854),G=n(3109),I=n(1132),B=n(4478),O=n(7899),T=n(241),A=function(){var e,t=null===(e=(0,a.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement(o.Z,{sx:{display:"flex",alignItems:"center"}},r.createElement(i.S,{layout:"fixed",src:"../images/profile-pic.png",width:50,height:50,alt:"Profile picture",__imageData:n(2534)}),(null==t?void 0:t.name)&&r.createElement(C.Z,{ml:2},"Written by ",r.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null))},R=n(8596),$=function(){return r.createElement("div",{class:"s9-widget-wrapper"})},F=function(e){var t,n,s=e.data,u=e.location,m=s.previous,p=s.next,f=s.markdownRemark,d=s.site.siteMetadata.siteUrl,g=f.frontmatter.thumbnail?d+(0,i.d)(f.frontmatter.thumbnail):"https://images-na.ssl-images-amazon.com/images/P/"+f.frontmatter.asins[0]+".09.LZZZZZZZ",v=function(){var e;return r.createElement(o.Z,null,r.createElement(o.Z,{sx:{display:"inline-flex",width:"100%",overflow:"scroll"}},null===(e=f.frontmatter.asins)||void 0===e?void 0:e.map((function(e,t){return r.createElement(o.Z,{key:t,mr:2},r.createElement("a",{href:"https://www.amazon.co.jp/dp/"+e+"/ref=nosim?tag=sheepnull0b-22",target:"_blank",rel:"noreferrer"},r.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/P/"+e+".09.LZZZZZZZ",alt:e,style:{width:120,height:160,objectFit:"contain"}})))}))),r.createElement(C.Z,{variant:"body2",color:"gray"},"Amazon リンク"))};return r.createElement(T.Z,{location:u,title:f.frontmatter.title,description:f.frontmatter.description||f.excerpt,thumbnail:g},r.createElement(o.Z,{component:"article",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement(o.Z,{component:"header",mb:2},r.createElement(C.Z,{itemProp:"headline",variant:"h1"},f.frontmatter.title),r.createElement(o.Z,{display:"flex",alignItems:"center",my:1},r.createElement(B.Z,{sx:{fontSize:16}}),r.createElement(C.Z,{variant:"body2"},f.frontmatter.date)),r.createElement(_.Z,{direction:"row",spacing:1,my:1,sx:{overflow:"scroll"}},null===(t=f.frontmatter)||void 0===t||null===(n=t.tags)||void 0===n?void 0:n.map((function(e){return r.createElement(c.Z,{key:e,label:e,onClick:function(){return(0,a.navigate)("/tags/"+e+"/")},icon:r.createElement(O.Z,{sx:{fontSize:16}})})})))),r.createElement($,null),r.createElement(v,null),r.createElement(o.Z,{component:"section",dangerouslySetInnerHTML:{__html:f.html},itemProp:"articleBody"}),r.createElement($,null),r.createElement(v,null),r.createElement(l.Z,{sx:{my:5}}),r.createElement(o.Z,{component:"footer"},r.createElement(A,null))),r.createElement(o.Z,{component:"nav",className:"blog-post-nav"},r.createElement(L,{container:!0,spacing:2,my:2,fontSize:12},r.createElement(L,{item:!0,md:6},m&&r.createElement(R.Z,{href:"/articles"+m.fields.slug,rel:"prev",sx:{display:"flex",alignItems:"center",justifyContent:"center"}},r.createElement(G.Z,null)," ",m.frontmatter.title)),r.createElement(L,{item:!0,md:6},p&&r.createElement(R.Z,{href:"/articles"+p.fields.slug,rel:"next",sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},p.frontmatter.title," ",r.createElement(I.Z,null))))))}},2534:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/59e242355bf47564e8e09a7313de21c3/e9fba/profile-pic.png","srcSet":"/static/59e242355bf47564e8e09a7313de21c3/e9fba/profile-pic.png 50w,\\n/static/59e242355bf47564e8e09a7313de21c3/15e42/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/59e242355bf47564e8e09a7313de21c3/dbc4a/profile-pic.webp 50w,\\n/static/59e242355bf47564e8e09a7313de21c3/d8057/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7421b1f858046719b824.js.map