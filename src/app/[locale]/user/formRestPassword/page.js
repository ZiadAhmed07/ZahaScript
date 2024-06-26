"use client"

import { Domin } from "@/api/data"
import Loader from "@/components/loader/loader"
import Svg from "@/components/Svg/svg"
import axios from "axios"
import { getCookie } from "cookies-next"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import t from "../../../../../messages/translations"


export default function page() {

    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const pathName = usePathname()

    const [password, setPassWord] = useState("")
    const [passwordconf, setPassWordConf] = useState("")
    const [otp, setOtp] = useState()
    const Email = localStorage.getItem('email')
    const translation = t('Index',pathName.slice(1,3))

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


    function funRestPass(e) {
        e.preventDefault()
        setLoader(true)

        if (Email) {
            if (password === passwordconf) {
                axios({
                    method: 'post',
                    url: `${Domin}/api/password/reset`,
                    data: {
                        email: Email,
                        password: password,
                        otp: otp
                    }
                }).then((res) => {
                    setLoader(false)
                    router.replace(`${pathName.slice(0,3)}/user/login`)
                    return toast.success(translation.auth.restPass.mess.label1)
                }).catch((err) => {
                    console.log(err)
                    setLoader(false)
                    return toast.error(translation.auth.restPass.mess.label2)
                })
            }
            else {
                setLoader(false)
                return toast.error(translation.auth.restPass.mess.label3)
            }
        }

    }

    function FunLoader() {
        if (loader) {
            return (
                <Loader />
            )
        }
    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 6) {
            setOtp(inputValue);
        }
    };

    return (
        <div className="absolute h-auto min-h-full w-full bg-gray-700 flex items-center justify-center right-0 top-0">
            <Svg />
            {FunLoader()}
            <div className='absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <main className="w-full max-w-md mx-auto max-sm:p2 p-6 pt-0 z-10">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{translation.auth.restPass.label1}</h1>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={(e) => { funRestPass(e) }}>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 text-sm mb-2 dark:text-white">{translation.auth.restPass.label2}</label>
                                        <div className="w-[300px] relative" dir="rtl">
                                            <input id="otp" type={"number"} onChange={handleChange} required value={otp} className="py-2 h-14 rounded-md caret-transparent outline-none tracking-[25px] w-full bg-gray-200 focus:bg-gray-300 text-gray-600 text-4xl font-extrabold text-start" maxLength={6} />
                                            <label htmlFor="otp" className="flex justify-between absolute top-0 right-0 w-full">
                                                <div className="w-4 h-14 bg-white"></div>
                                                <div className="w-2 h-14 bg-white"></div>
                                                <div className="w-2 h-14 bg-white"></div>
                                                <div className="w-2 h-14 bg-white"></div>
                                                <div className="w-2 h-14 bg-white"></div>
                                                <div className="w-2 h-14 bg-white"></div>
                                                <div className="w-4 h-14 bg-white"></div>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-gray-700 text-sm mb-2 dark:text-white">{translation.auth.restPass.label3}</label>
                                        <div className="relative">
                                            <input type="password" minLength={6} id="password" onChange={(e) => { setPassWord(e.target.value) }} className="py-2 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="passwordconf" className="block text-gray-700 text-sm mb-2 dark:text-white">{translation.auth.restPass.label4}</label>
                                        <div className="relative">
                                            <input type="password" minLength={6} id="passwordconf" onChange={(e) => { setPassWordConf(e.target.value) }} className="py-2 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">{translation.auth.restPass.label5}</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}