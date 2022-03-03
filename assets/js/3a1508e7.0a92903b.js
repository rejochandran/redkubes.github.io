"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7465],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7894:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={slug:"apps/grafana",title:"Working with Grafana",sidebar_label:"Grafana"},l=void 0,u={unversionedId:"app-grafana",id:"app-grafana",title:"Working with Grafana",description:"Otomi uses Grafana to visualize Prometheus metrics and Loki logs. Team members are automatically given Editor role, while admins are also given Admin role.",source:"@site/docs/app-grafana.md",sourceDirName:".",slug:"/apps/grafana",permalink:"/docs/apps/grafana",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-grafana.md",tags:[],version:"current",frontMatter:{slug:"apps/grafana",title:"Working with Grafana",sidebar_label:"Grafana"},sidebar:"mainSidebar",previous:{title:"Gitea",permalink:"/docs/apps/gitea"},next:{title:"Harbor",permalink:"/docs/apps/harbor"}},p=[],s={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Otomi uses Grafana to visualize ",(0,o.kt)("a",{parentName:"p",href:"prometheus"},"Prometheus")," metrics and ",(0,o.kt)("a",{parentName:"p",href:"loki"},"Loki")," logs. Team members are automatically given ",(0,o.kt)("inlineCode",{parentName:"p"},"Editor")," role, while admins are also given ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin")," role."),(0,o.kt)("p",null,"It is possible to make configuration changes directly in Grafana, but only to non-conflicting settings. Data sources are preconfigured and must not be edited as changes will be gone when Grafana is redeployed."))}f.isMDXComponent=!0}}]);