(()=>{var e={476:function(e,n){!function(e){"use strict";var n=function(){return(n=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function t(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var p=arguments[n],i=0,a=p.length;i<a;i++,r++)o[r]=p[i];return o}function o(e,t){var o,r,p=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,n){var t=null!=n?n:o.next();return r[t]=e,t},resolve:function(e,n,t){var o=r[e];o&&(t(n)?o.resolve(n):o.reject(n),r[e]=null)}});return t((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var n=e.detail.data,t=n.request_id,o=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(n,["request_id"]);t&&p.resolve(t,o,(function(e){return!("error_type"in e)}))}})),function(t,o){return void 0===o&&(o={}),new Promise((function(r,i){var a=p.add({resolve:r,reject:i},o.request_id);e(t,n(n({},o),{request_id:a}))}))}}var r,p,i,a,s="undefined"!=typeof window,u=Boolean(s&&window.AndroidBridge),d=Boolean(s&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),l=s&&!u&&!d,b=l&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),c=l?"message":"VKWebAppEvent",f=t(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit"],l&&!b?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowSubscriptionBox","VKWebAppShowInstallPushBox","VKWebAppGetFriends"]:["VKWebAppShowImages"]),A=s?window.AndroidBridge:void 0,W=d?window.webkit.messageHandlers:void 0;function m(e,n){var t=n||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),o}(r=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA="camera",r.LOCATION="location",r.PHOTO="photo",(p=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU="ru",p.UK="uk",p.UA="ua",p.EN="en",p.BE="be",p.KZ="kz",p.PT="pt",p.ES="es",(i=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN="admin",i.EDITOR="editor",i.MEMBER="member",i.MODER="moder",i.NONE="none",(a=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB="desktop_web",a.MOBILE_WEB="mobile_web",a.MOBILE_ANDROID="mobile_android",a.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",a.MOBILE_IPHONE="mobile_iphone",a.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",a.MOBILE_IPAD="mobile_ipad","undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(m.prototype=Event.prototype,m));var K=function(e){var n=void 0,r=[];function p(e){r.push(e)}function i(){return d||u}function a(){return l&&window.parent!==window}function s(){return i()||a()}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(c,(function(e){if(d||u)return t(r).map((function(n){return n.call(null,e)}));if(l&&e&&e.data){var o=e.data,p=o.type,i=o.data,a=o.frameId;p&&"SetSupportedHandlers"===p?i.supportedHandlers:p&&"VKWebAppSettings"===p?n=a:t(r).map((function(e){return e({detail:{type:p,data:i}})}))}}));var b=o((function(e,t){A&&A[e]?A[e](JSON.stringify(t)):W&&W[e]&&"function"==typeof W[e].postMessage?W[e].postMessage(t):l&&parent.postMessage({handler:e,params:t,type:"vk-connect",webFrameId:n,connectVersion:"2.5.3"},"*")}),p);return{send:b,sendPromise:b,subscribe:p,unsubscribe:function(e){var n=r.indexOf(e);-1<n&&r.splice(n,1)},supports:function(e){return u?!(!A||"function"!=typeof A[e]):d?!(!W||!W[e]||"function"!=typeof W[e].postMessage):l&&-1<f.indexOf(e)},isWebView:i,isIframe:a,isEmbedded:s,isStandalone:function(){return!s()}}}();e.applyMiddleware=function e(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return t.includes(void 0)||t.includes(null)?e.apply(void 0,t.filter((function(e){return"function"==typeof e}))):function(e){if(0===t.length)return e;var o,r={subscribe:e.subscribe,send:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.send.apply(e,n)}};return o=t.filter((function(e){return"function"==typeof e})).map((function(e){return e(r)})).reduce((function(e,n){return function(t){return e(n(t))}}))(e.send),n(n({},e),{send:o})}},e.default=K,Object.defineProperty(e,"__esModule",{value:!0})}(n)}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var p=n[o]={exports:{}};return e[o].call(p.exports,p,p.exports,t),p.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=t(476),n=t.n(e);n().send("VKWebAppInit").then((function(){document.getElementById("click").onclick=function(){n().send("VKWebAppJoinGroup",{group_id:78616012})}}))})()})();