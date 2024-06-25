"use client"
import { Domin } from "@/api/data"
import Loader from "@/components/loader/loader"
import SimLoader from "@/components/simLoader/SimLoader"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


export default function DeleteTeam(){

    const [data , setData] = useState(null)
    const [loader , setLoader] = useState(false)

    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(()=>{
        axios({
            method:'get',
            url:`${Domin}/api/admin/showDeleted/team`,
            headers:{
                'Authorization':`Bearer ${userData.token}`
            }
        }).then((res)=>{
            setData(res.data.data)
        })
    },[])

    function getData() {
        if (!data) {
            return (
                <div className="bg-gray-700 flex justify-center items-center w-full h-[200px]">
                    <SimLoader/>
                </div>
            )
        }
        if (data.length === 0) {
            return (
                <div className='bg-gray-700 rounded-md w-full h-[100px] flex flex-col items-center justify-center gap-3'>
                    <p className='font-bold text-xl'> لايوجد مهملات لهذا الجدول </p>
                </div>
            )
        }
        if (data) {
            return (
                <div className='w-full min-w-[600px] h-auto bg-gray-700 rounded-md text-center'>
                    <ul className='grid grid-cols-5 text-gray-50 font-bold p-2 border-b-2 border-gray-500 border-solid'>
                        <li>الاسم</li>
                        <li className="col-start-2 col-end-4">الوظيفه</li>
                        <li>تاريخ الانضمام</li>
                    </ul>
                    {
                        data?.map((el) => {
                            return (
                                <ul key={el.id} className='w-full min-w-96 h-auto grid grid-cols-5 text-gray-200 p-2 hover:bg-gray-600 items-center relative'>
                                    <li>{el.name}</li>
                                    <li className="col-start-2 col-end-4">{el.job}</li>
                                    <li>{el.dateOfJoin}</li>
                                    <li className="flex items-center justify-end gap-3 pl-2">
                                        <button onClick={()=>{deleteTeam(el.id)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hover:text-red-500 bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </button>
                                        <button onClick={()=>{restTeam(el.id)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hover:text-blue-500 bi bi-folder-symlink-fill" viewBox="0 0 16 16">
                                                <path d="M13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2l.04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3M2.19 3q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293L7.586 3zm9.608 5.271-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            )
        }

    }

    function deleteTeam(id){
        setLoader(true)

        axios({
            method:'delete',
            url:`${Domin}/api/admin/forceDelete/team/${id}`,
            headers:{
                'Authorization':`Bearer ${userData.token}`
            }
        }).then((res)=>{
            location.reload()
            return toast.success("تم حذف العضو نهائيا")
        }).catch(()=>{

            return toast.error("حدث خطا ما! ")
        })
    }

    function restTeam(id){
        setLoader(true)

        axios({
            method:'get',
            url:`${Domin}/api/admin/restore/team/${id}`,
            headers:{
                'Authorization':`Bearer ${userData.token}`
            }
        }).then(()=>{
            location.reload()
            return toast.success("تم اعاده العضو بنجاح")
        }).catch(()=>{
            return toast.error("حدث خطا ما !")
        })
    }

    function funLoader(){
        if(loader){
            return(<Loader/>)
        }
    }

    return(
        <div className="w-full overflow-auto">
            <p className="mb-2 font-bold text-2xl text-gray-200"># الفريق</p>
            {getData()}
            {funLoader()}
        </div>
    )
}