'use client'

import Loader from "@/components/loader/loader"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function CheckAdmin() {

    const [dis, setDis] = useState('fixed')
    const router = useRouter()

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(()=>{
        if (!userData) {
            localStorage.setItem("prevUrl" , "/dashboard")
            router.replace('/user/login')
        }
    
        if (userData) {
            if (userData.isAdmin === 0) {
                router.replace('/')
            }
            if (userData.isAdmin === 1) {
                setDis('hidden')
            }
        }
    },[userData])



    return (
        <div className={`w-full h-full bg-gray-900 ${dis} top-0 right-0 z-50`}>
            <Loader />
        </div>
    )
}