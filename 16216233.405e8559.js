(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(124)),a={slug:"known-issues/gke-timeout",title:"Known issues: GKE timeout",sidebar_label:"GKE timeout"},c={unversionedId:"ki-gke-timeout",id:"ki-gke-timeout",isDocsHomePage:!1,title:"Known issues: GKE timeout",description:"Observation",source:"@site/docs/ki-gke-timeout.md",slug:"/known-issues/gke-timeout",permalink:"/docs/known-issues/gke-timeout",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ki-gke-timeout.md",version:"current",sidebar_label:"GKE timeout",sidebar:"mainSidebar",previous:{title:"Deploy changes",permalink:"/docs/deploy-changes"},next:{title:"Troubleshooting Overview",permalink:"/docs/troubleshooting"}},s=[{value:"Observation",id:"observation",children:[]},{value:"Cause",id:"cause",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Background",id:"background",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"observation"},"Observation"),Object(i.b)("p",null,"Sometimes the otomi cli will time out when operating on a Google cluster."),Object(i.b)("h2",{id:"cause"},"Cause"),Object(i.b)("p",null,"This happens when the containerized kubectl binary wants to refresh an access token, but it can't find the binary that was registered to do so in the otomi docker container."),Object(i.b)("h2",{id:"solution"},"Solution"),Object(i.b)("p",null,"Retry the command. Before every invocation with the containerized ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl")," binary, otomi cli first runs ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl version")," with the local binary to invoke a token refresh, resulting in an up-to-date config to mount."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,"The otomi cli is a docker container with all the binaries it needs to deploy to these clusters. When running a command the local cloud configs are mounted. These configs may contain configuration for token refresh mechanisms, including the name of a binary to execute with certain parameters. This makes it possible to include the binaries in the image, and make them available via the known ",Object(i.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(i.b)("p",null,"However, Google Cloud SDK breaks with that approach, by tightly coupling a hard path to the local gcloud binary. Sample user section from ",Object(i.b)("inlineCode",{parentName:"p"},"$KUBECONFIG"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"- name: gke_otomi-cloud_europe-west4_otomi-gke-demo\n  user:\n    auth-provider:\n      config:\n        access-token: xxxxxxxxx\n        cmd-args: config config-helper --format=json\n        cmd-path: /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/gcloud\n        expiry: '2020-10-29T02:15:37Z'\n        expiry-key: '{.credential.token_expiry}'\n        token-key: '{.credential.access_token}'\n      name: gcp\n")),Object(i.b)("p",null,"This will not work with containerization unfortunately. We also can't predict the path on the users host computer to this binary, so we have to hope for Google to fix this some day. They are not inclined to do so it seems:"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://issuetracker.google.com/issues/171493249"}),"https://issuetracker.google.com/issues/171493249")),Object(i.b)("p",null,"Maybe they will start to see the importance of this after getting more feedback ;)"))}u.isMDXComponent=!0}}]);