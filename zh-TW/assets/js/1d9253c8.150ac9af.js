"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[2773],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(n),s=a,N=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return n?r.createElement(N,i(i({ref:e},m),{},{components:n})):r.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3019:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5},i=void 0,o={unversionedId:"v3/market/orderbook",id:"v3/market/orderbook",title:"Order Book (\u6df1\u5ea6)",description:"\u7372\u53d6\u6df1\u5ea6\u6578\u64da",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/market/orderbook.mdx",sourceDirName:"v3/market",slug:"/v3/market/orderbook",permalink:"/docs-tes/zh-TW/v3/market/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Order Book (\u6df1\u5ea6)",sidebar_label:"Order Book (\u6df1\u5ea6)",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",permalink:"/docs-tes/zh-TW/v3/market/instrument"},next:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",permalink:"/docs-tes/zh-TW/v3/market/tickers"}},p={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:d},k="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7372\u53d6\u6df1\u5ea6\u6578\u64da"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u73fe\u8ca8 / USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u671f\u8ca8: \u6700\u591a\u8fd4\u56de500\u6a94\u7684\u6578\u64da."),(0,a.kt)("li",{parentName:"ul"},"\u73fe\u8ca8: \u6700\u591a\u8fd4\u56de200\u6a94\u7684\u6578\u64da.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u97ff\u61c9\u662f\u7576\u524d\u6642\u9593\u7684\u5207\u7247\u6578\u64da")),(0,a.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/orderbook")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"spot"),",",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6df1\u5ea6\u9650\u5236.",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"spot"),": ","[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"200"),"]",", \u9ed8\u8a8d: ",(0,a.kt)("inlineCode",{parentName:"td"},"1"),"."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"linear"),"&",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),": ","[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"500"),"]",",\u9ed8\u8a8d: ",(0,a.kt)("inlineCode",{parentName:"td"},"25"),".")))))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Bid, \u8cb7\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5927\u5230\u5c0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> b","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u5831\u50f9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> b","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"a"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Ask, \u8ce3\u65b9. \u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> a","[0]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u5831\u50f9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> a","[1]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u6642\u9593\u6233\uff08\u6beb\u79d2\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"u"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u6578\u64da\u9023\u7e8c\u6027\u7684id. ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u5c0d\u65bc\u671f\u8ca8, \u5b83\u548cwss\u63a8\u9001\u88e1\u7684200\u6a94\u7684",(0,a.kt)("inlineCode",{parentName:"td"},"u"),"\u5c0d\u9f4a")))))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/orderbook?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "s": "BTCUSDT",\n        "a": [\n            [\n                "16638.64",\n                "0.008479"\n            ]\n        ],\n        "b": [\n            [\n                "16638.27",\n                "0.305749"\n            ]\n        ],\n        "ts": 1672765737733,\n        "u": 5277055\n    },\n    "retExtInfo": {},\n    "time": 1672765737734\n}\n')))}u.isMDXComponent=!0}}]);