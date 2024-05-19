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
        if(el.link === pathName){
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
      </ul>
    </div>
  )
}
