"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[842],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3418:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={title:"icestark 2.6.0",author:"\u90a3\u5412",author_url:"https://github.com/maoxiaoke",author_image_url:"https://avatars.githubusercontent.com/u/13417006?v=4",tags:["v2","announcement"],description:"Announcing icestark 2.6.0",hide_table_of_contents:!1},l={permalink:"/blog/02-icestark-2-6-0",source:"@site/blog/02-icestark-2-6-0.md",title:"icestark 2.6.0",description:"Announcing icestark 2.6.0",date:"2021-11-05T09:22:07.185Z",formattedDate:"November 5, 2021",tags:[{label:"v2",permalink:"/blog/tags/v-2"},{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:6.695,truncated:!0,prevItem:{title:"icestark 2.5.0",permalink:"/blog/01-icestark-2-5-0"}},p=[{value:"Announcing icestark 2.6.0",id:"announcing-icestark-260",children:[{value:"\u652f\u6301 ES modules \u7c7b\u578b\u5fae\u5e94\u7528",id:"\u652f\u6301-es-modules-\u7c7b\u578b\u5fae\u5e94\u7528",children:[]},{value:"ES modules \u5fae\u5e94\u7528\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"es-modules-\u5fae\u5e94\u7528\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:[]},{value:"\u5b8c\u5584 Angular \u5fae\u5e94\u7528",id:"\u5b8c\u5584-angular-\u5fae\u5e94\u7528",children:[]},{value:"\u4fee\u590d\u5bf9 location.hash \u8d4b\u503c onRouteChange \u89e6\u53d1\u4e24\u6b21\u7684\u9519\u8bef",id:"\u4fee\u590d\u5bf9-locationhash-\u8d4b\u503c-onroutechange-\u89e6\u53d1\u4e24\u6b21\u7684\u9519\u8bef",children:[]},{value:"\u5bf9\u9879\u76ee\u914d\u7f6e\u7684\u6539\u9020",id:"\u5bf9\u9879\u76ee\u914d\u7f6e\u7684\u6539\u9020",children:[]},{value:"ice.js \u63d2\u4ef6\u652f\u6301 ES modules \u8d44\u6e90",id:"icejs-\u63d2\u4ef6\u652f\u6301-es-modules-\u8d44\u6e90",children:[]}]},{value:"\u540e\u7eed\u7684\u7248\u672c\u8ba1\u5212",id:"\u540e\u7eed\u7684\u7248\u672c\u8ba1\u5212",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"announcing-icestark-260"},"Announcing icestark 2.6.0"),(0,i.kt)("p",null,"\u975e\u5e38\u9ad8\u5174\u5730\u544a\u8bc9\u5927\u5bb6\uff0c\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/icestark/pull/369"},"2.6.0")," \u8fd9\u4e2a\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86 ES modules \u6a21\u5757\u7c7b\u578b\u7684\u5fae\u5e94\u7528\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u60a8\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," \u6216\u8005 ",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/basic/vite/"},"icejs Vite \u6a21\u5f0f")," \u5f00\u53d1\u7684\u5e94\u7528\uff0c\u53ef\u4ee5\u4f7f\u7528 icestark \u6765\u6784\u5efa\u60a8\u7684\u5fae\u524d\u7aef\u67b6\u6784\u3002"),(0,i.kt)("p",null,"\u672c\u6b21\u66f4\u65b0\u4e3b\u8981\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E6%94%AF%E6%8C%81-ES-modules-%E7%B1%BB%E5%9E%8B%E5%BE%AE%E5%BA%94%E7%94%A8"},"\u652f\u6301 ES modules \u7c7b\u578b\u5fae\u5e94\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E6%94%AF%E6%8C%81-angular-%E5%BE%AE%E5%BA%94%E7%94%A8"},"\u5b8c\u5584 Angular \u5fae\u5e94\u7528\u652f\u6301")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E4%BF%AE%E5%A4%8D%E5%AF%B9-locationhash-%E8%B5%8B%E5%80%BC-onroutechange-%E8%A7%A6%E5%8F%91%E4%B8%A4%E6%AC%A1%E7%9A%84%E9%94%99%E8%AF%AF"},"\u4fee\u590d location.hash \u8d4b\u503c onRouteChange \u89e6\u53d1\u4e24\u6b21\u7684\u9519\u8bef")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%AF%B9%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE%E7%9A%84%E6%94%B9%E9%80%A0"},"\u5bf9\u9879\u76ee\u914d\u7f6e\u7684\u6539\u9020")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ice.js-%E6%8F%92%E4%BB%B6%E6%94%AF%E6%8C%81-ES-modules-%E8%B5%84%E6%BA%90"},"ice.js \u63d2\u4ef6\u652f\u6301 ES modules \u8d44\u6e90"))),(0,i.kt)("h3",{id:"\u652f\u6301-es-modules-\u7c7b\u578b\u5fae\u5e94\u7528"},"\u652f\u6301 ES modules \u7c7b\u578b\u5fae\u5e94\u7528"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES modules")," \u6a21\u5757\u89c4\u8303\u662f\u9762\u5411\u672a\u6765\u7684\u6a21\u5757\u89c4\u8303\uff0c\u8bf8\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://www.snowpack.dev/"},"snowpack")," \u7b49\u539f\u751f\u652f\u6301 ES modules \u7684\u6784\u5efa\u5de5\u5177\u7684\u4ea7\u751f\uff0c\u4ee5\u53ca ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/publish-modern-javascript/"},"\u73b0\u4ee3\u6d4f\u89c8\u5668")," \u5bf9 ES modules \u8bed\u6cd5\u7684\u652f\u6301\uff0c\u76f8\u4fe1\u672a\u6765\u4f1a\u6709\u8d8a\u6765\u8d8a\u591a\u7684\u5fae\u5e94\u7528\u6784\u5efa\u5728 native ES modules \u4e4b\u4e0a\u3002\u76f8\u6bd4\u4f20\u7edf\u7684\u6784\u5efa\u5de5\u5177\uff08\u6bd4\u5982 webpack\uff09\uff0c\u8fd9\u4e9b\u65b0\u578b\u7684\u6784\u5efa\u5de5\u5177\u6216\u591a\u6216\u5c11\u5730\u5e26\u6765\u4e86\u4ee5\u4e0b\u4f18\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7531\u4e8e\u65e0\u9700\u6253\u5305\u7684\u7279\u6027\uff0c\u670d\u52a1\u5668\u542f\u52a8\u65f6\u95f4\u8d85\u5feb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u9879\u76ee\u5927\u5c0f\u4e0d\u518d\u6210\u4e3a\u670d\u52a1\u5668\u542f\u52a8\u901f\u5ea6\u7684\u9650\u5236\u56e0\u7d20")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HMR \u59cb\u7ec8\u4fdd\u6301\u5feb\u901f\u66f4\u65b0"))),(0,i.kt)("p",null,"\u968f\u7740 ",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/"},"icejs")," \u652f\u6301 ",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/basic/vite/"},"Vite")," \u6a21\u5f0f\uff0cicestark \u4e5f\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 ES modules \u7c7b\u578b\u5fae\u5e94\u7528\u7684\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u6846\u67b6\u5e94\u7528\u63a5\u5165 ES modules \u5fae\u5e94\u7528\u7684\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\uff0c\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"loadScriptMode: import")," \u6765\u652f\u6301 ES modules \u7c7b\u578b\u5fae\u5e94\u7528\u7684\u52a0\u8f7d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'<AppRouter>\n  <AppRoute\n    title="\u5546\u5bb6\u5e73\u53f0"\n+   loadScriptMode="import"\n    url={[\n      \'//unpkg.com/icestark-child-seller/build/js/index.js\', // \u8d44\u6e90 ES modules \u5165\u53e3\n      \'//unpkg.com/icestark-child-seller/build/css/index.css\',\n    ]}\n  />\n  <AppRoute\n    path="/user"\n    //...\n  />\n</AppRouter>\n')),(0,i.kt)("p",null,"\u5bf9\u4e8e Vite \u5e94\u7528\u7684 icestark \u9002\u914d\uff0c\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/use-child/others#Vite-%E5%BA%94%E7%94%A8"},"\u5176\u4ed6\u6846\u67b6\u63a5\u5165\u5fae\u5e94\u7528 - Vite \u5e94\u7528")," \u8fdb\u884c\u914d\u7f6e\u3002\u540e\u671f\uff0c\u6211\u4eec\u5c06\u63d0\u4f9b Vite plugin \u80fd\u529b\uff0c\u4f7f Vite \u5e94\u7528\u7684\u63a5\u5165\u975e\u5e38\u7b80\u5355\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e ice.js \u5b50\u5e94\u7528\uff0c\u53ea\u9700\u5c06 ",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/advanced/icestark"},(0,i.kt)("inlineCode",{parentName:"a"},"build-plugin-icestark"))," \u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\uff0c\u5e76\u5f00\u542f ",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/basic/vite"},"icejs Vite \u6a21\u5f0f"),"\uff0c\u5373\u53ef\u5b8c\u6210\u6539\u9020\u5de5\u4f5c\u3002"),(0,i.kt)("h3",{id:"es-modules-\u5fae\u5e94\u7528\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"ES modules \u5fae\u5e94\u7528\u7684\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,i.kt)("h4",{id:"\u6846\u67b6\u5e94\u7528\u9700\u8981\u662f-vite-\u5e94\u7528\u5417"},"\u6846\u67b6\u5e94\u7528\u9700\u8981\u662f Vite \u5e94\u7528\u5417\uff1f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u9700\u8981"),"\u3002\u6846\u67b6\u5e94\u7528\u53ef\u4ee5\u4f7f\u7528 webpack \u7b49\u975e ES modules \u6784\u5efa\u5de5\u5177\uff0c\u65e0\u9700\u5bf9\u6846\u67b6\u5e94\u7528\u8fdb\u884c\u4efb\u4f55\u6784\u5efa\u4e0a\u7684\u6539\u9020\u3002\u5bf9\u4e8e\u6846\u67b6\u5e94\u7528\uff0c\u552f\u4e00\u9700\u8981\u505a\u7684\u662f\uff1a\u5347\u7ea7\u6700\u65b0\u7684 icestark \u7248\u672c\uff0c\u5e76\u8bbe\u7f6e ES modules \u5fae\u5e94\u7528\u7684\u52a0\u8f7d\u65b9\u5f0f\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"loadScriptMode")," \u5b57\u6bb5\uff09 \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u5373\u53ef\u3002"),(0,i.kt)("h4",{id:"\u652f\u6301\u6c99\u7bb1\u6a21\u5f0f\u5417"},"\u652f\u6301\u6c99\u7bb1\u6a21\u5f0f\u5417\uff1f"),(0,i.kt)("p",null,"\u6682\u4e0d\u652f\u6301\u6c99\u7bb1\u6a21\u5f0f\u3002"),(0,i.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-es-modules-\u5fae\u5e94\u7528"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 ES modules \u5fae\u5e94\u7528"),(0,i.kt)("p",null,"\u9664\u4e86\u672c\u5730\u5f00\u53d1\u7684\u4f18\u79c0\u4f53\u9a8c\uff0c\u7531\u4e8e ES modules \u811a\u672c",(0,i.kt)("a",{parentName:"p",href:"https://dmitripavlutin.com/javascript-module-import-twice/"},"\u53ea\u6267\u884c\u4e00\u6b21"),"\u7684\u7b56\u7565\uff0c\u5fae\u5e94\u7528\u4e8c\u6b21\u52a0\u8f7d\u7684\u901f\u5ea6\u57fa\u672c\u6ca1\u6709\u5ef6\u8fdf\uff0c\u6781\u9ad8\u5730\u63d0\u5347\u4e8c\u6b21\u52a0\u8f7d\u4f53\u9a8c\u3002"),(0,i.kt)("h4",{id:"\u6d4f\u89c8\u5668\u7684\u7248\u672c\u652f\u6301"},"\u6d4f\u89c8\u5668\u7684\u7248\u672c\u652f\u6301"),(0,i.kt)("p",null,"\u7531\u4e8e icestark \u5185\u90e8\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"dynamic import")," \u6765\u652f\u6301 ES modules \u5e94\u7528\uff0c\u56e0\u6b64\u652f\u6301 chrome 63 \u7248\u672c\u4ee5\u4e0a\u7684\u6d4f\u89c8\u5668\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6709\u5173\u4f7f\u7528 ES modules \u7684\u5176\u4ed6\u7591\u95ee\uff0c\u6b22\u8fce\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/icestark/issues"},"issue")," \u6216 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ice-lab/icestark/discussions"},"discussion")," \u544a\u77e5\u6211\u4eec\u3002"))),(0,i.kt)("h3",{id:"\u5b8c\u5584-angular-\u5fae\u5e94\u7528"},"\u5b8c\u5584 Angular \u5fae\u5e94\u7528"),(0,i.kt)("p",null,"Angular 1.x \u5e94\u7528\u6211\u4eec\u5efa\u8bae\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/concept/child#2-entry"},"entry")," \u65b9\u5f0f\u63a5\u5165\uff0c\u56e0\u4e3a\u6211\u4eec\u6ca1\u6709\u6bd4\u8f83\u597d\u7684\u65b9\u5f0f\u6765\u5b9a\u4e49 ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/concept/child#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"},"\u751f\u547d\u5468\u671f\u51fd\u6570"),"\u3002\u5728 Angular 5.x \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/api/core/PlatformRef#bootstrapModule"},"bootstrapModule")," \u83b7\u53d6\u5230 NgModule \u5b9e\u4f8b\u3002\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u5b9a\u4e49\u751f\u547d\u5468\u671f\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { NgModuleRef } from '@angular/core';\n\nlet app: void | NgModuleRef<AppModule>;\n\nif (!isInIcestark()) {\n  platformBrowserDynamic().bootstrapModule(AppModule)\n    .catch(err => console.error(err));\n}\n\nexport async function mount () {\n  app = await platformBrowserDynamic().bootstrapModule(AppModule)\n    .catch(err => console.error(err));\n}\n\nexport function unmount () {\n  // @ts-ignore\n  app.destroy();\n}\n")),(0,i.kt)("p",null,"\u540c\u65f6\uff0c\u4e3a\u4e86\u9002\u914d Angular \u5e94\u7528\uff0cicestark \u505a\u4e86\u5982\u4e0b\u6539\u52a8\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u517c\u5bb9 Angular \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"<base />")," \u5143\u7d20 - icestark \u73b0\u5728\u4f1a\u9ed8\u8ba4\u89e3\u6790 entry \u6216 entryContent \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"<base>")," \u5143\u7d20\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"href"),"\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u8be5\u5fae\u5e94\u7528\u6700\u7ec8\u7684 publicPath \u7684\u4e00\u4e2a\u57fa\u51c6\u56e0\u5b50\u3002\u89e3\u6790\u5b8c\u6210\u540e\uff0c\u8be5 ",(0,i.kt)("inlineCode",{parentName:"li"},"<base >")," \u5143\u7d20\u4e0d\u4f1a\u51fa\u73b0\u5728 DOM \u7ed3\u6784\u4e2d\uff08\u5426\u5219\u53ef\u80fd\u4fee\u6539\u5176\u4ed6\u5e94\u7528\u7684\u8d44\u6e90\u5730\u5740\uff09\u3002")),(0,i.kt)("h3",{id:"\u4fee\u590d\u5bf9-locationhash-\u8d4b\u503c-onroutechange-\u89e6\u53d1\u4e24\u6b21\u7684\u9519\u8bef"},"\u4fee\u590d\u5bf9 location.hash \u8d4b\u503c onRouteChange \u89e6\u53d1\u4e24\u6b21\u7684\u9519\u8bef"),(0,i.kt)("p",null,"\u7531\u4e8e\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location.hash")," \u8fdb\u884c\u8d4b\u503c\uff0c\u4f1a\u89e6\u53d1 popstate \u548c hashchange \u4e24\u4e2a\u4e8b\u4ef6\uff0c\u5bfc\u81f4\u94a9\u5b50\u51fd\u6570 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/ice-stark#startconfiguration"},"onRouteChange")," \u89e6\u53d1\u4e24\u6b21\u3002\u7248\u672c 2.6.0 \u4fee\u590d\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,i.kt)("h3",{id:"\u5bf9\u9879\u76ee\u914d\u7f6e\u7684\u6539\u9020"},"\u5bf9\u9879\u76ee\u914d\u7f6e\u7684\u6539\u9020"),(0,i.kt)("p",null,"\u7531\u4e8e icestark \u5185\u90e8\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"dynamic import")," \u6765\u652f\u6301 ES modules \u5e94\u7528\uff0c\u56e0\u6b64\u9700\u8981\u5bf9 icestark \u5de5\u7a0b\u8fdb\u884c\u4e00\u4e9b\u9002\u914d\uff0c\u4fdd\u8bc1 dynamic import \u4e0d\u4f1a\u88ab\u8f6c\u8bd1\u3002\u9879\u76ee ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u7684\u6539\u52a8\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "compilerOptions": {\n      "target": "es5",\n-      "module": "commonjs",\n+      "module": "esnext",\n+      "moduleResolution": "Node",\n+      "allowSyntheticDefaultImports": true,\n+      "esModuleInterop": true\n      ...\n    }\n  },\n}\n')),(0,i.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e4b\u524d\u7248\u672c\u7684 icestark \u7684\u9ed8\u8ba4\u4ea7\u7269\u662f commonjs \u89c4\u8303\uff1b2.6.0 \u7684\u7248\u672c\u7684\u9ed8\u8ba4\u4ea7\u7269\u4f1a\u662f ES modules \u89c4\u8303\u3002"),(0,i.kt)("h3",{id:"icejs-\u63d2\u4ef6\u652f\u6301-es-modules-\u8d44\u6e90"},"ice.js \u63d2\u4ef6\u652f\u6301 ES modules \u8d44\u6e90"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ice.work/"},"ice.js")," \u53ef\u901a\u8fc7\u5b9a\u5236\u63d2\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/advanced/icestark"},"build-plugin-icestark")," \u5feb\u901f\u63a5\u5165 icestark\u3002\u5728\u8be5\u63d2\u4ef6\u7684\u6700\u65b0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u5f00\u542f ",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/basic/vite"},"Vite \u6a21\u5f0f")," \u7684 ice.js \u5e94\u7528\u5feb\u901f\u63a5\u5165\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"build-plugin-icestark")," \u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i build-plugin-icestark@latest -D\n")),(0,i.kt)("p",null,"\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"ice.js")," \u5347\u7ea7\u81f3 2.x \u7248\u672c\u3002\u8be6\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://ice.work/docs/guide/upgrade#%E4%BB%8E-icejs-1x-%E5%8D%87%E7%BA%A7"},"\u5347\u7ea7\u6307\u5357"),"\u3002"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u5728\u5fae\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"build.json"),"\uff09\u4e2d\uff0c\u4fee\u6539\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"Vite")," \u6a21\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'+ "vite": true,\n"plugins": [\n  ["build-plugin-icestark", {\n+    "type": "child"\n-    "umd": true\n  }],\n]\n')),(0,i.kt)("h2",{id:"\u540e\u7eed\u7684\u7248\u672c\u8ba1\u5212"},"\u540e\u7eed\u7684\u7248\u672c\u8ba1\u5212"),(0,i.kt)("p",null,"\u6211\u4eec\u4f1a\u6301\u7eed\u6269\u5c55 icestark \u7684\u80fd\u529b\uff0c\u63d0\u5347\u5fae\u524d\u7aef\u4f53\u9a8c\u3002\u5728\u63a5\u4e0b\u6765\u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4f1a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3a Vite \u5fae\u5e94\u7528\u63d0\u4f9b\u5bf9\u5e94\u7684\u6539\u9020\u63d2\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5f00\u53d1\u8005\u5f00\u53d1\u4f53\u9a8c\uff0cdev \u4e0b\u63d0\u4f9b\u5173\u952e\u8def\u5f84\u7684 log \u4fe1\u606f")))}c.isMDXComponent=!0}}]);