"use client"
import { Domin } from "@/api/data";
import Loader from "@/components/loader/loader";
import Svg from "@/components/Svg/svg";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState , useEffect} from "react";
import { toast } from "react-toastify";
import t from "../../../../../messages/translations";



export default function page() {

    const router = useRouter()
    const [loader, setLoader] = useState(false)
    const [ValueEmail, setEmail] = useState()
    const pathName = usePathname()

    const Translate = t('Index', pathName.slice(1, 3))

    useEffect(()=>{
        if(userData){
            router.replace(`${pathName.slice(0, 3)}`)
          }
    },[])

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    function FunPostEmail(e) {
        e.preventDefault()
        setLoader(true)
        axios({
            method: 'post',
            url: `${Domin}/api/password/forgot`,
            data: {
                email: ValueEmail
            }
        }).then((res) => {
            if (res.data.message == "Please check your email.") {
                setLoader(false)
                localStorage.setItem('email',ValueEmail)
                router.replace(`${pathName.slice(0, 3)}/user/formRestPassword`)
                return toast.success(`${Translate.auth.sendEmail.mess.label1} ${ValueEmail}`)
            }
            if (res.data.message == 'Validation errors') {
                setLoader(false)
                return toast.error(`${Translate.auth.sendEmail.mess.label2} ${ValueEmail}`)
            }
        }).catch((err) => {
            setLoader(false)
            console.log(err)
            return toast.error(`${Translate.auth.sendEmail.mess.label3}`)
        })
    }

    function funLoader() {
        if (loader) {
            return (
                <Loader />
            )
        }

    }

    return (
        <div className="bg-gray-700 absolute h-full w-full right-0 top-0 flex items-center justify-center">
            <Svg />
            {funLoader()}
            <div className='absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <main className="z-10 w-full max-w-md max-sm:px-2 mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">{Translate.auth.sendEmail.label1}</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {Translate.auth.sendEmail.label2}
                                <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={`${pathName.slice(0, 3)}/user/login`}>
                                    {Translate.auth.sendEmail.label3}
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5">

                            <form onSubmit={(e) => { FunPostEmail(e) }}>
                                <div className="grid gap-y-4">

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 text-sm mb-2 dark:text-white">{Translate.auth.sendEmail.label4}</label>
                                        <div className="relative">
                                            <input type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:outline-blue-500 border-2 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>


                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">{Translate.auth.sendEmail.label5}</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
