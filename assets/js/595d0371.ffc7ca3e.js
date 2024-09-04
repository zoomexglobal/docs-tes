"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2153],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,u=m["".concat(o,".").concat(d)]||m[d]||y[d]||l;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[m]="string"==typeof e?e:a,i[1]=g;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const l={title:"Get Funding Rate History",sidebar_label:"Get Funding Rate History",sidebar_position:7},i=void 0,g={unversionedId:"v3/market/history-fund-rate",id:"v3/market/history-fund-rate",title:"Get Funding Rate History",description:"Query for historical funding rates. Each symbol has a different funding interval. For example, if the interval is 8 hours and the current time is UTC 12, then it returns the last funding rate, which settled at UTC 8.",source:"@site/docs/v3/market/history-fund-rate.mdx",sourceDirName:"v3/market",slug:"/v3/market/history-fund-rate",permalink:"/docs-tes/v3/market/history-fund-rate",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Get Funding Rate History",sidebar_label:"Get Funding Rate History",sidebar_position:7},sidebar:"v3SideBar",previous:{title:"Get Tickers",permalink:"/docs-tes/v3/market/tickers"},next:{title:"Get Public Trading History",permalink:"/docs-tes/v3/market/recent-trade"}},o={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],s={toc:p},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Query for historical funding rates. Each symbol has a different funding interval. For example, if the interval is 8 hours and the current time is UTC 12, then it returns the last funding rate, which settled at UTC 8."),(0,a.yg)("p",null,"To query the funding rate interval, please refer to the ",(0,a.yg)("a",{parentName:"p",href:"instrument"},"instruments-info")," endpoint."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Covers: USDT perpetual / Inverse perpetual"))),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Passing only ",(0,a.yg)("inlineCode",{parentName:"li"},"startTime")," returns an error."),(0,a.yg)("li",{parentName:"ul"},"Passing only ",(0,a.yg)("inlineCode",{parentName:"li"},"endTime")," returns 200 records up till ",(0,a.yg)("inlineCode",{parentName:"li"},"endTime"),"."),(0,a.yg)("li",{parentName:"ul"},"Passing neither returns 200 records up till the current time."))),(0,a.yg)("h3",{id:"http-request"},"HTTP Request"),(0,a.yg)("p",null,"GET ",(0,a.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/funding/history")),(0,a.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Product type. ",(0,a.yg)("inlineCode",{parentName:"td"},"linear"),",",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"startTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"endTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,a.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"200"),"]",". Default: ",(0,a.yg)("inlineCode",{parentName:"td"},"200"))))),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"category"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Product type")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"list"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Object")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> fundingRate"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Funding rate")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> fundingRateTimestamp"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Funding rate timestamp (ms)")))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"request-example"},"Request Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/funding/history?category=linear&symbol=ETHUSDT&limit=1 HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,a.yg)("h3",{id:"response-example"},"Response Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "ETHUSDT",\n                "fundingRate": "0.0001",\n                "fundingRateTimestamp": "1672041600000"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672051897447\n}\n')))}y.isMDXComponent=!0}}]);