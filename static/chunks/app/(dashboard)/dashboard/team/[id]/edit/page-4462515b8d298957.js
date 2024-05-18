(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9621],{2826:function(e,a,r){Promise.resolve().then(r.bind(r,4320))},4870:function(e,a,r){"use strict";var s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var a,r=1,s=arguments.length;r<s;r++)for(var t in a=arguments[r])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}).apply(this,arguments)},t=this&&this.__rest||function(e,a){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>a.indexOf(s)&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,s=Object.getOwnPropertySymbols(e);t<s.length;t++)0>a.indexOf(s[t])&&Object.prototype.propertyIsEnumerable.call(e,s[t])&&(r[s[t]]=e[s[t]]);return r};Object.defineProperty(a,"__esModule",{value:!0}),a.hasCookie=a.deleteCookie=a.setCookie=a.getCookie=a.getCookies=void 0;var l=r(8600),i=function(){return"undefined"!=typeof window},o=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},n=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&o(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&o(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&o(e.cookies())},d=function(e){var a={};return e.getAll().forEach(function(e){var r=e.name,s=e.value;a[r]=s}),a},c=function(e){void 0===e&&(e="");try{var a=JSON.stringify(e);return/^[\{\[]/.test(a)?a:e}catch(a){return e}};a.getCookies=function(e){if(n(e)){if(null==e?void 0:e.req)return d(e.req.cookies);if(null==e?void 0:e.cookies)return d(e.cookies())}if(e&&(a=e.req),!i())return a&&a.cookies?a.cookies:a&&a.headers.cookie?(0,l.parse)(a.headers.cookie):{};for(var a,r={},s=document.cookie?document.cookie.split("; "):[],t=0,o=s.length;t<o;t++){var c=s[t].split("="),h=c.slice(1).join("=");r[c[0]]=h}return r},a.getCookie=function(e,r){var s=(0,a.getCookies)(r)[e];if(void 0!==s)return s?s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):s},a.setCookie=function(e,a,r){if(n(r)){var o,d,h,g=r.req,u=r.res,x=r.cookies,m=t(r,["req","res","cookies"]),f=s({name:e,value:a},m);g&&g.cookies.set(f),u&&u.cookies.set(f),x&&x().set(f);return}if(r){var g=r.req,u=r.res,v=t(r,["req","res"]);d=g,h=u,o=v}var p=(0,l.serialize)(e,c(a),s({path:"/"},o));if(i())document.cookie=p;else if(h&&d){var b=h.getHeader("Set-Cookie");if(Array.isArray(b)||(b=b?[String(b)]:[]),h.setHeader("Set-Cookie",b.concat(p)),d&&d.cookies){var j=d.cookies;""===a?delete j[e]:j[e]=c(a)}if(d&&d.headers&&d.headers.cookie){var j=(0,l.parse)(d.headers.cookie);""===a?delete j[e]:j[e]=c(a),d.headers.cookie=Object.entries(j).reduce(function(e,a){return e.concat("".concat(a[0],"=").concat(a[1],";"))},"")}}},a.deleteCookie=function(e,r){return(0,a.setCookie)(e,"",s(s({},r),{maxAge:-1}))},a.hasCookie=function(e,r){return!!e&&(0,a.getCookies)(r).hasOwnProperty(e)}},8600:function(e,a){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */a.parse=function(e,a){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},s=(a||{}).decode||t,l=0;l<e.length;){var i=e.indexOf("=",l);if(-1===i)break;var o=e.indexOf(";",l);if(-1===o)o=e.length;else if(o<i){l=e.lastIndexOf(";",i-1)+1;continue}var n=e.slice(l,i).trim();if(void 0===r[n]){var d=e.slice(i+1,o).trim();34===d.charCodeAt(0)&&(d=d.slice(1,-1)),r[n]=function(e,a){try{return a(e)}catch(a){return e}}(d,s)}l=o+1}return r},a.serialize=function(e,a,t){var i=t||{},o=i.encode||l;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!s.test(e))throw TypeError("argument name is invalid");var n=o(a);if(n&&!s.test(n))throw TypeError("argument val is invalid");var d=e+"="+n;if(null!=i.maxAge){var c=i.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");d+="; Max-Age="+Math.floor(c)}if(i.domain){if(!s.test(i.domain))throw TypeError("option domain is invalid");d+="; Domain="+i.domain}if(i.path){if(!s.test(i.path))throw TypeError("option path is invalid");d+="; Path="+i.path}if(i.expires){var h=i.expires;if("[object Date]"!==r.call(h)&&!(h instanceof Date)||isNaN(h.valueOf()))throw TypeError("option expires is invalid");d+="; Expires="+h.toUTCString()}if(i.httpOnly&&(d+="; HttpOnly"),i.secure&&(d+="; Secure"),i.partitioned&&(d+="; Partitioned"),i.priority)switch("string"==typeof i.priority?i.priority.toLowerCase():i.priority){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return d};var r=Object.prototype.toString,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function t(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function l(e){return encodeURIComponent(e)}},7907:function(e,a,r){"use strict";var s=r(5313);r.o(s,"usePathname")&&r.d(a,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(a,{useRouter:function(){return s.useRouter}})},648:function(e,a,r){"use strict";r.d(a,{E:function(){return s}});let s="https://zaha-script.net"},3575:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return n}});var s=r(7437),t=r(5206),l=r(4870),i=r(7907),o=r(2265);function n(){let[e,a]=(0,o.useState)("fixed"),r=(0,i.useRouter)(),n=!1;return(0,l.getCookie)("userData")&&(n=JSON.parse((0,l.getCookie)("userData"))),(0,o.useEffect)(()=>{n||r.replace("/user/login"),n&&(0===n.isAdmin&&r.replace("/"),1===n.isAdmin&&a("hidden"))},[n]),(0,s.jsx)("div",{className:"w-full h-full bg-gray-900 ".concat(e," top-0 right-0 z-50"),children:(0,s.jsx)(t.Z,{})})}},4320:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return u}});var s=r(7437),t=r(2265),l=r(3575),i=r(4870),o=r(7907),n=r(7908),d=r(648),c=r(8205),h=r(5206),g=r(6123);function u(e){let{params:a}=e,[r,u]=(0,t.useState)(!1),[x,m]=(0,t.useState)(null),f=(0,o.useRouter)(),[v,p]=(0,t.useState)({name:"",user_id:"",job:"",skills:"",numProject:"",address:"",phoneNumber:"",qualification:"",photo:"",imgIDCard:"",dateOfJoin:"",salary:""}),b=!1;async function j(e){console.log(v),e.preventDefault(),u(!0),(0,n.Z)({method:"post",url:"".concat(d.E,"/api/admin/update/team/").concat(a.id),headers:{Authorization:"Bearer ".concat(b.token)},data:v}).then(e=>(console.log(e),u(!1),f.replace("/dashboard/team/".concat(a.id)),g.toast.success("تم التعديل بنحاج"))).catch(e=>(console.log(e),u(!1),g.toast.error("حدث خطأ ما")))}return(0,i.getCookie)("userData")&&(b=JSON.parse((0,i.getCookie)("userData"))),(0,t.useEffect)(()=>{(0,n.Z)({method:"get",url:"".concat(d.E,"/api/admin/edit/team/").concat(a.id),headers:{Authorization:"Bearer ".concat(b.token)}}).then(e=>{m(e.data.data),p({name:e.data.data.name,user_id:e.data.data.user.id,phoneNumber:e.data.data.phoneNumber,job:e.data.data.job,skills:e.data.data.skills,numProject:e.data.data.numProject,salary:e.data.data.salary,dateOfJoin:e.data.data.dateOfJoin,address:e.data.data.address,qualification:e.data.data.qualification})}).catch(e=>{console.log(e)})},[]),(0,s.jsxs)("div",{className:"bg-gray-700 min-h-[600px] rounded-md py-6 sm:px-20 px-6 flex flex-col items-center gap-6",children:[(0,s.jsx)(l.default,{}),function(){if(r)return(0,s.jsx)(h.Z,{})}(),(0,s.jsx)("p",{className:"font-bold text-xl",children:"اضافه عضو جديد "}),x?x?(0,s.jsxs)("form",{onSubmit:e=>{j(e)},children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-x-6 gap-y-2 relative",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"الصوره الشخصيه"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:[(0,s.jsx)("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"}),(0,s.jsx)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"})]})}),(0,s.jsx)("input",{onChange:e=>{p({...v,photo:e.target.value})},type:"file",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"اسم الموظف"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"  bi bi-person-fill",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"})})}),(0,s.jsx)("input",{value:v.name||"",onChange:e=>{p({...v,name:e.target.value})},type:"text",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"id الموظف"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-app-indicator",viewBox:"0 0 16 16",children:[(0,s.jsx)("path",{d:"M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"}),(0,s.jsx)("path",{d:"M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"})]})}),(0,s.jsx)("input",{value:v.user_id||"",onChange:e=>{p({...v,user_id:e.target.value})},type:"number",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"رقم الهاتف"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-telephone-fill",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"})})}),(0,s.jsx)("input",{value:v.phoneNumber||"",onChange:e=>{p({...v,phoneNumber:e.target.value})},type:"number",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"الوظيفه"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-briefcase-fill",viewBox:"0 0 16 16",children:[(0,s.jsx)("path",{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"}),(0,s.jsx)("path",{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"})]})}),(0,s.jsx)("input",{value:v.job||"",onChange:e=>{p({...v,job:e.target.value})},type:"text",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"المهارات"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-clipboard2-data-fill",viewBox:"0 0 16 16",children:[(0,s.jsx)("path",{d:"M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"}),(0,s.jsx)("path",{d:"M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"})]})}),(0,s.jsx)("input",{value:v.skills||"",onChange:e=>{p({...v,skills:e.target.value})},type:"text",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"عدد المشاريع المنفذه"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:" bi bi-award-fill",viewBox:"0 0 16 16",children:[(0,s.jsx)("path",{d:"m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"}),(0,s.jsx)("path",{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"})]})}),(0,s.jsx)("input",{value:v.numProject||"",onChange:e=>{p({...v,numProject:e.target.value})},type:"number",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"المرتب"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-cash-coin",viewBox:"0 0 16 16",children:[(0,s.jsx)("path",{fillRule:"evenodd",d:"M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"}),(0,s.jsx)("path",{d:"M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"}),(0,s.jsx)("path",{d:"M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"}),(0,s.jsx)("path",{d:"M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"})]})}),(0,s.jsx)("input",{value:v.salary||"",onChange:e=>{p({...v,salary:e.target.value})},type:"number",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"تاريخ الانضمام"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-calendar-event-fill",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"})})}),(0,s.jsx)("input",{value:v.dateOfJoin||"",onChange:e=>{p({...v,dateOfJoin:e.target.value})},type:"date",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"العنوان"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-building-fill",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"})})}),(0,s.jsx)("input",{value:v.address||"",onChange:e=>{p({...v,address:e.target.value})},type:"text",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"المؤهل"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-mortarboard-fill",viewBox:"0 0 16 16",children:[(0,s.jsx)("path",{d:"M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"}),(0,s.jsx)("path",{d:"M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"})]})}),(0,s.jsx)("input",{value:v.qualification||"",onChange:e=>{p({...v,qualification:e.target.value})},type:"text",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{className:"text-lg",children:"صوره البطاقه الشخصيه"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsx)("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-vcard-fill",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"})})}),(0,s.jsx)("input",{onChange:e=>{p({...v,imgIDCard:e.target.value})},type:"file",className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]})]}),(0,s.jsx)("div",{className:"w-full flex justify-center mt-6",children:(0,s.jsxs)("button",{className:"flex gap-3 items-center bg-gray-600 rounded-md py-2 px-6 hover:bg-blue-500",type:"submit",children:[(0,s.jsx)("p",{children:"تعديل"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-plus",viewBox:"0 0 16 16",children:(0,s.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})})]})})]}):void 0:(0,s.jsx)("div",{className:"bg-gray-700 flex items-center justify-center h-[500px] rounded-md",children:(0,s.jsx)(c.Z,{})})]})}},5206:function(e,a,r){"use strict";r.d(a,{Z:function(){return t}});var s=r(7437);function t(){return(0,s.jsxs)("div",{className:" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6",children:[(0,s.jsxs)("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[(0,s.jsx)("div",{className:"wheel"}),(0,s.jsx)("div",{className:"hamster",children:(0,s.jsxs)("div",{className:"hamster__body",children:[(0,s.jsxs)("div",{className:"hamster__head",children:[(0,s.jsx)("div",{className:"hamster__ear"}),(0,s.jsx)("div",{className:"hamster__eye"}),(0,s.jsx)("div",{className:"hamster__nose"})]}),(0,s.jsx)("div",{className:"hamster__limb hamster__limb--fr"}),(0,s.jsx)("div",{className:"hamster__limb hamster__limb--fl"}),(0,s.jsx)("div",{className:"hamster__limb hamster__limb--br"}),(0,s.jsx)("div",{className:"hamster__limb hamster__limb--bl"}),(0,s.jsx)("div",{className:"hamster__tail"})]})}),(0,s.jsx)("div",{className:"spoke"})]}),(0,s.jsx)("h3",{className:"text-lg text-gray-200",children:"جارى التحميل..."})]})}r(3112)},8205:function(e,a,r){"use strict";r.d(a,{Z:function(){return t}});var s=r(7437);function t(){return(0,s.jsx)("div",{children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"200px",width:"200px",viewBox:"0 0 200 200",className:"pencil",children:[(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"pencil-eraser",children:(0,s.jsx)("rect",{height:"30",width:"30",ry:"5",rx:"5"})})}),(0,s.jsx)("circle",{transform:"rotate(-113,100,100)",strokeLinecap:"round",strokeDashoffset:"439.82",strokeDasharray:"439.82 439.82",strokeWidth:"2",stroke:"currentColor",fill:"none",r:"70",className:"pencil__stroke"}),(0,s.jsxs)("g",{transform:"translate(100,100)",className:"pencil__rotate",children:[(0,s.jsxs)("g",{fill:"none",children:[(0,s.jsx)("circle",{transform:"rotate(-90)",strokeDashoffset:"402",strokeDasharray:"402.12 402.12",strokeWidth:"30",stroke:"hsl(223,90%,50%)",r:"64",className:"pencil__body1"}),(0,s.jsx)("circle",{transform:"rotate(-90)",strokeDashoffset:"465",strokeDasharray:"464.96 464.96",strokeWidth:"10",stroke:"hsl(223,90%,60%)",r:"74",className:"pencil__body2"}),(0,s.jsx)("circle",{transform:"rotate(-90)",strokeDashoffset:"339",strokeDasharray:"339.29 339.29",strokeWidth:"10",stroke:"hsl(223,90%,40%)",r:"54",className:"pencil__body3"})]}),(0,s.jsx)("g",{transform:"rotate(-90) translate(49,0)",className:"pencil__eraser",children:(0,s.jsxs)("g",{className:"pencil__eraser-skew",children:[(0,s.jsx)("rect",{height:"30",width:"30",ry:"5",rx:"5",fill:"hsl(223,90%,70%)"}),(0,s.jsx)("rect",{clipPath:"url(#pencil-eraser)",height:"30",width:"5",fill:"hsl(223,90%,60%)"}),(0,s.jsx)("rect",{height:"20",width:"30",fill:"hsl(223,10%,90%)"}),(0,s.jsx)("rect",{height:"20",width:"15",fill:"hsl(223,10%,70%)"}),(0,s.jsx)("rect",{height:"20",width:"5",fill:"hsl(223,10%,80%)"}),(0,s.jsx)("rect",{height:"2",width:"30",y:"6",fill:"hsla(223,10%,10%,0.2)"}),(0,s.jsx)("rect",{height:"2",width:"30",y:"13",fill:"hsla(223,10%,10%,0.2)"})]})}),(0,s.jsxs)("g",{transform:"rotate(-90) translate(49,-30)",className:"pencil__point",children:[(0,s.jsx)("polygon",{points:"15 0,30 30,0 30",fill:"hsl(33,90%,70%)"}),(0,s.jsx)("polygon",{points:"15 0,6 30,0 30",fill:"hsl(33,90%,50%)"}),(0,s.jsx)("polygon",{points:"15 0,20 10,10 10",fill:"hsl(223,10%,10%)"})]})]})]})})}r(641)},3112:function(){},641:function(){}},function(e){e.O(0,[7908,6123,2971,8069,1744],function(){return e(e.s=2826)}),_N_E=e.O()}]);