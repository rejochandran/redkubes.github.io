"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={slug:"part-11",title:"Create a private Git repo",sidebar_label:"Part 11"},i=void 0,l={unversionedId:"for-devs/get-started/part-11",id:"for-devs/get-started/part-11",title:"Create a private Git repo",description:"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, Otomi has you covered. Otomi includes a complete Git solution called Gitea.",source:"@site/docs/for-devs/get-started/part-11.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/part-11",permalink:"/docs/for-devs/get-started/part-11",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/part-11.md",tags:[],version:"current",frontMatter:{slug:"part-11",title:"Create a private Git repo",sidebar_label:"Part 11"},sidebar:"mainSidebar",previous:{title:"Part 10",permalink:"/docs/for-devs/get-started/part-10"},next:{title:"Part 12",permalink:"/docs/for-devs/get-started/part-12"}},s={},p=[{value:"Create a private repository",id:"create-a-private-repository",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, Otomi has you covered. Otomi includes a complete Git solution called Gitea."),(0,n.kt)("p",null,"As a team member, you can create and manage your own repositories."),(0,n.kt)("h2",{id:"create-a-private-repository"},"Create a private repository"),(0,n.kt)("p",null,"In the apps section in Otomi console, you'll see an app called Gitea. Click on it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubecfg",src:r(1194).Z,width:"2200",height:"1030"})),(0,n.kt)("p",null,"Now follow these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Sign In")," with OpenID")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubecfg",src:r(8379).Z,width:"2200",height:"1082"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+ New Repository"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubecfg",src:r(9857).Z,width:"2200",height:"886"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill in a Repository Name"),(0,n.kt)("li",{parentName:"ul"},"Optional: Enable ",(0,n.kt)("inlineCode",{parentName:"li"},"Initialize Repository")),(0,n.kt)("li",{parentName:"ul"},"Optional: Make Repository Private"),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Create Repository"))),(0,n.kt)("p",null,"Your repo is now ready to be used!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kubecfg",src:r(3471).Z,width:"2180",height:"1318"})),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Note that you as a user are now the owner of this repo and can add other team members to collaborate. Otomi does not create a group in Gitea that contains all the team member. Team members first have to sign in to Gitea (using OpenID) before they can be added to an existing repo."))))}d.isMDXComponent=!0},8379:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/gitea-openid-dca1d73e3512321edcd5fc9a3c290cb0.png"},3471:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new-gitea-repo-ready-fdeb4574a283f5d957b3dae6e000f2af.png"},9857:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new-gitea-repo-6784f37af5481c83fe32609e85a9b221.png"},1194:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/team-app-gitea-7f5e97b4c4cefc6fc442a01a11966297.png"}}]);