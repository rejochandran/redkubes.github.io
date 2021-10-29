(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(183)),i={slug:"apps/keycloak",title:"Working with Keycloak",sidebar_label:"Keycloak"},c={unversionedId:"app-keycloak",id:"app-keycloak",isDocsHomePage:!1,title:"Working with Keycloak",description:"The SSO login page for Otomi is served by Keycloak. It is used as an identity broker or provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications.",source:"@site/docs/app-keycloak.md",slug:"/apps/keycloak",permalink:"/docs/apps/keycloak",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-keycloak.md",version:"current",sidebar_label:"Keycloak",sidebar:"mainSidebar",previous:{title:"Working with Harbor",permalink:"/docs/apps/harbor"},next:{title:"Working with Kubeapps",permalink:"/docs/apps/kubeapps"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The SSO login page for Otomi is served by Keycloak. It is used as an identity broker ",Object(o.b)("em",{parentName:"p"},"or")," provider for all Otomi integrated applications. Keycloak is configured with mappers that normalize incoming identities from an IDP to have predictable claims format to be used by Otomi applications."),Object(o.b)("p",null,"Keycloak is automatically configured with 3 roles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"otomi-admin"),": super admin role for all platform configuration and core applications"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"team-admin"),": team admin role to manage teams and users"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"team-<team-name>"),": team role for team members, which also includes the name of the team given access to")),Object(o.b)("p",null,"When this authorization configuration is useful to their own built applications, teams can directly use Keycloak's provided ",Object(o.b)("inlineCode",{parentName:"p"},"groups")," and ",Object(o.b)("inlineCode",{parentName:"p"},"roles"),' claims. There is no need for a client or token validation, as that has been done by the platform. They can do so by turning on the  "Authenticate with Single Sign On" checkbox. This then limits access the application to only allow the members of the team. '),Object(o.b)("p",null,'When there are different requirements to use Keycloak for business applications, Keycloak\'s designated "otomi" realm may ',Object(o.b)("em",{parentName:"p"},"not")," be used, and an additional realm needs to be created. We refer to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.keycloak.org/docs/latest/server_admin/index.html"}),"keycloak docs")," for any custom configuration targeting business applications. "))}s.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);