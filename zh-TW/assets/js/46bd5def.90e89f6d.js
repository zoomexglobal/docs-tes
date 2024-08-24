"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2289],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540),a=n(53);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(8168),a=n(6540),l=n(53),o=n(3104),i=n(6347),s=n(7485),u=n(1682),p=n(9466);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function g(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=g(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:n,groupId:r}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var b=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:g},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function h(e){const t=y(e);return a.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},a.createElement(N,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function k(e){const t=(0,b.A)();return a.createElement(h,(0,r.A)({key:String(t)},e))}},3219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(8168),a=(n(6540),n(5680)),l=n(1470),o=n(9365);const i={title:"\u6df1\u5ea6",sidebar_label:"\u6df1\u5ea6",sidebar_position:1},s=void 0,u={unversionedId:"v3/websocket/public/orderbook",id:"v3/websocket/public/orderbook",title:"\u6df1\u5ea6",description:"\u8a02\u95b1\u4e0d\u540c\u6df1\u5ea6\u7684\u63a8\u9001",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/websocket/public/orderbook.mdx",sourceDirName:"v3/websocket/public",slug:"/v3/websocket/public/orderbook",permalink:"/docs-tes/zh-TW/v3/websocket/public/orderbook",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6df1\u5ea6",sidebar_label:"\u6df1\u5ea6",sidebar_position:1},sidebar:"v3SideBar",previous:{title:"\u8a02\u95b1WebSocket",permalink:"/docs-tes/zh-TW/v3/ws/connect"},next:{title:"\u5e73\u53f0\u6210\u4ea4",permalink:"/docs-tes/zh-TW/v3/websocket/public/trade"}},p={},c=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8a02\u95b1\u793a\u4f8b",id:"\u8a02\u95b1\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],g={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u8a02\u95b1\u4e0d\u540c\u6df1\u5ea6\u7684\u63a8\u9001"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"\u8a02\u95b1\u6210\u529f\u5f8c\uff0c\u6703\u7acb\u5373\u5f97\u5230\u4e00\u500b\u7576\u524d\u5feb\u7167\u5305\u7684\u63a8\u9001\u6d88\u606f."),(0,a.yg)("li",{parentName:"ul"},"websocket\u5c07\u6703\u7e7c\u7e8c\u63a8\u9001\u9019\u4e9b\u589e\u91cf\u6578\u64da. \u6536\u5230snapshot\u7684\u5831\u6587\uff0c\u5c31\u9700\u8981\u91cd\u7f6e\u672c\u5730\u7684orderbook."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"snapshot"),"=\u5168\u91cforderbook, ",(0,a.yg)("inlineCode",{parentName:"li"},"delta"),"=\u589e\u91cforderbook"),(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u56e0\u70baZoomex\u670d\u52d9\u539f\u56e0\uff0c\u6703\u91cd\u65b0\u767c\u9001snapshot\u5831\u6587\uff0c\u8a72\u5831\u6587\u5df2\u4fdd\u8b49\u662f\u6700\u65b0\u4e14\u6e96\u78ba\u7684."))),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"USDT\u6c38\u7e8c & \u53cd\u5411\u5408\u7d04 1\u6a94\u6578\u64da: \u82e53\u79d2\u5167\u7121\u8b8a\u5316\uff0c\u5c07\u6703\u518d\u6b21\u63a8\u9001",(0,a.yg)("strong",{parentName:"p"},"snapshot"),"\u6578\u64da.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"USDT & \u53cd\u5411\u5408\u7d04:"),(0,a.yg)("br",null),"\n1 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.yg)("strong",{parentName:"p"},"10ms"),(0,a.yg)("br",null),"\n50 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.yg)("strong",{parentName:"p"},"20ms"),(0,a.yg)("br",null),"\n200 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.yg)("strong",{parentName:"p"},"100ms"),(0,a.yg)("br",null),"\n500 \u6a94\u6578\u64da, \u63a8\u9001\u983b\u7387: ",(0,a.yg)("strong",{parentName:"p"},"100ms"),(0,a.yg)("br",null)),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Topic:"),(0,a.yg)("br",null),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"orderbook.{depth}.{symbol}")," e.g., orderbook.1.BTCUSDT"),(0,a.yg)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"topic"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Topic\u540d")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"type"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6578\u64da\u985e\u578b. ",(0,a.yg)("inlineCode",{parentName:"td"},"snapshot"),",",(0,a.yg)("inlineCode",{parentName:"td"},"delta"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"ts"),(0,a.yg)("td",{parentName:"tr",align:"left"},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"data"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Object")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> s"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> b"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Bid, \u8cb7\u65b9. ",(0,a.yg)("inlineCode",{parentName:"td"},"snapshot"),"\u6578\u64da\uff0c\u662f\u6309\u7167\u50f9\u683c\u5f9e\u5927\u5230\u5c0f")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> b","[0]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u5831\u50f9")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> b","[1]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8cb7\u65b9\u6578\u91cf ",(0,a.yg)("li",null,"\u589e\u91cf\u6578\u64da\u7684\u63a8\u9001\u7576\u51fa\u73fesize=0\u6642\uff0c\u9019\u610f\u5473\u8457\u8a72\u50f9\u4f4d\u7684\u5831\u50f9\u55ae\u5168\u90e8\u6210\u4ea4\u6216\u8005\u5168\u90e8\u64a4\u92b7"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> a"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Ask, \u8ce3\u65b9. ",(0,a.yg)("inlineCode",{parentName:"td"},"snapshot"),"\u6578\u64da\uff0c\u662f\u6309\u7167\u50f9\u683c\u5f9e\u5c0f\u5230\u5927")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> a","[0]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u5831\u50f9")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},">> a","[1]"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8ce3\u65b9\u6578\u91cf ",(0,a.yg)("li",null,"\u589e\u91cf\u6578\u64da\u7684\u63a8\u9001\u7576\u51fa\u73fesize=0\u6642\uff0c\u9019\u610f\u5473\u8457\u8a72\u50f9\u4f4d\u7684\u5831\u50f9\u55ae\u5168\u90e8\u6210\u4ea4\u6216\u8005\u5168\u90e8\u64a4\u92b7"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> u"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},'\u66f4\u65b0id, \u4e00\u822c\u60c5\u6cc1\u4e0b\u8a72id\u662f\u9023\u7e8c\u7684\u3002\u5076\u723e\u6703\u56e0\u5f8c\u53f0\u7684\u91cd\u555f\u800c\u767c\u9001"u"=1\u7684\u5168\u91cf\u6578\u64da\uff0c\u63a5\u6536\u5230\u5f8c\u8acb\u8986\u84cb\u672c\u5730\u4fdd\u5b58\u7684orderbook')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> seq"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"\u64ae\u5408\u7248\u672c\u865f. ",(0,a.yg)("li",null,"\u8a72\u5b57\u6bb5\u53ef\u4ee5\u7528\u65bc\u95dc\u806f\u4e0d\u540c\u6a94\u4f4d\u7684orderbook, \u5982\u679c\u503c\u8d8a\u5c0f, \u5247\u8aaa\u660e\u6578\u64da\u751f\u6210\u8d8a\u65e9"))))),(0,a.yg)("h3",{id:"\u8a02\u95b1\u793a\u4f8b"},"\u8a02\u95b1\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'const socket = new WebSocket(\'wss://stream-testnet.zoomex.com/v3/public/linear\');\n\nsocket.onopen = function() {\n  const subscribeMsg = {\n    "op": "subscribe",\n    "args": ["orderbook.50.BTCUSDT"]\n  };\n  socket.send(JSON.stringify(subscribeMsg));\n};\n\nsocket.onmessage = function(event) {\n};\n\nsocket.onclose = function(event) {\n};\n')),(0,a.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.yg)(l.A,{groupId:"programming-languages",mdxType:"Tabs"},(0,a.yg)(o.A,{value:"snapshot",label:"\u5168\u91cf",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "snapshot",\n    "ts": 1672304484978,\n    "data": {\n        "s": "BTCUSDT",\n        "b": [\n            ...,\n            [\n                "16493.50",\n                "0.006"\n            ],\n            [\n                "16493.00",\n                "0.100"\n            ]\n        ],\n        "a": [\n            [\n                "16611.00",\n                "0.029"\n            ],\n            [\n                "16612.00",\n                "0.213"\n            ],\n            ...,\n        ],\n    "u": 18521288,\n    "seq": 7961638724\n    }\n}\n'))),(0,a.yg)(o.A,{value:"delta",label:"\u589e\u91cf",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "orderbook.50.BTCUSDT",\n    "type": "delta",\n    "ts": 1687940967466,\n    "data": {\n        "s": "BTCUSDT",\n        "b": [\n            [\n                "30247.20",\n                "30.028"\n            ],\n            [\n                "30245.40",\n                "0.224"\n            ],\n            [\n                "30242.10",\n                "1.593"\n            ],\n            [\n                "30240.30",\n                "1.305"\n            ],\n            [\n                "30240.00",\n                "0"\n            ]\n        ],\n        "a": [\n            [\n                "30248.70",\n                "0"\n            ],\n            [\n                "30248.90",\n                "3.525"\n            ],\n            [\n                "30249.00",\n                "2.327"\n            ],\n            [\n                "30249.60",\n                "0"\n            ],\n            [\n                "30249.80",\n                "2.178"\n            ],\n            [\n                "30249.90",\n                "4.685"\n            ],\n            [\n                "30250.00",\n                "9.907"\n            ],\n            [\n                "30250.10",\n                "1.070"\n            ],\n            [\n                "30251.60",\n                "2.239"\n            ],\n            [\n                "30251.90",\n                "2.947"\n            ],\n            [\n                "30252.20",\n                "0.659"\n            ],\n            [\n                "30252.50",\n                "4.591"\n            ]\n        ],\n        "u": 177400507,\n        "seq": 66544703342\n    }\n}\n')))))}m.isMDXComponent=!0}}]);