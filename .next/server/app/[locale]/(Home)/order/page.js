(()=>{var e={};e.id=461,e.ids=[461],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},21336:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>d});var s=t(50482),i=t(69108),a=t(62563),o=t.n(a),n=t(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let d=["",{children:["[locale]",{children:["(Home)",{children:["order",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,42233)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\[locale]\\(Home)\\order\\page.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,9922)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\[locale]\\(Home)\\order\\layout.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,71568)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\[locale]\\(Home)\\layout.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,70647)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\[locale]\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,58918)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(t.bind(t,34791)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(t.bind(t,50552)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,93243)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\[locale]\\(Home)\\order\\page.js"],m="/[locale]/(Home)/order/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/[locale]/(Home)/order/page",pathname:"/[locale]/order",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},75637:(e,r,t)=>{Promise.resolve().then(t.bind(t,53283)),Promise.resolve().then(t.bind(t,50155))},50155:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var s=t(95344),i=t(70370),a=t(48890),o=t(53608),n=t(1356),l=t(8428),d=t(3729),c=t(69697),m=t(83065);function p(){let[e,r]=(0,d.useState)(!1),[t,p]=(0,d.useState)(""),[x,u]=(0,d.useState)(""),g=(0,l.useRouter)(),h=(0,l.usePathname)(),f=(0,m.Z)("Index",h.slice(1,3)),j=!1;return(0,n.getCookie)("userData")&&(j=JSON.parse((0,n.getCookie)("userData"))),s.jsx("div",{children:(0,s.jsxs)("div",{children:[function(){if(e)return s.jsx(a.Z,{})}(),(0,s.jsxs)("form",{onSubmit:e=>{!function(e){if(e.preventDefault(),r(!0),!j)return localStorage.setItem("prevUrl",`${h.slice(0,3)}/order`),g.replace(`${h.slice(0,3)}/user/login`),c.toast.warn(f.order.form.mess.label1);j&&(0,o.Z)({method:"post",url:`${i.E}/api/auth/create/order`,headers:{Authorization:`bearer ${j.token}`},data:{phoneNumber:t,nameProject:x,user_id:j.id,price:0,url:"#",condition:"Pending"}}).then(e=>(r(!1),g.replace(`${h.slice(0,3)}/user`),c.toast.success(f.order.form.mess.label2))).catch(e=>(r(!1),c.toast.error(f.order.form.mess.label3)))}(e)},children:[s.jsx("input",{type:"text",minLength:4,placeholder:f.order.form.label1,required:!0,className:"rounded-md",onChange:e=>{u(e.target.value)}}),s.jsx("span",{}),s.jsx("input",{type:"number",minLength:8,placeholder:f.order.form.label2,required:!0,className:"rounded-md",onChange:e=>{p(e.target.value)}}),s.jsx("input",{type:"submit",value:f.order.form.label3,id:"butSub"})]})]})})}},48890:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var s=t(95344);function i(){return(0,s.jsxs)("div",{className:" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6",children:[(0,s.jsxs)("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[s.jsx("div",{className:"wheel"}),s.jsx("div",{className:"hamster",children:(0,s.jsxs)("div",{className:"hamster__body",children:[(0,s.jsxs)("div",{className:"hamster__head",children:[s.jsx("div",{className:"hamster__ear"}),s.jsx("div",{className:"hamster__eye"}),s.jsx("div",{className:"hamster__nose"})]}),s.jsx("div",{className:"hamster__limb hamster__limb--fr"}),s.jsx("div",{className:"hamster__limb hamster__limb--fl"}),s.jsx("div",{className:"hamster__limb hamster__limb--br"}),s.jsx("div",{className:"hamster__limb hamster__limb--bl"}),s.jsx("div",{className:"hamster__tail"})]})}),s.jsx("div",{className:"spoke"})]}),s.jsx("h3",{className:"text-lg text-gray-200",children:"Loading..."})]})}t(53722)},9922:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,metadata:()=>i});var s=t(25036);let i={title:"ZaHa Script - order",description:"The best company for creating websites"};function a({children:e}){return s.jsx("div",{children:e})}},42233:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(25036),i=t(49265);let a=(0,t(86843).createProxy)(String.raw`D:\Programming\programming projects\important ptojects\zaha\frontend\src\app\[locale]\(Home)\order\form.js`),{__esModule:o,$$typeof:n}=a,l=a.default;t(77370);var d=t(78532);function c(){let e=(0,d.Z)("Index");return(0,s.jsxs)("div",{id:"order",children:[(0,s.jsxs)("div",{id:"textOrder",children:[s.jsx("h3",{children:e("order.main.1")}),s.jsx("p",{children:e("order.main.2")}),s.jsx("div",{children:(0,s.jsxs)("div",{className:"sm:flex sm:justify-center sm:items-center text-center sm:text-start my-10",children:[s.jsx("div",{className:"flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5",children:(0,s.jsxs)("div",{className:"flex justify-center -space-x-3",children:[s.jsx("img",{loading:"lazy",className:"inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800",src:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",alt:"Image Description"}),s.jsx("img",{loading:"lazy",className:"inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800",src:"https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",alt:"Image Description"}),s.jsx("img",{loading:"lazy",className:"inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800",src:"https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",alt:"Image Description"}),s.jsx("img",{loading:"lazy",className:"inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800",src:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",alt:"Image Description"}),s.jsx("span",{className:"inline-flex items-center justify-center size-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-gray-900 dark:ring-gray-800",children:s.jsx("span",{className:"text-xs font-medium leading-none text-white uppercase",children:"7k+"})})]})}),s.jsx("div",{className:"border-t sm:border-t-0 sm:border-s border-gray-50 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0"}),(0,s.jsxs)("div",{className:"pt-5 sm:pt-0 sm:ps-5",children:[s.jsx("div",{className:"text-lg font-semibold text-gray-100 dark:text-gray-200",children:e("order.main.3")}),s.jsx("div",{className:"text-sm text-gray-400",children:e("order.main.4")})]})]})}),s.jsx(l,{}),s.jsx(i.Z,{})]}),(0,s.jsxs)("div",{className:"max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mt-20 mx-auto",children:[s.jsx("div",{className:"max-w-2xl mx-auto mb-10 lg:mb-14",children:s.jsx("h3",{style:{fontSize:"30px"},children:e("order.conditions.main")})}),s.jsx("div",{className:"max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-50",children:[{titel:e("order.conditions.1.titel"),dis:e("order.conditions.1.dis")},{titel:e("order.conditions.2.titel"),dis:e("order.conditions.2.dis")},{titel:e("order.conditions.3.titel"),dis:e("order.conditions.3.dis")},{titel:e("order.conditions.4.titel"),dis:e("order.conditions.4.dis")},{titel:e("order.conditions.5.titel"),dis:e("order.conditions.5.dis")},{titel:e("order.conditions.6.titel"),dis:e("order.conditions.6.dis")},{titel:e("order.conditions.7.titel"),dis:e("order.conditions.7.dis")},{titel:e("order.conditions.8.titel"),dis:e("order.conditions.8.dis")}].map((e,r)=>s.jsx("div",{className:"py-8 first:pt-0 last:pb-0",children:(0,s.jsxs)("div",{className:"flex gap-x-5",children:[(0,s.jsxs)("svg",{className:"flex-shrink-0 mt-1 size-6 text-gray-200",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),s.jsx("path",{d:"M12 17h.01"})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"md:text-lg font-semibold text-gray-200 dark:text-gray-200",children:e.titel}),s.jsx("p",{className:"mt-1 text-gray-400",children:e.dis})]})]})},r))})]})]})}},77370:()=>{},53722:()=>{}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,796,706,867,789,693,243],()=>t(21336));module.exports=s})();