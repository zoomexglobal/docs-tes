"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3635],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>s});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),d=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(y.Provider,{value:t},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),N=r,s=m["".concat(y,".").concat(N)]||m[N]||o[N]||l;return a?n.createElement(s,g(g({ref:t},p),{},{components:a})):n.createElement(s,g({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=N;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[m]="string"==typeof e?e:r,g[1]=i;for(var d=2;d<l;d++)g[d]=a[d];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},5557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(8168),r=(a(6540),a(5680));const l={title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_label:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_position:4},g=void 0,i={unversionedId:"v3/order/open-order",id:"v3/order/open-order",title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",description:"\u5be6\u6642\u67e5\u8a62\u672a\u6210\u4ea4\u6216\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u4fe1\u606f. \u82e5\u9700\u8981\u67e5\u8a62\u66f4\u4e45\u7684\u8a02\u55ae\u7d00\u9304\uff0c\u8acb\u4f7f\u7528\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae\u63a5\u53e3.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/order/open-order.mdx",sourceDirName:"v3/order",slug:"/v3/order/open-order",permalink:"/docs-tes/zh-TW/v3/order/open-order",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_label:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",sidebar_position:4},sidebar:"v3SideBar",previous:{title:"\u64a4\u92b7\u59d4\u8a17\u55ae",permalink:"/docs-tes/zh-TW/v3/order/cancel-order"},next:{title:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",permalink:"/docs-tes/zh-TW/v3/order/cancel-all"}},y={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],p={toc:d},m="wrapper";function o(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u5be6\u6642\u67e5\u8a62\u672a\u6210\u4ea4\u6216\u90e8\u5206\u6210\u4ea4\u7684\u8a02\u55ae\u4fe1\u606f. \u82e5\u9700\u8981\u67e5\u8a62\u66f4\u4e45\u7684\u8a02\u55ae\u7d00\u9304\uff0c\u8acb\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"order-list#"},"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae"),"\u63a5\u53e3."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"\u666e\u901a\u5e33\u6236\u8986\u84cb\u7bc4\u570d:  USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"\u8a72\u63a5\u53e3\u9084\u652f\u6301\u67e5\u8a62\u5df2\u6210\u4ea4\uff0c\u53d6\u6d88\u548c\u62d2\u7d55\u985e\u578b\u7684\u8a02\u55ae\u4fe1\u606f\uff0c\u4f46\u50c5\u9650\u6700\u8fd110\u5206\u9418\u5167\u4e14\u6700\u591a\u6bcf\u500bUID\u4e0b\u63d0\u4f9b500\u689d\u6578\u64da."),(0,r.yg)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u901a\u904e\u6307\u5b9asymbol, baseCoin, orderId \u548c orderLinkId\u5b57\u6bb5\u4f86\u67e5\u8a62\u3002\u5982\u679c\u60a8\u4f7f\u7528\u591a\u5b57\u6bb5\u7d44\u5408\uff0c\u7cfb\u7d71\u7684\u67e5\u8a62\u512a\u5148\u7d1a\u5982\u4e0b: orderId > orderLinkId > symbol > baseCoin."),(0,r.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u7684\u7d50\u679c\u5c07\u4ee5",(0,r.yg)("inlineCode",{parentName:"li"},"createdTime"),"\u5f9e\u65b0\u5230\u820a\u6392\u5e8f."))),(0,r.yg)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.yg)("p",null,"GET ",(0,r.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/order/realtime")),(0,r.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"category"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b ",(0,r.yg)("ul",null,(0,r.yg)("li",null,"\u666e\u901a\u5e33\u6236: ",(0,r.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"inverse"))))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31. \u5c0d\u65bc",(0,r.yg)("strong",{parentName:"td"},"linear \u548c inverse"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"symbol"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"baseCoin")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"settleCoin"),(0,r.yg)("strong",{parentName:"td"},"\u5fc5\u50b3"),"\u5176\u4e2d\u4e00\u500b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e. \u652f\u6301",(0,r.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"inverse"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d50\u7b97\u5e63\u7a2e ",(0,r.yg)("ul",null,(0,r.yg)("li",null,(0,r.yg)("b",null,"linear \u548c inverse"),": ",(0,r.yg)("inlineCode",{parentName:"td"},"symbol")," \u548c ",(0,r.yg)("inlineCode",{parentName:"td"},"settleCoin"),(0,r.yg)("strong",{parentName:"td"},"\u5fc5\u50b3"),"\u5176\u4e2d\u4e00\u500b")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"orderId"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"orderLinkId"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9\u8a02\u55aeId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"openOnly"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("ul",null,(0,r.yg)("li",null,"\u666e\u901a\u5e33\u6236",(0,r.yg)("inlineCode",{parentName:"td"},"0"),"(\u9ed8\u8a8d): \u50c5\u67e5\u8a62\u6d3b\u52d5\u59d4\u8a17\u8a02\u55ae")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"orderFilter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Order"),": \u6d3b\u52d5\u55ae ",(0,r.yg)("ul",null,(0,r.yg)("li",null,"\u9ed8\u8a8d\u662f\u5168\u90e8\u985e\u578b\u8a02\u55ae")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"50"),"]",". \u9ed8\u8a8d: ",(0,r.yg)("inlineCode",{parentName:"td"},"20"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.yg)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0c\u672c\u63a5\u53e3\u7684\u54cd\u5e94\u4f53\u4e2dlist\u5bf9\u8c61\u91cc\u8fd4\u56de\u7684\u5c5e\u6027\u662f\u5927\u5199\u5b57\u6bcd\u5f00\u5934\uff0c\u5bf9\u63a5\u65f6\u8bf7\u6ce8\u610f\uff01"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"category"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"list"),(0,r.yg)("td",{parentName:"tr",align:"left"},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"Object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> OrderId"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55aeId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> OrderLinkId"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6236\u81ea\u5b9a\u7fa9Id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> Symbol"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> Price"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u50f9\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> Qty"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u6578\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> Side"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65b9\u5411. ",(0,r.yg)("inlineCode",{parentName:"td"},"Buy"),",",(0,r.yg)("inlineCode",{parentName:"td"},"Sell"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#positionidx"},"PositionIdx")),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u6a19\u8b58\u3002\u7528\u6236\u4e0d\u540c\u5009\u4f4d\u6a21\u5f0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#orderstatus"},"OrderStatus")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u72c0\u614b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#canceltype"},"CancelType")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u88ab\u53d6\u6d88\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#rejectreason"},"RejectReason")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u62d2\u7d55\u539f\u56e0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> AvgPrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5e73\u5747\u6210\u4ea4\u50f9\u683c. \u82e5\u6c92\u6709\u6210\u4ea4\uff0c\u5247\u8fd4\u56de",(0,r.yg)("inlineCode",{parentName:"td"},'"0"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> LeavesQty"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u6578\u91cf.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> LeavesValue"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u5269\u9918\u672a\u6210\u4ea4\u7684\u50f9\u503c.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> CumExecQty"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u6578\u91cf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> CumExecValue"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u50f9\u503c.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> CumExecFee"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u7d2f\u8a08\u6210\u4ea4\u7684\u624b\u7e8c\u8cbb.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#timeinforce"},"TimeInForce")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u57f7\u884c\u7b56\u7565")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> OrderType"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u985e\u578b. ",(0,r.yg)("inlineCode",{parentName:"td"},"Market"),",",(0,r.yg)("inlineCode",{parentName:"td"},"Limit"),". \u5c0d\u65bc\u6b62\u76c8\u6b62\u640d\u55ae, \u5247\u8868\u793a\u70ba\u89f8\u767c\u5f8c\u7684\u8a02\u55ae\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#stopordertype"},"StopOrderType")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u689d\u4ef6\u55ae\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> OrderIv"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u96b1\u542b\u6ce2\u52d5\u7387")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> TriggerPrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c. \u82e5",(0,r.yg)("inlineCode",{parentName:"td"},"stopOrderType"),"=",(0,r.yg)("em",{parentName:"td"},"TrailingStop"),", \u5247\u9019\u662f\u6fc0\u6d3b\u50f9\u683c. \u5426\u5247, \u5b83\u662f\u89f8\u767c\u50f9\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> TakeProfit"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u50f9\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> StopLoss"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b62\u640d\u50f9\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> TpslMode"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b62\u76c8\u6b62\u640d\u6a21\u5f0f ",(0,r.yg)("inlineCode",{parentName:"td"},"Full"),": \u5168\u90e8\u5009\u4f4d\u6b62\u76c8\u6b62\u640d, ",(0,r.yg)("inlineCode",{parentName:"td"},"Partial"),": \u90e8\u5206\u5009\u4f4d\u6b62\u76c8\u6b62\u640d.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> TpLimitPrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u76c8\u5f8c\u8f49\u63db\u70ba\u9650\u50f9\u55ae\u7684\u50f9\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> SlLimitPrice"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u640d\u5f8c\u8f49\u63db\u70ba\u9650\u50f9\u55ae\u7684\u50f9\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#triggerby"},"TpTriggerBy")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u76c8\u7684\u50f9\u683c\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#triggerby"},"SlTriggerBy")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u6b62\u640d\u7684\u50f9\u683c\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> TriggerDirection"),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u65b9\u5411. ",(0,r.yg)("inlineCode",{parentName:"td"},"1"),": \u4e0a\u6f32, ",(0,r.yg)("inlineCode",{parentName:"td"},"2"),": \u4e0b\u8dcc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ",(0,r.yg)("a",{parentName:"td",href:"../enum#triggerby"},"TriggerBy")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u50f9\u683c\u7684\u89f8\u767c\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> LastPriceOnCreated"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0b\u55ae\u6642\u7684\u5e02\u5834\u50f9\u683c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> ReduceOnly"),(0,r.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ea\u6e1b\u5009. ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),"\u8868\u660e\u9019\u662f\u53ea\u6e1b\u5009\u55ae")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> CloseOnTrigger"),(0,r.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u89f8\u767c\u5f8c\u5e73\u5009\u59d4\u8a17.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> PlaceType"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0b\u55ae\u985e\u578b. ",(0,r.yg)("inlineCode",{parentName:"td"},"iv"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"price"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> CreatedTime"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5275\u5efa\u8a02\u55ae\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"> UpdatedTime"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8a02\u55ae\u66f4\u65b0\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1  HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672219525810\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n")),(0,r.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "OrderId": "fd4300ae-7847-404e-b947-b46980a4d140",\n                "OrderLinkId": "test-000005",\n                "Symbol": "ETHUSDT",\n                "Price": "1600.00",\n                "Qty": "0.10",\n                "Side": "Buy",\n                "IsLeverage": "",\n                "PositionIdx": 1,\n                "OrderStatus": "New",\n                "CancelType": "UNKNOWN",\n                "RejectReason": "EC_NoError",\n                "AvgPrice": "0",\n                "LeavesQty": "0.10",\n                "LeavesValue": "160",\n                "CumExecQty": "0.00",\n                "CumExecValue": "0",\n                "CumExecFee": "0",\n                "TimeInForce": "GTC",\n                "OrderType": "Limit",\n                "StopOrderType": "UNKNOWN",\n                "OrderIv": "",\n                "TriggerPrice": "0.00",\n                "TakeProfit": "2500.00",\n                "StopLoss": "1500.00",\n                "TpTriggerBy": "LastPrice",\n                "SlTriggerBy": "LastPrice",\n                "TriggerDirection": 0,\n                "TriggerBy": "UNKNOWN",\n                "LastPriceOnCreated": "",\n                "ReduceOnly": false,\n                "CloseOnTrigger": false,\n                "TpslMode": "Full",\n                "TpLimitPrice": "",\n                "SlLimitPrice": "",\n                "PlaceType": "",\n                "CreatedTime": "1684738540559",\n                "UpdatedTime": "1684738540561"\n            }\n        ],\n        "nextPageCursor": "page_args%3Dfd4300ae-7847-404e-b947-b46980a4d140%26symbol%3D6%26",\n        "category": "linear"\n    },\n    "retExtInfo": {},\n    "time": 1684765770483\n}\n')))}o.isMDXComponent=!0}}]);