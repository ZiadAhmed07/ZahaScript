'use client'

import { Domin } from "@/api/data"
import Loader from "@/components/loader/loader"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CheckAdmin from "../../../_components/checkAdmin"




export default function newProject({params}) {
    
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    const [data, setData] = useState({
        nameProject: '',
        skills: '',
        numberOfSales: '',
        price: '',
        startingDate: '',
        endingDate: '',
        team: '',
        imgProject: [],
        urlProject: '',
        user_id: '',
        description: '',
        saleType: 'multi selling',
    })

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(()=>{
        axios({
            method:'get',
            url:`${Domin}/api/admin/edit/project/${params.id}`,
            headers:{
                'Authorization':`Bearer ${userData.token}`
            }
        }).then((res)=>{
            const data = res.data.data
            setData({
                nameProject : data.nameProject,
                skills : data.skills,
                startingDate : data.startingDate,
                endingDate : data.endingDate,
                price : data.price,
                numberOfSales : data.numberOfSales,
                imgProject : data.imgProject,
                urlProject : data.urlProject,
                saleType : data.saleType,
                description : data.description
            })
        })
    },[])

    function funLoader() {
        if (loader) {
            return (<Loader />)
        }
    }

    function postData(e) {
        e.preventDefault()
        setLoader(true)

        const formData = new FormData()
        formData.append('nameProject', data.nameProject)
        formData.append('skills', data.skills)
        formData.append('numberOfSales', data.numberOfSales)
        formData.append('price', data.price)
        formData.append('startingDate', data.startingDate)
        formData.append('endingDate', data.endingDate)
        formData.append('urlProject', data.urlProject)
        formData.append('user_id', data.user_id)
        formData.append('description', data.description)
        formData.append('saleType', data.saleType)


        Array.from(data.imgProject).forEach(file => {
            formData.append('imgProject[]', file)
        })

        axios({
            method: 'post',
            url: `${Domin}/api/admin/update/project/${params.id}`,
            headers: {
                'Authorization': `Bearer ${userData.token}`,
                'Content-Type': 'multipart/form-data'
            },
            data: formData

        }).then((res) => {
            console.log(res)
            setLoader(false)
            router.replace(`/dashboard/projects/${params.id}`)
            return toast.success("تم تعديل المشروع")
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            return toast.error("حدث خطأ ما ")
        })
    }


    return (
        <div className="bg-gray-700 rounded-md p-6 flex flex-col gap-6">
            {funLoader()}
            <CheckAdmin/>
            <div className="flex justify-center ">
                <p className="font-bold text-xl">تعديل المشروع</p>
            </div>
            <div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={postData}>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">اسم المشروع</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />

                                </svg>
                            </div>
                            <input  type={'text'} value={data.nameProject || ""} onChange={(e) => { setData({ ...data, nameProject: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">المهارات</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />

                                </svg>
                            </div>
                            <input  type={'text'} value={data.skills || ""} onChange={(e) => { setData({ ...data, skills: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-lg">تاريخ البدء</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />

                                </svg>
                            </div>
                            <input  type={'date'} value={data.startingDate || ""} onChange={(e) => { setData({ ...data, startingDate: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">تاريخ الانتهاء</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                            <input  type={'date'} value={data.endingDate || ""}  onChange={(e) => { setData({ ...data, endingDate: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">عدد المبيعات</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />

                                </svg>
                            </div>
                            <input  type={'number'} value={data.numberOfSales || ""} onChange={(e) => { setData({ ...data, numberOfSales: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">السعر</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />

                                </svg>
                            </div>
                            <input  type={'number'} value={data.price || ""} onChange={(e) => { setData({ ...data, price: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">صور المشروع</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />

                                </svg>
                            </div>
                            <input  accept="image/*" multiple type={'file'}  onChange={(e) => { setData({ ...data, imgProject: e.target.files}) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">رابط المشروع</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />

                                </svg>
                            </div>
                            <input  type={'url'} value={data.urlProject || ""} onChange={(e) => { setData({ ...data, urlProject: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg">نوع البيع</label>
                        <div className="w-full h-10 justify-center flex gap-10 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <div>
                                <label htmlFor="MultiSelling">متعدد</label>
                                <input id="MultiSelling" type={'radio'} name='x' value={'multi selling'} onChange={(e) => { setData({ ...data, saleType: e.target.value }) }} />
                            </div>
                            <div>
                                <label htmlFor="singleSelling">منفرد</label>
                                <input type={'radio'} id="SingleSelling" name="x" value={'single selling'} onChange={(e) => { setData({ ...data, saleType: e.target.value }) }} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:col-start-1 md:col-end-3">
                        <label className="text-lg">الوصف</label>
                        <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                            <textarea value={data.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }} className="bg-gray-800 border-none w-full outline-none text-gray-200 p-4 h-48" />
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-6 md:col-start-1 md:col-end-3">
                        <button className="flex gap-3 items-center bg-gray-600 rounded-md py-2 px-6 hover:bg-blue-500" type="submit">
                            <p>تعديل</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}