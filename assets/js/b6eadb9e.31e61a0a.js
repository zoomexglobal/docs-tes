"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3517],{5680:(e,t,r)=>{r.d(t,{xA:()=>o,yg:()=>u});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},o=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),y=p(r),s=n,u=y["".concat(d,".").concat(s)]||y[s]||m[s]||l;return r?a.createElement(u,g(g({ref:t},o),{},{components:r})):a.createElement(u,g({ref:t},o))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,g=new Array(l);g[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[y]="string"==typeof e?e:n,g[1]=i;for(var p=2;p<l;p++)g[p]=r[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(8168),n=(r(6540),r(5680));const l={title:"Get Orders",sidebar_label:"Get Orders",sidebar_position:3,slug:"/copy-trade/trade/get-order"},g=void 0,i={unversionedId:"v3/copy-trade/rest-trade/order/order-list",id:"v3/copy-trade/rest-trade/order/order-list",title:"Get Orders",description:"Query orders",source:"@site/docs/v3/copy-trade/rest-trade/order/order-list.mdx",sourceDirName:"v3/copy-trade/rest-trade/order",slug:"/copy-trade/trade/get-order",permalink:"/docs-tes/copy-trade/trade/get-order",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Get Orders",sidebar_label:"Get Orders",sidebar_position:3,slug:"/copy-trade/trade/get-order"},sidebar:"v3SideBar",previous:{title:"Set Trading Stop",permalink:"/docs-tes/copy-trade/trade/trading-stop"},next:{title:"Cancel Order",permalink:"/docs-tes/copy-trade/trade/cancel"}},d={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],o={toc:p},y="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Query orders"),(0,n.yg)("h3",{id:"http-request"},"HTTP Request"),(0,n.yg)("p",null,"GET ",(0,n.yg)("inlineCode",{parentName:"p"},"/cloud/contract/v3/private/copytrading/order/list")),(0,n.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Symbol")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order Id")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Unique user-set order ID. Maximum length of 36 characters")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"copyTradeOrderType"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"CopyTrading order type")))),(0,n.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"orderId"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order Id")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Unique user-set order ID. Maximum length of 36 characters")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Symbol")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"side"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Side")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"price"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"qty"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order quantity in USD")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../enum#timeinforce"},"timeInForce")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Time in force")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"isIsolated"),(0,n.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.yg)("td",{parentName:"tr",align:null},"true means isolated margin mode; false means cross margin mode")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"leverage"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"In Isolated Margin mode, the value is set by the user. In Cross Margin mode, the value is the max leverage at current risk level")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../enum#copytradeorderstatus"},"copyTradeOrderStatus")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Copy trade order type")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"leavesQty"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of unfilled contracts from the order's size")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"leavesValue"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"The estimated value corresponding to the number of remaining orders")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"cumExecValue"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Cumulative value of trading")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"cumExecFee"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Cumulative trading fees")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"takeProfit"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Take profit price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"stopLoss"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Stop loss price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../enum#triggerby"},"tpTriggerBy")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Type of take-profit activation price, LastPrice by default.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../enum#triggerby"},"slTriggerBy")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Type of stop-loss activation price, LastPrice by default.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"createdTime"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Creation time (when the order_status was Created)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"updatedTime"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Update time")))),(0,n.yg)("h3",{id:"request-example"},"Request Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://openapi-testnet.zoomex.com/cloud/contract/v3/private/copytrading/order/list?timestamp=1689845343595&api_key=XXXXX&recv_window=5000&sign=XXXXX'\n")),(0,n.yg)("h3",{id:"response-example"},"Response Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "list": [\n            {\n                "orderId": "241588fb-1e69-46f2-8446-9278e40902bf",\n                "symbol": "BTCUSDT",\n                "orderLinkId": "",\n                "side": "Sell",\n                "copyTradeOrderStatus": "OpenOrderFilled",\n                "price": "30285.00",\n                "qty": "1",\n                "timeInForce": "GoodTillCancel",\n                "leavesQty": "0",\n                "isIsolated": true,\n                "leavesValue": "0",\n                "leverage": "25",\n                "cumExecValue": "30287.6",\n                "cumExecFee": "18.17256",\n                "createdTime": "1689845238176",\n                "updatedTime": "1689845238192",\n                "takeProfit": "29000.00",\n                "stopLoss": "32000.00",\n                "tpTriggerBy": "MarkPrice",\n                "slTriggerBy": "IndexPrice"\n            }\n        ]\n    }\n}\n')))}m.isMDXComponent=!0}}]);