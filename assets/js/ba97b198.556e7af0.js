"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[5836],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(f,l(l({ref:e},m),{},{components:n})):a.createElement(f,l({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Get Coin Info",sidebar_label:"Get Coin Info",sidebar_position:4},l=void 0,o={unversionedId:"v3/account/coin-info",id:"v3/account/coin-info",title:"Get Coin Info",description:"Query coin information, including chain information, withdraw and deposit status.",source:"@site/docs/v3/account/coin-info.mdx",sourceDirName:"v3/account",slug:"/v3/account/coin-info",permalink:"/docs-tes/v3/account/coin-info",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Get Coin Info",sidebar_label:"Get Coin Info",sidebar_position:4},sidebar:"v3SideBar",previous:{title:"Get Internal Transfer Records",permalink:"/docs-tes/v3/account/inter-transfer-list"},next:{title:"Withdraw",permalink:"/docs-tes/v3/account/withdraw"}},p={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Query coin information, including chain information, withdraw and deposit status."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/private/v1/asset/coin/query-info")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin")))),(0,r.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rows"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"coin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"coin name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> accuracy"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Precision Supported by Coins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> deposit_chains"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object, Chain supported by deposit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> chain_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"chain name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> can_deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Can the coin chain be recharged: 0- paused 1- normal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> deposit_confirmation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Recharge and account confirmation number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> withdraw_chains"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object, Chain supported by withdrawal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> chain"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> chain_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"chain name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> can_withdraw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Can the coin chain withdraw coins: 0- paused 1- normal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> withdraw_min"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum withdrawal quantity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> withdraw_fee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Withdrawal fees")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'       def your_method(apiKey, secretKey):\n           timestamp = int(time.time() * 10 ** 3)\n           url = \'https://openapi-testnet.zoomex.com/private/v1/asset/coin/query-info\'\n           method = "GET"\n           params = {\n               "api_key": apiKey,\n               "timestamp": str(timestamp),\n               "recv_window": "5000",\n               "coin": "USDT",\n           }\n           param_str = \'\'\n           for key in sorted(params.keys()):\n               v = params[key]\n               if isinstance(params[key], bool):\n                   if params[key]:\n                       v = \'true\'\n                   else:\n                       v = \'false\'\n               param_str += key + \'=\' + v + \'&\'\n           param_str = param_str[:-1]\n           hash = hmac.new(secretKey, param_str.encode("utf-8"), hashlib.sha256)\n           signature = hash.hexdigest()\n           sign_real = {\n               "sign": signature\n           }\n           param_str = quote_plus(param_str, safe="=&")\n           full_param_str = f"{param_str}&sign={sign_real[\'sign\']}"\n           urllib3.disable_warnings()\n           s = requests.session()\n           s.keep_alive = False\n           response = requests.request(method, f"{url}?{full_param_str}", verify=False)\n\n       def main():\n           apiKey = "Your key"\n           secret = "Your secret"\n           your_method(apiKey, secret)\n\n')),(0,r.kt)("h3",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "ext_code": "",\n    "result": {\n        "rows": [\n            {\n                "coin": "USDT",\n                "coin_name": "Tether USDT",\n                "accuracy": 4,\n                "deposit_chains": [\n                    {\n                        "chain": "ETH",\n                        "chain_name": "ERC20",\n                        "can_deposit": 1,\n                        "deposit_min": "0.000011",\n                        "deposit_confirmation": 1\n                    },\n                    {\n                        "chain": "TRX",\n                        "chain_name": "TRC20",\n                        "can_deposit": 1,\n                        "deposit_min": "0.00001122",\n                        "deposit_confirmation": 1\n                    }\n                ],\n                "withdraw_chains": [\n                    {\n                        "chain": "ETH",\n                        "chain_name": "ERC20",\n                        "can_withdraw": 1,\n                        "withdraw_min": "20",\n                        "withdraw_fee": "11"\n                    },\n                    {\n                        "chain": "TRX",\n                        "chain_name": "TRC20",\n                        "can_withdraw": 1,\n                        "withdraw_min": "10",\n                        "withdraw_fee": "1"\n                    }\n                ]\n            }\n        ]\n    },\n    "ext_info": null,\n    "time_now": 1718353508140\n}\n')))}c.isMDXComponent=!0}}]);