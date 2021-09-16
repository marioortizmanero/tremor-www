"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1181],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={},c={unversionedId:"recipes/servers_lt_ws/README",id:"recipes/servers_lt_ws/README",isDocsHomePage:!1,title:"Websocket Server",description:"Example Websocket server application built on top of Tremor and meant to be a demonstration of linked transports.",source:"@site/docs/recipes/31_servers_lt_ws/README.md",sourceDirName:"recipes/31_servers_lt_ws",slug:"/recipes/servers_lt_ws/README",permalink:"/tremor-new-website/docs/recipes/servers_lt_ws/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/31_servers_lt_ws/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Server",permalink:"/tremor-new-website/docs/recipes/servers_lt_http/README"},next:{title:"HTTP Proxy",permalink:"/tremor-new-website/docs/recipes/proxies_lt_http/README"}},l=[{value:"Setup",id:"setup",children:[{value:"Sources",id:"sources",children:[]},{value:"Message flow",id:"message-flow",children:[]},{value:"Processing logic",id:"processing-logic",children:[]}]},{value:"Testing",id:"testing",children:[]}],p={toc:l};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Example Websocket server application built on top of Tremor and meant to be a demonstration of ",(0,a.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/operations/linked-transports"},"linked transports"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All the code here is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/31_servers_lt_ws"},"git repository")," as well."))),(0,a.kt)("h3",{id:"sources"},"Sources"),(0,a.kt)("p",null,"We configure a websocket onramp listening on port 8139:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - id: ws\n    type: ws\n    linked: true\n    codec: string\n    preprocessors:\n      - lines\n    config:\n      host: 0.0.0.0\n      port: 8139\n")),(0,a.kt)("h3",{id:"message-flow"},"Message flow"),(0,a.kt)("p",null,"Incoming websocket messages from a client's websocket connection are sent to the pipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"echo")," and the output of it is sent back again from the same connection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: main\n    links:\n      "/onramp/ws/{instance}/out": ["/pipeline/echo/{instance}/in"]\n      "/pipeline/echo/{instance}/out": ["/onramp/ws/{instance}/in"]\n')),(0,a.kt)("h3",{id:"processing-logic"},"Processing logic"),(0,a.kt)("p",null,"Implementation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"echo")," pipeline (techincally, echo with one twist):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'define script process\nscript\n  match event of\n    # snot is a badger\n    case "snot" => "badger"\n    default => event\n  end\nend;\n\ncreate script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n')),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Assuming you have all the code from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/31_servers_lt_ws"},"git repository"),", run the following to start our application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,a.kt)("p",null,"Test the websocket server with a tool like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Can be installed via ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# anything you type and enter, will be echoed back\n# except snot which begets badger\n$ websocat ws://localhost:8139\nhello\nhello\nworld\nworld\nsnot\nbadger\ngoodbye\ngoodbye\n")),(0,a.kt)("p",null,"If there's internal tremor error while processing the incoming message (eg: codec or preprocessor failure), the error should be bubbled up to the client. To test this out, change the codec in the ",(0,a.kt)("a",{target:"_blank",href:n(66692).Z},"onramp configuration")," to be ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and send an malformed json input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# after changing the onramp codec to json\n$ echo "{" | websocat -n1 ws://localhost:8139\n{"error":"SIMD JSON error: Syntax at character 0 (\'{\')","event_id":0,"source_id":"tremor://localhost/onramp/ws/01/in"}\n')))}m.isMDXComponent=!0},66692:function(e,t,n){t.Z=n.p+"assets/files/config-4db9f5245d0be4f851a179cd9ef2c0d7.yaml"}}]);