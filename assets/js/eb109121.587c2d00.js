"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[5008],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(a),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3016:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"Wallet",sidebar_label:"Wallet",sidebar_position:4},i=void 0,o={unversionedId:"v3/websocket/private/wallet",id:"v3/websocket/private/wallet",title:"Wallet",description:"Subscribe to the wallet stream to see changes to your wallet in real-time.",source:"@site/docs/v3/websocket/private/wallet.mdx",sourceDirName:"v3/websocket/private",slug:"/v3/websocket/private/wallet",permalink:"/docs-tes/v3/websocket/private/wallet",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Wallet",sidebar_label:"Wallet",sidebar_position:4},sidebar:"v3SideBar",previous:{title:"Order",permalink:"/docs-tes/v3/websocket/private/order"},next:{title:"Rate Limit",permalink:"/docs-tes/v3/rate-limit"}},c={},p=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],s={toc:p},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe to the wallet stream to see changes to your wallet in ",(0,r.kt)("strong",{parentName:"p"},"real-time"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"creationTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Data created timestamp (ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Normal account: ",(0,r.kt)("inlineCode",{parentName:"td"},"CONTRACT"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountLTV"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account LTV: account total borrowed size / (account total equity + account total borrowed size).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountIMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin Rate: Account Total Initial Margin Base Coin / Account Margin Balance Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accountMMRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin Rate: Account Total Maintenance Margin Base Coin / Account Margin Balance Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalEquity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of account converted to usd\uff1aAccount Margin Balance Base Coin + Account Option Value Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalWalletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet Balance of account converted to usd\uff1a\u2211 Asset Wallet Balance By USD value of each asset\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMarginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Margin Balance of account converted to usd\uff1atotalWalletBalance + totalPerpUPL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalAvailableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available Balance of account converted to usd\uff1aRegular mode\uff1atotalMarginBalance - totalInitialMargin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalPerpUPL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised P&L of perpetuals of account converted to usd\uff1a\u2211 Each perp upl by base coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalInitialMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin of account converted to usd\uff1a\u2211 Asset Total Initial Margin Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMaintenanceMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin of account converted to usd: \u2211 Asset Total Maintenance Margin Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin name, such as BTC, ETH, USDT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> equity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> usdValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"USD value of current coin. If this coin cannot be collateral, then it is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet balance of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> availableToWithdraw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available amount to withdraw of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> accruedInterest"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Accrued interest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalOrderIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-occupied margin for order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of initial margin of all positions + Pre-occupied liquidation fee.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of maintenance margin for all positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised P&L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cumulative Realised P&L")))),(0,r.kt)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n        "wallet"\n    ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var url = require(\'url\');\nvar WebSocket = require(\'ws\');\nvar crypto = require(\'crypto\');\nvar endpoint = "wss://stream-testnet.zoomex.com/v3/private"\nconsole.log(\'attempting to connect to WebSocket %j\', endpoint);\nvar client = new WebSocket(endpoint);\nconst apiKey="XXXXXXXXX";\nconst apiSecret="XXXXXXXXX";\nclient.on(\'open\', function () {\n    console.log(\'"open" event!\');\n    console.log(\'WebSocket Client Connected\');\n    const expires = new Date().getTime() + 10000;\n    const signature = crypto.createHmac("sha256", apiSecret).update("GET/realtime" + expires).digest("hex");\n    const payload={\n        op: "auth",\n        args: [apiKey, expires.toFixed(0), signature],\n    }\n    client.send(JSON.stringify(payload));\n    setInterval(()=>{client.ping()}, 30000);\n    client.ping();\n    client.send(JSON.stringify({"op": "subscribe", "args": [\'wallet\']}));\n});\n\nclient.on(\'message\', function (data) {\n    console.log(\'"message" event! %j\', JSON.parse(Buffer.from(data).toString()));\n});\nclient.on(\'ping\', function (data, flags) {\n    console.log("ping received");\n});\nclient.on(\'pong\', function (data, flags) {\n    console.log("pong received");\n});\n')),(0,r.kt)("h3",{id:"stream-example"},"Stream Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "wallet",\n    "id": "0df2a9a8-5975-4252-9f4f-2856b51f47f6",\n    "creationTime": 1696654328771,\n    "data": [\n        {\n            "accountType": "CONTRACT",\n            "accountIMRate": "",\n            "accountMMRate": "",\n            "accountLTV": "",\n            "totalEquity": "",\n            "totalWalletBalance": "",\n            "totalMarginBalance": "",\n            "totalAvailableBalance": "",\n            "totalPerpUPL": "",\n            "totalInitialMargin": "",\n            "totalMaintenanceMargin": "",\n            "coin": [\n                {\n                    "coin": "USDT",\n                    "equity": "9385500.84045358",\n                    "usdValue": "",\n                    "walletBalance": "9385525.87726358",\n                    "availableToWithdraw": "9380099.99253585",\n                    "borrowAmount": "",\n                    "availableToBorrow": "",\n                    "accruedInterest": "",\n                    "totalOrderIM": "2326.584104",\n                    "totalPositionIM": "3099.30062373",\n                    "totalPositionMM": "",\n                    "unrealisedPnl": "-25.03681",\n                    "cumRealisedPnl": "-5983.07783642"\n                }\n            ]\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);