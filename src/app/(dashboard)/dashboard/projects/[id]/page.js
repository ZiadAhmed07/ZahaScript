"use client"
import { Domin } from "@/api/data"
import Loader from "@/components/loader/loader"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CheckAdmin from "../../_components/checkAdmin"
import img from "/public/images/facts-bg.jpg"

export default function Page({ params }) {

    const [projects, setProjects] = useState(false)
    const [loader , setLoader] = useState(false)
    const router = useRouter()

    let usreData = false
    if (getCookie('userData')) {
        usreData = JSON.parse(getCookie('userData'))
    }

    useEffect(() => {
        axios({
            method: "get",
            url: `${Domin}/api/admin/show/project/${params.id}`,
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

            const string = projects.skills
            const Array = string.split(',')

            return (
                <div className="w-full p-6 bg-gray-700 rounded-md flex flex-col gap-3">
                    <p className="font-bold text-2xl">{projects.nameProject}</p>
                    <p className="text-lg overflow-auto h-[150px] ">{projects.description}</p>
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
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <a href="#" target={"_blank"} className="text-lg text-blue-400 bg-gray-600 p-2 rounded-sm">رابط المشروع : https://zaha-scriot.net</a>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <div className="flex flex-wrap gap-3">
                        <Image src={img} alt="Image" className="h-[100px] w-[100px]" />
                        <Image src={img} alt="Image" className="h-[100px] w-[100px]" />
                    </div>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <div className="flex gap-6 flex-wrap justify-center">
                        <Link href={`/dashboard/projects/${params.id}/edit`}>
                        <button className="flex gap-2 py-2 px-6 items-center bg-gray-600 hover:bg-blue-500 rounded-sm">
                            <p>تعديل</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </button>
                        </Link>
                        <button onClick={()=>{deleteProjetc()}} className="flex gap-2 py-2 px-6 items-center bg-gray-600 hover:bg-red-500 rounded-sm">
                            <p>حذف</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            )
        }
    }

    function deleteProjetc(){
        setLoader(true)

        axios({
            method:'delete',
            url:`${Domin}/api/admin/softDelete/project/${params.id}`,
            headers : {
                'Authorization' : `Bearer ${usreData.token}`
            }
        }).then(()=>{
            setLoader(false)
            router.replace("/dashboard/projects")
            return toast.success("تم حذف المشروع")
        }).catch(()=>{
            setLoader(false)
            return toast.error("حدث خطا ما حاول مجددا")
        })
    }

    function funLoader(){
        if(loader){
            return(
                <Loader/>
            )
        }
    }

    return (
        <div>
            <CheckAdmin />
            {funLoader()}
            {getProjects()}
        </div>
    )
}