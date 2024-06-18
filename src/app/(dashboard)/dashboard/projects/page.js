"use client"
import { Domin } from "@/api/data";
import SimLoader from "@/components/simLoader/SimLoader";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import CheckAdmin from "../_components/checkAdmin";


export default function projects() {

    const [projects, setProjects] = useState("")

    let usreData = false
    if (getCookie('userData')) {
        usreData = JSON.parse(getCookie('userData'))
    }

    useEffect(() => {
        axios({
            method: "get",
            url: `${Domin}/api/admin/showAll/project`,
            headers: {
                'Authorization': `Bearer ${usreData.token}`
            }
        }).then((res) => {
            setProjects(res.data.data)
        })
    }, [])

    function getProjects() {
        if (!projects) {
            return (
                <div className="h-[500px] rounded-md bg-gray-700 flex items-center justify-center">
                    <SimLoader />
                </div>
            )
        }
        if (projects.length === 0) {
            return (
                <div className="h-[500px] gap-4 rounded-md bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                        <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <p>لا يوجد طلبات حتى الان</p>
                </div>
            )
        }
        if (projects) {
            return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        projects?.map((el) => {

                            const string = el.skills
                            const Array = string.split(',')

                            return (
                                <Link key={el.id} href={`/dashboard/projects/${el.id}`}>
                                    <div  className="p-6 w-full bg-gray-700 rounded-md min-h-[320px] h-auto flex flex-col gap-3">
                                        <p className="font-bold text-2xl">{el.nameProject}</p>
                                        <p className="text-lg overflow-auto h-[100px] ">{el.description}</p>
                                        <div className="w-full h-[2px] bg-gray-600"></div>
                                        <div className="flex">
                                            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center hover:z-10">Z</div>
                                            <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center translate-x-4 hover:z-10">H</div>
                                            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center translate-x-8 hover:z-10">Ha</div>
                                            <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center translate-x-12 hover:z-10">A</div>
                                            <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center translate-x-16 hover:z-10">M</div>
                                        </div>
                                        <div className="w-full h-[2px] bg-gray-600"></div>
                                        <div className="flex gap-2 flex-wrap">
                                            {Array?.map((el) => {
                                                return (
                                                    <p key={el} className="p-2 rounded-sm bg-gray-600">{el}</p>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }
    }

    return (
        <div className="felx gap-6 flex-col">
            <CheckAdmin />
            <div className="flex justify-between">
                <p className="text-2xl font-bold mb-6"># المشاريع</p>
                <Link href={"/dashboard/team/newEmplyee"} className="flex gap-1 items-center bg-gray-700 hover:bg-blue-500 rounded-md px-6 h-10">
                    <p>مشروع جديد</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </Link>
            </div>
            <div>
                {getProjects()}
            </div>
        </div>
    )
}