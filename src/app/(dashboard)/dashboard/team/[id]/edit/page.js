"use client"

import { useEffect, useState } from "react"
import CheckAdmin from "../../../_components/checkAdmin"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import Loader from "@/components/loader/loader"
import { toast } from "react-toastify"

export default function page({ params }) {

    const [loader, setLoader] = useState(false)
    const [data, setData] = useState(null)
    const router = useRouter()
    const [values, setValues] = useState({
        name: '',
        user_id: '',
        job: '',
        skills: '',
        numProject: '',
        address: '',
        phoneNumber: '',
        qualification: '',
        photo: '',
        imgIDCard: '',
        dateOfJoin: '',
        salary: ''

    })

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${Domin}/api/admin/edit/team/${params.id}`,
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setData(res.data.data)
            setValues({
                name: res.data.data.name,
                user_id: res.data.data.user.id,
                phoneNumber: res.data.data.phoneNumber,
                job: res.data.data.job,
                skills: res.data.data.skills,
                numProject: res.data.data.numProject,
                salary: res.data.data.salary,
                dateOfJoin: res.data.data.dateOfJoin,
                address: res.data.data.address,
                qualification: res.data.data.qualification
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function getData() {

        if (!data) {
            return (
                <div className="bg-gray-700 flex items-center justify-center h-[500px] rounded-md">
                    <SimLoader />
                </div>
            )
        }

        if (data) {

            return (
                <form onSubmit={(e) => { PostData(e) }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-x-6 gap-y-2 relative">
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">الصوره الشخصيه</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    </svg>
                                </div>
                                <input onChange={(e) => { setValues({ ...values, photo: e.target.value }) }} type={'file'} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">اسم الموظف</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="  bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </div>
                                <input value={values.name || ""} onChange={(e) => { setValues({ ...values, name: e.target.value }) }} type={"text"} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">id الموظف</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
                                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    </svg>
                                </div>
                                <input value={values.user_id || ""} onChange={(e) => { setValues({ ...values, user_id: e.target.value }) }} type={'number'} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">رقم الهاتف</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                </div>
                                <input value={values.phoneNumber || ""} onChange={(e) => { setValues({ ...values, phoneNumber: e.target.value }) }} type={'number'} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">الوظيفه</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                                    </svg>
                                </div>
                                <input value={values.job || ""} onChange={(e) => { setValues({ ...values, job: e.target.value }) }} type={"text"} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">المهارات</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
                                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                                        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1" />
                                    </svg>
                                </div>
                                <input value={values.skills || ""} onChange={(e) => { setValues({ ...values, skills: e.target.value }) }} type={"text"} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">عدد المشاريع المنفذه</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bi bi-award-fill" viewBox="0 0 16 16">
                                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                                    </svg>
                                </div>
                                <input value={values.numProject || ""} onChange={(e) => { setValues({ ...values, numProject: e.target.value }) }} type={'number'} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">المرتب</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                                    </svg>
                                </div>
                                <input value={values.salary || ""} onChange={(e) => { setValues({ ...values, salary: e.target.value }) }} type={'number'} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">تاريخ الانضمام</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 16 16">
                                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </div>
                                <input value={values.dateOfJoin || ""} onChange={(e) => { setValues({ ...values, dateOfJoin: e.target.value }) }} type={'date'} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">العنوان</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-building-fill" viewBox="0 0 16 16">
                                        <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </div>
                                <input value={values.address || ""} onChange={(e) => { setValues({ ...values, address: e.target.value }) }} type={"text"} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">المؤهل</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                                    </svg>
                                </div>
                                <input value={values.qualification || ""} onChange={(e) => { setValues({ ...values, qualification: e.target.value }) }} type={"text"} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-lg">صوره البطاقه الشخصيه</label>
                            <div className="w-full flex gap-3 border border-gray-600 border-solid items-center rounded-md overflow-hidden bg-gray-800">
                                <div className="bg-gray-900 border-l border-gray-600 border-solid p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
                                    </svg>
                                </div>
                                <input onChange={(e) => { setValues({ ...values, imgIDCard: e.target.value }) }} type={'file'} className="bg-gray-800 border-none w-full outline-none text-gray-200 px-2" />
                            </div>
                        </div>

                    </div>
                    <div className="w-full flex justify-center mt-6">
                        <button className="flex gap-3 items-center bg-gray-600 rounded-md py-2 px-6 hover:bg-blue-500" type="submit">
                            <p>تعديل</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                        </button>
                    </div>
                </form>
            )
        }
    }

    function funLoader() {
        if (loader) {
            return (
                <Loader />
            )
        }
    }

    async function PostData(e) {
        console.log(values)
        e.preventDefault()
        setLoader(true)
        axios({
            method: 'post',
            url: `${Domin}/api/admin/update/team/${params.id}`,
            headers: {
                'Authorization': `Bearer ${userData.token}`
            },
            data: values
        }).then((res) => {
            console.log(res)
            setLoader(false)
            router.replace(`/dashboard/team/${params.id}`)
            return toast.success("تم التعديل بنحاج")
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            return toast.error("حدث خطأ ما")
        })
    }


    return (
        <div className="bg-gray-700 min-h-[600px] rounded-md py-6 sm:px-20 px-6 flex flex-col items-center gap-6">
            <CheckAdmin />
            {funLoader()}
            <p className="font-bold text-xl">اضافه عضو جديد </p>
            {getData()}

        </div>
    )
}