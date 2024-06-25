"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Avatar from "/public/images/3.png"
import CheckAdmin from "../../_components/checkAdmin"
import { getCookie } from "cookies-next"
import Link from "next/link"
import axios from "axios"
import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import { toast } from "react-toastify"
import Loader from "@/components/loader/loader"
import { useRouter } from "next/navigation"

export default function page({ params }) {

    const [disCheck, setDisCheck] = useState(false)
    const [Team, setTeam] = useState(null)
    const [loader , setLoader] = useState(false)
    const router = useRouter()

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    function Lavel() {

        if (Team?.numProject <= 4) {
            return (
                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-500 bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                    </svg>
                </div>
            )
        }
        if (Team?.numProject <= 9) {
            return (
                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2 flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-600 left-0 absolute bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-500 relative bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                    </svg>
                </div>
            )
        }
        if (Team?.numProject <= 14) {
            return (
                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2 flex relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-600 left-0 absolute bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-500 relative bi z-10 bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-yellow-600 absolute right-0 bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                    </svg>
                </div>
            )
        }
    }

    function checkDelete() {
        if (disCheck) {
            return (
                <div className={`fixed top-0 flex right-0 w-full h-screen z-[200] items-center justify-center`}>
                    <div className="bg-gray-900/70 w-full h-full" onClick={() => { setDisCheck(false) }}></div>
                    <div className="bg-gray-600 rounded-lg p-4 absolute z-10 w-[280px] h-auto flex items-center flex-col gap-2">
                        <p>هل انت متاكد من حذف {Team.name}</p>
                        <button onClick={()=>{Delete()}} className="bg-gray-700 rounded-md p-1 text-gray-200 px-3 hover:bg-red-500">تاكيد الحذف</button>
                    </div>
                </div>
            )
        }
    }

    function Delete(){
        setLoader(true)

        axios({
            method:'delete',
            url :`${Domin}/api/admin/softDelete/team/${params.id}`,
            headers:{
                'Authorization':`Bearer ${userData.token}`
            }
        }).then(()=>{
            setLoader(false)
            router.replace("/dashboard/team")
            return toast.success('تم حذف الموظف')
        }).catch((err)=>{
            setLoader(false)
            console.log(err)
            return toast.error('حدث خطأ ما!')
        })
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${Domin}/api/admin/show/team/${params.id}`,
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setTeam(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function getTeam() {
        if (!Team) {
            return (
                <div className="bg-gray-700 flex items-center justify-center h-[500px]">
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
                <div className="bg-gray-700 relative min-h-[600px] rounded-md py-6 sm:px-20 px-6 flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <div>
                            <img src={`${Domin}/public/${Team.photo}`} alt="..." className="w-[100px] h-[100px] rounded-full " />
                        </div>

                        <p className="text-xl font-bold">{Team.name}</p>
                        <p className="text-lg">{Team.job}</p>
                    </div>

                    <div className="h-[2px] bg-gray-600 w-full"></div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full">
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="  bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </div>
                            <p>اسم الموظف : {Team.name}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                                </svg>
                            </div>
                            <p>البريد الالكترونى : {Team.user.email}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <p>رقم الهاتف : {Team.phoneNumber}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                                </svg>
                            </div>
                            <p>الوظيفه :{Team.job}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
                                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1" />
                                </svg>
                            </div>
                            <p>المهارات : {Team.skills}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
                                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1" />
                                </svg>
                            </div>
                            <p>المرتب : {Team.salary}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            {Lavel()}
                            <p>عدد المشاريع المنفذه : {Team.numProject}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 16 16">
                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                            <p>تاريخ الانضمام : {Team.dateOfJoin}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-building-fill" viewBox="0 0 16 16">
                                    <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                            <p>العنوان : {Team.address}</p>
                        </div>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                                </svg>
                            </div>
                            <p>المؤهل : {Team.qualification}</p>
                        </div>
                        <div className='w-16 h-16'>
                            <img src={`${Domin}/public/${Team.imgIDCard}`} className='w-16 h-16 hover:w-80 hover:h-80 hover:absolute bottom-20'  alt='...'/>
                        </div>
                    </div>

                    <div className="h-[2px] bg-gray-600 w-full"></div>

                    <div className="flex w-full justify-center gap-4">
                        <Link href={`/dashboard/team/${params.id}/edit`} className="px-6 py-2 bg-gray-600 rounded-md font-bold flex gap-3 items-center hover:bg-blue-500">
                            <p>تعديل</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </Link>
                        <button onClick={() => { setDisCheck(true) }} className="px-6 py-2 bg-gray-600 rounded-md font-bold flex gap-3 items-center hover:bg-red-500">
                            <p>حذف</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            )
        }
    }

    function funLoader(){
        if(loader){
            return(
                <Loader/>
            )
        }
    }

    return (
        <div >
            {checkDelete()}
            <CheckAdmin />
            {getTeam()}
            {funLoader()}
        </div>
    )
}