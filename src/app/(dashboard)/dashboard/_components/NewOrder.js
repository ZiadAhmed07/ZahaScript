'use client'

import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function NewOrder() {

    const [data, setData] = useState(false)
    const [noti, setNoti] = useState(false)

    let usreData = false
    if (getCookie('userData')) {
        usreData = JSON.parse(getCookie('userData'))
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${Domin}/api/admin/filter/orders`,
            headers: {
                'Authorization': `Bearer ${usreData.token}`
            }
        })
            .then((res) => {
                const filter = res.data.filter((el) => {
                    return el.condition == 'Pending'
                })
                setData(filter)
            })
    }, [])

    const toggle = () => {
        setNoti(prev => (prev == false ? true : false))
    }

    function butNoti() {
        if (data.length > 0) {
            return (
                <button onClick={toggle}>
                    <div className="w-4 h-4 bg-red-500 rounded-full absolute flex items-center justify-center text-sm text-gray-900 font-bold">
                        {data.length}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bell-fill text-yellow-300" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                    </svg>
                </button>
            )
        } else {
            return (
                <button onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bell-fill text-yellow-50" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                    </svg>
                </button>
            )
        }
    }

    function Notice() {
        if (data.length == 0) {
            return (
                <div className="w-48 h-20 flex items-center justify-center ">
                    <p className="text-gray-400 font-bold">لايوجد طلبات جديده</p>
                </div>
            )
        }
        if (data) {
            return (
                <div className="flex flex-col">
                    <p className="px-1 py-2 border-[1px] border-gray-300 text-gray-500">الاشعارات : {data.length}</p>
                    {
                        data?.map((el) => {
                            return (
                                <Link href={`/dashboard/orders/${el.user_id}`} key={el.id} className=' border-[1px] border-gray-300 p-2 py-3 hover:bg-gray-300 flex gap-4'>
                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold text-gray-50">
                                        {el.user_id}
                                    </div>
                                    <div>
                                        <p className="text-gray-600 font-bold text-lg">{el.nameProject}</p>
                                        <p className="text-gray-500 text-sm"> {el.phoneNumber}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }
    }




    function listNoti() {
        if (noti) {
            return (
                <div>
                    <div className=" rounded-md bg-gray-200 absolute top-20 left-[100px] z-20 overflow-hidden min-w-[300px]">
                        {Notice()}
                    </div>
                    <div onClick={toggle} className=' w-full h-full bg-gray-700/40 top-[70px] right-0 fixed'></div>
                </div>
            )
        }
    }

    return (
        <div className='flex items-center'>
            {butNoti()}
            {listNoti()}
        </div>
    )
}

