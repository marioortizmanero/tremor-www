"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9484],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3510:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={},l="path",u={unversionedId:"tremor-script/stdlib/std/path",id:"tremor-script/stdlib/std/path",isDocsHomePage:!1,title:"path",description:"The path module contains utility functions for path handling",source:"@site/docs/tremor-script/stdlib/std/path.md",sourceDirName:"tremor-script/stdlib/std",slug:"/tremor-script/stdlib/std/path",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/path",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/tremor-script/stdlib/std/path.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"math",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/math"},next:{title:"random",permalink:"/tremor-new-website/docs/tremor-script/stdlib/std/random"}},c=[{value:"Functions",id:"functions",children:[{value:"try_default(base, segments, otherwise)",id:"try_defaultbase-segments-otherwise",children:[]}]}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"path"},"path"),(0,o.kt)("p",null,"The path module contains utility functions for path handling"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"try_defaultbase-segments-otherwise"},"try_default(base, segments, otherwise)"),(0,o.kt)("p",null,"Determine if a base value matches an segment index array.\nReturns the value under the match on a hit.\nReturns a default user provided value on no match."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," value can be a record, an array or the literal null."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"segments")," value should be an array where each field is used\nto traverse the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," value, as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"String yielding expression segments used for field traversal"),(0,o.kt)("li",{parentName:"ul"},"Integer yielding expression segments used for array traversal"),(0,o.kt)("li",{parentName:"ul"},"A empty segment list yields is considered a match yielding the base value")),(0,o.kt)("p",null,"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'use std::path;\n\n{"snot": "badger"} == path::try_default({"snot": "badger"}, [], "test")\n\n"flook" == path::try_default([{"snot": "badger"}, ["fleek", "flook"]], [1, 1], "test")\n\n"badger" == path::try_default([{"snot": "badger"}, ["fleek", "flook"]], [0, "snot"], "test")\n\n"fleek" == path::try_default([{"snot": "badger"}, ["fleek", "flook"]], [1, 0], "test")\n\n"test" == path::try_default([{"snot": "badger"}, ["fleek", "flook"]], [1, 2], "test")\n\n# Statements of the general form\nmatch event of\ncase %{ absent host } => let event.host = system::hostname()\ndefault => event.host\nend;\n\nCan now be written more tersely as:\n# If host is absent, default to the system hostname\nlet host = try_default(event, ["host"], system::hostname())\n')),(0,o.kt)("p",null,"Returns a tremor value"))}d.isMDXComponent=!0}}]);