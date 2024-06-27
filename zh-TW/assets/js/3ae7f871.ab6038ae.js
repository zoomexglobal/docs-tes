"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[5466],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(o,".").concat(u)]||m[u]||k[u]||l;return r?n.createElement(g,i(i({ref:e},d),{},{components:r})):n.createElement(g,i({ref:e},d))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9487:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u7684\u5145\u503c\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u7684\u5145\u503c\u7d00\u9304",sidebar_position:3},i=void 0,p={unversionedId:"v3/broker/sub-deposit-record",id:"v3/broker/sub-deposit-record",title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u7684\u5145\u503c\u7d00\u9304",description:"API\u983b\u7387: 300\u6b21/\u5206",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/broker/sub-deposit-record.mdx",sourceDirName:"v3/broker",slug:"/v3/broker/sub-deposit-record",permalink:"/docs-tes/zh-TW/v3/broker/sub-deposit-record",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u7684\u5145\u503c\u7d00\u9304",sidebar_label:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u7684\u5145\u503c\u7d00\u9304",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u8fd4\u4f63\u4fe1\u606f",permalink:"/docs-tes/zh-TW/v3/broker/exchange-earning"},next:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u8a0a\u606f",permalink:"/docs-tes/zh-TW/v3/broker/member-info"}},o={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:s},m="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API\u983b\u7387: 300\u6b21/\u5206")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/private/v1/broker/asset/query-member-deposit-record")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memberId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76f4\u5ba2UID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\u6233 (\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\u6233 (\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"50"),"]",". \u9ed8\u8a8d: ",(0,a.kt)("inlineCode",{parentName:"td"},"20"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"rows"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> chain"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u93c8\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u91d1\u984d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> tx_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613Id. \u5145\u503c\u5931\u6557\u6216\u53d6\u6d88\u5145\u503c\u6642\u70ba\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u72c0\u614b:0-\u5145\u503c\u4e2d 1-\u5145\u503c\u6210\u529f 2-\u5145\u503c\u5931\u8d25")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> to_address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u7684\u76ee\u6a19\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> tag"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5145\u503c\u76ee\u6a19\u5730\u5740\u7684tag")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> success_at"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u5f8c\u66f4\u65b0\u6642\u9593")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> confirmations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u533a\u5757\u7684\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> tx_index"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e8f\u5217\u53f7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> block_hash"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u93c8\u4e0a\u7684\u54c8\u5e0c\u6578")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'       def your_method(apiKey, secretKey):\n           timestamp = int(time.time() * 10 ** 3)\n           url = \'https://openapi-testnet.zoomex.com/private/v1/broker/asset/query-member-deposit-record\'\n           method = "GET"\n           params = {\n               "api_key": apiKey,\n               "timestamp": str(timestamp),\n               "recv_window": "5000",\n               "memberId": 101479471,\n           }\n           param_str = \'\'\n           for key in sorted(params.keys()):\n               v = params[key]\n               if isinstance(params[key], bool):\n                   if params[key]:\n                       v = \'true\'\n                   else:\n                       v = \'false\'\n               param_str += key + \'=\' + v + \'&\'\n           param_str = param_str[:-1]\n           hash = hmac.new(secretKey, param_str.encode("utf-8"), hashlib.sha256)\n           signature = hash.hexdigest()\n           sign_real = {\n               "sign": signature\n           }\n           param_str = quote_plus(param_str, safe="=&")\n           full_param_str = f"{param_str}&sign={sign_real[\'sign\']}"\n           urllib3.disable_warnings()\n           s = requests.session()\n           s.keep_alive = False\n           response = requests.request(method, f"{url}?{full_param_str}", verify=False)\n\n       def main():\n           apiKey = "Your key"\n           secret = "Your secret"\n           your_method(apiKey, secret)\n\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "ext_code": "",\n    "result": {\n        "rows": [\n            {\n                "coin": "USDT",\n                "chain": "ETH",\n                "amount": "10000",\n                "tx_id": "USDT-101479471-ETH-10000000000000-1",\n                "status": 1,\n                "to_address": "fake-address",\n                "tag": "101479471",\n                "success_at": "1718110423",\n                "confirmations": "10000",\n                "tx_index": "",\n                "block_hash": ""\n            },\n            {\n                "coin": "USDT",\n                "chain": "TRX",\n                "amount": "6666",\n                "tx_id": "faker-deposit-101479471-USDT-666600000000-9",\n                "status": 1,\n                "to_address": "fake-address",\n                "tag": "101479471",\n                "success_at": "1718088599",\n                "confirmations": "10000",\n                "tx_index": "",\n                "block_hash": ""\n            }\n        ],\n        "cursor": "eyJtaW5JZCI6MjM1NDcsIm1heElkIjoyMzU0OX0="\n    },\n    "ext_info": null,\n    "time_now": 1718159775406\n}\n')))}k.isMDXComponent=!0}}]);