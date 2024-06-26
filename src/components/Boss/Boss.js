"use client"
import { Domin } from "@/api/data"
import axios from "axios"
import Image from "next/image"
import { useState, useEffect } from "react"


export default function Boss() {

    const [data, setData] = useState(false)

    useEffect(()=>{
        axios({
            method:'get',
            url:`${Domin}/api/user/showAll/team`,
        }).then((res)=>{
            const data = res.data.data
            const filter = data?.filter((el)=>{
                return el.Boss == 'Boss'
            })
            setData(filter)
        })
    },[])

    function HtmlBoss() {
        if (data) {
            return ( 
                data?.map((el , idx) => {
                    return (
                        <li key={idx}>
                            <div className="w-28 h-28 mx-auto">
                                <img
                                    src={`${Domin}/public/${el.photo}`}
                                    className="w-full h-full rounded-full"
                                    alt="..."
                                />
                            </div>
                            <div className="mt-2">
                                <h4 className="text-gray-200 font-bold text-lg">{el.name}</h4>
                                <p className="text-blue-600 text-lg font-bold">{el.job}</p>
                            </div>
                        </li>
                    )
                })
            )
        }
        else {
            return (
                [1, 2, 3].map((el , idx) => {
                    return (

                        <div key={idx} role="status" className= " max-w-sm p-4 border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 bg-gray-500/30 flex flex-col items-center">
                            <div  className=" flex items-center justify-center h-20 w-20 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48  mb-2.5"></div>
                            <span className="sr-only">Loading...</span>
                        </div>

                    )
                })
            )
        }
    }

    return (
        <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", width: "100%", gap: "30px" }}>
            {HtmlBoss()}
        </ul>
    )
}
