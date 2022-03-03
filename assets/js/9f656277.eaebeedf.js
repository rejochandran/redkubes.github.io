"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6282],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},853:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"installation/prerequisites",title:"Minimal requirements"},s=void 0,u={unversionedId:"inst-prerequisites",id:"inst-prerequisites",title:"Minimal requirements",description:"Client binaries",source:"@site/docs/inst-prerequisites.md",sourceDirName:".",slug:"/installation/prerequisites",permalink:"/docs/installation/prerequisites",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/inst-prerequisites.md",tags:[],version:"current",frontMatter:{slug:"installation/prerequisites",title:"Minimal requirements"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/installation/"},next:{title:"Optional configuration",permalink:"/docs/installation/optional"}},c=[{value:"Client binaries",id:"client-binaries",children:[],level:2},{value:"Kubernetes",id:"kubernetes",children:[{value:"AWS",id:"aws",children:[],level:3},{value:"Azure (AKS)",id:"azure-aks",children:[],level:3},{value:"Google (GKE)",id:"google-gke",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"client-binaries"},"Client binaries"),(0,o.kt)("p",null,"Please make sure the following client binaries exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubectl")," to access the cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," must be installed and running, as Otomi runs in a container."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," for helm chart installation of Otomi."),(0,o.kt)("li",{parentName:"ul"},"Optional: ",(0,o.kt)("a",{parentName:"li",href:"/docs/cli/"},"Otomi CLI"))),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Otomi requires a running Kubernetes cluster of version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.18")," up to ",(0,o.kt)("inlineCode",{parentName:"p"},"1.21")," with a node pool with at least ",(0,o.kt)("strong",{parentName:"p"},"12 vCPU")," threads and ",(0,o.kt)("strong",{parentName:"p"},"32GB+ RAM")," in AWS, Azure, Google Cloud Platform."),(0,o.kt)("p",null,"For testing and experimentation, we advise to use the following machine/instance types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure: 3 x DS3_v2 (4 vCPU / 14 GiB RAM)"),(0,o.kt)("li",{parentName:"ul"},"AWS: 3 x t2.xlarge (4 vCPU / 16 GiB RAM)"),(0,o.kt)("li",{parentName:"ul"},"GCP: 3 x e2-standard-4 (4 vCPU / 16 GiB RAM)")),(0,o.kt)("p",null,"Running Otomi on an onprem cluster is also supported. More information about installing Otomi on your own hardware can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redkubes/quickstart/tree/main/onprem"},"here")),(0,o.kt)("p",null,"To use the network policies feature in Otomi, make sure to install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.tigera.io/project-calico/"},"Calico")," CNI (or any other CNI that supports Kubernetes network polices)."),(0,o.kt)("p",null,"Follow the instructions below to set up a Kubernetes cluster in your the cloud of your choice:"),(0,o.kt)("h3",{id:"aws"},"AWS"),(0,o.kt)("p",null,"Set up an EKS cluster on AWS: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html")),(0,o.kt)("p",null,"Get access to the cluster with kubectl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --name $CLUSTER_NAME\n")),(0,o.kt)("h3",{id:"azure-aks"},"Azure (AKS)"),(0,o.kt)("p",null,"Set up an AKS cluster on Azure: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal"},"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal")),(0,o.kt)("p",null,"Get access to the cluster with kubectl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"az aks get-credentials --resource-group <resource-group> --name <cluster-name> --admin\n")),(0,o.kt)("h3",{id:"google-gke"},"Google (GKE)"),(0,o.kt)("p",null,"Set up a GKE cluster on Google Cloud Platform: ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to"},"https://cloud.google.com/kubernetes-engine/docs/how-to")),(0,o.kt)("p",null,"Get access to the cluster with kubectl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials <cluster-name> --region <region> --project <project>\n")))}m.isMDXComponent=!0}}]);