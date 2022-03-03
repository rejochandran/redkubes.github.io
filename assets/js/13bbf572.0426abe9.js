"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8923],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,b=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7151:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={slug:"apps/istio",title:"Working with Istio",sidebar_label:"Istio"},c=void 0,u={unversionedId:"app-istio",id:"app-istio",title:"Working with Istio",description:"Since Otomi has security best practices built in, it is designed for intrusion.",source:"@site/docs/app-istio.md",sourceDirName:".",slug:"/apps/istio",permalink:"/docs/apps/istio",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-istio.md",tags:[],version:"current",frontMatter:{slug:"apps/istio",title:"Working with Istio",sidebar_label:"Istio"}},l=[],p={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since Otomi has security best practices built in, it is designed for intrusion.\nIstio is installed by Otomi as a service mesh to deliver the following capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mTLS enforcement for all traffic that is deemed compromisable."),(0,o.kt)("li",{parentName:"ul"},"egress control, forcing teams to choose explicit egress endpoints."),(0,o.kt)("li",{parentName:"ul"},"advanced routing capabilities such as weight based load balancing (A/B or blue/green testing)")),(0,o.kt)("p",null,"In the future we might make it possible to opt out of Istio, but that effectively nullifies the mTLS capabilities and egress control."))}f.isMDXComponent=!0}}]);