"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from "/public/logo.png"
import { usePathname, useRouter } from 'next/navigation'

import "./header.css"
import Avatar from "/public/images/3.png"
import { getCookie, deleteCookie } from 'cookies-next';
import axios from 'axios'
import { Domin } from '@/api/data'

export default function HeaderCom() {

    const pathName = usePathname()
    const router = useRouter()
    const [dis, setDis] = useState("none")
    const [num, setNum] = useState(0)
    const [height, setHeight] = useState(60)
    const [bgNavbar, setBgNavbar] = useState("bg-gray-900")
    const [butUser, setButUser] = useState("hidden")

    let userData = false

    if (getCookie("userData")) {
        const user = JSON.parse(getCookie("userData"))
        userData = user
    }

    useEffect(() => {
        if (pathName.startsWith("/dashboard") ||
            pathName.startsWith("/user")
        ) {
            setDis("hiddenItem")
        }
        else {
            setDis("none")
        }
    }, [pathName])

    useEffect(() => {
        if (pathName === "/") {
            setBgNavbar("")
        }
        else {
            setBgNavbar("bg-gray-900")
        }
    }, [pathName])

    function openNav() {
        if (num == 0) {
            setHeight(400)
            setNum(1)
        }
        if (num == 1) {
            setHeight(60)
            setNum(0)
        }
    }

    function FunLogout() {
        deleteCookie('userData')
        buttonUser()
        buttonUserInMob()

        axios({
            url: `${Domin}/api/auth/logout`,
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${userData.token}`,
            }
        }).then(()=>{
            router.replace("/user/login")
        }).catch((err)=>{
            console.log(err)
        })
    }


    function buttonUser() {
        if (userData) {
            return (
                <div className="relative" >
                    <Image src={Avatar} alt="..." className="w-[45px] h-[45px] rounded-full" onClick={() => { setButUser("flex") }} />
                    <div onClick={() => { setButUser("hidden") }} className={`w-[45px] h-[45px] bg-gray-600 rounded-full absolute top-0 ${butUser} items-center justify-center text-2xl text-gray-200`}>
                        X
                    </div>
                    <div className={`bg-gray-200 absolute flex-col ${butUser} w-fit left-0 top-16 rounded-md`}>
                        <Link className='p-3 px-6 hover:bg-gray-300' href={'/user'}>
                            <p className='text-gray-900'>{userData?.name}</p>
                            <p className='text-gray-900'>{userData?.email}</p>
                        </Link>
                        <div className='border-gray-400 border-solid border-t-2 p-1 px-6 hover:bg-gray-300'>
                            <button onClick={() => { FunLogout() }}>تسجيل الخروج</button>
                        </div>
                    </div>
                </div>
            )
        }
        if (!userData) {
            return (
                <>
                    <Link onClick={()=>{setPrevUrl()}} className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:my-6 " href="/user/login">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        تسجيل الدخول
                    </Link>
                    <Link onClick={()=>{setPrevUrl()}} className=" flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href="/user/Register">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        انشاء حساب
                    </Link>
                </>
            )
        }
    }

    function buttonUserInMob() {
        if (userData) {
            return (
                <div className='mt-4'>
                    <Link href={"/user"}>
                    <div className='flex'>
                        <Image src={Avatar} alt="..." className="w-[45px] h-[45px] rounded-full" />
                        <div className='mr-6'>
                            <p>{userData?.name}</p>
                            <p>{userData?.email}</p>
                        </div>
                    </div>
                    </Link>
                    <div className='mt-2'>
                        <button className='text-gray-200 hover:text-gray-400' onClick={() => { FunLogout() }}>تسجيل الخروج</button>
                    </div>

                </div>
            )
        }
        if (!userData) {
            return (
                <div className='max-sm:mt-6'>
                    <Link onClick={()=>{setPrevUrl()}} className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href="/user/login">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        تسجيل الدخول
                    </Link>
                    <Link onClick={()=>{setPrevUrl()}} className="mt-6 flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href="/user/Register">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        انشاء حساب
                    </Link>
                </div>
            )
        }
    }

    function setPrevUrl(){
        localStorage.setItem("prevUrl" , pathName)
    }

    return (
        <div id="header" className={`${dis} ${bgNavbar}`} style={{ height: `${height}px` }}>
            <nav className='container'>
                <div id="logo">
                    <Link href={"/"}> <Image src={Logo} alt="..." width={60} height="auto" /> </Link>
                </div>
                <ul>
                    {[
                        { id: 1, title: " الصفحة الرئيسية", link: "/" },
                        /*{id:1,title:"أعمالنا",link:"/myprojects"},*/
                        { id: 2, title: "فريق العمل", link: "/team" },
                        { id: 3, title: "أنضم الينا", link: "/jobs" },
                        { id: 4, title: "تواصل معنا", link: "/contact" },
                    ].map((el) => {
                        return (
                            <li key={el.id}><Link className='font-bold' href={el.link}> {el.title} </Link></li>
                        )
                    })}

                </ul>
                <ul>
                    {buttonUser()}
                </ul>

                <label className="hamburger">
                    <input type="checkbox" onClick={() => { openNav() }} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
                <ul id="navInMobileScreen">
                    {
                        [
                            { id: 1, naem: "الصفحه الرئيسية", link: "/" },
                            /*{naem: "اعمالنا", link:"/myprojects"},*/
                            { id: 2, naem: "فريق العمل ", link: "team" },
                            { id: 3, naem: "أنضم الينا ", link: "jobs" },
                            { id: 4, naem: "تواصل معنا", link: "contact" },
                        ].map((el) => {
                            return (
                                <li key={el.id}><Link href={el.link}>
                                    <span>{el.naem} </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                                    </svg>
                                </Link>
                                </li>
                            )
                        })
                    }
                    {
                        buttonUserInMob()
                    }
                </ul>

            </nav>
        </div>
    )
}
