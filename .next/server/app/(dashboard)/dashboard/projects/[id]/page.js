(()=>{var e={};e.id=170,e.ids=[170],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},43189:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>A,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=r(50482),t=r(69108),i=r(62563),l=r.n(i),o=r(68300),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(s,n);let d=["",{children:["(dashboard)",{children:["dashboard",{children:["projects",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,36725)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\projects\\[id]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,99533)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\layout.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,58918)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(r.bind(r,34791)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(r.bind(r,50552)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,93243)),"D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Programming\\programming projects\\important ptojects\\zaha\\frontend\\src\\app\\(dashboard)\\dashboard\\projects\\[id]\\page.js"],A="/(dashboard)/dashboard/projects/[id]/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/(dashboard)/dashboard/projects/[id]/page",pathname:"/dashboard/projects/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92836:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,31900,23)),Promise.resolve().then(r.bind(r,71486)),Promise.resolve().then(r.bind(r,74184)),Promise.resolve().then(r.bind(r,64827)),Promise.resolve().then(r.bind(r,98564)),Promise.resolve().then(r.bind(r,49133))},89208:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,25491,23)),Promise.resolve().then(r.bind(r,69697)),Promise.resolve().then(r.bind(r,95843))},55270:(e,s,r)=>{Promise.resolve().then(r.bind(r,29787))},84652:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n});var a=r(95344),t=r(48890),i=r(1356),l=r(8428),o=r(3729);function n(){let[e,s]=(0,o.useState)("fixed"),r=(0,l.useRouter)(),n=!1;return(0,i.getCookie)("userData")&&(n=JSON.parse((0,i.getCookie)("userData"))),(0,o.useEffect)(()=>{n||(localStorage.setItem("prevUrl","/dashboard"),r.replace("/ar/user/login")),n&&(0===n.isAdmin&&r.replace("/"),1===n.isAdmin&&s("hidden"))},[n]),a.jsx("div",{className:`w-full h-full bg-gray-900 ${e} top-0 right-0 z-50`,children:a.jsx(t.Z,{})})}},29787:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>m});var a=r(95344),t=r(70370),i=r(48890),l=r(88842),o=r(53608),n=r(1356);r(89410);var d=r(56506),c=r(8428),A=r(3729),h=r(69697),p=r(84652);function m({params:e}){let[s,r]=(0,A.useState)(!1),[m,x]=(0,A.useState)(!1),u=(0,c.useRouter)(),[g,j]=(0,A.useState)(!1),[b,f]=(0,A.useState)(!1),[v,w]=(0,A.useState)([]),[N,y]=(0,A.useState)(""),[E,_]=(0,A.useState)(""),P=!1;function z(s){s.preventDefault(),x(!0);let r=v.split(","),a=r?.map(Number);(0,o.Z)({method:"post",url:`${t.E}/api/admin/addTeams/to/project`,data:{project_id:e.id,team_ids:a},headers:{Authorization:`Bearer ${P.token}`}}).then(()=>(x(!1),u.replace("/dashboard/projects"),h.toast.success("تم اضافه الفريق بنجاح"))).catch(e=>(console.log(e),x(!1),h.toast.error("حدث خطا ما ! حاول مجددا")))}function C(s){s.preventDefault(),x(!0),(0,o.Z)({method:"post",url:`${t.E}/api/admin/addUsers/to/project/${e.id}`,data:{user_id:E,price:N,numberOfSales:1},headers:{Authorization:`Bearer ${P.token}`}}).then(()=>(x(!1),u.replace("/dashboard/projects"),h.toast.success("تم اضافه المستخدم بنجاح بنجاح"))).catch(e=>(console.log(e),x(!1),h.toast.error("حدث خطا ما ! حاول مجددا")))}return(0,n.getCookie)("userData")&&(P=JSON.parse((0,n.getCookie)("userData"))),(0,A.useEffect)(()=>{(0,o.Z)({method:"get",url:`${t.E}/api/admin/show/project/${e.id}`,headers:{Authorization:`Bearer ${P.token}`}}).then(e=>{r(e.data.data)})},[]),(0,a.jsxs)("div",{children:[a.jsx(p.default,{}),function(){if(m)return a.jsx(i.Z,{})}(),s?0===s.length?(0,a.jsxs)("div",{className:"h-[500px] gap-4 rounded-md bg-gray-700 flex items-center justify-center",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"bi bi-file-earmark-excel",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"}),a.jsx("path",{d:"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"})]}),a.jsx("p",{children:"لا يوجد طلبات حتى الان"})]}):s?(0,a.jsxs)("div",{className:"w-full p-6 bg-gray-700 rounded-md flex flex-col gap-3 relative",children:[a.jsx("p",{className:"font-bold text-2xl",children:s.nameProject}),a.jsx("p",{className:"text-lg overflow-auto h-[150px] ",children:s.description}),(0,a.jsxs)("div",{className:"absolute top-3 left-0 w-[200px] h-[50px] flex justify-center items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex gap-0 bg-gray-600 rounded-md p-2 cursor-pointer",onClick:()=>{j(!0)},children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-plus",viewBox:"0 0 16 16",children:a.jsx("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})}),a.jsx("p",{children:"الفريق"})]}),(0,a.jsxs)("div",{className:"flex gap-2 bg-gray-600 rounded-md p-2 cursor-pointer",onClick:()=>{f(!0)},children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-currency-exchange",viewBox:"0 0 16 16",children:a.jsx("path",{d:"M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z"})}),a.jsx("p",{children:"بيع"})]})]}),a.jsx("div",{className:"w-full h-[2px] bg-gray-600"}),a.jsx("div",{className:"flex gap-1",children:s.teams?.map(e=>a.jsx(d.default,{href:`/dashboard/team/${e.id}`,children:a.jsx("img",{alt:e.name,title:e.name,src:`${t.E}/public/${e.photo}`,className:"w-10 h-10 rounded-full"})},e.id))}),a.jsx("div",{className:"w-full h-[2px] bg-gray-600"}),a.jsx("div",{className:"flex gap-2 flex-wrap",children:s.skills?.map(e=>a.jsx("p",{className:"p-2 rounded-sm bg-gray-600",children:e},e))}),a.jsx("div",{className:"w-full h-[2px] bg-gray-600"}),(0,a.jsxs)("div",{className:"flex justify-between px-2",children:[(0,a.jsxs)("p",{children:["تاريخ البدايه : ",s.startingDate]}),(0,a.jsxs)("p",{children:["تاريخ النهايه : ",s.endingDate]})]}),(0,a.jsxs)("div",{className:"flex justify-between px-2",children:[(0,a.jsxs)("p",{children:["نوع البيع : ",s.saleType]}),(0,a.jsxs)("p",{children:["السعر : ",s.price]})]}),a.jsx("div",{className:"w-full h-[2px] bg-gray-600"}),(0,a.jsxs)("a",{href:s.urlProject,target:"_blank",className:"text-lg text-blue-400 bg-gray-600 p-2 rounded-sm",children:["رابط المشروع : ",s.urlProject]}),a.jsx("div",{className:"w-full h-[2px] bg-gray-600"}),a.jsx("div",{className:"flex flex-col gap-2",children:s.users?.map((e,s)=>a.jsx(d.default,{href:"/dashboard/orders/",children:a.jsxs("div",{className:"flex gap-2 bg-gray-600 rounded-md p-2",title:e.email,children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center font-bold text-xl text-gray-50",children:e.name[0]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold",children:e.name}),a.jsxs("p",{children:[e.price,"$"]})]})]})},s))}),a.jsx("div",{className:"w-full h-[2px] bg-gray-600"}),a.jsx("div",{className:"flex flex-wrap gap-3",children:s.imgProject?.map(e=>a.jsx("img",{alt:"...",src:`${t.E}/public/${e}`,className:"w-[100px] h-[100px] border"},e))}),a.jsx("div",{className:"w-full h-[2px] bg-gray-600"}),(0,a.jsxs)("div",{className:"flex gap-6 flex-wrap justify-center",children:[a.jsx(d.default,{href:`/dashboard/projects/${e.id}/edit`,children:(0,a.jsxs)("button",{className:"flex gap-2 py-2 px-6 items-center bg-gray-600 hover:bg-blue-500 rounded-sm",children:[a.jsx("p",{children:"تعديل"}),(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),a.jsx("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})]})]})}),(0,a.jsxs)("button",{onClick:()=>{x(!0),(0,o.Z)({method:"delete",url:`${t.E}/api/admin/softDelete/project/${e.id}`,headers:{Authorization:`Bearer ${P.token}`}}).then(()=>(x(!1),u.replace("/dashboard/projects"),h.toast.success("تم حذف المشروع"))).catch(()=>(x(!1),h.toast.error("حدث خطا ما حاول مجددا")))},className:"flex gap-2 py-2 px-6 items-center bg-gray-600 hover:bg-red-500 rounded-sm",children:[a.jsx("p",{children:"حذف"}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-trash3-fill",viewBox:"0 0 16 16",children:a.jsx("path",{d:"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"})})]})]})]}):void 0:a.jsx("div",{className:"h-[500px] rounded-md bg-gray-700 flex items-center justify-center",children:a.jsx(l.Z,{})}),function(){if(g)return(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{onSubmit:z,className:"p-6 bg-gray-600 rounded-md absolute flex flex-col gap-3 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] z-10",children:[a.jsx("label",{children:"id فريق العمل"}),a.jsx("input",{required:!0,onChange:e=>{w(e.target.value)},placeholder:"team_id : 1,2,3",type:"text",className:"p-2 rounded-md"}),a.jsx("input",{type:"submit",value:"ارسال",className:"bg-blue-500 py-2 rounded-md text-gray-50 font-bold"})]}),a.jsx("div",{className:"fixed w-full h-full bg-gray-700/40 top-0 right-0",onClick:()=>{j(!1)}})]})}(),function(){if(b)return(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{onSubmit:C,className:"p-6 bg-gray-600 rounded-md absolute flex flex-col gap-3 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] z-10",children:[a.jsx("label",{children:"id المستخدم"}),a.jsx("input",{onChange:e=>{_(e.target.value)},required:!0,placeholder:"user_id : 1",type:"text",className:"p-2 rounded-md"}),a.jsx("label",{children:"السعر"}),a.jsx("input",{onChange:e=>{y(e.target.value)},required:!0,type:"number",className:"p-2 rounded-md"}),a.jsx("input",{type:"submit",value:"ارسال",className:"bg-blue-500 py-2 rounded-md text-gray-50 font-bold"})]}),a.jsx("div",{className:"fixed w-full h-full bg-gray-700/40 top-0 right-0",onClick:()=>{f(!1)}})]})}()]})}r(3909)},48890:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});var a=r(95344);function t(){return(0,a.jsxs)("div",{className:" w-full h-screen fixed flex items-center justify-center flex-col top-0 right-0 z-[1000] bg-gray-900/80 gap-6",children:[(0,a.jsxs)("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[a.jsx("div",{className:"wheel"}),a.jsx("div",{className:"hamster",children:(0,a.jsxs)("div",{className:"hamster__body",children:[(0,a.jsxs)("div",{className:"hamster__head",children:[a.jsx("div",{className:"hamster__ear"}),a.jsx("div",{className:"hamster__eye"}),a.jsx("div",{className:"hamster__nose"})]}),a.jsx("div",{className:"hamster__limb hamster__limb--fr"}),a.jsx("div",{className:"hamster__limb hamster__limb--fl"}),a.jsx("div",{className:"hamster__limb hamster__limb--br"}),a.jsx("div",{className:"hamster__limb hamster__limb--bl"}),a.jsx("div",{className:"hamster__tail"})]})}),a.jsx("div",{className:"spoke"})]}),a.jsx("h3",{className:"text-lg text-gray-200",children:"Loading..."})]})}r(53722)},36725:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>i,__esModule:()=>t,default:()=>l});let a=(0,r(86843).createProxy)(String.raw`D:\Programming\programming projects\important ptojects\zaha\frontend\src\app\(dashboard)\dashboard\projects\[id]\page.js`),{__esModule:t,$$typeof:i}=a,l=a.default},3909:(e,s,r)=>{"use strict";r.d(s,{Z:()=>a});let a={src:"/_next/static/media/facts-bg.234d15d5.jpg",height:1280,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABjEn/AP/EABYQAQEBAAAAAAAAAAAAAAAAAAIDBP/aAAgBAQABBQJbqof/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAADAAAAAAAAAAAAAAAAAAAAQZH/2gAIAQEABj8CUP/EABgQAAIDAAAAAAAAAAAAAAAAAAABESFB/9oACAEBAAE/IbNFPEP/2gAMAwEAAgADAAAAEP8A/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARMf/aAAgBAwEBPxCgMn//xAAXEQEAAwAAAAAAAAAAAAAAAAABABEh/9oACAECAQE/ELV1n//EABgQAQEAAwAAAAAAAAAAAAAAAAERADGh/9oACAEBAAE/ELsGxEd3n//Z",blurWidth:8,blurHeight:5}},53722:()=>{}};var s=require("../../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),a=s.X(0,[638,796,706,693,952],()=>r(43189));module.exports=a})();