(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||r;return n?a.a.createElement(u,l(l({ref:t},c),{},{components:n})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(123)),i={slug:"known-issues/cli",title:"Known Issues: Otomi CLI",sidebar_label:"Otomi CLI"},l={unversionedId:"ki-cli",id:"ki-cli",isDocsHomePage:!1,title:"Known Issues: Otomi CLI",description:"The otomi (diff|apply|sync|template) commands are delegated to helmfile, which in turn delegates the deployment work to helm. Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section.",source:"@site/docs/ki-cli.md",slug:"/known-issues/cli",permalink:"/docs/known-issues/cli",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ki-cli.md",version:"current",sidebar_label:"Otomi CLI",sidebar:"mainSidebar",previous:{title:"Known Issues",permalink:"/docs/known-issues"},next:{title:"Known Issues: Harbor",permalink:"/docs/known-issues/harbor"}},s=[{value:"State drift",id:"state-drift",children:[]},{value:"Deployment errors/problems",id:"deployment-errorsproblems",children:[{value:"1. It can&#39;t deploy a resource when it already exists",id:"1-it-cant-deploy-a-resource-when-it-already-exists",children:[]},{value:"2. Release&#39;s latest state is failed",id:"2-releases-latest-state-is-failed",children:[]},{value:"3. Some resources couldn&#39;t be patched",id:"3-some-resources-couldnt-be-patched",children:[]},{value:"4. Timeout",id:"4-timeout",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"otomi (diff|apply|sync|template)")," commands are delegated to ",Object(r.b)("inlineCode",{parentName:"p"},"helmfile"),", which in turn delegates the deployment work to ",Object(r.b)("inlineCode",{parentName:"p"},"helm"),". Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section."),Object(r.b)("h2",{id:"state-drift"},"State drift"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Problem"),": ",Object(r.b)("inlineCode",{parentName:"p"},"otomi apply")," does not seem to change resources."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Solution"),": try ",Object(r.b)("inlineCode",{parentName:"p"},"otomi sync")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Background info"),":"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"otomi apply")," command uses helmfile's ",Object(r.b)("inlineCode",{parentName:"p"},"apply")," command, which combines its ",Object(r.b)("inlineCode",{parentName:"p"},"diff")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sync")," commandds. So it first does a ",Object(r.b)("inlineCode",{parentName:"p"},"helmfile diff")," against helm's bookeeping (which resides in versioned secrets, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"sh.helm.release.v1.loki.v1"),"). This is the most cost effective way and does not lead to a new release version being deployed when there are no changes. However, when you changed cluster resources without the otomi cli (so without using helm) this is not reflected in the secrets. ",Object(r.b)("inlineCode",{parentName:"p"},"helmfile diff")," will not see any changes in the secret, so it won't execute the subsequent ",Object(r.b)("inlineCode",{parentName:"p"},"helmfile sync"),". If you wish to overwrite the desired state on the cluster, use the ",Object(r.b)("inlineCode",{parentName:"p"},"otomi sync -l name=$releaseName")," command directly. Usually only for a certain release, so you don't force change all the releases, which costs a lot of time."),Object(r.b)("h2",{id:"deployment-errorsproblems"},"Deployment errors/problems"),Object(r.b)("p",null,"Helmfile uses Helm 3 under the hood, and it will throw errors in certain situations:"),Object(r.b)("h3",{id:"1-it-cant-deploy-a-resource-when-it-already-exists"},"1. It can't deploy a resource when it already exists"),Object(r.b)("p",null,"When a resource already exists and was not deployed with the chart before (alien to Helm), it is possible to 'adopt' the resource beforehand by labeling and annotating them correctly:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"k -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-name=$RELEASE\nk -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-namespace=$NAMESPACE\nk -n $NS label --overwrite $KIND $NAME app.kubernetes.io/managed-by=Helm\n")),Object(r.b)("p",null,"This functionality exists in the stack in ",Object(r.b)("inlineCode",{parentName:"p"},"bin/upgrades/adopt-by-helm.sh"),", and is used in the upgrade scripts."),Object(r.b)("h3",{id:"2-releases-latest-state-is-failed"},"2. Release's latest state is failed"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'Error: "$releaseName" has no deployed releases')),Object(r.b)("p",null,"This may happen when you try to install a chart (usually for the first time) and it fails. This results in the release's deployment having state 'failed'."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Solution"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When this was the first install: destroy with ",Object(r.b)("inlineCode",{parentName:"li"},"otomi hf -l name=$releaseName destroy")," and then apply with ",Object(r.b)("inlineCode",{parentName:"li"},"otomi apply -l name=$releaseName")," again."),Object(r.b)("li",{parentName:"ul"},"When it was successfully deployed before: remove the last versioned helm secret that is causing the blockage (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"sh.helm.release.v1.loki.v3"),")")),Object(r.b)("h3",{id:"3-some-resources-couldnt-be-patched"},"3. Some resources couldn't be patched"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Error: UPGRADE FAILED: failed to replace object: ... field is immutable")),Object(r.b)("p",null,"This usually happens when a manifest is not allowed to be patched in place and needs to be replaced. Retry the borking release with ",Object(r.b)("inlineCode",{parentName:"p"},"otomi apply -l name=$releaseName --extraArgs='--force=true'")," which does exactly that."),Object(r.b)("h3",{id:"4-timeout"},"4. Timeout"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Problem"),": Sometimes the otomi cli will time out when operating on a Google cluster."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cause"),": This happens when the containerized kubectl binary wants to refresh an access token, but it can't find the binary that was registered to do so in the otomi docker container."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Workaround"),": Retry the command. Before every invocation with the containerized ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl")," binary, otomi cli first runs ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl version")," with the local binary to invoke a token refresh, resulting in an up-to-date config to mount."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Background"),":"),Object(r.b)("p",null,"The otomi cli is a docker container with all the binaries it needs to deploy to these clusters. When running a command the local cloud configs are mounted. These configs may contain configuration for token refresh mechanisms, including the name of a binary to execute with certain parameters. This makes it possible to include the binaries in the image, and make them available via the known ",Object(r.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(r.b)("p",null,"However, Google Cloud SDK breaks with that approach, by tightly coupling a hard path to the local gcloud binary. Sample user section from ",Object(r.b)("inlineCode",{parentName:"p"},"$KUBECONFIG"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"- name: gke_otomi-cloud_europe-west4_otomi-gke-demo\n  user:\n    auth-provider:\n      config:\n        access-token: xxxxxxxxx\n        cmd-args: config config-helper --format=json\n        cmd-path: /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/gcloud\n        expiry: '2020-10-29T02:15:37Z'\n        expiry-key: '{.credential.token_expiry}'\n        token-key: '{.credential.access_token}'\n      name: gcp\n")),Object(r.b)("p",null,"This will not work with containerization unfortunately. We also can't predict the path on the users host computer to this binary, so we have to hope for Google to fix this some day. They are not inclined to do so it seems:"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://issuetracker.google.com/issues/171493249"}),"https://issuetracker.google.com/issues/171493249")),Object(r.b)("p",null,"Maybe they will start to see the importance of this after getting more feedback ;)"))}p.isMDXComponent=!0}}]);