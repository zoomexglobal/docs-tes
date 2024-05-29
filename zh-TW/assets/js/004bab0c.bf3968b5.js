"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[3578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),l=n(6010),o=n(2466),s=n(6550),u=n(1980),i=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,i]=b({queryString:n,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),k(e)}),[i,k,l]),tabValues:l}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==s&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},8795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),o=n(5162);const s={title:"\u8a02\u95b1WebSocket",sidebar_label:"\u8a02\u95b1WebSocket",slug:"/v3/ws/connect"},u=void 0,i={unversionedId:"v3/websocket/wss-authentication",id:"v3/websocket/wss-authentication",title:"\u8a02\u95b1WebSocket",description:"WebSocket\u516c\u5171\u983b\u9053:",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/websocket/wss-authentication.mdx",sourceDirName:"v3/websocket",slug:"/v3/ws/connect",permalink:"/docs-tes/zh-TW/v3/ws/connect",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8a02\u95b1WebSocket",sidebar_label:"\u8a02\u95b1WebSocket",slug:"/v3/ws/connect"},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5283\u8f49\u7d00\u9304 (\u55ae\u5e33\u865f\u5167)",permalink:"/docs-tes/zh-TW/v3/account/inter-transfer-list"},next:{title:"\u6df1\u5ea6",permalink:"/docs-tes/zh-TW/v3/websocket/public/orderbook"}},c={},p=[{value:"\u9452\u6b0a",id:"\u9452\u6b0a",level:2},{value:"IP\u9650\u983b",id:"ip\u9650\u983b",level:2},{value:"\u516c\u6709\u983b\u9053\u8a02\u95b1\u53c3\u6578\u9650\u5236",id:"\u516c\u6709\u983b\u9053\u8a02\u95b1\u53c3\u6578\u9650\u5236",level:2},{value:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3",id:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3",level:2},{value:"\u5982\u4f55\u8a02\u95b1topic",id:"\u5982\u4f55\u8a02\u95b1topic",level:2},{value:"\u7406\u89e3Websocket\u88e1\u7684args",id:"\u7406\u89e3websocket\u88e1\u7684args",level:3},{value:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1",id:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1",level:3},{value:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9",id:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WebSocket\u516c\u5171\u983b\u9053:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u7db2:"),(0,a.kt)("br",null),"\nUSDT\u6c38\u7e8c: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/public/linear"),(0,a.kt)("br",null),"\n\u53cd\u5411\u5408\u7d04: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/public/inverse"),(0,a.kt)("br",null))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6e2c\u8a66\u7db2:"),(0,a.kt)("br",null),"\nUSDT\u6c38\u7e8c: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/public/linear"),(0,a.kt)("br",null),"\n\u53cd\u5411\u5408\u7d04: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/public/inverse"),(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WebSocket\u79c1\u6709\u983b\u9053:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u7db2:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/private"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6e2c\u8a66\u7db2:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/private")))),(0,a.kt)("h2",{id:"\u9452\u6b0a"},"\u9452\u6b0a"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("b",null,"\u516c\u5171\u983b\u9053"),"\u4e0d\u9700\u8981\u9452\u6b0a\uff0c\u4ee5\u4e0b\u90e8\u5206\u50c5\u9069\u7528\u65bc",(0,a.kt)("b",null,"\u79c1\u6709\u983b\u9053"),"\u7684\u8a02\u95b1\u3002"),(0,a.kt)("p",null,"\u69cb\u5efa\u9023\u63a5\u6642\uff0c\u5275\u5efa\u9452\u6b0a\u8acb\u6c42\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // \u53ef\u9078\u9805\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, //\u904e\u671f\u6642\u9593\u61c9\u7576\u5927\u65bc\u7576\u524d\u6642\u9593\u6233\n        "singature"\n    ]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9452\u6b0a\u6210\u529f\u7684\u97ff\u61c9\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "auth",\n    "conn_id": "cejreaspqfh3sjdnldmg-p"\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7c3d\u540d\u751f\u6210\u7684\u793a\u4f8b\u5982\u4e0b\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import hmac\nimport json\nimport logging\nimport time\n\n\ndef send_auth():\n    key = 'XXXXXXXX'\n    secret = 'XXXXXXXX'\n    expires = int((time.time() + 1000) * 1000)\n    _val = f'GET/realtime{expires}'\n    print(_val)\n    signature = str(hmac.new(\n        bytes(secret, 'utf-8'),\n        bytes(_val, 'utf-8'), digestmod='sha256'\n    ).hexdigest())\n    print(json.dumps({\"op\": \"auth\", \"args\": [key, expires, signature]}))\n\n\nif __name__ == \"__main__\":\n    send_auth()\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u7531\u65bc\u7db2\u7d61\u7684\u8907\u96dc\u6027\uff0c\u60a8\u53ef\u80fd\u96a8\u6642\u9047\u5230\u65b7\u9023\u3002\u8acb\u53c3\u8003\u4ee5\u4e0b\u5efa\u8b70\u78ba\u4fdd\u60a8\u80fd\u5373\u6642\u63a5\u6536\u5230\u63a8\u9001\uff1a"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u901a\u904e\u767c\u9001",(0,a.kt)("a",{parentName:"li",href:"connect#%E5%A6%82%E4%BD%95%E7%99%BC%E9%80%81%E5%BF%83%E8%B7%B3"},"\u5fc3\u8df3"),"\u4f86\u7dad\u6301\u9023\u63a5;"),(0,a.kt)("li",{parentName:"ol"},"\u9047\u5230\u65b7\u9023\u6642\uff0c\u7acb\u5373\u91cd\u65b0\u9023\u63a5\u3002"))),(0,a.kt)("h2",{id:"ip\u9650\u983b"},"IP\u9650\u983b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5617\u8a66\u983b\u7e41\u5730\u69cb\u5efa\u9023\u63a5\u8207\u65b7\u958b\u9023\u63a5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u57285\u5206\u9418\u5167\u69cb\u5efa\u8d85\u904e500\u500b\u9023\u63a5\u3002")),(0,a.kt)("h2",{id:"\u516c\u6709\u983b\u9053\u8a02\u95b1\u53c3\u6578\u9650\u5236"},"\u516c\u6709\u983b\u9053\u8a02\u95b1\u53c3\u6578\u9650\u5236"),(0,a.kt)("p",null,"args\u88e1\u7684\u6578\u7d44\u5143\u7d20\u9577\u5ea6\u7e3d\u548c\u4e0d\u80fd\u8d85\u904e21,000\u500b\u5b57\u7b26"),(0,a.kt)("h2",{id:"\u5982\u4f55\u767c\u9001\u5fc3\u8df3"},"\u5982\u4f55\u767c\u9001\u5fc3\u8df3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// req_id is a customised id, which is optional\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u516c\u5171\u983b\u9053\u63a5\u6536\u5230pong\u7684\u97ff\u61c9\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "465772b1-7630-4fdc-a492-e003e6f0f260",\n    "req_id": "",\n    "op": "ping"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u79c1\u6709\u983b\u9053\u63a5\u6536\u5230pong\u7684\u97ff\u61c9\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test",\n    "op": "pong",\n    "args": [\n        "1675418560633"\n    ],\n    "conn_id": "cfcb4ocsvfriu23r3er0-1b"\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u70ba\u4e86\u7dad\u6301\u9023\u63a5\uff0c\u6211\u5011\u63a8\u85a6\u60a8\u6bcf",(0,a.kt)("b",null,"20"),"\u79d2\u767c\u9001\u4e00\u6b21\u5fc3\u8df3\u3002")),(0,a.kt)("h2",{id:"\u5982\u4f55\u8a02\u95b1topic"},"\u5982\u4f55\u8a02\u95b1topic"),(0,a.kt)("h3",{id:"\u7406\u89e3websocket\u88e1\u7684args"},"\u7406\u89e3Websocket\u88e1\u7684args"),(0,a.kt)("p",null,"\u901a\u904e\u50b3\u5165args\u4f86\u8a02\u95b1\u6307\u5b9atopic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// \u8a02\u95b11\u6a94\u7684orderbook\n{\n    "req_id": "test", // \u53ef\u9078\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT"\n    ]\n}\n')),(0,a.kt)("p",null,"\u901a\u904e\u9017\u865f\u9694\u958b\uff0c\u53ef\u4ee5\u540c\u6642\u8a02\u95b1\u591a\u500btopic\u6216\u8005\u591a\u500bsymbol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test", // \u53ef\u9078\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT",\n        "publicTrade.BTCUSDT",\n        "orderbook.1.ETHUSDT"\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1"},"\u7406\u89e3\u5982\u4f55\u53d6\u6d88\u8a02\u95b1"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u904e\u767c\u9001\u8acb\u6c42\u4f86\u52d5\u614b\u5730\u505c\u6b62\u8a02\u95b1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "unsubscribe",\n    "args": [\n        "publicTrade.ETHUSD"\n    ],\n    "req_id": "customised_id"\n}\n')),(0,a.kt)("h2",{id:"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9"},"\u7406\u89e3\u8a02\u95b1\u7684\u97ff\u61c9"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8a02\u95b1\u6210\u529f\u5f8c\u7684\u97ff\u61c9\u793a\u4f8b")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"private",label:"\u79c1\u6709\u983b\u9053",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "subscribe",\n    "conn_id": "cejreassvfrsfvb9v1a0-2m"\n}\n'))),(0,a.kt)(o.Z,{value:"public-future",label:"\u516c\u6709\u671f\u8ca8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "3cd84cb1-4d06-4a05-930a-2efe5fc70f0f",\n    "req_id": "",\n    "op": "subscribe"\n}\n')))))}b.isMDXComponent=!0}}]);