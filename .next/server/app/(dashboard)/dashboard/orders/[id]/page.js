(()=>{var e={};e.id=349,e.ids=[349],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},87465:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>o});var t=a(50482),s=a(69108),l=a(62563),i=a.n(l),n=a(68300),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);a.d(r,d);let o=["",{children:["(dashboard)",{children:["dashboard",{children:["orders",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,30848)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\orders\\[id]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,99533)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\layout.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,58918)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(a.bind(a,34791)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(a.bind(a,50552)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(a.bind(a,93243)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\orders\\[id]\\page.js"],p="/(dashboard)/dashboard/orders/[id]/page",h={require:a,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(dashboard)/dashboard/orders/[id]/page",pathname:"/dashboard/orders/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},92836:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,31900,23)),Promise.resolve().then(a.bind(a,71486)),Promise.resolve().then(a.bind(a,74184)),Promise.resolve().then(a.bind(a,64827)),Promise.resolve().then(a.bind(a,98564)),Promise.resolve().then(a.bind(a,49133))},89208:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,25491,23)),Promise.resolve().then(a.bind(a,69697)),Promise.resolve().then(a.bind(a,95843))},70976:(e,r,a)=>{Promise.resolve().then(a.bind(a,16725))},84652:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>d});var t=a(95344),s=a(48890),l=a(1356),i=a(8428),n=a(3729);function d(){let[e,r]=(0,n.useState)("fixed"),a=(0,i.useRouter)(),d=!1;return(0,l.getCookie)("userData")&&(d=JSON.parse((0,l.getCookie)("userData"))),(0,n.useEffect)(()=>{d||(localStorage.setItem("prevUrl","/dashboard"),a.replace("/ar/user/login")),d&&(0===d.isAdmin&&a.replace("/"),1===d.isAdmin&&r("hidden"))},[d]),t.jsx("div",{className:`w-full h-full bg-gray-900 ${e} top-0 right-0 z-50`,children:t.jsx(s.Z,{})})}},16725:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>x});var t=a(95344),s=a(70370),l=a(53608),i=a(1356),n=a(3729),d=a(84652),o=a(88842),c=a(69697),p=a(48890),h=a(8428);function x({params:e}){let[r,a]=(0,n.useState)(null),[x,m]=(0,n.useState)(!1),[g,u]=(0,n.useState)(""),[j,v]=(0,n.useState)(!1),b=(0,h.useRouter)(),[f,y]=(0,n.useState)(""),[w,N]=(0,n.useState)(""),[P,_]=(0,n.useState)(""),[C,k]=(0,n.useState)(""),[z,A]=(0,n.useState)(""),[q,D]=(0,n.useState)(""),[M,L]=(0,n.useState)(""),[S,B]=(0,n.useState)(""),$=!1;(0,i.getCookie)("userData")&&($=JSON.parse((0,i.getCookie)("userData"))),(0,n.useEffect)(()=>{(0,l.Z)({url:`${s.E}/api/admin/showAll/order`,method:"get",headers:{Authorization:`Bearer ${$.token}`}}).then(e=>{a(e.data.data)})},[]);let E=r?.filter(r=>r.id==e.id);return(0,t.jsxs)("div",{children:[t.jsx(d.default,{}),r?0===r.length?(0,t.jsxs)("div",{className:"flex items-center justify-center flex-col gap-4 w-full h-[500px] bg-gray-700 rounded-md",children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"bi bi-file-earmark-excel",viewBox:"0 0 16 16",children:[t.jsx("path",{d:"M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"}),t.jsx("path",{d:"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"})]}),t.jsx("p",{children:"لا يوجد طلبات حتى الان"})]}):r?(0,t.jsxs)("div",{children:[t.jsx("div",{className:"p-6 bg-gray-700 rounded-md mb-6",children:(0,t.jsxs)("div",{className:"flex flex-col items-center font-bold text-lg gap-1",children:[t.jsx("div",{className:"bg-orange-500 h-[60px] w-[60px] rounded-full mb-3 font-bold text-4xl text-gray-200 text-center pt-2",children:E[0]?.name[0]}),(0,t.jsxs)("p",{children:["id : ",E[0]?.id]}),(0,t.jsxs)("p",{children:["الاسم  : ",E[0]?.name]}),(0,t.jsxs)("p",{children:["البريد الالكتروني : ",E[0]?.email]})]})}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6",children:E[0].orders?.map(e=>{var r;return t.jsxs("div",{className:"p-4 bg-gray-700 rounded-md flex flex-col gap-1",children:[t.jsxs("div",{className:"flex justify-between items-center py-1 px-3 mb-4 ",children:["Pending"===(r=e.condition)?(0,t.jsxs)("span",{className:"py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-500 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-clock-fill text-gray-50",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"})}),"طلب جديد"]}):"Approved"===r?(0,t.jsxs)("span",{className:"py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-cart-check-fill text-gray-50",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"})}),"تم الموافقه"]}):"In Progress"===r?(0,t.jsxs)("span",{className:"py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-hourglass-split text-gray-50",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"})}),"قيد التنفيذ"]}):"Completed"===r?(0,t.jsxs)("span",{className:"py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-check-circle-fill text-gray-50",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})}),"أكتمل"]}):"Cancelled"===r?(0,t.jsxs)("span",{className:"py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500",children:[t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",className:"bi bi-x-circle-fill text-gray-50",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"})}),"تم الالغاء"]}):void 0,t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:()=>{m(!0),u(e),g&&(y(g.nameProject),N(g.phoneNumber),_(g.price),k(g.condition),A(g.description),D(g.startingDate),L(g.endingDate),B(g.urlProject))},className:"bg-gray-600 h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-blue-300 ",children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-square hover:text-blue-900",viewBox:"0 0 16 16",children:[t.jsx("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),t.jsx("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})]})}),t.jsx("button",{onClick:()=>{var r;r=e.id,v(!0),(0,l.Z)({method:"delete",url:`${s.E}/api/admin/softDelete/order/${r}`,headers:{Authorization:`Bearer ${$.token}`}}).then(()=>(v(!1),b.replace("/dashboard/orders"),c.toast.success("تم حذف الطلب بنجاح"))).catch(e=>(v(!1),console.log(e),c.toast.error("حدث خطأ ما"))),u(e)},className:"bg-gray-600 h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-red-300 hover:text-gray-900",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash3-fill hover:text-red-900",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"})})})]})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-2 py-1 px-3 ",children:[t.jsxs("p",{children:["اسم المشروع : ",e.nameProject]}),t.jsxs("p",{children:[" الهاتف: ",e.phoneNumber]}),t.jsxs("p",{children:["السعر : ",e.price]}),t.jsxs("p",{children:["الحاله : ",e.condition]})]}),t.jsx("p",{className:"py-1 px-3 w-full h-[100px] overflow-auto bg-gray-600",children:e.description}),t.jsxs("div",{className:"flex justify-between py-1 px-3",children:[t.jsxs("p",{children:[" البدء : ",e.endingDate]}),t.jsxs("p",{children:[" الانتهاء : ",e.startingDate]})]}),t.jsx("a",{href:e.urlProject,target:"_blank",children:t.jsx("p",{className:"py-1 px-3 text-blue-500 bg-gray-600 rounded-sm text-center",children:e.urlProject})})]},e.id)})})]}):void 0:t.jsx("div",{className:"flex items-center justify-center w-full h-[500px] bg-gray-700 rounded-md",children:t.jsx(o.Z,{})}),function(){if(x&&g)return(0,t.jsxs)("div",{className:"fixed top-0 flex right-0 w-full h-screen z-[200] items-center justify-center",children:[t.jsx("div",{className:"bg-gray-900/70 w-full h-full",onClick:()=>{m(!1),y(""),N(""),_(""),k(""),A(""),D(""),L(""),B("")}}),t.jsx("div",{className:"bg-gray-600 rounded-lg p-4 absolute z-10 w-[430px] h-auto",children:(0,t.jsxs)("form",{onSubmit:r=>{r.preventDefault(),v(!0),(0,l.Z)({method:"post",url:`${s.E}/api/admin/update/order/${g.id}`,headers:{Authorization:`Bearer ${$.token}`},data:{phoneNumber:w,nameProject:f,price:P,condition:C,description:z,user_id:e.id,urlProject:S,startingDate:q,endingDate:M}}).then(()=>(v(!1),location.reload(),c.toast.success("تم التعديل بنجاح"))).catch(()=>(v(!1),c.toast.error("حدث خطأ ما")))},className:"flex flex-col gap-2",children:[t.jsx("input",{required:!0,value:f,type:"text",placeholder:"اسم المشروع",onChange:e=>{y(e.target.value)},className:"text-gray-200 px-3 py-1 bg-gray-700 rounded-md w-full"}),t.jsx("input",{required:!0,value:w,type:"number",placeholder:"الهاتف",onChange:e=>{N(e.target.value)},className:"text-gray-200 px-3 py-1 bg-gray-700 rounded-md w-full"}),t.jsx("input",{required:!0,value:P,type:"number",placeholder:"السعر",onChange:e=>{_(e.target.value)},className:"text-gray-200 px-3 py-1 bg-gray-700 rounded-md w-full"}),(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-1 my-3",children:[(0,t.jsxs)("div",{children:[t.jsx("label",{htmlFor:"pen",children:"جارى المعالجه"}),t.jsx("input",{id:"pen",type:"radio",value:"Pending",name:"x",onChange:()=>{k("Pending")}})]}),(0,t.jsxs)("div",{children:[t.jsx("label",{htmlFor:"app",children:"تم الموافقه"}),t.jsx("input",{id:"app",type:"radio",value:"Approved",name:"x",onChange:()=>{k("Approved")}})]}),(0,t.jsxs)("div",{children:[t.jsx("label",{htmlFor:"inP",children:"تحت التنفيذ"}),t.jsx("input",{id:"inP",type:"radio",value:"In Progress",name:"x",onChange:()=>{k("In Progress")}})]}),(0,t.jsxs)("div",{children:[t.jsx("label",{htmlFor:"com",children:"اكتمل"}),t.jsx("input",{id:"com",type:"radio",value:"Completed",name:"x",onChange:()=>{k("Completed")}})]}),(0,t.jsxs)("div",{children:[t.jsx("label",{htmlFor:"can",children:"تم الالغاء"}),t.jsx("input",{id:"can",type:"radio",value:"Cancelled",name:"x",onChange:()=>{k("Cancelled")}})]})]}),t.jsx("textarea",{placeholder:"الوصف",value:z||"",onChange:e=>{A(e.target.value)},className:"text-gray-200 bg-gray-700 px-3 py-1 rounded-md min-h-[100px]"}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsxs)("div",{className:"flex justify-between gap-3",children:[t.jsx("label",{children:"تاريخ البداء"}),t.jsx("input",{type:"date",value:q||"",onChange:e=>{D(e.target.value)},className:"text-gray-200 bg-gray-700 px-3 py-1 rounded-md"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-3",children:[t.jsx("label",{children:"تاريخ الانتهاء"}),t.jsx("input",{type:"date",value:M||"",onChange:e=>{L(e.target.value)},className:"text-gray-200 bg-gray-700 px-3 py-1 rounded-md"})]})]}),t.jsx("input",{placeholder:"Url",value:S||"",type:"url",onChange:e=>{B(e.target.value)},className:"text-gray-200 bg-gray-700 px-3 py-1 rounded-md"}),t.jsx("input",{type:"submit",value:"تعديل",className:"text-gray-200 bg-gray-800 hover:bg-gray-900 px-3 py-1 rounded-md"})]})})]})}(),function(){if(j)return t.jsx(p.Z,{})}()]})}},48890:(e,r,a)=>{"use strict";a.d(r,{Z:()=>s});var t=a(95344);function s(){return(0,t.jsxs)("div",{className:" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6",children:[(0,t.jsxs)("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[t.jsx("div",{className:"wheel"}),t.jsx("div",{className:"hamster",children:(0,t.jsxs)("div",{className:"hamster__body",children:[(0,t.jsxs)("div",{className:"hamster__head",children:[t.jsx("div",{className:"hamster__ear"}),t.jsx("div",{className:"hamster__eye"}),t.jsx("div",{className:"hamster__nose"})]}),t.jsx("div",{className:"hamster__limb hamster__limb--fr"}),t.jsx("div",{className:"hamster__limb hamster__limb--fl"}),t.jsx("div",{className:"hamster__limb hamster__limb--br"}),t.jsx("div",{className:"hamster__limb hamster__limb--bl"}),t.jsx("div",{className:"hamster__tail"})]})}),t.jsx("div",{className:"spoke"})]}),t.jsx("h3",{className:"text-lg text-gray-200",children:"Loading..."})]})}a(53722)},30848:(e,r,a)=>{"use strict";a.r(r),a.d(r,{$$typeof:()=>l,__esModule:()=>s,default:()=>i});let t=(0,a(86843).createProxy)(String.raw`D:\Programming\programming projects\important ptojects\zaha\frontend\src\app\(dashboard)\dashboard\orders\[id]\page.js`),{__esModule:s,$$typeof:l}=t,i=t.default},53722:()=>{}};var r=require("../../../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),t=r.X(0,[638,796,706,693,952],()=>a(87465));module.exports=t})();