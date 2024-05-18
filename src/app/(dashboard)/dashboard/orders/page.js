'use client'
import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useEffect, useState } from "react"
import CheckAdmin from "../_components/checkAdmin"


export default function orders() {

    const [orders, setOrders] = useState(null)

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(() => {
        axios({
            url: `${Domin}/api/admin/showAll/order`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setOrders(res.data.data)
        })
    }, [])

    function getOrders() {
        if (!orders) {
            return (
                <div className="flex items-center justify-center w-full h-[500px] bg-gray-700 rounded-md">
                    <SimLoader />
                </div>
            )
        }
        if (orders.length === 0) {
            return (
                <div className="flex items-center justify-center flex-col gap-4 w-full h-[500px] bg-gray-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                        <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <p>لا يوجد طلبات حتى الان</p>
                </div>
            )
        }
        if (orders) {
            return (
                <div className="w-full overflow-auto">
                    <div className="bg-gray-700 rounded-md min-w-[600px]">
                        <div className="grid grid-cols-5 font-bold text-center p-2 border-b-2 border-gray-600 border-solid">
                            <p>الصوره</p>
                            <p>الاسم </p>
                            <p>عدد الطلبات</p>
                            <p className="col-span-2">البريد</p>
                        </div>
                        {
                            orders?.map((el) => {
                                return (
                                    <Link href={`/dashboard/orders/${el.id}`} key={el.id}>
                                    <div className="grid grid-cols-5 font-bold text-center p-2 items-center hover:bg-gray-600">
                                        <div className="flex items-center justify-center"> <p className="w-[40px] h-[40px] rounded-full bg-orange-500 text-lg font-bold flex items-center justify-center">{el.name[0]}</p></div>
                                        <p>{el.name}</p>
                                        <p>{el.orders.length}</p>
                                        <p className="col-span-2">{el.email}</p>
                                    </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            )

        }
    }

    return (
        <div className="flex flex-col gap-6">
            <p className="font-bold text-2xl"># العملاء</p>
            <CheckAdmin />
            {getOrders()}
        </div>
    )
}