"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1656],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||n;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8226:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],l={slug:"roadmap",title:"Roadmap"},s=void 0,c={unversionedId:"about-roadmap",id:"about-roadmap",title:"Roadmap",description:"We are currently working on the following features for the next release.",source:"@site/about/about-roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/about/roadmap",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-roadmap.md",tags:[],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1648819767,formattedLastUpdatedAt:"4/1/2022",frontMatter:{slug:"roadmap",title:"Roadmap"},sidebar:"about",previous:{title:"Architecture",permalink:"/about/architecture"}},u={},p=[{value:"For the first quarter of 2022 we aim to incorporate the following features",id:"for-the-first-quarter-of-2022-we-aim-to-incorporate-the-following-features",level:3},{value:"For the second quater of 2022 we aim to incorporate the following features",id:"for-the-second-quater-of-2022-we-aim-to-incorporate-the-following-features",level:3},{value:"After that we see the following features on the horizon",id:"after-that-we-see-the-following-features-on-the-horizon",level:3}],m={toc:p};function f(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are currently working on the following features for the next release."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Release Cycle")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Release from our ",(0,n.kt)("strong",{parentName:"li"},"stable")," channel every 2 months"),(0,n.kt)("li",{parentName:"ul"},"Release from ",(0,n.kt)("strong",{parentName:"li"},"beta")," channel bi-weekly"),(0,n.kt)("li",{parentName:"ul"},"Release from ",(0,n.kt)("strong",{parentName:"li"},"alpha")," is nightly")),(0,n.kt)("p",null,"This approach might change, so keep watching our socials."),(0,n.kt)("h3",{id:"for-the-first-quarter-of-2022-we-aim-to-incorporate-the-following-features"},"For the first quarter of 2022 we aim to incorporate the following features"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Internal ingress network policies: Controlling network traffic between team services"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Outbound egress control: Specify the FQDNs or IPs that services need to be able to access"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Add self-service for network policies (ingress/egress)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Modify the configuration of integrated apps using Otomi Console"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Get a minimal set of installed apps to lower the initial footprint. Activate more apps after initial install"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add the option to use more ingress controllers allowing to group services on a dedicated controller for segmentation")),(0,n.kt)("h3",{id:"for-the-second-quater-of-2022-we-aim-to-incorporate-the-following-features"},"For the second quater of 2022 we aim to incorporate the following features"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support for Kubernetes 1.22"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add Velero for backing up Otomi platform apps (like Harbor, Keycloak, Gitea and Kubeapps Postgresql databases)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add the option to backup Team apps"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automated deployment of container images using Flux CD"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add Falco and Kubei for runtime security monitoring")),(0,n.kt)("h3",{id:"after-that-we-see-the-following-features-on-the-horizon"},"After that we see the following features on the horizon"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multi tenancy enhancements: Allow teams to create and manage namespaces"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes operators: Expect a growing catalog of curated mature operators with at least capability level 2 (seamless upgrades)."),(0,n.kt)("li",{parentName:"ul"},"Bring Message Queue options to the stack: We would like to settle for one that we can use in the stack internally (we now rely waiting on jobs for conditions)"),(0,n.kt)("li",{parentName:"ul"},"Streaming tools for real time inspection and tagging of traffic"),(0,n.kt)("li",{parentName:"ul"},"A Market place to choose preconfigured apps from, but also unconfigured apps (akin to chart repositories)"),(0,n.kt)("li",{parentName:"ul"},"A Catalog with preconfigured flavours of stateful applications: First arrivals are likely to be MySQL, Redis, Postgres and Mongo. Expect knobs for availability vs affordability to meet current needs"),(0,n.kt)("li",{parentName:"ul"},"Adding buildpack")))}f.isMDXComponent=!0}}]);