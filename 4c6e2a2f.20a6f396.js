(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(r,".").concat(p)]||d[p]||u[p]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(127)),r={slug:"installation/configuration",title:"Configuration"},l={unversionedId:"inst-configuration",id:"inst-configuration",isDocsHomePage:!1,title:"Configuration",description:"Assuming the setup steps are completed, you need to now configure the Otomi values repository. This repo is the source configuration for Otomi Container Platform. It contains drone pipeline configurations for each cluster, and each running drone will listen to updates of these values targeting the cluster it is running on. Any updated values might result in different cluster state resources, which will be applied by the Otomi image.",source:"@site/docs/inst-configuration.md",slug:"/installation/configuration",permalink:"/docs/installation/configuration",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/inst-configuration.md",version:"current",sidebar:"mainSidebar",previous:{title:"Setup",permalink:"/docs/installation/setup"},next:{title:"Deployment",permalink:"/docs/installation/deployment"}},c=[{value:"1. Configuration",id:"1-configuration",children:[]},{value:"3. Validation",id:"3-validation",children:[]},{value:"4. Configure Dependencies",id:"4-configure-dependencies",children:[{value:"IDP",id:"idp",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Assuming the setup steps are completed, you need to now configure the Otomi values repository. This repo is the source configuration for Otomi Container Platform. It contains drone pipeline configurations for each cluster, and each running drone will listen to updates of these values targeting the cluster it is running on. Any updated values might result in different cluster state resources, which will be applied by the Otomi image."),Object(i.b)("h2",{id:"1-configuration"},"1. Configuration"),Object(i.b)("p",null,"Configuration can be done most easily through the Otomi Console. So if you have a license please refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../console"}),"Otomi Console")," documentation."),Object(i.b)("p",null,"Not all configuration is (yet) exposed through the console however, so please look at the values repo's ",Object(i.b)("inlineCode",{parentName:"p"},"env/*")," files to edit the configuration files."),Object(i.b)("p",null,"Important things to note:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Every configuration file can have a ",Object(i.b)("inlineCode",{parentName:"li"},"secrets.*.yaml")," counterpart, but these are optional."),Object(i.b)("li",{parentName:"ul"},"A json schema and vscode settings are imported by the bootrap (in ",Object(i.b)("inlineCode",{parentName:"li"},".vscode/*"),"), so you will have automatic linting and hinting for the configuration when vscode is used."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},".sops.yaml")," is correctly configured then automatic de-/en-cryption will also be performed when in vscode and editing a ",Object(i.b)("inlineCode",{parentName:"li"},"secrets.*.yaml")," file.")),Object(i.b)("p",null,"Configuration that is currently managed by the console:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Team settings: ",Object(i.b)("inlineCode",{parentName:"li"},"env/teams.yaml")),Object(i.b)("li",{parentName:"ol"},"Team secrets: ",Object(i.b)("inlineCode",{parentName:"li"},"env/teams/secrets.$TEAM.yaml")),Object(i.b)("li",{parentName:"ol"},"Team services: ",Object(i.b)("inlineCode",{parentName:"li"},"env/$CLOUD/$CLUSTER/services.$TEAM.yaml"))),Object(i.b)("p",null,"Configuration not (yet) managed by the console:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Cluster config: ",Object(i.b)("inlineCode",{parentName:"li"},"env/clusters.yaml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"env/$CLOUD/$CLUSTER/.env")),Object(i.b)("li",{parentName:"ol"},"Otomi settings: ",Object(i.b)("inlineCode",{parentName:"li"},"env/settings.yaml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"env/secrets.settings.yaml")),Object(i.b)("li",{parentName:"ol"},"Charts config: ",Object(i.b)("inlineCode",{parentName:"li"},"env/charts/$CHART.yaml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"env/charts/secrets.$CHART.yaml")),Object(i.b)("li",{parentName:"ol"},"Cloud overrides: ",Object(i.b)("inlineCode",{parentName:"li"},"env/$CLOUD/overrides.$CLOUD.yaml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"env/secrets.overrides.$CLOUD.yaml")),Object(i.b)("li",{parentName:"ol"},"Cluster overrides: ",Object(i.b)("inlineCode",{parentName:"li"},"env/$CLOUD/$CLUSTER/overrides.$CLOUD-$CLUSTER.yaml")," and ",Object(i.b)("inlineCode",{parentName:"li"},"env/$CLOUD/$CLUSTER/secrets.overrides.$CLOUD-$CLUSTER.yaml"))),Object(i.b)("p",null,"Please follow the guidance of the yaml hinting, as it has all the descriptions and example values you need to operate on these files."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Otomi YAML hinting only works in vscode")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"VSCode automatically loads the '.vscode/values-schema.yaml' schema provided. Please inspect it or wire it up manually when using another editor."))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Make sure to have working dns management credentials")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The most important part to get the platform deployed is having correctly set credentials for dns management. Without it no domains nor ip addresses can be registered, and certificate validation will fail."))),Object(i.b)("p",null,"If you wish to be sure of your changes, you can always do a ",Object(i.b)("inlineCode",{parentName:"p"},"git diff"),". When you chose to use encryption and have correctly followed the corresponding instructions, then you should see a diff with the unencrypted values. That is, if you modified any ;)"),Object(i.b)("h2",{id:"3-validation"},"3. Validation"),Object(i.b)("p",null,"When you are done with the configuration you can validate the results:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(i.b)("p",null,"If you have made an error in the format of the values this will be reported."),Object(i.b)("p",null,"To check if all the output manifests are valid for the target cluster's k8s version, ",Object(i.b)("em",{parentName:"p"},"and")," following best practices you can run another variation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-templates\n")),Object(i.b)("h2",{id:"4-configure-dependencies"},"4. Configure Dependencies"),Object(i.b)("h3",{id:"idp"},"IDP"),Object(i.b)("p",null,"In our demo files we target ",Object(i.b)("inlineCode",{parentName:"p"},"CLOUD=google CLUSTER=demo")," and we refer to Azure AD as IDP for Keycloak, which is a common use case. It needs to know the valid callbacks to return control to Otomi's oauth endpoints. The following callbacks needed to be in place:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://auth.demo.gke.otomi.cloud/oauth2/callback"}),"https://auth.demo.gke.otomi.cloud/oauth2/callback")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://keycloak.demo.gke.otomi.cloud/realms/master/broker/redkubes-azure/endpoint"}),"https://keycloak.demo.gke.otomi.cloud/realms/master/broker/redkubes-azure/endpoint")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://harbor.demo.gke.otomi.cloud/c/oidc/callback"}),"https://harbor.demo.gke.otomi.cloud/c/oidc/callback")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://keycloak.demo.gke.otomi.cloud"}),"https://keycloak.demo.gke.otomi.cloud"))),Object(i.b)("p",null,"This will be the same for any IDP."))}b.isMDXComponent=!0}}]);