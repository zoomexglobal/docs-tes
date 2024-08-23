"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4926],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const s={title:"Get Sub UID",sidebar_label:"Get Sub UID",sidebar_position:4},l=void 0,i={unversionedId:"v3/asset/sub-uid-list",id:"v3/asset/sub-uid-list",title:"Get Sub UID",description:"Query the sub UIDs under a main UID",source:"@site/docs/v3/asset/sub-uid-list.mdx",sourceDirName:"v3/asset",slug:"/v3/asset/sub-uid-list",permalink:"/docs-tes/v3/asset/sub-uid-list",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Get Sub UID",sidebar_label:"Get Sub UID",sidebar_position:4},sidebar:"v3SideBar",previous:{title:"Get Internal Transfer Records",permalink:"/docs-tes/v3/asset/transfer-list"},next:{title:"Enums Definitions",permalink:"/docs-tes/v3/asset/enum"}},o={},u=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Query the sub UIDs under a main UID"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Can query by the master UID's api key ",(0,a.yg)("strong",{parentName:"p"},"only"))),(0,a.yg)("h3",{id:"http-request"},"HTTP Request"),(0,a.yg)("p",null,"GET ",(0,a.yg)("inlineCode",{parentName:"p"},"/private/v1/asset/sub-member/member-ids")),(0,a.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"sub_user_id"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array","<","string",">"),(0,a.yg)("td",{parentName:"tr",align:null},"All sub UIDs under the main UID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"transferable_sub_ids"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array","<","string",">"),(0,a.yg)("td",{parentName:"tr",align:null},"All sub UIDs that have universal transfer enabled")))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"request-example"},"Request Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"GET /private/v1/asset/sub-member/member-ids?api_key=dVuOdOe0YxIzByQ8tV&sign=c8e474a329c4715bd7b1b80841fa49baf0ef2cbb8373fd731c5ed0181620400a&timestamp=1690947046394 HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1670988271299\nX-BAPI-RECV-WINDOW: 50000\n")),(0,a.yg)("h3",{id:"response-example"},"Response Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "sub_user_id": [\n      1524601,\n      1524613\n    ],\n    "transferable_sub_ids": []\n  },\n  "rate_limit": 1,\n  "rate_limit_status": 59,\n  "ext_code": "",\n  "time_now": 1690947047366,\n  "rate_limit_reset_ms": 1690947047366,\n  "ret_msg": "OK",\n  "ext_info": null,\n  "ret_code": 0\n}\n')))}c.isMDXComponent=!0}}]);