"use client"

import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import CheckAdmin from "../_components/checkAdmin"
import Loader from "@/components/loader/loader"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"




export default function Comment() {

    const [Comments, setComments] = useState(null)
    const [dis, setDis] = useState(false)
    const [loader, setLoader] = useState(false)
    const [id, setId] = useState(null)
    const router = useRouter()


    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    function funLoader() {
        if (loader) {
            return (<Loader />)
        }
    }

    useEffect(() => {
        axios({
            url: `${Domin}/api/admin/showAll/contact`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setComments(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function getComments() {
        if (!Comments) {
            return (
                <div className=" w-full h-[400px] flex items-center justify-center bg-gray-700 rounded-md">
                    <SimLoader />
                </div>
            )
        }
        if (Comments.length === 0) {
            return (
                <div className="h-[500px] w-full flex flex-col items-center justify-center gap-3 bg-gray-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-excel-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64" />
                    </svg>
                    <p className="font-bold">لم يتم العثور علي تعليقات</p>
                </div>
            )
        }
        if (Comments) {
            return (
                <div className="flex gap-6 flex-col">
                    <p className="text-2xl font-bold"># رسائل المستخدمين</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            Comments?.map((el) => {
                                return (
                                    <div key={el.id} onClick={() => { setDis(true); setId(el.id) }} className="bg-gray-700 rounded-md h-[200px] flex flex-col justify-between hover:bg-gray-600">
                                        <div className="p-3">
                                            <div className="h-[105px] flex flex-col gap-2 overflow-hidden">
                                                {
                                                    el.contacts?.map((el, idx) => {
                                                        return (
                                                            <div className="py-1 px-3 rounded-md bg-blue-500" key={idx}>
                                                                <p>{el.message}</p>
                                                                <p className="flex gap-2 items-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                                                    </svg>
                                                                    {el.phoneNumber}
                                                                </p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-3 border-t-[1px] border-solid border-gray-300 p-3">
                                            <div className="w-[40px] h-[40px] rounded-full bg-blue-500 font-bold flex items-center justify-center text-gray-200 text-lg">{el.name[0]}</div>
                                            <div>
                                                <p>{el.name}</p>
                                                <p>{el.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }

    function winUserMess() {
        if (dis) {
            const filter = Comments?.filter((el) => {
                return el.id === id
            })

            return (
                <div className={`fixed top-0 flex right-0 w-full h-screen z-[200] items-center justify-center`}>
                    <div className="bg-gray-900/70 w-full h-full" onClick={() => { setDis(false) }}></div>
                    <div className="bg-gray-600 rounded-lg p-6 absolute z-10 w-[400px] h-auto">
                        {filter[0].contacts?.map((el) => {
                            return (
                                <div key={el.id} className="bg-blue-500 rounded-md overflow-hidden my-2">
                                    <div className="flex justify-between p-3 items-center bg-blue-600">
                                        <p className="flex gap-2 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
                                            {el.phoneNumber}</p>
                                        <svg onClick={()=>{deleteMess(el.id)}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="hover:text-red-500 bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg p-3">{el.message}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }

    }

    function deleteMess( id) {
        setLoader(true)
        axios({
            url: `${Domin}/api/admin/softDelete/contact/${id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then(() => {
            setLoader(false)
            setTimeout(()=>{
                location.reload()
            },1000)
            return toast.success("تم حذف الرساله ")
        }).catch(() => {
            setLoader(false)
            return toast.error("حدث خطأ ما!")
        })
    }


    return (
        <div>
            {funLoader()}
            <CheckAdmin />
            {getComments()}
            {winUserMess()}
        </div>

    )
}