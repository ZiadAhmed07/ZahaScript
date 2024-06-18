"use client"
import { Domin } from "@/api/data";
import Loader from "@/components/loader/loader";
import Svg from "@/components/Svg/svg";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import t from "../../../../../messages/translations";



export default function page() {

    const router = useRouter()
    const [loader, setLoader] = useState(false)
    const pathName = usePathname()
    const [otp, setOtp] = useState()
    const [seconds, setSeconds] = useState(60);
    const [isCounting, setIsCounting] = useState(false);

    const translation = t('Index',pathName.slice(1,3))

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    if (userData) {
        router.replace(`${pathName.slice(0, 3)}`)
    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 6) {
            setOtp(inputValue);
            FunPostData(inputValue)
        }
    };

    function FunPostData(el) {

        const email = localStorage.getItem('email')

        if (el.length == 6 && email) {
            setIsCounting(true);
            setLoader(true)

            axios({
                method:'post',
                url:`${Domin}/api/email/verify`,
                data:{
                    email:email,
                    otp:el
                }
            }).then((res)=>{
                console.log(res)
                setLoader(false)
                router.replace(`${pathName.slice(0,3)}/user/login`)
                return toast.success(translation.auth.otp.mess.label1)
            }).catch((err)=>{
                console.log(err)
                setLoader(false)
                return toast.error(translation.auth.otp.mess.label2)
            })


        }
    }

    const id = localStorage.getItem('id')

    function resendOTP(){
        axios({
            method:'get',
            url:`${Domin}/api/email/resend/${id}`
        }).then(()=>{
            return toast.success(translation.auth.otp.mess.label3)
        }).catch(()=>{
            return toast.error(translation.auth.otp.mess.label4)
        })
    }

    function funLoader() {
        if (loader) {
            return (
                <Loader />
            )
        }
    }

    useEffect(() => {
        let interval;
        if (isCounting && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isCounting, seconds]);

    
    function FunTimer(){
        if(isCounting){
            if(seconds === 0){
                return(
                    <button onClick={()=>{resendOTP()}} className="text-gray-700 hover:text-blue-500">{translation.auth.otp.label3} : <span className="text-blue-400">{seconds}</span></button>
                )
            }
            return(
                <p>{translation.auth.otp.label3} : <span className="text-blue-400">{seconds}</span></p>
            )
        }
    }

    return (
        <div className="bg-gray-700 absolute h-full w-full right-0 top-0 flex items-center justify-center">
            <Svg />
            {funLoader()}
            <div className='absolute inset-0 blur-[118px] max-w-lg mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <main className="z-10 w-full max-w-md max-sm:px-2 mx-auto p-6">
                <div className="bg-gray-50 p-10 rounded-md relative flex flex-col gap-4 items-center">
                    <div className="text-center">
                        <p className="text-gray-800 text-2xl font-bold">{translation.auth.otp.label1}</p>
                        <p className="text-gray-700 text-lg">{translation.auth.otp.label2}</p>
                    </div>
                    <div className="w-[300px] relative" dir="rtl">
                        <input id="otp" type={"number"} onChange={handleChange} value={otp} className="py-2 h-14 rounded-md caret-transparent outline-none tracking-[25px] w-full bg-gray-200 focus:bg-gray-300 text-gray-600 text-4xl font-extrabold text-start" maxLength={6} />
                        <label htmlFor="otp" className="flex justify-between absolute top-0 right-0 w-full">
                            <div className="w-4 h-14 bg-gray-50"></div>
                            <div className="w-2 h-14 bg-gray-50"></div>
                            <div className="w-2 h-14 bg-gray-50"></div>
                            <div className="w-2 h-14 bg-gray-50"></div>
                            <div className="w-2 h-14 bg-gray-50"></div>
                            <div className="w-2 h-14 bg-gray-50"></div>
                            <div className="w-4 h-14 bg-gray-50"></div>
                        </label>
                    </div>
                    <div>
                        {FunTimer()} 
                    </div>
                </div>
            </main>
        </div>
    )
}
