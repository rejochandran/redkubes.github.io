(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(167)),i={slug:"development",title:"Development",sidebar_label:"Development"},l={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Development",description:"1. Editing source files",source:"@site/community/development.md",slug:"/development",permalink:"/community/development",editUrl:"https://github.com/redkubes/redkubes/edit/master/community/development.md",version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1626465929,sidebar_label:"Development",sidebar:"community",previous:{title:"Contributor Covenant Code of Conduct",permalink:"/community/code-of-conduct"}},c=[{value:"1. Editing source files",id:"1-editing-source-files",children:[]},{value:"2. Validating changes",id:"2-validating-changes",children:[{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]}]},{value:"3. Diffing changes",id:"3-diffing-changes",children:[]},{value:"4. Deploying changes",id:"4-deploying-changes",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-editing-source-files"},"1. Editing source files"),Object(r.b)("p",null,"Most of the code is in go templates: helmfile's ",Object(r.b)("inlineCode",{parentName:"p"},"*.gotmpl")," and helm chart's ",Object(r.b)("inlineCode",{parentName:"p"},"templates/*.yaml"),". Please become familiar with it's intricacies by reading our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core/docs/GO_TEMPLATING.md"}),"special section on go templating"),"."),Object(r.b)("p",null,"For editing the ",Object(r.b)("inlineCode",{parentName:"p"},"values-schema.yaml")," please refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core/docs/meta-schema-validation.md"}),"meta-schema documentation"),"."),Object(r.b)("p",null,"For working with ",Object(r.b)("inlineCode",{parentName:"p"},"bats")," and adding tests to ",Object(r.b)("inlineCode",{parentName:"p"},"bin/tests/*")," please refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://bats-core.readthedocs.io/en/latest/"}),"online bats documentation")),Object(r.b)("p",null,"You can define OPA policies in ",Object(r.b)("inlineCode",{parentName:"p"},"policies/*/src.rego")," and unit tests in ",Object(r.b)("inlineCode",{parentName:"p"},"policies/*/src_test.rego")," files that are used both for statical analysis (also at build time), as well as by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/open-policy-agent/gatekeeper"}),"gatekeeper")," (at run time) to check whether manifests are conformant. Please read ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core/docs/policies.md"}),"more about our setup in the docs"),"."),Object(r.b)("h2",{id:"2-validating-changes"},"2. Validating changes"),Object(r.b)("p",null,"For the next steps you will need to export ",Object(r.b)("inlineCode",{parentName:"p"},"ENV_DIR")," to point to your values folder, and source the aliases:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# assuming you created otomi-values repo next to this:\nexport ENV_DIR=$PWD/../otomi-values\n. bin/aliases\n")),Object(r.b)("h3",{id:"input"},"Input"),Object(r.b)("p",null,"Start by validating the configuration values against the ",Object(r.b)("inlineCode",{parentName:"p"},"values-schema.yaml")," with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# all clusters\notomi validate-values\n# For the next step you will also need to export`CLOUD` and `CLUSTER`, as it is only validating a configured target cluster:\notomi validate-values: 1\n")),Object(r.b)("p",null,"Any changes made to the meta-schema will then also be automatically validated."),Object(r.b)("h3",{id:"output"},"Output"),Object(r.b)("p",null,"You can check whether resulting manifests are conform our specs with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# all clusters\notomi validate-templates\n# For the next step you will also need to export`CLOUD` and `CLUSTER`, as it is only validating a configured target cluster:\nexport CLOUD=google CLUSTER=demo\notomi validate-templates 1\n")),Object(r.b)("p",null,"This will check whether any CRs are matching their CRDs, but also check for k8s manifest best practices using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.kubeval.com"}),"kubeval"),"."),Object(r.b)("p",null,"And to run the policy checks run the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# all clusters\notomi check-policies\n# For the next step you will also need to export`CLOUD` and `CLUSTER`, as it is only validating a configured target cluster:\notomi check-policies 1\n")),Object(r.b)("h2",{id:"3-diffing-changes"},"3. Diffing changes"),Object(r.b)("p",null,"To test changes in code against running clusters you will need to export at least ",Object(r.b)("inlineCode",{parentName:"p"},"ENV_DIR"),", ",Object(r.b)("inlineCode",{parentName:"p"},"CLOUD")," and ",Object(r.b)("inlineCode",{parentName:"p"},"CLUSTER")," and source the aliases:"),Object(r.b)("p",null,"After changing code you can do a diff to see everything still works and what has changed in the output manifests:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi diff\n# or target one release:\notomi diff -l name=prometheus-operator\n")),Object(r.b)("h2",{id:"4-deploying-changes"},"4. Deploying changes"),Object(r.b)("p",null,"It is preferred that deployment is done from the values repo, as it is tied to the clusters listed there only, and thus has a smaller blast radius. When you feel that you are in control and want fast iteration you can connect to a values repo directly by exporting ",Object(r.b)("inlineCode",{parentName:"p"},"ENV_DIR"),". It is mandatory and won't work without it. The CLI will also check that you are targeting ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"current-context")," as a failsafe mechanism."),Object(r.b)("p",null,"To deploy everything in the stack:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# target your cluster\nexport CLOUD=google && CLUSTER=demo\n# and deploy\notomi deploy\n")),Object(r.b)("p",null,"NOTICE: when on GKE this may sometimes result in an access token refresh error as the full path to the ",Object(r.b)("inlineCode",{parentName:"p"},"gcloud")," binary is referenced from GKE's token refresh mechanism in ",Object(r.b)("inlineCode",{parentName:"p"},".kube/config"),", which is mounted from the host, but inaccessible from within the container. (See bug report: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://issuetracker.google.com/issues/171493249"}),"https://issuetracker.google.com/issues/171493249"),"). Retrying the command usuall works, so do that to work around it for now."),Object(r.b)("p",null,"It is also possible to target individual helmfile releases from the stack:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply -l name=prometheus-operator\n")),Object(r.b)("p",null,"This will first do a ",Object(r.b)("inlineCode",{parentName:"p"},"diff")," and then a ",Object(r.b)("inlineCode",{parentName:"p"},"sync"),". But if you expect the helm bookkeeping to not match the current state (because resources were manipulated without helm), then do a sync:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi sync -l name=prometheus-operator\n")))}p.isMDXComponent=!0}}]);