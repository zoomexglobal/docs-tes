"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[4984],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7630:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"\u5f37\u5e73\u63a8\u9001",sidebar_label:"\u5f37\u5e73\u63a8\u9001",sidebar_position:5},l=void 0,o={unversionedId:"v3/websocket/public/liquidation",id:"v3/websocket/public/liquidation",title:"\u5f37\u5e73\u63a8\u9001",description:"\u8a02\u95b1Bybit\u5e73\u53f0\u4e0a\u7684\u5f37\u5e73\u63a8\u9001",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/websocket/public/liquidation.mdx",sourceDirName:"v3/websocket/public",slug:"/v3/websocket/public/liquidation",permalink:"/docs-tes/zh-TW/v3/websocket/public/liquidation",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5f37\u5e73\u63a8\u9001",sidebar_label:"\u5f37\u5e73\u63a8\u9001",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"K\u7dda",permalink:"/docs-tes/zh-TW/v3/websocket/public/kline"},next:{title:"\u6301\u5009",permalink:"/docs-tes/zh-TW/v3/websocket/private/position"}},p={},s=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8a02\u95b1\u793a\u4f8b",id:"\u8a02\u95b1\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8a02\u95b1Bybit\u5e73\u53f0\u4e0a\u7684\u5f37\u5e73\u63a8\u9001"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a8\u9001\u983b\u7387:")," \u5be6\u6642"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"liquidation.{symbol}")," e.g., liquidation.BTCUSDT"),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6578\u64da\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"snapshot"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6578\u64da\u66f4\u65b0\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u65b9\u5411. ",(0,a.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,a.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u4ea4\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> price"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7834\u7522\u50f9\u683c")))),(0,a.kt)("h3",{id:"\u8a02\u95b1\u793a\u4f8b"},"\u8a02\u95b1\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const socket = new WebSocket(\'wss://stream-testnet.zoomex.com/v3/public/linear\');\n\nsocket.onopen = function() {\n  const subscribeMsg = {\n    "op": "subscribe",\n    "args": ["liquidation.BTCUSDT"]\n  };\n  socket.send(JSON.stringify(subscribeMsg));\n};\n\nsocket.onmessage = function(event) {\n};\n\nsocket.onclose = function(event) {\n};\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "price": "0.03803",\n        "side": "Buy",\n        "size": "1637",\n        "symbol": "GALAUSDT",\n        "updatedTime": 1673251091822\n    },\n    "topic": "liquidation.GALAUSDT",\n    "ts": 1673251091822,\n    "type": "snapshot"\n}\n')))}u.isMDXComponent=!0}}]);