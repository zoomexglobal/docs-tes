"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[4996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?l.createElement(k,a(a({ref:t},p),{},{components:n})):l.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var d=2;d<o;d++)a[d]=n[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const o={title:"Switch Position Mode",sidebar_label:"Switch Position Mode",sidebar_position:2.8},a=void 0,i={unversionedId:"v3/position/position-mode",id:"v3/position/position-mode",title:"Switch Position Mode",description:"It supports to switch the position mode for USDT perpetual and Inverse futures. If you are in one-way Mode, you can only open one position on Buy or Sell side. If you are in hedge mode, you can open both Buy and Sell side positions simultaneously.",source:"@site/docs/v3/position/position-mode.mdx",sourceDirName:"v3/position",slug:"/v3/position/position-mode",permalink:"/docs-tes/v3/position/position-mode",draft:!1,tags:[],version:"current",sidebarPosition:2.8,frontMatter:{title:"Switch Position Mode",sidebar_label:"Switch Position Mode",sidebar_position:2.8},sidebar:"v3SideBar",previous:{title:"Set TP/SL Mode",permalink:"/docs-tes/v3/position/tpsl-mode"},next:{title:"Set Risk Limit",permalink:"/docs-tes/v3/position/set-risk-limit"}},s={},d=[{value:"Example",id:"example",level:3},{value:"The position-switch ability for each contract",id:"the-position-switch-ability-for-each-contract",level:3},{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It supports to switch the position mode for ",(0,r.kt)("strong",{parentName:"p"},"USDT perpetual")," and ",(0,r.kt)("strong",{parentName:"p"},"Inverse futures"),". If you are in one-way Mode, you can only open one position on Buy or Sell side. If you are in hedge mode, you can open both Buy and Sell side positions simultaneously."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Normal account covers: USDT perpetual / Inverse Futures"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Priority for configuration to take effect: symbol > coin > system default"),(0,r.kt)("li",{parentName:"ul"},"System default: one-way mode"),(0,r.kt)("li",{parentName:"ul"},"If the request is by coin (settleCoin), then all symbols based on this setteCoin that do not have position and open order will be batch switched, and new listed symbol based on this settleCoin will be the same mode you set."))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("table",{class:"custom_table"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null,"System default"),(0,r.kt)("th",null,"coin"),(0,r.kt)("th",null,"symbol")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Initial setting"),(0,r.kt)("td",null,"one-way"),(0,r.kt)("td",null,"never configured"),(0,r.kt)("td",null,"never configured")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Result"),(0,r.kt)("td",{colspan:"3"},"All USDT perpetual trading pairs are one-way mode")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Change 1")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Set BTCUSDT to hedge-mode")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Result"),(0,r.kt)("td",{colspan:"3"},"BTCUSDT becomes hedge-mode, and all other symbols keep one-way mode")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list new symbol ETHUSDT"),(0,r.kt)("td",{colspan:"3"},"ETHUSDT is one-way mode \uff08inherit default rules\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Change 2")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Set USDT to hedge-mode"),(0,r.kt)("td",null,"-")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Result"),(0,r.kt)("td",{colspan:"3"},"All current trading pairs with no positions or orders are hedge-mode, and no adjustments will be made for trading pairs with positions and orders")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list new symbol SOLUSDT"),(0,r.kt)("td",{colspan:"3"},"SOLUSDT is hedge-mode (Inherit coin rule)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Change 3")),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Set ASXUSDT to one-mode")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Take effect result"),(0,r.kt)("td",{colspan:"3"},"AXSUSDT is one-way mode, other trading pairs have no change")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"list new symbol BITUSDT"),(0,r.kt)("td",{colspan:"3"},"BITUSDT is hedge-mode (Inherit coin rule)"))),(0,r.kt)("h3",{id:"the-position-switch-ability-for-each-contract"},"The position-switch ability for each contract"),(0,r.kt)("table",{class:"custom_table"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null,"Normal account")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"USDT perpetual"),(0,r.kt)("td",null,(0,r.kt)("b",null,"Support one-way & hedge-mode"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Inverse perpetual"),(0,r.kt)("td",null,"Support one-way ",(0,r.kt)("b",null,"only")))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/position/switch-mode")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"category"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type ",(0,r.kt)("ul",null,(0,r.kt)("li",null," Unified account: ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", USDT Perp; ",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),", Inverse Futures"),(0,r.kt)("li",null,"Normal account: ",(0,r.kt)("inlineCode",{parentName:"td"},"linear"),", USDT Perp; ",(0,r.kt)("inlineCode",{parentName:"td"},"inverse"),", Inverse Futures. ",(0,r.kt)("em",{parentName:"td"},"Please note that ",(0,r.kt)("inlineCode",{parentName:"em"},"category")," is ",(0,r.kt)("strong",{parentName:"em"},"not")," involved with business logic"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol name. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"coin")," is ",(0,r.kt)("strong",{parentName:"td"},"required"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol")," has a higher priority")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Position mode. ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),": Merged Single. ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),": Both Sides")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'POST /cloud/trade/v3/position/switch-mode HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1675249072041\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\nContent-Length: 87\n\n{\n    "category":"inverse",\n    "symbol":"BTCUSDH23",\n    "coin": null,\n    "mode": 0\n}\n')),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1675249072814\n}\n')))}m.isMDXComponent=!0}}]);