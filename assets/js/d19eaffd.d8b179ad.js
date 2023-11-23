"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"lab-5",title:"Push your container images",sidebar_label:"Push images"},i=void 0,l={unversionedId:"for-devs/get-started/lab-5",id:"for-devs/get-started/lab-5",title:"Push your container images",description:"For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (like Let's Encrypt using production certificate).",source:"@site/docs/for-devs/get-started/lab-5.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-5",permalink:"/docs/for-devs/get-started/lab-5",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-5.md",tags:[],version:"current",frontMatter:{slug:"lab-5",title:"Push your container images",sidebar_label:"Push images"}},c={},s=[{value:"Login to Harbor",id:"login-to-harbor",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (like Let's Encrypt using production certificate).")),(0,o.kt)("h2",{id:"login-to-harbor"},"Login to Harbor"),(0,o.kt)("p",null,"To be able to push images to Harbor, you'll need a robot account with push permissions. Otomi offers teams with a self-service option to download the Docker config for their team's private registry in Harbor. In the left menu you will see the option ",(0,o.kt)("inlineCode",{parentName:"p"},"Download DOCKERCFG"),". Click on it to download the credentials."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"harbor-projects",src:r(9256).Z,width:"2938",height:"1726"})),(0,o.kt)("p",null,"When you have downloaded the docker config then run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker login"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker login -u 'otomi-team-<team-name>-push' -p <token> harbor.<your-domain>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If Docker refuses to connect with an error\n",(0,o.kt)("inlineCode",{parentName:"p"},"x509: certificate signed by unknown authority"),", go to the Otomi Console,\nand click ",(0,o.kt)("inlineCode",{parentName:"p"},"Download CA")," (if you have not done so already); then copy the\nobtained file to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.docker/ca.crt")," or restart docker desktop.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build and tag your image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t harbor.<your-domain>/<team-name>/<image-name>:<tag> .\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Push the image to Harbor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker push harbor.<your-domain>/<team-name>/<image-name>:<tag>\n")))}u.isMDXComponent=!0},9256:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/download-dcfg-b432705c8bd42615c9993ca3905ca3eb.png"}}]);