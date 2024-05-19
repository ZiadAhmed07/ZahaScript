"use client"

import Image from "next/image";
import bgImg from "/public/images/facts-bg.jpg";
import Avatar from "/public/images/3.png";
import Link from "next/link";
import Svg from "@/components/Svg/svg";
import { getCookie, deleteCookie } from 'cookies-next';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Domin } from "@/api/data";
import SimLoader from "@/components/simLoader/SimLoader";


export default function page() {


  const [Order, setOrder] = useState(null)
  let userData = false
  if (getCookie("userData")) {
    const user = JSON.parse(getCookie("userData"))
    userData = user
  }
  const router = useRouter()

  function FunLogout() {
    deleteCookie('userData')
    location.reload()
    router.replace('/user/login')

    axios({
      url: `${Domin}/api/auth/logout`,
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${userData.token}`,
      }
    }).then(() => {
      router.replace('/user/login')
    })
  }

  useEffect(() => {

    if (userData) {
      axios({
        url: `${Domin}/api/auth/showAll/order/${userData.id}`,
        method: 'get',
        headers: {
          'Authorization': `Bearer ${userData.token}`
        }
      }).then((res) => { setOrder(res.data.data.orders) })
    }

  }, [])

  function getOrders() {
    if (!Order) {
      return (
        <div className="w-full h-[350px] px-10 py-6">
          <div className="rounded-md flex items-center justify-center bg-gray-600 w-full h-full">
            <SimLoader />
          </div>
        </div>

      )
    }
    if (Order?.length === 0) {
      return (
        <div className="h-[300px] w-full px-10 py-6">
          <div className=" bg-gray-600 w-full h-full rounded-md flex items-center justify-center flex-col gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-file-earmark-excel" viewBox="0 0 16 16">
              <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
            <p> لم يتم تنفيذ اى مشاريع حتى الان</p>
            <Link href={'/order'} className='text-blue-500 hover:text-gray-100 rounded-md font-blod hover:bg-blue-500 py-2 px-6'>انشاء مشروع الان</Link>
          </div>
        </div>
      )
    }
    if (Order) {

      return (
        <div className="w-full overflow-x-auto">
          <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-slate-900">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                اسم المشروع
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                السعر
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                الحالة
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                تاريخ البدء
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                تاريخ الانتهاء
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-end"></th>
                        </tr>
                      </thead>

                      {
                        Order?.map((el) => {
                          function styleCondition() {
                            if (el.condition === "Pending") {
                              return (
                                <span className="block px-6 py-2">
                                  <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-gray-500 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock-fill text-gray-50" viewBox="0 0 16 16">
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    </svg>
                                    {"جارى المعالجه"}
                                  </span>
                                </span>
                              )
                            }

                            if (el.condition === "Approved") {
                              return (
                                <span className="block px-6 py-2">
                                  <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-cart-check-fill text-gray-50" viewBox="0 0 16 16">
                                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                                    </svg>
                                    {"تم الموافقه"}
                                  </span>
                                </span>
                              )
                            }

                            if (el.condition === "In Progress") {
                              return (
                                <span className="block px-6 py-2">
                                  <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-hourglass-split text-gray-50" viewBox="0 0 16 16">
                                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                                    </svg>
                                    {"قيد التنفيذ"}
                                  </span>
                                </span>
                              )
                            }

                            if (el.condition === "Completed") {
                              return (
                                <span className="block px-6 py-2">
                                  <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle-fill text-gray-50" viewBox="0 0 16 16">
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    {"أكتمل"}
                                  </span>
                                </span>
                              )
                            }

                            if (el.condition === "Cancelled") {
                              return (
                                <span className="block px-6 py-2">
                                  <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-400 text-gray-50 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-circle-fill text-gray-50" viewBox="0 0 16 16">
                                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                    </svg>
                                    {"تم الالغاء"}
                                  </span>
                                </span>
                              )
                            }
                          }

                          return (
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700" key={el.id}>
                              <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                <td className="size-px whitespace-nowrap">
                                  <button
                                    type="button"
                                    className="block"
                                    data-hs-overlay="#hs-ai-invoice-modal"
                                  >
                                    <span className="block px-6 py-2">
                                      <span className=" text-sm text-blue-500 dark:text-blue-500">
                                        {el.nameProject}
                                      </span>
                                    </span>
                                  </button>
                                </td>
                                <td className="size-px whitespace-nowrap">
                                  <button
                                    type="button"
                                    className="block"
                                    data-hs-overlay="#hs-ai-invoice-modal"
                                  >
                                    <span className="block px-6 py-2">
                                      <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {el.price} EG
                                      </span>
                                    </span>
                                  </button>
                                </td>
                                <td className="size-px whitespace-nowrap">
                                  <button
                                    type="button"
                                    className="block"
                                    data-hs-overlay="#hs-ai-invoice-modal"
                                  >
                                    {styleCondition()}
                                  </button>
                                </td>
                                <td className="size-px whitespace-nowrap">
                                  <button
                                    type="button"
                                    className="block"
                                    data-hs-overlay="#hs-ai-invoice-modal"
                                  >
                                    <span className="block px-6 py-2">
                                      <span className="text-sm text-gray-600 dark:text-gray-400">
                                        10 Jan 2023
                                      </span>
                                    </span>
                                  </button>
                                </td>
                                <td className="size-px whitespace-nowrap">
                                  <button
                                    type="button"
                                    className="block"
                                    data-hs-overlay="#hs-ai-invoice-modal"
                                  >
                                    <span className="block px-6 py-2">
                                      <span className="text-sm text-gray-600 dark:text-gray-400">
                                        28 Dec 2024
                                      </span>
                                    </span>
                                  </button>
                                </td>
                                <td className="size-px whitespace-nowrap">
                                  <Link
                                    href={el.urlProject || "#"}
                                    type="button"
                                    className="block"
                                    data-hs-overlay="#hs-ai-invoice-modal"
                                  >
                                    <span className="px-6 py-1.5">
                                      <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        <svg
                                          className="flex-shrink-0 size-4"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                          <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                        View
                                      </span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  function returnPage() {
    if (userData) {
      return (
        <div className="w-full h-full bg-gray-700 rounded-md flex items-center justify-start flex-col ">
          <div className="flex flex-col w-full items-center gap-3">
            <Image
              src={Avatar}
              alt={"..."}
              className="w-32 h-32 rounded-full -translate-y-16"
            />
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <h2 className="text-xl">{userData?.name}</h2>
            </div>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
              </svg>
              <p className="text-lg">{userData?.email}</p>
            </div>

            <div className="gap-3 flex justify-center mt-12">
              <Link href={"/"} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <span>الصفحة الرئيسية</span>
              </Link>
              <button onClick={() => { FunLogout() }} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"> تسجيل الخروج</button>
            </div>
          </div>

          <div className="h-1 bg-gray-600 mx-auto w-3/4 rounded-md my-6"></div>

          {getOrders()}

        </div>
      )
    }
    if (!userData) {
      return (
        <div className="w-full h-screen bg-gray-700 rounded-md flex flex-col gap-3 items-center justify-center ">
          <p className="font-bold text-lg">يجب عليك التسجيل اولا</p>
          <Link href={"/user/login"} className="px-6 py-2 rounded-sm bg-gray-600 hover:bg-gray-500">تسجيل الدخول</Link>
        </div>
      )
    }
  }

  return (
    <main className="w-full h-screen right-0">
      <div className="w-ful h-screen">
        <div className="w-full h-72 bg-blue-500">
          <Image src={bgImg} alt={"..."} priority className={"w-full h-full"} />

          <div className="w-full min-h-screen sm:p-6  absolute top-28 ">
            <Svg />
            {returnPage()}
          </div>
        </div>
      </div>
    </main>
  );
}
