"use client"

import Svg from "@/components/Svg/svg"
import Link from "next/link"


export default function Error({ error, reset }) {
  return (

    <div className="relative bg-gray-900 h-screen">
      <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
      <Svg />

      <div className="relative z-10 ">
        <div className="flex items-center justify-center max-w-[85rem] h-screen mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-4xl font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              ZaHA Script
            </p>


            <div className="mt-5 max-w-2xl">
              <h3 className="block font-semibold text-gray-200 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                حدث خطأ ما!
              </h3>
            </div>


            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-400 dark:text-gray-400">رساله الخطأ : {error.message}</p>
            </div>


            <div className="mt-8 gap-3 flex justify-center">
              <button onClick={() => { reset() }} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                أعاده التحميل
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
              <Link className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-100 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
                الصفحه الرئيسية
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
