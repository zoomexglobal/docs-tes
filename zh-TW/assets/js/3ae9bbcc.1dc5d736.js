"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3047],{5680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>c});var l=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),y=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},o=function(e){var t=y(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),d=y(n),m=r,c=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?l.createElement(c,u(u({ref:t},o),{},{components:n})):l.createElement(c,u({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=m;var g={};for(var i in t)hasOwnProperty.call(t,i)&&(g[i]=t[i]);g.originalType=e,g[d]="string"==typeof e?e:r,u[1]=g;for(var y=2;y<a;y++)u[y]=n[y];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>u});var l=n(6540),r=n(53);const a={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:n,className:u}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>N});var l=n(8168),r=n(6540),a=n(53),u=n(3104),g=n(6347),i=n(7485),y=n(1682),o=n(9466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,y.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const l=(0,g.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=s(e),[u,g]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[i,y]=c({queryString:n,groupId:l}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,o.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),b=(()=>{const e=i??d;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{b&&g(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);g(e),y(e),p(e)}),[y,p,a]),tabValues:a}}var b=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:g,selectValue:i,tabValues:y}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.a_)(),s=e=>{const t=e.currentTarget,n=o.indexOf(t),l=y[n].value;l!==g&&(d(t),i(l))},m=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t)},y.map((e=>{let{value:t,label:n,attributes:u}=e;return r.createElement("li",(0,l.A)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>o.push(e),onKeyDown:m,onClick:s},u,{className:(0,a.A)("tabs__item",f.tabItem,u?.className,{"tabs__item--active":g===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function h(e){const t=p(e);return r.createElement("div",{className:(0,a.A)("tabs-container",f.tabList)},r.createElement(v,(0,l.A)({},e,t)),r.createElement(T,(0,l.A)({},e,t)))}function N(e){const t=(0,b.A)();return r.createElement(h,(0,l.A)({key:String(t)},e))}},2085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>g,metadata:()=>y,toc:()=>d});var l=n(8168),r=(n(6540),n(5680)),a=n(1470),u=n(9365);const g={title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_position:4.5},i=void 0,y={unversionedId:"v3/market/instrument",id:"v3/market/instrument",title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",description:"\u67e5\u8a62\u5168\u7ad9\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u57fa\u790e\u914d\u7f6e\u898f\u5247\u4fe1\u606f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/market/instrument.mdx",sourceDirName:"v3/market",slug:"/v3/market/instrument",permalink:"/docs-tes/zh-TW/v3/market/instrument",draft:!1,tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_position:4.5},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u6ea2\u50f9\u6307\u6578\u50f9\u683cK\u7dda\u6578\u64da",permalink:"/docs-tes/zh-TW/v3/market/preimum-index-kline"},next:{title:"Order Book (\u6df1\u5ea6)",permalink:"/docs-tes/zh-TW/v3/market/orderbook"}},o={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],s={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,l.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u67e5\u8a62\u5168\u7ad9\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u57fa\u790e\u914d\u7f6e\u898f\u5247\u4fe1\u606f"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: \u73fe\u8ca8 / USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"\u7576\u901a\u904e",(0,r.yg)("inlineCode",{parentName:"li"},"baseCoin"),"\u67e5\u8a62\u6642, \u4e0d\u7ba1category=",(0,r.yg)("inlineCode",{parentName:"li"},"linear"),"\u6216",(0,r.yg)("inlineCode",{parentName:"li"},"inverse"),", \u8fd4\u56de\u7d50\u679c\u4e2d\u90fd\u6703\u5305\u542bUSDT\u6c38\u7e8c\u548c\u53cd\u5411\u5408\u7d04\u7684\u4ea4\u6613\u5c0d."))),(0,r.yg)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.yg)("p",null,"GET ",(0,r.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/instruments-info")),(0,r.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("b",null,"true")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.yg)("inlineCode",{parentName:"td"},"spot"),",",(0,r.yg)("inlineCode",{parentName:"td"},"linear"),",",(0,r.yg)("inlineCode",{parentName:"td"},"inverse"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"../enum#status"},"status")),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5c0d\u72c0\u614b\u7be9\u9078")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u8ca8\u5e63.",(0,r.yg)("br",null),"\u50c5\u5c0dlinear\u548cinverse\u6709\u6548")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,r.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"1000"),"]",". \u9ed8\u8a8d: ",(0,r.yg)("inlineCode",{parentName:"td"},"500"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"cursor"),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,r.yg)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.yg)(a.A,{groupId:"market-category",mdxType:"Tabs"},(0,r.yg)(u.A,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u53c3\u6578"),(0,r.yg)("th",null,"\u985e\u578b"),(0,r.yg)("th",null,"\u8aaa\u660e")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"category"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"nextPageCursor"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"list"),(0,r.yg)("td",null,"array"),(0,r.yg)("td",null,"Object")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> symbol"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ",(0,r.yg)("a",{href:"../enum#contracttype"},"contractType")),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5408\u7d04\u985e\u578b")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ",(0,r.yg)("a",{href:"../enum#status"},"status")),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5408\u7d04\u72c0\u614b ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> baseCoin"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4ea4\u6613\u5e63\u7a2e ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> quoteCoin"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5831\u50f9\u5e63\u7a2e ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> launchTime"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u767c\u4f48\u6642\u9593 (ms) ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> priceScale"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u50f9\u683c\u7cbe\u5ea6 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> leverageFilter"),(0,r.yg)("td",null,"Object"),(0,r.yg)("td",null,"\u69d3\u687f\u5c6c\u6027 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> minLeverage"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u5c0f\u69d3\u687f ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> maxLeverage"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u5927\u69d3\u687f ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> leverageStep"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4fee\u6539\u69d3\u687f\u7684\u6b65\u9577 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> priceFilter"),(0,r.yg)("td",null,"Object"),(0,r.yg)("td",null,"\u50f9\u683c\u5c6c\u6027 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> minPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8a02\u55ae\u6700\u5c0f\u50f9\u683c ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> maxPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8a02\u55ae\u6700\u5927\u50f9\u683c ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> tickSize"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4fee\u6539\u50f9\u683c\u7684\u6b65\u9577 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lotSizeFilter"),(0,r.yg)("td",null,"Object"),(0,r.yg)("td",null,"\u8a02\u55ae\u6578\u91cf\u5c6c\u6027 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> maxOrderQty"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u55ae\u7b46\u9650\u50f9\u55ae\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> maxMktOrderQty"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u55ae\u7b46\u5e02\u50f9\u55ae\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> minOrderQty"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u4e0b\u55ae\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> qtyStep"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4fee\u6539\u4e0b\u55ae\u91cf\u7684\u6b65\u9577 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> postOnlyMaxOrderQty"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5ee2\u68c4, \u8acb\u53c3\u7167maxOrderQty ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> fundingInterval"),(0,r.yg)("td",null,"integer"),(0,r.yg)("td",null,"\u8cc7\u91d1\u8cbb\u7387\u7d50\u7b97\u9031\u671f (\u5206\u9418) ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> settleCoin"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u7d50\u7b97\u5e63\u7a2e ")))),(0,r.yg)(u.A,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u53c3\u6578"),(0,r.yg)("th",null,"\u985e\u578b"),(0,r.yg)("th",null,"\u8aaa\u660e")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"category"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"list"),(0,r.yg)("td",null,"array"),(0,r.yg)("td",null,"Object")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> symbol"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> baseCoin"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4ea4\u6613\u5e63\u7a2e ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> quoteCoin"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5831\u50f9\u5e63\u7a2e ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ",(0,r.yg)("a",{href:"../enum#status"},"status")),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5408\u7d04\u72c0\u614b ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lotSizeFilter"),(0,r.yg)("td",null,"Object"),(0,r.yg)("td",null,"\u6578\u91cf\u5c6c\u6027 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> basePrecision"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4ea4\u6613\u5e63\u7a2e\u7cbe\u5ea6 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> quotePrecision"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5831\u50f9\u5e63\u7a2e\u7cbe\u5ea6 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> minOrderQty"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u4e0b\u55ae\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> maxOrderQty"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> minOrderAmt"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u8a02\u55ae\u984d ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> maxOrderAmt"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5927\u8a02\u55ae\u984d ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> priceFilter"),(0,r.yg)("td",null,"Object"),(0,r.yg)("td",null,"\u50f9\u683c\u5c6c\u6027 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> tickSize"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4fee\u6539\u8a02\u55ae\u7684\u6b65\u9577 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> riskParameters"),(0,r.yg)("td",null,"Object"),(0,r.yg)("td",null,"\u50f9\u683c\u9650\u5236\u53c3\u6578")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> limitParameter"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u9650\u50f9\u55ae\u50f9\u683c\u9650\u5236. \u5982\u679c\u9810\u4f30\u6210\u4ea4\u50f9\u8207\u6700\u65b0\u6210\u4ea4\u50f9\u7684\u504f\u5dee\u5927\u65bc\u9650\u5b9a\u7684\u767e\u5206\u6bd4\uff0c\u5247\u8a72\u7b46\u9650\u50f9\u55ae\u5c07\u6703\u88ab\u9650\u5236\u4e0b\u55ae\u3002\u8209\u4f8b\u8aaa\u660e\uff0c\u63a5\u53e3\u8fd4\u56de0.1, \u5247\u8868\u793a\u9650\u50f9\u70ba10%\uff0c\u60a8\u4e0b\u7684\u9650\u50f9\u55ae\u7684\u4e0b\u55ae\u50f9\u683c\u4e0d\u80fd\u8d85\u904e\u6700\u5f8c\u6210\u4ea4\u50f9\u683c\uff08LTP\uff09\u7684110%\uff1b \u60a8\u8ce3\u51fa\u7684\u9650\u50f9\u55ae\u4e0d\u80fd\u4f4e\u65bcLTP\u768490%\u3002")),(0,r.yg)("tr",null,(0,r.yg)("td",null,">> marketParameter"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5e02\u50f9\u55ae\u50f9\u683c\u9650\u5236. \u5982\u679c\u9810\u4f30\u6210\u4ea4\u50f9\u8207\u6700\u65b0\u6210\u4ea4\u50f9\u7684\u504f\u5dee\u5927\u65bc\u9650\u5b9a\u7684\u767e\u5206\u6bd4\uff0c\u5e02\u50f9\u55ae\u5c07\u88ab\u90e8\u5206\u57f7\u884c. \u8209\u4f8b\u8aaa\u660e\uff0c\u63a5\u53e3\u8fd4\u56de0.05, \u5247\u8868\u793a\u9650\u50f9\u70ba5%. \u5047\u5982\u7576\u524dMNT/USDT\u9650\u50f9\u70ba5%\uff0c\u7528\u6236\u4e0b\u55ae 10 \u842c USDT \u5e02\u50f9\u8cb7\u5165\uff08\u7576\u524d\u6700\u65b0\u6210\u4ea4\u50f9\u70ba 2 USDT\uff09\u3002\u51e1\u57282.1 USDT\u4ee5\u4e0a\u6210\u4ea4\u7684\u90e8\u5206\u5c07\u88ab\u53d6\u6d88\u3002\u5047\u8a2d\u53ea\u6709\u50f9\u503c2\u842c USDT\u7684MNT\u53ef\u4ee5\u57282.1 USDT\u53ca\u4ee5\u4e0b\u7684\u50f9\u683c\u6210\u4ea4\uff0c\u5269\u9918\u76848\u842c USDT\u8a02\u55ae\u50f9\u503c\u5c07\u56e0\u70ba\u504f\u5dee\u8d85\u904e5%\u7684\u95be\u503c\u800c\u88ab\u53d6\u6d88\u3002"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.yg)(a.A,{groupId:"market-category",mdxType:"Tabs"},(0,r.yg)(u.A,{value:"linear",label:"Linear",mdxType:"TabItem"},(0,r.yg)(a.A,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.yg)(u.A,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"GET /cloud/trade/v3/market/instruments-info?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: openapi-testnet.zoomex.com\n"))))),(0,r.yg)(u.A,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.yg)(a.A,{groupId:"programming-languages",mdxType:"Tabs"},(0,r.yg)(u.A,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"GET /cloud/trade/v3/market/instruments-info?category=spot&symbol=BTCUSDT HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")))))),(0,r.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.yg)(a.A,{groupId:"market-category",mdxType:"Tabs"},(0,r.yg)(u.A,{value:"linear",label:"Linear",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "contractType": "LinearPerpetual",\n                "status": "Trading",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "launchTime": "1585526400000",\n                "deliveryTime": "0",\n                "deliveryFeeRate": "",\n                "priceScale": "2",\n                "leverageFilter": {\n                    "minLeverage": "1",\n                    "maxLeverage": "100.00",\n                    "leverageStep": "0.01"\n                },\n                "priceFilter": {\n                    "minPrice": "0.50",\n                    "maxPrice": "999999.00",\n                    "tickSize": "0.50"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "100.000",\n                    "minOrderQty": "0.001",\n                    "qtyStep": "0.001",\n                    "postOnlyMaxOrderQty": "1000.000"\n                    "maxMktOrderQty": "1000.000"\n                },\n                "unifiedMarginTrade": true,\n                "fundingInterval": 480,\n                "settleCoin": "USDT"\n            }\n        ],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1672712495660\n}\n'))),(0,r.yg)(u.A,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "spot",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "status": "Trading",\n                "lotSizeFilter": {\n                    "basePrecision": "0.000001",\n                    "quotePrecision": "0.00000001",\n                    "minOrderQty": "0.000048",\n                    "maxOrderQty": "71.73956243",\n                    "minOrderAmt": "1",\n                    "maxOrderAmt": "2000000"\n                },\n                "priceFilter": {\n                    "tickSize": "0.01"\n                }\n                "riskParameters": {\n                    "limitParameter": "0.05",\n                    "marketParameter": "0.05"\n                }\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672712468011\n}\n')))))}c.isMDXComponent=!0}}]);