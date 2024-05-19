"use client"
import { Domin } from "@/api/data"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import CheckAdmin from "../../_components/checkAdmin"
import SimLoader from "../../../../../components/simLoader/SimLoader"
import { toast } from "react-toastify"
import Loader from "@/components/loader/loader"
import { useRouter } from "next/navigation"


export default function Oreder({ params }) {

    const [order, setOrder] = useState(null)
    const [dis, setDis] = useState(false)
    const [oneOrder, setOneOrder] = useState("")
    const [loader , setLoader] = useState(false)
    const router = useRouter()

    const [nameOrder, setNameOrder] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [price, setPrice] = useState("")
    const [condition, setCondition] = useState("")
    const [description, setDescription] = useState("")
    const [startingDate, setStartingDate] = useState("")
    const [endingDate, setEndingDate] = useState("")
    const [url, setUrl] = useState("")


    let userData = false
    if (getCookie('userData')) {
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(() => {
        axios({
            url: `${Domin}/api/admin/showAll/order`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${userData.token}`
            }
        }).then((res) => {
            setOrder(res.data.data)
        })
    }, [])

    const fiter = order?.filter((el) => {
        return el.id == params.id
    })

    function FunStyleCon(el) {
        if (el === "Pending") {
            return (
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-500 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock-fill text-gray-50" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    </svg>
                    {"طلب جديد"}
                </span>
            )
        }
        if (el === "Approved") {
            return (
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-cart-check-fill text-gray-50" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    {"تم الموافقه"}
                </span>
            )
        }
        if (el === "In Progress") {
            return (
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-hourglass-split text-gray-50" viewBox="0 0 16 16">
                        <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                    </svg>
                    {"قيد التنفيذ"}
                </span>
            )
        }
        if (el === "Completed") {
            return (
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle-fill text-gray-50" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    {"أكتمل"}
                </span>
            )
        }
        if (el === "Cancelled") {
            return (
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-circle-fill text-gray-50" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                    {"تم الالغاء"}
                </span>
            )
        }

    }

    function EditOrder(e) {
        e.preventDefault();
        setLoader(true)
        axios({
            method:'post',
            url:`${Domin}/api/admin/update/order/${oneOrder.id}`,
            headers:{
                'Authorization':`Bearer ${userData.token}`
            },
            data:{
                phoneNumber : phoneNumber,
                nameProject : nameOrder,
                price : price,
                condition : condition,
                description : description,
                user_id : params.id,
                urlProject : url,
                startingDate : startingDate,
                endingDate : endingDate,
            }
        }).then(()=>{
            setLoader(false)
            location.reload()
            return toast.success("تم التعديل بنجاح")
        }).catch(()=>{
            setLoader(false)
            return toast.error("حدث خطأ ما")
        })
    }

    function FunWinEditOrder() {
        if (dis && oneOrder) {
            return (
                <div className={`fixed top-0 flex right-0 w-full h-screen z-[200] items-center justify-center`}>
                    <div className="bg-gray-900/70 w-full h-full" onClick={() => { setDis(false) , restValue() }}></div>
                    <div className="bg-gray-600 rounded-lg p-4 absolute z-10 w-[430px] h-auto">
                        <form onSubmit={(e) => { EditOrder(e) }} className="flex flex-col gap-2">
                            <input required value={nameOrder} type={"text"} placeholder={"اسم المشروع"} onChange={(el) => { setNameOrder(el.target.value) }} className="text-gray-200 px-3 py-1 bg-gray-700 rounded-md w-full" />
                            <input required value={phoneNumber} type={'number'} placeholder={"الهاتف"} onChange={(el) => { setPhoneNumber(el.target.value) }} className="text-gray-200 px-3 py-1 bg-gray-700 rounded-md w-full" />
                            <input required value={price} type={'number'} placeholder={"السعر"} onChange={(el) => { setPrice(el.target.value) }} className="text-gray-200 px-3 py-1 bg-gray-700 rounded-md w-full" />
                            <div className="grid grid-cols-3 gap-1 my-3">
                                <div>
                                    <label htmlFor="pen">جارى المعالجه</label>
                                    <input id="pen" type={"radio"} value={"Pending"} name='x' onChange={() => { setCondition("Pending") }} />
                                </div>
                                <div>
                                    <label htmlFor="app">تم الموافقه</label>
                                    <input id="app" type={"radio"} value={"Approved"} name='x' onChange={() => { setCondition("Approved") }} />
                                </div>
                                <div>
                                    <label htmlFor="inP">تحت التنفيذ</label>
                                    <input id="inP" type={"radio"} value={"In Progress"} name='x' onChange={() => { setCondition("In Progress") }} />
                                </div>
                                <div>
                                    <label htmlFor="com">اكتمل</label>
                                    <input id="com" type={"radio"} value={"Completed"} name='x' onChange={() => { setCondition("Completed") }} />
                                </div>
                                <div>
                                    <label htmlFor="can">تم الالغاء</label>
                                    <input id="can" type={"radio"} value={"Cancelled"} name='x' onChange={() => { setCondition("Cancelled") }} />
                                </div>
                            </div>
                            <textarea placeholder="الوصف" value={description || ""} onChange={(el) => { setDescription(el.target.value) }} className="text-gray-200 bg-gray-700 px-3 py-1 rounded-md min-h-[100px]"/>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between gap-3">
                                    <label>تاريخ البداء</label>
                                    <input type={"date"} value={startingDate || "" } onChange={(el) => { setStartingDate(el.target.value) }} className="text-gray-200 bg-gray-700 px-3 py-1 rounded-md"/>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <label>تاريخ الانتهاء</label>
                                    <input type={"date"} value={endingDate || ""} onChange={(el) => { setEndingDate(el.target.value) }} className="text-gray-200 bg-gray-700 px-3 py-1 rounded-md"/>
                                </div>
                            </div>
                            <input placeholder="Url" value={url || ""} type={"url"} onChange={(el) => { setUrl(el.target.value) }} className="text-gray-200 bg-gray-700 px-3 py-1 rounded-md"/>
                            <input type={"submit"} value="تعديل" className="text-gray-200 bg-gray-800 hover:bg-gray-900 px-3 py-1 rounded-md"/>
                        </form>
                    </div>
                </div>
            )
        }
    }

    function getOrder() {
        if (!order) {
            return (
                <div className="flex items-center justify-center w-full h-[500px] bg-gray-700 rounded-md">
                    <SimLoader />
                </div>
            )
        }
        if (order.length === 0) {
            return (
                <div className="flex items-center justify-center flex-col gap-4 w-full h-[500px] bg-gray-700 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                        <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <p>لا يوجد طلبات حتى الان</p>
                </div>
            )
        }
        if (order) {
            return (
                <div>
                    <div className="p-6 bg-gray-700 rounded-md mb-6">
                        <div className="flex flex-col items-center font-bold text-lg gap-1">
                            <div className="bg-orange-500 h-[60px] w-[60px] rounded-full mb-3 font-bold text-4xl text-gray-200 text-center pt-2">{fiter[0]?.name[0]}</div>
                            <p>id : {fiter[0]?.id}</p>
                            <p>الاسم  : {fiter[0]?.name}</p>
                            <p>البريد الالكتروني : {fiter[0]?.email}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            fiter[0].orders?.map((el) => {

                                return (
                                    <div key={el.id} className="p-4 bg-gray-700 rounded-md flex flex-col gap-1">
                                        <div className="flex justify-between items-center py-1 px-3 mb-4 ">
                                            {FunStyleCon(el.condition)}
                                            <div className="flex gap-3">
                                                <button onClick={() => { setDis(true), setOneOrder(el) , value()}} className="bg-gray-600 h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-blue-300 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square hover:text-blue-900" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                    </svg>
                                                </button>
                                                <button onClick={(e)=>{deleteOrder(e) ,setOneOrder(el) }} className="bg-gray-600 h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-red-300 hover:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill hover:text-red-900" viewBox="0 0 16 16">
                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 py-1 px-3 ">
                                            <p>اسم المشروع : {el.nameProject}</p>
                                            <p> الهاتف: {el.phoneNumber}</p>
                                            <p>السعر : {el.price}</p>
                                            <p>الحاله : {el.condition}</p>
                                        </div>
                                        <p className="py-1 px-3 w-full h-[100px] overflow-auto bg-gray-600">{el.description}</p>
                                        <div className="flex justify-between py-1 px-3">
                                            <p> البدء : {el.endingDate}</p>
                                            <p> الانتهاء : {el.startingDate}</p>
                                        </div>
                                        <a href={el.urlProject} target="_blank">
                                            <p className="py-1 px-3 text-blue-500 bg-gray-600 rounded-sm text-center">{el.urlProject}</p>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }

    function deleteOrder(e){
        e.preventDefault();

        axios({
            method:'delete',
            url:`${Domin}/api/admin/softDelete/order/${oneOrder.id}`,
            headers:{
                'Authorization':`Bearer ${userData.token}`
            },
        }).then(()=>{
            router.replace("/dashboard/orders")
            return toast.success("تم حذف الطلب بنجاح")
        }).catch((err)=>{
            console.log(err)
            return toast.error("حدث خطأ ما")
        })
    }

    function value(){
        if(oneOrder){
            setNameOrder(oneOrder.nameProject)
            setPhoneNumber(oneOrder.phoneNumber)
            setPrice(oneOrder.price)
            setCondition(oneOrder.condition)
            setDescription(oneOrder.description)
            setStartingDate(oneOrder.startingDate)
            setEndingDate(oneOrder.endingDate)
            setUrl(oneOrder.urlProject)
        }
    }

    function restValue(){
        setNameOrder('')
        setPhoneNumber('')
        setPrice('')
        setCondition('')
        setDescription('')
        setStartingDate('')
        setEndingDate('')
        setUrl('')
    }

    function funLoader(){
        if(loader){
            return(<Loader/>)
        }
    }

    return (
        <div>
            <CheckAdmin />
            {getOrder()}
            {FunWinEditOrder()}
            {funLoader()}
        </div>
    )
}