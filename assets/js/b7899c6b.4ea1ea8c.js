"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),k=a,u=s["".concat(p,".").concat(k)]||s[k]||c[k]||i;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Execution",sidebar_label:"Execution",sidebar_position:2},l=void 0,o={unversionedId:"v3/websocket/private/execution",id:"v3/websocket/private/execution",title:"Execution",description:"Subscribe to the execution stream to see your executions in real-time.",source:"@site/docs/v3/websocket/private/execution.mdx",sourceDirName:"v3/websocket/private",slug:"/v3/websocket/private/execution",permalink:"/docs-tes/v3/websocket/private/execution",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Execution",sidebar_label:"Execution",sidebar_position:2},sidebar:"v3SideBar",previous:{title:"Position",permalink:"/docs-tes/v3/websocket/private/position"},next:{title:"Order",permalink:"/docs-tes/v3/websocket/private/order"}},p={},d=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],m={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Subscribe to the execution stream to see your executions in ",(0,a.kt)("strong",{parentName:"p"},"real-time"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You may have multiple executions for one order in a single message.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Topic:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"execution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"All-In-One Topic:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"execution"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Categorised Topic:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"execution.spot"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"execution.linear"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"execution.inverse")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"All-In-One topic and Categorised topic ",(0,a.kt)("strong",{parentName:"li"},"cannot")," be in the same subscription request"),(0,a.kt)("li",{parentName:"ul"},"All-In-One topic: Allow you to listen to all categories (spot, linear, inverse) websocket updates"),(0,a.kt)("li",{parentName:"ul"},"Categorised Topic: Allow you to listen only to specific category websocket updates"))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Message ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"creationTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Data created timestamp (ms)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> ",(0,a.kt)("a",{parentName:"td",href:"../../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Product type ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"Normal account: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),".")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> orderId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Order ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"User customized order ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> side"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Side. ",(0,a.kt)("inlineCode",{parentName:"td"},"Buy"),",",(0,a.kt)("inlineCode",{parentName:"td"},"Sell"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> orderPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Order price.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> orderQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Order qty.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The remaining qty not executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> orderType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Order type. ",(0,a.kt)("inlineCode",{parentName:"td"},"Market"),",",(0,a.kt)("inlineCode",{parentName:"td"},"Limit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> ",(0,a.kt)("a",{parentName:"td",href:"../../enum#stopordertype"},"stopOrderType")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Stop order type. If the order is not stop order, any type is not returned.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> execFee"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Executed trading fee.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> execId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Execution ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> execPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Execution price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> execQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Execution qty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> ",(0,a.kt)("a",{parentName:"td",href:"../../enum#exectype"},"execType")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Executed type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> execValue"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Executed order value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> execTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Executed timestamp\uff08ms\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> isMaker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Is maker order. ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),": maker, ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),": taker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> feeRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading fee rate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> closedSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Closed position size")))),(0,a.kt)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n        "execution"\n    ]\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var url = require(\'url\');\nvar WebSocket = require(\'ws\');\nvar crypto = require(\'crypto\');\nvar endpoint = "wss://stream-testnet.zoomex.com/v3/private"\nconsole.log(\'attempting to connect to WebSocket %j\', endpoint);\nvar client = new WebSocket(endpoint);\nconst apiKey="XXXXXXXXX";\nconst apiSecret="XXXXXXXXX";\nclient.on(\'open\', function () {\n    console.log(\'"open" event!\');\n    console.log(\'WebSocket Client Connected\');\n    const expires = new Date().getTime() + 10000;\n    const signature = crypto.createHmac("sha256", apiSecret).update("GET/realtime" + expires).digest("hex");\n    const payload={\n        op: "auth",\n        args: [apiKey, expires.toFixed(0), signature],\n    }\n    client.send(JSON.stringify(payload));\n    setInterval(()=>{client.ping()}, 30000);\n    client.ping();\n    client.send(JSON.stringify({"op": "subscribe", "args": [\'execution\']}));\n});\n\nclient.on(\'message\', function (data) {\n    console.log(\'"message" event! %j\', JSON.parse(Buffer.from(data).toString()));\n});\nclient.on(\'ping\', function (data, flags) {\n    console.log("ping received");\n});\nclient.on(\'pong\', function (data, flags) {\n    console.log("pong received");\n});\n')),(0,a.kt)("h3",{id:"stream-example"},"Stream Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "592324803b2785-26fa-4214-9963-bdd4727f07be",\n    "topic": "execution",\n    "creationTime": 1672364174455,\n    "data": [\n        {\n            "category": "linear",\n            "symbol": "XRPUSDT",\n            "execFee": "0.005061",\n            "execId": "7e2ae69c-4edf-5800-a352-893d52b446aa",\n            "execPrice": "0.3374",\n            "execQty": "25",\n            "execType": "Trade",\n            "execValue": "8.435",\n            "isMaker": false,\n            "feeRate": "0.0006",\n            "leavesQty": "0",\n            "orderId": "f6e324ff-99c2-4e89-9739-3086e47f9381",\n            "orderLinkId": "",\n            "orderPrice": "0.3207",\n            "orderQty": "25",\n            "orderType": "Market",\n            "stopOrderType": "UNKNOWN",\n            "side": "Sell",\n            "execTime": "1672364174443",\n            "closedSize": ""\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);