(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8521],{3390:function(e,t,r){Promise.resolve().then(r.bind(r,3949))},4870:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)0>t.indexOf(i[s])&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var a=r(8600),o=function(){return"undefined"!=typeof window},n=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},l=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&n(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&n(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&n(e.cookies())},c=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,i=e.value;t[r]=i}),t},d=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(t){return e}};t.getCookies=function(e){if(l(e)){if(null==e?void 0:e.req)return c(e.req.cookies);if(null==e?void 0:e.cookies)return c(e.cookies())}if(e&&(t=e.req),!o())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,a.parse)(t.headers.cookie):{};for(var t,r={},i=document.cookie?document.cookie.split("; "):[],s=0,n=i.length;s<n;s++){var d=i[s].split("="),h=d.slice(1).join("=");r[d[0]]=h}return r},t.getCookie=function(e,r){var i=(0,t.getCookies)(r)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},t.setCookie=function(e,t,r){if(l(r)){var n,c,h,u=r.req,f=r.res,m=r.cookies,p=s(r,["req","res","cookies"]),x=i({name:e,value:t},p);u&&u.cookies.set(x),f&&f.cookies.set(x),m&&m().set(x);return}if(r){var u=r.req,f=r.res,v=s(r,["req","res"]);c=u,h=f,n=v}var g=(0,a.serialize)(e,d(t),i({path:"/"},n));if(o())document.cookie=g;else if(h&&c){var j=h.getHeader("Set-Cookie");if(Array.isArray(j)||(j=j?[String(j)]:[]),h.setHeader("Set-Cookie",j.concat(g)),c&&c.cookies){var y=c.cookies;""===t?delete y[e]:y[e]=d(t)}if(c&&c.headers&&c.headers.cookie){var y=(0,a.parse)(c.headers.cookie);""===t?delete y[e]:y[e]=d(t),c.headers.cookie=Object.entries(y).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,r){return(0,t.setCookie)(e,"",i(i({},r),{maxAge:-1}))},t.hasCookie=function(e,r){return!!e&&(0,t.getCookies)(r).hasOwnProperty(e)}},8600:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},i=(t||{}).decode||s,a=0;a<e.length;){var o=e.indexOf("=",a);if(-1===o)break;var n=e.indexOf(";",a);if(-1===n)n=e.length;else if(n<o){a=e.lastIndexOf(";",o-1)+1;continue}var l=e.slice(a,o).trim();if(void 0===r[l]){var c=e.slice(o+1,n).trim();34===c.charCodeAt(0)&&(c=c.slice(1,-1)),r[l]=function(e,t){try{return t(e)}catch(t){return e}}(c,i)}a=n+1}return r},t.serialize=function(e,t,s){var o=s||{},n=o.encode||a;if("function"!=typeof n)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var l=n(t);if(l&&!i.test(l))throw TypeError("argument val is invalid");var c=e+"="+l;if(null!=o.maxAge){var d=o.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(d)}if(o.domain){if(!i.test(o.domain))throw TypeError("option domain is invalid");c+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw TypeError("option path is invalid");c+="; Path="+o.path}if(o.expires){var h=o.expires;if("[object Date]"!==r.call(h)&&!(h instanceof Date)||isNaN(h.valueOf()))throw TypeError("option expires is invalid");c+="; Expires="+h.toUTCString()}if(o.httpOnly&&(c+="; HttpOnly"),o.secure&&(c+="; Secure"),o.partitioned&&(c+="; Partitioned"),o.priority)switch("string"==typeof o.priority?o.priority.toLowerCase():o.priority){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var r=Object.prototype.toString,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function a(e){return encodeURIComponent(e)}},7907:function(e,t,r){"use strict";var i=r(5313);r.o(i,"usePathname")&&r.d(t,{usePathname:function(){return i.usePathname}}),r.o(i,"useRouter")&&r.d(t,{useRouter:function(){return i.useRouter}})},648:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});let i="https://zaha-script.net"},3575:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var i=r(7437),s=r(5206),a=r(4870),o=r(7907),n=r(2265);function l(){let[e,t]=(0,n.useState)("fixed"),r=(0,o.useRouter)(),l=!1;return(0,a.getCookie)("userData")&&(l=JSON.parse((0,a.getCookie)("userData"))),(0,n.useEffect)(()=>{l||(localStorage.setItem("prevUrl","/dashboard"),r.replace("/ar/user/login")),l&&(0===l.isAdmin&&r.replace("/"),1===l.isAdmin&&t("hidden"))},[l]),(0,i.jsx)("div",{className:"w-full h-full bg-gray-900 ".concat(e," top-0 right-0 z-50"),children:(0,i.jsx)(s.Z,{})})}},3949:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var i=r(7437),s=r(648),a=r(8205),o=r(7908),n=r(4870),l=r(2265),c=r(3575),d=r(5206),h=r(6123),u=r(7907);function f(){let[e,t]=(0,l.useState)(null),[r,f]=(0,l.useState)(!1),[m,p]=(0,l.useState)(!1),[x,v]=(0,l.useState)(null);(0,u.useRouter)();let g=!1;return(0,n.getCookie)("userData")&&(g=JSON.parse((0,n.getCookie)("userData"))),(0,l.useEffect)(()=>{(0,o.Z)({url:"".concat(s.E,"/api/admin/showAll/contact"),method:"get",headers:{Authorization:"Bearer ".concat(g.token)}}).then(e=>{t(e.data.data)}).catch(e=>{console.log(e)})},[]),(0,i.jsxs)("div",{children:[function(){if(m)return(0,i.jsx)(d.Z,{})}(),(0,i.jsx)(c.default,{}),e?0===e.length?(0,i.jsxs)("div",{className:"h-[500px] w-full flex flex-col items-center justify-center gap-3 bg-gray-700 rounded-md",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"bi bi-file-earmark-excel-fill",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64"})}),(0,i.jsx)("p",{className:"font-bold",children:"لم يتم العثور علي تعليقات"})]}):e?(0,i.jsxs)("div",{className:"flex gap-6 flex-col",children:[(0,i.jsx)("p",{className:"text-2xl font-bold",children:"# رسائل المستخدمين"}),(0,i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6",children:null==e?void 0:e.map(e=>{var t;return(0,i.jsxs)("div",{onClick:()=>{f(!0),v(e.id)},className:"bg-gray-700 rounded-md h-[200px] flex flex-col justify-between hover:bg-gray-600",children:[(0,i.jsx)("div",{className:"p-3",children:(0,i.jsx)("div",{className:"h-[105px] flex flex-col gap-2 overflow-hidden",children:null===(t=e.contacts)||void 0===t?void 0:t.map((e,t)=>(0,i.jsxs)("div",{className:"py-1 px-3 rounded-md bg-blue-500",children:[(0,i.jsx)("p",{children:e.message}),(0,i.jsxs)("p",{className:"flex gap-2 items-center",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-telephone-fill",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"})}),e.phoneNumber]})]},t))})}),(0,i.jsxs)("div",{className:"flex gap-3 border-t-[1px] border-solid border-gray-300 p-3",children:[(0,i.jsx)("div",{className:"w-[40px] h-[40px] rounded-full bg-blue-500 font-bold flex items-center justify-center text-gray-200 text-lg",children:e.name[0]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:e.name}),(0,i.jsx)("p",{children:e.email})]})]})]},e.id)})})]}):void 0:(0,i.jsx)("div",{className:" w-full h-[400px] flex items-center justify-center bg-gray-700 rounded-md",children:(0,i.jsx)(a.Z,{})}),function(){if(r){var t;let r=null==e?void 0:e.filter(e=>e.id===x);return(0,i.jsxs)("div",{className:"fixed top-0 flex right-0 w-full h-screen z-[200] items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-900/70 w-full h-full",onClick:()=>{f(!1)}}),(0,i.jsx)("div",{className:"bg-gray-600 rounded-lg p-6 absolute z-10 w-[400px] h-auto",children:null===(t=r[0].contacts)||void 0===t?void 0:t.map(e=>(0,i.jsxs)("div",{className:"bg-blue-500 rounded-md overflow-hidden my-2",children:[(0,i.jsxs)("div",{className:"flex justify-between p-3 items-center bg-blue-600",children:[(0,i.jsxs)("p",{className:"flex gap-2 items-center",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-telephone-fill",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"})}),e.phoneNumber]}),(0,i.jsx)("svg",{onClick:()=>{var t;t=e.id,p(!0),(0,o.Z)({url:"".concat(s.E,"/api/admin/softDelete/contact/").concat(t),method:"delete",headers:{Authorization:"Bearer ".concat(g.token)}}).then(()=>(p(!1),setTimeout(()=>{location.reload()},1e3),h.toast.success("تم حذف الرساله "))).catch(()=>(p(!1),h.toast.error("حدث خطأ ما!")))},xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"hover:text-red-500 bi bi-trash3-fill",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"})})]}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:"text-lg p-3",children:e.message})})]},e.id))})]})}}()]})}},5206:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var i=r(7437);function s(){return(0,i.jsxs)("div",{className:" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6",children:[(0,i.jsxs)("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[(0,i.jsx)("div",{className:"wheel"}),(0,i.jsx)("div",{className:"hamster",children:(0,i.jsxs)("div",{className:"hamster__body",children:[(0,i.jsxs)("div",{className:"hamster__head",children:[(0,i.jsx)("div",{className:"hamster__ear"}),(0,i.jsx)("div",{className:"hamster__eye"}),(0,i.jsx)("div",{className:"hamster__nose"})]}),(0,i.jsx)("div",{className:"hamster__limb hamster__limb--fr"}),(0,i.jsx)("div",{className:"hamster__limb hamster__limb--fl"}),(0,i.jsx)("div",{className:"hamster__limb hamster__limb--br"}),(0,i.jsx)("div",{className:"hamster__limb hamster__limb--bl"}),(0,i.jsx)("div",{className:"hamster__tail"})]})}),(0,i.jsx)("div",{className:"spoke"})]}),(0,i.jsx)("h3",{className:"text-lg text-gray-200",children:"Loading..."})]})}r(3112)},8205:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var i=r(7437);function s(){return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"200px",width:"200px",viewBox:"0 0 200 200",className:"pencil",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"pencil-eraser",children:(0,i.jsx)("rect",{height:"30",width:"30",ry:"5",rx:"5"})})}),(0,i.jsx)("circle",{transform:"rotate(-113,100,100)",strokeLinecap:"round",strokeDashoffset:"439.82",strokeDasharray:"439.82 439.82",strokeWidth:"2",stroke:"currentColor",fill:"none",r:"70",className:"pencil__stroke"}),(0,i.jsxs)("g",{transform:"translate(100,100)",className:"pencil__rotate",children:[(0,i.jsxs)("g",{fill:"none",children:[(0,i.jsx)("circle",{transform:"rotate(-90)",strokeDashoffset:"402",strokeDasharray:"402.12 402.12",strokeWidth:"30",stroke:"hsl(223,90%,50%)",r:"64",className:"pencil__body1"}),(0,i.jsx)("circle",{transform:"rotate(-90)",strokeDashoffset:"465",strokeDasharray:"464.96 464.96",strokeWidth:"10",stroke:"hsl(223,90%,60%)",r:"74",className:"pencil__body2"}),(0,i.jsx)("circle",{transform:"rotate(-90)",strokeDashoffset:"339",strokeDasharray:"339.29 339.29",strokeWidth:"10",stroke:"hsl(223,90%,40%)",r:"54",className:"pencil__body3"})]}),(0,i.jsx)("g",{transform:"rotate(-90) translate(49,0)",className:"pencil__eraser",children:(0,i.jsxs)("g",{className:"pencil__eraser-skew",children:[(0,i.jsx)("rect",{height:"30",width:"30",ry:"5",rx:"5",fill:"hsl(223,90%,70%)"}),(0,i.jsx)("rect",{clipPath:"url(#pencil-eraser)",height:"30",width:"5",fill:"hsl(223,90%,60%)"}),(0,i.jsx)("rect",{height:"20",width:"30",fill:"hsl(223,10%,90%)"}),(0,i.jsx)("rect",{height:"20",width:"15",fill:"hsl(223,10%,70%)"}),(0,i.jsx)("rect",{height:"20",width:"5",fill:"hsl(223,10%,80%)"}),(0,i.jsx)("rect",{height:"2",width:"30",y:"6",fill:"hsla(223,10%,10%,0.2)"}),(0,i.jsx)("rect",{height:"2",width:"30",y:"13",fill:"hsla(223,10%,10%,0.2)"})]})}),(0,i.jsxs)("g",{transform:"rotate(-90) translate(49,-30)",className:"pencil__point",children:[(0,i.jsx)("polygon",{points:"15 0,30 30,0 30",fill:"hsl(33,90%,70%)"}),(0,i.jsx)("polygon",{points:"15 0,6 30,0 30",fill:"hsl(33,90%,50%)"}),(0,i.jsx)("polygon",{points:"15 0,20 10,10 10",fill:"hsl(223,10%,10%)"})]})]})]})})}r(641)},3112:function(){},641:function(){}},function(e){e.O(0,[7908,6123,2971,8069,1744],function(){return e(e.s=3390)}),_N_E=e.O()}]);