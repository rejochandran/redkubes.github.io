"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3563],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=c(a),k=n,u=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return a?r.createElement(u,l(l({ref:e},m),{},{components:a})):r.createElement(u,l({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8302:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={slug:"architecture",title:"Otomi Architecture",sidebar_label:"Architecture"},l=void 0,o={unversionedId:"architecture",id:"architecture",title:"Otomi Architecture",description:"Projects",source:"@site/product/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/product/architecture",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/architecture.md",tags:[],version:"current",lastUpdatedBy:"Sander Rodenhuis",lastUpdatedAt:1676212513,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{slug:"architecture",title:"Otomi Architecture",sidebar_label:"Architecture"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/product/introduction"},next:{title:"Roadmap",permalink:"/product/roadmap"}},p={},c=[{value:"Projects",id:"projects",level:2},{value:"Otomi Core",id:"otomi-core",level:3},{value:"Otomi Tasks",id:"otomi-tasks",level:3},{value:"Otomi Clients",id:"otomi-clients",level:3},{value:"Otomi API",id:"otomi-api",level:3},{value:"Otomi Console",id:"otomi-console",level:3},{value:"Integrated Applications",id:"integrated-applications",level:2},{value:"Ingress architecture",id:"ingress-architecture",level:2}],m={toc:c};function s(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,"Otomi consists out of the following projects:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Project"),(0,n.kt)("th",{parentName:"tr",align:null},"open source"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/redkubes/otomi-core"},"otomi-core")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/redkubes/otomi-tasks"},"otomi-tasks")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/redkubes/otomi-clients"},"otomi-clients")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/redkubes/otomi-console"},"otomi-console")),(0,n.kt)("td",{parentName:"tr",align:null},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/redkubes/otomi-api"},"otomi-api")),(0,n.kt)("td",{parentName:"tr",align:null},"No")))),(0,n.kt)("h3",{id:"otomi-core"},"Otomi Core"),(0,n.kt)("p",null,"Otomi Core is the heart of Otomi and contains a suite of the following integrated Kubernetes applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/istio/istio"},"Istio"),": The service mesh framework with end-to-end transit encryption"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vmware-tanzu/velero"},"Velero"),": Back up and restore your Kubernetes cluster resources and persistent volumes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-cd"},"Argo CD"),": Declarative continuous deployment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/openclarity/kubeclarity"},"KubeClarity"),": Detect vulnerabilities of container images"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/knative/serving"},"Knative"),": Deploy and manage serverless workloads"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus"},"Prometheus"),": Collecting container application metrics"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki"},"Loki"),": Collecting container application logs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/goharbor/harbor"},"Harbor"),": Container image registry with role-based access control, image scanning, and image signing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/vault"},"HashiCorp Vault"),": Manage Secrets and Protect Sensitive Data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vmware-tanzu/kubeapps"},"Kubeapps"),": Launching and managing applications on Kubernetes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/keycloak/keycloak"},"Keycloak"),": Identity and access management for modern applications and services"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/open-policy-agent/opa"},"OPA"),": Policy-based control for cloud-native environments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://letsencrypt.org/"},"Let's Encrypt"),": A nonprofit Certificate Authority providing industry-recognized TLS certificates"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jaegertracing/jaeger"},"Jaeger"),": End-to-end distributed tracing and monitor for complex distributed systems"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kiali/kiali"},"Kiali"),": Observe Istio service mesh relations and connections"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns"},"External DNS"),": Synchronize exposed ingresses with DNS providers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harness/drone"},"Drone"),": Continuous integration platform built on Docker"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-gitea/gitea"},"Gitea"),": Self-hosted Git service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx"},"Nginx Ingress Controller"),": Ingress controller for Kubernetes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/minio/minio"},"Minio"),": High performance Object Storage compatible with Amazon S3 cloud storage service")),(0,n.kt)("p",null,"Otomi Core is made available (per release) as a container image."),(0,n.kt)("p",null,"Otomi Core also contains the source code for Otomi CLI. Otomi CLI is a custom developed Command Line Interface for Otomi. Otomi CLI can be used for advanced initial configuration (bootstrapping), deployment, sync, push, template validation, and much more."),(0,n.kt)("h3",{id:"otomi-tasks"},"Otomi Tasks"),(0,n.kt)("p",null,"Otomi Tasks consists of a set of Kubernetes jobs. These jobs ensure that the configuration of applications integrated in Otomi are always equal to the desired-state configuration (see Otomi Values). An example: If a team is created via Otomi Console (in combination with Otomi API), Otomi Tasks ensures that a project is created for the new team in Harbor, the access to the project in Harbor is configured, a robot account (that can be used to push images to the project registry) is created and that a pull secret is created in the namespace of the team."),(0,n.kt)("p",null,"Otomi Tasks is currently used to configure the following applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KeyCloak"),(0,n.kt)("li",{parentName:"ul"},"Harbor"),(0,n.kt)("li",{parentName:"ul"},"Gitea"),(0,n.kt)("li",{parentName:"ul"},"Drone"),(0,n.kt)("li",{parentName:"ul"},"Otomi (copy-certs and wait-for)")),(0,n.kt)("h3",{id:"otomi-clients"},"Otomi Clients"),(0,n.kt)("p",null,"A factory to build and publish openapi clients used in the redkubes/otomi-tasks repo."),(0,n.kt)("p",null,"Otomi Clients is currently used to generate openapi clients for the following applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"KeyCloak"),(0,n.kt)("li",{parentName:"ul"},"Harbor"),(0,n.kt)("li",{parentName:"ul"},"Gitea")),(0,n.kt)("h3",{id:"otomi-api"},"Otomi API"),(0,n.kt)("p",null,"Otomi API allows for a controlled change of all Otomi Values, based on a configuration scheme and is the brain of Otomi. Otomi API runs as a container on each cluster running."),(0,n.kt)("h3",{id:"otomi-console"},"Otomi Console"),(0,n.kt)("p",null,"Otomi Console is the User Interface of Otomi. Otomi Console communicates with Otomi API for reading and changing Otomi Values configuration. Otomi Console also offers (via the Otomi Apps option) shortcuts to the UI of the various integrated applications."),(0,n.kt)("h2",{id:"integrated-applications"},"Integrated Applications"),(0,n.kt)("p",null,"Otomi contains four types of applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Core applications: applications that are activated by default"),(0,n.kt)("li",{parentName:"ul"},"Shared applications: applications that are shared between teams. Shared applications are user-, and role-aware or not (user is anonymous)"),(0,n.kt)("li",{parentName:"ul"},"Team applications: applications with a dedicated instance per team"),(0,n.kt)("li",{parentName:"ul"},"Optional applications: applications that are optional and can be activated by the platform admin")),(0,n.kt)("p",null,"The following table shows all integrated applications:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Application"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Core"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Shared"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Team"),(0,n.kt)("th",{parentName:"tr",align:"center"},"User/role-aware"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Istio"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ingress NGINX Controller"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Knative"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/apps/keycloak"},"KeyCloak")),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Prometheus Server"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Prometheus kube state metrics"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Alertmanager"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Grafana/Loki"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/apps/gatekeeper"},"Gatekeeper Operator")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/apps/vault"},"Hashicorp Vault")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/apps/harbor"},"Harbor")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/apps/kubeapps"},"Kubeapps")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/apps/drone"},"Drone")),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Gitea"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Httpbin"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Jeager"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Kiali"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"KubeClarity"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Velero"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Minio"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"X")))),(0,n.kt)("h2",{id:"ingress-architecture"},"Ingress architecture"),(0,n.kt)("p",null,"Otomi installs and configures an advanced ingress architecture. Ingress for a service can be configured using Otomi Services. The following figure shows the ingress and SSO architecture."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img/ingress-overview",src:a(2701).Z,width:"1149",height:"828"})),(0,n.kt)("p",null,"The ingress & SSO architecture overview explained:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(optional) an external gateway is used for termination of external traffic (e.g. an Azure Application Gateway or an AWS Application Load Balancer)."),(0,n.kt)("li",{parentName:"ul"},"2 Ingress NGINX controllers are deployed, one for public access and one for authenticated access."),(0,n.kt)("li",{parentName:"ul"},"Authenticated (SSO) access is handled by an oauth2 proxy and KeyCloak. The user logs in using the Otomi custom KeyCloak login page. "),(0,n.kt)("li",{parentName:"ul"},"KeyCloak is configured with an external IDP (optional) or uses local accounts. After authentication, KeyCloak provides a normalized JWT token. The JWT token is used by integrated core applications (providing user and role information) and team services configured with SSO"),(0,n.kt)("li",{parentName:"ul"},"4 Istio (ingress) gateways are provisioned: ")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"a public gateway for routing public (non authenticated traffic to a service"),(0,n.kt)("li",{parentName:"ol"},"an authentication gateway to route authenticated traffic to a service"),(0,n.kt)("li",{parentName:"ol"},"a local gateway (for local cluster routing)"),(0,n.kt)("li",{parentName:"ol"},"a Knative gateway to route traffic to Knative services")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For each service a Istio virtual service is configured."),(0,n.kt)("li",{parentName:"ul"},"One egress gateway is provisioned for all egress traffic (network policies allow all egress traffic).")))}s.isMDXComponent=!0},2701:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/ingress-overview-419bc5e7be19dafdebd9a8ec6b04a3b1.svg"}}]);