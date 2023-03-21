"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={slug:"adoption-framework",title:"Otomi as adoption framework for Kubernetes",sidebar_label:"Adoption Framework"},i=void 0,s={unversionedId:"use-cases/adoption-framework",id:"use-cases/adoption-framework",title:"Otomi as adoption framework for Kubernetes",description:"What is an adoption framework for Kubernetes?",source:"@site/product/use-cases/adoption-framework.md",sourceDirName:"use-cases",slug:"/use-cases/adoption-framework",permalink:"/product/use-cases/adoption-framework",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/adoption-framework.md",tags:[],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1679388349,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{slug:"adoption-framework",title:"Otomi as adoption framework for Kubernetes",sidebar_label:"Adoption Framework"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/product/use-cases/overview"},next:{title:"Multi-tenancy",permalink:"/product/use-cases/multi-tenancy"}},l={},d=[{value:"What is an adoption framework for Kubernetes?",id:"what-is-an-adoption-framework-for-kubernetes",level:2},{value:"Why use an adoption framework like Otomi for Kubernetes",id:"why-use-an-adoption-framework-like-otomi-for-kubernetes",level:2},{value:"What are the capabilities of an adoption framework for Kubernetes?",id:"what-are-the-capabilities-of-an-adoption-framework-for-kubernetes",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-an-adoption-framework-for-kubernetes"},"What is an adoption framework for Kubernetes?"),(0,a.kt)("p",null,"A Kubernetes adoption framework is used to support migration to Kubernetes in an efficient and streamlined way. The benefit of a Kubernetes adoption framework is that a number of required capabilities and configurations are established initially, which determine how containerized applications are going to be deployed, secured and operated. A Kubernetes adoption framework provides all the required controls following best practices in the areas of security, compliance, observability, CD, networking and self-service, all based on Infrastructure as Code."),(0,a.kt)("p",null,"A Kubernetes adoption framework is implemented differently for each organization. Each company has different requirements, has to meet different compliance requirements, and uses different cloud infrastructures. Creating a multi-/hybrid cloud Kubernetes landing zone requires a significant investment. Otomi can be used as a Kubernetes adoption framework to create a landing zone on any Kubernetes cluster in any cloud and can be tailored based on organization specific requirements."),(0,a.kt)("h2",{id:"why-use-an-adoption-framework-like-otomi-for-kubernetes"},"Why use an adoption framework like Otomi for Kubernetes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compliant With Security Regulations\nGiven that established parameters apply, developers operate within a well-defined field. This means that companies do not risk of running containerized workloads that differ from their compliance policy. Similarly, the IT manager is less concerned about compliance as it is embedded in the foundation of the IT infrastructure.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Speed \u200b\u200bAnd Scalability\nAs mentioned above, a migration to Kubernetes can happen more quickly with the help of an adoption framework. Preparation time is significantly reduced. Creating a compliant landigzone for Kubernetes can take up to months (or even more) of work (if you have the required knowledge onboard). This time can be cut down to hours with the use of Otomi, resulting considerable cost savings as well as a shorter time-to-market for new applications and more efficiently establishing of DevOps processes. Another key feature inherent in Otomi as an adoption framework is scalability, as it is easy to expand to new environments. It allows the development of standard profiles easily for new Kubernetes clusters in any cloud.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Security And Compliance\nThanks to guardrails, compliance is an integral part of Otomi, meaning developers and engineers can safely operate containerized workloads on Kubernetes and in observance of compliance regulations. What\u2019s more, organizations don\u2019t spend that much time implementing complex configurations with the risk of technical debt. This especially applies to the operational phase. But it doesn\u2019t stop with a one-off setting of the environment. It is also about keeping all environments up to date in an ongoing and consistent way.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Flexibility\nOtomi stands for a high-degree of standardization, which means that engineers only work with environments that others have developed. In addition, a good framework is API-driven to simplify configuration. This flexibility saves time when the Kubernetes environment is scaled up or extended.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A Better Understanding Of Costs\nOrganizations quickly lose control of their engineering expenses because they don\u2019t have a clear overview of the technologies being used and their costs. Otomi reduces unexpected and unnecessary expenses.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Standardized For Multi-Tenancy\nIn a multi-tenant architecture, standardizing tenancy allows you to enforce policies to a group of users. It helps you set up different security profiles and provide access to shared tools with users having specific privileges."))),(0,a.kt)("h2",{id:"what-are-the-capabilities-of-an-adoption-framework-for-kubernetes"},"What are the capabilities of an adoption framework for Kubernetes?"),(0,a.kt)("p",null,"The following picture shows all the required capabilities for a Kubernetes adoption framework, which are all incorporated into Otomi:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"capabilities",src:n(7089).Z,width:"1788",height:"2326"})))}c.isMDXComponent=!0},7089:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/capabilities-aad63fbe048136bfcc184af026171b32.png"}}]);