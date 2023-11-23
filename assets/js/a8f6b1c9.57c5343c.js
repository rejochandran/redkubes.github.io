"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"lab-20",title:"View container logs",sidebar_label:"View container logs"},i=void 0,l={unversionedId:"for-devs/get-started/lab-20",id:"for-devs/get-started/lab-20",title:"View container logs",description:"Loki, Minio, Prometheus and Grafana need to be activated for this lab.",source:"@site/docs/for-devs/get-started/lab-20.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-20",permalink:"/docs/for-devs/get-started/lab-20",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-20.md",tags:[],version:"current",frontMatter:{slug:"lab-20",title:"View container logs",sidebar_label:"View container logs"},sidebar:"mainSidebar",previous:{title:"Configure network policies",permalink:"/docs/for-devs/get-started/lab-19"},next:{title:"View container metrics",permalink:"/docs/for-devs/get-started/lab-21"}},s={},c=[{value:"View container logs",id:"view-container-logs",level:2},{value:"Creating shortcuts",id:"creating-shortcuts",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Loki, Minio, Prometheus and Grafana need to be activated for this lab.")),(0,r.kt)("p",null,"When your application is deployed, you would of course like to be able to see container logs for debugging purposes. Grafana Loki is used in Otomi for log aggregation. When Grafana Loki is enabled, you'll see the Loki app in your apps."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only when Otomi is configured in multi-tenant mode, container logs of teams are split up between teams. This means you can only see the logs of your own team. If multi-tenancy is not enabled, you can see the logs of all containers running on the cluster. If you don't want other teams to see your logs, ask the administrator to enable the Otomi multi-tenancy feature.")),(0,r.kt)("h2",{id:"view-container-logs"},"View container logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the Loki app in your team apps")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubecfg",src:n(2661).Z,width:"3118",height:"1746"})),(0,r.kt)("p",null,"In Grafana, you are directed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Explore")," section. Otomi already added a query for you, showing the logs of all containers running in your team namespace."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubecfg",src:n(7511).Z,width:"2888",height:"1834"})),(0,r.kt)("p",null,"Select the label ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," and then select ",(0,r.kt)("inlineCode",{parentName:"p"},"blue"),". You will now see all the ",(0,r.kt)("inlineCode",{parentName:"p"},"blue")," container logs. You can also create your own queries. Learn more about LogQL ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/logql/"},"here"),"."),(0,r.kt)("h2",{id:"creating-shortcuts"},"Creating shortcuts"),(0,r.kt)("p",null,"When you created a custom query that you would like to use more often, or would like to share with the team, you can create a shortcut in Otomi."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the absolute path of your query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the apps section, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," icon of the Loki app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shortcuts")," tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Edd item"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fill in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," for the shortcut"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubecfg",src:n(5305).Z,width:"3104",height:"1758"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"submit")," and then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))),(0,r.kt)("p",null,"Now click on the Shortcuts item in the left menu. Your shortcut is now available for everyone in the team to use."))}u.isMDXComponent=!0},7511:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafana-loki-34e8753bc77eacda8b46f7ca40fc35d1.png"},2661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loki-teams-d2bdef710561c2c920767805608a1fc9.png"},5305:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-loki-shortcut-85f559c0cad2f4d547899e7d408663c2.png"}}]);