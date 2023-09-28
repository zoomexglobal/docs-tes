"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[6115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),a=n(7294),l=n(6010),o=n(2466),i=n(6550),u=n(1980),s=n(7392),d=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=k({queryString:n,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=u??c;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=s[n].value;r!==i&&(c(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function h(e){const t=(0,b.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},6849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={title:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",sidebar_label:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",sidebar_position:5},u=void 0,s={unversionedId:"v3/order/cancel-all",id:"v3/order/cancel-all",title:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",description:"\u64a4\u92b7\u5168\u90e8\u59d4\u8a17\u55ae",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/order/cancel-all.mdx",sourceDirName:"v3/order",slug:"/v3/order/cancel-all",permalink:"/docs-tes/zh-TW/v3/order/cancel-all",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",sidebar_label:"\u64a4\u92b7\u6240\u6709\u8a02\u55ae",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5be6\u6642\u59d4\u8a17\u55ae",permalink:"/docs-tes/zh-TW/v3/order/open-order"},next:{title:"\u67e5\u8a62\u6b77\u53f2\u8a02\u55ae (2\u5e74)",permalink:"/docs-tes/zh-TW/v3/order/order-list"}},d={},c=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],p={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u64a4\u92b7\u5168\u90e8\u59d4\u8a17\u55ae"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u666e\u901a\u5e33\u6236\u8986\u84cb\u7bc4\u570d: USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6309\u7167",(0,a.kt)("inlineCode",{parentName:"li"},"symbol"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"baseCoin"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"settleCoin"),"\u64a4\u92b7\u8a02\u55ae\uff0c\u82e5\u60a8\u50b3\u5165\u4e86\u591a\u500b\u53c3\u6578\u7d44\u5408, \u7cfb\u7d71\u50c5\u6703\u8655\u7406\u5176\u4e2d\u4e00\u500b\u53c3\u6578\uff0c\u5176\u4e2d\u512a\u5148\u7d1a\u70ba",(0,a.kt)("inlineCode",{parentName:"li"},"symbol")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"baseCoin")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"settleCoin"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6ce8\u610f"),": \u7576",(0,a.kt)("inlineCode",{parentName:"li"},"category"),"\u5c0d\u65bc",(0,a.kt)("inlineCode",{parentName:"li"},"linear"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"inverse"),", \u60a8\u5fc5\u9700\u6307\u5b9a\u4e09\u500b\u53c3\u6578\u7684\u5176\u4e2d\u4e00\u500b\u3002"))),(0,a.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/order/cancel-all")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u666e\u901a\u5e33\u6236: ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31. \u5c0d\u65bc",(0,a.kt)("inlineCode",{parentName:"td"},"linear")," & ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),": \u82e5\u4e0d\u50b3",(0,a.kt)("inlineCode",{parentName:"td"},"baseCoin"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"settleCoin"),", \u8a72\u5b57\u6bb5",(0,a.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5e63\u7a2e ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u5c0d\u65bc",(0,a.kt)("inlineCode",{parentName:"td"},"linear")," & ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),": \u7576\u901a\u904ebaseCoin\u4f86\u5168\u90e8\u64a4\u55ae\u6642\uff0c\u6703\u5c07linear\u548cinverse\u8a02\u55ae\u5168\u90e8\u64a4\u6389\u3002\u82e5\u4e0d\u50b3",(0,a.kt)("inlineCode",{parentName:"td"},"symbol"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"baseCoin"),", \u5247\u8a72\u5b57\u6bb5",(0,a.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7d50\u7b97\u5e63\u7a2e ",(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u5c0d\u65bc",(0,a.kt)("inlineCode",{parentName:"td"},"linear")," & ",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"),": \u8a72\u5b57\u6bb5",(0,a.kt)("strong",{parentName:"td"},"\u5fc5\u50b3"),", \u82e5\u4e0d\u50b3",(0,a.kt)("inlineCode",{parentName:"td"},"symbol"),"\u548c",(0,a.kt)("inlineCode",{parentName:"td"},"baseCoin"))))))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"future",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,a.kt)("table",{border:"0.8"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c3\u6578"),(0,a.kt)("th",null,"\u985e\u578b"),(0,a.kt)("th",null,"\u8aaa\u660e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"list"),(0,a.kt)("td",null,"array"),(0,a.kt)("td",null,"Object")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"> orderId"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Order ID ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"> orderLinkId"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"User customised order ID"))))),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'POST /cloud/trade/v3/order/cancel-all HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672219779140\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n  "category": "linear",\n  "symbol": null,\n  "settleCoin": "USDT"\n}\n')),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"linear-option",label:"Linear/Inverse",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "orderId": "f6a73e1f-39b5-4dee-af21-1460b2e3b27c",\n                "orderLinkId": "a001"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672219780463\n}\n')))))}k.isMDXComponent=!0}}]);