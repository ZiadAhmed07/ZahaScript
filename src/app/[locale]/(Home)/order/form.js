"use client"

import { Domin } from "@/api/data"
import Loader from "@/components/loader/loader"
import axios from "axios"
import { getCookie } from "cookies-next"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import t from "../../../../../messages/translations"

export default function Form() {

    const [loader, setLoader] = useState(false)
    const [phoneNum, setPhoneNum] = useState("")
    const [nameProject, setNameProject] = useState("")
    const router = useRouter()
    const pathName = usePathname()

    const translation = t('Index',pathName.slice(1,3))

    let userData = false
    if (getCookie("userData")) {
        const user = JSON.parse(getCookie("userData"))
        userData = user
    }


    function postData(e) {
        e.preventDefault()
        setLoader(true)


        if (!userData) {
            localStorage.setItem("prevUrl" , `${pathName.slice(0, 3)}/order`)
            router.replace(`${pathName.slice(0, 3)}/user/login`)
            return toast.warn(translation.order.form.mess.label1)
        }

        if (userData) {

            axios({
                method: 'post',
                url: `${Domin}/api/auth/create/order`,
                headers: {
                    'Authorization': `bearer ${userData.token}`
                },
                data: {
                    phoneNumber: phoneNum,
                    nameProject: nameProject,
                    user_id: userData.id,
                    price: 0,
                    url: "#",
                    condition: "Pending",
                }
            }).then((res) => {
                setLoader(false)
                router.replace(`${pathName.slice(0, 3)}/user`)
                return toast.success(translation.order.form.mess.label2)
            }).catch((err) => {
                setLoader(false)
                return toast.error(translation.order.form.mess.label3)
            })
        }


    }

    function FunLoder() {
        if (loader) {
            return (
                <Loader />
            )
        }

    }

    return (
        <div>
            <div>
                {FunLoder()}
                <form onSubmit={(e) => { postData(e) }}>
                    <input type={"text"} minLength={4} placeholder={translation.order.form.label1} required className="rounded-md" onChange={(e) => { setNameProject(e.target.value) }} />
                    <span></span>
                    <input type={"number"} minLength={8} placeholder={translation.order.form.label2} required className="rounded-md" onChange={(e) => { setPhoneNum(e.target.value) }} />
                    <input type={"submit"} value={translation.order.form.label3} id="butSub" />
                </form>
            </div>
        </div>

    )
}