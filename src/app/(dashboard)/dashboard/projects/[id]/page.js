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
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const [ListAddTeam, setListAddTeam] = useState(false)
    const [ListAddUser, setListAddUser] = useState(false)
    const [teamIds, setTeamIds] = useState([])
    const [price, setPrice] = useState('')
    const [userId, setUserId] = useState('')


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
            return (
                <div className="w-full p-6 bg-gray-700 rounded-md flex flex-col gap-3 relative" >
                    <p className="font-bold text-2xl">{projects.nameProject}</p>
                    <p className="text-lg overflow-auto h-[150px] ">{projects.description}</p>
                    <div className='absolute top-3 left-0 w-[200px] h-[50px] flex justify-center items-center gap-4'>
                        <div className="flex gap-0 bg-gray-600 rounded-md p-2 cursor-pointer" onClick={() => { setListAddTeam(true) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <p>الفريق</p>
                        </div>
                        <div className="flex gap-2 bg-gray-600 rounded-md p-2 cursor-pointer" onClick={() => { setListAddUser(true) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-currency-exchange" viewBox="0 0 16 16">
                                <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
                            </svg>
                            <p>بيع</p>
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <div className="flex gap-1">
                        {
                            projects.teams?.map((el) => {
                                return (
                                    <Link key={el.id} href={`/dashboard/team/${el.id}`}>
                                        <img alt={el.name} title={el.name} src={`${Domin}/public/${el.photo}`} className='w-10 h-10 rounded-full' />
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <div className="flex gap-2 flex-wrap">
                        {
                            projects.skills?.map((el) => {
                                return (
                                    <p key={el} className="p-2 rounded-sm bg-gray-600">{el}</p>
                                )
                            })
                        }
                    </div>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <div className="flex justify-between px-2">
                        <p>تاريخ البدايه : {projects.startingDate}</p>
                        <p>تاريخ النهايه : {projects.endingDate}</p>
                    </div>
                    <div className="flex justify-between px-2">
                        <p>نوع البيع : {projects.saleType}</p>
                        <p>السعر : {projects.price}</p>
                    </div>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <a href={projects.urlProject} target={"_blank"} className="text-lg text-blue-400 bg-gray-600 p-2 rounded-sm">رابط المشروع : {projects.urlProject}</a>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <div className="flex flex-col gap-2">
                        {
                            projects.users?.map((el , index) => {
                                return (
                                    <Link key={index} href={`/dashboard/orders/`}>
                                        <div className="flex gap-2 bg-gray-600 rounded-md p-2" title={el.email}>
                                            <div className="w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center font-bold text-xl text-gray-50">
                                                {el.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold">{el.name}</p>
                                                <p>{el.price}$</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="w-full h-[2px] bg-gray-600"></div>
                    <div className="flex flex-wrap gap-3">
                        {
                            projects.imgProject?.map((el) => {
                                return (
                                    <img key={el} alt="..." src={`${Domin}/public/${el}`} className='w-[100px] h-[100px] border' />
                                )
                            })
                        }
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
                        <button onClick={() => { deleteProjetc() }} className="flex gap-2 py-2 px-6 items-center bg-gray-600 hover:bg-red-500 rounded-sm">
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

    function deleteProjetc() {
        setLoader(true)

        axios({
            method: 'delete',
            url: `${Domin}/api/admin/softDelete/project/${params.id}`,
            headers: {
                'Authorization': `Bearer ${usreData.token}`
            }
        }).then(() => {
            setLoader(false)
            router.replace("/dashboard/projects")
            return toast.success("تم حذف المشروع")
        }).catch(() => {
            setLoader(false)
            return toast.error("حدث خطا ما حاول مجددا")
        })
    }

    function funLoader() {
        if (loader) {
            return (
                <Loader />
            )
        }
    }

    function AddTeam() {
        if (ListAddTeam) {
            return (
                <div>
                    <form onSubmit={PostTeam} className='p-6 bg-gray-600 rounded-md absolute flex flex-col gap-3 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] z-10'>
                        <label>id فريق العمل</label>
                        <input required onChange={(e) => { setTeamIds(e.target.value) }} placeholder="team_id : 1,2,3" type={'text'} className='p-2 rounded-md' />
                        <input type={'submit'} value='ارسال' className="bg-blue-500 py-2 rounded-md text-gray-50 font-bold" />
                    </form>
                    <div className='fixed w-full h-full bg-gray-700/40 top-0 right-0' onClick={() => { setListAddTeam(false) }}></div>
                </div>
            )
        }
    }

    function PostTeam(e) {
        e.preventDefault()
        setLoader(true)
        const stringTeamIds = teamIds.split(',')
        const numberTeamIds = stringTeamIds?.map(Number)

        axios({
            method: 'post',
            url: `${Domin}/api/admin/addTeams/to/project`,
            data: {
                project_id: params.id,
                team_ids: numberTeamIds,
            },
            headers: {
                'Authorization': `Bearer ${usreData.token}`
            }
        }).then(() => {
            setLoader(false)
            router.replace('/dashboard/projects')
            return toast.success('تم اضافه الفريق بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            return toast.error('حدث خطا ما ! حاول مجددا')
        })

    }

    function AddUser() {
        if (ListAddUser) {
            return (
                <div>
                    <form onSubmit={PostUser} className='p-6 bg-gray-600 rounded-md absolute flex flex-col gap-3 top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] z-10'>
                        <label>id المستخدم</label>
                        <input onChange={(e) => { setUserId(e.target.value) }} required placeholder="user_id : 1" type={'text'} className='p-2 rounded-md' />
                        <label>السعر</label>
                        <input onChange={(e) => { setPrice(e.target.value) }} required type={'number'} className='p-2 rounded-md' />
                        <input type={'submit'} value='ارسال' className="bg-blue-500 py-2 rounded-md text-gray-50 font-bold" />
                    </form>
                    <div className='fixed w-full h-full bg-gray-700/40 top-0 right-0' onClick={() => { setListAddUser(false) }}></div>
                </div>
            )
        }
    }

    function PostUser(e) {
        e.preventDefault()
        setLoader(true)

        axios({
            method: 'post',
            url: `${Domin}/api/admin/addUsers/to/project/${params.id}`,
            data: {
                user_id: userId,
                price: price,
                numberOfSales: 1
            },
            headers: {
                'Authorization': `Bearer ${usreData.token}`
            }
        }).then(() => {
            setLoader(false)
            router.replace('/dashboard/projects')
            return toast.success('تم اضافه المستخدم بنجاح بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            return toast.error('حدث خطا ما ! حاول مجددا')
        })

    }

    return (
        <div>
            <CheckAdmin />
            {funLoader()}
            {getProjects()}
            {AddTeam()}
            {AddUser()}
        </div>
    )
}