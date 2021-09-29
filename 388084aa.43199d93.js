(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),f=r,d=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),i=(n(0),n(175)),a={slug:"console/settings/home",title:"Home"},s={unversionedId:"settings-home",id:"settings-home",isDocsHomePage:!1,title:"Home",description:'The Home settings section is similar to the Alerts section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. Those will become active when otomi.isHomeMonitored is turned on. This allows for a 3rd party to also monitor the system. This comes in handy when setting up Otomi as a managed service for clients that want to receive notifications themselves. We consider "Home" to be the managing party, and the regular "Alerts" section should then only contain endpoints for the client. Of course teams can still configure their own endpoints for the alerts spawning from their team namespace.',source:"@site/docs/settings-home.md",slug:"/console/settings/home",permalink:"/docs/console/settings/home",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/settings-home.md",version:"current",sidebar:"mainSidebar",previous:{title:"DNS",permalink:"/docs/console/settings/dns"},next:{title:"KMS",permalink:"/docs/console/settings/kms"}},c=[],l={toc:c};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Home settings section is similar to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"alerts"}),"Alerts"),' section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. Those will become active when ',Object(i.b)("inlineCode",{parentName:"p"},"otomi.isHomeMonitored"),' is turned on. This allows for a 3rd party to also monitor the system. This comes in handy when setting up Otomi as a managed service for clients that want to receive notifications themselves. We consider "Home" to be the managing party, and the regular "Alerts" section should then only contain endpoints for the client. Of course teams can still configure their own endpoints for the alerts spawning from their team namespace.'))}m.isMDXComponent=!0}}]);