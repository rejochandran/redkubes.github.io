"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"tutorial-9",title:"Configuring network policies",sidebar_label:"Configuring network policies"},o=void 0,l={unversionedId:"tutorials/tutorial-9",id:"tutorials/tutorial-9",title:"Configuring network policies",description:"In this tutorial we are going to deploy a multi tier web application, called guestbook, register the 3 K8s services in Otomi and configure public access to the frontend service. Next, we will turn on the Network policies option for the team.",source:"@site/docs/tutorials/tutorial-9.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-9",permalink:"/docs/tutorials/tutorial-9",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/tutorials/tutorial-9.md",tags:[],version:"current",frontMatter:{slug:"tutorial-9",title:"Configuring network policies",sidebar_label:"Configuring network policies"}},s={},p=[{value:"Instructions",id:"instructions",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial we are going to deploy a multi tier web application, called ",(0,r.kt)("inlineCode",{parentName:"p"},"guestbook"),", register the 3 K8s services in Otomi and configure public access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," service. Next, we will turn on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Network policies")," option for the team."),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Guestbook application resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/redkubes/workshops/main/04-netpols/guestbook.yaml -n team-$TEAM-NAME\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Get the names of the created ClusterIP services:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n team-<$TEAM-NAME>\n")),(0,r.kt)("p",null,"You will see 3 services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nfrontend         ClusterIP   10.0.183.235   <none>        80/TCP     6m44s\nredis-follower   ClusterIP   10.0.135.61    <none>        6379/TCP   6m44s\nredis-leader     ClusterIP   10.0.82.226    <none>        6379/TCP   6m44s\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Otomi Console. Make sure you have selected your team in the top bar en and then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Services")," item under your team in the side menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will now first add the created frontend service to Otomi. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Service"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the name ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Exposure"),", select ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress"),". Leave all other settings under exposure default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave all other settings default and click ",(0,r.kt)("inlineCode",{parentName:"p"},"submit"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Changes"),"."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After the changes have been deployed (this will take a couple of minutes), you will see that the service we just created has a host name. Click on the host name to get access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"guestbook")," frontend. submit a few messages on the application.")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Register the ",(0,r.kt)("inlineCode",{parentName:"li"},"redis-follower")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"redis-leader")," services via the otomi-console. Make sure to provide the correct port (",(0,r.kt)("strong",{parentName:"li"},"6379"),") and leave all other settings default (so no exposure) and ",(0,r.kt)("inlineCode",{parentName:"li"},"submit"),". You don't need to ",(0,r.kt)("inlineCode",{parentName:"li"},"Deploy Changes")," after every submit.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you create a service in Otomi with ingress ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster"),", the K8s service will be added to the service-mesh in Otomi. When you create services in Otomi, the Istio Gateway is automatically configured and Istio virtual services are also automatically created.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Notice that the guestbook frontend still works!")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Otomi Console go to your team and then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," item.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under Network policy, enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Network policies"),". Click ",(0,r.kt)("inlineCode",{parentName:"p"},"submit")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Changes")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Now go to the Guestbook application and notice that your messages have disappeared and you can't submit new messages. This is because traffic between the ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-leader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-follower")," services is not permitted anymore.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Let's fix this")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the otomi-console, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-leader")," service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Network policies"),", select ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow selected")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"add item"),". Add the following 2 items and submit:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Team name"),(0,r.kt)("th",{parentName:"tr",align:null},"Service Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$TEAM-NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"frontend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$TEAM-NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"redis-follower")))),(0,r.kt)("p",null,"Before deploying changes, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-follower")," service and do the same, but in this case only allow the frontend service:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Team name"),(0,r.kt)("th",{parentName:"tr",align:null},"Service Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$TEAM-NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"frontend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$TEAM-NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"redis-leader")))),(0,r.kt)("p",null,"Now ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Changes")),(0,r.kt)("p",null,"Notice that the Guestbook app works again."))}u.isMDXComponent=!0}}]);