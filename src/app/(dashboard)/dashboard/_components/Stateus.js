"use client"

import { Domin } from '@/api/data'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Stateus() {

    const [data, setData] = useState(null)
    const [state , setState] = useState({
        Users : 0,
        Comments : 0,
        Contacts:0,
        Jobs : 0,
        Orders:0,
        Teams : 0,
        Projects : 0,
        
    })

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    } 

    useEffect(()=>{
        if(data){
            console.log(data)
            setState({
                Users:data.Users_count,
                Comments:data.Comments_count,
                Contacts:data.Contacts_count,
                Jobs:data.Jobs_count,
                Orders:data.Orders_count,
                Teams:data.Teams_count,
                Projects:data.Projects_count
            })
        }
    },[data])

    useEffect(() => {
        axios({
            method: 'get',
            url: `${Domin}/api/admin/showAll/statistics`,
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setData(res.data)
        })
    }, [])


    return (
        <div className='w-full overflow-auto'>
            <div className='min-w-[750px] relative '>
                <div className='w-[50px] h-[400px] border-l-4 border-solid border-gray-700 flex flex-col-reverse items-center justify-between'>
                    <p>0</p>
                    <p>5</p>
                    <p>10</p>
                    <p>15</p>
                    <p>20</p>
                    <p>25</p>
                    <p>30</p>
                    <p>35</p>
                    <p>40</p>
                </div>
                <div className='w-full h-[50px] border-t-4 border-solid border-gray-700 flex items-center justify-around gap-1 pr-[50px]'>
                    <p className=' w-[50px] text-center font-bold'>المستخدمين</p>
                    <p className=' w-[50px] text-center font-bold'>التعليقات</p>
                    <p className=' w-[50px] text-center font-bold'>الرسائل</p>
                    <p className=' w-[50px] text-center font-bold'>الوظائف</p>
                    <p className=' w-[50px] text-center font-bold'>الطلبات</p>
                    <p className=' w-[50px] text-center font-bold'>الفريق</p>
                    <p className=' w-[50px] text-center font-bold'>المشاريع</p>
                </div>
                <div className="absolute top-0 w-full h-full overflow-hidden">
                    <div className='h-full w-full absolute right-[50px]'>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                        <div className='border-t-[1px] border-gray-800 h-[50px]'></div>
                    </div>
                    <div className=' w-full h-full flex items-end justify-around pr-[50px] pb-[50px]'>
                        <div className={`w-[50px] transition-all h-[${state.Users}0px] bg-yellow-500 transition-all`}></div>
                        <div className={`w-[50px] transition-all h-[${state.Comments}0px] bg-orange-500`}></div>
                        <div className={`w-[50px] transition-all h-[${state.Contacts}0px] bg-pink-500`}></div>
                        <div className={`w-[50px] transition-all h-[${state.Jobs}0px] bg-green-600`}></div>
                        <div className={`w-[50px] transition-all h-[${state.Orders}0px] bg-blue-500`}></div>
                        <div className={`w-[50px] transition-all h-[${state.Teams}0px] bg-red-500`}></div>
                        <div className={`w-[50px] transition-all h-[${state.Projects}0px] bg-purple-500`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}