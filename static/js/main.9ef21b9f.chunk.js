(this.webpackJsonplauncher=this.webpackJsonplauncher||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},30:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(14),o=a.n(l),i=a(2),s=a(18),u=a(9),m=a(11),d={deviceName:"SuperScreenPi"},p=a(17);!function(e){e.SET_SETTING="SET_SETTING"}(n||(n={}));var f,h=a(10),v=a(29),E={apps:[{id:"io.chapp.dino",name:"Dino",openUrl:"https://www.chapp.io/dino",iconUrl:"https://www.chapp.io/dino/logo512.png"},{id:"dev.chrisdiana.calculator",name:"Calculator",openUrl:"https://chrisdiana.dev/pwa-calculator/",iconUrl:"https://chrisdiana.dev/pwa-calculator/img/icons/android-chrome-512x512.png"},{id:"dev.schmuckli.wallet",name:"Wallet",openUrl:"https://wallet.schmuckli.dev/",iconUrl:"https://wallet.schmuckli.dev/android-icon-512x512.png"},{id:"com.spotify.open",name:"Spotify",openUrl:"https://open.spotify.com/?utm_source=pwa_install",iconUrl:"https://open.scdn.co/cdn/images/icons/Spotify_512.49a0bf03.png"},{id:"com.littlealchemy2",name:"Little Alchemy 2",openUrl:"https://littlealchemy2.com/?utm_source=homescreen",iconUrl:"https://littlealchemy2.com/public/icons/icon-512x512.png"},{id:"io.github.maxwellito.breaklock",name:"BreakLock",openUrl:"https://maxwellito.github.io/breaklock/?utm_source=homescreen",iconUrl:"https://maxwellito.github.io/breaklock/assets/icons/icon-256x256.png"},{id:"com.aliexpress.store",name:"AliExpress",openUrl:"https://m.nl.aliexpress.com",iconUrl:"https://ae01.alicdn.com/kf/Hf6ec66fcde824896a0e75be02021d64e5.png"}]};!function(e){e.ADD_APP="ADD_APP"}(f||(f={}));var b={settings:d,apps:E},g=Object(u.b)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_SETTING:return Object(m.a)(Object(m.a)({},e),t.data);default:return e}},apps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.ADD_APP:return Object(m.a)(Object(m.a)({},e),{},{apps:[].concat(Object(v.a)(e.apps),[t.data])});default:return e}}});function w(e){return Object(h.c)(e)}var N=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],l=w((function(e){return e.apps.apps}));return r.a.createElement("div",{className:"app-list"},l.map((function(e){var t=e.id,c=e.name,l=e.iconUrl,o=e.openUrl;return r.a.createElement("div",{key:t,className:"app-badge ".concat(t===a?"selected":""),"data-appname":c,onClick:function(){t===a?window.location.href=o:n(t)}},r.a.createElement("img",{src:l,alt:c}))})))},k=a(7),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menu"},r.a.createElement(k.b,{className:"round button",to:"/settings",href:"#"},r.a.createElement("i",{className:"fas fa-cogs"}))))},y=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)},x=function(e){var t=e.children;return r.a.createElement("div",{className:"box"},t)},U=function(e){var t=e.value,a=e.icon,n=e.label,c=e.onChange;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-".concat(a)}),n),r.a.createElement("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)}}))},j=function(){var e=w((function(e){return e.settings})).deviceName,t=Object(h.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(k.b,{to:"/",className:"round button"},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement(y,null,r.a.createElement(x,null,r.a.createElement(U,{icon:"user-tag",label:"Device Name",value:e,onChange:function(e){var a,c;t((a="deviceName",c=e,{type:n.SET_SETTING,data:Object(p.a)({},a,c)}))}}))),r.a.createElement(y,null,r.a.createElement(x,null,r.a.createElement(k.b,{to:"/settings/about",className:"field"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-question-circle"}),"About")))))},O=a(27),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(k.b,{to:"/settings",className:"round button"},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement(y,null,r.a.createElement(x,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-code-branch"}),"SuperScreenPi Launcher v",O.a)),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-calendar"}),"Release ","8/23/2020, 11:35:43 AM")),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("i",{className:"fab fa-react"}),"React v",r.a.version)))))},A=a(23);function _(){return A.DateTime.local().toLocaleString(A.DateTime.TIME_SIMPLE)||""}var P=function(){var e=Object(c.useState)(_),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){n(_())}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("span",{className:"time"},a)},D=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"icon-bar"},r.a.createElement("button",{className:"link",onClick:function(){if(window.require){var e=window.require("electron");e&&e.ipcRenderer.send("navbar","home")}}},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(P,null))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/home",component:S}),r.a.createElement(i.b,{exact:!0,path:"/settings",component:j}),r.a.createElement(i.b,{exact:!0,path:"/navbar",component:D}),r.a.createElement(i.b,{exact:!0,path:"/settings/about",component:T}),r.a.createElement(i.a,{to:"/home"})))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(40);var W=a(28),R=Object(u.c)(g,b,Object(W.persist)("launcher/state",["apps"]));function F(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}window.addEventListener("resize",F),window.addEventListener("orientationchange",F),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:R},r.a.createElement(k.a,null,r.a.createElement(C,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/launcher",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/launcher","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.9ef21b9f.chunk.js.map