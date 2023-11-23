"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={slug:"certmanager",title:"CertManager",sidebar_label:"Cert-Manager"},o=void 0,l={unversionedId:"apps/certmanager",id:"apps/certmanager",title:"CertManager",description:"Cert-Manager is used by Otomi to automatically create and rotate wildcard TLS certificates for service endpoints. You may bring your own CA, or let Otomi create one for you. If you bring your own trusted wildcard certificate, then cert-manager will not manage this certificate.",source:"@site/docs/apps/certmanager.md",sourceDirName:"apps",slug:"/apps/certmanager",permalink:"/docs/apps/certmanager",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/certmanager.md",tags:[],version:"current",frontMatter:{slug:"certmanager",title:"CertManager",sidebar_label:"Cert-Manager"},sidebar:"mainSidebar",previous:{title:"Argo CD",permalink:"/docs/apps/argocd"},next:{title:"Cloudnative Postgresql",permalink:"/docs/apps/cloudnativepg"}},c={},u=[{value:"Configuration Values",id:"configuration-values",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cert-Manager is used by Otomi to automatically create and rotate wildcard TLS certificates for service endpoints. You may bring your own CA, or let Otomi create one for you. If you bring your own trusted wildcard certificate, then cert-manager will not manage this certificate."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The wildcard certificate must be valid for the following domain ",(0,n.kt)("inlineCode",{parentName:"p"},"*.<cluster.domainSuffix>"),", where the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"<cluster.domainSuffix>")," comes from the cluster.yaml file.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Setting Cert-Manager to use Letsencrypt requires DNS availability of the requesting domains, and forces Otomi to install ",(0,n.kt)("a",{parentName:"p",href:"external-dns"},"ExternalDNS"),". Because a lot of DNS settings are used by other Otomi contexts, all DNS configuration can be found ",(0,n.kt)("a",{parentName:"p",href:"../for-ops/console/settings/dns"},"here"),".")),(0,n.kt)("h2",{id:"configuration-values"},"Configuration Values"),(0,n.kt)("p",null,"The following values can be configured:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"issuer"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates the origin of the wildcard certificate. Set ",(0,n.kt)("inlineCode",{parentName:"td"},"custom-ca")," to instruct cert-manager to derive certificate from the customRootCA. Set ",(0,n.kt)("inlineCode",{parentName:"td"},"letsencrypt")," to instruct cert-manager to request certificate from letsencrypt endpoint. Set ",(0,n.kt)("inlineCode",{parentName:"td"},"byo-wildcard-cert")," to provide your own wildcard certificate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"customRootCA"),(0,n.kt)("td",{parentName:"tr",align:null},"CA that is used to create and verify self-signed certificates. Leave it empty to generate one automatically")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"customRootCAKey"),(0,n.kt)("td",{parentName:"tr",align:null},"CA private key that is used to issue certificates. Leave it empty to generate one automatically")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"byoWildcardCert"),(0,n.kt)("td",{parentName:"tr",align:null},"Bring your own trusted wildcard certificate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"byoWildcardCertKey"),(0,n.kt)("td",{parentName:"tr",align:null},"A certificate key corresponding to the byoWildcardCert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"email"),(0,n.kt)("td",{parentName:"tr",align:null},"Required when using the Let's Encrypt Issuer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stage"),(0,n.kt)("td",{parentName:"tr",align:null},"Required when using the Let's Encrypt Issuer. Choose between ",(0,n.kt)("inlineCode",{parentName:"td"},"staging")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"production"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resources"),(0,n.kt)("td",{parentName:"tr",align:null},"Configure Request and Limits for cert-manager")))))}d.isMDXComponent=!0}}]);