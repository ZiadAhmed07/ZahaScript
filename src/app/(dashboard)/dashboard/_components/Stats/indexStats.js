'use client'

import { Domin } from "@/api/data";
import SimLoader from "@/components/simLoader/SimLoader";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Stats from "./Stats";


export default function IndexStats(){

    const [data , setData] = useState('')

    let userData = false
    if(getCookie('userData')){
        const user = JSON.parse(getCookie('userData'))
        userData = user
    }

    useEffect(()=>{
        
        axios({
            method:'get',
            url:`${Domin}/api/admin/showAll/statistics`,
            headers:{
                'Authorization' : `bearer ${userData.token}`
            }
        }).then((res)=>{
            setData(res)
        })
    },[])

    function HtmlState(){
        if(!data){
            return(
                <div className="w-full h-[300px] rounded-md bg-gray-700 flex items-center justify-center">
                    <SimLoader/>
                </div>
            )
        }

        if(data){
            return(
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stats color={"bg-orange-500"} href={""} dis={' التعليقات'} title={data.data.Comments_count} icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
                    </svg>
                }/>
                <Stats color={"bg-blue-500"} href={""} dis={' المبيعات'} title={data.data.NumberSales_count} icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height='40' fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                  </svg>
                }/>
                <Stats color={"bg-purple-500"} href={""} dis={' المشاريع'} title={data.data.Projects_count} icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-box-seam-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                  </svg>
                }/>
                <Stats color={"bg-yellow-500"} href={""} dis={'المستخدمين'} title={data.data.Users_count} icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                }/>
            </div>
            )
        }
    }

    return(
        HtmlState()
    )
}