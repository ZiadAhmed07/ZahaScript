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
import t from '../../../messages/translations'


export default function HeaderCom() {

    const pathName = usePathname()
    const router = useRouter()
    const [dis, setDis] = useState("none")
    const [num, setNum] = useState(0)
    const [height, setHeight] = useState(60)
    const [bgNavbar, setBgNavbar] = useState("bg-gray-900")
    const [butUser, setButUser] = useState("hidden")
    const [posstionButtonUser , setPosstionButtonUser] = useState('')
    const translations = t('Index', pathName.slice(1, 3))

    let userData = false
    if (getCookie("userData")) {
        const user = JSON.parse(getCookie("userData"))
        userData = user
    }


    useEffect(() => {

        if (pathName == "/en" || "/ar") {
            setBgNavbar("")
        }

        else {
            setBgNavbar("bg-gray-900")
        }
        FunPosstionButtonUser()
    }, [pathName])

    function openNav() {
        if (num == 0) {
            setHeight(440)
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
        }).then(() => {
            router.replace(`${pathName.slice(0, 3)}/user/login`)
        }).catch((err) => {
            console.log(err)
        })
    }


    function FunPosstionButtonUser(){
        if(pathName.slice(0,3) == '/ar' ){
            setPosstionButtonUser('left-10')
        }
        if(pathName.slice(0,3) == '/en' ){
            setPosstionButtonUser('right-10')
        }
    }


    function buttonUser() {
        if (userData) {
            return (
                <div>
                    <Image src={Avatar} alt="..." className="w-[45px] h-[45px] cursor-pointer rounded-full" onClick={() => { setButUser("flex") }} />
                    <div onClick={() => { setButUser("hidden") }} className={`w-full h-screen bg-gray-600/40 fixed top-0 left-0 ${butUser} items-center justify-center text-2xl text-gray-200`}></div>
                    <div className={`bg-gray-200 absolute flex-col gap-6 ${butUser} w-fit top-[75px] ${posstionButtonUser}  rounded-xl p-10`}>
                        <div className='flex flex-col items-center gap-1'>
                            <div className='text-gray-200 bg-orange-500 text-3xl font-bold p-6 w-10 h-10 flex items-center justify-center capitalize rounded-full'>{userData.name[0]}</div>
                            <p className='text-gray-700 text-xl'>{translations.navbar.user.welcome} {userData.name}</p>
                        </div>
                        <div className='border border-gray-300 border-solid rounded-xl p-6 flex flex-col gap-6'>
                            <div className='flex gap-2'>
                                <Image src={Avatar} alt='...' className="rounded-full w-10 h-10"></Image>
                                <div>
                                    <p className='text-gray-700'>{userData.name}</p>
                                    <p className='text-gray-700'>{userData.email}</p>
                                </div>
                            </div>
                            <div className='flex justify-around font-bold text-gray-600'>
                                <Link className='text-gray-600 hover:text-blue-500 text-sm' href={`${pathName.slice(0, 3)}/user`}>
                                    {translations.navbar.user.account}
                                </Link>
                                <button className='hover:text-blue-500 text-sm' onClick={() => { FunLogout() }}>{translations.navbar.user.logout}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (!userData) {
            return (
                <>
                    <Link onClick={() => { setPrevUrl() }} className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:my-6 " href={`${pathName.slice(0, 3)}/user/login`}>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        {translations.navbar.user.login}
                    </Link>
                    {/*
                    <Link onClick={()=>{setPrevUrl()}} className=" flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href="/user/Register">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        انشاء حساب
                    </Link>
                    */}
                </>
            )
        }
    }

    function buttonUserInMob() {
        if (userData) {
            return (
                <div className='mt-4'>
                    <Link href={`${pathName.slice(0, 3)}/user`}>
                        <div className='flex'>
                            <Image src={Avatar} alt="..." className="w-[45px] h-[45px] rounded-full" />
                            <div className='mr-6'>
                                <p>{userData?.name}</p>
                                <p>{userData?.email}</p>
                            </div>
                        </div>
                    </Link>
                    <div className='mt-2'>
                        <button className='text-gray-200 hover:text-gray-400' onClick={() => { FunLogout() }}>{translations.navbar.user.logout}</button>
                    </div>

                </div>
            )
        }
        if (!userData) {
            return (
                <div className='max-sm:mt-6'>
                    <Link onClick={() => { setPrevUrl() }} className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href={`${pathName.slice(0, 3)}/user/login`}>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        {translations.navbar.user.login}
                    </Link>
                    <Link onClick={() => { setPrevUrl() }} className="mt-6 flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href={`${pathName.slice(0, 3)}/user/Register`}>
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        {translations.navbar.user.register}
                    </Link>
                </div>
            )
        }
    }

    function setPrevUrl() {
        if (pathName == '/ar' || '/en') {
            localStorage.setItem("prevUrl", `/`)
        } else {
            localStorage.setItem("prevUrl", `${pathName.slice(0, 3)}/${pathName}`)
        }
    }


    function FunLang() {
        if (pathName.slice(0, 3) == "/ar") {
            return (
                <Link href={`/en${pathName.slice(3)}`} >En</Link>
            )
        }
        else {
            return (

                <Link href={`/ar${pathName.slice(3)}`}>Ar</Link>

            )
        }
    }



    return (
        <div id="header" className={`${dis} ${bgNavbar}`} style={{ height: `${height}px` }}>
            <nav className='container'>
                <div id="logo">
                    <Link href={"/"}> <Image src={Logo} alt="..." width={60} height="auto" /> </Link>
                </div>
                <ul>
                    {[
                        { id: 1, title: translations.navbar.home, link: `${pathName.slice(0, 3)}` },
                        /*{id:1,title:"أعمالنا",link:"/myprojects"},*/
                        { id: 2, title: translations.navbar.team, link: `${pathName.slice(0, 3)}/team` },
                        { id: 3, title: translations.navbar.job, link: `${pathName.slice(0, 3)}/jobs` },
                        { id: 4, title: translations.navbar.contact, link: `${pathName.slice(0, 3)}/contact` },
                    ].map((el) => {
                        return (
                            <li key={el.id}><Link className='font-bold' href={el.link}> {el.title} </Link></li>
                        )
                    })}

                </ul>
                <ul>
                    <div className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-globe absolute -z-10 opacity-50" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                        {FunLang()}
                    </div>
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
                            { id: 1, naem: translations.navbar.home , link: `${pathName.slice(0, 3)}` },
                            /*{naem: "اعمالنا", link:"/myprojects"},*/
                            { id: 2, naem: translations.navbar.team, link: `${pathName.slice(0, 3)}/team` },
                            { id: 3, naem: translations.navbar.job, link: `${pathName.slice(0, 3)}/jobs` },
                            { id: 4, naem: translations.navbar.contact, link: `${pathName.slice(0, 3)}/contact` },
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
                    <div className='flex items-center justify-start px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-globe absolute -z-10 opacity-50 translate-x-[2px]" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                        {FunLang()}
                    </div>
                    {
                        buttonUserInMob()
                    }
                </ul>

            </nav>
        </div>
    )
}
