(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{175:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return a?o.a.createElement(d,r(r({ref:t},b),{},{components:a})):o.a.createElement(d,r({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var b=2;b<l;b++)i[b]=a[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),l=(a(0),a(175)),i={slug:"cli/working-with",title:"Working with Otomi CLI",sidebar_label:"Working with Otomi CLI"},r={unversionedId:"cli-working-with",id:"cli-working-with",isDocsHomePage:!1,title:"Working with Otomi CLI",description:"When you would like to do local development, you will operate on the values directly and have to apply them manually.",source:"@site/docs/cli-working-with.md",slug:"/cli/working-with",permalink:"/docs/cli/working-with",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/cli-working-with.md",version:"current",sidebar_label:"Working with Otomi CLI",sidebar:"mainSidebar",previous:{title:"Installing and using Otomi CLI",permalink:"/docs/cli/"},next:{title:"otomi apply",permalink:"/docs/cli/apply"}},c=[{value:"Install Otomi CLI",id:"install-otomi-cli",children:[]},{value:"Pull the values",id:"pull-the-values",children:[]},{value:"Bootstap the values",id:"bootstap-the-values",children:[]},{value:"Adding a new team to the values",id:"adding-a-new-team-to-the-values",children:[{value:"1. Modify the teams.yaml",id:"1-modify-the-teamsyaml",children:[]}]},{value:"validate changes (optional)",id:"validate-changes-optional",children:[]},{value:"Deploy changes",id:"deploy-changes",children:[]},{value:"Commit changes",id:"commit-changes",children:[]}],b={toc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"When you would like to do local development, you will operate on the values directly and have to apply them manually."),Object(l.b)("h2",{id:"install-otomi-cli"},"Install Otomi CLI"),Object(l.b)("p",null,"If you haven't deployed Otomi with the CLI, install the Otomi CLI first. See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli"}),"here")," to install Otomi CLI."),Object(l.b)("h2",{id:"pull-the-values"},"Pull the values"),Object(l.b)("p",null,"Clone the ",Object(l.b)("inlineCode",{parentName:"p"},"otomi/values")," repository from ",Object(l.b)("inlineCode",{parentName:"p"},"gitea.<your.domain>/otomi/values")," (if not already done) to work with the values locally."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://gitea.<your.domain>/otomi/values.git\ncd values\n")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"ATTENTION: Are you using SOPS? Then do first do the following:")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"Make sure you have installed the SOPS extention for VSC."),Object(l.b)("li",{parentName:"ul"},"Add your ",Object(l.b)("inlineCode",{parentName:"li"},".secrets")," file to the ",Object(l.b)("inlineCode",{parentName:"li"},"values")," folder"),Object(l.b)("li",{parentName:"ul"},"Source the secrets: ",Object(l.b)("inlineCode",{parentName:"li"},"source .secrets")),Object(l.b)("li",{parentName:"ul"},"Decrypt the secrets by running ",Object(l.b)("inlineCode",{parentName:"li"},"otomi decrypt"))))),Object(l.b)("h2",{id:"bootstap-the-values"},"Bootstap the values"),Object(l.b)("p",null,"First create a ",Object(l.b)("inlineCode",{parentName:"p"},".env")," file in the ",Object(l.b)("inlineCode",{parentName:"p"},"env")," folder and add the following line:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"echo 'export K8S_CONTEXT=\"<the-context-of-your-k8s-cluster>\"' > .env\n")),Object(l.b)("p",null,"Bootstap the local values:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi bootstap\n")),Object(l.b)("h2",{id:"adding-a-new-team-to-the-values"},"Adding a new team to the values"),Object(l.b)("p",null,"In the following steps we are going to create a team with the name 'demo':"),Object(l.b)("h3",{id:"1-modify-the-teamsyaml"},"1. Modify the teams.yaml"),Object(l.b)("p",null,"Add the team to the ",Object(l.b)("inlineCode",{parentName:"p"},"values/env/teams.yaml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    demo:\n      id: demo\n      oidc:\n        groupMapping: <group-object-id> # The id of the AD group with the team members who need access to the team\n")),Object(l.b)("p",null,"Add the team to the ",Object(l.b)("inlineCode",{parentName:"p"},"secrets.teams.yaml")," (or ",Object(l.b)("inlineCode",{parentName:"p"},"secrets.teams.yaml.dec")," when using SOPS):"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"teamConfig:\n  teams:\n    demo:\n      password: somesecretvalue\n")),Object(l.b)("p",null,"When using SOPS, first encrypt the team password:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi encrypt\n")),Object(l.b)("p",null,"Add the following 3 files to the ",Object(l.b)("inlineCode",{parentName:"p"},"/env/teams")," folder:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"external-secrets.demo.yaml")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"jobs.demo.yaml")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"services.demo.yaml"))),Object(l.b)("p",null,"Each file should contain an empty object:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"{}\n")),Object(l.b)("h2",{id:"validate-changes-optional"},"validate changes (optional)"),Object(l.b)("p",null,"Now validate the new values based on the Otomi values schema:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"-v")," to get more output (or ",Object(l.b)("inlineCode",{parentName:"p"},"-vvv")," to get even more output). See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli/validate-values"}),"here")," for a full list of ",Object(l.b)("inlineCode",{parentName:"p"},"otomi validate")," command options. When successful, the output will show: ",Object(l.b)("inlineCode",{parentName:"p"},"otomi:validate-values:verbose Values validation SUCCESSFUL")),Object(l.b)("h2",{id:"deploy-changes"},"Deploy changes"),Object(l.b)("p",null,"Deploy the changes using Otomi CLI:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply\n")),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"-v")," to get more output (or ",Object(l.b)("inlineCode",{parentName:"p"},"-vvv")," to get even more output). See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli/apply"}),"here")," for a full list of ",Object(l.b)("inlineCode",{parentName:"p"},"otomi apply")," command options."),Object(l.b)("p",null,"Note: Creating a team can take around 5 to 10 minutes to complete."),Object(l.b)("h2",{id:"commit-changes"},"Commit changes"),Object(l.b)("p",null,"Now commit your changes to the (otomi/values) GIT repository on the cluster to store the new desired state configuration."))}s.isMDXComponent=!0}}]);