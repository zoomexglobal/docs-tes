"use strict";(self.webpackChunkdocs_tes=self.webpackChunkdocs_tes||[]).push([[2629],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},u=Object.keys(t);for(l=0;l<u.length;l++)n=u[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(l=0;l<u.length;l++)n=u[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),s=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return l.createElement(o.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,u=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),p=r,b=d["".concat(o,".").concat(p)]||d[p]||k[p]||u;return n?l.createElement(b,a(a({ref:e},c),{},{components:n})):l.createElement(b,a({ref:e},c))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=n.length,a=new Array(u);a[0]=p;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,a[1]=i;for(var s=2;s<u;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>a});var l=n(7294),r=n(6010);const u={tabItem:"tabItem_Ymn6"};function a(t){let{children:e,hidden:n,className:a}=t;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(u.tabItem,a),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>w});var l=n(7462),r=n(7294),u=n(6010),a=n(2466),i=n(6550),o=n(1980),s=n(7392),c=n(12);function d(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:l,default:r}}=t;return{value:e,label:n,attributes:l,default:r}}))}function k(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??d(n);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:n}=t;const l=(0,i.k6)(),u=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o._X)(u),(0,r.useCallback)((t=>{if(!u)return;const e=new URLSearchParams(l.location.search);e.set(u,t),l.replace({...l.location,search:e.toString()})}),[u,l])]}function m(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,u=k(t),[a,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=n.find((t=>t.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:u}))),[o,s]=b({queryString:n,groupId:l}),[d,m]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,u]=(0,c.Nk)(n);return[l,(0,r.useCallback)((t=>{n&&u.set(t)}),[n,u])]}({groupId:l}),f=(()=>{const t=o??d;return p({value:t,tabValues:u})?t:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:u}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),m(t)}),[s,m,u]),tabValues:u}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(t){let{className:e,block:n,selectedValue:i,selectValue:o,tabValues:s}=t;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),k=t=>{const e=t.currentTarget,n=c.indexOf(e),l=s[n].value;l!==i&&(d(e),o(l))},p=t=>{let e=null;switch(t.key){case"Enter":k(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},e)},s.map((t=>{let{value:e,label:n,attributes:a}=t;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>c.push(t),onKeyDown:p,onClick:k},a,{className:(0,u.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":i===e})}),n??e)})))}function v(t){let{lazy:e,children:n,selectedValue:l}=t;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=u.find((t=>t.props.value===l));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},u.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==l}))))}function y(t){const e=m(t);return r.createElement("div",{className:(0,u.Z)("tabs-container",g.tabList)},r.createElement(h,(0,l.Z)({},t,e)),r.createElement(v,(0,l.Z)({},t,e)))}function w(t){const e=(0,f.Z)();return r.createElement(y,(0,l.Z)({key:String(e)},t))}},2652:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var l=n(7462),r=(n(7294),n(3905)),u=n(4866),a=n(5162);const i={title:"\u884c\u60c5",sidebar_label:"\u884c\u60c5",sidebar_position:3},o=void 0,s={unversionedId:"v3/websocket/public/ticker",id:"v3/websocket/public/ticker",title:"\u884c\u60c5",description:"\u8a02\u95b1\u884c\u60c5\u6578\u64da\u63a8\u9001.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/websocket/public/ticker.mdx",sourceDirName:"v3/websocket/public",slug:"/v3/websocket/public/ticker",permalink:"/docs-tes/zh-TW/v3/websocket/public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u884c\u60c5",sidebar_label:"\u884c\u60c5",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"\u5e73\u53f0\u6210\u4ea4",permalink:"/docs-tes/zh-TW/v3/websocket/public/trade"},next:{title:"K\u7dda",permalink:"/docs-tes/zh-TW/v3/websocket/public/kline"}},c={},d=[{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8a02\u95b1\u793a\u4f8b",id:"\u8a02\u95b1\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],k={toc:d},p="wrapper";function b(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8a02\u95b1\u884c\u60c5\u6578\u64da\u63a8\u9001.",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff0c\u8a72topic\u63a8\u9001delta\u6578\u64da\u548csnapshot\u6570\u636e\u3002\u5982\u679cdelta\u6578\u64da\u4e2d\u7f3a\u5931\u4e00\u4e9b\u5b57\u6bb5\uff0c\u8868\u660e\u8a72\u5b57\u6bb5\u81ea\u4e0a\u6b21\u63a8\u9001\u4ee5\u4f86\u6c92\u6709\u767c\u751f\u8b8a\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u73fe\u8ca8\u53ea\u63a8\u9001snapshot\u985e\u578b\u6578\u64da"))),(0,r.kt)("p",null,"\u63a8\u9001\u983b\u7387: \u671f\u8ca8 - ",(0,r.kt)("strong",{parentName:"p"},"100ms"),", \u73fe\u8ca8 - ",(0,r.kt)("strong",{parentName:"p"},"\u5be6\u6642")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Topic:"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)(u.Z,{groupId:"market-category",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic\u540d\u7a31")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6578\u64da\u985e\u578b. `snapshot`,`delta`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u64ae\u5408\u7248\u672c\u865f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> tickDirection"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u50f9\u683c\u8b8a\u5316\u65b9\u5411 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice1h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"1\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> markPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> indexPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6307\u6578\u50f9\u683c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterest"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> openInterestValue"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u50f9\u503c ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> nextFundingTime"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u4e0b\u6b21\u7d50\u7b97\u8cc7\u91d1\u8cbb\u7528\u7684\u6642\u9593\u6233 (\u6beb\u79d2) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> fundingRate"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cc7\u91d1\u8cbb\u7387 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> bid1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Price"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> ask1Size"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u8ce31\u50f9\u7684\u6578\u91cf ")))),(0,r.kt)(a.Z,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.kt)("table",{border:"0.8"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c3\u6578"),(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"\u8aaa\u660e")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"topic"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Topic\u540d\u7a31")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6578\u64da\u985e\u578b. `snapshot`,`delta`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cs"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"\u64ae\u5408\u7248\u672c\u865f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"\u884c\u60c5\u670d\u52d9\u751f\u6210\u6578\u64da\u7684\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,"array"),(0,r.kt)("td",null,"Object")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> symbol"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lastPrice"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> highPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> lowPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> prevPrice24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> volume24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> turnover24h"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"> price24hPcnt"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 "))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u8a02\u95b1\u793a\u4f8b"},"\u8a02\u95b1\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const socket = new WebSocket(\'wss://stream-testnet.zoomex.com/v3/public/linear\');\n\nsocket.onopen = function() {\n  const subscribeMsg = {\n    "op": "subscribe",\n    "args": ["tickers.BTCUSDT"]\n  };\n  socket.send(JSON.stringify(subscribeMsg));\n};\n\nsocket.onmessage = function(event) {\n};\n\nsocket.onclose = function(event) {\n};\n')),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)(u.Z,{groupId:"market-category",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"linear",label:"Linear",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "topic": "tickers.BTCUSDT",\n    "type": "snapshot",\n    "data": {\n        "symbol": "BTCUSDT",\n        "tickDirection": "PlusTick",\n        "price24hPcnt": "0.017103",\n        "lastPrice": "17216.00",\n        "prevPrice24h": "16926.50",\n        "highPrice24h": "17281.50",\n        "lowPrice24h": "16915.00",\n        "prevPrice1h": "17238.00",\n        "markPrice": "17217.33",\n        "indexPrice": "17227.36",\n        "openInterest": "68744.761",\n        "openInterestValue": "1183601235.91",\n        "turnover24h": "1570383121.943499",\n        "volume24h": "91705.276",\n        "nextFundingTime": "1673280000000",\n        "fundingRate": "-0.000212",\n        "bid1Price": "17215.50",\n        "bid1Size": "84.489",\n        "ask1Price": "17216.00",\n        "ask1Size": "83.020"\n    },\n    "cs": 24987956059,\n    "ts": 1673272861686\n}\n')))))}b.isMDXComponent=!0}}]);