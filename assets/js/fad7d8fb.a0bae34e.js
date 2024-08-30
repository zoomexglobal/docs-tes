"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[8659],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},o="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),o=m(r),u=n,k=o["".concat(p,".").concat(u)]||o[u]||f[u]||l;return r?a.createElement(k,s(s({ref:e},d),{},{components:r})):a.createElement(k,s({ref:e},d))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,s=new Array(l);s[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[o]="string"==typeof t?t:n,s[1]=i;for(var m=2;m<l;m++)s[m]=r[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},731:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const l={title:"Get Internal Transfer Records",sidebar_label:"Get Internal Transfer Records",sidebar_position:3},s=void 0,i={unversionedId:"v3/asset/transfer-list",id:"v3/asset/transfer-list",title:"Get Internal Transfer Records",description:"HTTP Request",source:"@site/docs/v3/asset/transfer-list.mdx",sourceDirName:"v3/asset",slug:"/v3/asset/transfer-list",permalink:"/docs-tes/v3/asset/transfer-list",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Get Internal Transfer Records",sidebar_label:"Get Internal Transfer Records",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"Create Subaccount Transfer",permalink:"/docs-tes/v3/asset/sub-member-transfer"},next:{title:"Get Sub UID",permalink:"/docs-tes/v3/asset/sub-uid-list"}},p={},m=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:m},o="wrapper";function f(t){let{components:e,...r}=t;return(0,n.kt)(o,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"GET ",(0,n.kt)("inlineCode",{parentName:"p"},"/private/v1/asset/sub-member/transfer/list")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transfer_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer result ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Coin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../asset/enum#transferstatus-status"},"status")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"start_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"end_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../asset/enum#assetdirection-direction"},"direction")),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Pagination")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},'cursor information: used for pagination. Default value: ""')))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"Object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> transfer_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transferred coin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> amount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transferred amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> user_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> sub_user_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Sub Account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer created timestamp (ms)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../asset/enum#transferstatus-status"},"status")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Transfer status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"> ",(0,n.kt)("a",{parentName:"td",href:"../asset/enum#transfertype-type"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"td"},"cursor")," request parameter")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"GET /private/v1/asset/sub-member/transfer/list?transfer_id=d5c3f1e3-097c-4532-9f4d-3b2990bdcd85 HTTP/1.1\nX-BAPI-API-KEY: 0b2XYJpi8bi9tZPhft\nX-BAPI-SIGN: 221ba23854643b451d49d0e56d4bdf7a3192c2e9b9dea8fbddb07e538b0fbf72\nX-BAPI-TIMESTAMP: 1724600673292\nX-BAPI-RECV-WINDOW: 1000000\nHost: openapi-testnet.zoomex.com\n")),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "result": {\n        "list": [\n            {\n                "transfer_id": "d5c3f1e3-097c-4532-9f4d-3b2990bdcd85",\n                "coin": "USDT",\n                "amount": "10",\n                "user_id": 100500689,\n                "sub_user_id": 103741450,\n                "timestamp": "1724600351",\n                "status": "SUCCESS",\n                "type": "IN"\n            }\n        ],\n        "cursor": "eyJtaW5JRCI6NjEwMzExLCJtYXhJRCI6NjEwMzExfQ=="\n    }\n}\n')))}f.isMDXComponent=!0}}]);