"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7198:function(e,t,a){var l=a(7294),i=a(5444);t.Z=function(e){var t,a=e.location,n=e.title,r=e.children,c="/"===a.pathname;return t=c?l.createElement("h1",{className:"main-heading"},l.createElement(i.Link,{to:"/"},n)):l.createElement(i.Link,{className:"header-link-home",to:"/"},n),l.createElement("div",{className:"global-wrapper","data-is-root-path":c},l.createElement("header",{className:"global-header"},t),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear()," Sheep Null"))}},6179:function(e,t,a){var l=a(7294),i=a(5414),n=a(5444),r=function(e){var t,a,r,c=e.description,o=e.lang,s=e.meta,d=e.title,m=(0,n.useStaticQuery)("2841359383").site,p=c||m.siteMetadata.description,f=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(i.q,{htmlAttributes:{lang:o},title:d,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:p},{property:"og:title",content:d},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:p}].concat(s)})};r.defaultProps={lang:"en",meta:[],description:""},t.Z=r},3503:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(7294),i=a(5444),n=a(6125),r=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=r.site.siteMetadata)||void 0===t||t.social;return l.createElement("div",{className:"bio"},l.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1550)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null))},c=a(7198),o=a(6179),s=function(e){var t,a=e.data,n=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?l.createElement(c.Z,{location:n,title:s},l.createElement(o.Z,{title:"All posts"}),l.createElement(r,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(c.Z,{location:n,title:s},l.createElement(o.Z,{title:"HOME"}),l.createElement(r,null),l.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5c4808348e34f3d566cc.js.map