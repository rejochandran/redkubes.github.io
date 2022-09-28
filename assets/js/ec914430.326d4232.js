"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"part-11",title:"Create a CI (build) pipeline",sidebar_label:"Part 11"},i=void 0,l={unversionedId:"for-devs/get-started/part-11",id:"for-devs/get-started/part-11",title:"Create a CI (build) pipeline",description:"Kubernetes is a container orchestrator, so we need to create container images that we can deploy. Next to providing a Git service. Otomi also has a complete CI solution called Drone integrated. You can use Drone to create and run CI pipelines to build images and push them to your private image registry (Harbor).",source:"@site/docs/for-devs/get-started/part-11.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/part-11",permalink:"/docs/for-devs/get-started/part-11",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/part-11.md",tags:[],version:"current",frontMatter:{slug:"part-11",title:"Create a CI (build) pipeline",sidebar_label:"Part 11"},sidebar:"mainSidebar",previous:{title:"Part 10",permalink:"/docs/for-devs/get-started/part-10"},next:{title:"Overview",permalink:"/docs/for-ciso/overview"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"CReating a build pipeline in Drone",id:"creating-a-build-pipeline-in-drone",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes is a container orchestrator, so we need to create container images that we can deploy. Next to providing a Git service. Otomi also has a complete CI solution called Drone integrated. You can use Drone to create and run CI pipelines to build images and push them to your private image registry (Harbor)."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can use Drone to run CI pipelines, you will need to have:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A Git repository"),(0,o.kt)("li",{parentName:"ol"},"Credentials to push images to the registry (your private registry on the platform)")),(0,o.kt)("h2",{id:"creating-a-build-pipeline-in-drone"},"CReating a build pipeline in Drone"),(0,o.kt)("p",null,"In the apps section in Otomi console, you'll see an app called Drone. Click on it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(3617).Z,width:"2202",height:"1030"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the Drone dashboard, and click on \u2018SYNC\u2019. You will now see your repo pop up in the REPOSITORIES list.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(5455).Z,width:"2198",height:"980"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the new repo and then click \u2018ACTIVATE\u2019.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(3452).Z,width:"2196",height:"1300"})),(0,o.kt)("p",null,"Now we\u2019ll need to add the credentials of the robot account as secrets toDrone:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on your repository."),(0,o.kt)("li",{parentName:"ul"},"Under Settings, Click on secrets"),(0,o.kt)("li",{parentName:"ul"},"Add the following 2 secrets:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REGISTRY_USERNAME = <harbor-robot-account-name.\nREGISTRY_PASSWORD = <the-token-of-the-robot-account>\n")),(0,o.kt)("p",null,"Now you'll need to add a Drone pipeline definition to our repo."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},".drone.yml")," file to your repo. This is an example you can use:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kind: pipeline\ntype: kubernetes\nname: default\nsteps:\n  - name: build-push\n    image: plugins/docker\n    settings:\n      registry: harbor.<yourdomain>\n      repo: harbor.<your-ip>.nip.io/team-demo/hello\n      insecure: true\n      username:\n        from_secret: REGISTRY_USERNAME\n      password:\n        from_secret: REGISTRY_PASSWORD\n      tags:\n        - ${DRONE_BRANCH}\n")),(0,o.kt)("p",null,"Make sure to adjust the registry and repo name in the .drone.yml file"),(0,o.kt)("p",null,"In Drone, you will see the pipeline has automatically started building and then pushing the new image to Harbor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(165).Z,width:"1248",height:"804"})),(0,o.kt)("p",null,"If you use Harbor as a private registry, check to see if the repo has been created. You can now also use Trivy to scan your image(s) for vulnerabilities."))}c.isMDXComponent=!0},3452:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/drone-activate-repo-33218e943848cdf3a4fdc9ed9b166a29.png"},165:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/drone-pipeline-85d054e8007b3d3dde79395387900660.png"},5455:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/repo-sync-cf209a43badf49d44c1e666a0bd3b6bc.png"},3617:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/team-app-drone-434c6926356aad0d643221bdbd196f8c.png"}}]);