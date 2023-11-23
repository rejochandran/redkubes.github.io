"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1254],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,g=d["".concat(m,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={slug:"teams",title:"Platform - Teams",sidebar_label:"Teams"},l=void 0,i={unversionedId:"for-ops/console/teams",id:"for-ops/console/teams",title:"Platform - Teams",description:"- Teams are tenants on the platform to support Development/DevOps teams, projects or even DTAP",source:"@site/docs/for-ops/console/teams.md",sourceDirName:"for-ops/console",slug:"/for-ops/console/teams",permalink:"/docs/for-ops/console/teams",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/console/teams.md",tags:[],version:"current",frontMatter:{slug:"teams",title:"Platform - Teams",sidebar_label:"Teams"},sidebar:"mainSidebar",previous:{title:"Policies",permalink:"/docs/for-ops/console/policies"},next:{title:"Projects",permalink:"/docs/for-ops/console/projects"}},m={},s=[{value:"Team Admin",id:"team-admin",level:2},{value:"Creating new Teams",id:"creating-new-teams",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Teams are tenants on the platform to support Development/DevOps teams, projects or even DTAP"),(0,r.kt)("li",{parentName:"ul"},"A team will get access to Otomi Console, providing access to all the shared apps available on the platform"),(0,r.kt)("li",{parentName:"ul"},"Teams can choose to receive alerts in Microsoft Teams, Slack or email and each team will get access to a project in Harbor and a space in Vault to manage secrets"),(0,r.kt)("li",{parentName:"ul"},"Teams can be allowed self-service features like configure ingress, configure a notification receiver for alerts, change the OIDC group mappings and download the KubeConfig.")),(0,r.kt)("h2",{id:"team-admin"},"Team Admin"),(0,r.kt)("p",null,"By default, Otomi creates a team called Team Admin. Admins can use this team to expose any service in the team-admin namespace, but also in other namespaces."),(0,r.kt)("p",null,"see ",(0,r.kt)("a",{parentName:"p",href:"../../for-devs/console/services"},"Team Services")," for more info about how to create Services in Otomi and how to configure ingress. The only difference here is that when creating Services in Team Admin, the admin can also select the namespace of the service."),(0,r.kt)("p",null,"Another difference between the Team Admin and user created Teams is that Team Admin does not have apps and it is not possible to configure any settings for the team-admin namespace."),(0,r.kt)("h2",{id:"creating-new-teams"},"Creating new Teams"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login with a user who is a member of the ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-admin")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"team-admin")," role")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a name for the team (lowercase). The teamname can not be changed afterwards! Creating a team will result in the creation of namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"team-$NAME"),". The name of a team can be max ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," characters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: Provide a OIDC group name/id granting for granting access to team. Only members of the group will get access to the team")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional (only when Alert Manager is enabled): In order to receive alerts, please choose an alerting endpoint:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Slack"),(0,r.kt)("td",{parentName:"tr",align:null},"Needs a slack webhook url that will give alerts for warnings and criticals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Teams"),(0,r.kt)("td",{parentName:"tr",align:null},"Needs two alerting endpoints, for both warnings as well as criticals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"You may provide a list of email addresses for both 'Non Critical' and 'Critical'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"If none selected"),(0,r.kt)("td",{parentName:"tr",align:null},"Global (admin) alerting endpoint configuration will be used")))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Optional (Only if Opencost is enabled): Configure billing alert quota")),(0,r.kt)("p",null,"Billing alert quota can be configured to receive an alert when a team hits a quota. Quota are not enforced, meaning a team can still consume resources even when a quota has been reached."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Optional: Add Resource Quotas")),(0,r.kt)("p",null,'When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described ',(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"here"),"."),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There is no validation as there is no schema published. Add/change resource quota at your own risk.")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Optional: Configure Azure Monitor")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Configuring Azure Monitor settings will only be active when ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.provider=azure"),").")),(0,r.kt)("p",null,"Azure Monitor is the platform service that provides a single source for monitoring Azure resources."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Azure monitoring"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure monitoring with global settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Takes on the global settings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Azure monitoring with custom settings"),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides any global settings")))),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Private team monitoring")),(0,r.kt)("p",null,"By default, a team will get a dedicated Grafana and Prometheus instance. If Private team monitoring is not enabled, the team will not get a dedicated Grafana and Prometheus instance. This means that to see logs and metrics of team workloads, the platform Grafana instance."),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Turn Network Policy On/Off for the team")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network policies"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled team services will be bound by (ingress) network policies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Egress control"),(0,r.kt)("td",{parentName:"tr",align:null},"When enabled team service egress traffic will be limited to pre-defined endpoints only")))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Add Team self service flags")),(0,r.kt)("p",null,"A user with the ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-admin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"team-admin")," role can delegate permissions to modify certain configuration parameters to the team."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Section"),(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure exposure for Services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"Network policy"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure network polices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Alerts"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure Alerts for the team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Backup"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to create Backups for the team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Billing alert quotas"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure Billing alerts for the team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Oidc"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure OIDC for the team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource quota"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure Resource Quota for the team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Download kube config"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to download the KubeConfig to get Kube API access to the teams namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Download docker config"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to download the Dockerconfig for the teams project in Harbor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Policy"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to turn on/off network policies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apps"),(0,r.kt)("td",{parentName:"tr",align:null},"Argo CD"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to provide team members access to the team Gitops repository in Gitea")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apps"),(0,r.kt)("td",{parentName:"tr",align:null},"Gitea"),(0,r.kt)("td",{parentName:"tr",align:null},"Select to provide team members access to Gitea")))))}c.isMDXComponent=!0}}]);