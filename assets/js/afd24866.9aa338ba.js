"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"argocd",title:"Argo CD",sidebar_label:"Argo CD"},i=void 0,l={unversionedId:"apps/argocd",id:"apps/argocd",title:"Argo CD",description:"Introduction",source:"@site/docs/apps/argocd.md",sourceDirName:"apps",slug:"/apps/argocd",permalink:"/docs/apps/argocd",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/argocd.md",tags:[],version:"current",frontMatter:{slug:"argocd",title:"Argo CD",sidebar_label:"Argo CD"},sidebar:"mainSidebar",previous:{title:"Alertmanager",permalink:"/docs/apps/alertmanager"},next:{title:"Cert-Manager",permalink:"/docs/apps/certmanager"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Automation",id:"automation",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Instructions",id:"instructions",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h2",{id:"automation"},"Automation"),(0,o.kt)("p",null,"Teams will be be automatically given a git repository in Gitea named ",(0,o.kt)("inlineCode",{parentName:"p"},"team-$teamId-argocd"),", and ArgoCD is automatically configured to access the repository and sync. All that is left to do is for a team-admin (or team member with self-service rights) to fill their repository with intended state and commit."),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,"Argo CD is configured to use the SSO provided by keycloak, and maps Otomi groups to Argo CD roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group otomi-admin is made super admin within ArgoCD."),(0,o.kt)("li",{parentName:"ul"},"Group team-admin has access to, and is admin of all team projects."),(0,o.kt)("li",{parentName:"ul"},"Team members are only allowed access to, and administer their own projects.")),(0,o.kt)("h2",{id:"instructions"},"Instructions"))}p.isMDXComponent=!0}}]);