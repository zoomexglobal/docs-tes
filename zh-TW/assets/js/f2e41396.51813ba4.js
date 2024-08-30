"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[9907],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),d=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(r),k=a,g=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return r?n.createElement(g,i(i({ref:e},m),{},{components:r})):n.createElement(g,i({ref:e},m))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2828:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u4ea4\u6613\u54e1\u7372\u53d6\u53ef\u5e36\u55ae\u5408\u7d04\u898f\u683c",sidebar_label:"\u4ea4\u6613\u54e1\u7372\u53d6\u53ef\u5e36\u55ae\u5408\u7d04\u898f\u683c",slug:"/copytrade/public/instrument-info"},i=void 0,p={unversionedId:"v3/copy-trade/rest-public/symbol-info",id:"v3/copy-trade/rest-public/symbol-info",title:"\u4ea4\u6613\u54e1\u7372\u53d6\u53ef\u5e36\u55ae\u5408\u7d04\u898f\u683c",description:"\u4ea4\u6613\u54e1\u7372\u53d6\u53ef\u5e36\u55ae\u5408\u7d04\u7684\u898f\u683c",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-public/symbol-info.mdx",sourceDirName:"v3/copy-trade/rest-public",slug:"/copytrade/public/instrument-info",permalink:"/docs-tes/zh-TW/copytrade/public/instrument-info",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4ea4\u6613\u54e1\u7372\u53d6\u53ef\u5e36\u55ae\u5408\u7d04\u898f\u683c",sidebar_label:"\u4ea4\u6613\u54e1\u7372\u53d6\u53ef\u5e36\u55ae\u5408\u7d04\u898f\u683c",slug:"/copytrade/public/instrument-info"},sidebar:"v3SideBar",previous:{title:"Copy Trade",permalink:"/docs-tes/zh-TW/category/copy-trade"},next:{title:"\u4ea4\u6613\u54e1\u5275\u5efa\u8a02\u55ae",permalink:"/docs-tes/zh-TW/copy-trade/trade/create-order"}},o={},d=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:d},c="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ea4\u6613\u54e1\u7372\u53d6\u53ef\u5e36\u55ae\u5408\u7d04\u7684\u898f\u683c"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8a72\u63a5\u53e3\u662f\u516c\u5171\u63a5\u53e3\uff0c\u7121\u9700\u9452\u6b0a")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/cloud/contract/v3/public/copytrading/symbol/list")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("p",null,"\u7121"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> baseCurrency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u57fa\u790e\u8ca8\u5e63")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> quoteCurrency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5831\u50f9\u8ca8\u5e63")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> priceScale"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u50f9\u683c\u7bc4\u570d\uff08\u53ef\u4ee5\u63d0\u4ea4\u50f9\u683c\u7684\u5c0f\u6578\u4f4d\u6578\uff0c\u5118\u7ba1\u6700\u7d42\u50f9\u683c\u53ef\u80fd\u6703\u56db\u6368\u4e94\u5165\u4ee5\u7b26\u5408 \u50f9\u683c\u6700\u5c0f\u589e\u52a0\u6216\u6e1b\u5c11\u6578\u91cf\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> takerFee"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"taker \u624b\u7e8c\u8cbb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> makerFee"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"maker \u624b\u7e8c\u8cbb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> fundingInterval"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cc7\u91d1\u8cbb\u7528\u7d50\u7b97\u9031\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> leverageFilter"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u69d3\u687f\u5c6c\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> maxLeverage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u6760\u687f\u6578 (\u5047\u8a2d\u5728\u6700\u4f4e\u98a8\u96aa\u9650\u984d\u8a2d\u7f6e\u6642\u5019\u7684\u6700\u5927\u69d3\u687f\u6578)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> minLeverage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u6760\u687f\u6578")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> priceFilter"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u50f9\u683c\u5c6c\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> minPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u50f9\u683c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> maxPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u50f9\u683c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> tickSize"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u50f9\u683c\u6700\u5c0f\u589e\u52a0\u6216\u6e1b\u5c11\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> lotSizeFilter"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0b\u55ae\u6578\u91cf\u5c6c\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> qtyStep"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u6578\u91cf\u6700\u5c0f\u55ae\u4f4d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> maxOrderQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u4ea4\u6613\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},">> minOrderQty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u4ea4\u6613\u6578\u91cf")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://openapi-testnet.zoomex.com/cloud/contract/v3/public/copytrading/symbol/list\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "baseCurrency": "BTC",\n                "quoteCurrency": "USDT",\n                "priceScale": "1",\n                "takerFee": "0.00060",\n                "makerFee": "0.00020",\n                "fundingInterval": "480",\n                "leverageFilter": {\n                    "maxLeverage": "100",\n                    "minLeverage": "1"\n                },\n                "priceFilter": {\n                    "minPrice": "0.5",\n                    "maxPrice": "999999.0",\n                    "tickSize": "0.5"\n                },\n                "lotSizeFilter": {\n                    "qtyStep": "0.001",\n                    "maxOrderQty": "100.000",\n                    "minOrderQty": "0.001"\n                }\n            }\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);