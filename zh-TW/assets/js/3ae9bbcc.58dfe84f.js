"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3047],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),g=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=g(n),c=l,m=y["".concat(o,".").concat(c)]||y[c]||d[c]||a;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[y]="string"==typeof e?e:l,u[1]=i;for(var g=2;g<a;g++)u[g]=n[g];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(6540),l=n(53);const a={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,u),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(8168),l=n(6540),a=n(53),u=n(3104),i=n(6347),o=n(7485),g=n(1682),s=n(9466);function y(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??y(n);return function(e){const t=(0,g.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[u,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,g]=m({queryString:n,groupId:r}),[y,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,s.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=o??y;return c({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:u,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),g(e),p(e)}),[g,p,a]),tabValues:a}}var f=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:g}=e;const s=[],{blockElementScrollPositionUntilNextRender:y}=(0,u.a_)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=g[n].value;r!==i&&(y(t),o(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t)},g.map((e=>{let{value:t,label:n,attributes:u}=e;return l.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:c,onClick:d},u,{className:(0,a.A)("tabs__item",b.tabItem,u?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=p(e);return l.createElement("div",{className:(0,a.A)("tabs-container",b.tabList)},l.createElement(v,(0,r.A)({},e,t)),l.createElement(h,(0,r.A)({},e,t)))}function T(e){const t=(0,f.A)();return l.createElement(N,(0,r.A)({key:String(t)},e))}},2085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>y});var r=n(8168),l=(n(6540),n(5680)),a=n(1470),u=n(9365);const i={title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_position:4.5},o=void 0,g={unversionedId:"v3/market/instrument",id:"v3/market/instrument",title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",description:"\u67e5\u8a62\u5168\u7ad9\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u57fa\u790e\u914d\u7f6e\u898f\u5247\u4fe1\u606f",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/market/instrument.mdx",sourceDirName:"v3/market",slug:"/v3/market/instrument",permalink:"/docs-tes/zh-TW/v3/market/instrument",draft:!1,tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u898f\u683c\u4fe1\u606f",sidebar_position:4.5},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u6ea2\u50f9\u6307\u6578\u50f9\u683cK\u7dda\u6578\u64da",permalink:"/docs-tes/zh-TW/v3/market/preimum-index-kline"},next:{title:"Order Book (\u6df1\u5ea6)",permalink:"/docs-tes/zh-TW/v3/market/orderbook"}},s={},y=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:y},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u67e5\u8a62\u5168\u7ad9\u53ef\u4ea4\u6613\u7522\u54c1\u7684\u57fa\u790e\u914d\u7f6e\u898f\u5247\u4fe1\u606f"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"\u7576\u901a\u904e",(0,l.yg)("inlineCode",{parentName:"li"},"baseCoin"),"\u67e5\u8a62\u6642, \u4e0d\u7ba1category=",(0,l.yg)("inlineCode",{parentName:"li"},"linear"),"\u6216",(0,l.yg)("inlineCode",{parentName:"li"},"inverse"),", \u8fd4\u56de\u7d50\u679c\u4e2d\u90fd\u6703\u5305\u542bUSDT\u6c38\u7e8c\u548c\u53cd\u5411\u5408\u7d04\u7684\u4ea4\u6613\u5c0d."))),(0,l.yg)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,l.yg)("p",null,"GET ",(0,l.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/instruments-info")),(0,l.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("b",null,"true")),(0,l.yg)("td",{parentName:"tr",align:"left"},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,l.yg)("inlineCode",{parentName:"td"},"linear"),",",(0,l.yg)("inlineCode",{parentName:"td"},"inverse"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,l.yg)("td",{parentName:"tr",align:"left"},"false"),(0,l.yg)("td",{parentName:"tr",align:"left"},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("a",{parentName:"td",href:"../enum#status"},"status")),(0,l.yg)("td",{parentName:"tr",align:"left"},"false"),(0,l.yg)("td",{parentName:"tr",align:"left"},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u5c0d\u72c0\u614b\u7be9\u9078")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"baseCoin"),(0,l.yg)("td",{parentName:"tr",align:"left"},"false"),(0,l.yg)("td",{parentName:"tr",align:"left"},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u8ca8\u5e63.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,l.yg)("td",{parentName:"tr",align:"left"},"false"),(0,l.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,l.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"1000"),"]",". \u9ed8\u8a8d: ",(0,l.yg)("inlineCode",{parentName:"td"},"500"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"cursor"),(0,l.yg)("td",{parentName:"tr",align:"left"},"false"),(0,l.yg)("td",{parentName:"tr",align:"left"},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")))),(0,l.yg)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,l.yg)(a.A,{groupId:"market-category",mdxType:"Tabs"},(0,l.yg)(u.A,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,l.yg)("table",{border:"0.8"},(0,l.yg)("tr",null,(0,l.yg)("th",null,"\u53c3\u6578"),(0,l.yg)("th",null,"\u985e\u578b"),(0,l.yg)("th",null,"\u8aaa\u660e")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"category"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u7522\u54c1\u985e\u578b")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"nextPageCursor"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u6e38\u6a19\uff0c\u7528\u65bc\u7ffb\u9801")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"list"),(0,l.yg)("td",null,"array"),(0,l.yg)("td",null,"Object")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> symbol"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> ",(0,l.yg)("a",{href:"../enum#contracttype"},"contractType")),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u5408\u7d04\u985e\u578b")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> ",(0,l.yg)("a",{href:"../enum#status"},"status")),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u5408\u7d04\u72c0\u614b ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> baseCoin"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u4ea4\u6613\u5e63\u7a2e ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> quoteCoin"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u5831\u50f9\u5e63\u7a2e ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> launchTime"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u767c\u4f48\u6642\u9593 (ms) ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> priceScale"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u50f9\u683c\u7cbe\u5ea6 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> leverageFilter"),(0,l.yg)("td",null,"Object"),(0,l.yg)("td",null,"\u69d3\u687f\u5c6c\u6027 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> minLeverage"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u6700\u5c0f\u69d3\u687f ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> maxLeverage"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u6700\u5927\u69d3\u687f ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> leverageStep"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u4fee\u6539\u69d3\u687f\u7684\u6b65\u9577 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> priceFilter"),(0,l.yg)("td",null,"Object"),(0,l.yg)("td",null,"\u50f9\u683c\u5c6c\u6027 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> minPrice"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u8a02\u55ae\u6700\u5c0f\u50f9\u683c ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> maxPrice"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u8a02\u55ae\u6700\u5927\u50f9\u683c ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> tickSize"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u4fee\u6539\u50f9\u683c\u7684\u6b65\u9577 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> lotSizeFilter"),(0,l.yg)("td",null,"Object"),(0,l.yg)("td",null,"\u8a02\u55ae\u6578\u91cf\u5c6c\u6027 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> maxOrderQty"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> minOrderQty"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u55ae\u7b46\u8a02\u55ae\u6700\u5c0f\u4e0b\u55ae\u91cf ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> qtyStep"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u4fee\u6539\u4e0b\u55ae\u91cf\u7684\u6b65\u9577 ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,">> postOnlyMaxOrderQty"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"PostOnly\u55ae\u5141\u8a31\u7684\u6700\u5927\u4e0b\u55ae\u91cf ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> fundingInterval"),(0,l.yg)("td",null,"integer"),(0,l.yg)("td",null,"\u8cc7\u91d1\u8cbb\u7387\u7d50\u7b97\u9031\u671f (\u5206\u9418) ")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"> settleCoin"),(0,l.yg)("td",null,"string"),(0,l.yg)("td",null,"\u7d50\u7b97\u5e63\u7a2e "))))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/instruments-info?category=linear&symbol=BTCUSDT HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,l.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "BTCUSDT",\n                "contractType": "LinearPerpetual",\n                "status": "Trading",\n                "baseCoin": "BTC",\n                "quoteCoin": "USDT",\n                "launchTime": "1585526400000",\n                "deliveryTime": "0",\n                "deliveryFeeRate": "",\n                "priceScale": "2",\n                "leverageFilter": {\n                    "minLeverage": "1",\n                    "maxLeverage": "100.00",\n                    "leverageStep": "0.01"\n                },\n                "priceFilter": {\n                    "minPrice": "0.50",\n                    "maxPrice": "999999.00",\n                    "tickSize": "0.50"\n                },\n                "lotSizeFilter": {\n                    "maxOrderQty": "100.000",\n                    "minOrderQty": "0.001",\n                    "qtyStep": "0.001",\n                    "postOnlyMaxOrderQty": "1000.000"\n                },\n                "unifiedMarginTrade": true,\n                "fundingInterval": 480,\n                "settleCoin": "USDT"\n            }\n        ],\n        "nextPageCursor": ""\n    },\n    "retExtInfo": {},\n    "time": 1672712495660\n}\n')))}m.isMDXComponent=!0}}]);