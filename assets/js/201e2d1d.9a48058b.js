"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7834],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,y=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return r?n.createElement(y,i(i({ref:t},m),{},{components:r})):n.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const s={title:"Get all direct customers information",sidebar_label:"Get all direct customers information",sidebar_position:5},i=void 0,o={unversionedId:"v3/broker/query-direct-user-list",id:"v3/broker/query-direct-user-list",title:"Get all direct customers information",description:"API rate limit: 5 req / sec",source:"@site/docs/v3/broker/query-direct-user-list.mdx",sourceDirName:"v3/broker",slug:"/v3/broker/query-direct-user-list",permalink:"/docs-tes/v3/broker/query-direct-user-list",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get all direct customers information",sidebar_label:"Get all direct customers information",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"Get direct customers information",permalink:"/docs-tes/v3/broker/member-info"},next:{title:"Connect",permalink:"/docs-tes/v3/ws/connect"}},l={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"API rate limit: 5 req / sec")),(0,a.yg)("h3",{id:"http-request"},"HTTP Request"),(0,a.yg)("p",null,"GET ",(0,a.yg)("inlineCode",{parentName:"p"},"/private/v1/broker/query-direct-user-list")),(0,a.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"begin"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The start time (UTC) seconds of becoming a direct customer for query")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"end"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The end time (UTC) seconds of becoming a direct customer for query")))),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"user_list"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Array"),(0,a.yg)("td",{parentName:"tr",align:null},"List of user id")))),(0,a.yg)("h3",{id:"request-example"},"Request Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"import time\nimport hmac\nimport hashlib\nimport requests\nimport urllib.parse\n\ndef create_request(apiKey, secret, params):\n    url = 'https://openapi-testnet.zoomex.com/private/v1/broker/query-direct-user-list'\n    timestamp = int(time.time() * 1000)\n    recv_window = 1000000\n\n    params['api_key'] = apiKey\n    params['timestamp'] = timestamp\n    params['recv_window'] = recv_window\n\n    ordered_params = '&'.join([f\"{key}={params[key]}\" for key in sorted(params.keys())])\n\n    signature = hmac.new(secret.encode('utf-8'), ordered_params.encode('utf-8'), hashlib.sha256).hexdigest()\n\n    params['sign'] = signature\n\n    headers = {\n        'X-BAPI-API-KEY': apiKey,\n        'X-BAPI-SIGN': signature,\n        'X-BAPI-TIMESTAMP': str(timestamp),\n        'X-BAPI-RECV-WINDOW': str(recv_window)\n    }\n\n    query_string = urllib.parse.urlencode(params)\n    full_url = f\"{url}?{query_string}\"\n\n    response = requests.get(full_url, headers=headers)\n\n    print(\"response status:\", response.status_code)\n    print(\"response info:\", response.json())\n    print(\"response time:\", response.elapsed.total_seconds())\n\napiKey = 'your key'\nsecret = 'your secret'\nparams = {\n    \"begin\": 1706802672,\n    \"end\": 1722950422,\n}\n\ncreate_request(apiKey, secret, params)\n")),(0,a.yg)("h3",{id:"response-example"},"Response Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "ext_code": "",\n    "result": {\n        "user_list": [\n            "101479471"\n        ]\n    },\n    "ext_info": null,\n    "time_now": 1722950430767\n}\n')))}c.isMDXComponent=!0}}]);