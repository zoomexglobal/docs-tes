"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[2238],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8301:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u63d0\u73fe",sidebar_label:"\u63d0\u73fe",sidebar_position:5},i=void 0,o={unversionedId:"v3/account/withdraw",id:"v3/account/withdraw",title:"\u63d0\u73fe",description:"* \u78ba\u4fdd\u60a8\u5df2\u7d93\u5c07\u63d0\u73fe\u5730\u5740\u52a0\u5165\u5230\u5730\u5740\u7c3f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account/withdraw.mdx",sourceDirName:"v3/account",slug:"/v3/account/withdraw",permalink:"/docs-tes/zh-TW/v3/account/withdraw",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u63d0\u73fe",sidebar_label:"\u63d0\u73fe",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5e63\u7a2e\u4fe1\u606f",permalink:"/docs-tes/zh-TW/v3/account/coin-info"},next:{title:"\u67e5\u8a62\u63d0\u73fe\u7d00\u9304",permalink:"/docs-tes/zh-TW/v3/account/withdraw-record"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:s},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u78ba\u4fdd\u60a8\u5df2\u7d93\u5c07\u63d0\u73fe\u5730\u5740\u52a0\u5165\u5230\u5730\u5740\u7c3f"),(0,r.kt)("li",{parentName:"ul"},"\u50c5\u652f\u6301",(0,r.kt)("strong",{parentName:"li"},"\u6bcd\u5e33\u865f"),"\u7684API key"))),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"POST ",(0,r.kt)("inlineCode",{parentName:"p"},"/private/v1/asset/withdraw/create")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u93c8\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9322\u5305\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a19\u7c64 ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u82e5\u6dfb\u52a0\u5730\u5740\u6642\u6709\u586b\u5bebtag\uff0c\u5247\u8a72\u5b57\u6bb5",(0,r.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"),".")," ",(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),": \u5982\u679c\u93c8\u4e0d\u652f\u6301tag/memo\uff0c\u8acb\u79fb\u9664\u5730\u5740\u7c3f\u4e2d\u7684tag/memo\uff0c\u7136\u5f8c\u8abf\u7528\u63a5\u53e3\u6642\uff0c\u4e5f\u4e0d\u8981\u50b3tag\u5b57\u6bb5")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73fe\u91d1\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u7fa9ID, \u5168\u5c40\u552f\u4e00, \u7528\u65bc\u51aa\u7b49\u6821\u9a57",(0,r.kt)("li",null,"\u5b57\u6bcd(\u5340\u5206\u5927\u5c0f\u5beb)\u6578\u5b57\u7d44\u5408, \u53ef\u4ee5\u662f\u7d14\u5b57\u6bcd\u6216\u8005\u7d14\u6578\u5b57, \u9577\u5ea6\u57281-64\u5b57\u7b26\u4e4b\u9593"))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"withdraw_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73feId")))),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'       def your_method(apiKey, secretKey):\n           timestamp = int(time.time() * 10 ** 3)\n           url = \'https://openapi-testnet.zoomex.com/private/v1/asset/withdraw/create\'\n           method = "GET"\n           params = {\n               "api_key": apiKey,\n               "timestamp": str(timestamp),\n               "recv_window": "5000",\n               "coin": "USDT",\n           }\n           param_str = \'\'\n           for key in sorted(params.keys()):\n               v = params[key]\n               if isinstance(params[key], bool):\n                   if params[key]:\n                       v = \'true\'\n                   else:\n                       v = \'false\'\n               param_str += key + \'=\' + v + \'&\'\n           param_str = param_str[:-1]\n           hash = hmac.new(secretKey, param_str.encode("utf-8"), hashlib.sha256)\n           signature = hash.hexdigest()\n           sign_real = {\n               "sign": signature\n           }\n           param_str = quote_plus(param_str, safe="=&")\n           full_param_str = f"{param_str}&sign={sign_real[\'sign\']}"\n           urllib3.disable_warnings()\n           s = requests.session()\n           s.keep_alive = False\n           response = requests.request(method, f"{url}?{full_param_str}", verify=False)\n\n       def main():\n           apiKey = "Your key"\n           secret = "Your secret"\n           your_method(apiKey, secret)\n\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "withdraw_id": "10195"\n    },\n    "retExtInfo": {},\n    "time": 1672196571239\n}\n')))}u.isMDXComponent=!0}}]);