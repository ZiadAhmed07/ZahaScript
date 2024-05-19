"use client"

import { Domin } from "@/api/data"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CheckAdmin from "../_components/checkAdmin"
import Loader from "@/components/loader/loader"

export default function Comment() {

    const [Comments, setComments] = useState(null)
    const [bestComments, setBestComments] = useState(null)
    const [dis, setDis] = useState(false)
    const [id, setId] = useState(null)
    const [loader, setLoader] = useState(false)

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(() => {
        axios({
            url: `${Domin}/api/admin/showAll/comment`,
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        Comments?.map((el, idx) => {
                            return (
                                <div key={idx} onClick={() => { setDis(true); setId(el.id) }} className="bg-gray-700 rounded-md h-[200px] flex flex-col justify-between hover:bg-gray-600">
                                    <div className="p-3">
                                        <div className="h-[105px] flex flex-col gap-2 overflow-hidden">
                                            {
                                                el.comments?.map((el, idx) => {
                                                    return (
                                                        <p key={idx} className="bg-blue-500 py-1 px-3 rounded-md">{el.comment}</p>
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
            )
        }
    }

    function winComment() {

        if (dis) {

            const filter = Comments?.filter((el) => {
                return el.id === id
            })

            return (
                <div className={`fixed top-0 flex right-0 w-full h-screen z-[200] items-center justify-center`}>
                    <div className="bg-gray-900/70 w-full h-full" onClick={() => { setDis(false), setId(null) }}></div>
                    <div className="bg-gray-600 rounded-lg p-6 absolute z-10 w-[400px] h-auto">
                        {filter[0].comments?.map((el) => {
                            return (
                                <div key={el.id} className="my-2 bg-blue-500 rounded-md overflow-hidden">
                                    <div className="flex gap-3 justify-end w-full bg-blue-600 p-2">
                                        <svg onClick={(e) => { postBestComments(e, el.id) }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="hover:text-yellow-500 bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg onClick={(e)=>{deleteComments(e , el.id)}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="hover:text-red-500 bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </div>
                                    <p className="p-2">{el.comment}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }

    function deleteComments(e, id) {
        e.preventDefault()
        setLoader(true)
        axios({
            url: `${Domin}/api/admin/softDelete/comment/${id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then(() => {
            location.reload()
            setLoader(false)
            return toast.success("تم حذف التعليق ")
        }).catch(() => {
            setLoader(false)
            return toast.error("حدث خطأ ما!")
        })
    }


    useEffect(() => {
        axios({
            url: `${Domin}/api/admin/showAll/bestComment`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setBestComments(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function getBestComments() {
        if (!bestComments) {
            return (
                <div className=" w-full h-[400px] flex items-center justify-center bg-gray-700 rounded-md">
                    <SimLoader />
                </div>
            )
        }
        if (bestComments.length === 0) {
            return (
                <div className="h-[500px] w-full flex flex-col items-center justify-center gap-3 bg-gray-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-excel-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64" />
                    </svg>
                    <p className="font-bold">لم يتم تحديد اى تعليقات</p>
                </div>
            )
        }
        if (bestComments) {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        bestComments?.map((el, idx) => {
                            return (
                                <div key={idx} className="bg-gray-700 rounded-md h-[200px] flex flex-col justify-between hover:bg-gray-600 relative">
                                    <div onClick={(e) => { deleteBestComments(e, el.id) }} className="absolute bottom-4 left-4 hover:bg-red-500 bg-gray-500 rounded-full w-[35px] h-[35px] p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="hover:text-red-900 bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </div>
                                    <div className="p-3">
                                        <div className="h-[105px] flex flex-col gap-2 overflow-auto">
                                            <p className="bg-blue-500 py-1 px-3 rounded-md h-full flex gap-2 items-center text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="text-yellow-500 bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            {el.comment.comment}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 border-t-[1px] border-solid border-gray-300 p-3">
                                        <div className="w-[40px] h-[40px] rounded-full bg-blue-500 font-bold flex items-center justify-center text-gray-200 text-lg">{el.comment.user.name[0]}</div>
                                        <div>
                                            <p>{el.comment.user.name}</p>
                                            <p>{el.comment.user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

    }

    function postBestComments(e, id) {
        e.preventDefault()
        setLoader(true)
        axios({
            url: `${Domin}/api/admin/create/bestComment`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            },
            data: {
                comment_id: id
            }
        }).then(() => {
            location.reload()
            setLoader(false)
            return toast.success("تم اضافه التعليق الى المفضله")
        }).catch(() => {
            setLoader(false)
            return toast.error("حدث خطأ ما!")
        })
    }

    function deleteBestComments(e, id) {
        e.preventDefault()
        setLoader(true)
        axios({
            url: `${Domin}/api/admin/softDelete/bestComment/${id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then(() => {
            location.reload()
            setLoader(false)
            return toast.success("تم حذف التعليق من المفضله")
        }).catch(() => {
            setLoader(false)
            return toast.error("حدث خطأ ما!")
        })
    }

    function funLoader() {
        if (loader) {
            return (<Loader />)
        }
    }


    return (
        <div>
            <div className="flex gap-6 flex-col">
                <p className="text-2xl font-bold"># تعليقات المستخدمين</p>
                <CheckAdmin />
                {getComments()}
                {winComment()}
            </div>
            <div className="mt-12 flex gap-6 flex-col">
                <p className="text-2xl font-bold"># التعليقات المميزه</p>
                {getBestComments()}
                {funLoader()}
            </div>
        </div>

    )
}