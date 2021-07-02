(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(128)),i={slug:"console/settings",title:"Settings"},o={unversionedId:"cons-settings",id:"cons-settings",isDocsHomePage:!1,title:"Settings",description:'This page describes the Otomi patform settings available only to users with the "admin" role:',source:"@site/docs/cons-settings.md",slug:"/console/settings",permalink:"/docs/console/settings",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/cons-settings.md",version:"current",sidebar:"mainSidebar",previous:{title:"Configuring secrets",permalink:"/docs/console/configuring-secrets"},next:{title:"Deploy changes",permalink:"/docs/console/deploy-changes"}},b=[{value:"Alerts",id:"alerts",children:[]},{value:"Customer",id:"customer",children:[]},{value:"DNS",id:"dns",children:[]},{value:"KMS",id:"kms",children:[]},{value:"Home",id:"home",children:[]},{value:"OIDC",id:"oidc",children:[]},{value:"Otomi",id:"otomi",children:[]},{value:"Policies",id:"policies",children:[]},{value:"SMTP",id:"smtp",children:[]}],c={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,'This page describes the Otomi patform settings available only to users with the "admin" role:'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#alerts"}),"Alerts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#customer"}),"Customer")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#dns"}),"DNS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#kms"}),"KMS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#home"}),"Home")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#oidc"}),"OIDC")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#otomi"}),"Otomi")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#policies"}),"Policies")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#smtp"}),"SMTP"))),Object(l.b)("h3",{id:"alerts"},"Alerts"),Object(l.b)("p",null,"Defines alerting endpoints for alertmanager and deployment feedback. The list of providers selected in ",Object(l.b)("inlineCode",{parentName:"p"},"Notification receivers"),' should reflect their configuration. I.e. when receiver "slack" is chosen, the slack configuration needs to be defined.'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Repeat interval"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates waiting time before sending a notification again after it was sent successfully for an alert. (Usually ~3h or more).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group interval"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slack"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slack webhook url and channels for critical and non-critical alerts.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MSteams"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Microsoft Teams webhook urls for critical (high prio) and non-critical alerts (low prio).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email address(es) for critical and non-critical alerts.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Notification receivers"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Select default notification channel(s) for receiving alerts.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Drone notifications"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Channel to be used by the deployment pipeline for failure/success notifications. Can only be delivered to Slack or MSteams (for now).")))),Object(l.b)("h3",{id:"customer"},"Customer"),Object(l.b)("p",null,"Defines customer information. Used for naming the cluster in alerts: ",Object(l.b)("inlineCode",{parentName:"p"},"$customer/$cloud/$cluster"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Lowercase name")))),Object(l.b)("h3",{id:"dns"},"DNS"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Zones"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Defines the dns zones accessible by the credentials given in the "Provider" section underneath.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provider"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The provider hosting the dns zones. Can be AWS, Azure or Google.")))),Object(l.b)("h3",{id:"kms"},"KMS"),Object(l.b)("p",null,"Defines the Key Managment Service information needed to unseal secrets containers used by otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the ",Object(l.b)("inlineCode",{parentName:"p"},"otomi-values")," repo), and another one for sealing/unsealing Vault storage. (Coming soon!)"),Object(l.b)("p",null,"IMPORTANT NOTES:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text."),Object(l.b)("li",{parentName:"ul"},"When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!")),Object(l.b)("p",null,"It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide."),Object(l.b)("h4",{id:"sops"},"SOPS"),Object(l.b)("p",null,"Credentials to a KMS used by SOPS. For now it expects the ",Object(l.b)("inlineCode",{parentName:"p"},".sops.yaml")," file in the root of the ",Object(l.b)("inlineCode",{parentName:"p"},"otomi/values")," repo to have the configuration pointing to the keys in use there. (Soon this file will be generated from key configuration gathered here.)"),Object(l.b)("h4",{id:"vault"},"Vault"),Object(l.b)("p",null,"Settings for Vault are now found under ",Object(l.b)("inlineCode",{parentName:"p"},"charts.vault")," but will move here soon."),Object(l.b)("h3",{id:"home"},"Home"),Object(l.b)("p",null,'Exactly similar to the "Alerts" section, but with a different intent: the configuration here is meant to target "Home" alerting endpoints. This allows for a 3rd party to also monitor the system. (Handy when setting up Otomi as a managed service for clients that want to receive notifications themselves.)'),Object(l.b)("h3",{id:"oidc"},"OIDC"),Object(l.b)("p",null,"Settings to connect with an external Identity Provider (Bring Your Own IDP). Allows to map IDP group names to Otomi superadmins (",Object(l.b)("inlineCode",{parentName:"p"},"adminGroupID"),") and team admins (",Object(l.b)("inlineCode",{parentName:"p"},"teamAdminGroupID"),")."),Object(l.b)("p",null,"Some settings are left for the case when Keycloak is not needed (it is heavy, and small teams might not need authorization), and are used by grafana only:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Auth url"),Object(l.b)("li",{parentName:"ul"},"Api url"),Object(l.b)("li",{parentName:"ul"},"Token url")),Object(l.b)("h3",{id:"otomi"},"Otomi"),Object(l.b)("p",null,"Settings and feature flags that influence the way otomi behaves."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Admin password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default admin password for all Otomi apps. Handy for quick rotation ;)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additional Clusters"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of additional clusters to select in the Otomi console.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"External load balancer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set this to true when an external load balancer exists (Azure AppGW, Google Apigee) or needs to be started (AWS ALB). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Home monitored"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'When this is turned on alerts will also be sent to the endpoints configured in the "Home" settings.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Managed masters"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether masters are managed and not under control. Set this to false when onprem.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multi-tenancy"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Will separate team metrics and logs. Disabling this lets everybody be admin and see everything. Will still use team-","*"," namespaces for segmentation of services, but not use authorization of users.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pull secret"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A pull secret that gives access to the Otomi API. Needs and enterprise license.")))),Object(l.b)("h3",{id:"policies"},"Policies"),Object(l.b)("p",null,"This section allows to turn Open Policy Agent (OPA) policies on or off, and also set default parameters to be used by them."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"banned-image-tags"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add any image tags for containers that are not allowed in your cluster.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"container-limits"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set global compute limits for your containers.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-allowed-repos"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add globally allowed repositories for version control.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-host-filesystem"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set policies for the host filesystem of all Kubernetes cluster nodes.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-allowed-users"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default user (UID) settings to force containers to run with. It is recommended to at least set 'runAsUser' to 'MustRunAsNonRoot' to disallow root.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-host-security"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether a pod is allowed to access the host PID namespace/host IPC, or if a pod defines host aliases.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-host-networking-ports"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether a pod can access ports on the host.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-privileged"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether privileged containers can escalate to root privileges on the node.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-capabilities"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to allow containers with sufficient capabilities granted to obtain escalated access.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-forbidden-sysctls"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determine what system controls are allowed or not.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-apparmor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Prevents an application from accessing files it should not access.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-seccomp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reduces the chance that a kernel vulnerability will be successfully exploited.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"psp-selinux"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Security-enhanced Linux.")))),Object(l.b)("p",null,"Please see the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/open-policy-agent/gatekeeper-library"}),"OPA Gatekeeper policy library")," as it is the source for the policies here. We made a selection of usable policies for Otomi and adapted them to be used by Conftest as well for static analysis of manifests generated by Otomi."),Object(l.b)("h3",{id:"smtp"},"SMTP"),Object(l.b)("p",null,"Mail server settings. In case email notifications are wanted."))}s.isMDXComponent=!0},128:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);