var ce=Object.defineProperty;var J=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var W=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,K=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&W(e,o,t[o]);if(J)for(var o of J(t))de.call(t,o)&&W(e,o,t[o]);return e};import{d as I,u as me,r as f,o as G,a as Y,b as _,c as Z,w as c,e as u,f as r,N as ve,g as he,h as fe,z as ge,i as _e,j as ke,k as q,l as ye,m as we,n as Ee,p as Fe,q as xe,s as y,t as Ne,v as be,x as Ae,y as E,A as P,B as Ce,C as Ie,D as A,E as Pe,F as g,G as De,H as Le,I as D,L as $e,J as X,K as Oe,M as Se,O as Te,P as Be,Q as Re,R as Ve,S as je,T as Me,U as Q,V as ze,W as He,X as Ue,Y as Je,Z as We,_ as Ke,$ as Ge,a0 as Ye,a1 as Ze,a2 as qe,a3 as Xe}from"./vendor.dc0894bd.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};Qe();const et=I({setup(e){return window.$message=me(),(t,o)=>null}}),tt=["https://pikpak.jimzdev.workers.dev"],It=["0393","0394","0395","0480","0481","0482","0483","0484","0469","0470"],ot=I({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(tt))}),(o,a)=>{const s=Y("router-view");return _(),Z(r(ke),{locale:r(ge),"date-locale":r(_e),"theme-overrides":t.value},{default:c(()=>[u(r(fe),null,{default:c(()=>[u(r(ve),null,{default:c(()=>[u(r(he),null,{default:c(()=>[u(et),u(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),st="modulepreload",ee={},at="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${at}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":st,s||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),s)return new Promise((N,v)=>{i.addEventListener("load",N),i.addEventListener("error",v)})})).then(()=>t())};var rt="/pikpak/assets/logo1.08eb9157.png";const m=q.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),n=s?JSON.parse(s):{};return n.username&&n.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",K({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},n)).then(i=>(i.data&&i.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(i.data)),F=!1,m(o))).catch(()=>(C.push("/login"),!1))):n.username&&n.password&&F?new Promise((i,N)=>{const v=setInterval(()=>{F||(clearInterval(v),i(m(o)))},100)}):(C.push("/login"),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=q.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=e=>{if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]},Pt=e=>new Promise(t=>setTimeout(t,e)),L=(e,t)=>(e=e.replace(/[\\]+$/g,""),t?e+"/":e),it=e=>/^PikPak:\/\/([^|]+)\|(\d+)\|(\w{40})/i.test(e),Dt=(e,t=!1)=>{const o=e.split(`
`),a=[];for(let s=0;s<o.length;s++)if(it(o[s]))a.push(o[s]);else if(t)throw new Error(`\u7B2C${s+1}\u884C\u4E0D\u662F\u6709\u6548\u7684\u79D2\u4F20\u94FE\u63A5\uFF01`);return a},lt=e=>/magnet:\?xt=urn:btih/.test(e),Lt=(e,t=!1)=>{const o=e.split(`
`),a=[];for(let s=0;s<o.length;s++)if(lt(o[s]))a.push(o[s]);else if(t)throw new Error(`\u7B2C${s+1}\u884C\u4E0D\u662F\u6709\u6548\u7684\u78C1\u94FE\uFF01`);return a},$t=(e=location.href)=>e.indexOf("https://")===-1&&e.indexOf("http://localhost")===-1&&e.indexOf("http://127.0.0.1")===-1,ut=(e,t)=>(e.serverNumber&&(t=t.replace(/\d+(\.mypikpak\.com)/,e.serverNumber+"$1")),e.reverseHost&&(t=L(e.reverseHost,!0)+t),t),Ot=(e,t)=>e.applyToImage?ut(e,t):t,St=(e,t)=>(e.serverNumber&&(t=t.replace(/\d+(\.mypikpak\.com)/,e.serverNumber+"$1")),e.reverseHost&&(t=L(e.reverseHost,!0)+t),t),Tt=(e,t,o)=>{if(e.reverseHost&&(t=L(e.reverseHost,!0)+t),o>=-1&&e.batchStrategy==="series"){let a=(o+1)%e.serverNumbers.length;t=t.replace(/\d+(\.mypikpak\.com)/,e.serverNumbers[a]+"$1")}return t};const ct=g("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[g("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),g("div",{class:"logo-box__text"},"PikPak")],-1),pt={key:0,class:"content-bottom"},dt=E("\u4F1A\u5458\u7801"),mt=g("p",{style:{"margin-bottom":"0"}}," \xA0 ",-1),vt={class:"bottom-user-info"},ht={key:0,src:rt,class:"user-info-avatar"},ft={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},gt={class:"user-info-name"},_t={key:0},kt={class:"action"},yt=E(" \u9000\u51FA\u767B\u5F55 "),wt=g("p",null,[g("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),Et=E("\u6DFB\u52A0"),Ft=I({setup(e){const t=f(!1),o=l=>()=>Q(D,null,{default:()=>Q(l)}),a=ye(),s=we(),n=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ke)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(We)}]),i=f(),N=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),i.value=l.data}).catch(l=>{console.log(l)})},v=f(),$=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{v.value=l.data}).catch(l=>{console.log(l)})},k=f(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},se=(l,p)=>{console.log(p),a.push("/"+p.key)};G(()=>{N(),$(),oe()});const b=f(),w=f(!1),ae=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:b.value,data:{}}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),$()}).catch(l=>{console.log(l)}).finally(()=>{w.value=!1})},O=f(!1),re=l=>{O.value=l<800,t.value||(t.value=l<800)};Ee(s,()=>{O.value&&(t.value=!0)});const ne=Fe(),ie=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const le=Y("router-view"),ue=xe("resize");return _(),y(Me,null,[Ne(u(r(X),{"has-sider":"",onResize:re},{default:c(()=>[u(r(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=h=>t.value=!0),onExpand:p[2]||(p[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,S,T,B,R,V,j,M,z,H,U;return[ct,u(r(Ae),{options:n.value,value:String(r(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?A("",!0):(_(),y("div",pt,[E(P(r(te)((h=v.value)==null?void 0:h.quota.usage))+" / "+P(r(te)((S=v.value)==null?void 0:S.quota.limit))+" ",1),u(r(Ce),{type:"primary",onClick:p[0]||(p[0]=bt=>w.value=!0)},{default:c(()=>[dt]),_:1}),((T=v.value)==null?void 0:T.quota)?(_(),Z(r(Ie),{key:0,type:"line",percentage:Number((((B=v.value)==null?void 0:B.quota.usage)/((R=v.value)==null?void 0:R.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):A("",!0),mt])),t.value?A("",!0):(_(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((j=k.value)==null?void 0:j.status)==="ok"}])},[g("div",vt,[((M=k.value)==null?void 0:M.status)==="ok"?(_(),y("img",ht)):(_(),y("img",ft)),g("div",gt,[E(P((z=i.value)==null?void 0:z.name)+" ",1),((H=k.value)==null?void 0:H.status)==="ok"&&((U=k.value)==null?void 0:U.expire)?(_(),y("div",_t,[u(r(De),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):A("",!0)]),g("div",kt,[u(r(Le),null,{trigger:c(()=>[u(r(D),{onClick:ie},{default:c(()=>[u(r($e))]),_:1})]),default:c(()=>[yt]),_:1})])])],2))]}),_:1},8,["collapsed"]),u(r(X),null,{default:c(()=>[u(r(Oe),{style:{height:"100vh"}},{default:c(()=>[u(r(Se),{style:{"max-height":"100vh"}},{default:c(()=>[u(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ue]]),u(r(je),{show:w.value,"onUpdate:show":p[5]||(p[5]=h=>w.value=h)},{default:c(()=>[u(r(Te),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[u(r(D),{onClick:p[3]||(p[3]=h=>w.value=!1)},{default:c(()=>[u(r(Be))]),_:1})]),action:c(()=>[u(r(Re),{block:!0,type:"primary",disabled:!b.value,onClick:ae},{default:c(()=>[Et]),_:1},8,["disabled"])]),default:c(()=>[u(r(Ve),{placeholder:"\u4F1A\u5458\u7801",value:b.value,"onUpdate:value":p[4]||(p[4]=h=>b.value=h)},null,8,["value"]),wt]),_:1})]),_:1},8,["show"])],64)}}}),xt=[{path:"/",name:"home",component:Ft,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"/redirect/:path*",component:()=>d(()=>import("./redirect.a91d074b.js"),["assets/redirect.a91d074b.js","assets/vendor.dc0894bd.js"])},{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.239378f8.js"),["assets/list.239378f8.js","assets/list.4c0fbcf3.css","assets/vendor.dc0894bd.js","assets/clipboard.ad6b6dd1.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.239378f8.js"),["assets/list.239378f8.js","assets/list.4c0fbcf3.css","assets/vendor.dc0894bd.js","assets/clipboard.ad6b6dd1.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.239378f8.js"),["assets/list.239378f8.js","assets/list.4c0fbcf3.css","assets/vendor.dc0894bd.js","assets/clipboard.ad6b6dd1.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.8aaac0bb.js"),["assets/trash.8aaac0bb.js","assets/trash.99a3677d.css","assets/vendor.dc0894bd.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.70dfed0a.js"),["assets/setting.70dfed0a.js","assets/setting.f947579c.css","assets/vendor.dc0894bd.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.13ddec2d.js"),["assets/invited.13ddec2d.js","assets/invited.74b24e1e.css","assets/clipboard.ad6b6dd1.js","assets/vendor.dc0894bd.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.13514764.js"),["assets/test.13514764.js","assets/vendor.dc0894bd.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.796c3849.js"),["assets/shareInfo.796c3849.js","assets/shareInfo.678356c6.css","assets/vendor.dc0894bd.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.31d309d9.js"),["assets/login.31d309d9.js","assets/login.a8b45006.css","assets/vendor.dc0894bd.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.9f8b4d2c.js"),["assets/sms.9f8b4d2c.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.dc0894bd.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.7e093c7a.js"),["assets/register.7e093c7a.js","assets/register.5588ce76.css","assets/vendor.dc0894bd.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.a0b3398d.js"),["assets/testtest.a0b3398d.js","assets/vendor.dc0894bd.js"])}],Nt=Ge({history:Ye(),routes:xt});var C=Nt;const x=Ze(ot);x.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,n=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var i;(i=o.props)==null||i.onResize(s,n)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});x.config.globalProperties.$http=m;x.use(C);x.use(Xe,{router:C,siteIdList:[1280510106]});x.mount("#app");export{Dt as a,te as b,it as c,Pt as d,Ot as e,ut as f,Lt as g,Tt as h,m as i,$t as j,tt as p,St as r,It as s};
