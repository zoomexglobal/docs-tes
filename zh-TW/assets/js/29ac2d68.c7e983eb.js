"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[7030],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(k,i(i({ref:e},d),{},{components:r})):n.createElement(k,i({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7791:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u67e5\u8be2\u4ee3\u7406\u5546\u76f4\u5ba2\u660e\u7ec6\u4fe1\u606f",sidebar_label:"\u67e5\u8be2\u4ee3\u7406\u5546\u76f4\u5ba2\u660e\u7ec6\u4fe1\u606f",sidebar_position:6},i=void 0,p={unversionedId:"v3/broker/query-direct-user-detail",id:"v3/broker/query-direct-user-detail",title:"\u67e5\u8be2\u4ee3\u7406\u5546\u76f4\u5ba2\u660e\u7ec6\u4fe1\u606f",description:"API\u983b\u7387: 5\u6b21/\u79d2",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/broker/query-direct-user-detail.mdx",sourceDirName:"v3/broker",slug:"/v3/broker/query-direct-user-detail",permalink:"/docs-tes/zh-TW/v3/broker/query-direct-user-detail",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u67e5\u8be2\u4ee3\u7406\u5546\u76f4\u5ba2\u660e\u7ec6\u4fe1\u606f",sidebar_label:"\u67e5\u8be2\u4ee3\u7406\u5546\u76f4\u5ba2\u660e\u7ec6\u4fe1\u606f",sidebar_position:6},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u5168\u90e8\u76f4\u5ba2\u8a0a\u606f",permalink:"/docs-tes/zh-TW/v3/broker/query-direct-user-list"},next:{title:"\u8a02\u95b1WebSocket",permalink:"/docs-tes/zh-TW/v3/ws/connect"}},o={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:s},m="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API\u983b\u7387: 5\u6b21/\u79d2")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/private/v1/broker/query-direct-user-detail")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"uid"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76f4\u5ba2UID\uff0c\u4e0d\u8f38\u5165\u6642\u8fd4\u56de\u8a72\u4ee3\u7406\u5546\u4e0b\u6240\u6709\u76f4\u5ba2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\uff0c\u683c\u5f0f\uff1aYYYY-MM-DD HH:MI:SS \u6ce8\u610f\uff1a\u958b\u59cb\u6642\u9593\u548c\u7d50\u675f\u6642\u9593\u8981\u9ebc\u90fd\u70ba\u7a7a\uff0c\u8981\u9ebc\u90fd\u4e0d\u70ba\u7a7a.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"end"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\uff0c\u683c\u5f0f\uff1aYYYY-MM-DD HH:MI:SS \u6ce8\u610f\uff1a\u958b\u59cb\u6642\u9593\u548c\u7d50\u675f\u6642\u9593\u8981\u9ebc\u90fd\u70ba\u7a7a\uff0c\u8981\u9ebc\u90fd\u4e0d\u70ba\u7a7a.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67fb\u8a62\u7684Coin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[1, 1000]",". \u9ed8\u8a8d: 200")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801\uff0c\u9996\u6b21\u8abf\u7528\u6642\u4e0d\u7528\u50b3")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"user_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76f4\u5ba2UID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"created_at"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a3b\u518a\u6642\u9593")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"rebate_rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u50ad\u6bd4\u4f8b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u6b3eCoin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"deposits"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7e3d\u5165\u91d1\uff08USDT\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"trading_amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7e3d\u4ea4\u6613\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"net_exec_fee"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6de8\u624b\u7e8c\u8cbb\uff08USDT\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"invited_code"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8acb\u78bc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vip_level"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"VIP\u7b49\u7d1a\uff0c\u5982\u679c\u6c92\u6709vip\u5247\u8fd4\u56de0\u7b49\u7d1a")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\nimport hmac\nimport hashlib\nimport requests\nimport urllib.parse\n\ndef create_request(apiKey, secret, params):\n    url = 'https://openapi-testnet.zoomex.com/private/v1/broker/query-direct-user-detail'\n    timestamp = int(time.time() * 1000)\n    recv_window = 1000000\n\n    params['api_key'] = apiKey\n    params['timestamp'] = timestamp\n    params['recv_window'] = recv_window\n\n    ordered_params = '&'.join([f\"{key}={params[key]}\" for key in sorted(params.keys())])\n\n    signature = hmac.new(secret.encode('utf-8'), ordered_params.encode('utf-8'), hashlib.sha256).hexdigest()\n\n    params['sign'] = signature\n\n    headers = {\n        'X-BAPI-API-KEY': apiKey,\n        'X-BAPI-SIGN': signature,\n        'X-BAPI-TIMESTAMP': str(timestamp),\n        'X-BAPI-RECV-WINDOW': str(recv_window)\n    }\n\n    query_string = urllib.parse.urlencode(params)\n    full_url = f\"{url}?{query_string}\"\n\n    response = requests.get(full_url, headers=headers)\n\n    print(\"response status:\", response.status_code)\n    print(\"response info:\", response.json())\n    print(\"response time:\", response.elapsed.total_seconds())\n\napiKey = 'your key'\nsecret = 'your secret'\nparams = {\n    \"uid\": 103920528,\n}\n\ncreate_request(apiKey, secret, params)\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "ext_code": "",\n    "result": {\n        "user_detail": [\n            {\n                "user_id": "103920528",\n                "created_at": "2024-11-08 12:39:44",\n                "deposits": "0",\n                "net_exec_fee": "0",\n                "rebate_rate": "25",\n                "vip_level": "VIP0",\n                "invited_code": "ZX900303",\n                "trading_amount": "0",\n                "coin": "USDT"\n            }\n        ],\n        "next_cursor": 1588\n    },\n    "ext_info": null,\n    "time_now": 1731113120877\n}\n')))}u.isMDXComponent=!0}}]);