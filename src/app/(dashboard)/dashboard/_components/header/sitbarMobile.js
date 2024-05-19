"use client"

import Image from "next/image"
import { useState } from "react"
import Logo from "/public/logo.png"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "./links";



export default function SitbarMobile() {

  const pathName = usePathname()
  const [dis, setDis] = useState("hidden")

  function FunLink() {
    return (
      links.map((el, idx) => {
        let bg = ""
        if (el.link === pathName) {
          bg = "bg-blue-500"
        }
        return (
          <li key={idx}>
            <Link href={el.link} className={`flex justify-between items-center text-3xl ${bg} hover:bg-blue-500 px-4 py-1 text-gray-50`}>
              <p className="text-lg">{el.lable}</p>
              {el.svg}
            </Link>
          </li>
        )
      }))
  }

  return (
    <div>
      <div className="md:hidden h-full pt-3 ">
        <svg onClick={() => { setDis("flex") }} className="text-gray-200" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="hover:text-gray-500 bi bi-list-nested" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>
      <div onClick={() => { setDis("hidden") }} className={`fixed bg-gray-900/90 z-[200] h-screen w-full top-0 right-0 ${dis}`}></div>
      <div className={`fixed bg-gray-700 z-[201] h-screen w-[200px] top-0 right-0 ${dis} flex-col`}>
        <div className="p-6">
          <Image src={Logo} alt='...' className="w-16 h-10 "/>
        </div>
        <ul className='relative top-[40px] flex flex-col gap-3  w-full'>
          {FunLink()}
        </ul>
      </div>
    </div>
  )
}
