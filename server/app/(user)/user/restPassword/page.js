(()=>{var e={};e.id=478,e.ids=[478],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},9640:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=t(482),i=t(9108),a=t(2563),o=t.n(a),n=t(8300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let c=["",{children:["(user)",{children:["user",{children:["restPassword",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3131)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(user)\\user\\restPassword\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,118)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(user)\\user\\layout.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,8918)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(t.bind(t,4791)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(t.bind(t,552)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,3243)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(user)\\user\\restPassword\\page.js"],u="/(user)/user/restPassword/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(user)/user/restPassword/page",pathname:"/user/restPassword",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8648:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,5491,23)),Promise.resolve().then(t.bind(t,9697)),Promise.resolve().then(t.bind(t,5843))},6111:(e,r,t)=>{Promise.resolve().then(t.bind(t,84))},5303:()=>{},1356:function(e,r,t){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>r.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)0>r.indexOf(s[i])&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(t[s[i]]=e[s[i]]);return t};Object.defineProperty(r,"__esModule",{value:!0}),r.hasCookie=r.deleteCookie=r.setCookie=r.getCookie=r.getCookies=void 0;var a=t(6334),o=function(){return"undefined"!=typeof window},n=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},l=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&n(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&n(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&n(e.cookies())},c=function(e){var r={};return e.getAll().forEach(function(e){var t=e.name,s=e.value;r[t]=s}),r},d=function(e){void 0===e&&(e="");try{var r=JSON.stringify(e);return/^[\{\[]/.test(r)?r:e}catch(r){return e}};r.getCookies=function(e){if(l(e)){if(null==e?void 0:e.req)return c(e.req.cookies);if(null==e?void 0:e.cookies)return c(e.cookies())}if(e&&(r=e.req),!o())return r&&r.cookies?r.cookies:r&&r.headers.cookie?(0,a.parse)(r.headers.cookie):{};for(var r,t={},s=document.cookie?document.cookie.split("; "):[],i=0,n=s.length;i<n;i++){var d=s[i].split("="),u=d.slice(1).join("=");t[d[0]]=u}return t},r.getCookie=function(e,t){var s=(0,r.getCookies)(t)[e];if(void 0!==s)return s?s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):s},r.setCookie=function(e,r,t){if(l(t)){var n,c,u,p=t.req,m=t.res,h=t.cookies,g=i(t,["req","res","cookies"]),f=s({name:e,value:r},g);p&&p.cookies.set(f),m&&m.cookies.set(f),h&&h().set(f);return}if(t){var p=t.req,m=t.res,x=i(t,["req","res"]);c=p,u=m,n=x}var v=(0,a.serialize)(e,d(r),s({path:"/"},n));if(o())document.cookie=v;else if(u&&c){var b=u.getHeader("Set-Cookie");if(Array.isArray(b)||(b=b?[String(b)]:[]),u.setHeader("Set-Cookie",b.concat(v)),c&&c.cookies){var y=c.cookies;""===r?delete y[e]:y[e]=d(r)}if(c&&c.headers&&c.headers.cookie){var y=(0,a.parse)(c.headers.cookie);""===r?delete y[e]:y[e]=d(r),c.headers.cookie=Object.entries(y).reduce(function(e,r){return e.concat("".concat(r[0],"=").concat(r[1],";"))},"")}}},r.deleteCookie=function(e,t){return(0,r.setCookie)(e,"",s(s({},t),{maxAge:-1}))},r.hasCookie=function(e,t){return!!e&&(0,r.getCookies)(t).hasOwnProperty(e)}},6334:(e,r)=>{"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */r.parse=function(e,r){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var t={},s=(r||{}).decode||i,a=0;a<e.length;){var o=e.indexOf("=",a);if(-1===o)break;var n=e.indexOf(";",a);if(-1===n)n=e.length;else if(n<o){a=e.lastIndexOf(";",o-1)+1;continue}var l=e.slice(a,o).trim();if(void 0===t[l]){var c=e.slice(o+1,n).trim();34===c.charCodeAt(0)&&(c=c.slice(1,-1)),t[l]=function(e,r){try{return r(e)}catch(r){return e}}(c,s)}a=n+1}return t},r.serialize=function(e,r,i){var o=i||{},n=o.encode||a;if("function"!=typeof n)throw TypeError("option encode is invalid");if(!s.test(e))throw TypeError("argument name is invalid");var l=n(r);if(l&&!s.test(l))throw TypeError("argument val is invalid");var c=e+"="+l;if(null!=o.maxAge){var d=o.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(d)}if(o.domain){if(!s.test(o.domain))throw TypeError("option domain is invalid");c+="; Domain="+o.domain}if(o.path){if(!s.test(o.path))throw TypeError("option path is invalid");c+="; Path="+o.path}if(o.expires){var u=o.expires;if("[object Date]"!==t.call(u)&&!(u instanceof Date)||isNaN(u.valueOf()))throw TypeError("option expires is invalid");c+="; Expires="+u.toUTCString()}if(o.httpOnly&&(c+="; HttpOnly"),o.secure&&(c+="; Secure"),o.partitioned&&(c+="; Partitioned"),o.priority)switch("string"==typeof o.priority?o.priority.toLowerCase():o.priority){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var t=Object.prototype.toString,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function a(e){return encodeURIComponent(e)}},370:(e,r,t)=>{"use strict";t.d(r,{E:()=>s});let s="https://zaha-script.net"},84:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var s=t(5344),i=t(370),a=t(8890),o=t(643),n=t(3608),l=t(1356),c=t(6506),d=t(8428),u=t(3729),p=t(9697);function m(){let e=(0,d.useRouter)(),[r,t]=(0,u.useState)(!1),[m,h]=(0,u.useState)(),g=!1;return(0,l.getCookie)("userData")&&(g=JSON.parse((0,l.getCookie)("userData"))),g&&e.replace("/"),(0,s.jsxs)("div",{className:"bg-gray-700 absolute h-full w-full right-0 top-0 flex items-center justify-center",children:[s.jsx(o.Z,{}),function(){if(r)return s.jsx(a.Z,{})}(),s.jsx("div",{className:"absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px]",style:{background:"linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}),s.jsx("main",{className:"z-10 w-full max-w-md max-sm:px-2 mx-auto p-6",children:s.jsx("div",{className:"mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700",children:(0,s.jsxs)("div",{className:"p-4 sm:p-7",children:[(0,s.jsxs)("div",{className:"text-center",children:[s.jsx("h1",{className:"block text-2xl font-bold text-gray-800 dark:text-white",children:"نسيت كلمة المرور؟"}),(0,s.jsxs)("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["هل تذكرت كلمه المرور ؟",s.jsx(c.default,{className:"text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",href:"/user/login",children:"تسجيل الدخول"})]})]}),s.jsx("div",{className:"mt-5",children:s.jsx("form",{onSubmit:r=>{r.preventDefault(),t(!0),(0,n.Z)({method:"post",url:`${i.E}/api/resetPassword/sendEmail`,data:{email:m}}).then(r=>"We have emailed your password reset link."==r.data.message?(t(!1),e.replace("/user/login"),p.toast.success(`تم ارسال رساله علي البريد  ${m}`)):r.data.message?void 0:(t(!1),p.toast.error(`لا يوجد حساب بهذا البريد  ${m}`))).catch(e=>(t(!1),console.log(e),p.toast.error(`حدث خطا ما حاول مجددا`)))},children:(0,s.jsxs)("div",{className:"grid gap-y-4",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"email",className:"block text-gray-700 text-sm mb-2 dark:text-white",children:"البريد الالكترونى"}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx("input",{type:"email",id:"email",onChange:e=>{h(e.target.value)},className:"py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:outline-blue-500 border-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600",required:!0,"aria-describedby":"email-error"}),s.jsx("div",{className:"hidden absolute inset-y-0 end-0 pointer-events-none pe-3",children:s.jsx("svg",{className:"size-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true",children:s.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})})})]})]}),s.jsx("button",{type:"submit",className:"w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",children:"اعادة التعين"})]})})})]})})})]})}},8890:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var s=t(5344);function i(){return(0,s.jsxs)("div",{className:" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6",children:[(0,s.jsxs)("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[s.jsx("div",{className:"wheel"}),s.jsx("div",{className:"hamster",children:(0,s.jsxs)("div",{className:"hamster__body",children:[(0,s.jsxs)("div",{className:"hamster__head",children:[s.jsx("div",{className:"hamster__ear"}),s.jsx("div",{className:"hamster__eye"}),s.jsx("div",{className:"hamster__nose"})]}),s.jsx("div",{className:"hamster__limb hamster__limb--fr"}),s.jsx("div",{className:"hamster__limb hamster__limb--fl"}),s.jsx("div",{className:"hamster__limb hamster__limb--br"}),s.jsx("div",{className:"hamster__limb hamster__limb--bl"}),s.jsx("div",{className:"hamster__tail"})]})}),s.jsx("div",{className:"spoke"})]}),s.jsx("h3",{className:"text-lg text-gray-200",children:"جارى التحميل..."})]})}t(3722)},118:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,metadata:()=>i});var s=t(5036);t(5023);let i={title:"ZaHa Script - User",description:"The best company for creating websites"};function a({children:e}){return s.jsx("div",{className:"dashbordContainer",children:e})}},3131:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>i,default:()=>o});let s=(0,t(6843).createProxy)(String.raw`D:\Programming\programming projects\important ptojects\zaha\frontend\src\app\(user)\user\restPassword\page.js`),{__esModule:i,$$typeof:a}=s,o=s.default},3722:()=>{}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,796,72,693],()=>t(9640));module.exports=s})();