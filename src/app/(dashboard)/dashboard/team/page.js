'use client'

import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import CheckAdmin from "../_components/checkAdmin"
import Avatar from "/public/images/3.png"

export default function Team() {

    const [Team, setTeam] = useState(null)

    let usreData = false
    if (getCookie('userData')) {
        usreData = JSON.parse(getCookie('userData'))
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${Domin}/api/admin/showAll/team`,
            headers: {
                'Authorization': `Bearer ${usreData.token}`
            }
        }).then((res) => {
            setTeam(res.data.data)
        })
    }, [])

    function getTeam() {
        if (!Team) {
            return (
                <div className="bg-gray-700 flex items-center justify-center h-[500px] rounded-md">
                    <SimLoader />
                </div>
            )
        }
        if (Team.length === 0) {
            return (
                <div className="bg-gray-700 flex items-center justify-center h-[500px] flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-excel-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64" />
                    </svg>
                    <p className="text-lg font-bold">لم يتم اختيار الفريق حتى الان</p>
                </div>
            )
        }
        if (Team) {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {Team?.map((el) => {

                        function FunBoss() {
                            if (el.Boss == 'Boss') {
                                return (
                                    <div className="bg-gray-600 absolute w-48 h-8 top-6 -right-14 rotate-45 text-center font-bold text-2xl text-gray-500">
                                        Boss
                                    </div>
                                )
                            }
                        }

                        return (
                            <div key={el.id} className="bg-gray-700 rounded-md p-4 h-[280px] relative overflow-hidden">
                                {FunBoss()}
                                <div className="flex flex-col items-center">
                                    <div className='relative'>
                                        <img src={`${Domin}/public/${el.photo}`} alt=".." className="w-[100px] h-[100px] rounded-full mb-2" />
                                        <div className='absolute w-6 h-6 rounded-full bg-blue-500 bottom-2 right-0 flex items-center justify-center text-gray-300 text-xs font-bold pt-1'>
                                            {el.numProject}
                                        </div>
                                    </div>
                                    <p className="text-lg">{el.name}</p>
                                    <p className="text-lg">{el.job}</p>
                                </div>
                                <div className="w-full bg-gray-600 h-[2px] my-6"></div>
                                <div className="flex justify-between items-center">
                                    <p >انضم : {el.dateOfJoin}</p>
                                    <Link href={`/dashboard/team/${el.id}`} className="bg-gray-600 rounded-md p-2 hover:bg-blue-500">الملف الشخصي</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    return (
        <div>
            <CheckAdmin />
            <div className="flex justify-between">
                <p className="text-2xl font-bold mb-6"># فريق العمل</p>
                <Link href={"/dashboard/team/newEmplyee"} className="flex gap-1 items-center bg-gray-700 hover:bg-blue-500 rounded-md px-6 h-10">
                    <p>عضو جديد</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </Link>
            </div>
            {getTeam()}
        </div>
    )
}