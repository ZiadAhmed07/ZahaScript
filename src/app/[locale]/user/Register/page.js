"use client"

import { Domin } from "@/api/data";
import Loader from "@/components/loader/loader";
import Svg from "@/components/Svg/svg";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import t from "../../../../../messages/translations";



export default function page() {

    const pathName = usePathname()

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(()=>{
        if(userData){
            router.replace(`${pathName.slice(0, 3)}`)
          }
    },[])

    const [valueName , setName] = useState("")
    const [valueEmail , setEmail] = useState("")
    const [valuePassWord , setPassWord] = useState("")
    const [valuePassWordConf , setPassWordConf] = useState("")
    const [stateLoader , setLoader] = useState(0)
    const router = useRouter()

    const translation = t('Index',pathName.slice(1,3))

    function createAcc(e){
        e.preventDefault()
        setLoader(1)

        if(valuePassWord === valuePassWordConf){
            axios({
                method:'post',
                url:`${Domin}/api/auth/register`,
                data:{
                    name:valueName,
                    email:valueEmail,
                    password:valuePassWord,
                    password_confirmation:valuePassWordConf,
                }
            }).then((res)=>{
                if(res.data.message === "Validation errors"){
                    setLoader(0)
                    router.replace(`${pathName.slice(0, 3)}/user/login`)
                    return toast.warn(translation.auth.registe.mess.label1)
                    
                } else{
                    localStorage.setItem('id',res.data.user.id)
                    localStorage.setItem('email',valueEmail)
                    setLoader(0)
                    router.replace(`${pathName.slice(0, 3)}/user/otp`)
                    return toast.success(translation.auth.registe.mess.label2)
                }
            }).catch((err)=>{
                setLoader(0)
                return toast.error(translation.auth.registe.mess.label3)
            })
        } else{
            setLoader(0)
            return toast.warn(translation.auth.registe.mess.label4)
        }
    }

    function FunLoader(){
        if(stateLoader === 1){
            return(
                <Loader/>
            )
        }
    }

    return (
        <div className="absolute h-auto min-h-full w-full bg-gray-700 flex items-center justify-center right-0 top-0">
            <Svg/>
            {FunLoader()}
            <div className='absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <main className="w-full max-w-md mx-auto max-sm:px-2 p-6 pt-0 z-10">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{translation.auth.registe.label1}</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {translation.auth.registe.label2}
                                <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={`${pathName.slice(0, 3)}/user/login`}>
                                {translation.auth.registe.label2y}
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5">
                            <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                    <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                    <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                    <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                    <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                </svg>
                                {translation.auth.registe.label3}
                            </button>

                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>


                            <form onSubmit={(e)=>{createAcc(e)}}>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-gray-700 text-sm mb-2 dark:text-white">{translation.auth.registe.label4}</label>
                                        <div className="relative">
                                            <input type="text" minLength={4} id="fullName" onChange={(e)=>{setName(e.target.value)}} className="py-1 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 text-sm mb-2 dark:text-white">{translation.auth.registe.label5}</label>
                                        <div className="relative">
                                            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} className="py-1 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-gray-700 text-sm mb-2 dark:text-white">{translation.auth.registe.label6}</label>
                                        <div className="relative">
                                            <input type="password" minLength={6} id="password" onChange={(e)=>{setPassWord(e.target.value)}} className="py-1 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="passwordconf" className="block text-gray-700 text-sm mb-2 dark:text-white">{translation.auth.registe.label7}</label>
                                        <div className="relative">
                                            <input type="password" minLength={6} id="passwordconf" onChange={(e)=>{setPassWordConf(e.target.value)}} className="py-1 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit"  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">{translation.auth.registe.label8}</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
