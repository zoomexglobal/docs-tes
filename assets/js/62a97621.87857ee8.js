"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8565],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9365:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540),a=r(53);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:r},t)}},1470:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(8168),a=r(6540),l=r(53),o=r(3104),i=r(6347),s=r(7485),u=r(1682),c=r(9466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=y({queryString:r,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return a.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},a.createElement(v,(0,n.A)({},e,t)),a.createElement(h,(0,n.A)({},e,t)))}function C(e){const t=(0,f.A)();return a.createElement(N,(0,n.A)({key:String(t)},e))}},7025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(8168),a=(r(6540),r(5680)),l=r(1470),o=r(9365);const i={title:"Cancel All Orders",sidebar_label:"Cancel All Orders",sidebar_position:5},s=void 0,u={unversionedId:"v3/order/cancel-all",id:"v3/order/cancel-all",title:"Cancel All Orders",description:"Cancel all open orders",source:"@site/docs/v3/order/cancel-all.mdx",sourceDirName:"v3/order",slug:"/v3/order/cancel-all",permalink:"/docs-tes/v3/order/cancel-all",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Cancel All Orders",sidebar_label:"Cancel All Orders",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"Get Open Orders (real-time)",permalink:"/docs-tes/v3/order/open-order"},next:{title:"Get Order History (2 years)",permalink:"/docs-tes/v3/order/order-list"}},c={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],p={toc:d},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Cancel all open orders"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Normal account covers: USDT perpetual / Inverse contract"))),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Support cancel orders by ",(0,a.yg)("inlineCode",{parentName:"li"},"symbol"),"/",(0,a.yg)("inlineCode",{parentName:"li"},"baseCoin"),"/",(0,a.yg)("inlineCode",{parentName:"li"},"settleCoin"),". If you pass multiple of these params, the system will process one of param, which priority is ",(0,a.yg)("inlineCode",{parentName:"li"},"symbol")," > ",(0,a.yg)("inlineCode",{parentName:"li"},"baseCoin")," > ",(0,a.yg)("inlineCode",{parentName:"li"},"settleCoin"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"NOTE"),": ",(0,a.yg)("inlineCode",{parentName:"li"},"category")," for ",(0,a.yg)("inlineCode",{parentName:"li"},"linear")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"inverse"),", you must specify one of those three params."))),(0,a.yg)("h3",{id:"http-request"},"HTTP Request"),(0,a.yg)("p",null,"POST ",(0,a.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/order/cancel-all")),(0,a.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Product type ",(0,a.yg)("ul",null,(0,a.yg)("li",null,"Normal account: ",(0,a.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"))))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Symbol name. ",(0,a.yg)("inlineCode",{parentName:"td"},"linear")," & ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"),": ",(0,a.yg)("strong",{parentName:"td"},"Required")," if not passing baseCoin or settleCoin")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Base coin ",(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("inlineCode",{parentName:"td"},"linear")," & ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"),": If cancel all by baseCoin, it will cancel all linear & inverse orders. ",(0,a.yg)("strong",{parentName:"td"},"Required")," if not passing symbol or settleCoin")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"settleCoin"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Settle coin ",(0,a.yg)("ul",null,(0,a.yg)("li",null,(0,a.yg)("inlineCode",{parentName:"td"},"linear")," & ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"),": ",(0,a.yg)("strong",{parentName:"td"},"Required")," if not passing symbol or baseCoin")))))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)(l.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"future",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,a.yg)("table",{border:"0.8"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Parameter"),(0,a.yg)("th",null,"Type"),(0,a.yg)("th",null,"Comments")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"list"),(0,a.yg)("td",null,"array"),(0,a.yg)("td",null,"Object")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"> orderId"),(0,a.yg)("td",null,"string"),(0,a.yg)("td",null,"Order ID ")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"> orderLinkId"),(0,a.yg)("td",null,"string"),(0,a.yg)("td",null,"User customised order ID"))))),(0,a.yg)("h3",{id:"request-example"},"Request Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'POST /cloud/trade/v3/order/cancel-all HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672219779140\nX-BAPI-RECV-WINDOW: 5000\nContent-Type: application/json\n\n{\n  "category": "linear",\n  "symbol": null,\n  "settleCoin": "USDT"\n}\n')),(0,a.yg)("h3",{id:"response-example"},"Response Example"),(0,a.yg)(l.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"linear",label:"Linear/Inverse",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "orderId": "f6a73e1f-39b5-4dee-af21-1460b2e3b27c",\n                "orderLinkId": "a001"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672219780463\n}\n')))))}y.isMDXComponent=!0}}]);