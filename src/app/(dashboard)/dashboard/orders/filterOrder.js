'use client'

import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function FilterOrder(){
    
    const [data, setData] = useState(null)
    const [filterKey, setFilterKey] = useState("all")

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(()=>{
        axios({
            method: 'get',
            url: `${Domin}/api/admin/filter/orders`,
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res)=>{
            setData(res.data)
        })
    },[])

    function FunFilter(key='all'){
        if (!data) {
            return (
                <div className=' p-6 flex justify-center'>
                    <SimLoader />
                </div>
            )
        }
        if (data.length === 0) {
            return (
                <div className="flex items-center justify-center p-4">
                    <p className="text-xl font-bold">لا يوجد طلبات</p>
                </div>
            )
        }

        const filteredData = data.filter((el) => {
            if (key === 'all') {
                return true
            } else {
                return el.condition === key
            }
        })

        return (
            <div className="min-w-[530px]">
                <div className="grid grid-cols-3 text-center font-bold border-b-2 p-4">
                    <p>user id</p>
                    <p>اسم المشروع</p>
                    <p>رقم التلفون</p>
                </div>
                <div>
                    {filteredData.map((el) => (
                        <Link key={el.id} href={`/dashboard/orders/${el.user_id}`}>
                            <div className="grid grid-cols-3 text-center p-2 hover:bg-gray-500">
                                <p>{el.user_id}</p>
                                <p>{el.nameProject}</p>
                                <p>{el.phoneNumber}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-700 rounded-md">
            <div className="flex justify-between bg-gray-600 p-4 rounded-md">
                <p className="text-xl font-bold"># طلبات المشاريع</p>
                <select 
                    className="bg-gray-700 text-gray-50 p-1 rounded-md" 
                    value={filterKey} 
                    onChange={(event) => setFilterKey(event.target.value)}
                >
                    <option value="all">كل الطلبات</option>
                    <option value="Pending">طلب جديد</option>
                    <option value="Approved">تم الموافقه</option>
                    <option value="Cancelled">تم الالغاء</option>
                    <option value="In Progress">قيد التنفيذ</option>
                    <option value="Completed">اكتمل</option>
                </select>
            </div>
            <div className="w-full overflow-auto">
                {FunFilter(filterKey)}
            </div>
        </div>
    )
}
