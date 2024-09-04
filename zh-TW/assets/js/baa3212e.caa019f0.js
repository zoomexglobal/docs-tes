"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9132],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,g=d["".concat(p,".").concat(u)]||d[u]||y[u]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(8168),o=(r(6540),r(5680));const a={title:"\u4ea4\u6613\u54e1\u4e00\u9375\u5e73\u5009",sidebar_label:"\u4ea4\u6613\u54e1\u4e00\u9375\u5e73\u5009",sidebar_position:2,slug:"/copy-trade/position/close-position"},i=void 0,l={unversionedId:"v3/copy-trade/rest-trade/position/close-position",id:"v3/copy-trade/rest-trade/position/close-position",title:"\u4ea4\u6613\u54e1\u4e00\u9375\u5e73\u5009",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-trade/position/close-position.mdx",sourceDirName:"v3/copy-trade/rest-trade/position",slug:"/copy-trade/position/close-position",permalink:"/docs-tes/zh-TW/copy-trade/position/close-position",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u4ea4\u6613\u54e1\u4e00\u9375\u5e73\u5009",sidebar_label:"\u4ea4\u6613\u54e1\u4e00\u9375\u5e73\u5009",sidebar_position:2,slug:"/copy-trade/position/close-position"},sidebar:"v3SideBar",previous:{title:"\u4ea4\u6613\u54e1\u5e36\u55ae\u5009\u4f4d\u532f\u7e3d",permalink:"/docs-tes/zh-TW/copy-trade/position/position-info"},next:{title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",permalink:"/docs-tes/zh-TW/copy-trade/position/leverage"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:s},d="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,o.yg)("p",null,"GET ",(0,o.yg)("inlineCode",{parentName:"p"},"/contract/v3/private/copytrading/position/close")),(0,o.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,o.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9808"),(0,o.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,o.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("strong",{parentName:"td"},"true")),(0,o.yg)("td",{parentName:"tr",align:"left"},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("a",{parentName:"td",href:"../enum#positionidx"},"positionIdx")),(0,o.yg)("td",{parentName:"tr",align:"left"},(0,o.yg)("strong",{parentName:"td"},"true")),(0,o.yg)("td",{parentName:"tr",align:"left"},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"Position idx, \u7528\u65bc\u5728\u4e0d\u540c\u5009\u4f4d\u6a21\u5f0f\u4e0b\u6a19\u8b58\u5009\u4f4d\uff1a0-\u55ae\u5411\u6301\u5009; 1-\u96d9\u5411\u6301\u5009Buy; 2-\u96d9\u5411\u6301\u5009Sell")))),(0,o.yg)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,o.yg)("p",null,"\u7121"),(0,o.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://openapi-testnet.zoomex.com/cloud/contract/v3/private/copytrading/position/close\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{"symbol":"BTCUSDT","positionIdx":2,"api_key":"XXXXX","timestamp":1689850686341,"recv_window":5000,"sign":"XXXXX"}\'\n')),(0,o.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {}\n}\n')))}y.isMDXComponent=!0}}]);