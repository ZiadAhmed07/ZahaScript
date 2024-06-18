"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./links";


export default function Sitbar() {


  const pathName = usePathname()

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
    <div className="bg-gray-700 fixed top-0 right-0 h-screen w-[180px] max-md:hidden">
      <ul className='relative top-[100px] flex flex-col gap-3'>
        {FunLink()}
        <div className="w-full bg-gray-600 h-[2px]"></div>
        <Link href={"/"} className={`flex justify-between items-center text-3xl hover:bg-blue-500 px-4 py-1 text-gray-50`}>
          <p className="text-lg">خروج</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
          </svg>
        </Link>
      </ul>
    </div>
  )
}
