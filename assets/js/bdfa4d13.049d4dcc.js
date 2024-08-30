"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[8899],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},573:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={title:"Get Wallet Balance",sidebar_label:"Get Wallet Balance",sidebar_position:1},o=void 0,i={unversionedId:"v3/account/wallet-balance",id:"v3/account/wallet-balance",title:"Get Wallet Balance",description:"HTTP Request",source:"@site/docs/v3/account/wallet-balance.mdx",sourceDirName:"v3/account",slug:"/v3/account/wallet-balance",permalink:"/docs-tes/v3/account/wallet-balance",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Wallet Balance",sidebar_label:"Get Wallet Balance",sidebar_position:1},sidebar:"v3SideBar",previous:{title:"Get Coin Exchange Records",permalink:"/docs-tes/v3/account/exchange"},next:{title:"Get Asset Info (Spot)",permalink:"/docs-tes/v3/account/asset-info"}},c={},u=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:u},d="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/account/wallet-balance")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#accounttype"},"accountType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account type ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Normal account: ",(0,r.kt)("inlineCode",{parentName:"td"},"CONTRACT"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin name ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If not passed, it returns non-zero asset info"),(0,r.kt)("li",null,"You can pass multiple coins to query, separated by comma. ")))))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalEquity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of account converted to usd\uff1aAccount Margin Balance Base Coin + Account Option Value Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalWalletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet Balance of account converted to usd\uff1a\u2211 Asset Wallet Balance By USD value of each asset\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMarginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Margin Balance of account converted to usd\uff1atotalWalletBalance + totalPerpUPL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalAvailableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available Balance of account converted to usd\uff1aRegular mode\uff1atotalMarginBalance - totalInitialMargin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalInitialMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial Margin of account converted to usd\uff1a\u2211 Asset Total Initial Margin Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMaintenanceMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintenance Margin of account converted to usd: \u2211 Asset Total Maintenance Margin Base Coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin name, such as BTC, ETH, USDT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> equity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Equity of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> usdValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"USD value of current coin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet balance of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> availableToWithdraw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Available amount to withdraw of current coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalOrderIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-occupied margin for order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of initial margin of all positions + Pre-occupied liquidation fee.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Sum of maintenance margin for all positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unrealised P&L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cumulative Realised P&L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> bonus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bonus.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/account/wallet-balance?accountType=CONTRACT HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672125440406\nX-BAPI-RECV-WINDOW: 5000\n")),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "accountType": "CONTRACT",\n                "accountIMRate": "",\n                "accountMMRate": "",\n                "totalEquity": "",\n                "totalWalletBalance": "",\n                "totalMarginBalance": "",\n                "totalAvailableBalance": "",\n                "totalPerpUPL": "",\n                "totalInitialMargin": "",\n                "totalMaintenanceMargin": "",\n                "accountLTV": "",\n                "coin": [\n                    {\n                        "coin": "BTC",\n                        "equity": "0",\n                        "usdValue": "",\n                        "walletBalance": "0",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "0",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0.12384551"\n                    },\n                    {\n                        "coin": "ETH",\n                        "equity": "0.30050274",\n                        "usdValue": "",\n                        "walletBalance": "0.30050274",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "0.30050274",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0"\n                    },\n                    {\n                        "coin": "EOS",\n                        "equity": "900.3811056",\n                        "usdValue": "",\n                        "walletBalance": "900.3811056",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "900.3811056",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0"\n                    },\n                    {\n                        "coin": "XRP",\n                        "equity": "1100.7278334",\n                        "usdValue": "",\n                        "walletBalance": "1100.7278334",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "1100.7278334",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0"\n                    },\n                    {\n                        "coin": "USDT",\n                        "equity": "60028.59717864",\n                        "usdValue": "",\n                        "walletBalance": "59991.29717864",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "55992.23760272",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "3999.05957592",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "37.3",\n                        "cumRealisedPnl": "-59483.31410791"\n                    }\n                ]\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1696667951890\n}\n')))}s.isMDXComponent=!0}}]);