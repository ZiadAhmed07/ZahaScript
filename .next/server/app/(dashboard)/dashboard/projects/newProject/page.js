(()=>{var e={};e.id=453,e.ids=[453],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},68582:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>i.a,__next_app__:()=>g,originalPathname:()=>h,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=a(50482),t=a(69108),l=a(62563),i=a.n(l),o=a(68300),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);a.d(r,n);let d=["",{children:["(dashboard)",{children:["dashboard",{children:["projects",{children:["newProject",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,27179)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\projects\\newProject\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,99533)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\layout.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,58918)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(a.bind(a,34791)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(a.bind(a,50552)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(a.bind(a,93243)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\projects\\newProject\\page.js"],h="/(dashboard)/dashboard/projects/newProject/page",g={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/(dashboard)/dashboard/projects/newProject/page",pathname:"/dashboard/projects/newProject",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92836:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,31900,23)),Promise.resolve().then(a.bind(a,71486)),Promise.resolve().then(a.bind(a,74184)),Promise.resolve().then(a.bind(a,64827)),Promise.resolve().then(a.bind(a,98564)),Promise.resolve().then(a.bind(a,49133))},89208:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,25491,23)),Promise.resolve().then(a.bind(a,69697)),Promise.resolve().then(a.bind(a,95843))},72962:(e,r,a)=>{Promise.resolve().then(a.bind(a,47001))},84652:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>n});var s=a(95344),t=a(48890),l=a(1356),i=a(8428),o=a(3729);function n(){let[e,r]=(0,o.useState)("fixed"),a=(0,i.useRouter)(),n=!1;return(0,l.getCookie)("userData")&&(n=JSON.parse((0,l.getCookie)("userData"))),(0,o.useEffect)(()=>{n||(localStorage.setItem("prevUrl","/dashboard"),a.replace("/ar/user/login")),n&&(0===n.isAdmin&&a.replace("/"),1===n.isAdmin&&r("hidden"))},[n]),s.jsx("div",{className:`w-full h-full bg-gray-900 ${e} top-0 right-0 z-50`,children:s.jsx(t.Z,{})})}},47001:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>g});var s=a(95344),t=a(70370),l=a(48890),i=a(53608),o=a(1356),n=a(8428),d=a(3729),c=a(69697),h=a(84652);function g(){let[e,r]=(0,d.useState)(!1),a=(0,n.useRouter)(),[g,m]=(0,d.useState)({nameProject:"",skills:"",numberOfSales:"",price:"",startingDate:"",endingDate:"",team:"",imgProject:[],urlProject:"",user_id:"",description:"",saleType:"multi selling"}),p=!1;return(0,o.getCookie)("userData")&&(p=JSON.parse((0,o.getCookie)("userData"))),(0,s.jsxs)("div",{className:"bg-gray-700 rounded-md p-6 flex flex-col gap-6",children:[function(){if(e)return s.jsx(l.Z,{})}(),s.jsx(h.default,{}),s.jsx("div",{className:"flex justify-center ",children:s.jsx("p",{className:"font-bold text-xl",children:"اضافه مشروع جديد "})}),s.jsx("div",{children:(0,s.jsxs)("form",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",onSubmit:function(e){e.preventDefault(),r(!0);let s=new FormData;s.append("nameProject",g.nameProject),s.append("skills",g.skills),s.append("numberOfSales",g.numberOfSales),s.append("price",g.price),s.append("startingDate",g.startingDate),s.append("endingDate",g.endingDate),s.append("urlProject",g.urlProject),s.append("user_id",g.user_id),s.append("description",g.description),s.append("saleType",g.saleType),Array.from(g.imgProject).forEach(e=>{s.append("imgProject[]",e)}),(0,i.Z)({method:"post",url:`${t.E}/api/admin/create/project`,headers:{Authorization:`Bearer ${p.token}`,"Content-Type":"multipart/form-data"},data:s}).then(e=>(console.log(e),r(!1),a.replace("/dashboard/projects"),c.toast.success("تم اضافه مشروع جديد"))).catch(e=>(console.log(e),r(!1),c.toast.error("حدث خطأ ما ")))},children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"اسم المشروع"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,type:"text",onChange:e=>{m({...g,nameProject:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"المهارات"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,type:"text",onChange:e=>{m({...g,skills:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"تاريخ البدء"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,type:"date",onChange:e=>{m({...g,startingDate:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"تاريخ الانتهاء"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,type:"date",onChange:e=>{m({...g,endingDate:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"عدد المبيعات"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,type:"number",onChange:e=>{m({...g,numberOfSales:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"السعر"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,type:"number",onChange:e=>{m({...g,price:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"صور المشروع"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,accept:"image/*",multiple:!0,type:"file",onChange:e=>{m({...g,imgProject:e.target.files})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"رابط المشروع"}),(0,s.jsxs)("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[s.jsx("div",{className:"bg-gray-900 border-l border-gray-600 border-solid p-2",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-person-bounding-box",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"})})}),s.jsx("input",{required:!0,type:"url",onChange:e=>{m({...g,urlProject:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 px-2"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[s.jsx("label",{className:"text-lg",children:"نوع البيع"}),(0,s.jsxs)("div",{className:"w-full h-10 justify-center flex gap-10 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"MultiSelling",children:"متعدد"}),s.jsx("input",{id:"MultiSelling",type:"radio",name:"x",value:"multi selling",onChange:e=>{m({...g,saleType:e.target.value})}})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"singleSelling",children:"منفرد"}),s.jsx("input",{type:"radio",id:"SingleSelling",name:"x",value:"single selling",onChange:e=>{m({...g,saleType:e.target.value})}})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 md:col-start-1 md:col-end-3",children:[s.jsx("label",{className:"text-lg",children:"الوصف"}),s.jsx("div",{className:"w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800",children:s.jsx("textarea",{required:!0,onChange:e=>{m({...g,description:e.target.value})},className:"bg-gray-800 border-none w-full outline-none text-gray-200 p-4 h-48"})})]}),s.jsx("div",{className:"w-full flex justify-center mt-6 md:col-start-1 md:col-end-3",children:(0,s.jsxs)("button",{className:"flex gap-3 items-center bg-gray-600 rounded-md py-2 px-6 hover:bg-blue-500",type:"submit",children:[s.jsx("p",{children:"اضافه"}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-plus",viewBox:"0 0 16 16",children:s.jsx("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})})]})})]})})]})}},48890:(e,r,a)=>{"use strict";a.d(r,{Z:()=>t});var s=a(95344);function t(){return(0,s.jsxs)("div",{className:" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6",children:[(0,s.jsxs)("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[s.jsx("div",{className:"wheel"}),s.jsx("div",{className:"hamster",children:(0,s.jsxs)("div",{className:"hamster__body",children:[(0,s.jsxs)("div",{className:"hamster__head",children:[s.jsx("div",{className:"hamster__ear"}),s.jsx("div",{className:"hamster__eye"}),s.jsx("div",{className:"hamster__nose"})]}),s.jsx("div",{className:"hamster__limb hamster__limb--fr"}),s.jsx("div",{className:"hamster__limb hamster__limb--fl"}),s.jsx("div",{className:"hamster__limb hamster__limb--br"}),s.jsx("div",{className:"hamster__limb hamster__limb--bl"}),s.jsx("div",{className:"hamster__tail"})]})}),s.jsx("div",{className:"spoke"})]}),s.jsx("h3",{className:"text-lg text-gray-200",children:"Loading..."})]})}a(53722)},27179:(e,r,a)=>{"use strict";a.r(r),a.d(r,{$$typeof:()=>l,__esModule:()=>t,default:()=>i});let s=(0,a(86843).createProxy)(String.raw`D:\Programming\programming projects\important ptojects\zaha\frontend\src\app\(dashboard)\dashboard\projects\newProject\page.js`),{__esModule:t,$$typeof:l}=s,i=s.default},53722:()=>{}};var r=require("../../../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),s=r.X(0,[638,796,706,693,952],()=>a(68582));module.exports=s})();