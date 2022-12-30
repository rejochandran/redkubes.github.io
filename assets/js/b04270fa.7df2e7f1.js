"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={slug:"ingress-nginx",title:"Working with ingress-NGINX Controller for Kubernetes",sidebar_label:"Ingress-nginx"},a=void 0,s={unversionedId:"apps/ingress-nginx",id:"apps/ingress-nginx",title:"Working with ingress-NGINX Controller for Kubernetes",description:"Otomi integrated NGINX Ingress Controller into an advanced ingress architecture.",source:"@site/docs/apps/ingress-nginx.md",sourceDirName:"apps",slug:"/apps/ingress-nginx",permalink:"/docs/apps/ingress-nginx",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/ingress-nginx.md",tags:[],version:"current",frontMatter:{slug:"ingress-nginx",title:"Working with ingress-NGINX Controller for Kubernetes",sidebar_label:"Ingress-nginx"},sidebar:"mainSidebar",previous:{title:"Harbor",permalink:"/docs/apps/harbor"},next:{title:"Istio",permalink:"/docs/apps/istio"}},c={},l=[{value:"Using ModSecurity",id:"using-modsecurity",level:2},{value:"Using the OWASP rule set",id:"using-the-owasp-rule-set",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Otomi integrated NGINX Ingress Controller into an advanced ",(0,i.kt)("a",{parentName:"p",href:"/docs/product/architecture#ingress--sso"},"ingress architecture"),"."),(0,i.kt)("h2",{id:"using-modsecurity"},"Using ModSecurity"),(0,i.kt)("p",null,"By default, ModSecurity is not enabled in Nginx."),(0,i.kt)("p",null,"To turn on ModSecurity, go to the values tab of the app. Under ",(0,i.kt)("inlineCode",{parentName:"p"},"Mod security")," click ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled"),"."),(0,i.kt)("p",null,"When enabled, ModSecurity by default is configured in blocking mode. This can have a negative impact on your application. First turn blocking off and adjust the applications accordingly. Teams can see all ModSecurity warnings using Grafana. A shortcut for this dashboard is allready preconfigured."),(0,i.kt)("p",null,"The default modesecurity snipped added to the Nginx configuration contains the following defaults:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"modsecurity-snippet: |\n    SecAuditEngine RelevantOnly\n    SecAuditLogParts ABDEFHIJZ\n    SecAuditLogFormat JSON\n    SecAuditLogType Serial\n    SecAuditLog /dev/stdout\n    SecRequestBodyLimit 1073741824\n    SecRuleRemoveById 920350\n")),(0,i.kt)("p",null,"To change the modsecurity configuration, use ",(0,i.kt)("inlineCode",{parentName:"p"},"Raw values"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual-(v3.x)#Configuration_Directives"},"Here")," is an overview of all the configuration directives."),(0,i.kt)("h2",{id:"using-the-owasp-rule-set"},"Using the OWASP rule set"),(0,i.kt)("p",null,"The OWASP ModSecurity Core Rule Set (CRS) is a set of generic attack detection rules for use with ModSecurity or compatible web application firewalls. The CRS aims to protect web applications from a wide range of attacks, including the OWASP Top Ten, with a minimum of false alerts. The CRS provides protection against many common attack categories, including SQL Injection, Cross Site Scripting, Local File Inclusion, etc."),(0,i.kt)("p",null,"The OWASP rule set can only be enabled when ModSecurity is enabled. Read more about the OWASP rule set ",(0,i.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-modsecurity-core-rule-set/"},"here")))}p.isMDXComponent=!0}}]);