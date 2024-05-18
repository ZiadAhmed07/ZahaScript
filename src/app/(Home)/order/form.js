"use client"

import { Domin } from "@/api/data"
import Loader from "@/components/loader/loader"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function Form() {

    const [loader , setLoader] = useState(false)
    const [phoneNum , setPhoneNum] = useState("")
    const [nameProject , setNameProject] = useState("")
    const router = useRouter()

    function postData(e) {
        e.preventDefault()
        setLoader(true)

        let userData = false
        if(getCookie("userData")){
            const user = JSON.parse(getCookie("userData"))
            userData = user
        }

        if(!userData){
            router.replace("user/login")
            return toast.warn("ينبغى عليك التسجيل اولا")
        }

        if(userData){

            axios({
                method:'post',
                url:`${Domin}/api/auth/create/order`,
                headers:{
                    'Authorization':`bearer ${userData.token}`
                },
                data:{
                    phoneNumber : phoneNum,
                    nameProject : nameProject, 
                    user_id : userData.id,
                    price : 0,
                    url : "#",
                    condition : "Pending",
                }
            }).then((res)=>{
                setLoader(false)
                router.replace("/user")
                return toast.success("تم ارسالك طلبك بنجاح وسيتم الرد عليك خلال 24 ساعه")
            }).catch((err)=>{
                setLoader(false)
                return toast.success("حدث خطأ ما! حول مجددا")
            })
        }

        
    }

    function FunLoder(){
        if(loader){
            return(
                <Loader/>
            )
        }

    }

    return (
        <div>
            {FunLoder()}
            <form onSubmit={(e) => { postData(e) }}>
                <input type={"text"} minLength={4} placeholder="اسم الموقع" required className="rounded-md" onChange={(e)=>{setNameProject(e.target.value)}}/>
                <span></span>
                <input type={"number"} minLength={8} placeholder="رقم الهاتف" required className="rounded-md" onChange={(e)=>{setPhoneNum(e.target.value)}}/>
                <input type={"submit"} value="ارسال طلب" id="butSub" />
            </form>
        </div>

    )
}