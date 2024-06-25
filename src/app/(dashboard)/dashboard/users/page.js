"use client"

import { Domin } from '@/api/data'
import SimLoader from '@/components/simLoader/SimLoader'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CheckAdmin from '../_components/checkAdmin'

export default function page() {


    const [data, setData] = useState("")
    const [winOneUser, setWinOneUser] = useState(false)
    const [getId, setId] = useState('')
    const [oneUser, setOneUser] = useState("...")

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(() => {
        axios({
            url: `${Domin}/api/admin/showAll/uesr`,
            method: "get",
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setData(res.data.data)
        })
    }, [])

    function getUserById(id) {
        setWinOneUser(true)
        setId(id)
        axios({
            url: `${Domin}/api/admin/edit/user/${id}`,
            method: "get",
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setOneUser(res.data.data)
        })
    }


    function DeleteUserById() {
        axios({
            url: `${Domin}/api/admin/softDelete/user/${getId}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then(() => {
            location.reload()
            return toast.success("تم حذف المستخدم")
        }).catch(() => {
            return toast.error("حدث خطأ ما")
        })

    }


    function FunwinOneUser() {
        if (winOneUser) {
            return (
                <div className='fixed w-full h-screen top-0 right-0 z-[200] flex items-center justify-center '>
                    <div className='w-full h-full' onClick={() => { setWinOneUser(false); setOneUser('...') }}>

                    </div>
                    <div className='bg-gray-200 rounded-lg absolute px-10 py-4 flex flex-col items-center gap-3'>
                        <p className='text-gray-800 font-bold text-lg'>انت على وشك حذف {oneUser.name || '....'}</p>
                        <button onClick={() => { DeleteUserById() }} className='bg-gray-700 rounded-md px-6 py-3 font-bold text-gray-200 hover:bg-red-500'>حذف المستخدم</button>
                    </div>
                </div>
            )
        }
    }


    function getUsers() {
        if (!data) {
            return (
                <div className="bg-gray-700 flex justify-center items-center w-full h-[500px]">
                    <SimLoader />
                </div>
            )
        }
        if (data) {
            return (
                <div className='w-full min-w-[600px] h-auto bg-gray-700 rounded-md text-center'>
                    <ul className='grid grid-cols-5 text-gray-50 font-bold p-2 border-b-2 border-gray-500 border-solid'>
                        <li>الصوره</li>
                        <li>id</li>
                        <li>الاسم</li>
                        <li className='col-start-4 col-end-6'>البريد</li>

                    </ul>
                    {
                        data?.map((el) => {
                            return (
                                <ul key={el.id} onClick={() => { getUserById(el.id) }} className='w-full min-w-96 h-auto grid grid-cols-5 text-gray-200 p-2 hover:bg-gray-600 items-center relative'>
                                    <li className='flex justify-center'>
                                        <div className='bg-blue-500 font-bold h-[40px] w-[40px] rounded-full flex items-center justify-center'>
                                            {el.name[0]}
                                        </div>
                                    </li>
                                    <li>{el.id}</li>
                                    <li>{el.name}</li>
                                    <li className='col-start-4 col-end-6'>{el.email}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            )
        }
    }


    return (
        <div className='w-full flex flex-col gap-6'>
            <p className='font-bold text-2xl'># المستخدمين</p>
            <CheckAdmin />
            {FunwinOneUser()}
            <div className='w-full overflow-auto'>
            {getUsers()}
            </div>
        </div>
    )
}
