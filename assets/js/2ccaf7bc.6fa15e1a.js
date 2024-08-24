"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9782],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,u=d["".concat(p,".").concat(y)]||d[y]||g[y]||o;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={title:"Set TP/SL Mode",sidebar_label:"Set TP/SL Mode",sidebar_position:2.5},l=void 0,i={unversionedId:"v3/position/tpsl-mode",id:"v3/position/tpsl-mode",title:"Set TP/SL Mode",description:"_To some extent, this endpoint is depreciated because now tpsl is based on order level. This API was used for position level",source:"@site/docs/v3/position/tpsl-mode.mdx",sourceDirName:"v3/position",slug:"/v3/position/tpsl-mode",permalink:"/docs-tes/v3/position/tpsl-mode",draft:!1,tags:[],version:"current",sidebarPosition:2.5,frontMatter:{title:"Set TP/SL Mode",sidebar_label:"Set TP/SL Mode",sidebar_position:2.5},sidebar:"v3SideBar",previous:{title:"Switch Cross/Isolated Margin",permalink:"/docs-tes/v3/position/cross-isolate"},next:{title:"Switch Position Mode",permalink:"/docs-tes/v3/position/position-mode"}},p={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:s},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("em",{parentName:"p"},"To some extent, this endpoint is ",(0,a.yg)("strong",{parentName:"em"},"depreciated")," because now tpsl is based on order level. This API was used for position level\nchange before.")),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("em",{parentName:"p"},'However, you still can use it to set an implicit tpsl mode for a certain symbol because when you don\'t\npass "tpslMode" in the place order or trading stop request, system will get the tpslMode by the default setting.'))),(0,a.yg)("p",null,"Set TP/SL mode to Full or Partial"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Normal account covers: USDT perpetual / Inverse contract"))),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"For partial TP/SL mode, you can set the TP/SL size smaller than position size.")),(0,a.yg)("h3",{id:"http-request"},"HTTP Request"),(0,a.yg)("p",null,"POST ",(0,a.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/position/set-tpsl-mode")),(0,a.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Product type ",(0,a.yg)("ul",null,(0,a.yg)("li",null,"Normal account: ",(0,a.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"),". ",(0,a.yg)("em",{parentName:"td"},"Please note that ",(0,a.yg)("inlineCode",{parentName:"em"},"category")," is ",(0,a.yg)("strong",{parentName:"em"},"not")," involved with business logic"))))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"tpSlMode"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"TP/SL mode. ",(0,a.yg)("inlineCode",{parentName:"td"},"Full"),",",(0,a.yg)("inlineCode",{parentName:"td"},"Partial"))))),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"tpSlMode"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Full"),",",(0,a.yg)("inlineCode",{parentName:"td"},"Partial"))))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"request-example"},"Request Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'POST /cloud/trade/v3/position/set-tpsl-mode HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672279325035\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n    "symbol": "XRPUSDT",\n    "category": "linear",\n    "tpSlMode": "Full"\n}\n')),(0,a.yg)("h3",{id:"response-example"},"Response Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "tpSlMode": "Full"\n    },\n    "retExtInfo": {},\n    "time": 1672279322666\n}\n')))}g.isMDXComponent=!0}}]);