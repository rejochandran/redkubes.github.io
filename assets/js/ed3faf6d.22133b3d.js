"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={slug:"keycloak",title:"Keycloak",sidebar_label:"Keycloak"},o=void 0,l={unversionedId:"apps/keycloak",id:"apps/keycloak",title:"Keycloak",description:"Introduction",source:"@site/docs/apps/keycloak.md",sourceDirName:"apps",slug:"/apps/keycloak",permalink:"/docs/apps/keycloak",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/keycloak.md",tags:[],version:"current",frontMatter:{slug:"keycloak",title:"Keycloak",sidebar_label:"Keycloak"},sidebar:"mainSidebar",previous:{title:"Jaeger",permalink:"/docs/apps/jaeger"},next:{title:"Knative",permalink:"/docs/apps/knative"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Automation",id:"automation",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Create a user in Keycloak",id:"create-a-user-in-keycloak",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The SSO login page for Otomi is served by Keycloak. It is used as an identity broker or provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications."),(0,r.kt)("p",null,"Keycloak is automatically configured with 3 roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"otomi-admin"),": super admin role for all platform configuration and core applications"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"team-admin"),": team admin role to manage teams and users"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"team"),": team role for team members")),(0,r.kt)("p",null,"Group (team) membership is reflected in the user's 'groups' claim. When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided groups and roles claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the \"Authenticate with Single Sign On\" checkbox. This then limits the application access to only allow the members of the team."),(0,r.kt)("p",null,'When there are different requirements to use Keycloak for business applications, Keycloak\'s designated "master" and "otomi" realms may not be used, and an additional realm needs to be created. We refer to the keycloak docs for any custom configuration targeting business applications.'),(0,r.kt)("h2",{id:"automation"},"Automation"),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("h3",{id:"create-a-user-in-keycloak"},"Create a user in Keycloak"),(0,r.kt)("p",null,"To create users in Keycloak, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Keycloak app"),(0,r.kt)("li",{parentName:"ol"},'Click on "Administration Console"'),(0,r.kt)("li",{parentName:"ol"},"Login with admin credentials (using ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")," user and password provided in the installer log or the ",(0,r.kt)("inlineCode",{parentName:"li"},"otomi.adminPassword")," provided in the initial values)"),(0,r.kt)("li",{parentName:"ol"},'Select the "Otomi" realm'),(0,r.kt)("li",{parentName:"ol"},'Click on "Users" then "Add user"'),(0,r.kt)("li",{parentName:"ol"},'Fill in a user name in the "Username" field'),(0,r.kt)("li",{parentName:"ol"},'Fill in your email address in the "Email" field'),(0,r.kt)("li",{parentName:"ol"},'Select the "otomi-admin" group'),(0,r.kt)("li",{parentName:"ol"},'Click on "Save"'),(0,r.kt)("li",{parentName:"ol"},'Choose the "Credentials" tab and then fill in a password for this user'),(0,r.kt)("li",{parentName:"ol"},'Click on "Set Password"')))}u.isMDXComponent=!0}}]);