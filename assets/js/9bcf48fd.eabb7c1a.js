(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[2046],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,N=k["".concat(d,".").concat(u)]||k[u]||s[u]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5187:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={slug:"installation/chart/",title:"Install with Chart"},d={unversionedId:"inst-chart",id:"inst-chart",isDocsHomePage:!1,title:"Install with Chart",description:"Use Helm to install Otomi",source:"@site/docs/inst-chart.md",sourceDirName:".",slug:"/installation/chart/",permalink:"/docs/installation/chart/",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/inst-chart.md",version:"current",frontMatter:{slug:"installation/chart/",title:"Install with Chart"},sidebar:"mainSidebar",previous:{title:"Prerequisites",permalink:"/docs/installation/prerequisites"},next:{title:"Install with CLI",permalink:"/docs/installation/cli/"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing via Helm repository",id:"installing-via-helm-repository",children:[{value:"Adding otomi helm repository",id:"adding-otomi-helm-repository",children:[]},{value:"Installing the Chart",id:"installing-the-chart",children:[]}]},{value:"Installing from source",id:"installing-from-source",children:[{value:"Download source",id:"download-source",children:[]},{value:"Install from source",id:"install-from-source",children:[]}]},{value:"Uninstalling the Chart",id:"uninstalling-the-chart",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Minimal required values",id:"minimal-required-values",children:[]},{value:"Providers",id:"providers",children:[]},{value:"Optional values",id:"optional-values",children:[]}]}],m={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Use Helm to install Otomi"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"ATTENTION: The new Otomi Chart install is still in PREVIEW!")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you encounter problems, please create an issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/issues"},"here"),"."))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See all the prerequisites ",(0,l.kt)("a",{parentName:"li",href:"/docs/installation/prerequisites"},"here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm 3.0")),(0,l.kt)("li",{parentName:"ul"},"A values.yaml. See ",(0,l.kt)("a",{parentName:"li",href:"#configuration"},"configuration")," below for more details.")),(0,l.kt)("h2",{id:"installing-via-helm-repository"},"Installing via Helm repository"),(0,l.kt)("h3",{id:"adding-otomi-helm-repository"},"Adding otomi helm repository"),(0,l.kt)("p",null,"First add the Otomi Helm repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_repo/"},"helm repo")," for command documentation."),(0,l.kt)("h3",{id:"installing-the-chart"},"Installing the Chart"),(0,l.kt)("p",null,"Now install the chart with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"my-otomi-release")," (a custom name that you choose) and with the prepared ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi\n")),(0,l.kt)("p",null,"You can also install a specific version of the chart. See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/releases"},"here")," for a list of all available versions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi --version 0.1.4-rc6\n")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_install/"},"helm install")," for command documentation."),(0,l.kt)("h2",{id:"installing-from-source"},"Installing from source"),(0,l.kt)("p",null,"As an alternative, you can also clone the otomi-core source code from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core"},"Github")," and install otomi using the chart source code."),(0,l.kt)("h3",{id:"download-source"},"Download source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redkubes/otomi-core.git\ncd otomi-core\n")),(0,l.kt)("h3",{id:"install-from-source"},"Install from source"),(0,l.kt)("p",null,"Now customize the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file. See ",(0,l.kt)("a",{parentName:"p",href:"#configuring"},"configuration")," below for more details."),(0,l.kt)("p",null,"Use the following command to install the chart with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"my-otomi-release")," (a custom name that you choose)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -f /path/to/values.yaml my-otomi-release chart/otomi\n")),(0,l.kt)("h2",{id:"uninstalling-the-chart"},"Uninstalling the Chart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall my-otomi-release\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing"},"Customizing the Chart Before Installing"),". To see all configurable options with detailed comments, visit the chart's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml"},"values.yaml"),", or run these configuration commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values otomi-repo/otomi\n")),(0,l.kt)("h3",{id:"minimal-required-values"},"Minimal required values"),(0,l.kt)("p",null,"The following table lists the minimal required values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cluster.domainSuffix")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cluster.name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the Kubernetes cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cluster.provider")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customer.name")),(0,l.kt)("td",{parentName:"tr",align:null},"Organization name of Otomi user"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.provider")),(0,l.kt)("td",{parentName:"tr",align:null},"The cloud provider where the Kubernetes cluster is running. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"aws"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"azure")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"google"),". See ",(0,l.kt)("a",{parentName:"td",href:"#providers"},"providers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.clientID")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.clientSecret")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.adminGroupID")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.authUrl")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.issuer")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.teamAdminGroupID")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.tenantID")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oidc.tokenUrl")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"otomi.version")),(0,l.kt)("td",{parentName:"tr",align:null},"The version should not be changed! (Consider it read only)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"APP_VERSION_PLACEHOLDER"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"otomi.adminPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"The password of the otomi-admin account"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider")),(0,l.kt)("td",{parentName:"tr",align:null},"The cloud provider where the DNS service is used. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"aws"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"azure")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"google"),". See ",(0,l.kt)("a",{parentName:"td",href:"#providers"},"providers")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.gitea.postgresqlPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"The password used for PostgreSQL db used by Gitea"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.keycloak.idp.alias")),(0,l.kt)("td",{parentName:"tr",align:null},"Name shown on keycloak login page as a button"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"otomi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.keycloak.idp.clientID")),(0,l.kt)("td",{parentName:"tr",align:null},"Azure ClientID for credentials used by the apps' clients to access keycloak in the cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.keycloak.idp.clientSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Azure ClientSecret for credentials used by the apps' clients to access keycloak in the cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.keycloak.postgresqlPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"The password used for PostgreSQL db used by KeyCloak. Needs to be set to avoid generating a new one each time"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.loki.adminPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"The password used for used for splitting logs for teams"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.kubeapps.postgresqlPassword")),(0,l.kt)("td",{parentName:"tr",align:null},"The password used for PostgreSQL db used by KeyCloak. Needs to be set to avoid generating a new one each time"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"charts.oauth2-proxy.config.cookieSecret")),(0,l.kt)("td",{parentName:"tr",align:null},"Needs to be set to avoid generating a new one each time"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.vault.token")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))))),(0,l.kt)("h3",{id:"providers"},"Providers"),(0,l.kt)("h4",{id:"aws"},"AWS"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.aws.clientID")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.aws.clientSecret")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.aws.accessKey")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.aws.secretKey")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider.aws.region")),(0,l.kt)("td",{parentName:"tr",align:null},"The AWS region where the Route53 zone is hosted"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))))),(0,l.kt)("h4",{id:"azure"},"Azure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.azure.tenantID")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.azure.clientID")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.azure.clientSecret")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.azure.keys")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider.azure.aadClientId")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider.azure.aadClientSecret")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider.azure.tenantId")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider.azure.subscriptionId")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))))),(0,l.kt)("h4",{id:"google"},"Google"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.google.accountJson")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.google.project")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kms.sops.google.keys")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider.google.serviceAccountKey")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dns.provider.google.project")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"''"))))),(0,l.kt)("h3",{id:"optional-values"},"Optional values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default")))),(0,l.kt)("p",null,"| ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.region")," | The cloud region where the Kubernetes cluster is running | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.provider")," | The cloud provider where the Kubernetes cluster is running | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.k8sVersion")," | The Kubernetes version of the cluster | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"image.repository")," | The otomi-core image name | ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi/core")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"image.tag")," | The otomi-core image tag | ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"image.pullPolicy")," | The image pull policy | ",(0,l.kt)("inlineCode",{parentName:"p"},"IfNotExists")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"tasksImage.repository")," | The otomi-tasks image name | ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi/tasks")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"tasksImage.tag")," | The otomi-tasks image tag | ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi.pullSecret")," | Add a pullsecret to run in EE mode | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi.isMultitenant")," | Configure Otomi to run in multi-tenant mode ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"charts.gitea.enabled")," | Use Gitea as a local GIT repository. Always true when deploying with chart | ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"charts.nginx-ingress.private.enabled")," | Enable to start a LB on the private network | ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"charts.cert-manager.email")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"charts.external-dns.domainFilters")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"charts.external-dns.zoneIdFilters")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.apiName")," | The name of the cluster API | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.apiServer")," | The URL of the cluster API | ",(0,l.kt)("inlineCode",{parentName:"p"},"''")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"charts.cert-manager.stage")," | Use ",(0,l.kt)("inlineCode",{parentName:"p"},"production")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"staging")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"production")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"teamConfig")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"alerts")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"services")," | | ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," |"))}s.isMDXComponent=!0}}]);