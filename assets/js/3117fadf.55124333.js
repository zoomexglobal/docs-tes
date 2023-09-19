"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[4998],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=l.createContext({}),o=function(t){var e=l.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=o(t.components);return l.createElement(a.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=o(n),p=r,m=k["".concat(a,".").concat(p)]||k[p]||d[p]||i;return n?l.createElement(m,s(s({ref:e},c),{},{components:n})):l.createElement(m,s({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=p;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u[k]="string"==typeof t?t:r,s[1]=u;for(var o=2;o<i;o++)s[o]=n[o];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7969:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var l=n(7462),r=(n(7294),n(3905));const i={title:"Ticker",sidebar_label:"Ticker",sidebar_position:3},s=void 0,u={unversionedId:"v3/websocket/public/ticker",id:"v3/websocket/public/ticker",title:"Ticker",description:"Subscribe to the ticker stream.",source:"@site/docs/v3/websocket/public/ticker.mdx",sourceDirName:"v3/websocket/public",slug:"/v3/websocket/public/ticker",permalink:"/docs-tes/v3/websocket/public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Ticker",sidebar_label:"Ticker",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"Trade",permalink:"/docs-tes/v3/websocket/public/trade"},next:{title:"Kline",permalink:"/docs-tes/v3/websocket/public/kline"}},a={},o=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Response Example",id:"response-example",level:3}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},k=c("Tabs"),d=c("TabItem"),p={toc:o},m="wrapper";function b(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subscribe to the ticker stream."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This topic utilises the snapshot field and delta field. If a response param is not found in the message, then its value has not changed."),(0,r.kt)("li",{parentName:"ul"},"Spot & Option tickers message are ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," ",(0,r.kt)("strong",{parentName:"li"},"only")))),(0,r.kt)("p",null,"Push frequency: Derivatives - ",(0,r.kt)("strong",{parentName:"p"},"100ms")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)(k,{groupId:"market-category",mdxType:"Tabs"},(0,r.kt)(d,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Comments")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Data type. ",(0,r.kt)("code",null,"snapshot"),",",(0,r.kt)("code",null,"delta"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"Cross sequence")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"The timestamp (ms) that the system generates the data")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Symbol name ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ",(0,r.kt)("a",{href:"../../enum#tickdirection"},"tickDirection")),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Tick direction ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Percentage change of market price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Last price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price 24 hours ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The highest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"The lowest price in the last 24 hours ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Market price an hour ago ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Mark price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Index price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Open interest value ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Turnover for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Volume for 24h ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Next funding timestamp (ms) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Funding rate ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best bid size ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask price ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Best ask size "))))),(0,r.kt)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const socket = new WebSocket(\'wss://stream-testnet.zoomex.com/v3/public/linear\');\n\nsocket.onopen = function() {\n  const subscribeMsg = {\n    "op": "subscribe",\n    "args": ["tickers.BTCUSDT"]\n  };\n  socket.send(JSON.stringify(subscribeMsg));\n};\n\nsocket.onmessage = function(event) {\n};\n\nsocket.onclose = function(event) {\n};\n')),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)(k,{groupId:"market-category",mdxType:"Tabs"},(0,r.kt)(d,{value:"linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCUSDT",\n    "type": "snapshot",\n    "data": {\n        "symbol": "BTCUSDT",\n        "tickDirection": "PlusTick",\n        "price24hPcnt": "0.017103",\n        "lastPrice": "17216.00",\n        "prevPrice24h": "16926.50",\n        "highPrice24h": "17281.50",\n        "lowPrice24h": "16915.00",\n        "prevPrice1h": "17238.00",\n        "markPrice": "17217.33",\n        "indexPrice": "17227.36",\n        "openInterest": "68744.761",\n        "openInterestValue": "1183601235.91",\n        "turnover24h": "1570383121.943499",\n        "volume24h": "91705.276",\n        "nextFundingTime": "1673280000000",\n        "fundingRate": "-0.000212",\n        "bid1Price": "17215.50",\n        "bid1Size": "84.489",\n        "ask1Price": "17216.00",\n        "ask1Size": "83.020"\n    },\n    "cs": 24987956059,\n    "ts": 1673272861686\n}\n')))))}b.isMDXComponent=!0}}]);