"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8880],{5680:(e,t,l)=>{l.d(t,{xA:()=>s,yg:()=>c});var n=l(6540);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=d(l),p=r,c=y["".concat(u,".").concat(p)]||y[p]||g[p]||i;return l?n.createElement(c,a(a({ref:t},s),{},{components:l})):n.createElement(c,a({ref:t},s))}));function c(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,a=new Array(i);a[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[y]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<i;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},5386:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=l(8168),r=(l(6540),l(5680));const i={title:"Rate Limit",sidebar_label:"Rate Limit"},a=void 0,o={unversionedId:"v3/rate-limit",id:"v3/rate-limit",title:"Rate Limit",description:"IP Rate Limit",source:"@site/docs/v3/rate-limit.mdx",sourceDirName:"v3",slug:"/v3/rate-limit",permalink:"/docs-tes/v3/rate-limit",draft:!1,tags:[],version:"current",frontMatter:{title:"Rate Limit",sidebar_label:"Rate Limit"},sidebar:"v3SideBar",previous:{title:"Wallet",permalink:"/docs-tes/v3/websocket/private/wallet"},next:{title:"Enums Definitions",permalink:"/docs-tes/v3/enum"}},u={},d=[{value:"IP Rate Limit",id:"ip-rate-limit",level:2},{value:"API Rate Limit",id:"api-rate-limit",level:2},{value:"API Rate Limit Table",id:"api-rate-limit-table",level:3},{value:"Trade",id:"trade",level:4},{value:"Position",id:"position",level:4},{value:"Account",id:"account",level:4},{value:"API Rate Limit Rules For VIPs/PROs",id:"api-rate-limit-rules-for-vipspros",level:2},{value:"How to increase API Limit",id:"how-to-increase-api-limit",level:2}],s={toc:d},y="wrapper";function g(e){let{components:t,...l}=e;return(0,r.yg)(y,(0,n.A)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"ip-rate-limit"},"IP Rate Limit"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you receive an ",(0,r.yg)("strong",{parentName:"p"},"HTTP 403")," (Access Denied) response, your IP has been either temporarily or permanently banned.\n",(0,r.yg)("strong",{parentName:"p"},"You should immediately review the below guidelines to ensure your application does not continue to violate the limit."),"\nIf you are still banned after 30 minutes, you likely have a permanent ban.")),(0,r.yg)("p",null,"We do not recommend running your application at the very edge of these limits in case abnormal network activity results\nin an unexpected violation."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GET"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"POST")," method (shared):",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"120 requests per second for 5 consecutive seconds")))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"All traffic to ",(0,r.yg)("inlineCode",{parentName:"p"},"openapi.zoomex.com")," share this limit.")),(0,r.yg)("p",null,"After violating the limit your IP will be banned for a set period of time (usually 30 minutes). Continually violating\nthe limit will result in a permanent ban. We cannot undo permanent bans or shorten temporary bans."),(0,r.yg)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you receive ",(0,r.yg)("inlineCode",{parentName:"p"},'"ret_msg": "Too many visits!"')," in the JSON response, you have hit the API rate limit.")),(0,r.yg)("p",null,"The API rate limit is based on the ",(0,r.yg)("strong",{parentName:"p"},"rolling time window per second and UID"),". In other words, it is per second per UID.\nEvery request to the API returns response header shown in the code panel:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Status")," - your remaining requests for current endpoint"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"X-Bapi-Limit")," - your current limit for current endpoint"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"X-Bapi-Limit-Reset-Timestamp")," - the timestamp indicating when your request limit resets if you have exceeded your rate_limit. Otherwise, this is just the current timestamp (it may not exactly match ",(0,r.yg)("inlineCode",{parentName:"li"},"timeNow"),").")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Http Response Header Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\u25b6Response Headers\nContent-Type: application/json; charset=utf-8\nContent-Length: 141\nX-Bapi-Limit: 100\nX-Bapi-Limit-Status: 99\nX-Bapi-Limit-Reset-Timestamp: 1672738134824\n")),(0,r.yg)("h3",{id:"api-rate-limit-table"},"API Rate Limit Table"),(0,r.yg)("h4",{id:"trade"},"Trade"),(0,r.yg)("span",{class:"blocky_table"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Method"),(0,r.yg)("th",null,"Path"),(0,r.yg)("th",null,"linear"),(0,r.yg)("th",null,"inverse"),(0,r.yg)("th",null,"upgradable")),(0,r.yg)("tr",null,(0,r.yg)("td",{rowSpan:"7"},"POST"),(0,r.yg)("td",null,"/cloud/trade/v3/order/create"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"Y")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/order/amend"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"Y")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/order/cancel"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"Y")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/order/cancel-all"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/order/create-batch"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Y")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/order/amend-batch"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Y")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/order/cancel-batch"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"-"),(0,r.yg)("td",null,"Y")),(0,r.yg)("tr",null,(0,r.yg)("td",{rowSpan:"2"},"GET"),(0,r.yg)("td",null,"/cloud/trade/v3/order/realtime"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/order/history"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")))),(0,r.yg)("h4",{id:"position"},"Position"),(0,r.yg)("span",{class:"blocky_table"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Method"),(0,r.yg)("th",null,"Path"),(0,r.yg)("th",null,"linear/inverse"),(0,r.yg)("th",null,"upgradable")),(0,r.yg)("tr",null,(0,r.yg)("td",{rowSpan:"3"},"GET"),(0,r.yg)("td",null,"/cloud/trade/v3/position/list"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/execution/list"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/position/closed-pnl"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",{rowSpan:"4"},"POST"),(0,r.yg)("td",null,"/cloud/trade/v3/position/set-leverage"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/position/set-tpsl-mode"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/position/set-risk-limit"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/position/trading-stop"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")))),(0,r.yg)("h4",{id:"account"},"Account"),(0,r.yg)("span",{class:"blocky_table"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Method"),(0,r.yg)("th",null,"Path"),(0,r.yg)("th",null,"Limit"),(0,r.yg)("th",null,"upgradable")),(0,r.yg)("tr",null,(0,r.yg)("td",{rowSpan:"2"},"GET"),(0,r.yg)("td",null,"/cloud/trade/v3/account/wallet-balance"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"/cloud/trade/v3/account/fee-rate"),(0,r.yg)("td",null,"10 req/s"),(0,r.yg)("td",null,"N")))),(0,r.yg)("h2",{id:"api-rate-limit-rules-for-vipspros"},"API Rate Limit Rules For VIPs/PROs"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"The values in the table represent the application upper limit of the corresponding level, and do not mean that users at\nthis level will automatically enjoy the corresponding API Rate Limit by default."))),(0,r.yg)("admonition",{title:"instructions for batch endpoints",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"API for batch create/amend/cancel order, the frequency of the API will be consistent with the current configuration,\nbut the counting consumption will be consumed according to the actual number of orders. (Number of consumption = number\nof requests * number of orders included in a single request), and the configuration of business lines is independent of each other.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The batch APIs allows 1-20 orders/request. For example, if a batch order request is made once and contains 10 orders,\nthen the request limit will consume 10.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If part of the last batch of orders requested within 1s exceeds the limit, the part that exceeds the limit will fail, and\nthe part that does not exceed the limit will succeed. For example, in the 1 second, the limit is 10, but a batch request\ncontaining 15 orders is placed at this time, then the first 10 orders will be successfully placed, and the 11-15th orders\nwill report an error exceeding the limit, and these orders will fail.")))),(0,r.yg)("span",{class:"blocky_table"},(0,r.yg)("table",{class:"custom_table"},(0,r.yg)("tr",null,(0,r.yg)("th",null),(0,r.yg)("th",{colSpan:"1",align:"center"},"Normal account & UTA"),(0,r.yg)("th",{colSpan:"1"},"UTA Pro")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Level\\Product"),(0,r.yg)("td",null,(0,r.yg)("b",null,"Futures")),(0,r.yg)("td",null,(0,r.yg)("b",null,"Futures"))),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Default"),(0,r.yg)("td",null,"10/s"),(0,r.yg)("td",null,"10/s")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"VIP 1"),(0,r.yg)("td",null,"20/s"),(0,r.yg)("td",null,"20/s")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"VIP 2"),(0,r.yg)("td",null,"40/s"),(0,r.yg)("td",null,"40/s")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"VIP 3 - Supreme VIP"),(0,r.yg)("td",null,"60/s"),(0,r.yg)("td",null,"60/s")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"PRO1"),(0,r.yg)("td",null,"100/s"),(0,r.yg)("td",null,"150/s")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"PRO2"),(0,r.yg)("td",null,"150/s"),(0,r.yg)("td",null,"200/s")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"PRO3"),(0,r.yg)("td",null,"200/s"),(0,r.yg)("td",null,"250/s")))),(0,r.yg)("h2",{id:"how-to-increase-api-limit"},"How to increase API Limit"),(0,r.yg)("p",null,"Please contact your client manager or email to ",(0,r.yg)("a",{parentName:"p",href:"mailto:support@zoomex.com"},"support@zoomex.com")," with the following information. We will reply within 1-4 working days:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Your name and your company details"),(0,r.yg)("li",{parentName:"ol"},"Your Zoomex UID or registered email, and the assets you are trading"),(0,r.yg)("li",{parentName:"ol"},"General description of your trading strategy and reasons for higher rate limits"),(0,r.yg)("li",{parentName:"ol"},"Screenshot of previous monthly trading volume (maker/taker) on other platforms"),(0,r.yg)("li",{parentName:"ol"},"Optional: your order history in CSV format")))}g.isMDXComponent=!0}}]);