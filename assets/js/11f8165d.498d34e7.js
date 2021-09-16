"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7049],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34926:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},s={unversionedId:"tremor-script/extractors/json",id:"tremor-script/extractors/json",isDocsHomePage:!1,title:"JSON",description:"The JSON extractor converts the input string into its respective JSON representation conforming to The Javascript Object Notation Data Interchange Format (RFC 8259)",source:"@site/docs/tremor-script/extractors/json.md",sourceDirName:"tremor-script/extractors",slug:"/tremor-script/extractors/json",permalink:"/tremor-new-website/docs/tremor-script/extractors/json",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/extractors/json.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Influx",permalink:"/tremor-new-website/docs/tremor-script/extractors/influx"},next:{title:"KV",permalink:"/tremor-new-website/docs/tremor-script/extractors/kv"}},p=[{value:"Predicate",id:"predicate",children:[]},{value:"Extraction",id:"extraction",children:[]}],u={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The JSON extractor converts the input string into its respective JSON representation conforming to The Javascript Object Notation Data Interchange Format (RFC 8259)"),(0,i.kt)("h2",{id:"predicate"},"Predicate"),(0,i.kt)("p",null,"When used with ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", the predicate will pass if the input is a valid JSON"),(0,i.kt)("h2",{id:"extraction"},"Extraction"),(0,i.kt)("p",null,"If the predicate passes, the extractor will return the JSON representation of the target."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "test" : "{ \\"foo\\":\\"bar\\", "\\snot"\\:"\\badger"\\ }" } of\n   case foo  = %{ test ~= json|| } => foo\n  default => "ko"\nend;\n')))}l.isMDXComponent=!0}}]);