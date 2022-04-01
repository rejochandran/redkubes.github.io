"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5752],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],u={title:"Get started with contributing",slug:"contributing",sidebar_label:"Getting started"},l=void 0,s={unversionedId:"contributing",id:"contributing",title:"Get started with contributing",description:"Welcome",source:"@site/community/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/community/contributing",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/community/contributing.md",tags:[],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1648819767,formattedLastUpdatedAt:"4/1/2022",frontMatter:{title:"Get started with contributing",slug:"contributing",sidebar_label:"Getting started"},sidebar:"community",previous:{title:"Values",permalink:"/community/values"},next:{title:"Expectations",permalink:"/community/contributing/expectations"}},c={},m=[{value:"Welcome",id:"welcome",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:3},{value:"Setting up your development environment",id:"setting-up-your-development-environment",level:3},{value:"Community Expectations and Roles",id:"community-expectations-and-roles",level:3},{value:"Community",id:"community",level:2},{value:"Communication",id:"communication",level:3},{value:"Events and meetups",id:"events-and-meetups",level:3}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"welcome"},"Welcome"),(0,i.kt)("p",null,"So you might be interested in contributing to Otomi, awesome! This guide will help you understand the overall organization of the project, and direct you to the best places to get started contributing. You'll be able to pick up issues, write code to fix them, and get your work reviewed and merged."),(0,i.kt)("p",null,"All feedback is welcome!"),(0,i.kt)("p",null,"This document is the single source of truth for how to contribute to the following code bases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-core/"},"otomi-core"),": The heart of Otomi, a monorepo containing all the apps and configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-tasks/"},"otomi-tasks"),": The tasks used by core to massage apps to adhere to the configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-clients/"},"otomi-clients"),": The openapi generator for the clients used by the tasks")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before submitting code to Otomi, you should first complete the following prerequisites. Completing these steps will make your first contribution easier:"),(0,i.kt)("h3",{id:"code-of-conduct"},"Code of Conduct"),(0,i.kt)("p",null,"Please make sure to read and observe the ",(0,i.kt)("a",{parentName:"p",href:"code-of-conduct"},"Code of Conduct")," and\n",(0,i.kt)("a",{parentName:"p",href:"values"},"Community Values")),(0,i.kt)("h3",{id:"setting-up-your-development-environment"},"Setting up your development environment"),(0,i.kt)("p",null,"It is not required to set up a developer environment in order to contribute to Otomi, but if you do plan to contribute code changes, follow the readme of the respective ",(0,i.kt)("inlineCode",{parentName:"p"},"redkubes/otomi-*")," repo of interest for how to set up your environment."),(0,i.kt)("h3",{id:"community-expectations-and-roles"},"Community Expectations and Roles"),(0,i.kt)("p",null,"Otomi is a community project. Consequently, it is wholly dependent on its community to provide a productive, friendly and collaborative environment."),(0,i.kt)("p",null,"Please read and review the ",(0,i.kt)("a",{parentName:"p",href:"contributing/expectations"},"Community Expectations")," for an understanding of code and review expectations."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Otomi is just starting its open-source community. As many open source projects often do, it depends on new people becoming members and regular code contributors. Please consider joining Otomi!"),(0,i.kt)("h3",{id:"communication"},"Communication"),(0,i.kt)("p",null,"We use the following channels for communication:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://otomi.slack.com/join/shared_invite/zt-12h11e8aa-6po4NWhhpMXxT~nffDsYqA#/shared-invite/email"},"Slack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/96aXY7gHe9"},"Discord")," (needs the Discord client)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitter.im/redkubes/community"},"Gitter")," (doesn't need a client, just a browser and your github login)")),(0,i.kt)("h3",{id:"events-and-meetups"},"Events and meetups"),(0,i.kt)("p",null,"Otomi participates in KubeCon and other events and meetups (mostly online nowadays) all over the world. Information about these and other\ncommunity events is available on the ",(0,i.kt)("a",{parentName:"p",href:"https://redkubes.com/community/"},"Redkubes community")," page."))}d.isMDXComponent=!0}}]);