"use client"

import { Domin } from '@/api/data'
import SimLoader from '@/components/simLoader/SimLoader'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


export default function Jobs() {

    const [data, setData] = useState(null)
    const [user, setUser] = useState(null)
    const [dis, setDis] = useState("hidden")
    const [dis2, setDis2] = useState('hidden')

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(() => {
        axios({
            url: `${Domin}/api/admin/showAll/job`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setData(res.data.data)
        })
    }, [])

    function getUsers() {
        if (!data) {
            return (
                <div className="bg-gray-700 flex justify-center items-center w-full h-[500px] rounded-md">
                    <SimLoader />
                </div>
            )
        }

        if (data.length === 0) {
            return (
                <div className='bg-gray-700 rounded-md w-full h-[500px] flex flex-col items-center justify-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-x-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708" />
                    </svg>
                    <p className='font-bold text-xl'>لا يوجد طلبات توظيف حتى الان</p>
                </div>
            )
        }

        if (data) {
            return (
                <div className='w-full min-w-[600px] h-auto bg-gray-700 rounded-md text-center'>
                    <ul className='grid grid-cols-5 text-gray-50 font-bold p-2 border-b-2 border-gray-500 border-solid'>
                        <li>الصوره</li>
                        <li>الاسم</li>
                        <li>الوظيفه</li>
                        <li className='col-start-4 col-end-6'>البريد</li>

                    </ul>
                    {
                        data?.map((el) => {
                            return (
                                <ul key={el.id} onClick={() => { getUserById(el.id) }} className='w-full min-w-96 h-auto grid grid-cols-5 text-gray-200 p-2 hover:bg-gray-600 items-center'>
                                    <li className='flex justify-center'>
                                        <div className='bg-blue-500 font-bold h-[40px] w-[40px] rounded-full flex items-center justify-center'>
                                            {el.realName[0]}
                                        </div>
                                    </li>
                                    <li>{el.realName}</li>
                                    <li>{el.job}</li>
                                    <li className='col-start-4 col-end-6'>{el.user?.email}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            )
        }
    }

    function getUserById(id) {
        setDis('flex')

        axios({
            url: `${Domin}/api/admin/show/job/${id}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setUser(res.data.data)
        })
    }

    function winOneUser() {
        if (!user) {
            return (
                <div className={`w-full h-screen fixed top-0 right-0 z-[200] ${dis} items-center justify-center`}>
                    <div className='w-[300px] h-[400px] bg-gray-600 rounded-md absolute flex items-center justify-center'>
                        <p className='font-bold'>جارى التحميل...</p>
                    </div>
                    <div className='w-full h-full bg-gray-900/70' onClick={() => { setDis('hidden') }}>
                    </div>
                </div>
            )
        }

        if (user) {
            return (
                <div className={`w-full h-screen fixed top-0 right-0 z-[200] ${dis} items-center justify-center`}>
                    <div className='w-[350px] h-[450px] bg-gray-600 rounded-md absolute flex flex-col items-center justify-center gap-4'>
                        <div className='w-[60px] h-[60px] bg-blue-500 rounded-full flex items-center justify-center font-bold text-3xl text-gray-50'>{user.realName[0]}</div>
                        <div className='font-bold text-lg flex flex-col gap-1 text-center'>
                            <p>الاسم : {user.realName}</p>
                            <p>البريد : {user.user?.email}</p>
                            <p>الوظيفه : {user.job}</p>
                            <p> رقم التلفون : {user.phoneNumber}</p>
                            <p> المهارات : {user.skills}</p>
                            <p> العنوان : {user.address}</p>
                            <p> المؤهل : {user.qualification}</p>
                            <p> سنوات الخبره : {user.yearsOfExperience}</p>
                        </div>
                        <button onClick={() => { setDis2('flex') }} className='px-6 py-3 font-bold text-gray-200 hover:bg-red-500 rounded-md bg-gray-700'>حذف الطلب</button>
                    </div>
                    <div className='w-full h-full bg-gray-900/70' onClick={() => { setDis('hidden'); setUser(null) }}>
                    </div>
                </div>
            )
        }
    }

    function checkDelete() {
        return (
            <div className={`w-full h-screen fixed top-0 right-0 z-[200] ${dis2} items-center justify-center`}>
                <div className='p-10 bg-gray-600 rounded-md absolute'>
                    <button onClick={() => { deleteOrder() }} className='px-6 py-3 font-bold text-gray-200 hover:bg-red-500 rounded-md bg-gray-700'>حذف الطلب</button>
                </div>
                <div className='w-full h-full bg-gray-900/70' onClick={() => { setDis2('hidden') }}>
                </div>
            </div>
        )
    }

    function deleteOrder() {
        axios({
            url: `${Domin}/api/admin/softDelete/job/${user.id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            location.reload()
            return toast.success('تم حذف طلب التوظيف')
        })
    }

    return (
        <div className='flex flex-col gap-6'>
            {winOneUser()}
            <p className='text-2xl font-bold'># طلبات التوظيف</p>
            <div className='w-full overflow-auto'>
            {getUsers()}
            </div>
            {checkDelete()}
        </div>
    )
}