(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(i,".").concat(d)]||l[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(114)),i={slug:"known-issues/harbor",title:"Known Issues: Harbor",sidebar_label:"Harbor"},c={unversionedId:"ki-harbor",id:"ki-harbor",isDocsHomePage:!1,title:"Known Issues: Harbor",description:"When working with Harbor you can expect to run into the following issues:",source:"@site/docs/ki-harbor.md",slug:"/known-issues/harbor",permalink:"/docs/known-issues/harbor",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ki-harbor.md",version:"current",sidebar_label:"Harbor"},b=[{value:"OIDC: conflicting user",id:"oidc-conflicting-user",children:[]}],s={toc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When working with Harbor you can expect to run into the following issues:"),Object(o.b)("h2",{id:"oidc-conflicting-user"},"OIDC: conflicting user"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Problem:")),Object(o.b)("p",null,"Error while logging in to harbor with OIDC: ",Object(o.b)("inlineCode",{parentName:"p"},"Conflict, the user with same username or email has been onboarded."),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cause:")),Object(o.b)("p",null,"By redeploing keycloak the same user gets a new ",Object(o.b)("inlineCode",{parentName:"p"},"sub")," claim in ",Object(o.b)("inlineCode",{parentName:"p"},"openid")," scope. Harbor uses ",Object(o.b)("inlineCode",{parentName:"p"},"sub")," and ",Object(o.b)("inlineCode",{parentName:"p"},"iss")," claims in order to match them to a user from its database (see: ",Object(o.b)("inlineCode",{parentName:"p"},"subiss")," column at ",Object(o.b)("inlineCode",{parentName:"p"},"oidc_user")," table in ",Object(o.b)("inlineCode",{parentName:"p"},"registry")," database). If the same user identifies with a new sub then harbor tries to create a new entry in the ",Object(o.b)("inlineCode",{parentName:"p"},"harbor_user")," database table and it fails on the username column uniqueness constraint."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution:")),Object(o.b)("p",null,"Please check up on this link when this problem occurs, because a fix might already be released: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/goharbor/harbor/issues/13674"}),"goharbor/harbor#13674"),". If so, please create a PR to fix this in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core"}),"otomi-core")," repo, or create an issue there. Otherwise continue:"),Object(o.b)("p",null,"Connect to the database service"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"kh exec harbor-harbor-database-0 -it -- psql -U postgres\n")),Object(o.b)("p",null,"Select the ",Object(o.b)("inlineCode",{parentName:"p"},"registry")," database"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"\\c registry\n")),Object(o.b)("p",null,"Find out the ",Object(o.b)("inlineCode",{parentName:"p"},"<user_id>")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT user_id FROM harbor_user WHERE username = '<user name>';\n")),Object(o.b)("p",null,"Remove the user from the database"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"DELETE FROM oidc_user WHERE user_id = <userid>;\nDELETE FROM harbor_user WHERE user_id = <userid>;\n")),Object(o.b)("p",null,"Exit psql"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"\\q\n")),Object(o.b)("p",null,"Try to login once again and observe that you are asked to confirm your username."))}u.isMDXComponent=!0}}]);