(function(e){function n(n){for(var r,c,i=n[0],a=n[1],s=n[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(n);while(p.length)p.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b2eb8":"089f9541","chunk-2d0b32d7":"9db73881","chunk-2d0e9345":"4efaccd0","chunk-2d229397":"ffa268b3"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=c(e);var s=new Error;u=function(n){a.onerror=a.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},3786:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return l})),t.d(n,"c",(function(){return f}));var r=t("bc3a"),o=t.n(r);function u(e){return e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}function c(){return o.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL})}function i(){const e=o.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});return u(e)}const a=c();i();function s(e){return a.post("auth/register",e)}function l(e){return a.post("auth/login",e)}function f(e){return a.get("auth/verify-email?code="+e)}},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("2b0e"),o=function(){var e=this,n=e._self._c;return n("div",[n("router-view")],1)},u=[],c={name:"App"},i=c,a=t("2877"),s=Object(a["a"])(i,o,u,!1,null,null,null),l=s.exports,f=t("8c4f");r["a"].use(f["a"]);const p=[{path:"/",component:()=>t.e("chunk-2d0e9345").then(t.bind(null,"8d14"))},{path:"/register",component:()=>t.e("chunk-2d229397").then(t.bind(null,"dd12"))},{path:"/verify",component:()=>t.e("chunk-2d0b32d7").then(t.bind(null,"26eb"))},{path:"/login",component:()=>t.e("chunk-2d0b2eb8").then(t.bind(null,"25ba"))}],d=new f["a"]({mode:"history",routes:p,scrollBehavior(){window.scrollTo(0,0)}});var h=d,m=t("2f62");function b(e){document.cookie="bookmark_auth="+e}function k(e){document.cookie="bookmark_user="+e}function v(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function g(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,"$1")}var _=t("3786");r["a"].use(m["a"]);var y=new m["a"].Store({state:{userEmail:g()||"",accessToken:v()||"",refreshToken:localStorage.getItem("refreshToken")||""},getters:{isLogin(e){return""!==e.userEmail}},mutations:{setAccessToken(e,n){e.accessToken=n},setRefreshToken(e,n){e.refreshToken=n},setUserEmail(e,n){e.userEmail=n}},actions:{async LOGIN({commit:e},n){const{data:t}=await Object(_["a"])(n);return console.log(n.email+"님 로그인 완료"),e("setAccessToken",t.access_token),e("setRefreshToken",t.refresh_token),e("setUserEmail",n.email),k(n.email),b(t.access_token),localStorage.setItem("refreshToken",t.refresh_token),t}}});t("5a41");r["a"].config.productionTip=!1,new r["a"]({router:h,store:y,render:e=>e(l)}).$mount("#app")},"5a41":function(e,n,t){}});
//# sourceMappingURL=app.ae3102e9.js.map