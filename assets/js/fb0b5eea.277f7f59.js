"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4167],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7162:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={slug:"cli/",title:"Installing and using Otomi CLI",sidebar_label:"Overview"},s=void 0,p={unversionedId:"cli-overview",id:"cli-overview",title:"Installing and using Otomi CLI",description:"Prerequisites",source:"@site/docs/cli-overview.md",sourceDirName:".",slug:"/cli/",permalink:"/docs/cli/",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/cli-overview.md",tags:[],version:"current",frontMatter:{slug:"cli/",title:"Installing and using Otomi CLI",sidebar_label:"Overview"},sidebar:"mainSidebar",previous:{title:"Prometheus",permalink:"/docs/apps/prometheus"},next:{title:"Working with Otomi CLI",permalink:"/docs/cli/working-with"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Install the CLI",id:"install-the-cli",children:[{value:"Installer script",id:"installer-script",children:[],level:3},{value:"Manual installation",id:"manual-installation",children:[{value:"Using wget",id:"using-wget",children:[],level:4}],level:3}],level:2},{value:"Using the CLI",id:"using-the-cli",children:[],level:2},{value:"Single run",id:"single-run",children:[],level:2},{value:"Command Reference",id:"command-reference",children:[],level:2}],d={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker"),(0,l.kt)("li",{parentName:"ul"},"Bash v4")),(0,l.kt)("p",null,"Otomi CLI only supports bash versions greater than 4. Install or upgrade on Mac OS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install bash\n")),(0,l.kt)("h2",{id:"install-the-cli"},"Install the CLI"),(0,l.kt)("h3",{id:"installer-script"},"Installer script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Using wget\nwget -O- https://git.io/otomi-cli-installer | bash\n# Using curl\ncurl -L https://git.io/otomi-cli-installer | bash\n")),(0,l.kt)("h3",{id:"manual-installation"},"Manual installation"),(0,l.kt)("h4",{id:"using-wget"},"Using wget"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Using wget\nwget https://git.io/otomi-cli -O otomi && chmod +x otomi\n# Using curl\ncurl https://git.io/otomi-cli -o otomi && chmod +x otomi\n")),(0,l.kt)("p",null,"This will download otomi into the current directory"),(0,l.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,l.kt)("p",null,"Running any ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi")," command will pull the values' ",(0,l.kt)("inlineCode",{parentName:"p"},"otomi.version")," image tag."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"The image used is rather large, so this might take some time.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The total compressed size of the base image with all the tools in use is close to 1Gi, and shows close to 2Gi uncompressed."))),(0,l.kt)("p",null,"To use the CLI you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"otomi --help\n")),(0,l.kt)("p",null,"To find the options available."),(0,l.kt)("h2",{id:"single-run"},"Single run"),(0,l.kt)("p",null,"To run otomi without installing the CLI, you can run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(wget -q -O- https://git.io/otomi-cli) <COMMAND HERE>\n")),(0,l.kt)("h2",{id:"command-reference"},"Command Reference"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"apply"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi apply"))),(0,l.kt)("td",{parentName:"tr",align:null},"Apply all, or supplied, K8S resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"bash"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi bash"))),(0,l.kt)("td",{parentName:"tr",align:null},"Run interactive bash shell in otomi-core container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"bootstrap"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi bootstrap"))),(0,l.kt)("td",{parentName:"tr",align:null},"Bootstrap values repo with artifacts corresponding to the cluster's stack version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"check-policies"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi check-policies"))),(0,l.kt)("td",{parentName:"tr",align:null},"Check if generated manifests adhere to defined OPA policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"commit"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi commit"))),(0,l.kt)("td",{parentName:"tr",align:null},"Execute wrapper for generate pipelines -> git commit changed files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"decrypt"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi decrypt [files..]"))),(0,l.kt)("td",{parentName:"tr",align:null},"Decrypts file(s), given as arguments, or any file matching ",(0,l.kt)("inlineCode",{parentName:"td"},"secrets.*.yaml")," in the values repository")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"destroy"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi destroy"))),(0,l.kt)("td",{parentName:"tr",align:null},"Destroy all, or supplied, K8S resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"diff"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi diff"))),(0,l.kt)("td",{parentName:"tr",align:null},"Diff all, or supplied, K8S resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"encrypt"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi encrypt [files..]"))),(0,l.kt)("td",{parentName:"tr",align:null},"Encrypts file(s), given as arguments, or any file matching ",(0,l.kt)("inlineCode",{parentName:"td"},"secrets.*.yaml")," in the values repository")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"lint"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi lint"))),(0,l.kt)("td",{parentName:"tr",align:null},"Uses helmfile lint to lint the target manifests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pull"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi pull"))),(0,l.kt)("td",{parentName:"tr",align:null},"Wrapper for git pull && otomi bootstrap")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"rotate-keys"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi rotate-keys"))),(0,l.kt)("td",{parentName:"tr",align:null},"Rotate keys for all the sops secrets in the values repository")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"status"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi status"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show cluster status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"sync"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi sync"))),(0,l.kt)("td",{parentName:"tr",align:null},"Sync all, or supplied, K8S resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"template"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi template [outDir]"))),(0,l.kt)("td",{parentName:"tr",align:null},"Export all, or supplied, K8S resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"test"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi test"))),(0,l.kt)("td",{parentName:"tr",align:null},"Run tests against the target cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"validate-templates"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi validate-templates"))),(0,l.kt)("td",{parentName:"tr",align:null},"Validate generated manifests against supported k8s versions/CRDs and best practices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"validate-values"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi validate-values"))),(0,l.kt)("td",{parentName:"tr",align:null},"Validate values for each cluster against JSON schema (takes target options)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"values"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi values"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show helmfile values for target cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"x"},(0,l.kt)("inlineCode",{parentName:"a"},"otomi x"))),(0,l.kt)("td",{parentName:"tr",align:null},"Execute command in container")))))}u.isMDXComponent=!0}}]);