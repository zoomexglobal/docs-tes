"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[8172],{3905:(t,e,a)=>{a.d(e,{Zo:()=>N,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),k=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},N=function(t){var e=k(t.components);return r.createElement(m.Provider,{value:e},t.children)},i="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,N=d(t,["components","mdxType","originalType","parentName"]),i=k(a),o=n,c=i["".concat(m,".").concat(o)]||i[o]||g[o]||l;return a?r.createElement(c,p(p({ref:e},N),{},{components:a})):r.createElement(c,p({ref:e},N))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=o;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[i]="string"==typeof t?t:n,p[1]=d;for(var k=2;k<l;k++)p[k]=a[k];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},3028:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>k});var r=a(7462),n=(a(7294),a(3905));const l={title:"\u932f\u8aa4\u78bc",sidebar_label:"\u932f\u8aa4\u78bc"},p=void 0,d={unversionedId:"v3/error",id:"v3/error",title:"\u932f\u8aa4\u78bc",description:"HTTP \u97ff\u61c9\u78bc",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/error.mdx",sourceDirName:"v3",slug:"/v3/error",permalink:"/docs-tes/zh-TW/v3/error",draft:!1,tags:[],version:"current",frontMatter:{title:"\u932f\u8aa4\u78bc",sidebar_label:"\u932f\u8aa4\u78bc"},sidebar:"v3SideBar",previous:{title:"\u679a\u8209\u5b9a\u7fa9",permalink:"/docs-tes/zh-TW/v3/enum"}},m={},k=[{value:"HTTP \u97ff\u61c9\u78bc",id:"http-\u97ff\u61c9\u78bc",level:2},{value:"UMA &amp; UTA",id:"uma--uta",level:2}],N={toc:k},i="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(i,(0,r.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"http-\u97ff\u61c9\u78bc"},"HTTP \u97ff\u61c9\u78bc"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u97ff\u61c9\u78bc"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"400"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bad request. \u8acb\u6aa2\u67e5\u60a8\u7684\u8acb\u6c42\u65b9\u5f0f\u662f\u5426\u70ba",(0,n.kt)("strong",{parentName:"td"},"GET")," / ",(0,n.kt)("strong",{parentName:"td"},"POST")," (\u5fc5\u9700\u5927\u5beb)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"401"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7121\u6548\u8acb\u6c42. 1. \u8acb\u6aa2\u67e5\u662f\u5426\u70ba\u6b63\u78ba\u7684API\u5bc6\u9470; 2. \u8acb\u6aa2\u67e5\u662f\u5426\u5c07\u9452\u6b0a\u53c3\u6578\u653e\u5728\u4e86\u8acb\u6c42\u982d\u88e1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Forbidden request. \u53ef\u80fd\u539f\u56e0: 1. \u9055\u53cd\u4e86IP\u8acb\u6c42\u901f\u7387; 2. \u60a8\u7684GET\u8acb\u6c42\u88e1\u5e36\u4e86\u7a7a\u7684json\u9ad4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7121\u6cd5\u627e\u5230\u8def\u7531. \u53ef\u80fd\u539f\u56e0: 1. \u8acb\u6aa2\u67e5\u60a8\u7684\u8def\u7531; 2. \u5e33\u6236\u6a21\u5f0f\u4e0d\u652f\u6301\u8acb\u6c42\u7684category\u503c")))),(0,n.kt)("h2",{id:"uma--uta"},"UMA & UTA"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u932f\u8aa4\u78bc"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52d9\u8d85\u6642")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8acb\u6c42\u53c3\u6578\u932f\u8aa4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8acb\u6c42\u6642\u9593\u8d85\u51fa\u4e86\u6642\u9593\u8996\u7a97\u7bc4\u570d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API\u91d1\u9470\u7121\u6548\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u932f\u8aa4\u7c3d\u540d\uff0c\u8acb\u6aa2\u67e5\u7c3d\u540d\u751f\u6210\u7b97\u704b\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10005"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a31\u53ef\u6b0a\u88ab\u62d2\u7d55\uff0c\u8acb\u6aa2\u67e5\u60a8\u7684API\u91d1\u9470\u8a31\u53ef\u6b0a\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10006"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a2a\u554f\u6b21\u6578\u592a\u591a\u3002 \u8d85\u904eAPI\u901f\u7387\u9650\u5236\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10007"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6236\u8eab\u4efd\u9a57\u8b49\u5931\u6557\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10008"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7576\u524d\u5e33\u6236\u6a21\u5f0f\u7121\u6cd5\u8a2a\u554f\uff0c\u8acb\u6aa2\u67e5\u60a8\u7684\u5e33\u6236\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP\u5df2\u88ab\u7981\u6b62\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IP\u4e0d\u5339\u914d\uff0c\u8acb\u6aa2\u67e5API\u91d1\u9470\u7684\u7d81\u5b9aIP\u5730\u5740\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10014"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7121\u6548\u7684\u91cd\u8907\u8acb\u6c42\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10016"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7cfb\u7d71\u932f\u8aa4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10017"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u627e\u5230\u8def\u7531\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10018"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8d85\u904eIP\u901f\u7387\u9650\u5236\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5408\u898f\u7246\u6514\u622a\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10027"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7981\u6b62\u4ea4\u6613\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10029"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ea4\u6613\u5c0d\u767d\u540d\u55ae\u9650\u5236\uff0c\u8acb\u6c42\u7684\u4ea4\u6613\u5c0d\u7121\u6548\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"30150"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6760\u6746\u8d85\u8fc7\u98ce\u9669\u9650\u989d\u9650\u5236\uff0c\u4e0d\u5141\u8bb8\u5f00\u4ed3.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"30151"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6760\u6746\u8d85\u8fc7\u501f\u8d37\u914d\u7f6e\u9650\u5236\uff0c\u4e0d\u5141\u8bb8\u5f00\u4ed3.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"30153"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53cc\u4ed3\u5904\u4e8ero\u9636\u6bb5\u65f6\uff0c\u9700\u8981\u540c\u65f6\u79fb\u9664ro\uff0c\u8c03\u6574\u98ce\u9669\u9650\u989d\u65f6\u53e6\u5916\u4e00\u4e2a\u65b9\u5411\u8bd5\u7b97\u5931\u8d25\u5bfc\u81f4\u8c03\u6574\u98ce\u9669\u9650\u989d\u8c03\u6574\u5931\u8d25.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"40004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the order is modified during the process of replacing \u8a02\u55ae\u5df2\u7d93\u5230\u9054\u7d42\u614b, \u7121\u6cd5\u4fee\u6539")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55ae\u4e0d\u5b58\u5728")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55ae\u50f9\u683c\u8d85\u51fa\u5141\u8a31\u7bc4\u570d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9322\u5305\u9918\u984d\u4e0d\u8db3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110005"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5009\u4f4d\u72c0\u614b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110006"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f30\u8a08\u8cc7\u7522\u7121\u6cd5\u5f4c\u88dc\u982d\u5bf8\u5dee\u984d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110007"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u7528\u9918\u984d\u4e0d\u8db3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110008"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55ae\u5df2\u5b8c\u6210\u6216\u53d6\u6d88\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u505c\u6b62\u8a02\u55ae\u7684\u6578\u91cf\u8d85\u904e\u4e86\u5141\u8a31\u7684\u6700\u5927\u9650\u5236\u3002 \u60a8\u53ef\u4ee5\u5f9e\u6211\u5011\u7684OpenAPI\u6a94\u6848\u4e2d\u627e\u5230\u53c3\u6537\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55ae\u5df2\u53d6\u6d88")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110011"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u8abf\u6574\u5c07\u7acb\u5373\u89f8\u767c\u6e05\u7b97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110012"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u7528\u9918\u984d\u4e0d\u8db3\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110013"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u98a8\u96aa\u9650\u5236\u7d1a\u5225\uff0c\u7121\u6cd5\u8a2d\u5b9a\u6760\u6746\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110014"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u7528\u9918\u984d\u4e0d\u8db3\uff0c\u7121\u6cd5\u6dfb\u52a0\u984d\u5916\u4fdd\u8b49\u91d1\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110015"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a72\u5009\u4f4d\u8655\u65bc\u5168\u5009\u4fdd\u8b49\u91d1\u6a21\u5f0f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110016"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8acb\u6c42\u7684\u5408\u7d04\u6578\u91cf\u8d85\u904e\u4e86\u98a8\u96aa\u9650\u984d\uff0c\u8acb\u5728\u91cd\u8a66\u4e4b\u524d\u8abf\u6574\u98a8\u96aa\u9650\u984d\u7d1a\u5225")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110017"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u6d88\u5339\u914dReduceOnly\u898f\u5247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110018"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6236id\u975e\u6cd5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110019"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55aeid\u975e\u6cd5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110020"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u5141\u8a31\u6709\u8d85\u904e500\u500b\u6d3b\u52d5\u8a02\u55ae\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110021"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u672a\u5e73\u5009\uff0c\u4e0d\u5141\u8a31\u8d85\u904e\u6301\u5009\u9650\u984d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110022"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6578\u91cf\u5df2\u53d7\u5230\u9650\u5236\uff0c\u7121\u6cd5\u4fee\u6539\u8a02\u55ae\u4ee5\u65b0\u589e\u6578\u91cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110023"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u73fe\u6642\u4f60\u53ea\u80fd\u51cf\u5c11\u4f60\u5728\u9019\u4efd\u5408\u7d04\u4e0a\u7684\u982d\u5bf8\u3002 \u8acb\u67e5\u770b\u6211\u5011\u7684\u516c\u544a\u6216\u806f\u7cfb\u5ba2\u670d\u77ad\u89e3\u8a73\u60c5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u6709\u4e00\u500b\u6301\u5009\uff0c\u56e0\u6b64\u7121\u6cd5\u5207\u63db\u4f4d\u7f6e\u6a21\u5f0f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110025"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5009\u4f4d\u6a21\u5f0f\u5c1a\u672a\u4fee\u6539\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110026"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5168\u5009/\u9010\u5009\u6a21\u5f0f\u5c1a\u672a\u4fee\u6539\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110027"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fdd\u8b49\u91d1\u5c1a\u672a\u4fee\u6539\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110028"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u5df2\u6709\u672a\u7d50\u8a02\u55ae\uff0c\u56e0\u6b64\u7121\u6cd5\u5207\u63db\u5009\u4f4d\u6a21\u5f0f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110029"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u7b26\u865f\u4e0d\u652f\u6301\u5c0d\u6c96\u6a21\u5f0f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110030"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55aeID\u91cd\u8907")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110031"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u5b58\u5728\u98a8\u96aa\u9650\u984d\u8cc7\u8a0a\uff0c\u8acb\u6aa2\u67e5\u98a8\u96aa\u9650\u984d\u898f\u5247\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110032"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55ae\u4e0d\u5408\u6cd5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110033"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6c92\u6709\u672a\u5e73\u5009\u982d\u5bf8\uff0c\u60a8\u7121\u6cd5\u8a2d\u5b9a\u4fdd\u8b49\u91d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110034"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6c92\u6709\u6de8\u982d\u5bf8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110035"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6e05\u7b97\u524d\u672a\u5b8c\u6210\u8a02\u55ae\u53d6\u6d88")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110036"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u4ea4\u53c9\u4fdd\u8b49\u91d1\u6a21\u5f0f\uff0c\u60a8\u4e0d\u5141\u8a31\u66f4\u6539\u6760\u6746\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110037"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6236\u8a2d\u7f6e\u6e05\u55ae\u6c92\u6709\u6b64\u4ea4\u6613\u5c0d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110038"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u6295\u8cc7\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\uff0c\u60a8\u4e0d\u5141\u8a31\u66f4\u6539\u6760\u6746\u7387\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110039"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7dad\u8b77\u4fdd\u8b49\u91d1\u7387\u904e\u9ad8\u3002 \u9019\u53ef\u80fd\u5f15\u767c\u6e05\u7b97\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55ae\u5c07\u89f8\u767c\u5f37\u5236\u6e05\u7b97\uff0c\u8acb\u91cd\u65b0\u63d0\u4ea4\u8a02\u55ae\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110041"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7576\u5b58\u5728\u5009\u4f4d\u6216maker\u8a02\u55ae\u6642\uff0c\u4e0d\u5141\u8a31\u8df3\u904e\u6e05\u7b97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110043"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a2d\u5b9a\u6760\u6746\u5c1a\u672a\u4fee\u6539\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110044"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u7528\u4fdd\u8b49\u91d1\u4e0d\u8db3\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110045"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9322\u5305\u9918\u984d\u4e0d\u8db3\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110046"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u8abf\u6574\u5c07\u7acb\u5373\u89f8\u767c\u6e05\u7b97\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110047"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u53ef\u7528\u4fdd\u8b49\u91d1\u4e0d\u8db3\uff0c\u7121\u6cd5\u8abf\u6574\u98a8\u96aa\u9650\u984d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110048"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u7576\u524d/\u9810\u671f\u982d\u5bf8\u503c\u8d85\u904e\u4fee\u8a02\u5f8c\u7684\u98a8\u96aa\u9650\u984d\uff0c\u56e0\u6b64\u7121\u6cd5\u8abf\u6574\u98a8\u96aa\u9650\u984d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110049"),(0,n.kt)("td",{parentName:"tr",align:"left"},"tick note\u53ea\u80fd\u662f\u6578\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110050"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7121\u6548\u7684\u5e63\u7a2e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110051"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6236\u7684\u53ef\u7528\u9918\u984d\u4e0d\u80fd\u8986\u84cb\u7576\u524d\u5e02\u5834\u7684\u6700\u4f4e\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110052"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u7684\u53ef\u7528\u9918\u984d\u4e0d\u8db3\u4ee5\u8a2d\u5b9a\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110053"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6236\u53ef\u7528\u9918\u984d\u4e0d\u80fd\u8986\u84cb\u7576\u524d\u5e02\u5834\u50f9\u683c\u548c\u4e0a\u9650\u50f9\u683c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110054"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u5009\u4f4d\u81f3\u5c11\u6709\u4e00\u500b\u7372\u5229\u9023\u7d50\u8a02\u55ae\uff0c\u56e0\u6b64\u7121\u6cd5\u5207\u63db\u7372\u5229\u548c\u6b62\u640d\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110055"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u5009\u4f4d\u81f3\u5c11\u6709\u4e00\u500b\u6b62\u640d\u9023\u7d50\u8a02\u55ae\uff0c\u56e0\u6b64\u7121\u6cd5\u5207\u63db\u7372\u5229\u548c\u6b62\u640d\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110056"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6b64\u5009\u4f4d\u81f3\u5c11\u6709\u4e00\u500b\u5c3e\u96a8\u6b62\u640d\u9023\u7d50\u8a02\u55ae\uff0c\u56e0\u6b64\u7121\u6cd5\u5207\u63db\u7372\u5229\u548c\u6b62\u640d\u6a21\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110057"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u689d\u4ef6\u8a02\u55ae\u6216\u9650\u5236\u8a02\u55ae\u5305\u542bTP/SL\u76f8\u95dc\u53c3\u6578")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110058"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u5269\u9918\u5009\u4f4d\u5927\u5c0f\u4e0d\u8db3\uff0c\u60a8\u7121\u6cd5\u8a2d\u5b9a\u7372\u5229\u548c\u6b62\u640d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110059"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u5141\u8a31\u4fee\u6539\u90e8\u5206\u586b\u5beb\u7684\u672a\u7d50\u8a02\u55ae\u7684TP/SL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110060"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5728\u5b8c\u5168TP/SL\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u5141\u8a31\u4fee\u6539TP/SL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110061"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u90e8\u5206tpSlMode\u4e0b\u4e0d\u5141\u8a31\u6709\u8d85\u904e20\u500bTP/SL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110062"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u627e\u5230\u8a72\u6a5f\u6784\u7684MMP\u8cc7\u8a0a\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110063"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7d50\u7b97\u6b63\u5728\u9032\u884c\u4e2d\uff01 \uff5b\uff5bkey0\uff5d\uff5d\u4e0d\u53ef\u7528\u65bc\u4ea4\u6613\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110064"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u6539\u5f8c\u7684\u5951\u7ea6\u6578\u91cf\u4e0d\u80fd\u5c0f\u65bc\u6216\u7b49\u65bc\u6210\u4ea4\u7684\u6578\u91cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110066"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u73fe\u6642\u4e0d\u5141\u8a31\u4ea4\u6613\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110068"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u5141\u8a31\u6760\u6746\u4ea4\u6613\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110069"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6a5f\u69cb\u501f\u8cb8\u5ba2\u6236\u4e0d\u5f97\u4ea4\u6613\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110070"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ETP\u5408\u7d04\u4e0d\u80fd\u4ea4\u6613\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110071"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u62b1\u6b49\uff0c\u6211\u5011\u6b63\u5728\u4fee\u6539\u7d71\u4e00\u4fdd\u8b49\u91d1\u5e33\u6236\uff01 \u73fe\u6642\uff0c\u4e0d\u652f\u6301\u65b0\u7684\u5347\u7d1a\u3002 \u5982\u679c\u60a8\u6709\u4efb\u4f55\u554f\u984c\uff0c\u8acb\u806f\u7e6b\u6211\u5011\u768424/7\u5ba2\u6236\u652f\u63f4\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110072"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OrderLinkedID \u4e0d\u80fd\u91cd\u8907")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110073"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a2d\u7f6e\u4fdd\u8b49\u91d1\u6a21\u5f0f\u5931\u6557. \u8acb\u6aa2\u67e5\u97ff\u61c9\u88e1\u7684\u5177\u9ad4\u539f\u56e0\u5167\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110075"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RiskId\u6c92\u6709\u4fee\u6539")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110076"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u50c5\u9010\u5009\u4fdd\u8b49\u91d1\u4e0b\u652f\u6301\u81ea\u52d5\u6dfb\u52a0\u4fdd\u8b49\u91d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110077"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7d44\u5408\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110078"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7121\u6cd5\u6e1b\u5c11\u904e\u591a\u7684\u4fdd\u8b49\u91d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"110079"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8a02\u55ae\u6b63\u5728\u8655\u7406\u4e2d, \u8acb\u7a0d\u5f8c\u518d\u8a66")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3100197"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7531\u65bc\u5347\u7d1aUTA\u4e2d, \u7528\u6236\u66ab\u6642\u88ab\u5c01\u7981")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3200403"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9010\u5009\u4fdd\u8b49\u91d1\u6a21\u5f0f\u4e0b\u7121\u6cd5\u9032\u884c\u6b64\u7522\u54c1\u4ea4\u6613")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3400208"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u6709\u672a\u95dc\u9589\u7684\u96d9\u5411\u6301\u5009\u6216\u9010\u5009\u6a21\u5f0f\u4e0b\u7684USDT\u6c38\u7e8c\u5009\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3400209"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6709USDT\u6c38\u7e8c\u5009\u4f4d\u6642\uff0c\u5c0f\u6642\u6574\u9ede\u7684\u524d\u5f8c10\u5206\u9418\u7981\u6b62\u5347\u7d1a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3400210"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u5408\u7d04\u5e33\u6236\u7576\u524d\u98a8\u96aa\u7387\u904e\u9ad8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3400211"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5347\u7d1a\u5f8c\uff0c\u5e33\u6236\u98a8\u96aa\u7387\u904e\u9ad8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3400054"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u6709\u672a\u53d6\u6d88\u7684USDT\u6c38\u7e8c\u639b\u55ae")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3400214"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7cfb\u7d71\u8655\u7406\u7570\u5e38\uff0c\u8acb\u7a0d\u5019\u518d\u8a66")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3400071"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u60a8\u672a\u9054\u5230\u5e33\u6236\u5347\u7d1a\u7684\u8cc7\u7522\u8981\u6c42\uff0c\u7121\u6cd5\u5b8c\u6210\u5347\u7d1a")))))}g.isMDXComponent=!0}}]);