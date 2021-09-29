(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(175)),l={slug:"installation/chart",title:"Install from chart"},i={unversionedId:"inst-chart",id:"inst-chart",isDocsHomePage:!1,title:"Install from chart",description:"Use Helm to install Otomi.",source:"@site/docs/inst-chart.md",slug:"/installation/chart",permalink:"/docs/installation/chart",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/inst-chart.md",version:"current",sidebar:"mainSidebar",previous:{title:"Prerequisites",permalink:"/docs/installation/prerequisites"},next:{title:"Install with CLI",permalink:"/docs/installation/cli/"}},c=[{value:"Add the Otomi repository",id:"add-the-otomi-repository",children:[]},{value:"Create and test the values file",id:"create-and-test-the-values-file",children:[]},{value:"Install the Chart",id:"install-the-chart",children:[{value:"Monitoring the Chart install",id:"monitoring-the-chart-install",children:[]},{value:"Next steps",id:"next-steps",children:[]}]},{value:"Installing from source",id:"installing-from-source",children:[{value:"Download source",id:"download-source",children:[]},{value:"Install from source",id:"install-from-source",children:[]}]},{value:"Uninstalling the Chart",id:"uninstalling-the-chart",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Use Helm to install Otomi."),Object(r.b)("p",null,"Visit the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing"}),"helm documentation")," page for more details on how to work with helm charts."),Object(r.b)("p",null,"Before you begin verify if you have met the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/prerequisites"}),"prerequisites")),Object(r.b)("h2",{id:"add-the-otomi-repository"},"Add the Otomi repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/helm/helm_repo/"}),"helm repo")," for command documentation."),Object(r.b)("h2",{id:"create-and-test-the-values-file"},"Create and test the values file"),Object(r.b)("p",null,"To view the required ",Object(r.b)("inlineCode",{parentName:"p"},"values.yaml")," file with detailed comments, view and download the chart's latest ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml"}),"values.yaml"),". Run the following command to view ",Object(r.b)("em",{parentName:"p"},"all")," the values (which might be overwhelming):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm show values otomi/otomi\n")),Object(r.b)("p",null,"To test wether the input values are correct run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm template -f values.yaml otomi/otomi\n")),Object(r.b)("h2",{id:"install-the-chart"},"Install the Chart"),Object(r.b)("p",null,"Install the chart with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm install -f values.yaml otomi otomi/otomi\n")),Object(r.b)("h3",{id:"monitoring-the-chart-install"},"Monitoring the Chart install"),Object(r.b)("p",null,"The chart deploys a Job (",Object(r.b)("inlineCode",{parentName:"p"},"otomi"),") in the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," namespace. Monitor the chart install using ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# get the status of the job\nkubectl get job otomi -w\n# watch the helm chart install status:\nwatch helm list -Aa\n")),Object(r.b)("p",null,"Or view detailed info about kubernetes resources with",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://k9scli.io"}),"k9s")),Object(r.b)("p",null,"For more detailed instructions on monitoring and other SRE tasks, visit the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sre/"}),"SRE section"),"."),Object(r.b)("p",null,"Once the chart is installed, you are ready to dive in to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/console/"}),"console"),"."),Object(r.b)("h3",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Once Otomi is installed, visit the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/post-install-actions"}),"Post Installation")," page to finish setting up Otomi."),Object(r.b)("h2",{id:"installing-from-source"},"Installing from source"),Object(r.b)("p",null,"As an alternative, you can also clone the otomi-core source code from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core"}),"Github")," and install otomi using the chart source code."),Object(r.b)("h3",{id:"download-source"},"Download source"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/redkubes/otomi-core.git\ncd otomi-core\n")),Object(r.b)("h3",{id:"install-from-source"},"Install from source"),Object(r.b)("p",null,"Now customize the ",Object(r.b)("inlineCode",{parentName:"p"},"values.yaml")," file. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#configuring"}),"configuration")," below for more details."),Object(r.b)("p",null,"Use the following command to install the chart with the name ",Object(r.b)("inlineCode",{parentName:"p"},"my-otomi-release")," (a custom name that you choose)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm install -f values.yaml my-otomi-release chart/otomi\n")),Object(r.b)("h2",{id:"uninstalling-the-chart"},"Uninstalling the Chart"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm uninstall my-otomi-release\n")),Object(r.b)("p",null,"Doing a Helm uninstall will only remove the job used to deploy Otomi. It will not remove all the installed components. If you would like to do a complete uninstall, we advise to first clone the ",Object(r.b)("inlineCode",{parentName:"p"},"otomi/values")," repository (to secure the configuration) and then uninstall using Otomi CLI."))}b.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),h=a,p=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?o.a.createElement(p,i(i({ref:t},s),{},{components:n})):o.a.createElement(p,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);